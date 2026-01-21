import React, { useState, useRef, useEffect } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import background from "../../../assets/unite4pages/SVG/P84-2.svg";

import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U2Audio/U2Q4.mp3";

/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  0: "tout droit",
  1: "gauche",
  2: "traversez",
  3: "au coin de",
  4: "à droite",
  5: "tout droit",
  6: "devant",
  7: "traversez",
};

// إحداثيات الخطوط الصحيحة (يجب تعديلها بناءً على صورتك)
const CORRECT_LINES = [
  [
    { x: 100, y: 150 },  // نقطة البداية للخط الأول
    { x: 300, y: 150 },  // نقطة النهاية للخط الأول
  ],
  [
    { x: 300, y: 150 },  // نقطة البداية للخط الثاني
    { x: 300, y: 350 },  // نقطة النهاية للخط الثاني
  ]
];

const Page5_Q1_CleanAudio = () => {
  const audioRef = useRef(null);
  const canvasRef = useRef(null);
  const containerRef = useRef(null);
  const [lines, setLines] = useState([]);
  const [isDrawing, setIsDrawing] = useState(false);
  const [currentLine, setCurrentLine] = useState([]);
  const [imageSize, setImageSize] = useState({ width: 800, height: 600 });

  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const [showCaption, setShowCaption] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [inputs, setInputs] = useState({});
  const [score, setScore] = useState(null);
  const [lineError, setLineError] = useState(null);

  // تحميل الصورة وضبط حجمها
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      const maxWidth = 800;
      const maxHeight = 600;
      
      let width = img.width;
      let height = img.height;
      
      if (width > maxWidth) {
        height = (height * maxWidth) / width;
        width = maxWidth;
      }
      if (height > maxHeight) {
        width = (width * maxHeight) / height;
        height = maxHeight;
      }
      
      setImageSize({ width, height });
      initializeCanvas(width, height);
    };
    img.src = background;
  }, []);

  // تهيئة Canvas
  const initializeCanvas = (width, height) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    canvas.width = width;
    canvas.height = height;
    
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.onload = () => {
      ctx.drawImage(img, 0, 0, width, height);
      redrawLines(ctx);
    };
    
    img.src = background;
  };

  // إعادة رسم جميع الخطوط
  const redrawLines = (ctx) => {
    lines.forEach(line => {
      if (line.length > 1) {
        ctx.beginPath();
        ctx.moveTo(line[0].x, line[0].y);
        
        for (let i = 1; i < line.length; i++) {
          ctx.lineTo(line[i].x, line[i].y);
        }
        
        ctx.strokeStyle = lineError ? '#FF0000' : '#0000FF';
        ctx.lineWidth = 4;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
      }
    });
  };

  // بدء الرسم
  const startDrawing = (e) => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    setIsDrawing(true);
    setCurrentLine([{ x, y }]);
    setLineError(null);
  };

  // أثناء الرسم
  const draw = (e) => {
    if (!isDrawing) return;

    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    
    const x = (e.clientX - rect.left) * scaleX;
    const y = (e.clientY - rect.top) * scaleY;

    const newLine = [...currentLine, { x, y }];
    setCurrentLine(newLine);

    const ctx = canvas.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(currentLine[currentLine.length - 1].x, currentLine[currentLine.length - 1].y);
    ctx.lineTo(x, y);
    ctx.strokeStyle = '#0000FF';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.stroke();
  };

  // إنهاء الرسم
  const stopDrawing = () => {
    if (!isDrawing) return;

    setIsDrawing(false);
    if (currentLine.length > 1) {
      const newLines = [...lines, currentLine];
      setLines(newLines);
    }
    setCurrentLine([]);
  };

  // التحقق من صحة الخطوط
  const checkLines = () => {
    if (lines.length === 0) {
      setLineError("يرجى رسم خطين على الأقل");
      markLinesAsIncorrect();
      return false;
    }

    const drawnSegments = lines.map(line => {
      if (line.length < 2) return null;
      return {
        start: line[0],
        end: line[line.length - 1]
      };
    }).filter(Boolean);

    if (drawnSegments.length < 2) {
      setLineError("يرجى رسم خطين مستقيمين على الأقل");
      markLinesAsIncorrect();
      return false;
    }

    let isCorrect = true;
    
    for (let i = 0; i < Math.min(drawnSegments.length, CORRECT_LINES.length); i++) {
      const drawn = drawnSegments[i];
      const correct = CORRECT_LINES[i];
      
      const startDistance = Math.sqrt(
        Math.pow(drawn.start.x - correct[0].x, 2) + 
        Math.pow(drawn.start.y - correct[0].y, 2)
      );
      
      const endDistance = Math.sqrt(
        Math.pow(drawn.end.x - correct[1].x, 2) + 
        Math.pow(drawn.end.y - correct[1].y, 2)
      );

      if (startDistance > 50 || endDistance > 50) {
        isCorrect = false;
        break;
      }
    }

    if (!isCorrect) {
      setLineError("الخط غير صحيح! حاول مرة أخرى.");
      markLinesAsIncorrect();
      return false;
    }

    setLineError(null);
    return true;
  };

  // تعليم الخطوط كخاطئة (باللون الأحمر)
  const markLinesAsIncorrect = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      lines.forEach(line => {
        if (line.length > 1) {
          ctx.beginPath();
          ctx.moveTo(line[0].x, line[0].y);
          
          for (let i = 1; i < line.length; i++) {
            ctx.lineTo(line[i].x, line[i].y);
          }
          
          ctx.strokeStyle = '#FF0000';
          ctx.lineWidth = 4;
          ctx.lineCap = 'round';
          ctx.stroke();
        }
      });
    };
    img.src = background;
  };

  // مسح جميع الخطوط
  const clearLines = () => {
    setLines([]);
    setLineError(null);
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
    };
    img.src = background;
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const captions = [
    { start: 5.2, end: 6.5, text: "Grand Prix A1" },
    { start: 6.5, end: 8.5, text: "Unité 2 À" },
    { start: 8.5, end: 10.3, text: "l'école Section" },
    { start: 10.3, end: 12.1, text: "A Se préparer" },
    { start: 12.1, end: 13.4, text: "Exercice" },
    { start: 13.4, end: 14.8, text: "4 Écoute" },
    { start: 14.8, end: 15.8, text: "et écris" },
    { start: 15.8, end: 16.5, text: "l'information" },
    { start: 16.5, end: 17.3, text: "manquante." },
    { start: 19.0, end: 20.8, text: "Salut ma chérie," },
    { start: 20.8, end: 22.6, text: "comment ça va ?" },
    { start: 22.6, end: 23.7, text: "Bonjour maman," },
    { start: 23.7, end: 24.4, text: "ça va bien." },
    { start: 25.4, end: 25.9, text: "Tu es prête" },
    { start: 25.9, end: 27.7, text: "pour l'école ?" },
    { start: 27.7, end: 28.6, text: "Oui, mais j'ai" },
    { start: 28.6, end: 29.1, text: "besoin de" },
    { start: 29.1, end: 29.4, text: "quelques" },
    { start: 29.4, end: 29.9, text: "fournitures" },
    { start: 29.9, end: 30.5, text: "scolaires." },
    { start: 31.6, end: 32.3, text: "Bon, allons" },
    { start: 32.3, end: 32.9, text: "au magasin." },
    { start: 35.0, end: 35.8, text: "Alors, de quoi" },
    { start: 35.8, end: 37.7, text: "as-tu besoin ?" },
    { start: 37.7, end: 38.4, text: "J'ai besoin" },
    { start: 38.4, end: 39.0, text: "de crayons" },
    { start: 39.0, end: 39.7, text: "de couleurs." },
    { start: 40.5, end: 42.0, text: "Et ?" },
    { start: 42.0, end: 42.8, text: "J'ai besoin" },
    { start: 42.8, end: 43.6, text: "d'un cahier." },
    { start: 44.2, end: 45.4, text: "As-tu besoin" },
    { start: 45.4, end: 47.1, text: "d'un stylo ?" },
    { start: 47.1, end: 48.3, text: "Non, j'ai déjà" },
    { start: 48.3, end: 49.5, text: "un stylo, mais" },
    { start: 49.5, end: 50.2, text: "j'ai besoin d'un" },
    { start: 50.2, end: 51.1, text: "compas et d'une" },
    { start: 51.1, end: 51.6, text: "trousse." },
    { start: 52.8, end: 54.5, text: "C'est tout ?" },
    { start: 54.5, end: 55.4, text: "Oui, c'est tout" },
    { start: 55.4, end: 55.9, text: "ce dont j'ai" },
    { start: 55.9, end: 56.5, text: "besoin pour" },
    { start: 56.5, end: 56.9, text: "le moment." },
  ];

  const updateCaption = (time) => {
    const index = captions.findIndex(
      (cap) => time >= cap.start && time <= cap.end
    );
    setActiveIndex(index !== -1 ? index : null);
  };

  const handleInputChange = (index, value) => {
    setInputs({
      ...inputs,
      [index]: value,
    });
  };

  const normalizeString = (str) => {
    return str
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const checkAnswer = () => {
    // التحقق من الخطوط أولاً
    const linesCorrect = checkLines();
    
    if (!linesCorrect) {
      // إذا كانت الخطوط غير صحيحة، لا نتحقق من النصوص
      ValidationAlert.error(
        "الخطوط غير صحيحة!",
        "يرجى تصحيح الخطوط أولاً ثم المحاولة مرة أخرى."
      );
      return;
    }

    let correctCount = 0;

    Object.keys(correctAnswers).forEach((key) => {
      const userAnswer = inputs[key] ? normalizeString(inputs[key]) : "";
      const correctAnswer = normalizeString(correctAnswers[key]);

      if (userAnswer === correctAnswer) {
        correctCount++;
      }
    });

    const total = Object.keys(correctAnswers).length;
    setScore({ correct: correctCount, total });

    if (correctCount === total) {
      ValidationAlert.success(
        `ممتاز! (${correctCount}/${total})`,
        "جميع الإجابات صحيحة والخطوط مرسومة بشكل صحيح!"
      );
    } else if (correctCount === 0) {
      ValidationAlert.info(
        `جميع الإجابات غير صحيحة (${correctCount}/${total})`,
        "حاول مرة أخرى!"
      );
    } else {
      ValidationAlert.error(
        `لديك ${correctCount} إجابة صحيحة من أصل ${total}`,
        "تقريباً!"
      );
    }
  };

  const showAnswerFunc = () => {
    setInputs(correctAnswers);
    
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      
      CORRECT_LINES.forEach(line => {
        if (line.length > 1) {
          ctx.beginPath();
          ctx.moveTo(line[0].x, line[0].y);
          ctx.lineTo(line[1].x, line[1].y);
          ctx.strokeStyle = '#00FF00';
          ctx.lineWidth = 4;
          ctx.lineCap = 'round';
          ctx.stroke();
        }
      });
    };
    img.src = background;
  };

  const resetExercise = () => {
    setInputs({});
    setScore(null);
    clearLines();
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
      {/* Header */}
      <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
      >
        <span style={{ backgroundColor: "#d47176", color: "#white" }} className="ex-A">D</span>
        <span style={{ color: "black" }} className="number-of-q">3</span>
        Écoute et écris l'information manquante.
      </header>

      {/* Audio Player */}
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div className="audio-popup-read" style={{ width: "30%" }}>
          <div className="audio-inner player-ui">
            <audio
              ref={audioRef}
              src={CD6_Pg8_Instruction1_AdultLady}
              onTimeUpdate={(e) => {
                const time = e.target.currentTime;
                setCurrent(time);
                updateCaption(time);
              }}
              onLoadedMetadata={(e) => setDuration(e.target.duration)}
            />
            <div className="top-row">
              <span className="audio-time">
                {new Date(current * 1000).toISOString().substring(14, 19)}
              </span>
              <input
                type="range"
                className="audio-slider"
                min="0"
                max={duration}
                value={current}
                onChange={(e) => {
                  audioRef.current.currentTime = e.target.value;
                  updateCaption(Number(e.target.value));
                }}
                style={{
                  background: `linear-gradient(to right, #430f68 ${
                    (current / duration) * 100
                  }%, #d9d9d9ff ${(current / duration) * 100}%)`,
                }}
              />
              <span className="audio-time">
                {new Date(duration * 1000).toISOString().substring(14, 19)}
              </span>
            </div>

            <div className="bottom-row flex justify-between items-center">
              <div
                className={`round-btn ${showCaption ? "active" : ""}`}
                style={{ position: "relative" }}
                onClick={() => setShowCaption(!showCaption)}
              >
                <TbMessageCircle size={36} />
                <div
                  className={`caption-inPopup ${showCaption ? "show" : ""}`}
                  style={{ top: "100%", left: "10%" }}
                >
                  {captions.map((cap, i) => (
                    <p
                      key={i}
                      id={`caption-${i}`}
                      className={`caption-inPopup-line2 ${
                        activeIndex === i ? "active" : ""
                      }`}
                    >
                      {cap.text}
                    </p>
                  ))}
                </div>
              </div>

              <button className="play-btn2" onClick={togglePlay}>
                {isPlaying ? <FaPause size={26} /> : <FaPlay size={26} />}
              </button>

              <div className="settings-wrapper">
                <button
                  className={`round-btn ${showSettings ? "active" : ""}`}
                  onClick={() => setShowSettings(!showSettings)}
                >
                  <IoMdSettings size={36} />
                </button>
                {showSettings && (
                  <div className="settings-popup">
                    <label>Volume</label>
                    <input
                      id="V"
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={volume}
                      onChange={(e) => {
                        setVolume(e.target.value);
                        audioRef.current.volume = e.target.value;
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {score && <ScoreCardEnhanced score={score} />}

      {/* Canvas Drawing Area */}
      <div ref={containerRef} className="canvas-container" style={{ margin: "20px 0", width: "100%" }}>
        <div style={{ 
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center'
        }}>
          <div style={{ 
            border: '3px solid #666',
            borderRadius: '10px',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
            marginBottom: '15px'
          }}>
            <canvas
              ref={canvasRef}
              onMouseDown={startDrawing}
              onMouseMove={draw}
              onMouseUp={stopDrawing}
              onMouseLeave={stopDrawing}
              style={{
                cursor: 'crosshair',
                display: 'block',
                width: `${imageSize.width}px`,
                height: `${imageSize.height}px`,
                maxWidth: '90vw',
                maxHeight: '70vh',
                backgroundColor: '#f5f5f5'
              }}
            />
          </div>
          
          {lineError && (
            <div style={{
              backgroundColor: '#ffebee',
              color: '#c62828',
              padding: '10px 15px',
              borderRadius: '5px',
              marginBottom: '10px',
              border: '1px solid #ffcdd2',
              textAlign: 'center',
              fontSize: '16px',
              fontWeight: 'bold'
            }}>
              {lineError}
            </div>
          )}
          
          <div style={{ 
            textAlign: 'center',
            marginTop: '15px',
            fontSize: '14px',
            color: '#555',
            backgroundColor: '#f8f9fa',
            padding: '10px',
            borderRadius: '5px',
            border: '1px solid #dee2e6'
          }}>
            <p><strong>التعليمات:</strong></p>
            <p>1. قم برسم خطين مستقيمين على الصورة حسب ما تسمعه</p>
            <p>2. املأ الفراغات بالنصوص المطلوبة</p>
            <p>3. استخدم زر "التحقق من الإجابة" للتحقق من كل شيء معاً</p>
          </div>
        </div>
      </div>

      <div className="spaces"></div>

      {/* Buttons */}
      <div className="action-buttons-container flex gap-4">
        <button onClick={resetExercise} className="try-again-button">
          ↻ إعادة التمرين
        </button>
        <button onClick={showAnswerFunc} className="show-answer-btn">
          عرض الإجابة والخطوط الصحيحة
        </button>
        <button onClick={checkAnswer} className="check-button2">
          ✓ التحقق من الإجابة
        </button>
      </div>
    </div>
  );
};

export default Page5_Q1_CleanAudio;