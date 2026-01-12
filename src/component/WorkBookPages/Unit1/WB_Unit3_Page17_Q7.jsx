import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
const Page66_Q2 = () => {
  // === النص الأصلي مع فراغات ===
  const originalText = `C’est samedi. Aujourd’hui, Zoë nous invite à lui rendre visite. Elle loue (1) ______ nouvel appartement. Elle veut faire (2) ______ petite fête. Je veux lui offrir (3) ______ cadeau. Elle aime beaucoup de choses : (4) ______ fleurs, (5) ______ livres, (6) ______ chaussures, etc. Je travaille dans (7) ______ boutique de chaussures, alors je vais lui acheter (8) ______ chaussures originales. `;

  // === الفراغات ومفاتيحها ===
  const blanks = [
    { key: "a", options: ["un", "l'"] },
    { key: "b", options: ["la", "une"] },
    { key: "c", options: ["le", "un"] },
    { key: "d", options: ["des", "les"] },
    { key: "e", options: ["un", "les"] },
    { key: "f", options: ["les", "des"] },
    { key: "g", options: ["une", "la"] },
    { key: "h", options: ["les", "des"] },
 
  ];

  // === الإجابات الصحيحة ===
  const correctAnswers = {
    a: "un",
    b: "une",
    c: "un",
    d: "les",
    e: "les",
    f: "les",
    g: "une",
    h: "des",
  };

  // === STATE ===
  const [answers, setAnswers] = useState({});
  const [answerStatus, setAnswerStatus] = useState({});
  const [score, setScore] = useState(null);

  // ✅ HANDLE CHANGE
  const handleChange = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setAnswerStatus((prev) => ({ ...prev, [key]: "" }));
  };

  // ✅ CHECK ANSWER
  const checkAnswer = () => {
    const newStatus = {};
    let correctCount = 0;
    let incomplete = false;

    blanks.forEach((blank) => {
      const key = blank.key;
      const val = answers[key]?.trim();
      if (!val) incomplete = true;

      const isCorrect = val === correctAnswers[key];
      newStatus[key] = isCorrect ? "correct" : "wrong";

      if (isCorrect) correctCount++;
    });

    setAnswerStatus(newStatus);

    const total = blanks.length;

    if (incomplete) {
      ValidationAlert.error(
        "Incomplet",
        "Veuillez remplir tous les champs.",
        `${correctCount}/${total}`
      );
      setScore(null);
    } else {
      setScore({ correct: correctCount, total });

      if (correctCount === total) {
        ValidationAlert.success(
          "Excellent !",
          "Toutes vos réponses sont correctes !",
          `${correctCount}/${total}`
        );
      } else if (correctCount === 0) {
        ValidationAlert.error(
          "Essayez encore !",
          "Toutes les réponses sont incorrectes.",
          `${correctCount}/${total}`
        );
      } else {
        ValidationAlert.error(
          "Presque !",
          `Vous avez ${correctCount} bonnes réponses sur ${total}.`,
          `${correctCount}/${total}`
        );
      }
    }
  };

  // ✅ SHOW ANSWER
  const showAnswerFunc = () => {
    setAnswers(correctAnswers);

    const newStatus = {};
    blanks.forEach((blank) => {
      newStatus[blank.key] = "correct";
    });
    setAnswerStatus(newStatus);

    const total = blanks.length;
    setScore({ correct: total, total });

    ValidationAlert.success(
      "Réponses affichées",
      "Toutes les réponses correctes ont été remplies.",
      `${total}/${total}`
    );
  };

  // ✅ RESET
  const resetExercise = () => {
    const emptyAnswers = {};
    const emptyStatus = {};
    blanks.forEach((blank) => {
      emptyAnswers[blank.key] = "";
      emptyStatus[blank.key] = "";
    });

    setAnswers(emptyAnswers);
    setAnswerStatus(emptyStatus);
    setScore(null);
  };

  // ✅ دالة لتحديد لون الخلفية
  const getInputStyle = (key) => {
    if (answerStatus[key] === "correct") return { backgroundColor: "#d4f4dd" };
    if (answerStatus[key] === "wrong") return { backgroundColor: "#f8d7da" };
    return {};
  };

  // ✅ تقسيم النص لعرض الفراغات
  const renderTextWithBlanks = () => {
    const parts = originalText.split(/(______)/g);
    let blankIndex = 0;

    return parts.map((part, idx) => {
      if (part === "______") {
        const blank = blanks[blankIndex];
        const key = blank.key;
        blankIndex++;

        return (
          <span key={idx} className="blank-wrapper">
            <select
              className="blank-select"
              value={answers[key] || ""}
              onChange={(e) => handleChange(key, e.target.value)}
              style={getInputStyle(key)}
            >
              <option value="">--</option>
              {blank.options.map((opt, optIdx) => (
                <option key={optIdx} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </span>
        );
      }
      return <span key={idx}>{part}</span>;
    });
  };

  return (
    <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
     <header
        className="header-title-page1 w-full text-left mb-4"
        style={{
          marginLeft: "42%",
          color: "black",
          marginTop: "5%",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        <span className="ex-A" style={{ backgroundColor: "#5e74b7" }}>3</span>
        <span className="number-of-q">7</span>
       Souligne l’article qui convient.
      </header>

      {/* ✅ النص مع الفراغات */}
      <div
        className="page66Q2-text-container66"
        style={{
          width: "80%",
          fontSize: "20px",
          lineHeight: "2",
          marginLeft: "5%",
        }}
      >
        {renderTextWithBlanks()}
      </div>

      {score && <ScoreCardEnhanced score={score} />}

      <div className="spaces"></div>

      {/* ✅ أزرار التحكم */}
      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">
          Recommencer ↻
        </button>
        <button
          onClick={showAnswerFunc}
          className="show-answer-btn swal-continue"
        >
          Afficher la réponse
        </button>
        <button onClick={checkAnswer} className="check-button2">
          Vérifier la réponse ✓
        </button>
      </div>
    </div>
  );
};

export default Page66_Q2;