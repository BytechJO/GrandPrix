import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page_Symbols_Meaning = () => {
  const [inputs, setInputs] = useState({
    a: "",
    b: "",
    c: ""
  });
  const [score, setScore] = useState(null);

  // الإجابات الصحيحة
  const correctAnswers = {
    a: "Le métro",
    b: "Le tram",
    c: "water closet , c'est l'ancien terme anglaisdésignant les toilettes."
  };

  const handleInputChange = (key, value) => {
    setInputs({
      ...inputs,
      [key]: value
    });
  };

  const normalizeString = (str) => {
    return str
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "") // إزالة التشكيل
      .replace(/[^\w\s]/g, "") // إزالة علامات الترقيم
      .replace(/\s+/g, " "); // إزالة المسافات الزائدة
  };

  const checkAnswer = () => {
    let correctCount = 0;
    const results = {};

    Object.keys(correctAnswers).forEach(key => {
      const userAnswer = normalizeString(inputs[key] || "");
      const correctAnswer = normalizeString(correctAnswers[key]);
      
      // البحث عن الكلمات المفتاحية في الإجابة
      const keyWords = getKeyWords(key);
      const hasKeyWords = keyWords.every(word => userAnswer.includes(word));
      
      if (hasKeyWords) {
        correctCount++;
        results[key] = true;
      } else {
        results[key] = false;
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

  // الكلمات المفتاحية لكل سؤال
  const getKeyWords = (questionKey) => {
    const keyWordsMap = {
      a: ["m", "12", "mètres", "carrés"],
      b: ["t", "3", "appartement", "type", "séjour"],
      c: ["wc", "toilettes"]
    };
    return keyWordsMap[questionKey] || [];
  };

  const showAnswerFunc = () => {
    setInputs(correctAnswers);
  };

  const resetExercise = () => {
    setInputs({ a: "", b: "", c: "" });
    setScore(null);
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
      {/* Header */}
            <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span  style={{ backgroundColor: "#5e74b7" }} className="ex-A">C</span> <span style={{color:"black"}} className="number-of-q">8</span> 8 Qu’est-ce que ça veut dire
« <span style={{border:"3px solid blue", borderRadius:"50%", padding:"3px"}}>M</span>  <span style={{backgroundColor:"#14c208ae", borderRadius:"50%", padding:"3px"}}>12</span>» «   <span style={{border:"3px solid blue", borderRadius:"50%", padding:"3px"}}>T</span>  <span style={{backgroundColor:"#ffae00ff", borderRadius:"50%", padding:"3px"}}>3a</span> » et « WC »</header>

      {/* Instruction */}
   

      {/* Questions Container */}
      <div className="questions-container w-full max-w-2xl space-y-8">
        {/* Question A */}
        <div className="question-item p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
          <div className="flex items-center mb-4">
            <div className="question-label bg-blue-100 text-blue-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
            a
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
                <span style={{border:"3px solid blue", borderRadius:"50%", padding:"3px"}}>M</span>  <span style={{backgroundColor:"#14c208ae", borderRadius:"50%", padding:"3px"}}>12</span> signifie
            </h3>
          </div>
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Écrivez la signification de M 12..."
            value={inputs.a}
            onChange={(e) => handleInputChange("a", e.target.value)}
          />
          <div className="hint mt-2">
          </div>
        </div>

        {/* Question B */}
        <div className="question-item p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
          <div className="flex items-center mb-4">
            <div className="question-label bg-green-100 text-green-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
              b
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
                           <span style={{border:"3px solid blue", borderRadius:"50%", padding:"3px"}}>T</span>  <span style={{backgroundColor:"#ffae00ff", borderRadius:"50%", padding:"3px"}}>3a</span> signifie
            </h3>
          </div>
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
            placeholder="Écrivez la signification de T 3a..."
            value={inputs.b}
            onChange={(e) => handleInputChange("b", e.target.value)}
          />
          <div className="hint mt-2">
           
          </div>
        </div>

        {/* Question C */}
        <div className="question-item p-6 border border-gray-200 rounded-lg bg-white shadow-sm">
          <div className="flex items-center mb-4">
            <div className="question-label bg-purple-100 text-purple-800 font-bold rounded-full w-8 h-8 flex items-center justify-center mr-4">
              c
            </div>
            <h3 className="text-xl font-semibold text-gray-800">
              WC signifie 
            </h3>
          </div>
          <input
            type="text"
            className="w-full p-4 border border-gray-300 rounded-lg text-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
            placeholder="Écrivez la signification de WC..."
            value={inputs.c}
            onChange={(e) => handleInputChange("c", e.target.value)}
          />
          <div className="hint mt-2">
            
          </div>
        </div>
      </div>

      {/* Score Display */}
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

      {/* Réponses modèles (cachées) */}
      <div className="hidden">
        <p>Réponses modèles:</p>
        <ul>
          <li>a: {correctAnswers.a}</li>
          <li>b: {correctAnswers.b}</li>
          <li>c: {correctAnswers.c}</li>
        </ul>
      </div>
    </div>
  );
};

export default Page_Symbols_Meaning;