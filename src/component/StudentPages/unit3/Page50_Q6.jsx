import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";

import ScoreCardEnhanced from "../../Popup/ScoreCard"; // عدّل المسار حسب مكانه

const Page5_Q2_SAppeler = () => {
  // === STATE ===
  const [answers, setAnswers] = useState({
     a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: "",
    i: "",
    j: "",
  });
  const [score, setScore] = useState(null);

  // ✅ حالة لون الإجابات
  const [answerStatus, setAnswerStatus] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: "",
    i: "",
    j: "",

  });

  // === الإجابات النموذجية ===
  const correctAnswers = {
    a: "famille",
    b: "grands-parents",
    c: "grand-père",
    d: "n’est pas",
    e: "pâtisserie",
    f: "Jerard et Vivien",
    g: "soeurs",
    h: "jumelles",
    i: "la natation",
    j: "aime la sculpture",
  };

  // === النصوص الأصلية للأسئلة مع الفراغات ____
  const questions = {
    a: "Ray présente sa (1) ____ Dans sa famille, il y a ses",
    b: "(2) ____ ses parents et",
    c: "ses soeurs. Son(3) ____ s’appelle Pascal et sa grand-mère s’appelle",
    d: "Vivien, mais elle (4) ____  à lamaison. Elle est allée acheter quelque chose",
    e: "à la (5) ____ Les parents",
    f: "de Ray s’appellent(6) ____ Il a aussi deux",
    g: "(7)____Elles s’appellent Belle est Bette. Elles sont",
    h: "(8) ____ mais elles aimentdes choses différentes. Belle va au club sportif,",
    i: "elle aime(9) ____ Il a aussi deux",
    j: "Bette vaau club d’art, elle (10) ____ ",
  };

  // ✅ HANDLE CHANGE
  const handleChange = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    // إعادة ضبط اللون عند الكتابة
    setAnswerStatus(prev => ({ ...prev, [key]: "" }));
  };

  // ✅ CHECK ANSWER
const checkAnswer = () => {
  const newStatus = {};
  let correctCount = 0;
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
    setScore(null); // منع ظهور ScoreCard
  } else {
    setScore({ correct: correctCount, total });

    if (correctCount === total) {
      ValidationAlert.success(
        "Excellent!",
        "You got all answers right!",
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
        "Almost there!",
        `You got ${correctCount} out of ${total} correct.`,
        `${correctCount}/${total}`
      );
    }
  }
};

// ✅ SHOW ANSWER
const showAnswerFunc = () => {
  setAnswers({ ...correctAnswers });

  const newStatus = {};
  Object.keys(correctAnswers).forEach(key => {
    newStatus[key] = "correct";
  });
  setAnswerStatus(newStatus);

  const total = Object.keys(correctAnswers).length;
  setScore({ correct: total, total });

  ValidationAlert.success(
    "Answers shown",
    "All correct answers have been filled in.",
    `${total}/${total}`
  );
};

// ✅ RESET
const resetExercise = () => {
  const emptyAnswers = {};
  const emptyStatus = {};
  Object.keys(correctAnswers).forEach(key => {
    emptyAnswers[key] = "";
    emptyStatus[key] = "";
  });

  setAnswers(emptyAnswers);
  setAnswerStatus(emptyStatus);
  setScore(null); // إعادة تعيين ScoreCard
};


  // ✅ دالة لتحديد لون الخلفية حسب الحالة
  const getInputStyle = (key) => {
    if (answerStatus[key] === "correct") return { backgroundColor: "#d4f4dd" }; // أخضر فاتح
    if (answerStatus[key] === "wrong") return { backgroundColor: "#f8d7da" }; // أحمر فاتح
    return {};
  };

  return (
    <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
      <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span  style={{ backgroundColor: "#5e74b7" }} className="ex-A">A</span> <span style={{color:"black"}} className="number-of-q">6</span> Écoute la présentation de la
famille de Ray. Complète le texte.</header>

      {/* ✅ QUESTIONS */}
      <div className="page5Q5" style={{marginLeft:"13%"}}>
        <div className="inputs-column">
          {Object.keys(questions).map((key, index) => (
            <div className="input-group" key={key}>
              <label>
                {questions[key].split("____")[0]}
                <input
                  type="text"
                  value={answers[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  style={{ width: "130px", margin: "0 5px", ...getInputStyle(key) }}
                />
                {questions[key].split("____")[1]}
              </label>
            </div>
          ))}
        </div>
      </div>
      {score && <ScoreCardEnhanced score={score} />}
<div className="spaces"></div>
      {/* Action Buttons */}
      <div className="action-buttons-container flex gap-4">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>
    </div>
  );
};

export default Page5_Q2_SAppeler;
