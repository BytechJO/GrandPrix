import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page32_Exercise = () => {
  const [answers, setAnswers] = useState({
    un: Array(6).fill(""),
    une: Array(6).fill(""),
    des: Array(6).fill("")
  });

  const [score, setScore] = useState(null);

  const correctAnswers = {
    un: ["stylo", "diseur", "crayon", "tableau blanc", "cahier", "CD"],
    une: ["règle", "trousse", "gomme", "fenêtre", "table", "paire de ciseaux"],
    des: ["chaises", "crayons", "stylos", "surligneurs", "cahiers", "CD"]
  };

  const handleInputChange = (category, index, value) => {
    setAnswers(prev => ({
      ...prev,
      [category]: prev[category].map((item, i) => 
        i === index ? value : item
      )
    }));
  };

  const checkAnswer = () => {
    let correctCount = 0;
    let totalFields = 0;

    Object.keys(correctAnswers).forEach(category => {
      answers[category].forEach((answer, index) => {
        const userAnswer = answer.trim().toLowerCase();
        const correct = correctAnswers[category][index]?.toLowerCase() || "";
        
        if (userAnswer && correct) {
          totalFields++;
          if (userAnswer === correct) correctCount++;
        }
      });
    });

    setScore({ correct: correctCount, total: totalFields });

    if (correctCount === totalFields && totalFields > 0) {
      ValidationAlert.success(
        "Excellent !",
        `${correctCount}/${totalFields} correct`
      );
    } else if (totalFields === 0) {
      ValidationAlert.info("Veuillez remplir des champs.");
    } else {
      ValidationAlert.error(
        "Presque !",
        `${correctCount}/${totalFields} correct`
      );
    }
  };

  const showAnswerFunc = () => {
    setAnswers(correctAnswers);
    const total = Object.values(correctAnswers).reduce((sum, arr) => sum + arr.filter(Boolean).length, 0);
    setScore({ correct: total, total });
    ValidationAlert.success("Réponses affichées");
  };

  const resetExercise = () => {
    setAnswers({
      un: Array(6).fill(""),
      une: Array(6).fill(""),
      des: Array(6).fill("")
    });
    setScore(null);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-6">1 Fais des listes.</h1>
      
    
<h1>helllllo</h1>
     

      {score && <ScoreCardEnhanced score={score} />}
    </div>
  );
};

export default Page32_Exercise;