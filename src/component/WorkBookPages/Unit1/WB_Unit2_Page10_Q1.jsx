import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import "./WB_Unit1_Page6_Q5.css";
import img1 from "../../../assets/unite2pages/svg/U2P10EXE1.svg";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page5_Q2_SAppeler = () => {
  const [answers, setAnswers] = useState({
    b: "",
    c: "",
    d: "",
    f: "",
    g: "",
  });
  const [score, setScore] = useState(null);
  const [answerStatus, setAnswerStatus] = useState({
    b: "",
    c: "",
    d: "",
    f: "",
    g: "",
  });

  const correctAnswers = {
    b: "Êtes",
    c: "suis",
    d: "est",
    f: "Êtes",
    g: "suis",
  };

  const questions = {
    a: "Facteur : Bonjour. Ce colis (1) est pour madame Leblanc",
    b: "(2) ____________ -vous madame Leblanc ?",
    c: "Mme Caron : Non, je (3) ____________ madame Caron.",
    d: "Facteur : Ohhh… Mais ce colis (4) ____________ pour madame Leblanc. Est-ce qu’elle habite ici ?",
    e: "Mme Leblanc : Bonjour monsieur.",
    f: "Facteur : Bonjour. (5) ____________ -vous madame Leblanc ?",
    g: "Mme Leblanc : Oui, je (6) ____________ madame Leblanc.",
    i: "Facteur : Bien. Signez ici, s’il vous plaît. Au revoir",
    j: "Mme Leblanc : Merci, au revoir."
  };

  // === HANDLE CHANGE ===
  const handleChange = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setAnswerStatus(prev => ({ ...prev, [key]: "" }));
  };

  // === CHECK ANSWER ===
  const checkAnswer = () => {
    const newStatus = {};
    let correctCount = 0;
    let incomplete = false;

    Object.keys(correctAnswers).forEach(key => {
      const val = answers[key]?.trim();
      if (!val) incomplete = true;

      const isCorrect = val.toLowerCase() === correctAnswers[key].toLowerCase();
      newStatus[key] = isCorrect ? "correct" : "wrong";

      if (isCorrect) correctCount++;
    });

    setAnswerStatus(newStatus);

    const total = Object.keys(correctAnswers).length;

    if (incomplete) {
      ValidationAlert.info(
        "Incomplete",
        "Please fill in all fields.",
        `${correctCount}/${total}`
      );
      setScore(null);
    } else {
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
    }
  };

  // === SHOW ANSWER ===
  const showAnswerFunc = () => {
    setAnswers({ ...correctAnswers });

    const newStatus = {};
    Object.keys(correctAnswers).forEach(key => {
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

  // === RESET ===
  const resetExercise = () => {
    const emptyAnswers = {};
    const emptyStatus = {};
    Object.keys(correctAnswers).forEach(key => {
      emptyAnswers[key] = "";
      emptyStatus[key] = "";
    });
    setAnswers(emptyAnswers);
    setAnswerStatus(emptyStatus);
    setScore(null);
  };

  // === INPUT STYLE ===
  const getInputStyle = (key) => {
    if (answerStatus[key] === "correct") return { backgroundColor: "#d4f4dd" };
    if (answerStatus[key] === "wrong") return { backgroundColor: "#f8d7da" };
    return {};
  };

  return (
    <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
     <header
className="header-title-page1 w-full text-left mb-4"
  style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span style={{backgroundColor:"#de4484"}} className="ex-A">2</span> <span style={{color:"black"}} className="number-of-q">1</span>

Complète avec le verbe « être ». Pourquoi le facteur utilise le langage soutenu ?

      </header>

      <div className="page5Q5" style={{ marginLeft:"13%", display:"flex", gap:"20px" }}>
        {/* الأسئلة + الانبوت */}
        <div className="inputs-column">
          {Object.keys(questions).map((key, index) => {
            const parts = questions[key].split(/_+/);
            const hasBlank = parts.length > 1;

            return (
              <div className="input-group" key={key} style={{ marginBottom:"15px" }}>
             <label>
  {(() => {
    // تقسيم النص على :
    const [speaker, rest] = parts[0].includes(":")
      ? parts[0].split(/:(.+)/)
      : [null, parts[0]];

    return (
      <>
        {speaker && (
          <strong style={{ marginRight: "5px" }}>
            {speaker}:
          </strong>
        )}
        {rest}
      </>
    );
  })()}

  {hasBlank && (
    <input
      type="text"
      value={answers[key] || ""}
      onChange={(e) => handleChange(key, e.target.value)}
      style={{ width: "50px", margin: "0 5px", ...getInputStyle(key) }}
    />
  )}

  {parts[1] || ""}
</label>

              </div>
            );
          })}
        </div>

        {/* الصورة على اليمين */}
        <div className="imgQ5wb">
          <img src={img1} alt="Illustration" style={{width:"60%"}} />
        </div>
      </div>

      {score && <ScoreCardEnhanced score={score} />}
<div className="spaces"></div>
      {/* Action Buttons */}
      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn swal-continue">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>
    </div>
  );
};

export default Page5_Q2_SAppeler;
