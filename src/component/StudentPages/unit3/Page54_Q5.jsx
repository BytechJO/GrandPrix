import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard"; 
import img1 from "../../../assets/unite3pages/svg/page54Q4.png";

import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U3Audio/U3SBQ5.mp3";

/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  0: "Comment ça va",
  1: "Ça va bien",
  2: "l’école",
  3: "as-tu",
  4: "crayons de couleur",
  5: "un cahier.",
  6: "un stylo",
  7: "compaset d’une trousse"
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
  { start:5.5 , end: 6.4, text: "Grand Prix" },
  { start:6.4 , end: 8.6, text: "A1, unité 3." },
  { start:9.3 , end: 10.0, text: "Sous le même" },
  { start:10.0 , end: 11.3, text: "toit." },
  { start:11.3 , end: 12.6, text: "Section B." },
  { start:12.6 , end: 14.4, text: "Mon rêve est :" },
  { start:14.4 , end: 15.6, text: "exercice 5." },
  { start:16.2 , end: 18.1, text: "Écoute et écris" },
  { start:18.1 , end: 18.8, text: "l'information" },
  { start:18.8 , end: 23.8, text: "manquante." },
  { start:26.2 , end: 27.1, text: "Est-ce qu'Antoine" },
  { start:27.1 , end: 27.5, text: "Roux" },
  { start:27.5 , end: 28.2, text: "habite ici ?" },
  { start:29.6 , end: 30.1, text: "Oui, c'est" },
  { start:30.1 , end: 30.6, text: "mon fils." },
  { start:31.8 , end: 32.7, text: "Il y a une lettre" },
  { start:32.7 , end: 33.2, text: "pour lui." },
  { start:34.2 , end: 34.8, text: "Antoine," },
  { start:34.8 , end: 35.4, text: "viens ici." },
  { start:36.6 , end: 37.5, text: "Oui, maman." },
  { start:37.5 , end: 37.9, text: "Qu'est-ce qui" },
  { start:37.9 , end: 38.4, text: "se passe ?" },
  { start:39.6 , end: 40.3, text: "Il y a une lettre" },
  { start:40.3 , end: 40.8, text: "pour toi." },
  { start:42.3 , end: 42.7, text: "Bon." },
  { start:43.4 , end: 43.7, text: "Où est la" },
  { start:43.7 , end: 44.2, text: "lettre ?" },
  { start:45.5 , end: 46.0, text: "Vous devez" },
  { start:46.0 , end: 46.9, text: "signer ici." },
  { start:47.7 , end: 48.1, text: "Merci." },
  { start:48.8 , end: 50.5, text: "Au revoir." },
  { start:50.5 , end: 51.0, text: "Merci." },
  { start:52.2 , end: 52.7, text: "Qui t'envoie" },
  { start:52.7 , end: 53.2, text: "cette lettre ?" },
  { start:54.4 , end: 55.0, text: "C'est une lettre" },
  { start:55.0 , end: 56.1, text: "d'invitation," },
  { start:56.1 , end: 56.4, text: "car je" },
  { start:56.4 , end: 57.1, text: "suis au lycée." },
  { start:57.7 , end: 58.0, text: "Je..." },
  { start:59.0 , end: 59.4, text: "Une lettre" },
  { start:59.4 , end: 60.0, text: "d'invitation ?" },
  { start:61.2 , end: 62.4, text: "Oui, je dois" },
  { start:62.4 , end: 62.8, text: "visiter" },
  { start:62.8 , end: 63.7, text: "l'université" },
  { start:63.7 , end: 64.1, text: "pendant les" },
  { start:64.1 , end: 64.5, text: "journées de" },
  { start:64.5 , end: 65.4, text: "l'orientation." },
  ];

  const updateCaption = (time) => {
    const index = captions.findIndex(
      (cap) => time >= cap.start && time <= cap.end
    );
    setActiveIndex(index !== -1 ? index : null);
  };

  const handleInputChange = (index, value) => {
    setInputs({
      ...inputs,
      [index]: value
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

    Object.keys(correctAnswers).forEach(key => {
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
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
      {/* Header */}
            <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span  style={{ backgroundColor: "#5e74b7" }} className="ex-A">B</span> <span style={{color:"black"}} className="number-of-q">5</span> Écoute et écris l’information manquante.</header>

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
                <span className="speaker font-bold  min-w-[80px]" style={{color:"#8cd5de"}}>Le facteur :</span>
                
                <input
                  type="text"
                  value={inputs[0] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-black-300 focus:outline-none focus:border-black-500 w-48"
                />
               <span className="text">Antoine Roux habite ici ? </span>
              </div>

              {/* Ligne 2 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[80px]" style={{color:"#f05c82"}}>Mme Roux:</span>
                <span className="text">Oui, c’est mon fils.</span>
               
              </div>

              {/* Ligne 3 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[80px]"style={{color:"#8cd5de"}}>Le facteur :</span>
                <input
                  type="text"
                  value={inputs[1] || ""}
                  onChange={(e) => handleInputChange(2, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-300 focus:outline-none focus:border-blue-500 w-40"
                />
                <span className="text"> une lettre pour lui.</span>
              </div>

              {/* Ligne 4 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[80px]"style={{color:"#f05c82"}}>Mme Roux :</span>
                <span className="text">Antoine, viens ici.</span>
              </div>

              {/* Ligne 5 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[80px] "style={{color:"#898989"}}>Antoine :</span>
                <span className="text">Oui maman,</span>
                   <input
                  type="text"
                  value={inputs[2] || ""}
                  onChange={(e) => handleInputChange(3, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-300 focus:outline-none focus:border-blue-500 w-24"
                />
                <span className="text">se passe ?</span>
              </div>

              {/* Ligne 6 */}

              {/* Ligne 7 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[80px]" style={{color:"#f05c82"}}>Mme Roux :</span>
                <input
                  type="text"
                  value={inputs[3] || ""}
                  onChange={(e) => handleInputChange(3, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-300 focus:outline-none focus:border-blue-500 w-24"
                />
                <span className="text">une lettre pour toi.</span>
              </div>

              {/* Ligne 8 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[80px]"style={{color:"#898989"}}>Antoine :</span>
                <span className="text">Ahhh. Bon. Où est la lettre ?</span>
             
                
              </div>

              {/* Ligne 10 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold min-w-[80px]" style={{color:"#8cd5de"}}>Le facteur :</span>
                <span className="text">Vous devez signer ici</span>
                <input
                  type="text"
                  value={inputs[4] || ""}
                  onChange={(e) => handleInputChange(5, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-40"
                />
                <span className="text">.</span>
              </div>

              {/* Ligne 11 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[80px]"style={{color:"#898989"}}>Antoine :</span>
                <span className="text">Merci.</span>
              </div>

              {/* Ligne 12 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[80px]" style={{color:"#f05c82"}}>Mme Roux :</span>
                <span className="text">Qui t’envoie cette lettre ?</span>
              </div>

              {/* Ligne 13 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[80px]"style={{color:"#898989"}}>Antoine :</span>
                <span className="text">C’est</span>
                  <input
                  type="text"
                  value={inputs[5] || ""}
                  onChange={(e) => handleInputChange(6, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-48"
                />
                <span className="text">d’invitation, car je suis au lycée, je…</span>
              </div>

              {/* Ligne 14 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold min-w-[80px]" style={{color:"#f05c82"}}>Mme Roux :</span>
                <span className="text">Une lettre</span>
                  <input
                  type="text"
                  value={inputs[6] || ""}
                  onChange={(e) => handleInputChange(6, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-48"
                />
                <span className="text">?</span>
              </div>
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[80px]"style={{color:"#898989"}}>Antoine :</span>
                <span className="text">Oui. Je dois visiter l’université pendant les journées de l’orientation.</span>
                
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
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>
    </div>
  );
};

export default Page5_Q1_CleanAudio;
