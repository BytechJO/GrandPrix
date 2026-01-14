import React, { useState,useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U3Audio/U3SAQ1.mp3";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard"; // عدّل المسار حسب مكانه
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
const Page5_Q2_SAppeler = () => {
  // === STATE ===

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [current, setCurrent] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showSettings, setShowSettings] = useState(false);
    const [volume, setVolume] = useState(1);
    const [showCaption, setShowCaption] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
  const [answers, setAnswers] = useState({
     a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: "",
    i: "",
    j: "",
  });
  const [score, setScore] = useState(null);
 const captions = [
   { start:5.4 , end: 6.2, text: "Grand prix" },
  { start:6.2 , end: 8.4, text: "A1, unité 3." },
  { start:8.4 , end: 8.9, text: "Sous le" },
  { start:8.9 , end: 9.6, text: "même toit." },
  { start:10.2 , end: 11.1, text: "Section A." },
  { start:11.7 , end: 12.5, text: "Ma famille." },
  { start:13.1 , end: 14.5, text: "Exercice 6." },
  { start:15.1 , end: 15.7, text: "Écoute la" },
  { start:15.7 , end: 16.6, text: "présentation" },
  { start:16.6 , end: 16.8, text: "de la" },
  { start:16.8 , end: 17.8, text: "famille de Rey." },
  { start:18.3 , end: 18.8, text: "Complète" },
  { start:18.8 , end: 19.4, text: "le texte." },
  { start:21.7 , end: 22.4, text: "Salut à tous," },
  { start:23.0 , end: 23.4, text: "c'est mon" },
  { start:23.4 , end: 24.1, text: "ami Daniel." },
  { start:25.5 , end: 26.2, text: "Bonjour." },
  { start:27.1 , end: 27.6, text: "Je veux te" },
  { start:27.6 , end: 28.1, text: "présenter" },
  { start:28.1 , end: 28.7, text: "ma famille." },
  { start:29.5 , end: 30.1, text: "Tu connais déjà" },
  { start:30.1 , end: 31.3, text: "mon père ?" },
  { start:31.3 , end: 32.2, text: "C'est ma mèr" },
  { start:32.2 , end: 35.5, text: "Michelle." },
  { start:35.5 , end: 34.0, text: "Voici mon" },
  { start:34.0 , end: 34.9, text: "grand-père," },
  { start:34.9 , end: 35.5, text: "Pascal." },
  { start:36.7 , end: 37.3, text: "Ma grand-mère" },
  { start:37.3 , end: 37.7, text: "s'appelle" },
  { start:37.7 , end: 38.8, text: "Viviane." },
  { start:38.8 , end: 39.2, text: "Où est ma" },
  { start:39.2 , end: 39.8, text: "grand-mère ?" },
  { start:41.0 , end: 41.5, text: "Ta grand-mère" },
  { start:41.5 , end: 42.1, text: "est allée à la" },
  { start:42.1 , end: 42.7, text: "pâtisserie." },
  { start:42.7 , end: 43.2, text: "Elle voulait" },
  { start:43.2 , end: 43.5, text: "acheter" },
  { start:43.5 , end: 44.2, text: "quelque chose." },
  { start:45.5 , end: 47.0, text: "Bon, j'ai aussi" },
  { start:47.0 , end: 47.9, text: "deux sœurs." },
  { start:47.9 , end: 48.6, text: "Elles s'appellent" },
  { start:48.6 , end: 49.8, text: "Belle et Bête." },
  { start:50.4 , end: 50.9, text: "Elles sont" },
  { start:50.9 , end: 52.1, text: "jumelles." },
  { start:52.1 , end: 52.5, text: "Elles sont" },
  { start:52.5 , end: 52.9, text: "peut-être à" },
  { start:52.9 , end: 53.4, text: "leur club." },
  { start:54.2 , end: 54.9, text: "Belle aime la" },
  { start:54.9 , end: 56.0, text: "natation et" },
  { start:56.0 , end: 56.9, text: "Bête aime la" },
  { start:56.9 , end: 57.5, text: "sculpture" },
  { start:58.0 , end: 58.3, text: "Tu les" },
  { start:58.3 , end: 58.9, text: "rencontreras" },
  { start:58.9 , end: 60.5, text: "plus tard." },
  { start:60.5 , end: 61.4, text: "Bien sûr, ça" },
  { start:61.4 , end: 62.2, text: "me fait plaisir" },
  { start:62.2 , end: 62.5, text: "de tous" },
  { start:62.5 , end: 63.2, text: "vous connaître." },
  { start:64.4 , end: 65.3, text: "Allons-y, je" },
  { start:65.3 , end: 65.9, text: "vais te montrer" },
  { start:65.9 , end: 66.5, text: "ta chambre." },
  ];
  

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
    }
  };
  // ✅ حالة لون الإجابات
  const [answerStatus, setAnswerStatus] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: "",
    i: "",
    j: "",

  });

  // === الإجابات النموذجية ===
  const correctAnswers = {
    a: "famille",
    b: "grands-parents",
    c: "grand-père",
    d: "n’est pas",
    e: "pâtisserie",
    f: "Jerard et Vivien",
    g: "soeurs",
    h: "jumelles",
    i: "la natation",
    j: "aime la sculpture",
  };

  // === النصوص الأصلية للأسئلة مع الفراغات ____
  const questions = {
    a: "Ray présente sa (1) ____ Dans sa famille, il y a ses",
    b: "(2) ____ ses parents et",
    c: "ses soeurs. Son(3) ____ s’appelle Pascal et sa grand-mère s’appelle",
    d: "Vivien, mais elle (4) ____  à lamaison. Elle est allée acheter quelque chose",
    e: "à la (5) ____ Les parents",
    f: "de Ray s’appellent(6) ____ Il a aussi deux",
    g: "(7)____Elles s’appellent Belle est Bette. Elles sont",
    h: "(8) ____ mais elles aimentdes choses différentes. Belle va au club sportif,",
    i: "elle aime(9) ____ Il a aussi deux",
    j: "Bette vaau club d’art, elle (10) ____ ",
  };

  // ✅ HANDLE CHANGE
  const handleChange = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    // إعادة ضبط اللون عند الكتابة
    setAnswerStatus(prev => ({ ...prev, [key]: "" }));
  };

  // ✅ CHECK ANSWER
const checkAnswer = () => {
  const newStatus = {};
  let correctCount = 0;
  let incomplete = false;

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
    ValidationAlert.info(
      "Incomplete",
      "Please fill in all fields.",
      `${correctCount}/${total}`
    );
    setScore(null); // منع ظهور ScoreCard
  } else {
    setScore({ correct: correctCount, total });

    if (correctCount === total) {
      ValidationAlert.success(
        "Excellent!",
        "You got all answers right!",
        `${correctCount}/${total}`
      );
    } else if (correctCount === 0) {
      ValidationAlert.error(
        "Try Again!",
        "All answers are incorrect.",
        `${correctCount}/${total}`
      );
    } else {
      ValidationAlert.error(
        "Almost there!",
        `You got ${correctCount} out of ${total} correct.`,
        `${correctCount}/${total}`
      );
    }
  }
};

// ✅ SHOW ANSWER
const showAnswerFunc = () => {
  setAnswers({ ...correctAnswers });

  const newStatus = {};
  Object.keys(correctAnswers).forEach(key => {
    newStatus[key] = "correct";
  });
  setAnswerStatus(newStatus);

  const total = Object.keys(correctAnswers).length;
  setScore({ correct: total, total });

  ValidationAlert.success(
    "Answers shown",
    "All correct answers have been filled in.",
    `${total}/${total}`
  );
};

// ✅ RESET
const resetExercise = () => {
  const emptyAnswers = {};
  const emptyStatus = {};
  Object.keys(correctAnswers).forEach(key => {
    emptyAnswers[key] = "";
    emptyStatus[key] = "";
  });

  setAnswers(emptyAnswers);
  setAnswerStatus(emptyStatus);
  setScore(null); // إعادة تعيين ScoreCard
  resetAudio();
};
  const updateCaption = (currentTime) => {
    const index = captions.findIndex(
      (cap) => currentTime >= cap.start && currentTime <= cap.end
    );
    setActiveIndex(index !== -1 ? index : null);
  };

  // ✅ دالة لتحديد لون الخلفية حسب الحالة
  const getInputStyle = (key) => {
    if (answerStatus[key] === "correct") return { backgroundColor: "#d4f4dd" }; // أخضر فاتح
    if (answerStatus[key] === "wrong") return { backgroundColor: "#f8d7da" }; // أحمر فاتح
    return {};
  };

  return (
    <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
      <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span  style={{ backgroundColor: "#5e74b7" }} className="ex-A">A</span> <span style={{color:"black"}} className="number-of-q">6</span> Écoute la présentation de la
famille de Ray. Complète le texte.</header>
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
      {/* ✅ QUESTIONS */}
      <div className="page5Q5" style={{marginLeft:"13%"}}>
        <div className="inputs-column">
          {Object.keys(questions).map((key, index) => (
            <div className="input-group" key={key}>
              <label>
                {questions[key].split("____")[0]}
                <input
                  type="text"
                  value={answers[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  style={{ width: "130px", margin: "0 5px", ...getInputStyle(key) }}
                />
                {questions[key].split("____")[1]}
              </label>
            </div>
          ))}
        </div>
      </div>
      {score && <ScoreCardEnhanced score={score} />}
<div className="spaces"></div>
      {/* Action Buttons */}
      <div className="action-buttons-container flex gap-4">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>
    </div>
  );
};

export default Page5_Q2_SAppeler;
