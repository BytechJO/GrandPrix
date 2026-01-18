import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import img1 from "../../../assets/unite4pages/SVG/73Q6.png";
import ScoreCardEnhanced from "../../Popup/ScoreCard"; // عدّل المسار حسب مكانه
const Page5_Q1_CleanAudio = () => {
  // === STATE ===
  const [answers, setAnswers] = useState({
  a: ""

  

  });
  const [score, setScore] = useState(null); // لتخزين عدد الإجابات الصحيحة وإجمالي الأسئلة

  // ✅ حالة لون الإجابات
  const [answerStatus, setAnswerStatus] = useState({
    a: ""
  

  });

  // === الإجابات النموذجية ===
  const correctAnswers = {
    a: "La ligne bleue du métro passe par la station La Rose.",

   
 
  };

  // === النصوص الأصلية للأسئلة ===
 const questions = {
    a: "La Rose.",
  
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
        style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
      >
        <span style={{ backgroundColor: "#d47176", color: "#white" }} className="ex-A">C</span>
        <span style={{ color: "black" }} className="number-of-q">4</span>
     Écoute et réponds à la question.
      </header>

<div
        className="clip"
        style={{
          background: "#3fadb7c6",
          color: "white",
          fontSize: "15px",
          padding: "10px 100px",
          marginRight: "10%",
          clipPath: "polygon(5% 0%, 98% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <p style={{fontSize:"20px"}}>
          
       Henri est à Briançon pour faire du ski. Il doit retrouver son ami dans le
centre commercial.
        </p>
      </div>

      {/* ✅ QUESTIONS */}
     <div className="page5Q3" style={{marginLeft:"40%"}}>
  {Object.keys(questions).map((key, index) => (
  <div className="input-group" key={key}>
   

      <input
        type="text"
        value={answers[key]}
        onChange={(e) => handleChange(key, e.target.value)}
style={{ ...getInputStyle(key), width: "50%", borderBottom:"2px solid black"}}
        
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
