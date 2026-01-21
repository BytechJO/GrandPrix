import React, { useState, useRef, useEffect } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import "./Page80_Q3.css";

const Page5_Q1_CleanAudio = () => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);

  const [score, setScore] = useState(null);
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [connections, setConnections] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const colors = ["#ad4d94", "#92cc84", "#a0cfca", "#e2846d"]; // أحمر، أخضر، أصفر، أزرق

  const leftItems = [
    { id: "1", label: "", color: colors[0] },
    { id: "2", label: "", color: colors[1] },
    { id: "3", label: "", color: colors[2] },
    { id: "4", label: "", color: colors[3] }
  ];

  const rightItems = [
    { id: "1", label: "Restauration" },
    { id: "2", label: "Mode" },
    { id: "3", label: "Divertissement" },
    { id: "4", label: "Jouets et jeux" }
  ];

  const correctMatches = {
    1: "2",
    2: "3",
    3: "4",
    4: "1"
  };

  // تحديث أبعاد الحاوية
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width, height } = containerRef.current.getBoundingClientRect();
        setDimensions({ width, height });
      }
    };

    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  const getDotCenter = (el) => {
    if (!el || !containerRef.current) return { x: 0, y: 0 };
    const rect = el.getBoundingClientRect();
    const parent = containerRef.current.getBoundingClientRect();
    return {
      x: rect.left - parent.left + rect.width / 2,
      y: rect.top - parent.top + rect.height / 2
    };
  };

  const handleLeftDotClick = (id) => {
    setSelectedLeft(selectedLeft === id ? null : id);
  };

  const handleRightDotClick = (rightId) => {
    if (!selectedLeft) return;

    const leftDot = document.getElementById(`dot-left-${selectedLeft}`);
    const rightDot = document.getElementById(`dot-right-${rightId}`);

    if (!leftDot || !rightDot) return;

    const start = getDotCenter(leftDot);
    const end = getDotCenter(rightDot);

    setConnections((prev) => [
      ...prev.filter(c => c.left !== selectedLeft),
      { 
        left: selectedLeft, 
        right: rightId, 
        start, 
        end,
        color: leftItems.find(item => item.id === selectedLeft)?.color || "#7c3aed"
      }
    ]);

    setSelectedLeft(null);
  };

  const checkAnswer = () => {
    let correct = 0;
    connections.forEach(c => {
      if (correctMatches[c.left] === c.right) correct++;
    });

    setScore({ correct, total: 4 });

    correct === 4
      ? ValidationAlert.success("Excellent!", "4/4", "4/4")
      : ValidationAlert.error("Presque", `${correct}/4`, `${correct}/4`);
  };

  const showAnswerFunc = () => {
    const newConnections = [];

    leftItems.forEach((left, index) => {
      const rightId = correctMatches[left.id];
      const leftDot = document.getElementById(`dot-left-${left.id}`);
      const rightDot = document.getElementById(`dot-right-${rightId}`);

      if (leftDot && rightDot) {
        newConnections.push({
          left: left.id,
          right: rightId,
          start: getDotCenter(leftDot),
          end: getDotCenter(rightDot),
          color: left.color
        });
      }
    });

    setConnections(newConnections);
    setScore({ correct: 4, total: 4 });
  };

  const resetExercise = () => {
    setConnections([]);
    setSelectedLeft(null);
    setScore(null);
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center gap-8 p-6 max-w-6xl mx-auto">
      {score && <ScoreCardEnhanced score={score} />}

       <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "20%", color: "black", marginTop: "6%", fontSize: "25px", fontWeight: "bold" }}
      >
        <span style={{ backgroundColor: "#d47176", color: "#white" }} className="ex-A">C</span>
        <span style={{ color: "black" }} className="number-of-q">3</span>
    Observe la situation. Mets en relation les catégories avec les couleurs.
      </header>

      {/* 🧠 منطقة التوصيل الرئيسية */}
      <div
        ref={containerRef}
        className="relative w-full bg-gradient-to-b from-gray-50 to-white rounded-xl border-2 border-gray-200 p-8 shadow-lg"
        style={{ minHeight: "400px" }}
      >
        {/* SVG للخطوط */}
        <svg 
          ref={svgRef}
          className="absolute top-0 left-0 w-full h-full pointer-events-none z-10"
          width={dimensions.width}
          height={dimensions.height}
        >
          {connections.map((c, i) => (
            <line
              key={i}
              x1={c.start.x}
              y1={c.start.y}
              x2={c.end.x}
              y2={c.end.y}
              stroke={c.color}
              strokeWidth="3"
              strokeLinecap="round"
              markerEnd="url(#arrowhead)"
            />
          ))}
          <defs>
            <marker
              id="arrowhead"
              markerWidth="10"
              markerHeight="7"
              refX="9"
              refY="3.5"
              orient="auto"
            >
              <polygon points="0 0, 10 3.5, 0 7" fill="#7c3aed" />
            </marker>
          </defs>
        </svg>

        {/* 📌 الصف العلوي: الكلمات اليسرى + المربعات الملونة + نقاط التوصيل */}
        <div className="top-row flex justify-between items-center mb-20 px-12">
          {leftItems.map(item => (
            <div key={item.id} className="top-item flex flex-col items-center gap-3">
              {/* المربع الملون */}
              <div 
                className="w-14 h-14 rounded-lg shadow-lg"
                style={{ backgroundColor: item.color }}
              />
              
              {/* الكلمة */}
              <span className="text-lg font-semibold text-gray-800 text-center">
                {item.label}
              </span>
              
              {/* نقطة التوصيل العلوية */}
              <div
                id={`dot-left-${item.id}`}
                onClick={() => handleLeftDotClick(item.id)}
                className={`w-8 h-8 rounded-full cursor-pointer border-4 shadow-lg transition-all duration-200 ${
                  selectedLeft === item.id ? "ring-4 ring-offset-2" : ""
                }`}
                style={{ 
                  backgroundColor: item.color,
                  borderColor: "white",
                  transform: selectedLeft === item.id ? "scale(1.2)" : "scale(1)"
                }}
              />
            </div>
          ))}
        </div>

        {/* خط فاصل منقط */}
        <div className="flex justify-center mb-20">
          <div className="w-4/5 h-1 border-t-2 border-dashed border-gray-300"></div>
        </div>

        {/* 📌 الصف السفلي: نقاط التوصيل + الكلمات اليمنى */}
        <div className="bottom-row flex justify-between items-center px-12">
          {rightItems.map(item => {
            const connection = connections.find(c => c.right === item.id);
            return (
              <div key={item.id} className="bottom-item flex flex-col items-center gap-3">
                {/* نقطة التوصيل السفلية */}
                <div
                  id={`dot-right-${item.id}`}
                  onClick={() => handleRightDotClick(item.id)}
                  className={`w-8 h-8 rounded-full cursor-pointer border-4 shadow-lg transition-all duration-200 ${
                    connection ? "ring-4 ring-offset-2" : ""
                  }`}
                  style={{ 
                    backgroundColor: connection ? connection.color : "#f3f4f6",
                    borderColor: "white"
                  }}
                />
                
                {/* الكلمة */}
                <span className="text-lg font-semibold text-gray-800 text-center">
                  {item.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* أزرار التحكم */}
     <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">
         Recommencer ↻
        </button>
        <button onClick={showAnswerFunc} className="show-answer-btn swal-continue">
          Afficher la réponse
        </button>
        <button onClick={checkAnswer} className="check-button2">
          Vérifier la réponse✓
        </button>
      </div>

  
    </div>
  );
};

export default Page5_Q1_CleanAudio;