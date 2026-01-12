import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

/* 🔴 الإجابات الصحيحة - الكلمات المؤنثة */
const correctAnswers = {
  a: false, // le salon (مذكر)
  b: true,  // la salle de bains (مؤنث)
  c: true,  // la mère (مؤنث)
  d: false, // le garage (مذكر)
  e: false, // un lit (مذكر)
  f: true,  // une porte (مؤنث)
  g: true,  // une fenêtre (مؤنث)
  h: false, // un homme (مذكر)
  i: true,  // la salle à manger (مؤنث)
  j: false  // le cinéma (مذكر)
};

const Page17Q4 = () => {
  const [selected, setSelected] = useState({});
  const [score, setScore] = useState(null);

  // قائمة العناصر كما في الصورة
  const items = [
    { id: "a", text: "le salon" },
    { id: "b", text: "la salle de bains" },
    { id: "c", text: "la mère" },
    { id: "d", text: "le garage" },
    { id: "e", text: "un lit" },
    { id: "f", text: "une porte" },
    { id: "g", text: "une fenêtre" },
    { id: "h", text: "un homme" },
    { id: "i", text: "la salle à manger" },
    { id: "j", text: "le cinéma" }
  ];

  const handleSelect = (id) => {
    setSelected(prev => ({
      ...prev,
      [id]: !prev[id] // تبديل التحديد
    }));
  };

  const normalizeString = (str) => {
    return str
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  const checkAnswer = () => {
    let correctCount = 0;

    items.forEach(item => {
      const userSelected = !!selected[item.id];
      const isActuallyFeminine = correctAnswers[item.id];

      if (userSelected === isActuallyFeminine) {
        correctCount++;
      }
    });

    const total = items.length;
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

  const showAnswerFunc = () => {
    const answers = {};
    items.forEach(item => {
      if (correctAnswers[item.id]) {
        answers[item.id] = true;
      }
    });
    setSelected(answers);
  };

  const resetExercise = () => {
    setSelected({});
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
        <span className="ex-A" style={{ backgroundColor: "#5e74b7" }}>3</span>
        <span className="number-of-q">4</span>
        Souligne les mots féminins.
      </header>

      <div style={{ fontSize: "18px", color: "#333", marginBottom: "20px", textAlign: "center" }}>
        Exemple : <span style={{ textDecoration: "underline", color: "#5e74b7" }}>la chambre</span>
      </div>

      {score && <ScoreCardEnhanced score={score} />}

      {/* Exercise Container */}
      <div className="page17q4-exercise-container w-full max-w-4xl">
        <div className="page17q4-exercise bg-white p-8 rounded-xl">
          <div className="page17q4-items grid grid-cols-2 gap-6">
            {items.map((item) => (
              <div
                key={item.id}
                className="item-row flex items-center gap-4 cursor-pointer p-3 rounded-lg hover:bg-gray-50"
                onClick={() => handleSelect(item.id)}
              >
                <span className="font-bold text-gray-700 min-w-[20px]">{item.id}</span>
                <span
                  className={`text-xl transition-all duration-200 ${
                    selected[item.id]
                      ? "underline decoration-2 decoration-blue-600 text-blue-800 font-semibold"
                      : "text-gray-800"
                  }`}
                >
                  {item.text}
                </span>
                {selected[item.id] && (
                  <span className="ml-2 text-blue-600"></span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="spaces" style={{ height: "30px" }}></div>

      {/* Buttons */}
        <div className="action-buttons-container flex gap-4">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>
    </div>
  );
};

export default Page17Q4;