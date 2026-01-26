import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import img1 from "../../../assets/unite4pages/SVG/P84-a.svg";
import img2 from "../../../assets/unite4pages/SVG/P84-b.svg";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U4Audio/U4SDQ3.mp3";

/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  0: "tout droit",
  1: "gauche",
  2: "traversez",
  3: "au coin de",
  4: "à droite",
  5: "tout droit",
  6: "devant",
  7: "traversez",
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
  { start:5.18 , end: 6.36, text: "Rempris A1," },
  { start:6.85 , end: 8.0, text: "unité 4," },
  { start:8.38 , end: 8.80, text: "en ville." },
  { start:9.63 , end: 10.28, text: "Section D." },
  { start:11.13 , end: 11.34, text: "Cannes," },
  { start:11.97 , end: 13.32, text: "une ville de cinéma." },
  { start:13.89 , end: 15.06, text: "Exercice 3." },
  { start:15.77 , end: 18.62, text: "Écoute et écris l'information manquante." },
  { start:21.02 , end: 21.80, text: "Excusez-moi," },
  { start:21.80 , end: 22.08, text: "monsieur." },
  { start:23.16, end: 23.74, text: "Pas de problème." },
  { start:25.02 , end: 27.00, text: "Je cherche le musée de la Castre." },
  { start:28.34 , end: 29.62, text: "Vous devez aller tout droit," },
  { start:29.62 , end: 31.12, text: "puis tourner à gauche," },
  { start:31.55 , end: 34.66, text: "traverser la rue et le musée est au coin de la rue Rose." },
  { start:35.18 , end: 37.34, text: "« Merci beaucoup pour votre aide." },
  { start:38.66 , end: 39.00, text: "« De rien." },
  { start:41.52 , end: 41.9, text: "« Bonjour," },
  { start:41.9 , end: 42.68, text: "excusez-moi," },
  { start:42.68 , end: 42.96, text: "monsieur." },
  { start:44.30 , end: 44.86, text: "« Oui ?" },
  { start:45.68 , end: 46.88, text: "« Je cherche la croisette." },
  { start:48.30 , end: 48.34, text: "« Alors," },
  { start:48.34 , end: 49.90, text: "vous devez tourner à droite," },
  { start:50.40 , end: 51.64, text: "traverser la rue," },
  { start:51.42 , end: 52.46, text: "puis aller tout droit." },
  { start:53.42 , end: 54.48, text: "« Passez devant l'hôpital," },
  { start:54.48 , end: 57.64, text: "puis traversez la rue rouge et la croisette est là" },
  { start:58.84 , end: 59.30, text: "« Merci," },
  { start:59.30 , end: 59.72, text: "monsieur." },
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
        "Toutes les réponses sont correctes!"
      );
    } else if (correctCount === 0) {
      ValidationAlert.info(
        `Toutes les réponses sont incorrectes (${correctCount}/${total})`,
        "Essayez encore!"
      );
    } else {
      ValidationAlert.error(
        `Vous avez ${correctCount} sur ${total} corrects.`,
        "Presque!"
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
        style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
      >
        <span style={{ backgroundColor: "#d47176", color: "#white" }} className="ex-A">D</span>
        <span style={{ color: "black" }} className="number-of-q">3</span>
   ute et écris l’information manquante.
      </header>

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
                  background: `linear-gradient(to right, #430f68 ${
                    (current / duration) * 100
                  }%, #d9d9d9ff ${(current / duration) * 100}%)`,
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

      {/* Exercise Container */}
      <div className="page28q4-exercise-container w-full max-w-6xl flex flex-col lg:flex-row gap-8">
        {/* Dialogue */}
        <div className="page28q4-dialogue-section lg:w-2/3">
          <div className="page28q4-dialogue-exercise w-full bg-white p-8 rounded-xl">
            <div className="page28q4-dialogue-text space-y-6">
              {/* Ligne 1 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[20px]">a-</span>
                <span className="speaker font-bold text-blue-600 min-w-[80px]">
                  Antoine :
                </span>
                <span className="text">Excusez-moi, monsieur.</span>

                <span className="text"> </span>
              </div>
              {/* Ligne 2 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                  Denis :
                </span>
                <span className="text">Pas de problème.</span>

                <span className="text"> </span>
              </div>
              {/* Ligne 3 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-600 min-w-[80px]">
                  Antoine :
                </span>
                <span className="text">Je cherche le musée de la Castre.</span>

                <span className="text"> </span>
              </div>

              {/* Ligne 4 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                  Denis :
                </span>
                <span className="text">Vous devez aller</span>
                <input
                  type="text"
                  value={inputs[0] || ""}
                  onChange={(e) => handleInputChange(1, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-300 focus:outline-none focus:border-pink-500 w-32"
                />
                <span className="text"> Puis</span>
              </div>

              {/* Ligne 5 */}
              <div className="dialogue-line flex items-start">
                <span className="text">tournez </span>
                <input
                  type="text"
                  value={inputs[1] || ""}
                  onChange={(e) => handleInputChange(2, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-300 focus:outline-none focus:border-pink-500 w-32"
                />
                <span className="text"> ,</span>
                <input
                  type="text"
                  value={inputs[2] || ""}
                  onChange={(e) => handleInputChange(2, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-300 focus:outline-none focus:border-blue-500 w-40"
                />
                <span className="text">la</span>
              </div>

              {/* Ligne 6 */}

              <div className="dialogue-line flex items-start">
                <span className="text">rue et le musée est</span>
                <input
                  type="text"
                  value={inputs[3] || ""}
                  onChange={(e) => handleInputChange(3, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-300 focus:outline-none focus:border-blue-500 w-24"
                />
                <span className="text">la rue Rose</span>
              </div>

              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-600 min-w-[80px]">
                  Antoine :
                </span>
                <span className="text">Merci beaucoup pour votre aide.</span>

                <span className="text"> </span>
              </div>
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-600 min-w-[80px]">
                  Antoine :
                </span>
                <span className="text">Denis :</span>

                <span className="text">De rien.</span>
              </div>
              <br />
              <br />
              {/* 
======================================================================================
                                            B
===========================B========================================================== */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[20px]">b-</span>
                <span className="speaker font-bold text-green-600 min-w-[80px]">
                  Monsieur Moreau :
                </span>

                <span className="text">Bonjour, excusez-moi monsieur.</span>
              </div>
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-purple-900 min-w-[80px]">
                  Monsieur Dubois :
                </span>

                <span className="text">Oui.</span>
              </div>
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-green-600 min-w-[80px]">
                  Monsieur Moreau :
                </span>
                <span className="text">Je cherche la Croisette.</span>
              </div>
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-purple-900 min-w-[80px]">
                  Monsieur Dubois :
                </span>
                <span className="text">Alors, vous devez tourner</span>
                <input
                  type="text"
                  value={inputs[4] || ""}
                  onChange={(e) => handleInputChange(3, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-300 focus:outline-none focus:border-blue-500 w-24"
                />
              </div>
              <div className="dialogue-line flex items-start">
                <span className="text">traverser la rue, puis aller</span>
                <input
                  type="text"
                  value={inputs[5] || ""}
                  onChange={(e) => handleInputChange(3, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-300 focus:outline-none focus:border-blue-500 w-24"
                />
              </div>
              <div className="dialogue-line flex items-start">
                <span className="text">Passez</span>
                <input
                  type="text"
                  value={inputs[6] || ""}
                  onChange={(e) => handleInputChange(3, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-300 focus:outline-none focus:border-blue-500 w-24"
                />
                <span className="text">hôpital, puis</span>
              </div>
              <div className="dialogue-line flex items-start">
                <input
                  type="text"
                  value={inputs[7] || ""}
                  onChange={(e) => handleInputChange(3, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-300 focus:outline-none focus:border-blue-500 w-24"
                />
                <span className="text">
                  la rue Rouge et la Croisette est là.
                </span>
              </div>
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-green-600 min-w-[80px]">
                  Madame Moreau :
                </span>
                <span className="text">Merci monsieur.</span>
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
          <div className="page28q4-image-container bg-white p-4 rounded-xl">
            <img
              src={img2}
              alt="Dialogue illustration 2"
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
