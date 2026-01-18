import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import img1 from "../../../assets/unite4pages/SVG/88Q3.png";
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
    g: ""
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
    g: ""
  });

  // === الإجابات النموذجية ===
  const correctAnswers = {
    a: "au Hôpital ",
    b: "au Cinéma",
    c: "au parc",
    d: "au magasin",
    e: "à la banque",
    f: "au restaurant",
    g: "À l'école"
  };

  // === النصوص الأصلية للأسئلة مع الفراغات ____
  const questions = {
    a: "Lundi, je dois aller ____ ",
    b: "Mardi, je dois aller ____ ",
    c: "Mercredi, je vais ____ ",
    d: "Jeudi, je vais ____ ",
    e: "Vendredi, je vais ____ ",
    f: "Samedi, je dois aller ____ ",
    g: "Dimanche, je vais ____ "
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
    if (answerStatus[key] === "wrong") return { backgroundColor: "#f8d7da" };   // أحمر فاتح
    return {};
  };

  return (
    <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
 <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
      >
        <span style={{ backgroundColor: "#d47176", color: "#white" }} className="ex-A">Grammaire</span>
        <span style={{ color: "black" }} className="number-of-q">3</span>
     Complète les phrases avec « au », « à la », « à l’ » ou « aux ».
      </header>
      {/* ✅ QUESTIONS */}
   <div className="page5Q5" style={{marginLeft:"13%"}}>
        <div className="inputs-column500" style={{fontSize:"20px"}}>
          {Object.keys(questions).map((key, index) => (
            <div className="input-group " style={{}} key={key}>
              <label>
                <strong style={{fontSize:"20px"}}>{String.fromCharCode(97 + index)} </strong>
                {questions[key].split("____")[0]}
                <input
                  type="text"
                  value={answers[key]}
                  onChange={(e) => handleChange(key, e.target.value)}
                  style={{ width: "50%", margin: "0 5px", borderBottom:"2px solid black", ...getInputStyle(key) }}
                />
                {questions[key].split("____")[1]}
              </label>
            </div>
          ))}
        </div>
   {score && <ScoreCardEnhanced score={score} />}

        {/* عمود الصورة على اليمين */}
        <div className="imgQ5wb">
          <img src={img1} alt="Illustration" style={{marginTop:"4%"}} st/>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn swal-continue">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>
    </div>
  );
};

export default Page5_Q2_SAppeler;
