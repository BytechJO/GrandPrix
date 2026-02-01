import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard"; // عدّل المسار حسب مكانه

const Page5_Q1_CleanAudio = () => {
  // === STATE ===
  const [answers, setAnswers] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: ""
  });
  const [score, setScore] = useState(null); // لتخزين عدد الإجابات الصحيحة وإجمالي الأسئلة

  // ✅ حالة لون الإجابات
  const [answerStatus, setAnswerStatus] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: ""
  });

  // === الإجابات النموذجية ===
  const correctAnswers = {
    a: "Parfois, nous sommes en retard.",
    b: "Est-ce que vous vous brossez les dents ?",
    c: "À quelle heure tu te couches ?",
    d: "Marie et toi prenez le petit-déjeuner ensemble.",
    e: "Ses parents font du sport trois fois par semaine.",
    f: "Il va sur son réseau social.",
    g: "Je fais mes devoirs tout de suite.",
    h: "Je m’habille vite, car je suis en retard.",
    i: "Je m’habille vite, car je suis en retard.",
    
   
  };

  // === النصوص الأصلية للأسئلة ===
  const questions = {
    a: "retard / nous / parfois / en / sommes.",
    b: "dents / est-ce / brossez / les / que / vous / vous / ?",
    c: "tu / à / heures / couches / quelle / te / ?",
    d: "petit-déjeuner / et / le / ensemble / toi / prenez / Marie.",
    e: "par / font / trois / ses / semaine / parents / sport / fois / du.",
    f: "son / il / réseau / va / sur / social.",
    g: "devoirs / de / je / tout / mes / suite / fais.",
    h: "je / vite / retard / car / m’habille / suis / je / en.",
    i: "nous / à / nous / 10 h 30 / couchons.",
    
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
   {/* Header */}
    <header
                className="header-title-page1 w-full text-left mb-4"
                style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
            >
                <span style={{ backgroundColor: "#cf7230", color: "#white" }} className="ex-A">7</span>
                <span style={{ color: "black" }} className="number-of-q">8</span>
            Mets les mots dans le bon ordre.
            </header>

      {/* ✅ QUESTIONS */}
      <div className="page5Q3" style={{marginLeft:"43%"}}>
        {Object.keys(questions).map((key, index) => (
          <div className="input-group" key={key}>
            <label>
              <strong style={{fontSize:"20px"}}>{String.fromCharCode(97 + index)} </strong>{questions[key]}
            </label>
            <input
              type="text"
              value={answers[key]}
              onChange={(e) => handleChange(key, e.target.value)}
              style={getInputStyle(key)}
            />
          </div>
        ))}
      </div>
   {score && <ScoreCardEnhanced score={score} />}
   <div className="spaces"></div>
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
