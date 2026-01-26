import React, { useState,useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U4Audio/U4SDQ2.mp3";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import img1 from "../../../assets/unite4pages/SVG/P83-2.svg"
const Page5_Q2_SAppeler = () => {
  // ================= STATE =================
  const [answers, setAnswers] = useState({
    a: "",
    c1: "",
    c2: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: "",
    i: ""
  });

  const [answerStatus, setAnswerStatus] = useState({});
  const [score, setScore] = useState(null);
/* 🔴 الكابتشن */
const captions = [
{ start:5.18 , end: 6.36, text: "Rempris A1," },
  { start:6.85 , end: 8.02, text: "unité 4," },
  { start:8.40 , end: 8.82, text: "en ville." },
  { start:9.36 , end: 10.28, text: "Section D." },
  { start:11.13 , end: 11.36, text: "Cannes," },
  { start:11.98 , end: 13.18, text: "une ville de cinéma." },
  { start:13.98 , end: 15.02, text: "Exercice 2." },
  { start:15.45 , end: 17.04, text: "Écoute et écris." },
  { start:19.14 , end: 20.74, text: "Ella est au poste de police." },
  { start:21.21 , end: 22.71, text: "Elle veut aller au supermarché." },
  { start:23.74 , end: 26.40, text: "Marc est au parc et il veut aller au restaurant." },

];
const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);

  const [showCaption, setShowCaption] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [volume, setVolume] = useState(1);
  const [activeIndex, setActiveIndex] = useState(null);


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
 /* 🧠 تحديث الكابتشن */
  const updateCaption = (currentTime) => {
    const index = captions.findIndex(
      (cap) => currentTime >= cap.start && currentTime <= cap.end
    );
    setActiveIndex(index !== -1 ? index : null);
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
  // ================= CORRECT ANSWERS =================
  const correctAnswers = {
    a1: "poste de police.",
    a2: "supermarché",
    b1: "parc",
    b2: "restaurant",

  };

  // ================= QUESTIONS =================
 const questions = {
  a: { label: "a-", text: "a- Ella est au____ Elle veut aller au ____." },
  b: { label: "b-", text: "Marc est au____et il veut aller au____" },
  c: { label: "c-", text: "b-Avec un(e) ami(e), pratiquez différents itinéraires." },
};


  // ================= HANDLERS =================
  const handleChange = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setAnswerStatus(prev => ({ ...prev, [key]: "" }));
  };

  const checkAnswer = () => {
    let correctCount = 0;
    let incomplete = false;
    const newStatus = {};

    Object.keys(correctAnswers).forEach(key => {
      const val = answers[key]?.trim();
      if (!val) incomplete = true;

      const isCorrect = val === correctAnswers[key];
      newStatus[key] = isCorrect ? "correct" : "wrong";
      if (isCorrect) correctCount++;
    });

    setAnswerStatus(newStatus);

    const total = Object.keys(correctAnswers).length;

    if (incomplete) {
      ValidationAlert.info("Incomplete", "Please fill all fields", `${correctCount}/${total}`);
      setScore(null);
      return;
    }

    setScore({ correct: correctCount, total });

    if (correctCount === total) {
      ValidationAlert.success("Excellent!", "All correct!", `${total}/${total}`);
    } else {
      ValidationAlert.error("Result", `Correct ${correctCount} of ${total}`, `${correctCount}/${total}`);
    }
  };

  const showAnswerFunc = () => {
    setAnswers(correctAnswers);
    const status = {};
    Object.keys(correctAnswers).forEach(k => status[k] = "correct");
    setAnswerStatus(status);
    setScore({ correct: Object.keys(correctAnswers).length, total: Object.keys(correctAnswers).length });
    ValidationAlert.success(
      "Answers shown",
      "All correct answers have been filled in.",
      `${Object.keys(correctAnswers).length}/${Object.keys(correctAnswers).length}`
    );
  };

  const resetExercise = () => {
    const empty = {};
    Object.keys(correctAnswers).forEach(k => empty[k] = "");
    setAnswers(empty);
    setAnswerStatus({});
    setScore(null);
  };

  const getInputStyle = (key) => {
    if (answerStatus[key] === "correct") return { backgroundColor: "#d4f4dd" };
    if (answerStatus[key] === "wrong") return { backgroundColor: "#f8d7da" };
    return {};
  };

  // ================= RENDER =================
  return (
    <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">

     <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
      >
        <span style={{ backgroundColor: "#d47176", color: "#white" }} className="ex-A">D</span>
        <span style={{ color: "black" }} className="number-of-q">2</span>
   Écoute et écris.
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
      {/* ================= QUESTIONS ================= */}
      <div className="page22Q1" style={{marginLeft:"0%"}}>
        <div className="inputs-column">
        {Object.entries(questions).map(([key, q]) => {
  const blanks = q.text.match(/____/g)?.length || 0;
  const parts = q.text.split("____");

  return (
    <div className="input-group" key={key}>

      {/* بدون input */}
      {blanks === 0 && <span>{q.text}</span>}

      {/* input واحد */}
      {blanks === 1 && (
        <>
          {parts[0]}
          <input
            type="text"
            value={answers[key] || ""}
            onChange={e => handleChange(key, e.target.value)}
            style={{ width: "180px", margin: "0 5px", ...getInputStyle(key) }}
          />
          {parts[1]}
        </>
      )}

      {/* inputان */}
      {blanks === 2 && (
        <>
          {parts[0]}
          <input
            type="text"
            value={answers[`${key}1`] || ""}
            onChange={e => handleChange(`${key}1`, e.target.value)}
            style={{ width: "160px", margin: "0 5px", ...getInputStyle(`${key}1`) }}
          />
          {parts[1]}
          <input
            type="text"
            value={answers[`${key}2`] || ""}
            onChange={e => handleChange(`${key}2`, e.target.value)}
            style={{ width: "160px", margin: "0 5px", ...getInputStyle(`${key}2`) }}
          />
          {parts[2]}
        </>
      )}
    </div>
  );
})}
<img src={img1} alt="" />
        </div>
      </div>

      {/* ================= SCORE ================= */}
      {score && <ScoreCardEnhanced score={score} />}

      {/* ================= ACTION BUTTONS ================= */}
      <div className="action-buttons-container flex gap-4">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>

    </div>
  );
};

export default Page5_Q2_SAppeler;
