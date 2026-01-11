import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/unit1/SoundU1/Unite1SectionDExercice4.mp3";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import ValidationAlert from "../../Popup/ValidationAlert";
import { TbMessageCircle } from "react-icons/tb";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import img1 from "../../../assets/unite3pages/svg/1.png"
import img2 from "../../../assets/unite3pages/svg/2.png"
import img3 from "../../../assets/unite3pages/svg/3.png"
import img4 from "../../../assets/unite3pages/svg/4.png"
import "./Page67_Q2.css"
const Page5_Q1_CleanAudio = () => {
  const audioRef = useRef(null);
  const [score, setScore] = useState(null);
  const [answer, setAnswer] = useState(""); // الإجابة المختارة
  const correctAnswer = "patric";

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
   
  };

  // دالة لتحديد الكلاس الأخضر أو الأحمر
  const getLabelClass = (value) => {
    if (!score) return "";
    if (value === correctAnswer) return "correct";
    if (answer === value) return "wrong";
    return "";
  };

  // بيانات الصور للخيارات
  const options = [
    { value: "patric",image: img1 },
    { value: "pierre",  image: img2 },
    { value: "pol", image: img3 },
    { value: "pol2", image: img4 },
  ];

  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
      <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span  style={{ backgroundColor: "#a4dce7", color:"#5e74b7" }} className="ex-A">DELF</span> <span style={{color:"black"}} className="number-of-q">1</span> Écoute le message et réponds aux questions. Coche la bonne réponse. <br />
        Chaque réponse correcte vaut 2,4 points.
      </header>

      {score && <ScoreCardEnhanced score={score} />}

      <div className="qcm-container">
        <div className="qcm-column">
          <p className="question-title">Comment se sent Pierre ?</p>
          
          <div className="image-options-container flex gap-6 mt-6">
            {options.map((option) => (
              <div key={option.value} className="image-option-wrapper flex flex-col items-center">
                <label 
                  className={`image-option1 ${getLabelClass(option.value)} cursor-pointer`}
                >
                  <input
                    type="radio"
                    name="answer"
                    value={option.value}
                    checked={answer === option.value}
                    onChange={(e) => setAnswer(e.target.value)}
                    disabled={!!score}
                    className="hidden"
                  />
                  <div className="image-container relative">
                    <img 
                      src={option.image} 
                      alt={option.label}
                      className="option-image w-32 h-32 object-cover rounded-lg border-2 border-gray-300 hover:border-blue-400 transition-all duration-200"
                    />
                    {answer === option.value && (
                      <div className="selection-indicator absolute inset-0 border-4 border-blue-500 rounded-lg pointer-events-none"></div>
                    )}
                  </div>
                </label>
                <span className="option-label mt-2 font-medium">{option.label}</span>
              </div>
            ))}
          </div>
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