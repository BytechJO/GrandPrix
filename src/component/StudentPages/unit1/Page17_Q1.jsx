import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/unit1/SoundU1/P17Q1.mp3";
import imgBackground from "../../../assets/unit1/sectionD/P17Q1.svg";
import { FaPlay, FaPause } from "react-icons/fa";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import "./Page17_Q1.css"; // ← الملف الخارجي

/* 🔴 القائمة */
const numbersList = [
  { id: "a", label: "Je suis sud-africain(e)." },
  { id: "b", label: "Je suis canadien(ne)." },
  { id: "c", label: "Je suis indien(ne)." },
  { id: "d", label: "Je suis américain(e)." },
  { id: "e", label: "Je suis finlandais(e)." },
  { id: "f", label: "Je suis australien(ne)." },
  { id: "g", label: "Je suis australien(ne)." },
  { id: "h", label: "Je suis australien(ne)." },
  { id: "i", label: "Je suis australien(ne)." },
  { id: "j", label: "Je suis australien(ne)." },
];

/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  0: "b",
  1: "d",
  2: "h",
  3: "e",
  4: "g",
  5: "a",
  6: "f",
  7: "j",
  8: "c",
  9: "i",
};

/* 🔴 مواقع الـ inputs */
const inputPositions = [
  { id: 0, className: "input-q2-0" },
  { id: 1, className: "input-q2-1" },
  { id: 2, className: "input-q2-2" },
  { id: 3, className: "input-q2-3" },
  { id: 4, className: "input-q2-4" },
  { id: 5, className: "input-q2-5" },
  { id: 6, className: "input-q2-6" },
  { id: 7, className: "input-q2-7" },
  { id: 8, className: "input-q2-8" },
  { id: 9, className: "input-q2-9" },
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
               style={{width:"4%", height:"4%" , backgroundColor:"white"}}
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
