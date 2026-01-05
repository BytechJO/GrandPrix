import React, { useRef, useState, useEffect } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import "./WB_Unit1_Page5_Q2.css";
import ScoreCardEnhanced from "../../Popup/ScoreCard"; // عدّل المسار حسب مكانه

const MatchingWithCanvas = () => {
  const leftItems = [
    "A-Qu’est-ce que c’est ?",
    "B-Qu’est-ce qu’il y a dans ta trousse ?",
    "C-Quels clubs as-tu dans ton école ?",
    "D-Comment s’appelle ton ami ?",
    "e-Quel jour nous sommes aujourd’hui ?",
    "f-Quelles sont tes matières préférées ?",
    "g-Est-ce que c’est une fenêtre ?"
  ];
  const [score, setScore] = useState(null); // لتخزين عدد الإجابات الصحيحة وإجمالي الأسئلة

  const rightItems = [
    "1-Mon ami s’appelle Marcel.",
    "2-Oui, j’aime l’histoire.",
    "3-Non, c’est une porte.",
    "4-Mes matières préférées sont la SVTet l’art.",
    "5-Nous avons un club de technologie.",
    "6-Dans ma trousse, il y a un stylo et un compas.",
    "7-Aujourd’hui, c’est mardi.",
    "8-C’est une paire de ciseaux.",
  ];

  // ✔ الإجابات الصحيحة
  const correctAnswers = {
    A: "8",
    B: "6",
    C: "5",
    D: "1",
    e: "7",
    f: "4",
    g: "3",
  };

  const canvasRef = useRef(null);
  const leftRefs = useRef([]);
  const rightRefs = useRef([]);

  const [connections, setConnections] = useState([]);
  const [currentLine, setCurrentLine] = useState(null);
  const [checkedConnections, setCheckedConnections] = useState(null);

  useEffect(() => {
    drawLines();
  }, [connections, currentLine, checkedConnections]);

  const getCanvasPos = (e) => {
    const rect = canvasRef.current.getBoundingClientRect();
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handleMouseDown = (side, index) => () => {
    const element =
      side === "left"
        ? leftRefs.current[index]
        : rightRefs.current[index];

    const rect = element.getBoundingClientRect();
    const canvasRect = canvasRef.current.getBoundingClientRect();

    const x =
      side === "left"
        ? rect.right - canvasRect.left
        : rect.left - canvasRect.left;

    const y = rect.top + rect.height / 2 - canvasRect.top;

    setCurrentLine({
      side,
      index,
      x1: x,
      y1: y,
      x2: x,
      y2: y
    });
  };

  const handleMouseMove = (e) => {
    if (!currentLine) return;
    const pos = getCanvasPos(e);
    setCurrentLine((prev) => ({
      ...prev,
      x2: pos.x,
      y2: pos.y
    }));
  };

  const handleMouseUp = (side, index) => () => {
    if (!currentLine) return;

    let fromIndex, toIndex;

    if (currentLine.side === "left" && side === "right") {
      fromIndex = currentLine.index;
      toIndex = index;
    } else if (currentLine.side === "right" && side === "left") {
      fromIndex = index;
      toIndex = currentLine.index;
    } else {
      setCurrentLine(null);
      return;
    }

    // 🔒 نقطة واحدة = وصلة واحدة
    setConnections((prev) => {
      const filtered = prev.filter(
        (c) => c.fromIndex !== fromIndex && c.toIndex !== toIndex
      );
      return [...filtered, { fromIndex, toIndex }];
    });

    setCurrentLine(null);
    setCheckedConnections(null); // إعادة التحقق عند أي تعديل
  };

  const drawLines = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const canvasRect = canvas.getBoundingClientRect();

    connections.forEach(({ fromIndex, toIndex }) => {
      const leftRect = leftRefs.current[fromIndex].getBoundingClientRect();
      const rightRect = rightRefs.current[toIndex].getBoundingClientRect();

      const x1 = leftRect.right - canvasRect.left;
      const y1 = leftRect.top + leftRect.height / 2 - canvasRect.top;

      const x2 = rightRect.left - canvasRect.left;
      const y2 = rightRect.top + rightRect.height / 2 - canvasRect.top;

      let strokeColor = "orange";

      if (checkedConnections) {
        const result = checkedConnections.find(
          (r) => r.fromIndex === fromIndex && r.toIndex === toIndex
        );
        if (result) strokeColor = result.isCorrect ? "green" : "red";
      }

      ctx.beginPath();
      ctx.moveTo(x1, y1);
      ctx.lineTo(x2, y2);
      ctx.strokeStyle = strokeColor;
      ctx.lineWidth = 4;
      ctx.stroke();
    });

    if (currentLine) {
      ctx.beginPath();
      ctx.moveTo(currentLine.x1, currentLine.y1);
      ctx.lineTo(currentLine.x2, currentLine.y2);
      ctx.strokeStyle = "blue";
      ctx.lineWidth = 4;
      ctx.stroke();
    }
  };

// ✅ RESET
const resetExercise = () => {
  setConnections([]);
  setCurrentLine(null);
  setCheckedConnections(null);
  setScore(null); // إعادة تعيين ScoreCard
};

// ✅ SHOW ANSWER
const showAnswerFunc = () => {
  const newConnections = Object.keys(correctAnswers).map((key) => ({
    fromIndex: leftItems.findIndex((item) => item.startsWith(key)),
    toIndex: rightItems.findIndex(
      (item) => item.startsWith(correctAnswers[key])
    )
  }));
  setConnections(newConnections);

  const total = Object.keys(correctAnswers).length;
  const correctCount = total;

  setCheckedConnections(
    newConnections.map(c => ({ ...c, isCorrect: true }))
  );

  // تحديث ScoreCard
  setScore({ correct: correctCount, total });

  ValidationAlert.success(
    "Answers shown",
    "All correct connections have been placed.",
    `${correctCount}/${total}`
  );
};

// ✅ CHECK ANSWER
const checkAnswer = () => {
  const results = connections.map(({ fromIndex, toIndex }) => {
    const leftKey = leftItems[fromIndex][0];
    const rightKey = rightItems[toIndex][0];
    const isCorrect = correctAnswers[leftKey] === rightKey;
    return { fromIndex, toIndex, isCorrect };
  });

  setCheckedConnections(results);

  const correctCount = results.filter(r => r.isCorrect).length;
  const total = Object.keys(correctAnswers).length;

  // تحديث ScoreCard
  setScore({ correct: correctCount, total });


    if (correctCount === total) {
      ValidationAlert.success(
        "Excellent!",
        "You got all answers right!",
        `${correctCount}/${total}`
      );
    } else if (correctCount === 0) {
      ValidationAlert.info(
        "Try Again!",
        "All answers are incorrect.",
        `${correctCount}/${total}`
      );
    } else {
      ValidationAlert.error(
        "Almost there!",
        `You got ${correctCount} out of ${total} correct.`,
        `${correctCount}/${total}`
      );
    }
};


  return (
 

    
   
       <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
     <header
className="header-title-page1 w-full text-left mb-4"
  style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span style={{backgroundColor:"#de4484"}} className="ex-A">2</span> <span style={{color:"black"}} className="number-of-q">7</span>

Trouve les réponses.
      </header>

      <div className="matching-columns" style={{ display: "flex", gap: "220px" }}>
        <div className="left-column" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {leftItems.map((item, i) => (
            <div
              key={item}
              ref={(el) => (leftRefs.current[i] = el)}
              onMouseDown={handleMouseDown("left", i)}
              className={`item-box ${
                checkedConnections?.some(
                  (c) => c.fromIndex === i && !c.isCorrect
                )
                  ? "wrong-box"
                  : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        <canvas
          ref={canvasRef}
          width={900}
          height={600}
          style={{ position: "absolute", top: 0, left: 0, pointerEvents: "none" }}
        />

        <div className="right-column" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          {rightItems.map((item, i) => (
            <div
              key={item}
              ref={(el) => (rightRefs.current[i] = el)}
              onMouseUp={handleMouseUp("right", i)}
              className={`item-box ${
                checkedConnections?.some(
                  (c) => c.toIndex === i && !c.isCorrect
                )
                  ? "wrong-box"
                  : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
     {score && <ScoreCardEnhanced score={score} />}
<div className="spaces"></div>
      {/* 🔘 Action Buttons */}
      <div className="action-buttons-container" style={{ marginTop: "30px" }}>
        <button onClick={resetExercise} className="try-again-button">
          Recommencer ↻
        </button>
        <button onClick={showAnswerFunc} className="show-answer-btn">
          Afficher la réponse
        </button>
        <button onClick={checkAnswer} className="check-button2">
          Vérifier la réponse✓
        </button>
      </div>
    </div>
  
  );
};

export default MatchingWithCanvas;
