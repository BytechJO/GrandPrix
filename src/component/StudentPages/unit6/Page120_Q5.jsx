import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page5_Q2_SAppeler = () => {
  // ================= STATE =================
  const [answers, setAnswers] = useState({
    a1: "",
    a2: "",
    b: "",
    c: "",
    d1: "",
    d2: "",
    d3: "",
  
  });

  const [answerStatus, setAnswerStatus] = useState({});
  const [score, setScore] = useState(null);

  // ================= CORRECT ANSWERS =================
  const correctAnswers = {
    a1: "un gâteau",
    b1: "restaurant",
    b2: "8",
    c1: "7",
    d1: "le bus numéro 3",
    d2: "le métro",

  };

  // ================= QUESTIONS =================
  const questions = {
    a: { label: "a-", text: "Éric et Jean veulent acheter ____pour leur ami Nicolas. La fête se passera" },
    b: { label: "b-", text: "au____ Ils doivent être là-bas à____heures. Alors," },
    c: { label: "c-", text: "ils vont se retrouver à ____ heures. Pour y aller Éric et Jean doivent prendre" },
    d: { label: "d-", text: "____ puis____ " }
  };

  // ================= HANDLERS =================
  const handleChange = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setAnswerStatus(prev => ({ ...prev, [key]: "" }));
  };

  const checkAnswer = () => {
    let correctCount = 0;
    let incomplete = false;
    const newStatus = {};

    Object.keys(correctAnswers).forEach(key => {
      const val = answers[key]?.trim();
      if (!val) incomplete = true;

      const isCorrect = val === correctAnswers[key];
      newStatus[key] = isCorrect ? "correct" : "wrong";
      if (isCorrect) correctCount++;
    });

    setAnswerStatus(newStatus);

    const total = Object.keys(correctAnswers).length;

    if (incomplete) {
      ValidationAlert.info("Incomplete", "Please fill all fields", `${correctCount}/${total}`);
      setScore(null);
      return;
    }

    setScore({ correct: correctCount, total });

    if (correctCount === total) {
      ValidationAlert.success("Excellent!", "All correct!", `${total}/${total}`);
    } else {
      ValidationAlert.error("Result", `Correct ${correctCount} of ${total}`, `${correctCount}/${total}`);
    }
  };

  const showAnswerFunc = () => {
    setAnswers(correctAnswers);
    const status = {};
    Object.keys(correctAnswers).forEach(k => status[k] = "correct");
    setAnswerStatus(status);
    setScore({ correct: Object.keys(correctAnswers).length, total: Object.keys(correctAnswers).length });
    ValidationAlert.success(
      "Answers shown",
      "All correct answers have been filled in.",
      `${Object.keys(correctAnswers).length}/${Object.keys(correctAnswers).length}`
    );
  };

  const resetExercise = () => {
    const empty = {};
    Object.keys(correctAnswers).forEach(k => empty[k] = "");
    setAnswers(empty);
    setAnswerStatus({});
    setScore(null);
  };

  const getInputStyle = (key) => {
    if (answerStatus[key] === "correct") return { backgroundColor: "#d4f4dd" };
    if (answerStatus[key] === "wrong") return { backgroundColor: "#f8d7da" };
    return {};
  };

  // ================= RENDER =================
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
        <span className="ex-A" style={{ backgroundColor: "#d7a965" }}>B</span>
        <span className="number-of-q">5</span>{" "}
Écoute le reste de la conversation et complète les phrases.   </header>

      {/* ================= QUESTIONS ================= */}
      <div className="page22Q1" style={{marginLeft:"0%"}}>
        <div className="inputs-column">
          {Object.entries(questions).map(([key, q]) => {
            const blanks = q.text.match(/____/g)?.length || 0;
            const parts = q.text.split("____");

            return (
              <div className="input-group" key={key}>

                {parts.map((part, index) => (
                  <React.Fragment key={index}>
                    {part}
                    {index < blanks && (
                      <input
                        type="text"
                        value={answers[`${key}${index + 1}`] || ""}
                        onChange={e => handleChange(`${key}${index + 1}`, e.target.value)}
                        style={{ width: "160px", margin: "0 5px", ...getInputStyle(`${key}${index + 1}`) }}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            );
          })}
        </div>
      </div>

      {/* ================= SCORE ================= */}
      {score && <ScoreCardEnhanced score={score} />}

      {/* ================= ACTION BUTTONS ================= */}
      <div className="action-buttons-container flex gap-4">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>

    </div>
  );
};

export default Page5_Q2_SAppeler;
