import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U3Audio/U3SBQ2.mp3";
import imgBackground from "../../../assets/unite3pages/svg/page53Q1.svg";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import "./Page53_Q1.css"
/* 🔴 القائمة */


/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  0: "c",
  1: "e",
  2: "b",
  3: "a",
  4: "d",
  5: "e",
  6: "c",
  7: "a",
  8: "d",
  9: "b",
};

/* 🔴 مواقع الـ inputs */
const inputPositions = [
  { id: 0, className: "input-q53p-0" },
  { id: 1, className: "input-q53p-1" },
  { id: 2, className: "input-q53p-2" },
  { id: 3, className: "input-q53p-3" },
  { id: 4, className: "input-q53p-4" },
  { id: 5, className: "input-q53p-5" },
  { id: 6, className: "input-q53p-6" },
  { id: 7, className: "input-q53p-7" },
  { id: 8, className: "input-q53p-8" },
  { id: 9, className: "input-q53p-9" },
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

 { start:5.6 , end: 6.4, text: "Grand prix" },
  { start:6.4 , end: 8.6, text: "A1, unité 3." },
  { start:9.3 , end: 10.0, text: "Sous le même" },
  { start:10.0 , end: 10.3, text: "toit." },
  { start:11.3 , end: 12.1, text: "Section B." },
  { start:12.6 , end: 14.0, text: "Mon rêve est..." },
  { start:14.8 , end: 16.6, text: "Exercice 2." },
  { start:16.6 , end: 17.7, text: "Écoute et mets" },
  { start:17.7 , end: 18.6, text: "en relation les" },
  { start:18.6 , end: 19.5, text: "professions et" },
  { start:19.5 , end: 20.8, text: "leurs images." },
  { start:22.8 , end: 23.8, text: "Le top 5 des" },
  { start:23.8 , end: 24.4, text: "professions de" },
  { start:24.4 , end: 26.5, text: "rêve des ados." },
  { start:26.5 , end: 27.3, text: "Une fille veut" },
  { start:27.3 , end: 28.0, text: "souvent être" },
  { start:28.9 , end: 30.1, text: "a avocate" },
  { start:32.2 , end: 35.9, text: "b médecin, c" },
  { start:35.9 , end: 37.8, text: "scientifique," },
  { start:39.0 , end: 39.6, text: "d " },
  { start:39.6 , end: 42.4, text: "chef, e" },
  { start:42.4 , end: 43.1, text: "professeur." },
  { start:45.1 , end: 45.9, text: "Un garçon veut" },
  { start:45.9 , end: 46.3, text: "souvent" },
  { start:46.3 , end: 46.5, text: "être" },
  { start:47.7 , end: 51.5, text: "a : athlète, b :" },
  { start:51.5 , end: 54.7, text: "pompier, c :" },
  { start:54.7 , end: 55.4, text: "ingénieur," },
  { start:57.5 , end: 61.2, text: "d pilote, e :" },
  { start:61.3 , end: 62.3, text: "policier" },


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
        style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span  style={{ backgroundColor: "#5e74b7" }} className="ex-A">B</span> <span style={{color:"black"}} className="number-of-q">1</span>Lis la page de la revue et réponds aux questions.</header>

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
               style={{width:"4%", height:"6% ",borderColor:"pink", backgroundColor:"white"}}
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
