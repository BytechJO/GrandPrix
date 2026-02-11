import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U7Audio/u7saq1.mp3";
import imgBackground from "../../../assets/unit1/sectionD/P137Q1 1.svg";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import "../unit1/Page17_Q1.css";

/* 🔴 القائمة */
const numbersList = [
  { id: "a", label: "Jouer aux jeux vidéo" },
  { id: "b", label: "Dessiner" },
  { id: "c", label: "Faire du skateboard" },
  { id: "d", label: "Lire" },
  { id: "e", label: "Pêcher" },
  { id: "f", label: "Chatter" },
  { id: "g", label: "Faire de la randonnée" },
  { id: "h", label: "Faire de l’équitation" },
  { id: "i", label: "Faire la cuisine" },
 
];

/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  0: "f",
  1: "i",
  2: "e",
  3: "h",
  4: "c",
  5: "b",
  6: "g",
  7: "d",
  8: "a",

};

/* 🔴 مواقع الـ inputs */
const inputPositions = [
  { id: 0, className: "input-page123-0" },
  { id: 1, className: "input-page123-1" },
  { id: 2, className: "input-page123-2" },
  { id: 3, className: "input-page123-3" },
  { id: 4, className: "input-page123-4" },
  { id: 5, className: "input-page123-55" },
  { id: 6, className: "input-page123-6" },
  { id: 7, className: "input-page123-7" },
  { id: 8, className: "input-page123-8" },

];

/* 🔴 الكابتشن */
const captions = [
     { start: 5.50, end: 6.64, text: "Rempris A1," },
  { start: 7.10, end: 8.08, text: "unité 7," },
  { start: 8.40, end: 8.96, text: "les loisirs." },
  { start: 9.76, end: 10.52, text: "Section A," },
  { start: 11.20, end: 11.86, text: "mes loisirs." },
  { start: 12.80, end: 13.88, text: "Exercice 1." },
  { start: 14.59, end: 15.12, text: "Écoute," },
  { start: 15.42, end: 17.46, text: "répète et place dans l'ordre." },
  { start: 19.90, end: 21.08, text: "Jouer aux jeux vidéo." },
  { start: 23.20, end: 23.80, text: "Lire." },
  { start: 25.86, end: 26.96, text: "Faire de la randonnée." },
  { start: 28.99, end: 29.54, text: "Dessiner." },
  { start: 31.62, end: 32.02, text: "Pêcher." },
  { start: 34.31, end: 35.49, text: "Faire de l'équitation." },
  { start: 37.51, end: 38.71, text: "Faire du skateboard." },
  { start: 40.93, end: 41.49, text: "Chatter." },
  { start: 43.53, end: 44.41, text: "Faire la cuisine." },

];

const Page5_Q1_CleanAudio2 = () => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  const [showCaption, setShowCaption] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [volume, setVolume] = useState(1);
  const [activeIndex, setActiveIndex] = useState(null);

  const [inputs, setInputs] = useState({});
  const [score, setScore] = useState(null);

  /* ▶️ تشغيل / إيقاف */
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

  /* 📝 إدخال الإجابة */
  const handleInputChange = (index, value) => {
    if (/^[a-jA-J]?$/.test(value)) {
      setInputs({ ...inputs, [index]: value.toLowerCase() });
    }
  };

  /* 🧠 تحديث الكابتشن */
  const updateCaption = (currentTime) => {
    const index = captions.findIndex(
      (cap) => currentTime >= cap.start && currentTime <= cap.end
    );
    setActiveIndex(index !== -1 ? index : null);
  };

  /* ✅ تحقق */
  const checkAnswer = () => {
    let correctCount = 0;

    Object.keys(correctAnswers).forEach((key) => {
      if (inputs[key] === correctAnswers[key]) correctCount++;
    });

    const total = Object.keys(correctAnswers).length;
    setScore({ correct: correctCount, total });

    if (correctCount === total) {
      ValidationAlert.success(
        `Excellent! (${correctCount}/${total})`,
        "All answers correct!"
      );
    } else if (correctCount === 0) {
      ValidationAlert.error(
        `All answers incorrect (${correctCount}/${total})`,
        "Try again!"
      );
    } else {
      ValidationAlert.error(
        `You got ${correctCount} out of ${total} correct.`,
        "Almost there!"
      );
    }
  };

  /* 👀 إظهار الحل */
  const showAnswerFunc = () => {
    setInputs(correctAnswers);
  };

  /* 🔄 إعادة التمرين */
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
                <span style={{ backgroundColor: "#cf7230", color: "#white" }} className="ex-A">Aِ</span>
                <span style={{ color: "black" }} className="number-of-q">1</span>
       Écoute, répète et place dans l’ordre.
            </header>
      {/* 🔊 AUDIO PLAYER */}
      {/* AUDIO PLAYER */}
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

      {/* 🧩 التمرين */}
      <div className="exercise-container">
        <div className="numbers-list">
          <ul>
            {numbersList.map((item) => {
              const isUsed = Object.values(inputs).includes(item.id);
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
              style={{ width: "5%", height: "5%", backgroundColor: "white", border:"pink solid 2px" }}
            />
          ))}
        </div>
      </div>

      {/* 🔘 أزرار */}
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
