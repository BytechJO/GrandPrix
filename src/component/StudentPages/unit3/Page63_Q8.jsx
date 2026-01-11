import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page5_Q2_SAppeler = () => {
  // ================= STATE =================
  const [answers, setAnswers] = useState({
    a: "",
    c1: "",
    c2: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: "",
    i: ""
  });

  const [answerStatus, setAnswerStatus] = useState({});
  const [score, setScore] = useState(null);

  // ================= CORRECT ANSWERS =================
  const correctAnswers = {
    a: "dans",
    c1: "sur",
    c2: "dans",
    d: "dans",
    e: "sur",
    f: "sur",
    g: "sur",
    h: "sur",
    i: "sous"
  };

  // ================= QUESTIONS =================
  const questions = {
    a: "a- Les lits sont ____ la chambre.",
    b: "b- Où sont les chaussettes de Daniel ?",
    c: "Elles sont ____ l’étagère et ____ le tiroir.",
    d: "c- Les crayons de Ray sont ____ la tasse, mais les",
    e: "crayons de Daniel sont ____ l’étagère.",
    f: "d- Les livres de Ray sont ____ l’étagère, mais les livres",
    g: "de Daniel sont ____ la table de chevet.",
    h: "e- L’oreiller de Daniel est ____ son lit et son t-shirt est",
    i: "____ le lit."
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
        <span className="ex-A" style={{ backgroundColor: "#5e74b7" }}>D</span>
        <span className="number-of-q">8</span>
   Complète avec les prépositions qui conviennent.
      </header>

      {/* ================= QUESTIONS ================= */}
      <div className="page22Q1" style={{marginLeft:"13%"}}>
        <div className="inputs-column">
          {Object.entries(questions).map(([key, text], index) => {
            const blanks = text.match(/____/g)?.length || 0;
            const parts = text.split("____");

            return (
              <div className="input-group" key={key}>

                {/* 🔹 b بدون input */}
                {blanks === 0 && <span>{text}</span>}

                {/* 🔹 input واحد */}
                {blanks === 1 && (
                  <>
                    {parts[0]}
                    <input
                      type="text"
                      value={answers[key] || ""}
                      onChange={e => handleChange(key, e.target.value)}
                      style={{ width: "180px", margin: "0 5px", ...getInputStyle(key) }}
                    />
                    {parts[1]}
                  </>
                )}

                {/* 🔹 input اثنان (c) */}
                {blanks === 2 && (
                  <>
                    {parts[0]}
                    <input
                      type="text"
                      value={answers[`${key}1`] || ""}
                      onChange={e => handleChange(`${key}1`, e.target.value)}
                      style={{ width: "160px", margin: "0 5px", ...getInputStyle(`${key}1`) }}
                    />
                    {parts[1]}
                    <input
                      type="text"
                      value={answers[`${key}2`] || ""}
                      onChange={e => handleChange(`${key}2`, e.target.value)}
                      style={{ width: "160px", margin: "0 5px", ...getInputStyle(`${key}2`) }}
                    />
                    {parts[2]}
                  </>
                )}
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
