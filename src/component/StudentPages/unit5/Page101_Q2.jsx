import React, { useState,useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U5Audio/u5sce2.mp3";
const Page5_Q2_SAppeler = () => {
  // ================= STATE =================
  const [answers, setAnswers] = useState({
    a:"",
    b:"",
    c:"",
    d:"",
    e:"",
    f:"",
    g:"",
    h:"",
    i:"",
  
  });

  const [answerStatus, setAnswerStatus] = useState({});
  const [score, setScore] = useState(null);

  // ================= CORRECT ANSWERS =================
  const correctAnswers = {
    a:"1",
    b:"eau minérale",
    c:"oeufs",
    d:"de fromage",
    e:"saucisses",
    f:"poisson",
    g:"1",
    h:"d’huile,",
    i:"de lait",

  };

  // ================= QUESTIONS =================
  const questions = {
    a: { label: "a-", text: "Je dois acheter :" },
    b: { label: "b-", text: " ____ paquet de pâtes" },
    c: { label: "c-", text: "2 bouteilles d' ____ " },
    d: { label: "d-", text: "4____ " },
    e: { label: "d-", text: "1 morceau____ " },
    f: { label: "d-", text: "1 kilo de____ " },
    g: { label: "d-", text: "200 grammes de____ " },
    h: { label: "d-", text: "1 bouteille____ " },
    i: { label: "d-", text: "2 briques____ " },
    
  };
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

  const captions = [
   { start:5.3 , end: 8.8, text: "Grand prix A1, unité 5," },
  { start:8.8 , end: 11.9, text: "les repas. Section C," },
  { start:11.9 , end: 14.11, text: "les repas en famille." },
  { start:14.12 , end: 15.96, text: "Exercice 2" },
  { start:15.96 , end: 17.9, text: "écoute et écris ce que" },
  { start:17.9 , end: 19.11, text: "l'homme doit acheter." },
  { start:21.5 , end: 23.0, text: "Je dois acheter" },
  { start:23.0 , end: 26.0, text: "un paquet de pâtes," },
  { start:26.0 , end: 28.8, text: "deux bouteilles d'eau minérale," },
  { start:28.8 , end: 30.19, text: "quatre œufs," },
  { start:30.20 , end: 33.129, text: "un morceau de fromage," },
  { start:33.129 , end: 35.2, text: "un kilo de saucisses," },
  { start:35.2 , end: 38.2, text: "deux cents grammes de poisson," },
  { start:38.2 , end: 40.039, text: "un poulet," },
  { start:40.039 , end: 41.9, text: "une bouteille d'huile," },
  { start:41.950 , end: 43.619, text: "deux briques de lait." },
  ];

  const updateCaption = (time) => {
    const index = captions.findIndex(
      (cap) => time >= cap.start && time <= cap.end,
    );
    setActiveIndex(index !== -1 ? index : null);
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
   const resetAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrent(0);
    }
  };
  const resetExercise = () => {
    const empty = {};
    Object.keys(correctAnswers).forEach(k => empty[k] = "");
    setAnswers(empty);
    setAnswerStatus({});
    setScore(null);
    resetAudio();
  };

  const getInputStyle = (key) => {
    if (answerStatus[key] === "correct") return { backgroundColor: "" };
    if (answerStatus[key] === "wrong") return { backgroundColor: "#f8d7da" };
    return {};
  };

  // ================= RENDER =================
  return (
    <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">

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
Écoute et écris ce que l’homme
doit acheter.      </header>
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
      {/* ================= QUESTIONS ================= */}
      <div className="page22Q1" style={{marginLeft:"0%"}}>
        <div className="inputs-column" style={{backgroundColor:"#a2dbe4", borderRadius:"20px", paddingLeft:"12%", paddingTop:"1%", paddingBottom:"1%"}}>
          {Object.entries(questions).map(([key, q]) => {
            const blanks = q.text.match(/____/g)?.length || 0;
            const parts = q.text.split("____");

            return (
              <div className="input-group" key={key}>

                {parts.map((part, index) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < blanks && (
                     <input
  type="text"
  value={answers[key] || ""}
  onChange={e => handleChange(key, e.target.value)}
  style={{ width: "160px", margin: "0 5px", ...getInputStyle(key) }}
/>

                    )}
                  </React.Fragment>
                ))}
              </div>
            );
          })}
        </div>
      </div>
<div className="spaces"></div>
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
