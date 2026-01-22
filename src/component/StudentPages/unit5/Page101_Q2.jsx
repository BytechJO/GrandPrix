import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page5_Q2_SAppeler = () => {
  // ================= STATE =================
  const [answers, setAnswers] = useState({
    a:"",
    b:"",
    c:"",
    d:"",
    e:"",
    f:"",
    g:"",
    h:"",
    i:"",
  
  });

  const [answerStatus, setAnswerStatus] = useState({});
  const [score, setScore] = useState(null);

  // ================= CORRECT ANSWERS =================
  const correctAnswers = {
    a:"1",
    b:"eau minérale",
    c:"oeufs",
    d:"de fromage",
    e:"saucisses",
    f:"poisson",
    g:"1",
    h:"d’huile,",
    i:"de lait",

  };

  // ================= QUESTIONS =================
  const questions = {
    a: { label: "a-", text: "Je dois acheter :" },
    b: { label: "b-", text: " ____ paquet de pâtes" },
    c: { label: "c-", text: "2 bouteilles d' ____ " },
    d: { label: "d-", text: "4____ " },
    e: { label: "d-", text: "1 morceau____ " },
    f: { label: "d-", text: "1 kilo de____ " },
    g: { label: "d-", text: "200 grammes de____ " },
    h: { label: "d-", text: "1 bouteille____ " },
    i: { label: "d-", text: "2 briques____ " },
    
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
    if (answerStatus[key] === "correct") return { backgroundColor: "" };
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
        <div className="inputs-column" style={{backgroundColor:"#a2dbe4", borderRadius:"20px", paddingLeft:"12%", paddingTop:"1%", paddingBottom:"1%"}}>
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
  value={answers[key] || ""}
  onChange={e => handleChange(key, e.target.value)}
  style={{ width: "160px", margin: "0 5px", ...getInputStyle(key) }}
/>

                    )}
                  </React.Fragment>
                ))}
              </div>
            );
          })}
        </div>
      </div>
<div className="spaces"></div>
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
