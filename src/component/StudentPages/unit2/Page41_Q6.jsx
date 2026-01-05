import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import img1 from "../../../assets/unite2pages/svg/U2P41EXE5.svg";
import ScoreCardEnhanced from "../../Popup/ScoreCard"; // عدّل المسار حسب مكانه
import "./Page35_Q2.css"
const Page5_Q1_CleanAudio = () => {
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
    i: ""

  });
  const [score, setScore] = useState(null); // لتخزين عدد الإجابات الصحيحة وإجمالي الأسئلة

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
    i: ""

  });

  // === الإجابات النموذجية ===
  const correctAnswers = {
    a: "Elle s’appelle Ella.",
    b: "Ella parle de deux nouveaux clubs.",
    c: "Le sport est important parce qu’il apprend lesstratégies et le travail d’équipe, permet être enforme et en bonne santé.",
    d: "Il propose les cours de rugby, de basketball, defootball, de natation, de gymnastique et de course àpied.",
    e: "Ils sont exigeants et stricts. Ils ont beaucoupd’expérience",
    f: "Les gens qui sont créatifs, imaginatifs avec des idéesoriginales.",
    g: "Il propose les cours de la peinture, de sculpture,d’artisanat, de photographie, de design",
    h: "Tu peux apprendre à t'exprimer dans le cours dephotographie.",
    i: "Tu peux apprendre les couleurs et les techniquesanciennes dans le cours de sculpture.",
 
  };

  // === النصوص الأصلية للأسئلة ===
const questions = {
  a: "Comment s’appelle la fille qui parle ?",
  b: "De quoi parle-t-elle ?",
  c: "Pourquoi le sport est-il important ? Relèveses idées.",
  d: "Quels cours le club sportif propose-t-il ?",
  e:"Est-ce que les professeurs sont exigeants etrofessionnels ?",
  f:"Qui peut s'inscrire au club des arts ?",
  g:"Quels cours le club des arts propose-t-il ?",
  h:"Qu’est-ce que tu peux apprendre dans leours de photographie ?",
  i:"Qu’est-ce que tu peux apprendre dans lecours de sculpture ?",
};


  // ✅ HANDLE CHANGE
  const handleChange = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    // إعادة ضبط لون الخلفية عند الكتابة
    setAnswerStatus(prev => ({ ...prev, [key]: "" }));
  };

  // ✅ CHECK ANSWER
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
    ValidationAlert.error(
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
  setAnswers(correctAnswers);

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
    if (answerStatus[key] === "wrong") return { backgroundColor: "#f8d7da" };   // أحمر فاتح
    return {};
  };

  return (
       <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
  <header
className="header-title-page1 w-full text-left mb-4"
  style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span style={{backgroundColor:"#73C8D2"}} className="ex-A">D</span> <span style={{color:"black"}} className="number-of-q">9</span>Réponds aux questions
      </header>
<div style={{width:"60%"}} > <img style={{width:"100%", height:"50%", marginTop:"0%"}} src={img1} alt="" /></div>
      {/* ✅ QUESTIONS */}
     <div className="page5Q3">
  {Object.keys(questions).map((key, index) => (
  <div className="input-group" key={key}>
    <label style={{ whiteSpace: "pre-line" }}>
      <strong style={{ fontSize: "25px" }}>
        {String.fromCharCode(97 + index)}{" "}
      </strong>
      {questions[key]}
    </label>

      <input
        type="text"
        value={answers[key]}
        onChange={(e) => handleChange(key, e.target.value)}
style={{ ...getInputStyle(key), width: "50%" }}
        
      />
    </div>
  ))}
</div>
<div className="spaces"></div>
   {score && <ScoreCardEnhanced score={score} />}
      {/* Action Buttons */}
      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn swal-continue">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>
    </div>
  );
};

export default Page5_Q1_CleanAudio;
