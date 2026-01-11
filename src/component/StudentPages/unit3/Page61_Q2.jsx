import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard"; 
import img1 from "../../../assets/unite3pages/svg/page61Q2.png";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U2Audio/U2Q4.mp3";

/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  0: "dans",
  1: "sur",
  2: "dans",
  3: "dans",
  4: "sur",
  5: "dans",
  6: "dans",
  7: "derrière",
  8: "sur",
  9: "sous",
  10: "derrière",
  11: "devant",
  12: "derrière",
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
        style={{
          marginLeft: "42%",
          color: "black",
          marginTop: "5%",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        <span className="ex-A" style={{ backgroundColor: "#5e74b7" }}>D</span>
        <span className="number-of-q">2</span>{" "}
        Où est la souris ?
      </header>

    

      {score && <ScoreCardEnhanced score={score} />}

      {/* Exercise Container */}
      <div className="page28q4-exercise-container w-full max-w-6xl flex flex-col lg:flex-row gap-8">
        {/* Dialogue */}
        <div className="page28q4-dialogue-section lg:w-2/3">
          <div className="page28q4-dialogue-exercise w-full bg-white p-8 rounded-xl">
            <div className="page28q4-dialogue-text space-y-6">

              {/* Ligne 1 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[40px]">a</span>
                <span className="text">La souris est</span>
                <input
                  type="text"
                  value={inputs[0] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  style={{borderBottom:"2px black solid",marginLeft:"5px"}}
                />
                <span className="text">le placard.</span>
              </div>
              {/* Ligne 2 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[40px]">b</span>
                <span className="text">La souris est</span>
                <input
                  type="text"
                  value={inputs[1] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  style={{borderBottom:"2px black solid",marginLeft:"5px"}}
                />
                <span className="text">le placard.</span>
              </div>
              {/* Ligne 3 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[40px]">c</span>
                <span className="text">La souris est</span>
                <input
                  type="text"
                  value={inputs[2] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  style={{borderBottom:"2px black solid",marginLeft:"5px"}}
                />
                <span className="text">l’évier</span>
              </div>
              {/* Ligne 4 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[40px]">d</span>
                <span className="text">La souris est</span>
                <input
                  type="text"
                  value={inputs[3] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  style={{borderBottom:"2px black solid",marginLeft:"5px"}}
                />
                <span className="text">la casserole.</span>
              </div>
              {/* Ligne 5 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[40px]">e</span>
                <span className="text">La souris est </span>
                <input
                  type="text"
                  value={inputs[4] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  style={{borderBottom:"2px black solid",marginLeft:"5px"}}
                />
                <span className="text">le fromage.</span>
              </div>
              {/* Ligne 6 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[40px]">f</span>
                <span className="text">La souris est </span>
                <input
                  type="text"
                  value={inputs[5] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  style={{borderBottom:"2px black solid",marginLeft:"5px"}}
                />
                <span className="text">le tiroir.</span>
              </div>
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[40px]">g</span>
                <span className="text">La souris est </span>
                <input
                  type="text"
                  value={inputs[6] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  style={{borderBottom:"2px black solid",marginLeft:"5px"}}
                />
                <span className="text">la tasse.</span>
              </div>
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[40px]">h</span>
                <span className="text">La souris est </span>
                <input
                  type="text"
                  value={inputs[7] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  style={{borderBottom:"2px black solid",marginLeft:"5px"}}
                />
                <span className="text">la tasse.</span>
              </div>
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[40px]">i</span>
                <span className="text">La souris est </span>
                <input
                  type="text"
                  value={inputs[8] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  style={{borderBottom:"2px black solid",marginLeft:"5px"}}
                />
                <span className="text">la chaise.</span>
              </div>
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[40px]">j</span>
                <span className="text">La souris est </span>
                <input
                  type="text"
                  value={inputs[9] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  style={{borderBottom:"2px black solid",marginLeft:"5px"}}
                />
                <span className="text">la chaise.</span>
              </div>
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[40px]">k</span>
                <span className="text">La souris est </span>
                <input
                  type="text"
                  value={inputs[10] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  style={{borderBottom:"2px black solid",marginLeft:"5px"}}
                />
                <span className="text">le sel.</span>
              </div>
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[40px]">l</span>
                <span className="text">La souris est </span>
                <input
                  type="text"
                  value={inputs[11] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  style={{borderBottom:"2px black solid",marginLeft:"5px"}}
                />
                <span className="text">le chat.</span>
              </div>
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[40px]">m</span>
                <span className="text">La souris est </span>
                <input
                  type="text"
                  value={inputs[12] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  style={{borderBottom:"2px black solid",marginLeft:"5px"}}
                />
                <span className="text">la porte.</span>
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
