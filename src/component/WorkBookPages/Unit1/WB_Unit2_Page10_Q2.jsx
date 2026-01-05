import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import "./WB_Unit2_Page10_Q2.css";

const Page5_Q3_UnUneDes = () => {
  // ===== STATE =====
  const [answers, setAnswers] = useState({});
  const [answerStatus, setAnswerStatus] = useState({});
  const [score, setScore] = useState(null);

  // ===== CORRECT ANSWERS =====
  const correctAnswers = {
   
    a2: "une",
    b1: "un",
    c1: "une",
    c2: "des",
    c3: "des",
    c4: "un",
    c5: "une",
    c6: "des",
    c7: "un",
    c8: "un",
    c9: "des",
    d1: "des",
    d2: "des",
    d3: "des",
    d4: "des",
    d5: "un",
    d6: "une",
    d7: "un",
    e1: "un",
    f1: "des",
    f2: "des",
    f3: "des",
    f4: "des",
    f5: "une",
    f6: "un",
    f7: "un",
    f8: "des",
    f9: "des"
  };

  // ===== QUESTIONS =====
 const questions = [
  "a - Tu es prêt pour l’école ?",
  "- Non, j’ai besoin d’  un stylo et d’ (a2) ______________ gomme.",
  "b - Combien de crayons as-tu ?",
  "- J’ai (b1) ______________ crayon.",
  "c - Qu’est-ce qu’il y a dans ta trousse ?",
  "- Dans ma trousse, il y a (c1) ______________ gomme, (c2) ______________ crayons,",
  "(c3) ______________ surligneurs, (c4) ______________ feutre et (c5) ______________ règle. Et toi ?",
  "- J’ai (c6) ______________ stylos, (c7) ______________ compas, (c8) ______________ taille-crayon et",
  "(c9) ______________ crayons de couleur.",
  "d - Qu’est-ce qu’il y a dans ton sac à dos ?",
  "- J’ai (d1) ______________ livres, (d2) ______________ cahiers, (d3) ______________ stylos et",
  "(d4) ______________ crayons. Et toi ?",
  "- Moi, j’ai (d5) ______________ livre, (d6) ______________ trousse et (d7) ______________ cahier.",
  "e - Combien de tableaux blanc as-tu dans ta classe ?",
  "- Il y a (e1) ______________ tableau blanc dans ma classe.",
  "f - Qu’est-ce qu’il y a dans ta classe ?",
  "- Dans ma classe, il y a (f1) ______________ tables, (f2) ______________ fenêtres,",
  "(f3) ______________ chaises, (f4) ______________ livres, (f5) ______________ porte,",
  "(f6) ______________ tableau blanc, (f7) ______________ effaceur et (f8) ______________ feutres.",
  "- Y a-t-il (f9)______________ classeurs ?",
  "- Oui.",
];
  // ===== HANDLE CHANGE =====
  const handleChange = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setAnswerStatus(prev => ({ ...prev, [key]: "" }));
  };

  // ===== CHECK =====
  const checkAnswer = () => {
    let correctCount = 0;
    const newStatus = {};
    let incomplete = false;

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
      ValidationAlert.info(
        "Incomplete",
        "Please fill in all fields.",
        `${correctCount}/${total}`
      );
      setScore(null);
      return;
    }

    setScore({ correct: correctCount, total });

    if (correctCount === total) {
      ValidationAlert.success("Excellent!", "All answers are correct!", `${total}/${total}`);
    } else {
      ValidationAlert.error(
        "Try Again",
        `You got ${correctCount} out of ${total} correct.`,
        `${correctCount}/${total}`
      );
    }
  };

  // ===== SHOW ANSWERS =====
  const showAnswerFunc = () => {
    setAnswers({ ...correctAnswers });

    const status = {};
    Object.keys(correctAnswers).forEach(k => (status[k] = "correct"));
    setAnswerStatus(status);

    const total = Object.keys(correctAnswers).length;
    setScore({ correct: total, total });

    ValidationAlert.success("Answers shown", "Correct answers filled.", `${total}/${total}`);
  };

  // ===== RESET =====
  const resetExercise = () => {
    setAnswers({});
    setAnswerStatus({});
    setScore(null);
  };

  // ===== STYLE =====
  const getInputStyle = (key) => {
    if (answerStatus[key] === "correct") return { backgroundColor: "#d4f4dd" };
    if (answerStatus[key] === "wrong") return { backgroundColor: "#f8d7da" };
    return {};
  };

  // ===== RENDER LINE =====
  const renderLine = (text, idx) => {
  // نبحث عن كل نمط مثل (a1) ______________
  const parts = text.split(/(\([a-z]\d+\)\s*______________)/g);

  return (
    <div key={idx} className="input-group" style={{ marginBottom: "12px" }}>
      {parts.map((part, i) => {
        const match = part.match(/\(([a-z]\d+)\)/);
        if (match) {
          const key = match[1];
          return (
            <input
              key={i}
              type="text"
              value={answers[key] || ""}
              onChange={(e) => handleChange(key, e.target.value)}
              style={{
                width: "20%",
                borderBottom: "2px solid black",
                margin: "0 6px",
                ...getInputStyle(key)
              }}
            />
          );
        }
        return <span key={i}>{part}</span>;
      })}
    </div>
  );
};

  return (
    <div className="page-wrapper2 flex flex-col items-center gap-8 p-4">
     <header
className="header-title-page1 w-full text-left mb-4"
  style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span style={{backgroundColor:"#de4484"}} className="ex-A">2</span> <span style={{color:"black"}} className="number-of-q">2</span>

Complète avec « un », « une » ou « des ».

      </header>

      <div className="Q2WB" style={{ width: "100%",fontSize:"100%"}}>
        {questions.map((q, i) => renderLine(q, i))}
      </div>
<div className="spaces"></div>
      {score && <ScoreCardEnhanced score={score} />}

      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn swal-continue">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse ✓</button>
      </div>
    </div>
  );
};

export default Page5_Q3_UnUneDes;
