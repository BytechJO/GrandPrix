import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U5Audio/u5saq1.mp3";
import imgBackground from "../../../assets/unite5pages/SVG/page93Q1.svg";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import "../unit1/Page17_Q1.css"
/* 🔴 القائمة */
const numbersList = [
  { id: "a", label: "Du café" },
  { id: "b", label: "Du beurre" },
  { id: "c", label: "Du jus (d’orange)" },
  { id: "d", label: "Du lait" },
  { id: "e", label: "Du pain" },
  { id: "f", label: "Du sucre" },
  { id: "g", label: "Du chocolat chaud" },
  { id: "h", label: "Du miel" },
  { id: "i", label: "Des céréales" },
  { id: "j", label: "Des croissants" },
  { id: "k", label: "Des fruits" },
  { id: "l", label: "Des toasts" },
  { id: "m", label: "Des tartines" },
  { id: "n", label: "Du thé" },
  { id: "o", label: "Un oeuf à la coque" },
  { id: "p", label: "De la confiture" },
];

/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  0: "p",
  1: "e",
  2: "m",
  3: "h",
  4: "g",
  5: "d",
  6: "i",
  7: "k",
  8: "n",
  9: "j",
  10: "l",
  11: "a",
  12: "f",
  13: "c",
  14: "o",
  15: "b",
};

/* 🔴 مواقع الـ inputs */
const inputPositions = [
  { id: 0, className: "input-Page93Q1-0" },
  { id: 1, className: "input-Page93Q1-1" },
  { id: 2, className: "input-Page93Q1-2" },
  { id: 3, className: "input-Page93Q1-3" },
  { id: 4, className: "input-Page93Q1-4" },
  { id: 5, className: "input-Page93Q1-5" },
  { id: 6, className: "input-Page93Q1-6" },
  { id: 7, className: "input-Page93Q1-7" },
  { id: 8, className: "input-Page93Q1-8" },
  { id: 9, className: "input-Page93Q1-9" },
  { id: 10, className: "input-Page93Q1-10" },
  { id: 11, className: "input-Page93Q1-11" },
  { id: 12, className: "input-Page93Q1-12" },
  { id: 13, className: "input-Page93Q1-13" },
  { id: 14, className: "input-Page93Q1-14" },
  { id: 15, className: "input-Page93Q1-15" },
  
];

/* 🔴 الكابتشن */
const captions = [
  { start:5.1 , end: 6.7, text: "Grand prix A1" },
  { start:6.7 , end: 9.8, text: "unité 5, les repas" },
  { start:9.8 , end: 11.3, text: "section A" },
  { start:11.3 , end: 13.25, text: "le petit-déjeuner" },
  { start:13.25 , end: 15.14, text: "Exercice 1" },
  { start:15.14 , end: 16.30, text: "Écoute" },
  { start:16.30 , end: 18.7, text: "répète et écris le numéro" },
  { start:18.7 , end: 19.6, text: "correspondant." },
  { start:21.1 , end: 22.8, text: "A. Du café." },
  { start:24.48 , end: 26.282, text: "B. Du beurre." },
  { start:27.8 , end: 29.6, text: "C. Du jus d'orange" },
  { start:31.6 , end: 32.7, text: "D. Du lait." },
  { start:34.8 , end: 35.9, text: "E. Du pain." },
  { start:37.5 , end: 39.9, text: "F. Du sucre." },
  { start:39.9 , end: 42.8, text: "G. Du chocolat chaud." },
  { start:44.3 , end: 46.3, text: "H. Du miel." },
  { start:48.21 , end: 50.11, text: "I. Des céréales." },
  { start:52.15 , end: 53.47, text: "J. Des croissants." },
  { start:55.078 , end: 56.658, text: "K. Des fruits." },
  { start:58.29 , end: 60.0, text: "L. Des toasts." },
  { start:60.0 , end: 63.4, text: "M. Des tartines." },
  { start:65.6 , end: 67.0, text: "N, du thé." },
  { start:68.6 , end: 71.3, text: "O, un œuf à la coque." },
  { start:71.3 , end: 74.2, text: "P, de la confiture." },


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
  if (/^[a-pA-P]?$/.test(value)) {
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
        style={{
          marginLeft: "42%",
          color: "black",
          marginTop: "5%",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        <span className="ex-A" style={{ backgroundColor: "#f38180" }}>A</span>
        <span className="number-of-q">1</span>{" "}
      Écoute, répète et écris le numéro correspondant.
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
      <div
  className="numbers-list"
  style={{
    maxHeight: "500px",
    overflowY: "auto",
    paddingRight: "8px",
  }}
>
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
              style={{ width: "4%", height: "4%", backgroundColor: "white" }}
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
