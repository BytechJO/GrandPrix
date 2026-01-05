import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/unit1/SoundU1/1.mp3";
import ValidationAlert from "../../Popup/ValidationAlert";

const Page5_Q1_CleanAudio = () => {
  const audioRef = useRef(null);

  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false);

  const correctAnswers = {
    a: "Comment ça va",
    b: "heureux",
    c: "ami",
    d: "train",
    e: "5 h 15",
    f: "bien",
    g: "très père",
    h: "à la maison",
  };

  const checkAnswer = () => {
    let correctCount = 0;
    let incomplete = false;

    Object.keys(correctAnswers).forEach((key) => {
      if (!answers[key]) incomplete = true;
      if (answers[key] === correctAnswers[key]) correctCount++;
    });

    if (incomplete) {
      ValidationAlert.info("Incomplete", "Please answer all questions.");
      return;
    }

    setChecked(true);

    const total = Object.keys(correctAnswers).length;
    correctCount === total
      ? ValidationAlert.success(`Score: ${correctCount}/${total}`)
      : ValidationAlert.error(`Score: ${correctCount}/${total}`);
  };

  const showAnswerFunc = () => {
    setAnswers(correctAnswers);
    setChecked(true);
  };

  const resetExercise = () => {
    setAnswers({});
    setChecked(false);
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center gap-8 p-4">
      {/* العنوان */}
      <header
        className="header-title-page1 w-full text-left mb-4"
        style={{
          marginLeft: "42%",
          marginTop: "5%",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        <span style={{ backgroundColor: "#73C8D2" }} className="ex-A">
          c
        </span>
        <span className="number-of-q">7</span> Entoure la bonne réponse.
      </header>

      {/* التمرين */}
      <div className="exercise-choices w-full max-w-4xl">
        {[
          {
            id: "a",
            speaker: "Belle :",
            before: "Salut, Ray",
            options: ["Comment ça va", "Comment allez-vous"],
          },
          {
            id: "b",
            speaker2:"Ray :",
            before: "Je suis très",
            options: ["heureux", "triste"],
            after: "parce qu’aujourd’hui mon",
          },
          {
            id: "c",
            after: "arrive à Marseille.",
            options: ["ami", "frère"],
          },
          {
            speaker:"Belle :",
            id: "d",
            before: "C’est vrai ! À quelle heure est son",
            options: ["avion","train"],
          },
          {
            speaker2:"Ray :",
            id: "e",
            before: "À",
            options: ["5 h 45", "5 h 15"],
            after:"de l’après-midi"
          },
          {
            
            before: "Salut, Daniel ! Comment ça va ?",
            speaker2:"Ray :",

            
          },
          {
            speaker3:"Daniel :",
            id: "f",
            before: "Salut, Ray ! Ça va",
            options: ["bien", "très bien"],
            
          },
          {
            speaker2:"Ray :",
          
            before: "Je suis très heureux de te voir.",
         
            
          },
          {
            speaker3:"Daniel :",
          
            before: "Moi aussi.",
         
            
          },
          {
            speaker2:"Ray :",
            id:"g",
            before: "Je veux te présenter mon",
           options: ["frère", "très père"],
           after:"Il s’appelle Jerard Dupont."
           
            
          },
          {
            speaker3:"Daniel :",
           
            before: "Enchanté, monsieur Dupont",
         
           
           
            
          },
           {
            speaker2:"M. Dupont :",
            id:"h",
            before: "C’est un plaisir de te rencontrer, Daniel. Alors,allons",
           options: ["à la maison", "à la station"],
         
           
            
          },
        ].map((q) => (
          <div key={q.id} className="question-row">
            {/* المتكلم */}
            {q.speaker && (
              <span
                style={{
                  color: "#f89f7c",
                  fontWeight: "bold",
                  marginRight: "8px",
                }}
              >
                {q.speaker}
              </span>
            )}
            {q.speaker2 && (
              <span
                style={{
                  color: "#00b0f0",
                  fontWeight: "bold",
                  marginRight: "8px",
                }}
              >
                {q.speaker2}
              </span>
            )}
            {q.speaker3 && (
              <span
                style={{
                  color: "#ee4570",
                  fontWeight: "bold",
                  marginRight: "8px",
                }}
              >
                {q.speaker3}
              </span>
            )}

            {/* النص قبل الخيار */}
            {q.before && (
              <span className="question-text" style={{ marginRight: "8px" }}>
                {q.before}
              </span>
            )}

            {/* الخيارات */}
         {q.options &&
  q.options.map((opt) => {
    const isSelected = answers[q.id] === opt;
    const isCorrect = checked && opt === correctAnswers[q.id];
    const isWrong = checked && isSelected && opt !== correctAnswers[q.id];

    return (
      <label
        key={opt}
        className={`choice-label ${
          isCorrect ? "correct" : ""
        } ${isWrong ? "wrong" : ""}`}
      >
        <input
          type="radio"
          name={q.id}
          value={opt}
          checked={isSelected}
          onChange={(e) =>
            setAnswers((prev) => ({
              ...prev,
              [q.id]: e.target.value,
            }))
          }
          disabled={checked}
        />
        {opt}
      </label>
    );
  })}


            {/* النص بعد الخيار */}
            {q.after && (
              <span className="question-text" style={{ marginLeft: "8px" }}>
                {q.after}
              </span>
            )}
          </div>
        ))}
      </div>

      <div className="spaces"></div>

      {/* الأزرار */}
      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">
          Recommencer ↻
        </button>
        <button onClick={showAnswerFunc} className="show-answer-btn">
          Afficher la réponse
        </button>
        <button onClick={checkAnswer} className="check-button2">
          Vérifier la réponse ✓
        </button>
      </div>
    </div>
  );
};

export default Page5_Q1_CleanAudio;
