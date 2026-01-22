import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import img1 from "../../../assets/workpages/svg/291.svg";
import img2 from "../../../assets/workpages/svg/292.svg";
import img3 from "../../../assets/workpages/svg/293.svg";

const Page28Q1 = () => {
  // ✅ الإجابات الصحيحة
  const correctAnswers = {
    a: {
      answer: `Il y a de la limonade.
Il y a du beurre.
Il y a de la salade de fruits.
Il y a du fromage.
Il y a du pain.`,
      type: "phrase"
    },
    b: {
      answer: `Il y a du lait.
Il y a du beurre.
Il y a du miel.
Il y a de la confiture.
Il y a du pain.
Il y a du thé.
Il y a des croissants.
Il y a des céréales.`,
      type: "phrase"
    },
    c: {
      answer: `Il y a de l’eau minérale.
Il y a du poulet.
Il y a de la salade.
Il y a du riz.`,
      type: "phrase"
    }
  };

  const words = Object.keys(correctAnswers);
  const [score, setScore] = useState(null);
  const [answers, setAnswers] = useState(
    Object.fromEntries(
      words.map(w => [w, correctAnswers[w].answer.split("\n").map(() => "")])
    )
  );
  const [answerStatus, setAnswerStatus] = useState({});

  const handleChange = (word, index, value) => {
    const updated = [...answers[word]];
    updated[index] = value;
    setAnswers({ ...answers, [word]: updated });
  };

  const checkAnswer = () => {
    const newStatus = {};
    let correctCount = 0;
    let totalCount = 0;
    let incomplete = false;

    words.forEach((w) => {
      newStatus[w] = [];
      const correctLines = correctAnswers[w].answer.split("\n");

      correctLines.forEach((line, i) => {
        totalCount++;
        const val = answers[w][i]?.trim() || "";
        if (!val) incomplete = true;

        const isCorrect =
          val.toLowerCase().replace(/[.,]/g, "").trim() ===
          line.toLowerCase().replace(/[.,]/g, "").trim();

        if (isCorrect) correctCount++;
        newStatus[w][i] = isCorrect ? "correct" : "wrong";
      });
    });

    setAnswerStatus(newStatus);
    setScore({ correct: correctCount, total: totalCount });

    if (incomplete) {
      ValidationAlert.error(
        "Incomplet",
        "Veuillez remplir tous les champs.",
        `${correctCount}/${totalCount}`
      );
    } else if (correctCount === totalCount) {
      ValidationAlert.success(
        "Excellent!",
        "Vous avez toutes les bonnes réponses!",
        `${correctCount}/${totalCount}`
      );
    } else {
      ValidationAlert.error(
        "Presque!",
        `Vous avez ${correctCount} sur ${totalCount} correct.`,
        `${correctCount}/${totalCount}`
      );
    }
  };

  const showAnswers = () => {
    const filled = {};
    const status = {};
    words.forEach((w) => {
      filled[w] = correctAnswers[w].answer.split("\n");
      status[w] = filled[w].map(() => "correct");
    });
    setAnswers(filled);
    setAnswerStatus(status);
    setScore({
      correct: Object.values(filled).reduce((acc, arr) => acc + arr.length, 0),
      total: Object.values(filled).reduce((acc, arr) => acc + arr.length, 0)
    });
    ValidationAlert.success(
      "Réponses affichées",
      "Toutes les bonnes réponses ont été remplies.",
      `${Object.values(filled).reduce((acc, arr) => acc + arr.length, 0)}/${
        Object.values(filled).reduce((acc, arr) => acc + arr.length, 0)
      }`
    );
  };

  const reset = () => {
    setAnswers(
      Object.fromEntries(
        words.map(w => [w, correctAnswers[w].answer.split("\n").map(() => "")])
      )
    );
    setAnswerStatus({});
    setScore(null);
  };

  // الكروت
  const cards = [
    { id: "a", title: "goûter ?", image: img3 },
    { id: "b", title: "petit-déjeuner ?", image: img2 },
    { id: "c", title: "dîner ?", image: img1 }
  ];

  return (
    <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
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
        <span className="ex-A" style={{ backgroundColor: "#f38180" }}>5</span>
        <span className="number-of-q">3</span>{" "}
        Qu'est-ce qu'il y a pour le :
      </header>

      {score && <ScoreCardEnhanced score={score} />}

      <div className="w-full max-w-6xl flex flex-col gap-8">
        {cards.map((card) => (
          <div key={card.id} className="bg-white p-6 rounded-2xl shadow-lg w-full">
            <div className="flex flex-row items-start gap-8">
              {/* الصورة */}
              <div className="flex-1 flex justify-center items-center">
                <div className="bg-gray-100 rounded-xl p-4 w-full h-64 flex items-center justify-center overflow-hidden">
                  <img 
                    src={card.image} 
                    alt={card.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* السؤال + inputs */}
              <div className="flex-1 space-y-4">
                <h3 className="text-lg font-bold text-gray-800">{card.title}</h3>

                {correctAnswers[card.id].answer.split("\n").map((_, index) => (
                  <input
                    key={index}
                    type="text"
                    style={{borderBottom:"2px solid black", flexDirection:"column", display:"flex", width:"100%"}}
                    value={answers[card.id][index]}
                    onChange={(e) => handleChange(card.id, index, e.target.value)}
                    className={`   text-lg ${
                      answerStatus[card.id]?.[index] === "correct"
                        ? "border-green-500 bg-green-50"
                        : answerStatus[card.id]?.[index] === "wrong"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-300"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
<div className="spaces"></div>
      {/* الأزرار */}
      <div className="action-buttons-container">
        <button onClick={reset} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswers} className="show-answer-btn">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse ✓</button>
      </div>
    </div>
  );
};

export default Page28Q1;
