import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import img1 from "../../../assets/unite5pages/SVG/page102.svg";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U5Audio/u5sce5.mp3";

/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  0: "ça va",
  1: "table",
  2: "jus d’orange",
  3: "l’eau minérale",
  4: "tomate",
  5: "poisson",
  6: "des pommes de terre",
  7: "fruits",
  8: "fraises",
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
   { start:5.3 , end: 6.8, text: "Grand Prix A1" },
  { start:6.8 , end: 10.2, text: "Unité 5, Les repas" },
  { start:10.2 , end: 12.0, text: "Section C," },
  { start:12.0 , end: 14.0, text: "Les repas en famille" },
  { start:14.0 , end: 16.1, text: "Exercice 5," },
  { start:16.1 , end: 18.6, text: "Écoute et écris l'information" },
  { start:18.7 , end: 19.3, text: "manquante." },
  { start:21.5 , end: 24.1, text: "Bonsoir Antoine, Comment ça va ?" },
  { start:24.1 , end: 25.9, text: "Bonjour monsieur Jacques," },
  { start:25.9 , end: 27.8, text: "Ça va bien et vous ?" },
  { start:27.8 , end: 29.8, text: "Très bien, merci." },
  { start:29.8 , end: 31.0, text: "Allons à table." },
  { start:31.0 , end: 32.4, text: "Salut Antoine," },
  { start:32.4 , end: 33.5, text: "assieds-toi là à côté" },
  { start:33.5 , end: 34.7, text: "de Camille." },
  { start:34.7 , end: 36.7, text: "Oui, madame." },
  { start:36.7 , end: 38.2, text: "Qu'est-ce que tu prends comme" },
  { start:38.2 , end: 40.2, text: "boisson Il y a du jus d'orange" },
  { start:40.2 , end: 41.9, text: "et de l'eau minérale." },
  { start:41.9 , end: 43.5, text: "De l'eau minérale," },
  { start:43.5 , end: 44.8, text: "s'il vous plaît." },
  { start:44.8 , end: 46.3, text: "Pour commencer," },
  { start:46.3 , end: 48.6, text: "il y a de la soupe à la tomate." },
  { start:48.6 , end: 52.2, text: "Bon appétit tout le monde." },
  { start:52.2 , end: 54.6, text: "Hmmm, c'est délicieux." },
  { start:54.6 , end: 56.1, text: "Rose" },
  { start:56.1 , end: 57.2, text: "qu'est-ce que nous avons" },
  { start:57.2 , end: 59.0, text: "comme plat principal ?" },
  { start:59.0 , end: 60.8, text: "Il y a du poisson ou de la" },
  { start:60.8 , end: 62.2, text: "viande et comme légume," },
  { start:62.2 , end: 64.6, text: "il y a des pommes de terre." },
  { start:64.6 , end: 66.9, text: "Bon donne-moi de la viande." },
  { start:66.9 , end: 67.8, text: "Qu'est-ce que tu préfères" },
  { start:67.8 , end: 69.6, text: "Antoine ?" },
  { start:69.6 , end: 71.5, text: "Je préfère le poisson." },
  { start:71.5 , end: 73.6, text: "Tu en veux encore ?" },
  { start:73.6 , end: 76.7, text: "Non merci, j'ai assez mangé." },
  { start:76.7 , end:78.4, text: "Comme dessert," },
  { start:78.4 , end: 79.4, text: "il y a des fruits." },
  { start:79.4 , end: 81.2, text: "Qu'est-ce que tu veux ?" },
  { start:81.2 , end: 83.14, text: "Je voudrais des fraises" },
  { start:83.15 , end: 84.2, text: "s'il te plaît." },
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
        <span className="ex-A" style={{ backgroundColor: "#f38180" }}>C</span>
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
                <span className="speaker font-bold text-red-300 min-w-[80px]">
                  Le père :
                </span>
                <span className="text">Bonsoir, Antoine. Comment</span>
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
                  Antoine :
                </span>
                <span className="text">
                  Bonsoir, monsieur Jaques. Ça va bien. Et vous ?
                </span>
              </div>

              {/* Ligne 3 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-red-300 min-w-[80px]">
                  Le père :
                </span>
                <span className="text">Très bien, merci. Allons à</span>
                <input
                  type="text"
                  value={inputs[1] || ""}
                  onChange={(e) => handleInputChange(2, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-300 focus:outline-none focus:border-blue-500 w-40"
                />
                <span className="text"> .</span>
              </div>

              {/* Ligne 4 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-green-600 min-w-[80px]">
                  La mère :
                </span>
                <span className="text">
                  Salut, Antoine, assieds-toi là, à côté de Camille.
                </span>
              </div>

              {/* Ligne 5 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-300 min-w-[80px]">
                  Antoine :
                </span>
                <span className="text">Oui, madame.</span>
              </div>

              {/* Ligne 7 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-green-600 min-w-[80px]">
                  La mère :
                </span>
                <span className="text">
                  Qu’est-ce tu prends comme boisson ? Il y a du{" "}
                </span>
              </div>

              {/* Ligne 8 */}
              <div className="dialogue-line flex items-start">
                <input
                  type="text"
                  value={inputs[2] || ""}
                  onChange={(e) => handleInputChange(4, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-48"
                />
                <span className="text">et de l’eau minérale.</span>
              </div>

              {/* Ligne 10 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-300 min-w-[80px]">
                  Antoine :
                </span>
                <span className="text">De</span>
                <input
                  type="text"
                  value={inputs[3] || ""}
                  onChange={(e) => handleInputChange(5, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-40"
                />
                <span className="text">s’il vous plaît.</span>
              </div>

              {/* Ligne 11 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-green-600 min-w-[80px]">
                  La mère :
                </span>
                <span className="text">
                  Pour commencer, il y a de la soupe à la
                </span>
                <input
                  type="text"
                  value={inputs[4] || ""}
                  onChange={(e) => handleInputChange(5, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-40"
                />
              </div>

              {/* Ligne 12 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-red-300 min-w-[80px]">
                  Le père :
                </span>
                <span className="text">Bon appétit, tout le monde.</span>
              </div>

              {/* Ligne 13 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-300 min-w-[80px]">
                  Antoine :
                </span>
                <span className="text">Mmmmmmm. C’est délicieux.</span>
              </div>

              {/* Ligne 14 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-red-300 min-w-[80px]">
                  Le père :
                </span>
                <span className="text">
                  Rose, qu'est-ce que nous avons comme plat principal ?
                </span>
              </div>
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-green-600 min-w-[80px]">
                  La mère :
                </span>
                <span className="text">Il y a du</span>
                <input
                  type="text"
                  value={inputs[5] || ""}
                  onChange={(e) => handleInputChange(5, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-40"
                />
                <span className="text">
                  ou de la viande, et comme légume il y a
                </span>
                <input
                  type="text"
                  value={inputs[6] || ""}
                  onChange={(e) => handleInputChange(5, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-40"
                />
              </div>
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-red-300 min-w-[80px]">
                  Le père :
                </span>
                <span className="text">
                  Bon, donne-moi de la viande. Qu’est-ce que tu préfères,
                  Antoine ?
                </span>
              </div>
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-300 min-w-[80px]">
                  Antoine :
                </span>
                <span className="text">Je préfère le poisson.</span>
              </div>

              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-green-600 min-w-[80px]">
                  La mère:
                </span>
                <span className="text">Tu en veux encore ?</span>
              </div>

              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-300 min-w-[80px]">
                 Antoine :
                </span>
                <span className="text">Non merci. J’ai assez mangé.</span>
              </div>

              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-purple-300 min-w-[80px]">
               Camille :
                </span>
                <span className="text">Comme dessert, il y a des</span>
                  <input
                  type="text"
                  value={inputs[7] || ""}
                  onChange={(e) => handleInputChange(5, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-40"
                />
                 </div>
                 <div> 
                <span className="text"><div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-300 min-w-[80px]">
               Antoine :
                </span>
                <span className="text">Je voudrais des</span>
                  <input
                  type="text"
                  value={inputs[8] || ""}
                  onChange={(e) => handleInputChange(5, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-40"
                />
                <span className="text">s’il te plaît.</span>
              </div></span>
              </div>

            </div>
          </div>
        </div>

        {/* الصور */}
        <div className="page28q4-images-section lg:w-1/3 flex flex-col gap-6">
          <div className="page28q4-image-container bg-white p-4 rounded-xl">
            <img
              src={img1}
              alt="Dialogue illustration 1"
              className="page28q4-image w-full h-auto max-h-[280px] object-contain"
            />
          </div>
        </div>
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
