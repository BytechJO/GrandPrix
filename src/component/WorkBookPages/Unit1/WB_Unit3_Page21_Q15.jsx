import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

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
    h: ""
  });
  const [score, setScore] = useState(null);
  
  const [answerStatus, setAnswerStatus] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: ""
  });

  // === الإجابات النموذجية ===
  const correctAnswers = {
    a: "Bien sûr, j’ai des photos récentes de mes enfants",
    b: "Oui, il y a un bon restaurant dans le quartier",
    c: "Oui, j’aime les films français",
    d: "Oui, j’ai un petit frère",
    e: "Oui, j’habite dans un appartement moderne",
    f: "Oui, c’est mon vieux pull",
    g: "Non, mon ami n’a pas de petite soeur",
    h: "Oui, j’aime la langue française"
  };

  // === النصوص الأصلية للأسئلة ===
  const questions = {
    a: "Est-ce que vous avez des photos de vos enfants ? (récentes)",
    b: "Est-ce qu'il y a un restaurant dans le quartier ? (bon)",
    c: "Est-ce que tu aimes les films ? (français)",
    d: "Est-ce que tu as un frère ? (petit)",
    e: "Est-ce que tu habites dans un appartement ? (moderne)",
    f: "Est-ce que c'est ton pull ? (vieux)",
    g: "Est-ce que ton ami a une sœur ? (petite)",
    h: "Est-ce que tu aimes les langues ? (française)"
  };

  // === النصوص التي تظهر قبل خانة الإجابة ===
  const answerPrefixes = {
    a: "Bien sûr, j'ai",
    b: "Oui, il y a",
    c: "Oui, j'aime",
    d: "Oui, j'ai",
    e: "Oui, j'habite",
    f: "Oui, c'est",
    g: "Non, mon ami",
    h: "Oui, j'aime"
  };

  // ✅ HANDLE CHANGE
  const handleChange = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
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

      // المقارنة مع تجاهل حالة الأحرف والمسافات الزائدة
      const normalizedVal = val.toLowerCase().replace(/\s+/g, ' ').trim();
      const normalizedCorrect = correctAnswers[key].toLowerCase().replace(/\s+/g, ' ').trim();
      
      const isCorrect = normalizedVal === normalizedCorrect;
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
      setScore(null);
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
    setScore(null);
  };

  // ✅ دالة لتحديد لون الخلفية حسب الحالة
  const getInputStyle = (key) => {
    if (answerStatus[key] === "correct") return { backgroundColor: "#d4f4dd" };
    if (answerStatus[key] === "wrong") return { backgroundColor: "#f8d7da" };
    return {};
  };

  return (
    <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
  {/* Header */}
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
        <span className="ex-A" style={{ backgroundColor: "#5e74b7" }}>3</span>
        <span className="number-of-q">15</span>
      Complète les réponses avec le mot en gras et l’adjectif proposé.
      </header>

      {/* ✅ QUESTIONS */}
      <div className="page5Q3" style={{ marginLeft: "43%" }}>
        {Object.keys(questions).map((key, index) => (
          <div className="input-group" key={key} style={{ marginBottom: "20px" }}>
            <label>
              <strong style={{ fontSize: "20px" }}>
                {String.fromCharCode(97 + index)}
              </strong>
              {" - " + questions[key]}
            </label>
            <div style={{ display: "flex", alignItems: "center", marginTop: "5px" }}>
              <span style={{ marginRight: "10px", fontSize: "18px" }}>–</span>
              <span style={{ marginRight: "10px", fontSize: "18px", minWidth: "120px" }}>
                {answerPrefixes[key]}
              </span>
              <input
                type="text"
                value={answers[key]}
                onChange={(e) => handleChange(key, e.target.value)}
                style={{ 
                  ...getInputStyle(key),
                  width: "30%",
                  padding: "8px 12px",
                  fontSize: "16px",
                  borderBottom: "2px solid black",
                 
                }}
              />
            </div>
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