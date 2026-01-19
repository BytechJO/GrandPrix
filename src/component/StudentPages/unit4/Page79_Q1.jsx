import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U4Audio/U4SCQ1.mp3";
import imgBackground from "../../../assets/unite4pages/SVG/79Q1.svg";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import "../unit1/Page17_Q1.css"

/* 🔴 القائمة */
const numbersList = [
  { id: "a", label: "Restaurant" },
  { id: "b", label: "Hôpital" },
  { id: "c", label: "Supermarché" },
  { id: "d", label: "Station-service" },
  { id: "e", label: "Banque" },
  { id: "f", label: "École" },
  { id: "g", label: "Cinéma" },
  { id: "h", label: "Stade" },
  { id: "i", label: "Poste de police" },
  { id: "j", label: "Magasin de chaussures" },
  { id: "k", label: "Magasin de vêtements" },
  { id: "l", label: "Bijouterie" },
  { id: "m", label: "Parc" },
  { id: "n", label: "Parc" },
];
/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  0: "m",
  1: "a",
  2: "e",
  3: "n",
  4: "i",
  5: "f",
  6: "d",
  7: "a",
  8: "k",
  9: "l",
  10: "b",
  11: "j",
  12: "c",
  13: "g",
  14: "h",
  15: "",

};

/* 🔴 مواقع الـ inputs */
const inputPositions = [
  { id: 0, className: "input-page79-0" },
  { id: 1, className: "input-page79-1" },
  { id: 2, className: "input-page79-2" },
  { id: 3, className: "input-page79-3" },
  { id: 4, className: "input-page79-4" },
  { id: 5, className: "input-page79-5" },
  { id: 6, className: "input-page79-6" },
  { id: 7, className: "input-page79-8" },
  { id: 8, className: "input-page79-9" },
  { id: 9, className: "input-page79-10" },
  { id: 10, className: "input-page79-11" },
  { id: 11, className: "input-page79-12" },
  { id: 12, className: "input-page79-13" },
  { id: 13, className: "input-page79-14" },
  { id: 14, className: "input-page79-15" },
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

  { start:5.60 , end: 6.72, text: "Rempris A1," },
  { start:7.0 , end: 8.0, text: "unité 4," },
  { start:8.35 , end: 8.72, text: "en ville." },
  { start:9.63 , end: 10.08, text: "Section C." },
  { start:11.13 , end: 11.72, text: "Briançon," },
  { start:12.10 , end: 13.76, text: "une ville d'art et d'histoire." },
  { start:14.94 , end: 15.99, text: "Exercice 1." },
  { start:16.7 , end: 17.10, text: "Écoute," },
  { start:17.85 , end: 19.74, text: "répète et place dans l'ordre." },
  { start:20.34 , end: 20.36, text: "A." },
  { start:22.62 , end: 23.26, text: "Restaurant." },
  { start:23.26 , end: 23.32, text: "B" },
  { start:26.11 , end: 26.64, text: "Hôpital." },
  { start:26.64 , end: 26.82, text: "c" },
  { start:29.58 , end: 30.28, text: "Supermarché." },
  { start:32.26 , end: 32.52, text: "D." },
  { start:32.9 , end: 33.6, text: "Station-service." },
  { start:35.8 , end: 36.0, text: "E." },
  { start:36.64 , end: 36.9, text: "Banque." },
  { start:39.10 , end: 39.3, text: "F" },
  { start:39.7 , end: 40.28, text: "École." },
  { start:42.40 , end: 42.7, text: "G." },
  { start:43.28 , end: 43.7, text: "Cinéma." },
  { start:45.9 , end: 46.24, text: "H" },
  { start:46.78 , end: 47.20, text: "Stade." },
  { start:47.20 , end: 47.29, text: "I" },
  { start:50.0 , end: 50.9, text: "Poste de police." },
  { start:53.0 , end: 53.4, text: "J." },
  { start:53.9 , end: 55.22, text: "Magasin de chaussures." },
  { start:55.22 , end: 55.3, text: "k" },
  { start:57.7 , end: 58.9, text: "Magasin de vêtements." },
  { start:61.0 , end: 61.3, text: "L" },
  { start:61.3 , end: 62.24, text: "Bijouterie." },
  { start:64.35 , end: 64.68, text: "M." },
  { start:65.09 , end: 65.40, text: "Parc." },
  { start:67.77 , end: 68.12, text: "N" },
  { start:68.12 , end: 69.08, text: "Hôtel" },


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
        <span style={{ backgroundColor: "#d47176", color: "#white" }} className="ex-A">C</span>
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
               style={{width:"6%", height:"6%", borderRadius:"50%", backgroundColor:"white"}}
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
