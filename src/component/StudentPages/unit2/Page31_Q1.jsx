import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U2Audio/SecBQ1.mp3";
import imgBackground from "../../../assets/unite2pages/svg/U2P31EXE1.png";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
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

{start:5.0 ,end:6.7, text:"Grand prix A1,"},
{start:6.7 ,end:8.0, text:"unité 2,"},
{start:8.0 ,end:8.7, text:"à l'école."},
{start:9.6 ,end:11.4, text:"Section B. Qu'est-ce que"},
{start:11.4 ,end:12.8, text:"c'est ?"},
{start:12.8 ,end:13.8, text:"Exercice 1."},
{start:14.6 ,end:16.1, text:"Écoute, répète"},
{start:16.1 ,end:17.1, text:"et place"},
{start:17.1 ,end:17.7, text:"dans l'ordre."},
{start:19.8 ,end:20.8, text:"Un feutre."},
{start:22.0 ,end:22.8, text:"Une fenêtre."},
{start:24.6 ,end:25.6, text:"Une chaise."},
{start:27.3 ,end:28.3, text:"Une porte."},
{start:30.2 ,end:30.9, text:"Un bureau."},
{start:32.6 ,end:33.5, text:"Un CD."},
{start:35.6 ,end:38.8, text:"un classeur, un"},
{start:38.8 ,end:39.5, text:"tableau blanc,"},


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
        style={{
          marginLeft: "42%",
          color: "black",
          marginTop: "5%",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        <span className="ex-A" style={{ backgroundColor: "#df4f89" }}>
          B
        </span>
        <span className="number-of-q">1</span>   Écoute, répète et place dans l'ordre.
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
