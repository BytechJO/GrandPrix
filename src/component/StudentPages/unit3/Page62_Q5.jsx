import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/unit1/SoundU1/ScQ4.mp3";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import ValidationAlert from "../../Popup/ValidationAlert";
import "./Page62_Q5.css";
import imgbackground from "../../../assets/unit1/sectionD/14png.png";
import { TbMessageCircle } from "react-icons/tb";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page5_Q1_CleanAudio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [volume, setVolume] = useState(1);
  const [showCaption, setShowCaption] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
  
  const [score, setScore] = useState(null);
 const captions = [
  { start:5.0, end: 6.87, text: "Grand Prix A1" },
  { start:7.23, end: 8.13, text: "unité 1" },
  { start:8.51, end: 9.43, text: "se présenter" },
  { start:9.99, end: 10.91, text: "Section C" },
  { start:11.53, end: 12.07, text: "mon âge" },
  { start:12.99, end: 13.91, text: "Exercice 4" },
  { start:14.72, end: 16.81, text: "écoute et entoure les erreurs" },
  { start:19.17, end: 20.70, text: "Je m'appelle Jean-Pierre," },
  { start:21.17, end: 21.85, text: "j'ai 16 ans." },
  { start:22.59, end: 30.61, text: "Mon numéro d'étudiant est le 95738640." },


  ];
  const updateCaption = (currentTime) => {
  const index = captions.findIndex(
    (cap) => currentTime >= cap.start && currentTime <= cap.end
  );

  setActiveIndex(index !== -1 ? index : null);
};

  // IMAGE QUESTION
  const [imageSelections, setImageSelections] = useState([null, null, null,null,null,null]);
  const [checkedMarks, setCheckedMarks] = useState(false);

 const imageBoxes = [
  { top: "10%", left: "15%", width: "20%", height: "40%" },
  { top: "20%", left: "58%", width: "15%", height: "20%" },
  { top: "62%", left: "27%", width: "20%", height: "30%" },
  { top: "54%", left: "65%", width: "8%", height: "12%" },
  { top: "65%", left: "63%", width: "10%", height: "5%" },
  { top: "40%", left: "75%", width: "10%", height: "17%" },
];


  const correctBoxes = [1, 2, 3,4,5,6]; // المربعات الصحيحة حسب ترتيبك

  // عند اختيار المربع
  const handleImageClick = (idx) => {
    if (checkedMarks) return; // منع التغيير بعد التحقق
    const newSelections = [...imageSelections];
    newSelections[idx] = idx + 1; // حفظ رقم المربع (1,2,3)
    setImageSelections(newSelections);
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

  // ✅ CHECK ANSWER
  const checkAnswer = () => {
    let correctCount = 0;

    imageSelections.forEach((val) => {
      if (correctBoxes.includes(val)) correctCount++;
    });

    const total = correctBoxes.length;
    setScore({ correct: correctCount, total });
    setCheckedMarks(true);

    const newSelections = imageSelections.map(val =>
      correctBoxes.includes(val) ? val : val !== null ? -1 : null
    );
    setImageSelections(newSelections);

    if (correctCount === total) {
      ValidationAlert.success(`Excellent! (${correctCount}/${total})`, "All answers are correct!");
    } else if (correctCount === 0) {
      ValidationAlert.error(`All answers are incorrect. (${correctCount}/${total})`, "Try again!");
    } else {
      ValidationAlert.error(`You got ${correctCount} out of ${total} correct.`, "Almost there!");
    }
  };

  // ✅ SHOW ANSWER
  const showAnswerFunc = () => {
    const newSelections = [...imageSelections];
    correctBoxes.forEach((val, idx) => {
      newSelections[idx] = val; // وضع الإجابة الصحيحة
    });
    setImageSelections(newSelections);
    setCheckedMarks(true);

    const total = correctBoxes.length;
    const correctCount = total;
    setScore({ correct: correctCount, total });

    ValidationAlert.success("Answers shown", "The correct answers have been placed.", `${correctCount}/${total}`);
  };

  // ✅ RESET
  const resetExercise = () => {
    setImageSelections([null, null, null,null,null,null]);
    setScore(null);
    resetAudio();
    setCheckedMarks(false);
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
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
        <span className="ex-A" style={{ backgroundColor: "#5e74b7" }}>D</span>
        <span className="number-of-q">5</span>
       Écoute, trouve et entoure les
objets.
      </header>

      {/* AUDIO PLAYER */}
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

      {/* IMAGE QUESTION */}
      <div
        className="inputsp62Q5"
      >
        {imageBoxes.map((box, idx) => (
       <div
  key={idx}
  onClick={() => handleImageClick(idx)}
  style={{
    position: "absolute",
    width: box.width,
    height: box.height,
    borderRadius: "50%",
    top: box.top,
    left: box.left,
    cursor: checkedMarks ? "not-allowed" : "pointer",
    border:
      imageSelections[idx] !== null
        ? imageSelections[idx] === correctBoxes[idx]
          ? "3px solid red"
          : imageSelections[idx] === -1
          ? "3px solid lightcoral"
          : "3px solid blue"
        : "",
  }}
/>

        ))}
      </div>
<div className="spaces"></div>
      {score && <ScoreCardEnhanced score={score} />}

      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn swal-continue">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>
    </div>
  );
};

export default Page5_Q1_CleanAudio;
