import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import img1 from "../../../assets/unite2pages/svg/P115Q3.svg";
import ScoreCardEnhanced from "../../Popup/ScoreCard"; // عدّل المسار حسب مكانه
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
    a: "Il y a du vent à Namur",
    b: "Il pleut à Arlono",
    c: "Il neige à Liège",
    d: "Il y a du soleil à Hasselt",
    e: "Il fait mauvais à Leuven",
    f: "Il fait mauvais à Wavre",
    g: "Il fait chaud à Brussels",
    h: "Il pleut à Antwerp",
    i: "Il y a du vent à Gent",
    j: "Il y a du soleil à Bruges",

 
  };

  // === النصوص الأصلية للأسئلة ===
const questions = {
  a: "Quel temps fait-il à Namur ?",
  b: "Quel temps fait-il à Arlono ?",
  c: "Quel temps fait-il à Liège ?.",
  d: "Quel temps fait-il à Hasselt ?",
  e:"Quel temps fait-il à Leuven ?",
  f:"Quel temps fait-il à Wavre ?",
  g:"Quel temps fait-il à Brussels ?",
  h:"Quel temps fait-il à Antwerp ?",
  i:"Quel temps fait-il à Gent ?",
  j:"Quel temps fait-il à Bruges ?",

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
        style={{
          marginLeft: "42%",
          color: "black",
          marginTop: "5%",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        <span className="ex-A" style={{ backgroundColor: "#d7a965" }}>A</span>
        <span className="number-of-q">3</span>{" "}
Dis les différentes températures   </header>
<div style={{width:"60%"}} > <img style={{width:"20%", height:"10%", marginTop:"0%"}} src={img1} alt="" /></div>
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
