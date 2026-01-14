import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U3Audio/U3ScQ5.mp3";
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
   { start:5.4, end: 6.6, text: "Rempris A1," },
  { start:7.1 , end: 8.3, text: "unité 3," },
  { start:8.5 , end: 9.5, text: "sous le même toit," },
  { start:10.2 , end: 10.9, text: "section C," },
  { start:11.5 , end: 12.13, text: "ma maison." },
  { start:13.7 , end: 14.0, text: "Exercice 5." },
  { start:14.7 , end: 17.8, text: "Écoute la conversation entre Belle et Bête." },
  { start:18.6 , end: 20.5, text: "De quoi parle-t-elle ?" },
  { start:20.5 , end: 21.8, text: "Choisis la bonne réponse." },
  { start:23.9 , end: 25.6, text: "J'ai trouvé une bonne annonce pour nous." },
  { start:26.89 , end: 27.23, text: "Ah bon ?" },
  { start:28.25 , end: 28.95, text: "C'est un T2." },
  { start:30.23 , end: 31.51, text: "Qu'est-ce que ça veut dire T2 ?" },
  { start:32.7 , end: 34.75, text: "C'est un appartement qui comporte un salon" },
  { start:34.99 , end: 36.23, text: "une cuisine séparée," },
  { start:36.63 , end: 38.27, text: "une chambre et une salle de bain." },
  { start:39.43 , end: 39.59, text: "Ah," },
  { start:39.6 , end: 40.25, text: "c'est super !" },
  { start:40.47 , end: 41.9, text: "Est-ce que cet appartement est meublé ?" },
  { start:43.0 , end: 43.2, text: "Oui," },
  { start:43.5 , end: 43.9, text: "en plus," },
  { start:44.0 , end: 45.4, text: "il est au deuxième étage." },
  { start:46.5 , end: 48.2, text: "Est-ce que les transports en commun sont loin ?" },
  { start:49.23 , end: 49.37, text: "Non," },
  { start:49.37 , end: 53.0, text: "il y a une station du métro 12 et un arrêt du tram 3A." },
  { start:54.2 , end: 56.9, text: "Est-ce que tu as le numéro du propriétaire ?" },
  { start:56.9 , end: 57.1, text: "Oui," },
  { start:57.1 , end: 58.6, text: "nous devons prendre rendez-vous." },
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
