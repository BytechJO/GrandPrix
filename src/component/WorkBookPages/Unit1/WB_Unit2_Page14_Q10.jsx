import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import "./WB_Unit1_Page6_Q5.css";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page5_Q2_SAppeler = () => {
  // === STATE ===
  const [answers, setAnswers] = useState({});
  const [score, setScore] = useState(null);
  const [answerStatus, setAnswerStatus] = useState({});

  // === الأسئلة مع الفراغات ____
  const questions = {
    a: "Il est trois heures moins vingt du matin.____",
    b: "Il est cinq heures vingt-cinq de l’après-midi.____",
    c: "Il est neuf heures moins cinq du soir.____",
    d: "Il est onze heures cinq du matin.____",
    e: "Il est six heures et demie du soir.____",
    f: "Il est sept heures du soir.____",
  };

  // === الإجابات النموذجية
  const correctAnswers = {
    a: "2 h 40",
    b: "17 h 25",
    c: "20 h 55",
    d: "11 h 05",
    e: "18 h 30",
    f: "19 h 00",
  };

  // ✅ HANDLE CHANGE
  const handleChange = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setAnswerStatus(prev => ({ ...prev, [key]: "" }));
  };

  // ✅ CHECK ANSWERS
  const checkAnswer = () => {
    const newStatus = {};
    let correctCount = 0;
    let incomplete = false;

    Object.keys(correctAnswers).forEach(key => {
      const val = answers[key]?.trim();
      if (!val) incomplete = true;

      const isCorrect = val?.toLowerCase() === correctAnswers[key].toLowerCase();
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

  // ✅ SHOW ANSWERS
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

  // ✅ RESET
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

  // ✅ INPUT STYLE
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
        <span style={{backgroundColor:"#de4484"}} className="ex-A">2</span> <span style={{color:"black"}} className="number-of-q">10</span>

Indique l’heure.
      </header>

      {/* ✅ QUESTIONS في عمودين */}
      <div className="page5Q5" >
        {/* العمود الأول */}
        <div className="inputs-column" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {Object.keys(questions).slice(0, 6).map((key, index) => (
            <div className="input-group" key={key}>
              <label>
                <strong style={{ fontSize: "20px" }}>{String.fromCharCode(97 + index)} </strong>
                {questions[key].split("____")[0]}
                <input
                  type="text"
                  value={answers[key] || ""}
                  onChange={(e) => handleChange(key, e.target.value)}
                  style={{ width: "150px", margin: "0 5px", ...getInputStyle(key) }}
                />
                {questions[key].split("____")[1]}
              </label>
            </div>
          ))}
        </div>

        {/* العمود الثاني */}
        <div className="inputs-column" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {Object.keys(questions).slice(6, 12).map((key, index) => (
            <div className="input-group" key={key}>
              <label>
                <strong style={{ fontSize: "20px" }}>{String.fromCharCode(97 + 6 + index)} </strong>
                {questions[key].split("____")[0]}
                <input
                  type="text"
                  value={answers[key] || ""}
                  onChange={(e) => handleChange(key, e.target.value)}
                  style={{ width: "150px", margin: "0 5px", ...getInputStyle(key) }}
                />
                {questions[key].split("____")[1]}
              </label>
            </div>
          ))}
        </div>
      </div>

      {score && <ScoreCardEnhanced score={score} />}

      {/* Action Buttons */}
      <div className="action-buttons-container flex gap-4">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>
    </div>
  );
};

export default Page5_Q2_SAppeler;
