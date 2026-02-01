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
   
  });
  const [score, setScore] = useState(null);

  // ✅ حالة لون الإجابات
  const [answerStatus, setAnswerStatus] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
  
  });

  // === الإجابات النموذجية ===
  const correctAnswers = {
    a: "aiment",
    b: "pêche",
    c: "longeons",
    d: "fait",
    e: "aimez",
    f: "fais",
    g: "faisons",
    h: "font",
    i: "faites",
    j: "font",
   
  };

  // === النصوص الأصلية للأسئلة مع الفراغات ____
  const questions = {
    a: "Mes parents____(aimer) faire la cuisine ensemble.",
    b: "Mon père ____(pêcher) le dimanche.",
    c: "Nous____(loger) à l’hôtel.",
    d: "Ma grand-mère____(faire) de la randonneé une fois par mois.",
    e: "Est-ce que vous____(aimer) cette couleur ?",
    f: "Est-ce que tu____ (faire) du skateboard ?",
    g: "Nous____(faire) de l’équitation à la ferme",
    h: "Marie et Pierre____(faire) des photos de paysages.",
    i: "Vous____(faire) une promenade ?",
    j: "Elles____(faire) du ski.",
  
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

  const total = Object.keys(correctAnswers).length;

  Object.keys(correctAnswers).forEach(key => {
    const val = answers[key]?.trim();
    if (!val) incomplete = true;

    const isCorrect = val?.toLowerCase() === correctAnswers[key].toLowerCase();
    newStatus[key] = isCorrect ? "correct" : "wrong";

    if (isCorrect) correctCount++;
  });

  setAnswerStatus(newStatus);

  if (incomplete) {
    ValidationAlert.info(
      "Incomplete",
      "Please fill in all fields.",
      `${correctCount}/${total}`
    );
    setScore(null); // منع ظهور ScoreCard
    return;
  }

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
                style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
            >
                <span style={{ backgroundColor: "#cf7230", color: "#white" }} className="ex-A">7</span>
                <span style={{ color: "black" }} className="number-of-q">4</span>
             Complète les phrases.
            </header>

      {/* ✅ QUESTIONS */}
   <div
  className="page5Q5"
  style={{ display: "flex", marginLeft: "13%", gap: "50px" }}
>
  {/* العمود الأول: 4 أسطر */}
  <div
    className="inputs-column"
    style={{ display: "flex", flexDirection: "column", gap: "15px" }}
  >
    {Object.keys(questions)
      .slice(0, 5)
      .map((key, index) => (
        <div className="input-group" key={key}>
          <label>
<strong style={{ fontSize: "20px" }}>
  {key}
</strong>
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

  {/* العمود الثاني: 3 أسطر */}
  <div
    className="inputs-column"
    style={{ display: "flex", flexDirection: "column", gap: "15px" }}
  >
    {Object.keys(questions)
      .slice(5, 10)
      .map((key, index) => (
        <div className="input-group" key={key}>
          <label>
<strong style={{ fontSize: "20px" }}>
  {key}
</strong>
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
