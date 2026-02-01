import React, {
  useRef,
  useState,
  useLayoutEffect
} from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const MatchingWithCanvas = () => {
  const leftItems = [
    "Je me lève à 6 h.",
    "Où vas-tu en vacances ?",
    "J’aime ce festival.",
    "Nous logeons à l’hôtel.",
    "Je vois un chat.",
    "À quelle heure tu te couches ?",
    "À midi, je mange une pizza.",
  ];

  const rightItems = [
    "2-Nous avons logé à l’hôtel.",
    "3-J’ai vu un chat.",
    "4-Qu’est-ce que tu as fait mercredi dernier ?",
    "5-À midi, j’ai mangé une pizza.",
    "6-Où es-tu allé(e) en vacances ?",
    "7-Je me suis levé(e) à 6 h.",
    "8-J’ai aimé ce festival.",
  ];

  // ✅ الإجابات الصحيحة (7 عناصر = 7 صفوف يسار)
  const correctAnswers = {
    0: "7",
    1: "6",
    2: "8",
    3: "2",
    4: "3",
    5: "4",
    6: "5",
  };

  const canvasRef = useRef(null);
  const leftRefs = useRef([]);
  const rightRefs = useRef([]);

  const [connections, setConnections] = useState([]);
  const [currentLine, setCurrentLine] = useState(null);
  const [checkedConnections, setCheckedConnections] = useState(null);
  const [score, setScore] = useState(null);

  useLayoutEffect(() => {
    drawLines();
  }, [connections, currentLine, checkedConnections]);

  const getCanvasPos = (e) => {
    if (!canvasRef.current) return { x: 0, y: 0 };
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

    if (!element || !canvasRef.current) return;

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

    setConnections((prev) => {
      const filtered = prev.filter(
        (c) => c.fromIndex !== fromIndex && c.toIndex !== toIndex
      );
      return [...filtered, { fromIndex, toIndex }];
    });

    setCurrentLine(null);
    setCheckedConnections(null);
  };

  const drawLines = () => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const canvasRect = canvas.getBoundingClientRect();

    connections.forEach(({ fromIndex, toIndex }) => {
      const leftEl = leftRefs.current[fromIndex];
      const rightEl = rightRefs.current[toIndex];

      if (!leftEl || !rightEl) return;

      const leftRect = leftEl.getBoundingClientRect();
      const rightRect = rightEl.getBoundingClientRect();

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

  const resetExercise = () => {
    setConnections([]);
    setCurrentLine(null);
    setCheckedConnections(null);
    setScore(null);
  };

  const showAnswerFunc = () => {
    const newConnections = Object.entries(correctAnswers).map(
      ([fromIndex, rightNumber]) => {
        const toIndex = rightItems.findIndex(
          item => item.startsWith(rightNumber + "-")
        );
        return { fromIndex: Number(fromIndex), toIndex };
      }
    );

    setConnections(newConnections);

    const total = Object.keys(correctAnswers).length;

    setCheckedConnections(
      newConnections.map(c => ({ ...c, isCorrect: true }))
    );

    setScore({ correct: total, total });

    ValidationAlert.success(
      "Answers shown",
      "All correct connections have been placed.",
      `${total}/${total}`
    );
  };

  const checkAnswer = () => {
    const results = connections.map(({ fromIndex, toIndex }) => {
      const rightKey = rightItems[toIndex][0];
      const isCorrect = correctAnswers[fromIndex] === rightKey;
      return { fromIndex, toIndex, isCorrect };
    });

    setCheckedConnections(results);

    const correctCount = results.filter(r => r.isCorrect).length;
    const total = Object.keys(correctAnswers).length;

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
    <div
      className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4"
      onMouseMove={handleMouseMove}
    >
     <header
                className="header-title-page1 w-full text-left mb-4"
                style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
            >
                <span style={{ backgroundColor: "#cf7230", color: "#white" }} className="ex-A">7</span>
                <span style={{ color: "black" }} className="number-of-q">11</span>
             Trouve les paires.
            </header>

      <div className="matching-columns" style={{ display: "flex", gap: "220px" }}>
        <div className="left-column" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {leftItems.map((item, i) => (
            <div
              key={item}
              ref={(el) => (leftRefs.current[i] = el)}
              onMouseDown={handleMouseDown("left", i)}
              className={`item-box ${
                checkedConnections?.some(
                  (c) => c.fromIndex === i && !c.isCorrect
                ) ? "wrong-box" : ""
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

        <div className="right-column" style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
          {rightItems.map((item, i) => (
            <div
              key={item}
              ref={(el) => (rightRefs.current[i] = el)}
              onMouseUp={handleMouseUp("right", i)}
              className={`item-box ${
                checkedConnections?.some(
                  (c) => c.toIndex === i && !c.isCorrect
                ) ? "wrong-box" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      {score && <ScoreCardEnhanced score={score} />}

      <div className="spaces"></div>

      <div className="action-buttons-container" style={{ marginTop: "30px" }}>
        <button onClick={resetExercise} className="try-again-button">
          Recommencer ↻
        </button>
        <button onClick={showAnswerFunc} className="show-answer-btn">
          Afficher la réponse
        </button>
        <button onClick={checkAnswer} className="check-button2">
          Vérifier la réponse ✓
        </button>
      </div>
    </div>
  );
};

export default MatchingWithCanvas;
