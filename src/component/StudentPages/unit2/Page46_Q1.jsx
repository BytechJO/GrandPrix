import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/unit1/SoundU1/ScQ5.mp3";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import ValidationAlert from "../../Popup/ValidationAlert";
import "./Page46_Q1.css"

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
  const [input5, setInput5] = useState(""); // توقيع، لا يتم التحقق منه

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


  const resetExercise = () => {
    setInput1("");
    setInput2("");
    setInput3("");
    setInput4("");
    setInput5("");
    setScore(null);
    resetAudio();
    resetSignature();
  };



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

  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
    <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
      >
        <span style={{ backgroundColor: "#2c8ac9", color: "#df4f89" }} className="ex-A">DELF </span>
        <span style={{ color: "black" }} className="number-of-q">1</span>
      Complète la fiche.
      </header>

     <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
           
              </div>

      {score && <ScoreCardEnhanced score={score} />}

      <div className="p14q429">
        <div className="inputsp29">
          <input type="text" className="input129" value={input1} onChange={(e) => setInput1(e.target.value)} placeholder="Nom" />
          <input type="text" className="input229" value={input2} onChange={(e) => setInput2(e.target.value)} placeholder="Prénom" />
          <input type="text" className="input329" value={input3} onChange={(e) => setInput3(e.target.value)} placeholder="Âge" />
          <input type="text" className="input429" value={input4} onChange={(e) => setInput4(e.target.value)} placeholder="Nationalité" />
<input type="text" className="input629" value={input6} onChange={(e) => setInput6(e.target.value)} placeholder="2 matières préférées" />
<input type="text" className="input729" value={input7} onChange={(e) => setInput7(e.target.value)} placeholder="2 matières détestées" />

        </div>
      </div>

      <div className="spaces"></div>

      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button  className="show-answer-btn swal-continue">Afficher la réponse</button>
        <button  className="check-button2">Vérifier la réponse✓</button>
      </div>
    </div>
  );
};

export default Page5_Q1_CleanAudio;
