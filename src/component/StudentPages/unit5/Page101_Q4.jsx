import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/unit1/SoundU1/U1SAQ5.mp3";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import ValidationAlert from "../../Popup/ValidationAlert";
import flag1 from "../../../assets/unite5pages/SVG/P101Q4-1.svg";
import flag2 from "../../../assets/unite5pages/SVG/P101Q4-2.svg";
import flag3 from "../../../assets/unite5pages/SVG/P101Q4-3.svg";
import { TbMessageCircle } from "react-icons/tb";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page5_Q1_CleanAudio = () => {
  const audioRef = useRef(null);
const [wrongIndexes, setWrongIndexes] = useState([]);

  const [score, setScore] = useState(null);
  const [answers, setAnswers] = useState(["", "", "", "", "","",""]);

  const correctAnswers = [
    "200 g de beurre",
    "4 oeufs",
    "500g de farine",
  ];

const checkAnswer = () => {
  let correctCount = 0;
  let wrongs = [];

  answers.forEach((ans, i) => {
    if (ans.trim() === correctAnswers[i]) {
      correctCount++;
    } else {
      wrongs.push(i);
    }
  });

  setWrongIndexes(wrongs);
  setScore({ correct: correctCount, total: correctAnswers.length });

  if (correctCount === correctAnswers.length) {
    ValidationAlert.success(
      `Excellent! (${correctCount}/${correctAnswers.length})`,
      "All answers are correct!"
    );
  } else {
    ValidationAlert.error(
      `You got ${correctCount} out of ${correctAnswers.length}`,
      "Try again!"
    );
  }
};


  const showAnswerFunc = () => {
    setAnswers([...correctAnswers]);
    setScore({ correct: correctAnswers.length, total: correctAnswers.length });
    ValidationAlert.success(
      "Answers shown",
      "The correct answers have been placed.",
      `${correctAnswers.length}/${correctAnswers.length}`
    );
  };

  const resetExercise = () => {
    setAnswers(["", "", "", "", "","","",""]);
    setScore(null);
  };

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <div className="page-wrapper4 flex flex-col items-center justify-start gap-8 p-4">

      {/* العنوان */}
         <header
className="header-title-page1 w-full text-left mb-4"
  style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span style={{backgroundColor:"#de4484"}} className="ex-A">2</span> <span style={{color:"black"}} className="number-of-q">11</span>

Écris l’heure

      </header>

      {/* الأسئلة */}
      <div className="questions-container40">
     {[
  { label: "a", flag: flag1 },
  { label: "b", flag: flag2 },
  { label: "c", flag: flag3 },
 

].map((item, index) => (
  <div
    key={index}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "0px",
      width: "100%",
      marginBottom: "20px"
    }}
  >
    {/* 🟢 الصورة على اليسار */}
    <img
      src={item.flag}
      alt="flag"
      style={{
        width: "45%",
        height: "auto",
        flexShrink: 0
      }}
    />

    {/* 🔵 الانبوت على اليمين */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        width: "55%"
      }}
    >
      <span style={{ fontWeight: "bold" }}>{item.label}</span>

    <input
  value={answers[index]}
  onChange={(e) => handleInputChange(index, e.target.value)}
  rows={1} // يجعلها سطرين
  
  style={{
  
    width: "100%", // ممتد بعرض الحاوية
    padding: "8px 12px",
    borderRadius: "6px",
    border: wrongIndexes.includes(index)
      ? "2px solid #e74c3c"
      : "1px solid #ccc",
    backgroundColor: wrongIndexes.includes(index)
      ? "#fdecea"
      : "#fff",
    resize: "none", // لمنع تغيير الحجم من قبل المستخدم
    fontSize: "16px",
   
  }}
/>

    </div>
  </div>
))}

      </div>
<div className="spaces"></div>
      {score && <ScoreCardEnhanced score={score} />}

      {/* الأزرار */}
      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">
          Recommencer ↻
        </button>
        <button onClick={showAnswerFunc} className="show-answer-btn swal-continue">
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
