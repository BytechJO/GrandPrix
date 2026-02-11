import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U8Audio/u8sbq1.mp3";
import imgBackground from "../../../assets/unit1/sectionD/P163 1.svg";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import "../unit1/Page17_Q1.css";

/* 🔴 القائمة */
const numbersList = [
  { id: "a", label: "J’aime" },
  { id: "b", label: "Des photos" },
  { id: "c", label: "Une demande d’ami" },
  { id: "d", label: "Un statut" },
  { id: "e", label: "Chatter" },
  { id: "f", label: "Une notification" },
  { id: "g", label: "Un calendrier" },
  { id: "h", label: "Commenter" },
  { id: "i", label: "Écrire un commentaire" },
  { id: "j", label: "Partager" },
  { id: "k", label: "Télécharger une photo" },
  { id: "l", label: "Un champ de recherche" },

 
];

/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  0: "i",
  1: "c",
  2: "f",
  3: "b",
  4: "d",
  5: "k",
  6: "a",
  7: "h",
  8: "j",
  9: "l",
  10: "g",
  


};

/* 🔴 مواقع الـ inputs */
const inputPositions = [
  { id: 0, className: "input-page163-0" },
  { id: 1, className: "input-page163-1" },
  { id: 2, className: "input-page163-2" },
  { id: 3, className: "input-page163-3" },
  { id: 4, className: "input-page163-4" },
  { id: 5, className: "input-page163-5" },
  { id: 6, className: "input-page163-6" },
  { id: 7, className: "input-page163-7" },
  { id: 8, className: "input-page163-8" },
  { id: 9, className: "input-page163-9" },
  { id: 10, className: "input-page163-10" },


];

/* 🔴 الكابتشن */
const captions = [
    { start: 5.14, end: 10.02, text: "Grand Prix A1, unité 8, la technologie." },
  { start: 10.16, end: 13.38, text: "Section B, les réseaux sociaux." },
  { start: 13.72, end: 17.78, text: "Exercice 1. Écoute, répète et" },
  { start: 17.78, end: 19.32, text: "place dans l'ordre." },

  { start: 20.87, end: 23.05, text: "1. Une demande d'amis." },
  { start: 24.49, end: 26.59, text: "2. Une notification." },
  { start: 28.31, end: 31.17, text: "3. Un champ de recherche." },
  { start: 32.48, end: 34.78, text: "4. Un calendrier." },
  { start: 36.32, end: 38.96, text: "5. Télécharger une photo." },
  { start: 40.54, end: 42.40, text: "6. Des photos." },
  { start: 42.40, end: 46.24, text: "7. Un statut." },
  { start: 47.59, end: 49.91, text: "8. J'aime." },
  { start: 51.24, end: 53.50, text: "9. Commenter." },
  { start: 54.92, end: 57.08, text: "10. Partager." },
  { start: 58.46, end: 61.26, text: "11. Écrire un commentaire." },
  { start: 62.66, end: 64.08, text: "12. Chatter." },
  { start: 64.08, end: 65.58, text: "13. J'aime." },

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
   if (/^[a-lA-L]?$/.test(value)) {

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
        <span style={{ backgroundColor: "#7cd0f5", color: "#white" }} className="ex-A">B</span>
        <span style={{ color: "black" }} className="number-of-q">1</span>
        Écoute, répète et place dans l’ordre.           </header>
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
              style={{ width: "4%", height: "4%", backgroundColor: "orange" }}
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
