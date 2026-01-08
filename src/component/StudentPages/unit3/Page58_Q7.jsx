import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard"; 
import img1 from "../../../assets/unite3pages/svg/page58Q71.svg"; // الصورة الأولى
import img2 from "../../../assets/unite3pages/svg/page58Q72.svg"; // الصورة الثانية

const Page_Plan_Correct = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [explanation, setExplanation] = useState("");
  const [score, setScore] = useState(null);

  const plans = [
    {
      id: 1,
      title: "Plan A",
      image: img1,
      description: "Plan avec salle de bains et WC séparés",
    },
    {
      id: 2,
      title: "Plan B",
      image: img2,
      description: "Plan avec salle de bains et WC combinés",
    },
  ];

  const correctAnswer = {
    planId: 1,
    explanation: "Le plan « a » est correct parce que la salle de bains et le WC doivent être séparés."
  };

  const handleSelectPlan = (planId) => {
    setSelectedPlan(planId);
  };

  const handleExplanationChange = (e) => {
    setExplanation(e.target.value);
  };

  const normalizeString = (str) => {
    return str
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s]/g, ""); // إزالة علامات الترقيم
  };

  const checkAnswer = () => {
    const isPlanCorrect = selectedPlan === correctAnswer.planId;
    const userExplanation = normalizeString(explanation);
    const correctExplanation = normalizeString(correctAnswer.explanation);
    
    // يمكن تعديل هذا المنطق حسب مستوى الدقة المطلوب في الشرح
    const isExplanationPartiallyCorrect = userExplanation.includes("salle de bains") && 
                                         userExplanation.includes("wc") && 
                                         (userExplanation.includes("séparés") || userExplanation.includes("separés"));
    
    let scoreValue = 0;
    let message = "";
    
    if (isPlanCorrect && isExplanationPartiallyCorrect) {
      scoreValue = 1;
      setScore({ correct: 1, total: 1 });
      ValidationAlert.success(
        "Excellent! (1/1)",
        "Le plan sélectionné est correct et votre explication est bonne!"
      );
    } else if (isPlanCorrect) {
      scoreValue = 0.5;
      setScore({ correct: 0.5, total: 1 });
      ValidationAlert.info(
        "Partiellement correct (0.5/1)",
        "Le plan est correct mais votre explication doit être plus précise."
      );
    } else {
      scoreValue = 0;
      setScore({ correct: 0, total: 1 });
      ValidationAlert.error(
        "Le plan sélectionné est incorrect (0/1)",
        "Essayez encore!"
      );
    }
  };

  const showAnswerFunc = () => {
    setSelectedPlan(correctAnswer.planId);
    setExplanation(correctAnswer.explanation);
  };

  const resetExercise = () => {
    setSelectedPlan(null);
    setExplanation("");
    setScore(null);
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
      {/* Header */}
             <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span  style={{ backgroundColor: "#5e74b7" }} className="ex-A">C</span> <span style={{color:"black"}} className="number-of-q">7</span> Quel plan est correct ? Pourquoi ?</header>

      {/* Plans Display */}
      <div className="plans-container flex flex-col md:flex-row gap-8 justify-center items-center w-full">
        {plans.map((plan) => (
          <div
            key={plan.id}
            className={`plan-card flex flex-col items-center p-6 border-2 rounded-lg cursor-pointer transition-all ${
              selectedPlan === plan.id
                ? "border-blue-500 bg-blue-50 shadow-md"
                : "border-gray-300 hover:border-gray-400"
            }`}
            onClick={() => handleSelectPlan(plan.id)}
          >
            <h3 className="text-xl font-bold mb-4">{plan.title}</h3>
           <img
  src={plan.image}
  alt={plan.title}
 style={{width:"100%", height:"100%"}}
/>

            <p className="text-gray-600 text-center mb-4">{plan.description}</p>
            <div className="mt-2 flex items-center">
              <input
                type="radio"
                name="plan"
                checked={selectedPlan === plan.id}
                onChange={() => handleSelectPlan(plan.id)}
                className="mr-2 h-5 w-5 cursor-pointer"
              />
              <label className="text-lg cursor-pointer">Sélectionner ce plan</label>
            </div>
          </div>
        ))}
      </div>

      {/* Explanation Input - استخدمنا input بدلاً من textarea */}
      <div className="explanation-container w-full max-w-2xl">
        <label className="block text-lg font-semibold mb-2">
          Expliquez pourquoi ce plan est correct :
        </label>
        <input
          type="text"
          className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          placeholder="Écrivez votre explication ici..."
          value={explanation}
          onChange={handleExplanationChange}
         
        />
        <p className="text-sm text-gray-500 mt-2">
          Exemple: "Le plan A est correct parce que la salle de bains et le WC sont séparés."
        </p>
      </div>

      {score && (
        <div className="w-full max-w-2xl">
          <ScoreCardEnhanced score={score} />
        </div>
      )}

      <div className="spaces">ts</div>

      {/* Buttons */}
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

      {/* Réponse modèle (cachée - للإرشاد فقط) */}
      <div className="hidden">
        <p>Réponse modèle: {correctAnswer.explanation}</p>
      </div>
    </div>
  );
};

export default Page_Plan_Correct;