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
    d: "",
    e: "",
    f: "",
    g: "",
    h: ""
  });

  const [answerStatus, setAnswerStatus] = useState({});
  const [score, setScore] = useState(null);

  // ================= CORRECT ANSWERS =================
  const correctAnswers = {
    a1: "assez",
    a2: "plus de",
    b: "trop de",
    c: "beaucoup de",
    d: "beaucoup de",
    e: "peu de",
    f: "beaucoup de",
    g: "beaucoup de",
    h: "peu de",
   
  };

  // ================= QUESTIONS =================
 const questions = {
  a: { label: "a-", text: "Le café ? Ce n’est pas ____sucré. Il faut y mettre____sucre." },
  b: { label: "b-", text: "La soupe est très salée. Tu as mis ____ sel." },
  c: { label: "c-", text: "Il ne mange pas____ fromage." },
  d: { label: "d-", text: "Ton père a acheté ____ gâteaux." },
  e: { label: "e-", text: "Marie mange ____ légumes. Elle n’aime pas ça." },
  f: { label: "f-", text: "Tu manges ____ chips. Ce n’est pas sain." },
  g: { label: "g-", text: "Je mange ____ pâtes. J’adore ça." },
  h: { label: "h-", text: "Nous mangeons____ poisson, car nous n’habitons pas près de la mer." },

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
        <span className="ex-A" style={{ backgroundColor: "#f38180" }}>5</span>
        <span className="number-of-q">10</span>{" "}
       Complète les phrases avec un adverbe de quantité.
      </header>

      {/* ================= QUESTIONS ================= */}
      <div className="page22Q1" style={{marginLeft:"0%"}}>
        <div className="inputs-column">
        {Object.entries(questions).map(([key, q]) => {
  const blanks = q.text.match(/____/g)?.length || 0;
  const parts = q.text.split("____");

  return (
    <div className="input-group" key={key}>
      <strong style={{ marginRight: "6px" }}>{q.label}</strong>

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
