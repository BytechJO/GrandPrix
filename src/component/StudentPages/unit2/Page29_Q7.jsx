import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard"; 
import "./Page29_Q7.css";

/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  0: "b",
  1: "a",

};

const Page5_Q1_CleanAudio = () => {
  const [inputs, setInputs] = useState({});
  const [score, setScore] = useState(null);

  const checkAnswer = () => {
    let correctCount = 0;
    Object.keys(correctAnswers).forEach(key => {
      if (inputs[key] === correctAnswers[key]) correctCount++;
    });

    const total = Object.keys(correctAnswers).length;
    setScore({ correct: correctCount, total });

    if (correctCount === total) {
      ValidationAlert.success(
        `Excellent! (${correctCount}/${total})`,
        "All answers correct!"
      );
    } else if (correctCount === 0) {
      ValidationAlert.error(
        `All answers incorrect (${correctCount}/${total})`,
        "Try again!"
      );
    } else {
      ValidationAlert.error(
        `You got ${correctCount} out of ${total} correct.`,
        "Almost there!"
      );
    }
  };

  const showAnswerFunc = () => setInputs(correctAnswers);

  const resetExercise = () => {
    setInputs({});
    setScore(null);
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">

      {/* Header */}
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
        <span className="number-of-q">7</span>{" "}
        Lis et devine à qui appartient le sac à dos.
      </header>

      {/* div الصورة الأولى */}
      <div className="image-background29 image-A">
        <input 
          type="text" 
          className="image-input" 
          value={inputs[0] || ""} 
          onChange={(e) => setInputs({...inputs, 0: e.target.value})}
        />
      </div>

      {/* div الصورة الثانية */}
      <div className="image-background29 image-B">
        <input 
          type="text" 
          className="image-input" 
          value={inputs[1] || ""} 
          onChange={(e) => setInputs({...inputs, 1: e.target.value})}
        />
      </div>

      {score && <ScoreCardEnhanced score={score} />}

      {/* Buttons */}
      <div className="action-buttons-container">
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

export default Page5_Q1_CleanAudio;
