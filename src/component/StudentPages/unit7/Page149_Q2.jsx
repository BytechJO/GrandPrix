import React, { useState, useRef } from "react";
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
  
  // إجابات الأسئلة من الصورة
  const [answers, setAnswers] = useState({
    a: "",
    b: "",
    c1: "", // الجزء الأول من السؤال C
    c2: "", // الجزء الثاني من السؤال C
    d: "",
  });
  
  const [score, setScore] = useState(null);
  
  // الترجمة - محتوى مختلف حسب الصورة (مثال)
  const captions = [
    { start: 5.4, end: 6.2, text: "Grammaire" },
    { start: 6.2, end: 8.4, text: "Exercice 2" },
    { start: 8.4, end: 8.9, text: "Complète les phrases" },
    { start: 8.9, end: 9.6, text: "avec les verbes" },
    { start: 9.6, end: 10.5, text: "de l'exercice 1." },
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
    c1: "",
    c2: "",
    d: "",
  });

  // === الإجابات النموذجية للتمرين 2 من الصورة ===
  const correctAnswers = {
    a: "pique-niquer",
    b: "fête",
    c1: "participer",
    c2: "jette", // أو أي فعل مناسب من التمرين 1
    d: "porter un costume",
  };

  // === نصوص الأسئلة من الصورة مع الفراغات ____ ===
  const questions = {
    a: "Il fait beau. Est-ce que tu veux aller au parc pour ____ ?",
    b: "Il ____ son anniversaire dans sa maison chaque année.",
    c: "Si tu veux ____, ____ ce ballon.",
    d: "Jacques a demandé de ____ pour sa fête.",
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
        "Incomplet",
        "Veuillez remplir tous les champs.",
        `${correctCount}/${total}`
      );
      setScore(null); // منع ظهور ScoreCard
    } else {
      setScore({ correct: correctCount, total });

      if (correctCount === total) {
        ValidationAlert.success(
          "Excellent!",
          "Toutes vos réponses sont correctes!",
          `${correctCount}/${total}`
        );
      } else if (correctCount === 0) {
        ValidationAlert.error(
          "Essayez encore!",
          "Toutes les réponses sont incorrectes.",
          `${correctCount}/${total}`
        );
      } else {
        ValidationAlert.error(
          "Presque!",
          `Vous avez ${correctCount} réponses correctes sur ${total}.`,
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
      "Réponses affichées",
      "Toutes les réponses correctes ont été remplies.",
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
        style={{
          marginLeft: "42%",
          color: "black",
          marginTop: "5%",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        <span className="ex-A" style={{ backgroundColor: "#afdbbc" }}>Grammaire</span>
        <span className="number-of-q">2</span>
        Complète les phrases avec les verbes de l'exercice 1.
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

      {/* ✅ QUESTIONS */}
      <div className="page5Q5" style={{ marginLeft: "13%" }}>
        <div className="inputs-column" style={{ width: "100%" }}>
          {/* السؤال a */}
          <div className="input-group">
            <label>
              <strong style={{ marginRight: "6px", textTransform: "uppercase" }}>
                a.
              </strong>
              Il fait beau. Est-ce que tu veux aller au parc pour{" "}
              <input
                type="text"
                value={answers.a}
                onChange={(e) => handleChange("a", e.target.value)}
                style={{ width: "130px", margin: "0 5px", ...getInputStyle("a") }}
              />
              ?
            </label>
          </div>

          {/* السؤال b */}
          <div className="input-group">
            <label>
              <strong style={{ marginRight: "6px", textTransform: "uppercase" }}>
                b.
              </strong>
              Il{" "}
              <input
                type="text"
                value={answers.b}
                onChange={(e) => handleChange("b", e.target.value)}
                style={{ width: "130px", margin: "0 5px", ...getInputStyle("b") }}
              />
              {" "}son anniversaire dans sa maison chaque année.
            </label>
          </div>

          {/* السؤال c */}
          <div className="input-group">
            <label>
              <strong style={{ marginRight: "6px", textTransform: "uppercase" }}>
                c.
              </strong>
              Si tu veux{" "}
              <input
                type="text"
                value={answers.c1}
                onChange={(e) => handleChange("c1", e.target.value)}
                style={{ width: "130px", margin: "0 5px", ...getInputStyle("c1") }}
              />
              ,{" "}
              <input
                type="text"
                value={answers.c2}
                onChange={(e) => handleChange("c2", e.target.value)}
                style={{ width: "130px", margin: "0 5px", ...getInputStyle("c2") }}
              />
              {" "}ce ballon.
            </label>
          </div>

          {/* السؤال d */}
          <div className="input-group">
            <label>
              <strong style={{ marginRight: "6px", textTransform: "uppercase" }}>
                d.
              </strong>
              Jacques a demandé de{" "}
              <input
                type="text"
                value={answers.d}
                onChange={(e) => handleChange("d", e.target.value)}
                style={{ width: "130px", margin: "0 5px", ...getInputStyle("d") }}
              />
              {" "}pour sa fête.
            </label>
          </div>
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