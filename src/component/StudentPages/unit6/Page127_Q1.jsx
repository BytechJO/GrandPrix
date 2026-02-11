import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U6Audio/u6sdq1.mp3";
import imgBackground from "../../../assets/unit1/sectionD/P127.svg";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import "../unit1/Page17_Q1.css";

/* 🔴 القائمة */
const numbersList = [
  { id: "a", label: "Un sac à main" },
  { id: "b", label: "Des bottes" },
  { id: "c", label: "Un foulard" },
  { id: "d", label: "Une jupe" },
  { id: "e", label: "Des chaussures à talon" },
  { id: "f", label: "Une montre" },
  { id: "g", label: "Un pull / un chemisier" },
  { id: "h", label: "Une veste" },
  { id: "i", label: "Un jean" },
  { id: "j", label: "Un t-shirt" },
  { id: "k", label: "Des lunettes de soleil" },
  { id: "l", label: "Un collier" },
 
];

/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  0: "k",
  1: "c",
  2: "h",
  3: "j",
  4: "i",
  5: "b",
  6: "g",
  7: "l",
  8: "f",
  9: "a",
  10: "e",
  11: "d",

};

/* 🔴 مواقع الـ inputs */
const inputPositions = [
  { id: 0, className: "input-page127-0" },
  { id: 1, className: "input-page127-1" },
  { id: 2, className: "input-page127-2" },
  { id: 3, className: "input-page127-3" },
  { id: 4, className: "input-page127-4" },
  { id: 5, className: "input-page127-5" },
  { id: 6, className: "input-page127-6" },
  { id: 7, className: "input-page127-7" },
  { id: 8, className: "input-page127-8" },
  { id: 9, className: "input-page127-9" },
  { id: 10, className: "input-page127-10" },
  { id: 11, className: "input-page127-11" },

];

/* 🔴 الكابتشن */
const captions = [
  { start: 5.47, end: 6.45, text: "Rempris A1," },
  { start: 6.79, end: 7.49, text: "unité 6," },
  { start: 8.01, end: 8.45, text: "le temps." },
  { start: 9.44, end: 10.11, text: "Section D," },
  { start: 10.49, end: 10.91, text: "la mode." },
  { start: 12.06, end: 13.05, text: "Exercice 1." },
  { start: 13.85, end: 17.15, text: "Écoute les mots, répète et place dans l'ordre." },

  { start: 17.91, end: 20.97, text: "A, un sac à main." },
  { start: 21.07, end: 23.97, text: "B, des bottes." },
  { start: 24.09, end: 27.41, text: "C, un foulard." },
  { start: 29.53, end: 30.67, text: "D, une jupe." },
  { start: 32.85, end: 34.33, text: "E, des chaussures à talons." },
  { start: 36.86, end: 37.95, text: "F, une montre." },
  { start: 40.19, end: 42.41, text: "G, un pull, un chemisier." },
  { start: 44.45, end: 45.63, text: "H, une veste." },
  { start: 46.05, end: 49.19, text: "I, un jean." },
  { start: 51.33, end: 52.79, text: "J, un tee-shirt." },
  { start: 53.09, end: 57.11, text: "K, des lunettes de soleil." },
  { start: 59.19, end: 60.39, text: "L, un collier." }

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
        style={{
          marginLeft: "42%",
          color: "black",
          marginTop: "5%",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        <span className="ex-A" style={{ backgroundColor: "#d7a965" }}>D</span>
        <span className="number-of-q">1</span>{" "}
oute les mots, répète et place dans l’ordre.  </header>
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
              style={{ width: "5%", height: "7%", backgroundColor: "white", border:"blue solid 2px",borderRadius:"50%" }}
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
