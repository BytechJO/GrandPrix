import React, { useState,useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import page5_CD2 from "../../../assets/U7Audio/u7sbq4.mp3";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
const Page5_Q2_SAppeler = () => {
  // ================= STATE =================
  const [answers, setAnswers] = useState({
    a1: "",
    a2: "",
    b: "",
    c: "",
    d1: "",
    d2: "",
    d3: "",
  
  });
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const [showCaption, setShowCaption] = useState(false);
  const [answerStatus, setAnswerStatus] = useState({});
  const [score, setScore] = useState(null);
    const [activeIndex, setActiveIndex] = useState(null);
  
  // ================= CORRECT ANSWERS =================
  const correctAnswers = {
    a1: "me lève",
    a2: "À sept heures",
    b1: "à sept heures et demie",
    c1: "à la maison",
    c2: "mes devoirs",
    e1: "dînons",
    e2: "six heures et demie",
    f1: "moins,",
    f2: "dix heures et quart",

  };
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

  // تحديث التسميات التوضيحية للتمرين الجديد
  const captions = [
   { start: 5.599, end: 8.379, text: "Grand prix A1, unité sept," },
  { start: 8.380, end: 11.099, text: "les loisirs. Section B," },
  { start: 11.100, end: 12.279, text: "ma journée." },

  { start: 12.279, end: 14.659, text: "Exercice quatre." },
  { start: 14.659, end: 15.949, text: "Écoute encore une fois" },
  { start: 15.950, end: 17.479, text: "et complète le texte." },

  { start: 19.680, end: 20.760, text: "Je me lève à six heures" },
  { start: 20.760, end: 21.599, text: "et demie." },
  { start: 21.599, end: 22.519, text: "Puis," },
  { start: 22.519, end: 23.979, text: "je me brosse les dents et" },
  { start: 23.979, end: 25.869, text: "je mets mon uniforme." },

  { start: 25.870, end: 26.919, text: "À sept heures," },
  { start: 26.919, end: 27.930, text: "ma mère et moi prenons" },
  { start: 27.930, end: 29.319, text: "notre petit déjeuner." },

  { start: 29.320, end: 30.739, text: "Je prends des céréales" },
  { start: 30.739, end: 32.029, text: "et du jus d'orange." },
  { start: 32.030, end: 34.429, text: "Ma mère mange un sandwich." },

  { start: 34.429, end: 35.829, text: "Je vais à l'école à sept heures" },
  { start: 35.830, end: 38.589, text: "vingt. Mais non, attends," },
  { start: 38.589, end: 39.949, text: "à sept heures et demie." },

  { start: 39.950, end: 41.469, text: "À trois heures," },
  { start: 41.470, end: 43.119, text: "je rentre à la maison et je fais" },
  { start: 43.120, end: 44.870, text: "tout de suite mes devoirs parce" },
  { start: 44.870, end: 46.019, text: "que je veux les terminer" },
  { start: 46.019, end: 47.209, text: "avant le dîner." },

  { start: 47.209, end: 48.999, text: "Mon père rentre à la maison à" },
  { start: 49.000, end: 51.460, text: "six heures et nous dînons." },

  { start: 51.460, end: 52.629, text: "Notre dîner prend" },
  { start: 52.629, end: 53.919, text: "trente minutes." },

  { start: 53.919, end: 55.599, text: "Alors à six heures et demie," },
  { start: 55.599, end: 57.229, text: "je vais faire du sport." },
  { start: 57.230, end: 58.459, text: "Je joue au football." },

  { start: 58.459, end: 59.249, text: "Après," },
  { start: 59.250, end: 60.909, text: "vers huit heures moins le quart," },
  { start: 60.910, end: 62.899, text: "je bavarde avec mes amis." },

  { start: 62.899, end: 64.069, text: "Je me couche à dix" },
  { start: 64.070, end: 64.799, text: "heures et quart." },
    // أضف المزيد حسب المحتوى الصوتي الفعلي
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
  // ================= QUESTIONS =================
  const questions = {
    a: { label: "a-", text: "Je ____à six heures et demie.____ma mère et moi prenons notre" },
    b: { label: "b-", text: "petit-déjeuner. Je vais à l’école à sept heures vingt … mais non … attends …____" },
    c: { label: "c-", text: "et demie. À trois heures, je rentre ____et je fais tout de suite____." },
    d: { label: "d-", text: "parce que je veux les terminer avant le dîner. Mon père rentre à la maison à six heures et nous " },
    e: { label: "d-", text: "____Notre dîner prend trente minutes, alors à____je vais faire du" },
    f: { label: "d-", text: "sport. Après, vers huit heures____le quart, je bavarde avec mes amis. Je me couche____" }
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
    resetAudio();
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
                <span style={{ backgroundColor: "#cf7230", color: "#white" }} className="ex-A">B</span>
                <span style={{ color: "black" }} className="number-of-q">4</span>
Écoute encore une fois et complète le texte.</header>
 <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div className="audio-popup-read" style={{ width: "30%" }}>
          <div className="audio-inner player-ui">
            <audio
              ref={audioRef}
              src={page5_CD2}
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
        <div className="inputs-column">
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
                        value={answers[`${key}${index + 1}`] || ""}
                        onChange={e => handleChange(`${key}${index + 1}`, e.target.value)}
                        style={{ width: "160px", margin: "0 5px", ...getInputStyle(`${key}${index + 1}`) }}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            );
          })}
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
