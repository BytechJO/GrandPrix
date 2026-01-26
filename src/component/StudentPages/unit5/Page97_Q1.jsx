import React, { useState, useRef } from "react";
import imgBackground from "../../../assets/unite5pages/SVG/P97Q1.svg";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U5Audio/u5sbq1.mp3";

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
    resetAudio();
  };
const captions = [
    { start:5.18 , end: 8.15, text: "Grand prix A1, unité 5" },
  { start:8.15 , end: 9.30, text: "les repas" },
  { start:9.30 , end: 10.5, text: "section B" },
  { start:10.5 , end: 12.2, text: "des repas sains." },
  { start:12.27 , end: 14.13, text: "Exercice 1." },
  { start:14.13 , end: 15.2, text: "Écoute" },
  { start:15.2 , end: 17.7, text: "répète et écris le numéro" },
  { start:17.7 , end: 18.5, text: "correspondant." },
  { start:37.117 , end: 39.067, text: "F. Un chou." },
  { start:93.067 , end: 42.167, text: "G. Un poivron." },
  { start:42.2 , end: 45.5, text: "H. Une banane." },
  { start:45.5 , end: 47.8, text: "I. Une orange." },
  { start:50.077 , end: 51.2, text: "J. Une pomme." },
  { start:53.33 , end: 54.697, text: "K. Une poire." },
  { start:56.65 , end: 58.437, text: "L. Une pastèque." },
  { start:60.0 , end: 62.5, text: "M. Des raisins." },
  { start:62.5 , end: 65.157, text: "N. Des fraises." },

];
const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  const [showCaption, setShowCaption] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [volume, setVolume] = useState(1);
  const [activeIndex, setActiveIndex] = useState(null);
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

  /* 🔁 إعادة الصوت */
  const resetAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrent(0);
    }
  };
    /* 🧠 تحديث الكابتشن */
  const updateCaption = (currentTime) => {
    const index = captions.findIndex(
      (cap) => currentTime >= cap.start && currentTime <= cap.end
    );
    setActiveIndex(index !== -1 ? index : null);
  };
  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
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
        <span className="ex-A" style={{ backgroundColor: "#f38180" }}>B</span>
        <span className="number-of-q">1</span>{" "}
      Écoute, répète et écris le numéro correspondant.
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
          
                      {/* Time & Slider */}
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
                            background: `linear-gradient(to right, #430f68 ${
                              (current / duration) * 100
                            }%, #d9d9d9ff ${(current / duration) * 100}%)`,
                          }}
                        />
          
                        <span className="audio-time">
                          {new Date(duration * 1000).toISOString().substring(14, 19)}
                        </span>
                      </div>
          
                      {/* Controls */}
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
                                className={`caption-inPopup-line2 ${
                                  activeIndex === i ? "active" : ""
                                }`}
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
