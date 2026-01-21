import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U3Audio/U3SBQ6.mp3";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import ValidationAlert from "../../Popup/ValidationAlert";
import "../unit1/page14_Q5.css"

import { TbMessageCircle } from "react-icons/tb";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page5_Q1_CleanAudio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [volume, setVolume] = useState(1);
  const [score, setScore] = useState(null);
  const [showCaption, setShowCaption] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const updateCaption = (currentTime) => {
  const index = captions.findIndex(
    (cap) => currentTime >= cap.start && currentTime <= cap.end
  );

  setActiveIndex(index !== -1 ? index : null);
};

 

  // ✅ ANSWERS
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const [input6, setInput6] = useState("");
  const [input7, setInput7] = useState("");
  const [input8, setInput8] = useState("");
  const [input9, setInput9] = useState("");

  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

  const startDrawing = (e) => {
    const ctx = canvasRef.current.getContext("2d");
    ctx.beginPath();
    ctx.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    setIsDrawing(true);
  };

  const draw = (e) => {
    if (!isDrawing) return;
    const ctx = canvasRef.current.getContext("2d");
    ctx.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    ctx.strokeStyle = "#000";
    ctx.lineWidth = 2;
    ctx.stroke();
  };

  const stopDrawing = () => setIsDrawing(false);

  const resetSignature = () => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
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

  // ✅ CHECK ANSWER فقط للحقول 1–4
  const checkAnswer = () => {
    const correctAnswers = {
      input1: "l'orientation",
      input2: "roux",
      input3: "16 et 18 juin",
      input4: "6",
      input6: "45",
      input7: "20",
      input8: "30",
      input9: "l'universite pantheon-sorbonne,centre pierre mendès,90,rue de tolbiac on aide les ados s orienter dans leur future profession",
    };

    let correctCount = 0;
    if (input1.trim() === correctAnswers.input1) correctCount++;
    if (input2.trim() === correctAnswers.input2) correctCount++;
    if (input3.trim() === correctAnswers.input3) correctCount++;
    if (input4.trim() === correctAnswers.input4) correctCount++;

    const total = 4;
    setScore({ correct: correctCount, total });

    if (correctCount === total) {
      ValidationAlert.success(`Excellent! (${correctCount}/${total})`, "All answers are correct!");
    } else if (correctCount === 0) {
      ValidationAlert.error(`All answers are incorrect. (${correctCount}/${total})`, "Try again!");
    } else {
      ValidationAlert.error(`You got ${correctCount} out of ${total} correct.`, "Almost there!");
    }
  };

  const showAnswerFunc = () => {
    setInput1("l'orientation");
    setInput2("roux");
    setInput3("16 et 18 juin");
    setInput4("6");
    setInput6("45");
    setInput7("20");
    setInput8("30");
    setInput9("l'universite pantheon-sorbonne,centre pierre mendès,90,rue de tolbiac on aide les ados s orienter dans leur future profession");

    const total = 4;
    const correctCount = 4;
    setScore({ correct: correctCount, total });

    ValidationAlert.success("Answers shown", "The correct answers have been placed.", `${correctCount}/${total}`);
  };

  const resetExercise = () => {
    setInput1("");
    setInput2("");
    setInput3("");
    setInput4("");
    setInput6("");
    setInput7("");
    setInput8("");
    setInput9("");
    setScore(null);
    resetAudio();
    resetSignature();
  };



  const captions = [
     { start:5.5 , end: 6.4, text: "Grand Prix" },
  { start:6.4 , end: 8.6, text: "A1, unité 3." },
  { start:9.3 , end: 10.0, text: "Sous le même" },
  { start:10.0 , end: 11.3, text: "toit." },
  { start:11.3 , end: 12.1, text: "Section B." },
  { start:12.6 , end: 13.6, text: "Mon rêve est" },
  { start:14.4 , end: 15.9, text: "exercice 6." },
  { start:16.4 , end: 18.0, text: "Écoute et écris" },
  { start:18.0 , end: 18.8, text: "l'information" },
  { start:18.8 , end: 19.4, text: "manquante." },
  { start:21.6 , end: 22.6, text: "Oui, c'est" },
  { start:22.6 , end: 23.0, text: "une lettre" },
  { start:23.0 , end: 23.6, text: "d'invitation." },
  { start:24.2 , end: 25.1, text: "Je dois visiter" },
  { start:25.1 , end: 26.0, text: "l'université" },
  { start:26.0 , end: 26.4, text: "pendant les" },
  { start:26.4 , end: 26.9, text: "journées de" },
  { start:26.9 , end: 27.6, text: "l'orientation." },
  { start:28.7 , end: 30.2, text: "Quand ?" },
  { start:30.2 , end: 31.7, text: "C'est le quinze," },
  { start:31.7 , end: 32.7, text: "seize et" },
  { start:32.7 , end: 34.5, text: "dix-huit juin." },
  { start:34.5 , end: 35.1, text: "Bon, à quelle" },
  { start:35.1 , end: 35.5, text: "heure tu dois" },
  { start:35.5 , end: 35.8, text: "aller à" },
  { start:35.8 , end: 36.6, text: "l'université ?" },
  { start:37.8 , end: 38.4, text: "De six heures" },
  { start:38.4 , end: 39.3, text: "quarante-cinq" },
  { start:39.3 , end: 39.6, text: "à vingt" },
  { start:39.6 , end: 41.3, text: "heures trente." },
  { start:41.3 , end: 42.0, text: "Magnifique." },
  { start:42.0 , end: 42.7, text: "Où se passe cet" },
  { start:42.7 , end: 44.4, text: "événement ?" },
  { start:44.4 , end: 45.3, text: "À l'université" },
  { start:45.3 , end: 46.6, text: "Panthéon-Sorbonne," },
  { start:46.6 , end: 47.2, text: "centre Pierre" },
  { start:47.2 , end: 48.1, text: "Mendès," },
  { start:48.1 , end: 48.7, text: "quatre-vingt-dix," },
  { start:48.7 , end: 49.0, text: "rue de" },
  { start:49.0 , end: 50.0, text: "Tolbiac." },
  { start:50.0 , end: 50.9, text: "Mais je ne sais" },
  { start:50.9 , end: 51.4, text: "pas si je" },
  { start:51.4 , end: 52.9, text: "dois y aller." },
  { start:52.9 , end: 53.3, text: "Mais non," },
  { start:53.3 , end: 53.7, text: "qu'est-ce que" },
  { start:53.7 , end: 54.2, text: "tu dis ?" },
  { start:54.8 , end: 55.5, text: "Bien sûr que tu" },
  { start:55.5 , end: 56.5, text: "dois y aller." },
  { start:56.5 , end: 57.1, text: "Ces journées de" },
  { start:57.1 , end: 58.0, text: "l'orientation" },
  { start:58.0 , end: 58.7, text: "aident les ados" },
  { start:58.7 , end: 59.0, text: "à bien" },
  { start:59.0 , end: 59.7, text: "s'orienter dans" },
  { start:59.7 , end: 60.0, text: "leur future" },
  { start:60.0 , end: 61.4, text: "profession, à" },
  { start:61.4 , end: 62.0, text: "choisir s'ils" },
  { start:62.0 , end: 62.6, text: "veulent étudier" },
  { start:62.6 , end: 63.6, text: "les arts, les" },
  { start:63.6 , end: 64.5, text: "langues, les" },
  { start:64.5 , end: 65.4, text: "sciences, la" },
  { start:65.4 , end: 66.9, text: "santé, le droit" },
  { start:66.9 , end: 67.2, text: "ou les" },
  { start:67.2 , end: 68.9, text: "technologies." },
  { start:68.9 , end: 70.1, text: "D'accord, je" },
  { start:70.1 , end: 71.0, text: "vais vérifier." },


  ];

  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
          <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span  style={{ backgroundColor: "#5e74b7" }} className="ex-A">B</span> <span style={{color:"black"}} className="number-of-q">6</span>Écoute et écris l’information manquante.</header>


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

      {score && <ScoreCardEnhanced score={score} />}

      <div className="p14q4">
        <div className="inputsp54">
          <input type="text" className="input154" value={input1} onChange={(e) => setInput1(e.target.value)}  />
          <span className="span154" >Antoine</span>
          <input type="text" className="input254" value={input2} onChange={(e) => setInput2(e.target.value)} />
           <span className="span254" >15,</span>
          <input type="text" className="input354" value={input3} onChange={(e) => setInput3(e.target.value)}/>
             <span className="span354" >h</span>
          <input type="text" className="input454" value={input4} onChange={(e) => setInput4(e.target.value)}  />
           <span className="span454" >a</span>
          <input type="text" className="input654" value={input6} onChange={(e) => setInput6(e.target.value)}  />
          {/* الانبوت الخامس توقيع فقط */}
          <span className="span754">h</span>
         <input type="text" className="input754" value={input7} onChange={(e) => setInput7(e.target.value)}  />
         <input type="text" className="input854" value={input8} onChange={(e) => setInput8(e.target.value)}  />
         <textarea type="text" className="input954" value={input9} onChange={(e) => setInput9(e.target.value)} style={{resize:"none"}}  />
            
        
        </div>
      </div>

      <div className="spaces"></div>

      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn swal-continue">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>
    </div>
  );
};

export default Page5_Q1_CleanAudio;
