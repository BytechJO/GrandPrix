import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import img1 from "../../../assets/unite4pages/SVG/P83-2.svg"
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
    a1: "poste de police.",
    a2: "supermarché",
    b1: "parc",
    b2: "restaurant",

  };

  // ================= QUESTIONS =================
 const questions = {
  a: { label: "a-", text: "a- Ella est au____ Elle veut aller au ____." },
  b: { label: "b-", text: "Marc est au____et il veut aller au____" },
  c: { label: "c-", text: "b-Avec un(e) ami(e), pratiquez différents itinéraires." },
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
        style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
      >
        <span style={{ backgroundColor: "#d47176", color: "#white" }} className="ex-A">D</span>
        <span style={{ color: "black" }} className="number-of-q">2</span>
   Écoute et écris.
      </header>

      {/* ================= QUESTIONS ================= */}
      <div className="page22Q1" style={{marginLeft:"0%"}}>
        <div className="inputs-column">
        {Object.entries(questions).map(([key, q]) => {
  const blanks = q.text.match(/____/g)?.length || 0;
  const parts = q.text.split("____");

  return (
    <div className="input-group" key={key}>

      {/* بدون input */}
      {blanks === 0 && <span>{q.text}</span>}

      {/* input واحد */}
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

      {/* inputان */}
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
<img src={img1} alt="" />
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
