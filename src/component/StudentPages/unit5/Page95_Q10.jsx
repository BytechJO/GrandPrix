import React, { useState } from "react";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import ValidationAlert from "../../Popup/ValidationAlert";

const Page5_Q1_CleanAudio = () => {
  const [score, setScore] = useState(null);
  const [current, setCurrent] = useState(0);

const sentences = [
  { id: "a", text: "Les Français mangent beaucoup au petit-déjeuner." },

  { id: "b", text: "Les adultes prennent du café." },

  { id: "c", text: "Les enfants prennent du chocolat chaud." },

  { id: "d", text: "Les Français mangent des croissants chaque jour." },

  { id: "e", text: "Ils ne mangent pas de fruits." },
  { id: "f", text: "Les Français mangent beaucoup de choses salées." },
];


    const correctAnswers = ["b", "c"];

  const [checked, setChecked] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);

  // ✅ TOGGLE CHECK
  const toggleCheck = (id, value) => {
    if (showFeedback) return;
    setChecked((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // ✅ CHECK ANSWER
  const checkAnswer = () => {
    let correctCount = 0;
    let incomplete = false;

    sentences.forEach((s) => {
      // ⛔ لم يتم اختيار إجابة
      if (checked[s.id] === undefined) {
        incomplete = true;
        return;
      }

      const isCorrect = correctAnswers.includes(s.id);
      if (checked[s.id] === isCorrect) {
        correctCount++;
      }
    });

    setShowFeedback(true);
    const total = sentences.length;

    // ✅ تحديث السكور
    setScore({ correct: correctCount, total });

    if (incomplete) {
      ValidationAlert.info(
        "Incomplete",
        "Some answers are missing.",
        `${correctCount}/${total}`
      );
    } else if (correctCount === total) {
      ValidationAlert.success(
        "Excellent!",
        "Toutes vos réponses sont correctes!",
        `${correctCount}/${total}`
      );
    } else if (correctCount === 0) {
      ValidationAlert.info(
        "Essayez encore!",
        "Toutes les réponses sont incorrectes.",
        `${correctCount}/${total}`
      );
    } else {
      ValidationAlert.error(
        "Presque!",
        "Certaines réponses sont incorrectes.",
        `${correctCount}/${total}`
      );
    }
  };

  // ✅ SHOW ANSWER
  const showCorrectAnswer = () => {
    const correctMap = {};
    sentences.forEach((s) => {
      correctMap[s.id] = correctAnswers.includes(s.id);
    });
    setChecked(correctMap);
    setShowFeedback(true);
    ValidationAlert.success("Réponses affichées", "Les bonnes réponses sont cochées.", "");
  };

  // ✅ RESET
  const resetExercise = () => {
    setChecked({});
    setShowFeedback(false);
    setScore(null);
    if (ValidationAlert && typeof ValidationAlert.close === "function") {
      ValidationAlert.close();
    }
  };

  return (
  <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
      {/* العنوان الرئيسي */}
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
        <span className="ex-A" style={{ backgroundColor: "#df4f89" }}>A</span>
        <span className="number-of-q">8</span>{" "}
       Vrai (✔️ ) ou faux ( ✖️) ?
      </header>

      {/* ✅ QUESTIONS LIST - تخطيط شبكي */}
      <div className="page50Q5-questions-grid">
        {sentences.map((sentence) => {
          const correct = correctAnswers.includes(sentence.id);
          const userAnswer = checked[sentence.id];
          const isAnswered = userAnswer !== undefined;
          
          let feedbackState = "";
          if (showFeedback) {
            feedbackState = userAnswer === correct ? "correct" : "incorrect";
          }

          return (
            <div
              key={sentence.id}
              className={`page50Q5-question-card ${feedbackState} ${isAnswered ? "answered" : ""}`}
            >
              <div className="page50Q5-question-header">
                <div className="page50Q5-question-id">{sentence.id})</div>
                <div className="page50Q5-question-text">{sentence.text}</div>
              </div>

              {/* أزرار Vrai/Faux */}
              <div className="page50Q5-answer-buttons">
                <button
                  className={`page50Q5-answer-button page50Q5-vrai-button ${userAnswer === true ? "selected" : ""} ${showFeedback && correct ? "correct-highlight" : ""}`}
                  onClick={() => toggleCheck(sentence.id, true)}
                  disabled={showFeedback}
                >
                  <span className="page50Q5-button-icon">✔️</span>
                  <span className="page50Q5-button-text">Vrai</span>
                 
                </button>
                <button
                  className={`page50Q5-answer-button page50Q5-faux-button ${userAnswer === false ? "selected" : ""} ${showFeedback && !correct ? "correct-highlight" : ""}`}
                  onClick={() => toggleCheck(sentence.id, false)}
                  disabled={showFeedback}
                >
                  <span className="page50Q5-button-icon">✖️</span>
                  <span className="page50Q5-button-text">Faux</span>
                 
                </button>
              </div>

              {/* Feedback message */}
              {showFeedback && (
                <div className="page50Q5-feedback-message">
                  {userAnswer === correct ? (
                    <span className="page50Q5-correct-feedback"></span>
                  ) : (
                    <span className="page50Q5-incorrect-feedback">
                      Incorrect. La réponse correcte est <strong>{correct ? "Vrai" : "Faux"}</strong>
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* بطاقة النتيجة */}
      {score && (
        <div className="page50Q5-score-container">
          <ScoreCardEnhanced score={score} />
        </div>
      )}

      {/* أزرار التحكم */}
          <div className="action-buttons-container flex gap-4">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showCorrectAnswer} className="show-answer-btn">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>
    </div>
  );
};

export default Page5_Q1_CleanAudio;