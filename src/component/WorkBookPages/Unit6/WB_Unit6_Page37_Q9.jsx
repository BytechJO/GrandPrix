import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page5_Q2_SAppeler = () => {
  // === STATE ===
  const [answers, setAnswers] = useState({
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
  });

  const [score, setScore] = useState(null);

  // ✅ حالة لون الإجابات
  const [answerStatus, setAnswerStatus] = useState({
    q2: "",
    q3: "",
    q4: "",
    q5: "",
    q6: "",
    q7: "",
    q8: "",
    q9: "",
    q10: "",
  });

  // === الإجابات النموذجية ===
  const correctAnswers = {
    q2: "au",
    q3: "en",
    q4: "en",
    q5: "au",
    q6: "au",
    q7: "au",
    q8: "aux",
    q9: "aux",
    q10: "aux",
  };

  // === النص الأصلي للرسالة مع الفراغات ===
  const letterText = `Salut Henri,

Merci pour ta lettre. J’aime aussi le sport. Je fais du ski et je joue (2) ______ basket (3) ______ hiver. Et (4) ______ été je joue (5) ______ tennis et (6) ______ volley. Est-ce que tu joues (7) ______ basket ?

Qu’est-ce que tu fais comme sport ?

Quand il fait froid, je joue (8) ______ échecs avec mon père. Est-ce que tu joues (9) ______ cartes ou (10) ______ échecs ?

À bientôt !
Roy`;

  // ✅ HANDLE CHANGE
  const handleChange = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    // إعادة ضبط اللون عند الكتابة
    setAnswerStatus((prev) => ({ ...prev, [key]: "" }));
  };

  // ✅ CHECK ANSWER
  const checkAnswer = () => {
    const newStatus = {};
    let correctCount = 0;
    let incomplete = false;

    const total = Object.keys(correctAnswers).length;

    Object.keys(correctAnswers).forEach((key) => {
      const val = answers[key]?.trim();
      if (!val) incomplete = true;

      const isCorrect =
        val?.toLowerCase() === correctAnswers[key].toLowerCase();
      newStatus[key] = isCorrect ? "correct" : "wrong";

      if (isCorrect) correctCount++;
    });

    setAnswerStatus(newStatus);

    if (incomplete) {
      ValidationAlert.info(
        "Incomplete",
        "Please fill in all fields.",
        `${correctCount}/${total}`
      );
      setScore(null);
      return;
    }

    setScore({ correct: correctCount, total });

    if (correctCount === total) {
      ValidationAlert.success(
        "Excellent!",
        "You got all answers right!",
        `${correctCount}/${total}`
      );
    } else if (correctCount === 0) {
      ValidationAlert.error(
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

  // ✅ SHOW ANSWER
  const showAnswerFunc = () => {
    setAnswers({ ...correctAnswers });

    const newStatus = {};
    Object.keys(correctAnswers).forEach((key) => {
      newStatus[key] = "correct";
    });
    setAnswerStatus(newStatus);

    const total = Object.keys(correctAnswers).length;
    setScore({ correct: total, total });

    ValidationAlert.success(
      "Answers shown",
      "All correct answers have been filled in.",
      `${total}/${total}`
    );
  };

  // ✅ RESET
  const resetExercise = () => {
    const emptyAnswers = {};
    const emptyStatus = {};
    Object.keys(correctAnswers).forEach((key) => {
      emptyAnswers[key] = "";
      emptyStatus[key] = "";
    });

    setAnswers(emptyAnswers);
    setAnswerStatus(emptyStatus);
    setScore(null);
  };

  // ✅ دالة لتحديد لون الخلفية حسب الحالة
  const getInputStyle = (key) => {
    if (answerStatus[key] === "correct") return { backgroundColor: "#d4f4dd" };
    if (answerStatus[key] === "wrong") return { backgroundColor: "#f8d7da" };
    return {};
  };

  // ✅ دالة لتقسيم النص وإدراج الحقول
  const renderLetterWithInputs = () => {
    const parts = letterText.split(/(\([0-9]+\)\s*______)/g);
    
    return parts.map((part, index) => {
      // إذا كان الجزء يحتوي على رقم فراغ (مثل "(2) ______")
      const match = part.match(/\(([0-9]+)\)\s*______/);
      if (match) {
        const questionNum = `q${match[1]}`;
        return (
          <span key={index}>
            <input
              type="text"
              value={answers[questionNum]}
              onChange={(e) => handleChange(questionNum, e.target.value)}
              style={{
                width: "80px",
                textAlign: "center",
                margin: "0 5px",
                borderBottom: "1px solid black",
           
                padding: "2px 4px",
                ...getInputStyle(questionNum),
              }}
             
            />
          </span>
        );
      }
      // إذا كان النص العادي
      return (
        <span key={index} style={{ whiteSpace: "pre-wrap" }}>
          {part}
        </span>
      );
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
        <span
          style={{ backgroundColor: "#ca366b", color: "white" }}
          className="ex-A"
        >
         6
        </span>
        <span style={{ color: "black" }} className="number-of-q">
          9
        </span>
        Complète la lettre.
      </header>

      {/* ✅ LETTER WITH INPUTS */}
      <div
        className="letter-container"
        style={{
          width: "90%",
          maxWidth: "800px",
          padding: "20px",
          backgroundColor: "#f9f9f9",
          borderRadius: "8px",
          border: "1px solid #ddd",
          fontFamily: "Arial, sans-serif",
          lineHeight: "1.6",
          whiteSpace: "pre-wrap",
        }}
      >
        {renderLetterWithInputs()}
      </div>

      {score && <ScoreCardEnhanced score={score} />}

      {/* Action Buttons */}
      <div className="action-buttons-container flex gap-4">
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

export default Page5_Q2_SAppeler;