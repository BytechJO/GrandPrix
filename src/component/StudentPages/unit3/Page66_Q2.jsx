import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import "./Page66_Q2.css"
const Page66_Q2 = () => {
  // === النص الأصلي مع فراغات ===
  const originalText = `Dans ma chambre, il y a ______ lit, ______ étagère, ______ armoire, ______ table et ______ chaise. Sur ______ lit, il y a ______ ordinateur portable. Il y a ______ livres sur ______ étagère. Dans ______ armoire, il y a ______ vêtements. Sur ______ table, il y a ______ sac à dos. Dans ______ sac, il y a ______ gomme, ______ crayon, ______ livre, ______ stylo et ______ cahier de mon frère`;

  // === الفراغات ومفاتيحها ===
  const blanks = [
    { key: "a", options: ["un", "une"] },
    { key: "b", options: ["un", "une"] },
    { key: "c", options: ["un", "une"] },
    { key: "d", options: ["un", "une"] },
    { key: "e", options: ["un", "une"] },
    { key: "f", options: ["le", "la"] },
    { key: "g", options: ["mon", "ma"] },
    { key: "h", options: ["mon", "ma", "mes"] },
    { key: "i", options: ["la", "l'"] },
    { key: "j", options: ["la", "l'"] },
    { key: "k", options: ["mon", "ma", "mes"] },
    { key: "l", options: ["mon", "ma", "mes"] },
    { key: "m", options: ["mon", "ma", "mes"] },
    { key: "n", options: ["mon", "ma", "mes"] },
    { key: "o", options: ["un", "une"] },
    { key: "p", options: ["un", "une"] },
    { key: "q", options: ["un", "une"] },
    { key: "r", options: ["un", "une"] },
    { key: "s", options: ["le", "la"] },
  ];

  // === الإجابات الصحيحة ===
  const correctAnswers = {
    a: "un",
    b: "une",
    c: "une",
    d: "une",
    e: "une",
    f: "le",
    g: "mon",
    h: "mes",
    i: "l'",
    j: "l'",
    k: "mes",
    l: "ma",
    m: "mon",
    n: "mon",
    o: "une",
    p: "un",
    q: "un",
    r: "un",
    s: "le",
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
        style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span  style={{ backgroundColor: "#a4dce7", color:"#5e74b7" }} className="ex-A">Grammaire</span> <span style={{color:"black"}} className="number-of-q">2</span>Complète les phrases.</header>
    

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