import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U7Audio/u7sbq1.mp3";
import imgBackground from "../../../assets/unite7pages/SVG/page141.svg";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import "../unit1/Page17_Q1.css"

/* 🔴 القائمة */
const numbersList = [
  { id: "a", label: "Se lever" },
  { id: "b", label: "Se brosser les dents" },
  { id: "c", label: "Prendre le petit-déjeuner" },
  { id: "d", label: "S’habiller" },
  { id: "e", label: "Aller à l’école" },
  { id: "f", label: "Rentrer à la maison" },
  { id: "g", label: "Faire ses devoirs" },
  { id: "h", label: "Dîner avec sa famille" },
  { id: "i", label: "Bavarder avec ses amis" },
  { id: "j", label: "Faire du sport" },
  { id: "k", label: "Aller sur les réseaux sociaux" },
  { id: "l", label: "Se coucher" },

];
/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  0: "d",
  1: "b",
  2: "c",
  3: "f",
  4: "e",
  5: "a",
  6: "j",
  7: "h",
  8: "l",
  9: "i",
  10: "k",
  11: "g",


};

/* 🔴 مواقع الـ inputs */
const inputPositions = [
  { id: 0, className: "input-page141-0" },
  { id: 1, className: "input-page141-1" },
  { id: 2, className: "input-page141-2" },
  { id: 3, className: "input-page141-3" },
  { id: 4, className: "input-page141-4" },
  { id: 5, className: "input-page141-5" },
  { id: 6, className: "input-page141-6" },
  { id: 7, className: "input-page141-8" },
  { id: 8, className: "input-page141-9" },
  { id: 9, className: "input-page141-10" },
  { id: 10, className: "input-page141-11" },
  { id: 11, className: "input-page141-12" },

];

const Page5_Q1_CleanAudio2 = () => {
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
  const captions = [

  { start: 5.63, end: 6.75, text: "Rempris A1," },
  { start: 7.07, end: 8.01, text: "unité 7," },
  { start: 8.29, end: 8.95, text: "les loisirs." },
  { start: 9.89, end: 10.71, text: "Section B," },
  { start: 11.01, end: 11.59, text: "ma journée." },

  { start: 12.51, end: 13.56, text: "Exercice 1." },
  { start: 14.14, end: 14.51, text: "Écoute," },
  { start: 15.09, end: 17.09, text: "répète et place dans l'ordre." },

  { start: 17.87, end: 17.89, text: "A." },
  { start: 20.49, end: 21.07, text: "Se lever." },

  { start: 21.07, end: 21.11, text: "B." },
  { start: 23.75, end: 24.67, text: "Se brosser les dents." },

  { start: 24.85, end: 24.87, text: "C." },
  { start: 27.33, end: 28.53, text: "Prendre le petit-déjeuner." },

  { start: 28.53, end: 28.60, text: "D." },
  { start: 31.23, end: 31.67, text: "S'habiller." },

  { start: 31.67, end: 31.79, text: "E." },
  { start: 34.31, end: 35.01, text: "Aller à l'école." },

  { start: 37.28, end: 37.51, text: "F." },
  { start: 37.91, end: 39.05, text: "Rentrer à la maison." },

  { start: 41.31, end: 41.61, text: "G." },
  { start: 42.33, end: 43.53, text: "Faire ses devoirs." },

  { start: 45.61, end: 45.81, text: "H." },
  { start: 46.27, end: 47.69, text: "Dîner avec sa famille." },

  { start: 49.85, end: 50.07, text: "I." },
  { start: 50.49, end: 51.99, text: "Bavarder avec ses amis." },

  { start: 54.05, end: 54.35, text: "J." },
  { start: 54.88, end: 55.73, text: "Faire du sport." },

  { start: 57.69, end: 57.87, text: "K." },
  { start: 58.37, end: 59.87, text: "Aller sur les réseaux sociaux." },

  { start: 61.79, end: 62.19, text: "L." },
  { start: 62.45, end: 63.03, text: "Se coucher." },

  ];
    const updateCaption = (time) => {
    const index = captions.findIndex(
      (cap) => time >= cap.start && time <= cap.end
    );
    setActiveIndex(index !== -1 ? index : null);
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
                style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
            >
                <span style={{ backgroundColor: "#cf7230", color: "#white" }} className="ex-A">B</span>
                <span style={{ color: "black" }} className="number-of-q">1</span>
        Écoute, répète et place dans l’ordre.
            </header>

     <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <div className="audio-popup-read" style={{ width: "30%" }}>
              <div className="audio-inner player-ui">
                <audio
                  ref={audioRef}
                  src={CD6_Pg8_Instruction1_AdultLady}
                  onTimeUpdate={(e) => {
                    const time = e.target.currentTime;
                    setCurrent(time);
                    updateCaption(time);
                  }}
                  onLoadedMetadata={(e) => setDuration(e.target.duration)}
                />
                <div className="top-row">
                  <span className="audio-time">
                    {new Date(current * 1000).toISOString().substring(14, 19)}
                  </span>
                  <input
                    type="range"
                    className="audio-slider"
                    min="0"
                    max={duration}
                    value={current}
                    onChange={(e) => {
                      audioRef.current.currentTime = e.target.value;
                      updateCaption(Number(e.target.value));
                    }}
                    style={{
                      background: `linear-gradient(to right, #430f68 ${(current / duration) * 100}%, #d9d9d9ff ${(current / duration) * 100}%)`,
                    }}
                  />
                  <span className="audio-time">
                    {new Date(duration * 1000).toISOString().substring(14, 19)}
                  </span>
                </div>
    
                <div className="bottom-row flex justify-between items-center">
                  {/* Captions */}
                  <div
                    className={`round-btn ${showCaption ? "active" : ""}`}
                    style={{ position: "relative" }}
                    onClick={() => setShowCaption(!showCaption)}
                  >
                    <TbMessageCircle size={36} />
                    <div
                      className={`caption-inPopup ${showCaption ? "show" : ""}`}
                      style={{ top: "100%", left: "10%" }}
                    >
                      {captions.map((cap, i) => (
                        <p
                          key={i}
                          id={`caption-${i}`}
                          className={`caption-inPopup-line2 ${activeIndex === i ? "active" : ""}`}
                        >
                          {cap.text}
                        </p>
                      ))}
                    </div>
                  </div>
    
                  {/* Play/Pause */}
                  <button className="play-btn2" onClick={togglePlay}>
                    {isPlaying ? <FaPause size={26} /> : <FaPlay size={26} />}
                  </button>
    
                  {/* Settings */}
                  <div className="settings-wrapper">
                    <button
                      className={`round-btn ${showSettings ? "active" : ""}`}
                      onClick={() => setShowSettings(!showSettings)}
                    >
                      <IoMdSettings size={36} />
                    </button>
                    {showSettings && (
                      <div className="settings-popup">
                        <label>Volume</label>
                        <input
                          id="V"
                          type="range"
                          min="0"
                          max="1"
                          step="0.05"
                          value={volume}
                          onChange={(e) => {
                            setVolume(e.target.value);
                            audioRef.current.volume = e.target.value;
                          }}
                        />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

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

        <div className="image-container31">
          <img src={imgBackground} alt="Exercise" />
          {inputPositions.map((pos) => (
            <input
              key={pos.id}
              type="text"
              maxLength="1"
              value={inputs[pos.id] || ""}
              onChange={(e) => handleInputChange(pos.id, e.target.value)}
              className={`input-pos ${pos.className}`}
               style={{width:"6%", height:"6%", borderRadius:"20%", border:"2px solid green", backgroundColor:"white"}}
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
