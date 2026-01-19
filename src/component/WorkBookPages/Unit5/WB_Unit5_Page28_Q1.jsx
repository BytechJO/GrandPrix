import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page28Q1 = () => {
  const correctAnswers = {
    lait: { type: "masc", answer: "du lait" },
    fromage: { type: "masc", answer: "du fromage" },
    beurre: { type: "masc", answer: "du beurre" },
    poulet: { type: "masc", answer: "du poulet" },
    poisson: { type: "masc", answer: "du poisson" },
    café: { type: "masc", answer: "du café" },
    chocolat: { type: "masc", answer: "du chocolat" },

    confiture: { type: "fem", answer: "de la confiture" },
    viande: { type: "fem", answer: "de la viande" },
    farine: { type: "fem", answer: "de la farine" },
    salade: { type: "fem", answer: "de la salade" },

    huile: { type: "voyelle", answer: "de l'huile" },
    eau: { type: "voyelle", answer: "de l'eau" },
    omelette: { type: "voyelle", answer: "de l'omelette" },

    œufs: { type: "pluriel", answer: "des œufs" },
    croissants: { type: "pluriel", answer: "des croissants" },
    fraises: { type: "pluriel", answer: "des fraises" },
    bananes: { type: "pluriel", answer: "des bananes" },
    "pommes de terre": { type: "pluriel", answer: "des pommes de terre" },
    pêches: { type: "pluriel", answer: "des pêches" }
  };

  const words = Object.keys(correctAnswers);
  const [score, setScore] = useState(null);

  const [answers, setAnswers] = useState(
    Object.fromEntries(words.map(w => [w, ""]))
  );

  const handleChange = (word, value) => {
    setAnswers({ ...answers, [word]: value });
  };

const checkAnswer = () => {
  const newStatus = {};
  let correctCount = 0;
  let incomplete = false;

  words.forEach(w => {
    const val = answers[w]?.trim();
    if (!val) incomplete = true;

    const isCorrect =
      val?.toLowerCase() === correctAnswers[w].answer.toLowerCase();

    newStatus[w] = isCorrect ? "correct" : "wrong";
    if (isCorrect) correctCount++;
  });

  setAnswerStatus(newStatus);

  const total = words.length;

  // ✅ تحديث السكور
  setScore({
    correct: correctCount,
    total,
    details: ` ${correctCount}/${total} correct`
  });

  if (incomplete) {
    ValidationAlert.error(
      "Incomplete",
      "Please fill in all fields.",
      `${correctCount}/${total}`
    );
  } else if (correctCount === total) {
    ValidationAlert.success(
      "Excellent!",
      "You got all answers right!",
      `${correctCount}/${total}`
    );
  } else {
    ValidationAlert.error(
      "Almost there!",
      `You got ${correctCount} out of ${total} correct.`,
      `${correctCount}/${total}`
    );
  }
};


  // ✅ SHOW ANSWERS
 const showAnswers = () => {
  const filled = {};
  const status = {};

  words.forEach(w => {
    filled[w] = correctAnswers[w].answer;
    status[w] = "correct";
  });

  setAnswers(filled);
  setAnswerStatus(status);

  // ✅ سكور كامل
  setScore({
    correct: words.length,
    total: words.length,
    details: "All answers shown"
  });

  ValidationAlert.success(
    "Answers shown",
    "All correct answers have been filled in.",
    `${words.length}/${words.length}`
  );
};

  // ✅ RESET
 const reset = () => {
  setAnswers(Object.fromEntries(words.map(w => [w, ""])));
  setAnswerStatus({});
  setScore(null); // ✅ تصفير السكور
};



  const byType = type =>
    words.filter(w => correctAnswers[w].type === type);

  const masc = byType("masc");
  const fem = byType("fem");
  const voy = byType("voyelle");
  const plur = byType("pluriel");
const [answerStatus, setAnswerStatus] = useState({});


  const rows = Math.max(masc.length, fem.length, voy.length, plur.length);

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
        <span className="number-of-q">1</span>
Complète en ajoutant l’article qui convient.
      </header>
{score && <ScoreCardEnhanced score={score} />}

      {/* 🔵 مربع الخيارات */}
      <div
        style={{
          border: "2px solid #e91e63",
          padding: 15,
          borderRadius: 10,
          marginBottom: 25,
         width:"67%"
        }}
      >
        <b>Choix :</b>
        <div
          style={{
            marginTop: 10,
            display: "flex",
            flexWrap: "wrap",
            gap: 5
          }}
        >
          {words.map(w => (
            <span
              key={w}
              style={{
                padding: "6px 10px",
                borderRadius: 6,
                
                fontWeight: "bold"
              }}
            >
            
              {correctAnswers[w].answer}
            </span>
          ))}
        </div>
      </div>

      {/* 🔴 الجدول */}
      <table style={{ width: "67%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            {["Masculin", "Féminin", "Devant une voyelle", "Pluriel"].map(h => (
              <th
                key={h}
                style={{
                  border: "2px solid #e91e63",
                  padding: 12,
                  backgroundColor: "#f5f5f5"
                }}
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Array.from({ length: rows }).map((_, i) => (
            <tr key={i}>
              {[masc, fem, voy, plur].map((col, idx) => (
                <td
                  key={idx}
                  style={{
                    border: "2px solid #e91e63",
                    padding: 12,
                  }}
                >
                  {col[i] ? (
                   <input
  value={answers[col[i]]}
  onChange={e => handleChange(col[i], e.target.value)}
  style={{
    width: "95%",
    padding: 8,
    textAlign: "center",
   backgroundColor:
  answerStatus[col[i]] === "wrong"
    ? "#ffe5e5"
    : answerStatus[col[i]] === "correct"
    ? "#e8f5e9"
    : "white",
border:
  answerStatus[col[i]] === "wrong"
    ? "1px solid #e57373"
    : answerStatus[col[i]] === "correct"
    ? "1px solid #4caf50"
    : ""

  }}
/>

                  ) : (
                    <div style={{ height: 36, opacity: 0.4 }} />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
<div className="spaces"></div>
    <div className="action-buttons-container">
        <button onClick={reset} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswers} className="show-answer-btn swal-continue">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>
    </div>
  );
};

export default Page28Q1;
