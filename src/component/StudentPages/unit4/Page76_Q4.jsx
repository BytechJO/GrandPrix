import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page66_Q2 = () => {
  // === النص الأصلي مع فراغات ===
const originalText = `Léo : Nous sommes ici, à______ Pour aller à,
 ______ nous devons prendre la ligne rouge du métro jusqu’à la station, 
Castellane,puis nous devons prendre, ______ et…
Yvelle : Mais non, regarde, ______ ne passe pas devant notre hôtel. Nous devons 
prendre la______ du métro, et à la station Castellane, nous devons prendre
la ligne bleue du______ 
Léo : C’est ça, tu as raison. Allons-y. `;

  // === الفراغات ومفاتيحها ===
  const blanks = [
    { key: "a", options: ["Ste Marguerite Dromel", "La Rose"] },
    { key: "b", options: ["l’Hôtel de ville", "la gare St. Charles"] },
    { key: "c", options: ["la ligne de tram", "métro jaune","verte,"] },
    { key: "d", options: ["la ligne rouge", "jaune"] },
    { key: "e", options: ["ligne rouge", "bleue"] },
    { key: "f", options: ["métro", "tram."] },
    
  ];

  // === الإجابات الصحيحة ===
  const correctAnswers = {
    a: "Ste Marguerite Dromel",
    b: "l’Hôtel de ville",
    c: "métro jaune",
    d: "jaune",
    e: "ligne rouge",
    f: "métro",

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

  // === الكلمات المراد تلوينها مع اللون لكل كلمة ===
  const highlightedWords = {
    "Léo": "#eb3193",
    "Yvelle": "#2183bb",
  
  };

  // ✅ دالة لتلوين الكلمات المختارة فقط
  const highlightWords = (text) => {
    const regex = new RegExp(`(${Object.keys(highlightedWords).join("|")})`, "gi");
    return text.split(regex).map((part, index) =>
      highlightedWords[part] ? (
        <span
          key={index}
          style={{
            color: highlightedWords[part],
            fontWeight: "bold",
            padding: "0 2px",
            borderRadius: "3px",
          }}
        >
          {part}
        </span>
      ) : (
        <span key={index}>{part}</span>
      )
    );
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
      return <span key={idx}>{highlightWords(part)}</span>;
    });
  };

  return (
    <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
         <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
      >
        <span style={{ backgroundColor: "#d47176", color: "#white" }} className="ex-A">B</span>
        <span style={{ color: "black" }} className="number-of-q">4</span>
     Écoute et entoure la bonne réponse.
      </header>

      <div
        className="clip"
        style={{
          background: "#3fadb7",
          color: "white",
          fontSize: "20px",
          padding: "20px 28px",
          marginLeft: "5%",
          clipPath: "polygon(5% 0%, 98% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <p>
          Leo et Yvette sont des touristes. Ils viennent à Marseille et ils
          essayent de trouver leur chemin.
        </p>
      </div>

      {/* ✅ النص مع الفراغات */}
      <div
        className="page66Q2-text-container66 "
     style={{
  width: "100%",
  fontSize: "20px",
  lineHeight: "2",
  marginLeft: "5%",
  background: "#cce4c4c7",
  whiteSpace: "pre-wrap", // ← هنا صحيح
  padding:"30px"
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
