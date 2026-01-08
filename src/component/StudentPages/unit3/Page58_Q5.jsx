import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/unit1/SoundU1/U1SAQ5.mp3";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import ValidationAlert from "../../Popup/ValidationAlert";
import img1 from "../../../assets/unite3pages/svg/page58Q4.png";
import { TbMessageCircle } from "react-icons/tb";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

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
 const captions = [
   { start:5.2 , end: 6.5, text: "Grand Prix A1" },
  { start:6.5 , end: 8.5, text: "Unité 2 À" },
  { start:8.5 , end: 10.3, text: "l'école Section" },
  { start:10.3 , end: 12.1, text: "A Se préparer" },
  { start:12.1 , end: 13.4, text: "Exercice" },
  { start:13.4 , end: 14.8, text: "4 Écoute" },
  { start:14.8 , end: 15.8, text: "et écris" },
  { start:15.8 , end: 16.5, text: "l'information" },
  { start:16.5 , end: 17.3, text: "manquante." },
  { start:19.0 , end: 20.8, text: "Salut ma chérie," },
  { start:20.8 , end: 22.6, text: "comment ça va ?" },
  { start:22.6 , end: 23.7, text: "Bonjour maman," },
  { start:23.7 , end: 24.4, text: "ça va bien." },
  { start:25.4 , end: 25.9, text: "Tu es prête" },
  { start:25.9 , end: 27.7, text: "pour l'école ?" },
  { start:27.7 , end: 28.6, text: "Oui, mais j'ai" },
  { start:28.6 , end: 29.1, text: "besoin de" },
  { start:29.1 , end: 29.4, text: "quelques" },
  { start:29.4 , end: 29.9, text: "fournitures" },
  { start:29.9 , end: 30.5, text: "scolaires." },
  { start:31.6 , end: 32.3, text: "Bon, allons" },
  { start:32.3 , end: 32.9, text: "au magasin." },
  { start:35.0 , end: 35.8, text: "Alors, de quoi" },
  { start:35.8 , end: 37.7, text: "as-tu besoin ?" },
  { start:37.7 , end: 38.4, text: "J'ai besoin" },
  { start:38.4 , end: 39.0, text: "de crayons" },
  { start:39.0 , end: 39.7, text: "de couleurs." },
  { start:40.5 , end: 42.0, text: "Et ?" },
  { start:42.0 , end: 42.8, text: "J'ai besoin" },
  { start:42.8 , end: 43.6, text: "d'un cahier." },
  { start:44.2 , end: 45.4, text: "As-tu besoin" },
  { start:45.4 , end: 47.1, text: "d'un stylo ?" },
  { start:47.1 , end: 48.3, text: "Non, j'ai déjà" },
  { start:48.3 , end: 49.5, text: "un stylo, mais" },
  { start:49.5 , end: 50.2, text: "j'ai besoin d'un" },
  { start:50.2 , end: 51.1, text: "compas et d'une" },
  { start:51.1 , end: 51.6, text: "trousse." },
  { start:52.8 , end: 54.5, text: "C'est tout ?" },
  { start:54.5 , end: 55.4, text: "Oui, c'est tout" },
  { start:55.4 , end: 55.9, text: "ce dont j'ai" },
  { start:55.9 , end: 56.5, text: "besoin pour" },
  { start:56.5 , end: 56.9, text: "le moment." },
  ];
  // ✅ MCQ Answers
  const [mcqAnswers, setMcqAnswers] = useState({
    a: "",
   
  });

  // ✅ Correct MCQ Answers
  const correctAnswers = {
    a: "Elles parlent d’une annonce dans le journal.",
   
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

  const resetAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrent(0);
    }
  };

  // ✅ Handle MCQ select
  const handleSelect = (question, value) => {
    setMcqAnswers((prev) => ({
      ...prev,
      [question]: value
    }));
  };

  const checkAnswer = () => {
    let correctCount = 0;

    Object.keys(correctAnswers).forEach((key) => {
      if (mcqAnswers[key] === correctAnswers[key]) {
        correctCount++;
      }
    });

    setScore({ correct: correctCount, total: 3 });

    if (correctCount === 3) {
      ValidationAlert.success(
        "Excellent!",
        "All answers are correct!",
        "3/3"
      );
    } else if (correctCount === 0) {
      ValidationAlert.error(
        "Incorrect!",
        "Try again!",
        "0/3"
      );
    } else {
      ValidationAlert.error(
        "Almost there!",
        `You got ${correctCount} out of 3 correct.`,
        `${correctCount}/3`
      );
    }
  };

  const showAnswerFunc = () => {
    setMcqAnswers({ ...correctAnswers });
    setScore({ correct: 3, total: 3 });

    ValidationAlert.success(
      "Answers shown",
      "The correct answers have been placed.",
      "3/3"
    );
  };

  const resetExercise = () => {
    setMcqAnswers({ a: "", b: "", c: "" });
    setScore(null);
    resetAudio();
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
        <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span  style={{ backgroundColor: "#5e74b7" }} className="ex-A">C</span> <span style={{color:"black"}} className="number-of-q">5</span>Écoute la conversation entre Belle et Bette. 
De quoi parlent-elles ? <br /> Choisis la bonne
réponse.</header>

      {/* Audio */}
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

      <div className="question-container">
      

        <div className="mcq-box">
          {/* A */}
          <div className="question-block">
       
            {["Elles parlent d’une amie.", "Elles parlent de leur examen.", "Elles parlent d’une annonce dans le journal."].map((opt,index) => (
              <label key={opt} className="option">
                <input
                  type="radio"
                  name="a"
                  checked={mcqAnswers.a === opt}
                  onChange={() => handleSelect("a", opt)}
                />
                <span className="option-number">{index + 1}.</span> {opt}
                 
              </label>
            ))}
          </div>

          {/* B */}
     
        </div>
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
