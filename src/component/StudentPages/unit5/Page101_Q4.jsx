import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from  "../../../assets/U5Audio/u5sce4.mp3";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import ValidationAlert from "../../Popup/ValidationAlert";
import flag1 from "../../../assets/unite5pages/SVG/P101Q4-1.svg";
import flag2 from "../../../assets/unite5pages/SVG/P101Q4-2.svg";
import flag3 from "../../../assets/unite5pages/SVG/P101Q4-3.svg";
import { TbMessageCircle } from "react-icons/tb";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page5_Q1_CleanAudio = () => {
 const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const [showCaption, setShowCaption] = useState(false);
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
  const resetAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrent(0);
    }}


  const updateCaption = (time) => {
    const index = captions.findIndex(
      (cap) => time >= cap.start && time <= cap.end,
    );
    setActiveIndex(index !== -1 ? index : null);
  };
const [wrongIndexes, setWrongIndexes] = useState([]);

  const [score, setScore] = useState(null);
  const [answers, setAnswers] = useState(["", "", "", "", "","",""]);

  const correctAnswers = [
    "200 g de beurre",
    "4 oeufs",
    "500g de farine",
  ];

const checkAnswer = () => {
  let correctCount = 0;
  let wrongs = [];

  answers.forEach((ans, i) => {
    if (ans.trim() === correctAnswers[i]) {
      correctCount++;
    } else {
      wrongs.push(i);
    }
  });

  setWrongIndexes(wrongs);
  setScore({ correct: correctCount, total: correctAnswers.length });

  if (correctCount === correctAnswers.length) {
    ValidationAlert.success(
      `Excellent! (${correctCount}/${correctAnswers.length})`,
      "All answers are correct!"
    );
  } else {
    ValidationAlert.error(
      `You got ${correctCount} out of ${correctAnswers.length}`,
      "Try again!"
    );
  }
};

  const captions = [
  { start:5.38 , end: 6.8, text: "Grand prix A1," },
  { start:6.8 , end: 12.2, text: "unité 5, les repas. Section C," },
  { start:12.2 , end: 14.5, text: "les repas en famille." },
  { start:14.5 , end: 16.2, text: "Exercice 4." },
  { start:16.2 , end: 18.4, text: "Écoute et écris combien de" },
  { start:18.4 , end: 20.4, text: "grammes, kilogrammes," },
  { start:20.4 , end: 22.059, text: "de chaque ingrédient il faut" },
  { start:22.060 , end: 23.5, text: "acheter pour faire le gâteau." },
  { start:25.5 , end: 27.1, text: "Nous n'avons pas de beurre," },
  { start:27.1 , end: 29.2, text: "d'œufs et de farine." },
  { start:29.2 , end: 30.4, text: "Pour faire le gâteau," },
  { start:30.4 , end: 31.8, text: "nous devons acheter 200" },
  { start:31.8 , end: 33.049, text: "grammes de beurre," },
  { start:33.050 , end: 34.6, text: "quatre œufs et 500 grammes" },
  { start:34.6 , end: 35.7, text: "de farine." },
  ];
  const showAnswerFunc = () => {
    setAnswers([...correctAnswers]);
    setScore({ correct: correctAnswers.length, total: correctAnswers.length });
    ValidationAlert.success(
      "Answers shown",
      "The correct answers have been placed.",
      `${correctAnswers.length}/${correctAnswers.length}`
    );
  };

  const resetExercise = () => {
    setAnswers(["", "", "", "", "","","",""]);
    setScore(null);
    resetAudio();
  };

  const handleInputChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <div className="page-wrapper4 flex flex-col items-center justify-start gap-8 p-4">

      {/* العنوان */}
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
        <span className="ex-A" style={{ backgroundColor: "#f38180" }}>C</span>
        <span className="number-of-q">2</span>{" "}
Écoute et écris combien de grammes 
kilogrammes de chaque ingrédient <br /> il faut
acheter pour faire le gâteau.     </header>
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
      {/* الأسئلة */}
      <div className="questions-container40">
     {[
  { label: "a", flag: flag1 },
  { label: "b", flag: flag2 },
  { label: "c", flag: flag3 },
 

].map((item, index) => (
  <div
    key={index}
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: "0px",
      width: "100%",
      marginBottom: "20px"
    }}
  >
    {/* 🟢 الصورة على اليسار */}
    <img
      src={item.flag}
      alt="flag"
      style={{
        width: "45%",
        height: "auto",
        flexShrink: 0
      }}
    />

    {/* 🔵 الانبوت على اليمين */}
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        width: "55%"
      }}
    >
      <span style={{ fontWeight: "bold" }}>{item.label}</span>

    <input
  value={answers[index]}
  onChange={(e) => handleInputChange(index, e.target.value)}
  rows={1} // يجعلها سطرين
  
  style={{
  
    width: "100%", // ممتد بعرض الحاوية
    padding: "8px 12px",
    borderRadius: "6px",
    border: wrongIndexes.includes(index)
      ? "2px solid #e74c3c"
      : "1px solid #ccc",
    backgroundColor: wrongIndexes.includes(index)
      ? "#fdecea"
      : "#fff",
    resize: "none", // لمنع تغيير الحجم من قبل المستخدم
    fontSize: "16px",
   
  }}
/>

    </div>
  </div>
))}

      </div>
<div className="spaces"></div>
      {score && <ScoreCardEnhanced score={score} />}

      {/* الأزرار */}
      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">
          Recommencer ↻
        </button>
        <button onClick={showAnswerFunc} className="show-answer-btn swal-continue">
          Afficher la réponse
        </button>
        <button onClick={checkAnswer} className="check-button2">
          Vérifier la réponse✓
        </button>
      </div>
    </div>
  );
};

export default Page5_Q1_CleanAudio;
