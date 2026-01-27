import React, { useState, useRef, useEffect } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import img1 from "../../../assets/workpages/svg/page34-1.svg";
import img2 from "../../../assets/workpages/svg/page34-2.svg";
import img3 from "../../../assets/workpages/svg/page34-3.svg";
import img4 from "../../../assets/workpages/svg/page34-4.svg";
import img5 from "../../../assets/workpages/svg/page34-5.svg";
import img6 from "../../../assets/workpages/svg/page34-6.svg";

const Page5_Q1_CleanAudio = () => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);

  const [score, setScore] = useState(null);
  const [selectedLeft, setSelectedLeft] = useState(null);
  const [connections, setConnections] = useState([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const colors = ["#a0cfca", "#a0cfca", "#a0cfca", "#a0cfca"];

  const leftItems = [
    { id: "1", img: img1, color: colors[0] },
    { id: "2", img: img2, color: colors[1] },
    { id: "3", img: img3, color: colors[2] },
    { id: "4", img: img4, color: colors[3] },
    { id: "5", img: img5, color: colors[0] },
    { id: "6", img: img6, color: colors[1] }
  ];

  const rightItems = [
    { id: "1", label: "Aujourd’hui, il pleut." },
    { id: "2", label: "En hiver, il neige." },
    { id: "3", label: "Il y a du soleil en juin." },
    { id: "4", label: "Il fait mauvais en automne." },
    { id: "5", label: "Il y a du vent mardi." },
  ];

  const correctMatches = {
    1: "4",
    2: "5",
    3: "2",
    4: "1",
    5: "",
    6: "3",

  };

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

    setScore({ correct, total: 6 });

    correct === 6
      ? ValidationAlert.success("Excellent!", "6/6", "6/6")
      : ValidationAlert.error("Presque", `${correct}/6`, `${correct}/6`);
  };

  const showAnswerFunc = () => {
    const newConnections = [];

    leftItems.forEach((left) => {
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
    setScore({ correct: 6, total: 6 });
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
        <span style={{ backgroundColor: "#ca366b" }} className="ex-A">6</span>
        <span className="number-of-q">2</span>
       Trouve les paires.
      </header>

      <div
        ref={containerRef}
        className="relative w-full bg-gradient-to-b from-gray-50 to-white rounded-xl border-2 border-gray-200 p-8 shadow-lg"
        style={{ minHeight: "450px" }}
      >
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
            />
          ))}
        </svg>

        <div className="top-row flex justify-between items-start mb-16 px-12">
          {leftItems.map(item => (
            <div
  key={item.id}
  className="flex flex-col items-center gap-1"
>
  <div
    className="flex items-center justify-center"
    style={{ width: "120px", height: "120px" }}
  >
    <img
      src={item.img}
      alt=""
      className="max-w-full max-h-full object-contain"
    />
  </div>



              <div
                id={`dot-left-${item.id}`}
                onClick={() => handleLeftDotClick(item.id)}
                className={`w-8 h-8 rounded-full cursor-pointer border-4 shadow-lg transition-all duration-200 ${
                  selectedLeft === item.id ? "ring-4 ring-offset-2" : ""
                }`}
                style={{
                  backgroundColor: item.color,
                  borderColor: "white"
                }}
              />
            </div>
          ))}
        </div>

        <div className="bottom-row flex justify-between items-center px-12">
          {rightItems.map(item => {
            const connection = connections.find(c => c.right === item.id);
            return (
              <div key={item.id} className="flex flex-col items-center gap-3">
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
                <span className="text-lg font-semibold">{item.label}</span>
              </div>
            );
          })}
        </div>
      </div>

      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">
          Recommencer ↻
        </button>
        <button onClick={showAnswerFunc} className="show-answer-btn swal-continue">
          Afficher la réponse
        </button>
        <button onClick={checkAnswer} className="check-button2">
          Vérifier la réponse ✓
        </button>
      </div>
    </div>
  );
};

export default Page5_Q1_CleanAudio;
