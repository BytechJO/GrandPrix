import React, { useState, useRef, useEffect } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U3Audio/Unint3SecAQ1.mp3";
import img1 from "../../../assets/unite3pages/svg/page491.svg";
import img2 from "../../../assets/unite3pages/svg/page492.svg";
import img3 from "../../../assets/unite3pages/svg/page493.svg";
import img4 from "../../../assets/unite3pages/svg/page494.svg";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard"; // عدّل المسار حسب مكانه

const images = [
  { id: "a", src: img1, label: "A" },
  { id: "b", src: img2, label: "B" },
  { id: "c", src: img3, label: "C" },
  { id: "d", src: img4, label: "D" },
];

// تعديل correctAnswers ليشمل الحقول الجديدة للصورة 3
const correctAnswers = {
  a: "a",
  b: "c",
  c1: "e", // الإجابة الأولى للصورة 3
  c2: "b", // الإجابة الثانية للصورة 3
  d: "d",
};

const Page5_Q1_CleanAudio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [volume, setVolume] = useState(1);
  const [answers, setAnswers] = useState({});
  const [showCaption, setShowCaption] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [score, setScore] = useState(null); // لتخزين عدد الإجابات الصحيحة وإجمالي الأسئلة

  const captions = [
   { start:5.4 , end: 7.0, text: "Grand prix A1," },
  { start:7.0 , end: 8.6, text: "unité 3 : Sous" },
  { start:8.6 , end: 9.6, text: "le même toit." },
  { start:10.2 , end: 11.7, text: "Section A " },
  { start:11.7 , end: 12.5, text: "Ma famille." },
  { start:13.2 , end: 15.1, text: "Exercice 1" },
  { start:15.1 , end: 16.6, text: "Écoute et place" },
  { start:16.6 , end: 17.4, text: "dans l'ordre" },
  { start:17.4 , end: 18.6, text: "puis lis." },
  { start:20.5 , end: 21.1, text: "Je m'appelle" },
  { start:21.1 , end: 21.9, text: "Belle Dupont." },
  { start:22.5 , end: 23.0, text: "Je veux vous" },
  { start:23.0 , end: 23.5, text: "présenter" },
  { start:23.5 , end: 24.1, text: "ma famille." },
  { start:24.7 , end: 25.6, text: "Voilà ma sœur" },
  { start:25.6 , end: 26.9, text: "Beth Dupont." },
  { start:26.9 , end: 27.3, text: "Nous sommes" },
  { start:27.3 , end: 28.1, text: "jumelles." },
  { start:28.1 , end: 28.6, text: "Nous avons" },
  { start:28.6 , end: 29.8, text: "18 ans." },
  { start:29.8 , end: 30.3, text: "Voici mes" },
  { start:30.3 , end: 31.0, text: "grands-parents," },
  { start:31.0 , end: 32.0, text: "Pascal et" },
  { start:32.0 , end: 33.3, text: "Vivien Dupont." },
  { start:33.3 , end: 35.1, text: "Ils ont 68 ans." },
  { start:35.1 , end: 35.9, text: "C'est mon père," },
  { start:35.9 , end: 36.5, text: "il s'appelle" },
  { start:36.5 , end: 37.9, text: "Gérard Dupont." },
  { start:37.9 , end: 39.5, text: "Il a 48 ans." },
  { start:39.5 , end: 40.5, text: "Voici ma mère," },
  { start:40.5 , end: 41.2, text: "elle s'appelle" },
  { start:41.2 , end: 42.4, text: "Michèle Dupont." },
  { start:42.4 , end: 43.5, text: "Elle a 47 ans." },
  { start:45.6 , end: 47.1, text: "Je m'appelle Ray," },
  { start:47.1 , end: 48.5, text: "j'ai 10 ans." },
  { start:48.5 , end: 49.1, text: "Je suis le" },
  { start:49.1 , end: 50.2, text: "frère de Belle" },
  { start:50.2 , end: 51.2, text: "et Beth." },
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

  const handleInputChange = (id, value) => {
    setAnswers((prev) => ({ ...prev, [id]: value.toLowerCase() }));
  };

  const checkAnswer = () => {
    let correctCount = 0;
    Object.keys(correctAnswers).forEach((id) => {
      if ((answers[id] || "").toLowerCase() === correctAnswers[id].toLowerCase()) {
        correctCount++;
      }
    });
    const total = Object.keys(correctAnswers).length;
    setScore({ correct: correctCount, total });

    if (correctCount === total) {
      ValidationAlert.success(
        `You got all answers right! (${total})`,
        "Excellent work!",
        `${correctCount}/${total}`
      );
    } else if (correctCount === 0) {
      ValidationAlert.info(`All answers are incorrect. Try again.`, "تحذير ⚠️");
    } else {
      ValidationAlert.error(
        `You answered ${correctCount} out of ${total} correctly.`,
        `${correctCount}/${total}`
      );
    }
  };

  const showAnswerFunc = () => {
    setAnswers(correctAnswers);
  };

  const resetExercise = () => {
    setAnswers({});
    resetAudio();
  };

  const updateCaption = (currentTime) => {
    const index = captions.findIndex(
      (cap) => currentTime >= cap.start && currentTime <= cap.end
    );
    setActiveIndex(index !== -1 ? index : null);
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
      {/* Header */}
      <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span  style={{ backgroundColor: "#5e74b7" }} className="ex-A">A</span> <span style={{color:"black"}} className="number-of-q">1</span> Écoute et place dans l’ordre. Puis lis.   </header>

      {/* ================= Audio Player ================= */}
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

      {/* Score Card */}
      {score && <ScoreCardEnhanced score={score} />}

      {/* Exercise Images */}
      <div className="exercise-images grid grid-cols-2 gap-6">
        {images.map((img) => (
          <div key={img.id} className="flex flex-col items-center gap-2">
            <img
              src={img.src}
              alt={`Image ${img.label}`}
              className="w-32 h-32 object-contain"
            />

            {/* إذا كانت الصورة رقم 3 أضف حقلين */}
            {img.id === "c" ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  maxLength="1"
                  placeholder="a/b/c/d"
                  value={answers[`${img.id}1`] || ""}
                  onChange={(e) =>
                    handleInputChange(`${img.id}1`, e.target.value)
                  }
                  className="q5-input border rounded p-1 w-10 text-center"
                />
                <input
                  type="text"
                  maxLength="1"
                  placeholder="a/b/c/d"
                  value={answers[`${img.id}2`] || ""}
                  onChange={(e) =>
                    handleInputChange(`${img.id}2`, e.target.value)
                  }
                  className="q5-input border rounded p-1 w-10 text-center"
                />
              </div>
            ) : (
              <input
                type="text"
                maxLength="1"
                placeholder="a/b/c/d"
                value={answers[img.id] || ""}
                onChange={(e) => handleInputChange(img.id, e.target.value)}
                className="q5-input border rounded p-1 w-18 text-center"
              />
            )}
          </div>
        ))}
      </div>

      <div className="spaces"></div>
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
