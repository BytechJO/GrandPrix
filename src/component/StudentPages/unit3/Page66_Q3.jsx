import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/unit1/SoundU1/U1SAQ5.mp3";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import ValidationAlert from "../../Popup/ValidationAlert";
import "../unit1/CSSPAGE/Q5U1.css";
import img1 from "../../../assets/unite3pages/svg/P66-01.png";
import img2 from "../../../assets/unite3pages/svg/P66-02.png";
import img3 from "../../../assets/unite3pages/svg/P66-03.png";
import img4 from "../../../assets/unite3pages/svg/P66-04.png";
import img5 from "../../../assets/unite3pages/svg/P66-05.png";

import { TbMessageCircle } from "react-icons/tb";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page5_Q1_CleanAudio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [volume, setVolume] = useState(1);
  const [score, setScore] = useState(null);

  // ✅ INPUT STATES
  const [answers, setAnswers] = useState(["", "", "", "", ""]);

  // ✅ CORRECT ANSWERS
  const correctAnswers = [
    "est policier",
    "est avocate",
    "est pompier",
    "Il est scientifique",
    "est chef"
  ];

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const resetAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrent(0);
    }
  };

  const checkAnswer = () => {
    let correctCount = 0;
    answers.forEach((ans, i) => {
      if (ans.trim() === correctAnswers[i]) correctCount++;
    });

    setScore({ correct: correctCount, total: correctAnswers.length });

    if (correctCount === correctAnswers.length) {
      ValidationAlert.success(
        `Excellent! (${correctCount}/${correctAnswers.length})`,
        "All answers are correct!"
      );
    } else if (correctCount === 0) {
      ValidationAlert.error(
        `All answers are incorrect. (${correctCount}/${correctAnswers.length})`,
        "Try again!"
      );
    } else {
      ValidationAlert.error(
        `You got ${correctCount} out of ${correctAnswers.length} correct.`,
        "Almost there!"
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
    setAnswers(["", "", "", "", ""]);
    setScore(null);
    resetAudio();
  };

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };
const labels = [
  "ll",
  "Elle",
  "ll",
  "Elle",
  "ll"
];

  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
    <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span  style={{ backgroundColor: "#a4dce7", color:"#5e74b7" }} className="ex-A">Grammaire</span> <span style={{color:"black"}} className="number-of-q">3</span>Écris la profession des personnages.</header>
    

   
      {score && <ScoreCardEnhanced score={score} />}

      {/* Questions */}
      <div className="q6-body">
        {[img1, img2, img3, img4, img5].map((img, i) => (
          <div key={i} className="q5-character-group">
            <img src={img} alt={`Character ${i + 1}`} className="q5-character-img" style={{ height: "30%", width: "50%" }} />
            <span className="q5-label">
  {labels[i]}
</span>

<input
  type="text"
  value={answers[i]}
  onChange={(e) => handleInputChange(i, e.target.value)}
  className="q5-input"
  style={{ height: "50%", width: "70%" }}
/>

          </div>
        ))}
      </div>

      {/* Action Buttons */}
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
