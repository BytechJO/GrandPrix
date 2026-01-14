import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard"; 
import "./WB_Unit4_Page23_Q4.css"
import backgrid from '../../../assets/workpages/svg/backgrid.png';

/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  "0-0": "c","1-0": "e","2-0": "v","3-0": "a","4-0": "h","5-0": "b","6-0": "i","7-0": "t",
  "0-1": "e","1-1": "z","2-1": "n","3-1": "e",
  "0-2": "j","1-2": "t","2-2": "i","3-2": "b",
  "0-3": "a","1-3": "h","2-3": "a","3-3": "b",
  "0-4": "i","0-5": "n","0-6": "o",
  "7-1": "l","1-7": "t","1-8": "e","1-9": "s","10-1": "u","11-1": "o","12-1": "n"
};

const Page5_Q1_CleanAudio = () => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const [showCaption, setShowCaption] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [inputs, setInputs] = useState({});
  const [score, setScore] = useState(null);

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




  const handleInputChange = (index, value) => {
    setInputs({
      ...inputs,
      [index]: value
    });
  };

  const normalizeString = (str) => {
    return str
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // إزالة الـ accents
  };

  const checkAnswer = () => {
    let correctCount = 0;

    Object.keys(correctAnswers).forEach(key => {
      const userAnswer = inputs[key] ? normalizeString(inputs[key]) : "";
      const correctAnswer = normalizeString(correctAnswers[key]);

      if (userAnswer === correctAnswer) {
        correctCount++;
      }
    });

    const total = Object.keys(correctAnswers).length;
    setScore({ correct: correctCount, total });

    if (correctCount === total) {
      ValidationAlert.success(
        `Excellent! (${correctCount}/${total})`,
        "Toutes les réponses sont correctes!"
      );
    } else if (correctCount === 0) {
      ValidationAlert.info(
        `Toutes les réponses sont incorrectes (${correctCount}/${total})`,
        "Essayez encore!"
      );
    } else {
      ValidationAlert.error(
        `Vous avez ${correctCount} sur ${total} corrects.`,
        "Presque!"
      );
    }
  };

  const showAnswerFunc = () => setInputs(correctAnswers);

  const resetExercise = () => {
    setInputs({});
    setScore(null);
  };

  return (
<div
  className="page-wrapper500 flex flex-col items-center justify-center gap-3 p-4"

>







      {/* Header */}
        <header
className="header-title-page1 w-full text-left mb-4"
  style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span style={{backgroundColor:"#ce5b66"}} className="ex-A">4</span> <span style={{color:"black"}} className="number-of-q">4</span>Mots croisés.
      </header>
      {score && <ScoreCardEnhanced score={score} />}

      <div className="parent">
        {Object.keys(correctAnswers).map((key, i) => (
          <div key={key} className={`div${i + 1}`}>
            <input
              type="text"
              maxLength={1}
              value={inputs[key] || ""}
              onChange={(e) => handleInputChange(key, e.target.value)}
            />
          </div>
        ))}
      </div>

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
