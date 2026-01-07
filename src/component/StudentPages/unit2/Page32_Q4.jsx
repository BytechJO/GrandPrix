import React, { useState,useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import img1 from "../../../assets/unite2pages/svg/page32Q4.svg";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U2Audio/SecBQ4.mp3";

/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  0: "m’appelle",
  1: "la fenêtre.",
  2: "Merci.",
  3: "Comment ça va ",
  4: "as besoin de",
 
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

{start:5.0 , end:6.7 , text:"Grand prix A1,"},
{start:6.7 , end:8.0 , text:"unité 2,"},
{start:8.0 , end:8.7 , text:"à l'école."},
{start:9.6 , end:10.4 , text:"Section B."},
{start:11.0 , end:11.4 , text:"Qu'est-ce que"},
{start:11.4 , end:12.4 , text:"c'est ?"},
{start:12.4 , end:13.5 , text:"Exercice 4."},
{start:14.2 , end:15.7 , text:"Écoute et écris"},
{start:15.7 , end:16.4 , text:"l'information"},
{start:16.4 , end:17.1 , text:"manquante."},
{start:19.0 , end:19.9 , text:"Bonjour Madame"},
{start:19.9 , end:20.6 , text:"Bouton, je"},
{start:20.6 , end:21.6 , text:"m'appelle Marie,"},
{start:21.6 , end:22.1 , text:"je suis une"},
{start:22.1 , end:22.9 , text:"nouvelle élève."},
{start:24.1 , end:25.2 , text:"Bonjour Marie,"},
{start:25.2 , end:25.9 , text:"bienvenue dans"},
{start:25.9 , end:27.0 , text:"ma classe."},
{start:27.0 , end:27.8 , text:"Tout le monde,"},
{start:27.8 , end:28.7 , text:"c'est Marie,"},
{start:28.7 , end:29.3 , text:"votre nouvelle"},
{start:29.3 , end:30.0 , text:"camarade."},
{start:31.0 , end:32.5 , text:"Bonjour Marie !"},
{start:33.6 , end:34.3 , text:"Assieds-toi près"},
{start:34.3 , end:35.1 , text:"de la fenêtre."},
{start:36.2 , end:36.7 , text:"Merci."},
{start:37.8 , end:40.1 , text:"Alors, nous"},
{start:40.1 , end:41.9 , text:"Salut Marie, je"},
{start:41.9 , end:42.8 , text:"m'appelle Chloé,"},
{start:42.8 , end:44.6 , text:"comment ça va ?"},
{start:44.6 , end:45.7 , text:"Salut, ça va"},
{start:45.7 , end:46.2 , text:"pas mal."},
{start:47.4 , end:48.0 , text:"Si tu as besoin"},
{start:48.0 , end:48.2 , text:"de quelque"},
{start:48.2 , end:48.6 , text:"chose,"},
{start:48.6 , end:49.4 , text:"demande-moi, ok"},
{start:50.4 , end:51.1 , text:"Merci."},


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

 const checkAnswer = () => {
  let correctCount = 0;

  Object.keys(correctAnswers).forEach((key) => {
    const userAnswer = inputs[key] ? inputs[key].toLowerCase().trim() : "";
    const correctAnswer = correctAnswers[key].toLowerCase().trim();

    // ✅ تحقق فقط إذا كتب المستخدم شيئًا
    if (userAnswer && userAnswer === correctAnswer) {
      correctCount++;
    }
  });

  const total = Object.keys(correctAnswers).length;
  setScore({ correct: correctCount, total });

  if (correctCount === 0) {
    ValidationAlert.info(
      `Toutes les réponses sont incorrectes (${correctCount}/${total})`,
      "Essayez encore!"
    );
  } else if (correctCount === total) {
    ValidationAlert.success(
      `Excellent! (${correctCount}/${total})`,
      "Toutes les réponses sont correctes!"
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
        style={{
          marginLeft: "42%",
          color: "black",
          marginTop: "5%",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        <span className="ex-A" style={{ backgroundColor: "#df4f89" }}>
          B
        </span>
        <span className="number-of-q">4</span> Écoute et écris l’information manquante.
      </header>

      {score && <ScoreCardEnhanced score={score} />}
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
      {/* Exercise Container */}
<div className="exercise-container w-full max-w-6xl flex flex-row gap-2 ml-0 lg:ml-60">
        {/* الحوار على اليسار */}
<div className="dialogue-section flex-1 min-w-0">
          <div className="dialogue-exercise w-full bg-white p-8 rounded-xl ">
            <div className="dialogue-text space-y-1">
              {/* Ligne 1 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                  Marie :
                </span>
                <span className="text">Bonjour, madame Bouton. Je</span>
                <input
                  type="text"
                  value={inputs[0] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-300 focus:outline-none focus:border-blue-500 w-48"
                />
                <span className="text">Marie. Je suis </span>
                <br />
              </div>

              {/* Ligne 2 */}
              <div className="dialogue-line flex items-start">
                <span className="text">une nouvelle élève.</span>

                <span className="text"> ?</span>
              </div>

              {/* Ligne 3 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-600 min-w-[80px]">
                  Mme Bouton :
                </span>
                <span className="text">
                  Bonjour, Marie. Bienvenue dans ma classe. Tout le monde, c’est
                  Marie, votre nouvelle camarade.
                </span>
              </div>
              <span>La classe : Bonjour, Marie.</span>
              {/* Ligne 4 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-600 min-w-[80px]">
             Mme Bouton :
                </span>
            
                <span className="text">
                 Assieds-toi près de
                </span>
                        <input
                  type="text"
                  value={inputs[1] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-blue-500 w-48"
                />
              </div>

              {/* Ligne 5 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                  Marie :
                </span>
                         <input
                  type="text"
                  value={inputs[2] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-300 focus:outline-none focus:border-blue-500 w-48"
                />
              </div>

           

              {/* Ligne 7 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-600 min-w-[80px]">
                 Mme Bouton :
                </span>
                <span className="text">Alors, nous... . </span>
               
               
              </div>
                <span className="text"> (à sa table)</span>
              {/* Ligne 8 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-900 min-w-[80px]">
                  Chloé :
                </span>
                <span className="text">Psst… Salut, Marie. Je m’appelle Chloé. </span>
                <br />
                <input
                  type="text"
                  value={inputs[3] || ""}
                  onChange={(e) => handleInputChange(4, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-48"
                />
             
              </div>

              {/* Ligne 9 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                 Marie
                </span>
                <span className="text">Salut ! Ça va pas mal.</span>
              </div>

              {/* Ligne 10 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-900 min-w-[80px]">
               Chloé
                </span>
                <span className="text">Si tu</span>
                <input
                  type="text"
                  value={inputs [4] || ""}
                  onChange={(e) => handleInputChange(5, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-40"
                />
                <span className="text">quelque chose,demande-moi. Ok ?</span>
              </div>

              {/* Ligne 11 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                  Marie :
                </span>
                <span className="text">Merci.</span>
              </div>

          
          
            </div>
          </div>
        </div>

        {/* الصور على اليمين */}
        <div className="images-section lg:w-1/3 flex flex-col gap-6">
          <div className="image-container32" style={{ width: "70%", marginBottom:"5%"}}>
            <img
              src={img1}
              alt="Dialogue illustration 1"
              className="w-full h-auto max-w-[100%] object-contain"
              style={{    height: "31vh"}}
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="action-buttons-container">
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
