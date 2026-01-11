import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/unit1/SoundU1/Unite1SectionDExercice4.mp3";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import ValidationAlert from "../../Popup/ValidationAlert";
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

  const [answer, setAnswer] = useState(""); // الإجابة المختارة

  // الإجابة الصحيحة
  const correctAnswer = "pierre";

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

  const checkAnswer = () => {
    if (!answer) {
      ValidationAlert.info("Attention!", "Veuillez choisir une réponse.");
      return;
    }

    const isCorrect = answer === correctAnswer;
    const correctCount = isCorrect ? 1 : 0;
    const total = 1;
    setScore({ correct: correctCount, total });

    if (isCorrect) {
      ValidationAlert.success(
        `Excellent! (${correctCount}/${total})`,
        "La réponse est correcte."
      );
    } else {
      ValidationAlert.error(
        `Résultat : ${correctCount}/${total}`,
        "Écoute encore et réessaie."
      );
    }
  };

  const showAnswerFunc = () => {
    setAnswer(correctAnswer);
    setScore({ correct: 1, total: 1 });

    ValidationAlert.success(
      "Réponse affichée",
      "La bonne réponse est entourée."
    );
  };

  const resetExercise = () => {
    setAnswer("");
    setScore(null);
    resetAudio();
  };

  const [showCaption, setShowCaption] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const captions = [
    { start: 4.9, end: 6.6, text: "Grand Prix A1," },
    { start: 6.6, end: 8.0, text: "Unité 1" },
    { start: 8.0, end: 8.9, text: "Se présenter" },
    { start: 9.7, end: 10.5, text: "Section D" },
    { start: 11.1, end: 12.2, text: "Ma nationalité" },
    { start: 13.0, end: 14.0, text: "Exercice 6" },
    { start: 15.0, end: 16.5, text: "Écoute et trouve" },
    { start: 16.5, end: 17.6, text: "la nationalité" },
    { start: 17.6, end: 18.1, text: "de chaque" },
    { start: 18.1, end: 18.7, text: "personne." },
    { start: 20.5, end: 21.8, text: "Les personnages" },
    { start: 21.8, end: 22.0, text: "sont" },
    { start: 22.0, end: 23.1, text: "dans le bus." },
    { start: 23.1, end: 23.4, text: "Ils se" },
    { start: 23.4, end: 24.5, text: "présentent." },
    { start: 24.5, end: 25.6, text: "Sophia et Alison" },
    { start: 25.6, end: 26.6, text: "sont Suisses" },
    { start: 27.2, end: 28.4, text: "Boris est Russe." },
    { start: 28.9, end: 29.6, text: "Paul et Thomas" },
    { start: 29.6, end: 30.4, text: "sont Anglais" },
    { start: 30.4, end: 31.3, text: "et Annabelle" },
    { start: 31.3, end: 32.0, text: "est Allemande." },
  ];

  const updateCaption = (currentTime) => {
    const index = captions.findIndex(
      (cap) => currentTime >= cap.start && currentTime <= cap.end
    );
    setActiveIndex(index !== -1 ? index : null);
  };

  // دالة لتحديد الكلاس الأخضر أو الأحمر
  const getLabelClass = (value) => {
    if (!score) return "";
    if (value === correctAnswer) return "correct";
    if (answer === value) return "wrong";
    return "";
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
         <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span  style={{ backgroundColor: "#a4dce7", color:"#5e74b7" }} className="ex-A">DELF</span> <span style={{color:"black"}} className="number-of-q">1</span> Écoute le message et réponds aux questions. Coche la bonne réponse. <br />
Chaque réponse correcte vaut 2,4 points.</header>
    
      

      {score && <ScoreCardEnhanced score={score} />}

      <div className="qcm-container">
        <div className="qcm-column">
          <p className="question-title">Quel est le nom du second garçon ?</p>
          <label className={getLabelClass("patric")}>
            <input
              type="radio"
              name="answer"
              value="patric"
              checked={answer === "patric"}
              onChange={(e) => setAnswer(e.target.value)}
              disabled={!!score}
            />
            Patric
          </label>
          <label className={getLabelClass("pierre")}>
            <input
              type="radio"
              name="answer"
              value="pierre"
              checked={answer === "pierre"}
              onChange={(e) => setAnswer(e.target.value)}
              disabled={!!score}
            />
            Pierre
          </label>
          <label className={getLabelClass("pol")}>
            <input
              type="radio"
              name="answer"
              value="pol"
              checked={answer === "pol"}
              onChange={(e) => setAnswer(e.target.value)}
              disabled={!!score}
            />
            Pol
          </label>
        </div>
      </div>

      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn swal-continue">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>
    </div>
  );
};

export default Page5_Q1_CleanAudio;