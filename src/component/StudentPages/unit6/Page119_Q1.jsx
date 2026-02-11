import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U6Audio/u6sbq1.mp3";
import imgBackground from "../../../assets/unit1/sectionD/P119.svg";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import "../unit1/Page17_Q1.css";

/* 🔴 القائمة */


/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  0: "d",
  1: "a",
  2: "b",
  3: "c",
 

};

/* 🔴 مواقع الـ inputs */
const inputPositions = [
  { id: 0, className: "input-page119-0" },
  { id: 1, className: "input-page119-1" },
  { id: 2, className: "input-page119-2" },
  { id: 3, className: "input-page119-3" },


];

/* 🔴 الكابتشن */
const captions = [
   { start: 5.53, end: 6.57, text: "Rempris A1," },
  { start: 6.97, end: 7.95, text: "unité 6," },
  { start: 8.29, end: 8.83, text: "le temps." },
  { start: 9.53, end: 10.25, text: "Section B," },
  { start: 10.69, end: 11.37, text: "les saisons." },
  { start: 12.38, end: 13.43, text: "Exercice 1." },
  { start: 14.24, end: 16.03, text: "Écoute et observe." },

  { start: 18.27, end: 18.97, text: "Au printemps," },
  { start: 19.15, end: 19.85, text: "il fait beau." },
  { start: 20.21, end: 21.23, text: "Il y a du soleil." },
  { start: 21.79, end: 23.77, text: "Les mois du printemps sont mars," },
  { start: 24.06, end: 24.65, text: "avril," },
  { start: 24.86, end: 25.21, text: "mai." },

  { start: 27.36, end: 27.87, text: "En été," },
  { start: 28.27, end: 28.99, text: "il fait chaud." },
  { start: 29.31, end: 30.43, text: "Il y a du soleil." },
  { start: 31.09, end: 33.03, text: "Les mois de l'été sont juin," },
  { start: 33.29, end: 33.87, text: "juillet," },
  { start: 34.24, end: 34.45, text: "août." },

  { start: 36.83, end: 37.67, text: "En automne," },
  { start: 37.67, end: 38.23, text: "il pleut," },
  { start: 38.41, end: 39.29, text: "il y a du vent." },
  { start: 39.68, end: 40.75, text: "Les mois de l'automne" },
  { start: 40.89, end: 42.14, text: "sont septembre," },
  { start: 42.27, end: 43.13, text: "octobre," },
  { start: 43.13, end: 43.85, text: "novembre." },

  { start: 46.08, end: 46.65, text: "En hiver," },
  { start: 46.83, end: 47.65, text: "il fait froid," },
  { start: 47.97, end: 48.69, text: "il neige." },
  { start: 49.25, end: 51.67, text: "Les mois de l'hiver sont décembre," },
  { start: 51.81, end: 52.49, text: "janvier," },
  { start: 52.77, end: 53.25, text: "février." }

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
        <span className="ex-A" style={{ backgroundColor: "#d7a965" }}>B</span>
        <span className="number-of-q">1</span>{" "}
Écoute et observe.    </header>
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
              style={{ width: "7%", height: "7%", backgroundColor: "white", border:"green solid 2px" }}
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
