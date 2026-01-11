import React, { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import ValidationAlert from "../../Popup/ValidationAlert";
import { TbMessageCircle } from "react-icons/tb";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import img1 from "../../../assets/unite3pages/svg/5.svg";
import img2 from "../../../assets/unite3pages/svg/6.svg";
import img3 from "../../../assets/unite3pages/svg/7.svg";
import "./Page67_Q2.css";

const Page5_Q1_CleanAudio = () => {
  const [score, setScore] = useState(null);
  const [answer, setAnswer] = useState(""); // الإجابة المكتوبة
  const correctAnswer = "Je propose qu’on aille au cinéma samedi après-midi. Ensuite, on peut dîner ensemble."; // مثال على الإجابة النموذجية

  const checkAnswer = () => {
    if (!answer.trim()) {
      ValidationAlert.info("Attention!", "Veuillez écrire votre réponse.");
      return;
    }

    // هنا يمكنك إضافة منطق تقييم النص (مثل مطابقة الكلمات المفتاحية)
    const keywords = ["cinéma", "samedi", "dîner", "ensemble"];
    const lowerAnswer = answer.toLowerCase();
    const matches = keywords.filter(word => lowerAnswer.includes(word)).length;
    const scorePercentage = Math.floor((matches / keywords.length) * 100);
    const isCorrect = scorePercentage >= 50; // معيار النجاح 50% على الأقل

    const correctCount = isCorrect ? 1 : 0;
    const total = 1;
    setScore({ correct: correctCount, total, details: ` ${scorePercentage}% des mots-clés trouvés` });

    if (isCorrect) {
      ValidationAlert.success(
        `Excellent! (${correctCount}/${total})`,
        `Votre réponse contient ${matches}/${keywords.length} mots-clés attendus.`
      );
    } else {
      ValidationAlert.error(
        `Résultat : ${correctCount}/${total}`,
        "Essayez d’utiliser des mots comme : cinéma, samedi, dîner, ensemble."
      );
    }
  };

  const showAnswerFunc = () => {
    setAnswer(correctAnswer);
    setScore({ correct: 1, total: 1, details: "Réponse modèle affichée." });
    ValidationAlert.success(
      "Réponse affichée",
      "Voici un exemple de réponse correcte."
    );
  };

  const resetExercise = () => {
    setAnswer("");
    setScore(null);
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
      <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span style={{ backgroundColor: "#a4dce7", color:"#5e74b7" }} className="ex-A">PRODUCTION ÉCRITE</span>{" "}
        <span style={{color:"black"}} className="number-of-q">1</span> Écris la réponse de Chloé au message d’Alice.
      </header>

      {score && <ScoreCardEnhanced score={score} />}

      <div className="qcm-container">
        <div className="qcm-column">
          <div className="message-box mb-6 p-4 border-2 border-blue-200 rounded-lg bg-blue-50">
            <h3 className="font-bold text-lg mb-2">Message d’Alice :</h3>
            <p>“Salut Chloé ! Ça te dit de sortir samedi ? J’ai envie de faire quelque chose de sympa. Tu as une idée ?”</p>
          </div>
          <p className="question-title mb-4">Réponse de Chloé :</p>
          <textarea
            className="w-full h-40 p-4 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-200 transition"
            placeholder="Écrivez votre réponse ici..."
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            disabled={!!score}
          />
    
        </div>
      </div>

     
    </div>
  );
};

export default Page5_Q1_CleanAudio;