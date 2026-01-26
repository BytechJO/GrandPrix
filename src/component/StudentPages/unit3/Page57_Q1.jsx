import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U3Audio/U3ScQ1.mp3";
import imgBackground from "../../../assets/unite3pages/svg/P57.png";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import "../unit1/Page17_Q1.css"

/* 🔴 القائمة */
const numbersList = [
  { id: "a", label: "La maison de la famille Dupont." },
  { id: "b", label: "Le salon" },
  { id: "c", label: "La salle à manger" },
  { id: "d", label: "La cuisine" },
  { id: "e", label: "La salle de bains" },
  { id: "f", label: "Le jardin" },
  { id: "g", label: "Le garage" },
  { id: "h", label: "La chambre de M. et Mme Dupont" },
  { id: "i", label: "La chambre de Belle et Bette" },
  { id: "j", label: "La chambre de Ray" },
  { id: "k", label: "La chambre d’amis" },
];

/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  0: "f",
  1: "k",
  2: "e",
  3: "j",
  4: "i",
  5: "e",
  6: "c",
  7: "b",
  8: "h",
  9: "d",
  10:"g",
};

/* 🔴 مواقع الـ inputs */
const inputPositions = [
  { id: 0, className: "input-page57Q1-0" },
  { id: 1, className: "input-page57Q1-1" },
  { id: 2, className: "input-page57Q1-2" },
  { id: 3, className: "input-page57Q1-3" },
  { id: 4, className: "input-page57Q1-4" },
  { id: 5, className: "input-page57Q1-5" },
  { id: 6, className: "input-page57Q1-6" },
  { id: 7, className: "input-page57Q1-7" },
  { id: 8, className: "input-page57Q1-8" },
  { id: 9, className: "input-page57Q1-9" },
  { id: 10, className: "input-page57Q1-10" },
];

/* 🔴 الكابتشن */
const captions = [
    { start:5.47 , end: 6.61, text: "Rempris à 1," },
  { start:7.13 , end: 8.0, text: "unité 3," },
  { start:8.5 , end: 9.5, text: "sous le même toit" },
  { start:10.2 , end: 10.9, text: "Section C," },
  { start:11.5 , end: 12.1, text: "ma maison." },
  { start:13.15 , end: 14.4, text: "Exercice 1." },
  { start:15.4 , end: 17.8, text: "Écoute et écris la lettre correspondante." },
  { start:20.3 , end: 21.9, text: "La maison de la famille Dupont." },
  { start:22.9, end: 23.0, text: "Le salon." },
  { start:25.7 , end: 26.6, text: "La salle à manger." },
  { start:28.8 , end: 29.5, text: "La cuisine." },
  { start:31.8 , end: 32.7, text: "La salle de bain." },
  { start:34.7 , end: 35.55, text: "Le jardin," },
  { start:37.67 , end: 38.5, text: "le garage," },
  { start:40.6 , end: 42.8, text: "la chambre de Monsieur et Madame Dupont," },
  { start:44.8 , end: 46.5, text: "la chambre de Belle et Bête," },
  { start:48.75 , end: 49.79, text: "la chambre de Ray," },
  { start:49.79 , end: 52.55, text: "la chambre d'amis." },

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
    if (/^[a-ka-k]?$/.test(value)) {
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
        style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span  style={{ backgroundColor: "#5e74b7" }} className="ex-A">C</span> <span style={{color:"black"}} className="number-of-q">1</span>Écoute et écris la lettre correspondante :</header>
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
