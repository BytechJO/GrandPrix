import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import "./WB_Unit3_Page18_Q8.css";

const PossessiveAdjectiveExercise = () => {
  const items = [
    { sentence: "Le frère ______ frère", correct: "mon" },
    { sentence: "L'ami ______ ami", correct: "mon" },
    { sentence: "Les grands-parents ______ grands-parents", correct: "mes" },
    { sentence: "La tante ______ tante", correct: "ma" },
    { sentence: "Le lit ______ lit", correct: "mon" },
    { sentence: "L'adresse ______ adresse", correct: "mon" },
    { sentence: "Les stylos ______ stylos", correct: "mes" },
    { sentence: "La fille ______ fille", correct: "ma" },
    { sentence: "Les sœurs ______ sœurs", correct: "mes" },
    { sentence: "L'oncle ______ oncle", correct: "mon" },
    { sentence: "Les chambres ______ chambres", correct: "mes" },
    { sentence: "La table ______ table", correct: "ma" },
    { sentence: "La tasse ______ tasse", correct: "ma" },
    { sentence: "L'ordinateur ______ ordinateur portable", correct: "mon" },
  ];
const letters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N"];

  const options = [
    { value: "mon", label: "mon", color: "#4F46E5" },
    { value: "ma", label: "ma", color: "#10B981" },
    { value: "mes", label: "mes", color: "#F59E0B" },
  ];

  const [userAnswers, setUserAnswers] = useState(
    new Array(items.length).fill("")
  );
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(null);
  const [hints, setHints] = useState({});

  const handleChange = (index, value) => {
    const newAnswers = [...userAnswers];
    newAnswers[index] = value;
    setUserAnswers(newAnswers);
  };

  const toggleHint = (index) => {
    setHints(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const checkAnswers = () => {
    let correctCount = 0;
    const results = items.map((item, idx) => {
      const isCorrect = userAnswers[idx] === item.correct;
      if (isCorrect) correctCount++;
      return isCorrect;
    });

    setChecked(true);
    setScore({ correct: correctCount, total: items.length });

    if (correctCount === items.length) {
      ValidationAlert.success(
        "Parfait ! 🎉",
        "Félicitations ! Toutes vos réponses sont correctes.",
        `${correctCount}/${items.length}`
      );
    } else if (correctCount === 0) {
      ValidationAlert.info(
        "Un peu d'aide ? 💡",
        "Vérifiez bien le genre et le nombre des noms.",
        `${correctCount}/${items.length}`
      );
    } else {
      ValidationAlert.warning(
        "Continuez ! 👍",
        `Vous avez ${correctCount} bonne(s) réponse(s) sur ${items.length}.`,
        `${correctCount}/${items.length}`
      );
    }
  };

  const resetExercise = () => {
    setUserAnswers(new Array(items.length).fill(""));
    setChecked(false);
    setScore(null);
    setHints({});
  };

  const showAnswerFunc = () => {
    const correctAnswers = items.map((item) => item.correct);
    setUserAnswers(correctAnswers);
    setChecked(true);
    setScore({ correct: items.length, total: items.length });
    ValidationAlert.info(
      "Réponses affichées",
      "Observez bien les règles d'accord.",
      `${items.length}/${items.length}`
    );
  };

  const getHint = (item) => {
    if (item.sentence.includes("Les ")) return "Pluriel → 'mes'";
    if (item.sentence.includes("La ")) return "Féminin singulier → 'ma'";
    if (item.sentence.includes("Le ") || item.sentence.includes("L'"))
      return "Masculin singulier → 'mon'";
    return "";
  };

  return (
    <div className="page189-wrapper">
      {/* Header avec design moderne */}
       
   <header
        className="header-title-page1 w-full text-left mb-4"
        style={{
          marginLeft: "9%",
          color: "black",
          marginTop: "5%",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        <span className="ex-A" style={{ backgroundColor: "#5e74b7" }}>3</span>
        <span className="number-of-q">9</span>
        Complète avec l’adjectif possessif « mon », « ma » ou « mes » .
      </header>

 
  

      {/* Grille des questions */}
      <div className="questions-grid">
        {items.map((item, index) => {
          const isAnswered = userAnswers[index] !== "";
          const isCorrect = checked && userAnswers[index] === item.correct;
          const isWrong = checked && userAnswers[index] !== item.correct && isAnswered;

          return (
            <div 
              key={index} 
              className={`question-card ${isCorrect ? 'correct' : ''} ${isWrong ? 'wrong' : ''} ${isAnswered ? 'answered' : ''}`}
            >
              <div className="question-header">
               <span className="question-number">{letters[index]}</span>

             
              </div>
              
              <div className="sentence-container">
                <span className="sentence-text">
                  {item.sentence.split("______")[0]}
                  <span className="gap-placeholder">
                    {userAnswers[index] || "______"}
                  </span>
                  {item.sentence.split("______")[1]}
                </span>
              </div>

              {hints[index] && (
                <div className="hint-box">
                  <span className="hint-icon">💡</span>
                  <span className="hint-text">{getHint(item)}</span>
                </div>
              )}

              <div className="options-container">
                {options.map((opt) => (
                  <button
                    key={opt.value}
                    className={`option-button ${userAnswers[index] === opt.value ? 'selected' : ''}`}
                    onClick={() => !checked && handleChange(index, opt.value)}
                    style={{
                      '--option-color': opt.color,
                      backgroundColor: userAnswers[index] === opt.value ? opt.color : 'white'
                    }}
                    disabled={checked}
                  >
                    <span className="option-text">{opt.label}</span>
                    {checked && userAnswers[index] === opt.value && !isCorrect && (
                      <span className="option-error">✗</span>
                    )}
                    {checked && userAnswers[index] === opt.value && isCorrect && (
                      <span className="option-check">✓</span>
                    )}
                  </button>
                ))}
              </div>

              {checked && isWrong && (
                <div className="correction-box">
                  <span className="correction-label">Réponse correcte :</span>
                  <span className="correct-answer">{item.correct}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Score Card */}
      {score && (
        <div className="score-container">
          <ScoreCardEnhanced score={score} />
        </div>
      )}

      {/* Boutons d'action */}
     
      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">
          Recommencer ↻
        </button>
        <button onClick={showAnswerFunc} className="show-answer-btn">
         Afficher la réponse
        </button>
        <button onClick={checkAnswers} className="check-button2">
         Vérifier la réponse✓
        </button>
      </div>
    </div>
  );
};

export default PossessiveAdjectiveExercise;