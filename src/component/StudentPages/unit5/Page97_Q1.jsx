import React, { useState, useRef } from "react";
import imgBackground from "../../../assets/unite5pages/SVG/P97Q1.svg";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import "../unit2/Page27_Q1.css";

/* 🔴 القائمة بالأرقام */
const numbersList = [
  { id: "1", label: "Des pommes de terre" },
  { id: "2", label: "Une carotte" },
  { id: "3", label: "Un oignon" },
  { id: "4", label: "Une betterave" },
  { id: "5", label: "Des tomates" },
  { id: "6", label: "Un chou" },
  { id: "7", label: "Un poivron" },
  { id: "8", label: "Une banane" },
  { id: "9", label: "Une orange" },
  { id: "10", label: "Une pomme" },
  { id: "11", label: "Une poire" },
  { id: "12", label: "Une pastèque" },
  { id: "13", label: "Des raisins" },
  { id: "14", label: "Des fraises" },
];

/* 🔴 الإجابات الصحيحة بالأرقام */
const correctAnswers = {
  0: "6", 1: "7", 2: "4", 3: "3", 4: "1",
  5: "2", 6: "5", 7: "13", 8: "12", 9: "10",
  10: "9", 11: "11", 12: "14",13:"8",14:"8",
};

const Page27_Q1_CleanAudio = () => {
  const [inputs, setInputs] = useState({});
  const [score, setScore] = useState(null);

  const handleInputChange = (index, value) => {
    if (/^\d*$/.test(value)) { // يسمح فقط بالأرقام
      setInputs({ ...inputs, [index]: value });
    }
  };

  const checkAnswer = () => {
    let correctCount = 0;
    Object.keys(correctAnswers).forEach(key => {
      if (inputs[key] === correctAnswers[key]) correctCount++;
    });
    const total = Object.keys(correctAnswers).length;
    setScore({ correct: correctCount, total });

    if (correctCount === total) {
      ValidationAlert.success(`Excellent! (${correctCount}/${total})`, "All answers correct!");
    } else if (correctCount === 0) {
      ValidationAlert.error(`All answers incorrect (${correctCount}/${total})`, "Try again!");
    } else {
      ValidationAlert.error(`You got ${correctCount} out of ${total} correct.`, "Almost there!");
    }
  };

  const showAnswerFunc = () => setInputs(correctAnswers);

  const resetExercise = () => {
    setInputs({});
    setScore(null);
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
      <header className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft:"42%", color:"black", marginTop:"5%", fontSize:"25px", fontWeight:"bold" }}
      >
        <span className="ex-A" style={{ backgroundColor:"#df4f89" }}>A</span>
        <span className="number-of-q">1</span>{" "}
        Observe les objets. Nomme si tu peux.
      </header>

      {score && <ScoreCardEnhanced score={score} />}

      <div className="exerciseContainer">
        <div className="numbersList">
          <ul className="list">
            {numbersList.map(item => {
              const isUsed = Object.values(inputs).some(val => val === item.id);
              return (
                <li key={item.id} className={`listItem ${isUsed?"used":""}`}>
                  <span className="itemId">{item.id}.</span>
                  <span className={`itemText ${isUsed?"usedText":""}`}>{item.label}</span>
                </li>
              )
            })}
          </ul>
        </div>

        <div className="imageContainer">
          <img src={imgBackground} alt="Exercise" className="exerciseImage"/>
          
          {/* Inputs positioned via CSS */}
          {Array.from({length:14}).map((_, idx) => (
            <input
              key={idx}
              type="text"
              maxLength="2" // يسمح بكتابة رقمين مثل 10,11,12,13
              value={inputs[idx] || ""}
              onChange={(e) => handleInputChange(idx, e.target.value)}
              className={`inputPos2 inputs97${idx+1}`}
              style={{width:"3%", borderRadius:"50%", border:"none", height:"6%", background:"#58d3ffc7"}}
            />
          ))}
        </div>
      </div>
<div className="spaces"></div>
      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>
    </div>
  )
}

export default Page27_Q1_CleanAudio;
