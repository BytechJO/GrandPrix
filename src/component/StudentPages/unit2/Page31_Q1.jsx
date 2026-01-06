import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/unit1/SoundU1/P17Q1.mp3";
import imgBackground from "../../../assets/unite2pages/svg/U2P31EXE1.png";
import { FaPlay, FaPause } from "react-icons/fa";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import "../unit1/Page17_Q1.css"
/* 🔴 القائمة */
const numbersList = [
  { id: "a", label: "Un feutre" },
  { id: "b", label: "Une fenêtre" },
  { id: "c", label: "Une chaise" },
  { id: "d", label: "Une porte" },
  { id: "e", label: "Un bureau" },
  { id: "f", label: "Un CD" },
  { id: "g", label: "Un classeur" },
  { id: "h", label: "Un tableau blanc" },
  { id: "i", label: "Un effaceur" },
];

/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  0: "b",
  1: "h",
  2: "e",
  3: "c",
  4: "i",
  5: "f",
  6: "f",
  7: "g",
  8: "d",
  9: "i",
};

/* 🔴 مواقع الـ inputs */
const inputPositions = [
  { id: 0, className: "input-q3-0" },
  { id: 1, className: "input-q3-1" },
  { id: 2, className: "input-q3-2" },
  { id: 3, className: "input-q3-3" },
  { id: 4, className: "input-q3-4" },
  { id: 5, className: "input-q3-5" },
  { id: 6, className: "input-q3-6" },
  { id: 7, className: "input-q3-8" },
  { id: 8, className: "input-q3-9" },
];

const Page5_Q1_CleanAudio2 = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
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

  const resetAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrent(0);
    }
  };

  const handleInputChange = (index, value) => {
    if (/^[a-jA-J]?$/.test(value)) {
      setInputs({ ...inputs, [index]: value.toLowerCase() });
    }
  };

  const checkAnswer = () => {
    let correctCount = 0;
    Object.keys(correctAnswers).forEach((key) => {
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
    resetAudio();
  };

  return (
    <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
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
        <span className="ex-A" style={{ backgroundColor: "#73C8D2" }}>D</span>{" "}
        <span className="number-of-q">1</span>{" "}
        Écoute, répète et place dans l’ordre.
      </header>

    

      {score && <ScoreCardEnhanced score={score} />}

      <div className="exercise-container">
        <div className="numbers-list">
          <ul>
            {numbersList.map((item) => {
              const isUsed = Object.values(inputs).some((val) => val === item.id);
              return (
                <li key={item.id} className={isUsed ? "used" : ""}>
                  <span className="itemId">{item.id}.</span>
                  <span className="itemText">{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="image-container">
          <img src={imgBackground} alt="Exercise" />
          {inputPositions.map((pos) => (
            <input
              key={pos.id}
              type="text"
              maxLength="1"
              value={inputs[pos.id] || ""}
              onChange={(e) => handleInputChange(pos.id, e.target.value)}
              className={`input-pos ${pos.className}`}
               style={{width:"4%", height:"6%", borderRadius:"50%", backgroundColor:"white"}}
            />
          ))}
        </div>
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

export default Page5_Q1_CleanAudio2;
