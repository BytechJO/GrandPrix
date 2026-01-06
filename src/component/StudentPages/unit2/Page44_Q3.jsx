import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import "./Page44_Q3.css";

const Page32_Exercise = () => {

  /* ================= STATE ================= */
  const tableData = [
    ["","Lundi", "Mardi", "blank1", "Vendredi", "blank2"],
    ["8 h 15-9h 00", "art", "maths", "blank3", "EPS", "physique"],
    ["9 h 00 - 9 h 45", "blank4", "espagnol", "physique", "blank5", "blank6"],
    ["", "", "Recréation", "", "", ""],
    ["10 h 00 - 11 h 00", "maths", "français", "blank7", "blank8", "art"],
    ["11 h 00 - 11 h 45", "maths", "blank9", "art", "maths", "blank10"],
    ["blank11", "blank12", "technologie", "histoire", "français", "EPS"],
    ["", "", "", "déjeuner", "", ""],
    ["14 h 15 - 15 h 00", "EPS", "blank13", "blank14", "histoire", "maths"],
    ["blank15", "blank16", "anglais", "français", "espagnol", "blank17"],
    ["", "Club sportif natation et rugby", "Club des arts peinture", "Club des arts photographie", "Club sportif football et basketball", "Club des arts graphisme"],
  ];

  const blanks = [
    "blank1","blank2","blank3","blank4","blank5","blank6",
    "blank7","blank8","blank9","blank10","blank11","blank12",
    "blank13","blank14","blank15","blank16","blank17",
  ];

  const correctAnswers = {
    blank1: "Jeudi",
    blank2: "samedi",
    blank3: "SVT",
    blank4: "anglais",
    blank5: "technologie",
    blank6: "anglais",
    blank7: "maths",
    blank8: "physique",
    blank9: "technologie",
    blank10: "SVT",
    blank11: "11 h 45 -12 h 30",
    blank12: "français",
    blank13: "SVT",
    blank14: "espagnol",
    blank15: "15 h 15-16 h 00",
    blank16: "histoire",
    blank17: "français",
  };

  const [answers, setAnswers] = useState(() => {
    const init = {};
    blanks.forEach(b => init[b] = "");
    return init;
  });

  const [score, setScore] = useState(null);
  const [showResults, setShowResults] = useState(false);

  /* ================= HANDLERS ================= */
  const handleInputChange = (blank, value) => {
    setAnswers(prev => ({ ...prev, [blank]: value }));
  };

  const checkAnswer = () => {
    let correctCount = 0;
    let incomplete = false;

    blanks.forEach(blank => {
      const val = answers[blank]?.trim();
      if (!val) incomplete = true;
      if (val?.toLowerCase() === correctAnswers[blank].toLowerCase()) correctCount++;
    });

    const total = blanks.length;

    setShowResults(true); // تفعيل الخلفيات قبل أي فاليديشن

    if (incomplete) {
      ValidationAlert.info(
        "Incomplete",
        "Some answers are missing.",
        `${correctCount}/${total}`
      );
    } else {
      setScore({ correct: correctCount, total });

      if (correctCount === total) {
        ValidationAlert.success(
          "Excellent!",
          "All answers are correct.",
          `${correctCount}/${total}`
        );
      } else if (correctCount === 0) {
        ValidationAlert.error(
          "Try Again!",
          "All answers are incorrect.",
          `${correctCount}/${total}`
        );
      } else {
         ValidationAlert.error(
          "Some answers are incorrect",
          `You got ${correctCount} out of ${total} correct.`,
          `${correctCount}/${total}`
        );
      }
    }
  };

  const showAnswerFunc = () => {
    setAnswers(correctAnswers);
    setScore({ correct: blanks.length, total: blanks.length });
    setShowResults(true);
    ValidationAlert.success(
      "Réponses affichées",
      "All correct answers have been filled in.",
      `${blanks.length}/${blanks.length}`
    );
  };

  const resetExercise = () => {
    const emptyAnswers = {};
    blanks.forEach(b => emptyAnswers[b] = "");
    setAnswers(emptyAnswers);
    setScore(null);
    setShowResults(false);
  };

  const getInputClass = (blank) => {
    if (!showResults) return "input-cell-default";

    const userAnswer = answers[blank]?.trim().toLowerCase();
    const correctAnswer = correctAnswers[blank].toLowerCase();

    if (userAnswer === "") return "input-cell-default"; // فارغ
    return userAnswer === correctAnswer ? "input-cell-correct" : "input-cell-incorrect";
  };

  /* ================= RENDER ================= */
  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
      <header className="header-title-page1 w-full text-left mb-4"
        style={{
          marginLeft: "42%",
          color: "black",
          marginTop: "5%",
          fontSize: "25px",
          fontWeight: "bold",
        }}>
        <span className="ex-A" style={{ backgroundColor: "#2c8ac9", color:"white"}}>Grammaire</span>
        <span className="number-of-q">3</span> Écoute et complète le tableau.
      </header>

      <div className="schedule-table">
        {tableData.map((row, r) => (
          <div key={r} className="row">
            {row.map((cell, c) => {
              if (cell === "") return <div key={c} className="cell empty-cell"></div>;
              if (blanks.includes(cell)) {
                return (
                  <div key={c} className="cell input-cell">
                    <input
                      type="text"
                      value={answers[cell]}
                      onChange={(e) => handleInputChange(cell, e.target.value)}
                      className={getInputClass(cell)}
                    />
                  </div>
                );
              }
              return <div key={c} className="cell fixed-cell"><span>{cell}</span></div>;
            })}
          </div>
        ))}
      </div>

      <div className="spaces"></div>
      {score && <ScoreCardEnhanced score={score} />}

      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn swal-continue">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>
    </div>
  );
};

export default Page32_Exercise;
