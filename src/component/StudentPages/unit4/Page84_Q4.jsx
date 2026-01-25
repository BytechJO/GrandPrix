import React, { useState, useRef, useEffect } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import img1 from "../../../assets/unite4pages/SVG/P84Q4-1.svg";
import img2 from "../../../assets/unite4pages/SVG/P84Q4-2.svg";

/* 🔴 المسارات الصحيحة مع منطقة مسموحة لكل نقطة */
const correctPaths = {
  left: [
    { x: 0.1, y: 0.55, radius: 0.05 },   // منطقة بداية
    { x: 0.55, y: 0.55, radius: 0.05 },  // منطقة وسط
    { x: 0.55, y: 0.65, radius: 0.05 },  // منطقة نهاية
  ],
  
  right: [
    { x: 0.9, y: 0.44, radius: 0.05 },   // منطقة بداية
    { x: 0.56, y: 0.44, radius: 0.05 },  // منطقة وسط
    { x: 0.56, y: 0.47, radius: 0.05 },  // منطقة نهاية
  ],
};

// 🔧 إعدادات أكثر مرونة
const CHECK_CONFIG = {
  POINT_THRESHOLD: 0.08,      // الحد الأقصى للبعد عن نقطة التحكم
  PATH_THRESHOLD: 0.12,       // الحد الأقصى للبعد عن المسار بين النقاط
  MIN_POINTS: 5,              // الحد الأدنى لنقاط الرسم
  SMOOTHING_FACTOR: 3,        // عامل التبسيط
  DEBUG_MODE: true,           // وضع التصحيح لرؤية النقاط
};

const Page5_Q1_CleanAudio = () => {
  const canvasLeftRef = useRef(null);
  const canvasRightRef = useRef(null);
  const [canvasSize, setCanvasSize] = useState({ width: 500, height: 500 });

  const [drawing, setDrawing] = useState(false);
  const [paths, setPaths] = useState({ left: [], right: [] });
  const [score, setScore] = useState(null);
  const [currentSide, setCurrentSide] = useState(null);
  const [debugPoints, setDebugPoints] = useState({ left: [], right: [] });

  // 🔧 معالجة حجم Canvas
  useEffect(() => {
    const updateCanvasSize = () => {
      const imgElements = document.querySelectorAll('img[alt="map1"], img[alt="map2"]');
      if (imgElements.length > 0) {
        const rect = imgElements[0].getBoundingClientRect();
        setCanvasSize({
          width: Math.floor(rect.width),
          height: Math.floor(rect.height)
        });
      }
    };

    updateCanvasSize();
    window.addEventListener('resize', updateCanvasSize);
    
    const imgs = document.querySelectorAll('img');
    imgs.forEach(img => {
      img.onload = updateCanvasSize;
    });

    return () => {
      window.removeEventListener('resize', updateCanvasSize);
    };
  }, []);

  // 🎨 إعداد Canvas
  const setupCanvas = (canvas) => {
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    
    ctx.scale(dpr, dpr);
    ctx.lineWidth = 4;
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "#d32f2f";
    
    return ctx;
  };

  /* 📌 دالة للحصول على الإحداثيات */
  const getXY = (canvas, e) => {
    const rect = canvas.getBoundingClientRect();
    
    let clientX, clientY;
    
    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    // تحويل إلى إحداثيات نسبية (0-1)
    const x = (clientX - rect.left) / rect.width;
    const y = (clientY - rect.top) / rect.height;
    
    return { 
      x, y, 
      rawX: clientX - rect.left, 
      rawY: clientY - rect.top,
      pixelX: (clientX - rect.left) * (window.devicePixelRatio || 1),
      pixelY: (clientY - rect.top) * (window.devicePixelRatio || 1)
    };
  };

  /* 🎨 البدء في الرسم */
  const startDraw = (side, e) => {
    e.preventDefault();
    setDrawing(true);
    setCurrentSide(side);
    
    const canvas = side === "left" ? canvasLeftRef.current : canvasRightRef.current;
    const ctx = canvas.getContext("2d");
    const { rawX, rawY, x, y } = getXY(canvas, e);
    
    ctx.beginPath();
    ctx.moveTo(rawX, rawY);
    
    // بدء المسار الجديد
    const newPath = [{ x, y }];
    setPaths((prev) => ({
      ...prev,
      [side]: newPath
    }));
    
    // إذا كان وضع التصحيح فعالاً، أضف نقطة تصحيح
    if (CHECK_CONFIG.DEBUG_MODE) {
      setDebugPoints((prev) => ({
        ...prev,
        [side]: [...(prev[side] || []), { x, y, type: 'start' }]
      }));
    }
    
    draw(side, e);
  };

  const endDraw = () => {
    setDrawing(false);
    setCurrentSide(null);
  };

  const draw = (side, e) => {
    if (!drawing || currentSide !== side) return;

    const canvas = side === "left" ? canvasLeftRef.current : canvasRightRef.current;
    const ctx = canvas.getContext("2d");
    const { rawX, rawY, x, y } = getXY(canvas, e);

    ctx.lineTo(rawX, rawY);
    ctx.stroke();

    // إضافة النقطة إلى المسار
    setPaths((prev) => ({
      ...prev,
      [side]: [...prev[side], { x, y }]
    }));

    // إذا كان وضع التصحيح فعالاً، أضف نقطة تصحيح
    if (CHECK_CONFIG.DEBUG_MODE) {
      setDebugPoints((prev) => ({
        ...prev,
        [side]: [...(prev[side] || []), { x, y, type: 'path' }]
      }));
    }

    if (e.touches) e.preventDefault();
  };

  /* 🧠 التحقق من المسار بشكل أكثر ذكاءً */
  const checkPath = (userPath, correctPath, side) => {
    if (userPath.length < CHECK_CONFIG.MIN_POINTS) {
      console.log(`[${side}] المسار قصير جداً: ${userPath.length} نقاط فقط`);
      return false;
    }

    console.log(`[${side}] التحقق من المسار...`);
    console.log(`[${side}] نقاط المستخدم:`, userPath.length);
    console.log(`[${side}] نقاط المسار الصحيح:`, correctPath);

    // 1. التحقق من نقاط التحكم الرئيسية (يجب المرور بالقرب منها)
    const controlPointsStatus = [];
    
    for (let i = 0; i < correctPath.length; i++) {
      const targetPoint = correctPath[i];
      let minDistance = Infinity;
      let closestPoint = null;
      
      // البحث عن أقرب نقطة في مسار المستخدم
      for (const userPoint of userPath) {
        const distance = Math.sqrt(
          Math.pow(userPoint.x - targetPoint.x, 2) + 
          Math.pow(userPoint.y - targetPoint.y, 2)
        );
        
        if (distance < minDistance) {
          minDistance = distance;
          closestPoint = userPoint;
        }
      }
      
      const isNear = minDistance <= targetPoint.radius;
      controlPointsStatus.push({
        point: i + 1,
        required: targetPoint,
        closest: closestPoint,
        distance: minDistance,
        isNear: isNear
      });
      
      console.log(`[${side}] النقطة ${i + 1}: المسافة = ${minDistance.toFixed(3)} (مطلوب: < ${targetPoint.radius})`);
      
      // إذا كانت نقطة البداية أو النهاية ليست قريبة، فشل فوراً
      if ((i === 0 || i === correctPath.length - 1) && !isNear) {
        console.log(`[${side}] نقطة ${i === 0 ? 'البداية' : 'النهاية'} بعيدة جداً`);
        return false;
      }
    }

    // 2. التحقق من التسلسل (يجب المرور على النقاط بالترتيب)
    let currentTargetIndex = 0;
    let pointsInSequence = 0;
    
    for (const userPoint of userPath) {
      const targetPoint = correctPath[currentTargetIndex];
      const distance = Math.sqrt(
        Math.pow(userPoint.x - targetPoint.x, 2) + 
        Math.pow(userPoint.y - targetPoint.y, 2)
      );
      
      if (distance <= targetPoint.radius) {
        pointsInSequence++;
        // إذا كانت هذه ليست النقطة الأخيرة، انتقل للنقطة التالية
        if (currentTargetIndex < correctPath.length - 1) {
          currentTargetIndex++;
        }
      }
    }
    
    // يجب المرور على جميع نقاط التحكم بالترتيب
    const allPointsVisited = pointsInSequence >= correctPath.length;
    console.log(`[${side}] النقاط في التسلسل: ${pointsInSequence}/${correctPath.length}`);
    
    // 3. حساب نسبة النقاط القريبة من المسار
    let pointsNearPath = 0;
    const simplifiedPath = [];
    const step = Math.max(1, Math.floor(userPath.length / CHECK_CONFIG.SMOOTHING_FACTOR));
    
    for (let i = 0; i < userPath.length; i += step) {
      simplifiedPath.push(userPath[i]);
    }
    
    for (const userPoint of simplifiedPath) {
      let isNearAnyPoint = false;
      
      // التحقق من القرب من أي نقطة في المسار الصحيح
      for (const targetPoint of correctPath) {
        const distance = Math.sqrt(
          Math.pow(userPoint.x - targetPoint.x, 2) + 
          Math.pow(userPoint.y - targetPoint.y, 2)
        );
        
        if (distance <= CHECK_CONFIG.PATH_THRESHOLD) {
          isNearAnyPoint = true;
          break;
        }
      }
      
      // التحقق من القرب من الخطوط بين النقاط
      if (!isNearAnyPoint) {
        for (let i = 0; i < correctPath.length - 1; i++) {
          const p1 = correctPath[i];
          const p2 = correctPath[i + 1];
          
          // حساب المسافة من النقطة إلى الخط
          const distance = distanceToLineSegment(
            userPoint, p1, p2
          );
          
          if (distance <= CHECK_CONFIG.PATH_THRESHOLD) {
            isNearAnyPoint = true;
            break;
          }
        }
      }
      
      if (isNearAnyPoint) {
        pointsNearPath++;
      }
    }
    
    const ratio = pointsNearPath / simplifiedPath.length;
    console.log(`[${side}] نسبة النقاط على المسار: ${(ratio * 100).toFixed(1)}%`);
    
    // 4. الشروط النهائية
    const result = allPointsVisited && ratio >= 0.5;
    console.log(`[${side}] النتيجة: ${result ? 'صحيح ✓' : 'خطأ ✗'}`);
    
    return result;
  };

  /* 📏 دالة مساعدة: حساب المسافة من نقطة إلى قطعة خط */
  const distanceToLineSegment = (point, lineStart, lineEnd) => {
    const A = point.x - lineStart.x;
    const B = point.y - lineStart.y;
    const C = lineEnd.x - lineStart.x;
    const D = lineEnd.y - lineStart.y;

    const dot = A * C + B * D;
    const lenSq = C * C + D * D;
    let param = -1;
    
    if (lenSq !== 0) {
      param = dot / lenSq;
    }

    let xx, yy;

    if (param < 0) {
      xx = lineStart.x;
      yy = lineStart.y;
    } else if (param > 1) {
      xx = lineEnd.x;
      yy = lineEnd.y;
    } else {
      xx = lineStart.x + param * C;
      yy = lineStart.y + param * D;
    }

    const dx = point.x - xx;
    const dy = point.y - yy;
    
    return Math.sqrt(dx * dx + dy * dy);
  };

  /* 📊 التحقق من الإجابة مع عرض تفاصيل */
  const checkAnswer = () => {
    console.clear();
    console.log("=== بدء التحقق ===");
    
    const leftCorrect = checkPath(paths.left, correctPaths.left, "left");
    const rightCorrect = checkPath(paths.right, correctPaths.right, "right");

    const correctCount = [leftCorrect, rightCorrect].filter(Boolean).length;
    setScore({ correct: correctCount, total: 2 });

    // عرض النقاط للمساعدة في التصحيح
    if (CHECK_CONFIG.DEBUG_MODE) {
      console.log("نقاط المسار الأيسر:", paths.left);
      console.log("نقاط المسار الأيمن:", paths.right);
    }

    if (correctCount === 2) {
      ValidationAlert.success("Excellent!", "Tous les chemins sont corrects");
    } else if (correctCount === 1) {
      ValidationAlert.error("Partiellement correct", "Un seul chemin est correct");
    } else {
      ValidationAlert.error(
        "0/2",
        "Vérifiez que vous passez par tous les points dans l'ordre"
      );
    }
  };

  /* 👁️ عرض الإجابة الصحيحة مع المناطق المسموحة */
  const drawCorrectPath = (side, canvasRef, path) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    const rect = canvas.getBoundingClientRect();
    
    // مسح Canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // إعادة إعداد Canvas
    setupCanvas(canvas);
    
    // رسم المناطق المسموحة (دوائر)
    path.forEach((p, i) => {
      const actualX = p.x * rect.width;
      const actualY = p.y * rect.height;
      const radius = p.radius * rect.width;
      
      ctx.beginPath();
      ctx.fillStyle = i === 0 ? "rgba(76, 175, 80, 0.2)" : 
                     i === path.length - 1 ? "rgba(244, 67, 54, 0.2)" : 
                     "rgba(255, 152, 0, 0.2)";
      ctx.arc(actualX, actualY, radius, 0, Math.PI * 2);
      ctx.fill();
      
      // رسم حدود الدوائر
      ctx.beginPath();
      ctx.strokeStyle = i === 0 ? "#4caf50" : 
                       i === path.length - 1 ? "#f44336" : 
                       "#ff9800";
      ctx.lineWidth = 2;
      ctx.arc(actualX, actualY, radius, 0, Math.PI * 2);
      ctx.stroke();
    });
    
    // رسم المسار الصحيح
    ctx.beginPath();
    ctx.strokeStyle = "#2e7d32";
    ctx.lineWidth = 4;
    
    path.forEach((p, i) => {
      const actualX = p.x * rect.width;
      const actualY = p.y * rect.height;
      
      if (i === 0) {
        ctx.moveTo(actualX, actualY);
      } else {
        ctx.lineTo(actualX, actualY);
      }
    });
    
    ctx.stroke();
    
    // رسم نقاط التحكم
    path.forEach((p, i) => {
      const actualX = p.x * rect.width;
      const actualY = p.y * rect.height;
      
      ctx.beginPath();
      ctx.fillStyle = i === 0 ? "#4caf50" : 
                     i === path.length - 1 ? "#f44336" : 
                     "#ff9800";
      ctx.arc(actualX, actualY, 8, 0, Math.PI * 2);
      ctx.fill();
      
      // تسمية النقاط
      ctx.fillStyle = "#000";
      ctx.font = "bold 14px Arial";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(
        i === 0 ? "DÉBUT" : i === path.length - 1 ? "FIN" : `ÉTAPE ${i}`,
        actualX,
        actualY - 20
      );
    });
  };

  const showAnswerFunc = () => {
    drawCorrectPath("left", canvasLeftRef, correctPaths.left);
    drawCorrectPath("right", canvasRightRef, correctPaths.right);
  };

  const resetExercise = () => {
    [canvasLeftRef, canvasRightRef].forEach((ref) => {
      const canvas = ref.current;
      if (!canvas) return;
      
      const ctx = canvas.getContext("2d");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      setupCanvas(canvas);
    });
    
    setPaths({ left: [], right: [] });
    setDebugPoints({ left: [], right: [] });
    setScore(null);
  };

  // إعداد Canvas عند التحميل
  useEffect(() => {
    if (canvasLeftRef.current && canvasRightRef.current) {
      setupCanvas(canvasLeftRef.current);
      setupCanvas(canvasRightRef.current);
    }
  }, [canvasSize]);

  // 🎯 عرض نقاط التصحيح إذا كان الوضع فعالاً
  useEffect(() => {
    if (CHECK_CONFIG.DEBUG_MODE) {
      console.log("نقاط التصحيح - اليسار:", debugPoints.left);
      console.log("نقاط التصحيح - اليمين:", debugPoints.right);
    }
  }, [debugPoints]);

  return (
    <div className="page-wrapper1 flex flex-col items-center gap-6 p-6">
      {score && <ScoreCardEnhanced score={score} />}

      {/* 🎯 التعليمات المفصلة */}
        <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
      >
        <span style={{ backgroundColor: "#d47176", color: "#white" }} className="ex-A">D</span>
        <span style={{ color: "black" }} className="number-of-q">4</span>
Réécoute l’exercice 3 et dessine le chemin.      </header>

      {/* 🖼️ الصور */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-center">
        {/* LEFT */}
        <div className="relative">
          <img 
            src={img1} 
            alt="map1" 
            className="w-full max-w-[500px]" 
            style={{ width: canvasSize.width, height: canvasSize.height }}
          />
          <canvas
            ref={canvasLeftRef}
            width={canvasSize.width}
            height={canvasSize.height}
            className="absolute top-0 left-0 w-full h-full"
            onMouseDown={(e) => startDraw("left", e)}
            onMouseMove={(e) => draw("left", e)}
            onMouseUp={endDraw}
            onMouseLeave={endDraw}
            onTouchStart={(e) => startDraw("left", e)}
            onTouchMove={(e) => draw("left", e)}
            onTouchEnd={endDraw}
            style={{
              touchAction: 'none',
              cursor: 'crosshair'
            }}
          />
        </div>

        {/* RIGHT */}
        <div className="relative">
          <img 
            src={img2} 
            alt="map2" 
            className="w-full max-w-[500px]" 
            style={{ width: canvasSize.width, height: canvasSize.height }}
          />
          <canvas
            ref={canvasRightRef}
            width={canvasSize.width}
            height={canvasSize.height}
            className="absolute top-0 left-0 w-full h-full"
            onMouseDown={(e) => startDraw("right", e)}
            onMouseMove={(e) => draw("right", e)}
            onMouseUp={endDraw}
            onMouseLeave={endDraw}
            onTouchStart={(e) => startDraw("right", e)}
            onTouchMove={(e) => draw("right", e)}
            onTouchEnd={endDraw}
            style={{
              touchAction: 'none',
              cursor: 'crosshair'
            }}
          />
        </div>
      </div>
<div className="spaces"></div>
      {/* 🔘 الأزرار */}
      <div className="action-buttons-container flex flex-wrap gap-4 mt-6 justify-center">
        <button onClick={resetExercise} className="try-again-button px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300">
          Recommencer ↻
        </button>
        <button onClick={showAnswerFunc} className="show-answer-btn px-6 py-2 bg-blue-100 rounded-lg hover:bg-blue-200">
          Voir les zones ✓
        </button>
        <button onClick={checkAnswer} className="check-button2 px-6 py-2 bg-green-100 rounded-lg hover:bg-green-200">
          Vérifier ✓
        </button>
      </div>

   
    </div>
  );
};

export default Page5_Q1_CleanAudio;