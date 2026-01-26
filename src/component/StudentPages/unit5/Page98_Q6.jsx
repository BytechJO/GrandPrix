import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U5Audio/u5sbq6.mp3";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import ValidationAlert from "../../Popup/ValidationAlert";
import "../unit1/page14_Q5.css";

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
      input1: "bien",
      input2: "mal",
      input3: "pas mal",
    };

    let correctCount = 0;
    if (input1.trim() === correctAnswers.input1) correctCount++;
    if (input2.trim() === correctAnswers.input2) correctCount++;
    if (input3.trim() === correctAnswers.input3) correctCount++;

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
    setInput1("bien");
    setInput2("mal");
    setInput3("pas mal");

    const total = 4;
    const correctCount = 4;
    setScore({ correct: correctCount, total });

    ValidationAlert.success("Answers shown", "The correct answers have been placed.", `${correctCount}/${total}`);
  };

  const resetExercise = () => {
    setInput1("");
    setInput2("");
    setInput3("");
    setScore(null);
    resetAudio();
    resetSignature();
  };



  const captions = [
  { start:5.189, end: 8.159, text: "Grand prix A1, unité 5" },
{ start:8.159, end: 9.299, text: "les repas" },
{ start:9.299, end: 10.529, text: "section B" },
{ start:10.529, end: 12.059, text: "des repas sains" },
{ start:12.059, end: 14.029, text: "exercice 6" },
{ start:14.029, end: 17.379, text: "Écoute Martin, Théo et Emma." },
{ start:17.379, end: 19.149, text: "Est-ce qu'ils ont des repas" },
{ start:19.149, end: 21.729, text: "sains? Écris bien," },
{ start:21.729, end: 23.929, text: "mal ou pas mal" },
{ start:26.069, end: 27.699, text: "Je m'appelle Martin." },
{ start:27.699, end: 28.949, text: "Pour le goûter" },
{ start:28.949, end: 30.369, text: "je prends une poire" },
{ start:30.369, end: 31.349, text: "et une banane." },
{ start:33.387, end: 34.367, text: "Bonjour à tous" },
{ start:34.367, end: 35.697, text: "je m'appelle Théo." },
{ start:35.697, end: 36.677, text: "Pour le dîner" },
{ start:36.677, end: 38.117, text: "je prends souvent des frites," },
{ start:38.117, end: 40.647, text: "des hamburgers et du gâteau." },
{ start:40.647, end: 42.907, text: "Pour le déjeuner" },
{ start:42.907, end: 44.117, text: "je prends de la viande," },
{ start:44.117, end: 45.487, text: "de la salade et parfois" },
{ start:45.487, end: 46.107, text: "des bonbons." },


  ];

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
        <span className="ex-A" style={{ backgroundColor: "#f38180" }}>B</span>
        <span className="number-of-q">6</span>{" "}
       Écoute Martin, Théo et Emma. Est-ce qu’ils ont des repas sains <br /> ? Écris « bien », « mal » ou
      « pas mal ».
      </header>

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
        <div className="p98q6">
          <input type="text" className="input98Q1" value={input1} onChange={(e) => setInput1(e.target.value)} />
          <input type="text" className="input98Q2" value={input2} onChange={(e) => setInput2(e.target.value)} />
          <input type="text" className="input98Q3" value={input3} onChange={(e) => setInput3(e.target.value)}  />
          {/* الانبوت الخامس توقيع فقط */}
        
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
