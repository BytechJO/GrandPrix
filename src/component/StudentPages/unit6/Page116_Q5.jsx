import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import img1 from "../../../assets/unite5pages/SVG/page102.svg";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U6Audio/u6saq5.mp3";

/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  0: "Comment ça va ?",
  1: "Bien merci",
  2: "à quelle heure",
  3: "pleut",
  4: "il fait beau",
  5: "À bientôt",

};

const Page5_Q1_CleanAudio = () => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const [showCaption, setShowCaption] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [inputs, setInputs] = useState({});
  const [score, setScore] = useState(null);

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
 { start: 5.53, end: 6.55, text: "Rempris A1," },
  { start: 6.94, end: 7.89, text: "unité 6," },
  { start: 8.45, end: 8.83, text: "le temps," },
  { start: 9.57, end: 10.23, text: "section A." },
  { start: 11.07, end: 13.09, text: "Quel temps fait-il ?" },
  { start: 13.09, end: 14.20, text: "Exercice 5." },
  { start: 14.56, end: 16.97, text: "Écoute le dialogue et écris" },
  { start: 16.97, end: 17.93, text: "l'information manquante." },

  { start: 22.81, end: 23.55, text: "Bonjour Claire," },
  { start: 23.87, end: 24.47, text: "comment ça va ?" },
  { start: 25.65, end: 26.37, text: "Salut Antoine," },
  { start: 26.37, end: 27.55, text: "ça va bien et toi ?" },
  { start: 28.93, end: 29.15, text: "Bien," },
  { start: 29.15, end: 29.63, text: "merci." },
  { start: 30.15, end: 31.85, text: "Je vais à la gare pour aller à Paris." },
  { start: 33.98, end: 34.11, text: "Ah," },
  { start: 34.11, end: 35.19, text: "c'est formidable !" },
  { start: 35.19, end: 36.06, text: "À quelle heure est ton train ?" },
  { start: 37.13, end: 37.65, text: "À 9h." },
  { start: 38.27, end: 39.79, text: "Et j'arrive à Paris à midi." },
  { start: 41.25, end: 41.39, text: "Bon," },
  { start: 41.39, end: 42.65, text: "mais il pleut aujourd'hui." },
  { start: 42.65, end: 43.89, text: "N'oublie pas ton parapluie." },
  { start: 43.95, end: 45.71, text: "Pfff !" },
  { start: 45.71, end: 47.35, text: "Il fait beau à Marseille aujourd'hui." },
  { start: 48.61, end: 50.25, text: "À bientôt !" },
  { start: 50.25, end: 50.77, text: "À plus !" }
  ];

  const updateCaption = (time) => {
    const index = captions.findIndex(
      (cap) => time >= cap.start && time <= cap.end,
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

  const handleInputChange = (index, value) => {
    setInputs({
      ...inputs,
      [index]: value,
    });
  };

  const normalizeString = (str) => {
    return str
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // لإزالة الـ accents
  };

  const checkAnswer = () => {
    let correctCount = 0;

    Object.keys(correctAnswers).forEach((key) => {
      const userAnswer = inputs[key] ? normalizeString(inputs[key]) : "";
      const correctAnswer = normalizeString(correctAnswers[key]);

      if (userAnswer === correctAnswer) {
        correctCount++;
      }
    });

    const total = Object.keys(correctAnswers).length;
    setScore({ correct: correctCount, total });

    if (correctCount === total) {
      ValidationAlert.success(
        `Excellent! (${correctCount}/${total})`,
        "Toutes les réponses sont correctes!",
      );
    } else if (correctCount === 0) {
      ValidationAlert.info(
        `Toutes les réponses sont incorrectes (${correctCount}/${total})`,
        "Essayez encore!",
      );
    } else {
      ValidationAlert.error(
        `Vous avez ${correctCount} sur ${total} corrects.`,
        "Presque!",
      );
    }
  };

  const showAnswerFunc = () => setInputs(correctAnswers);
  const resetExercise = () => {
    setInputs({});
    setScore(null);
    resetAudio();
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
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
        <span className="ex-A" style={{ backgroundColor: "#d7a965" }}>A</span>
        <span className="number-of-q">5</span>{" "}
Écoute et écris l’information manquante.    </header>

      {/* Audio Player */}
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

      {score && <ScoreCardEnhanced score={score} />}

      {/* Exercise Container */}
      <div className="page28q4-exercise-container w-full max-w-6xl flex flex-col lg:flex-row gap-8">
        {/* Dialogue */}
        <div className="page28q4-dialogue-section lg:w-2/3">
          <div className="page28q4-dialogue-exercise w-full bg-white p-8 rounded-xl">
            <div className="page28q4-dialogue-text space-y-6">
              {/* Ligne 1 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-400 min-w-[80px]">
                Antoine :
                </span>
                <span className="text">Bonjour, Claire !</span>
                <input
                  type="text"
                  value={inputs[0] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-300 focus:outline-none focus:border-blue-500 w-48"
                />
                <span className="text"> ?</span>
              </div>

              {/* Ligne 2 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-300 min-w-[80px]">
              Claire :
                </span>
                <span className="text">
                  Salut, Antoine ! Ça va bien, et toi ?
                </span>
              </div>

              {/* Ligne 3 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-400 min-w-[80px]">
                Antoine :
                </span>
               
                <input
                  type="text"
                  value={inputs[1] || ""}
                  onChange={(e) => handleInputChange(2, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-300 focus:outline-none focus:border-blue-500 w-40"
                />
                <span className="text">je vais à la gare pour aller à Paris.</span>
              </div>

              {/* Ligne 8 */}
              <div className="dialogue-line flex items-start">
                 <span className="speaker font-bold text-red-300 min-w-[80px]">
              Claire
                </span>
                <span className="text">Ah c’est formidable</span>
                <input
                  type="text"
                  value={inputs[2] || ""}
                  onChange={(e) => handleInputChange(4, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-48"
                />
                <span className="text">est ton train ?</span>
              </div>

              {/* Ligne 10 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-300 min-w-[80px]">
                  Antoine :
                </span>
                <span className="text">À</span>
                <input
                  type="text"
                  value={inputs[3] || ""}
                  onChange={(e) => handleInputChange(5, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-40"
                />
                <span className="text">et j’arrive à Paris à 12 h 00.</span>
              </div>

              {/* Ligne 11 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-red-300 min-w-[80px]">
                 Claire :
                </span>
                <span className="text">
                  Bon, mais
                </span>
                <input
                  type="text"
                  value={inputs[4] || ""}
                  onChange={(e) => handleInputChange(5, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-40"
                />
                   <span className="text">
                  aujourd’hui, n’oublie pas ton parapluie.
                </span>
              </div>

              <div className="dialogue-line flex items-start">
               <span className="speaker font-bold text-blue-600 min-w-[80px]">
                 Antoine :
                </span>
                <span className="text">Pfff,</span>
                <input
                  type="text"
                  value={inputs[5] || ""}
                  onChange={(e) => handleInputChange(5, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-40"
                />
                <span className="text">
                  à Marseille aujourd’hui.
                </span>
              </div>
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-red-300 min-w-[80px]">
                  Claire :
                </span>
              </div>
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-300 min-w-[80px]">
                  Antoine :
                </span>
                <span className="text">À plus.</span>
              </div>

           
       

            </div>
          </div>
        </div>

        {/* الصور */}
    
      </div>

      <div className="spaces"></div>

      {/* Buttons */}
      <div className="action-buttons-container flex gap-4">
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

export default Page5_Q1_CleanAudio;
