import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import "./WB_Unit1_Page6_Q5.css";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page5_Q2_SAppeler = () => {
  // === STATE ===
  const [answers, setAnswers] = useState({
    a: [""],
    b: [""],
    c: [""],
    d: ["", ""], // ✅ فراغان
    e: [""],
    f: [""],
  });

  const [score, setScore] = useState(null);

  const [answerStatus, setAnswerStatus] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
  });

  // === الإجابات النموذجية (مصفوفات)
  const correctAnswers = {
    a: ["pas"],
    b: ["n’"],
    c: ["n’"],
    d: ["pas",], // ✅ جوابان
    e: ["n’","pas"],
    f: ["ne","pas"],
  };

  // === الأسئلة
  const questions = {
    a: "Je ne suis____ Madame Rose.",
    b: "Mon frère ____ a pas quinze ans.",
    c: "Marie ____ est pas russe.",
    d: "Ce n’est ____ un livre, c’est un cahier.",
    e: "Je ____ aime ____ l’espagnol.",
    f: "La leçon de l’art ____ commence ____ à 3 h 15.",
  };

  // ✅ HANDLE CHANGE
  const handleChange = (key, index, value) => {
    const updated = [...answers[key]];
    updated[index] = value;
    setAnswers(prev => ({ ...prev, [key]: updated }));
    setAnswerStatus(prev => ({ ...prev, [key]: "" }));
  };

  // ✅ CHECK ANSWERS
  const checkAnswer = () => {
    const newStatus = {};
    let correctCount = 0;
    let incomplete = false;

    Object.keys(correctAnswers).forEach(key => {
      const userAnswers = answers[key];
      const correct = correctAnswers[key];

      const isEmpty = userAnswers.some(v => !v.trim());
      if (isEmpty) incomplete = true;

      const isCorrect =
        userAnswers.length === correct.length &&
        userAnswers.every((v, i) => v.trim() === correct[i]);

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
      ValidationAlert.success(
        "Excellent!",
        "You got all answers right!",
        `${correctCount}/${total}`
      );
    } else {
      ValidationAlert.error(
        "Try Again!",
        `You got ${correctCount} out of ${total} correct.`,
        `${correctCount}/${total}`
      );
    }
  };

  // ✅ SHOW ANSWERS
  const showAnswerFunc = () => {
    setAnswers({ ...correctAnswers });

    const newStatus = {};
    Object.keys(correctAnswers).forEach(key => {
      newStatus[key] = "correct";
    });

    setAnswerStatus(newStatus);
    setScore({ correct: 6, total: 6 });

    ValidationAlert.success(
      "Answers shown",
      "All correct answers have been filled in.",
      "6/6"
    );
  };

  // ✅ RESET
  const resetExercise = () => {
    const emptyAnswers = {};
    const emptyStatus = {};
    Object.keys(correctAnswers).forEach(key => {
      emptyAnswers[key] = correctAnswers[key].map(() => "");
      emptyStatus[key] = "";
    });

    setAnswers(emptyAnswers);
    setAnswerStatus(emptyStatus);
    setScore(null);
  };

  const getInputStyle = (key) => {
    if (answerStatus[key] === "correct") return { backgroundColor: "#d4f4dd" };
    if (answerStatus[key] === "wrong") return { backgroundColor: "#f8d7da" };
    return {};
  };

  return (
    <div className="page-wrapper2 flex flex-col items-center gap-8 p-4">
         <header
className="header-title-page1 w-full text-left mb-4"
  style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span style={{backgroundColor:"#de4484"}} className="ex-A">2</span> <span style={{color:"black"}} className="number-of-q">13</span>

Complète les phrases avec « ne … pas ».
      </header>

      <div className="page5Q5" style={{ marginLeft: "13%" }}>
        <div className="inputs-column">
          {Object.keys(questions).map((key, index) => {
            const parts = questions[key].split("____");

            return (
              <div className="input-group" key={key}>
                <label>
                  <strong>{String.fromCharCode(97 + index)} </strong>

                  {parts.map((part, i) => (
                    <React.Fragment key={i}>
                      {part}
                      {i < parts.length - 1 && (
                        <input
                          type="text"
                          value={answers[key][i]}
                          onChange={(e) =>
                            handleChange(key, i, e.target.value)
                          }
                          style={{
                            width: "110px",
                            margin: "0 5px",
                            ...getInputStyle(key),
                          }}
                        />
                      )}
                    </React.Fragment>
                  ))}
                </label>
              </div>
            );
          })}
        </div>
      </div>

      {score && <ScoreCardEnhanced score={score} />}

      <div className="action-buttons-container flex gap-4">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>
    </div>
  );
};

export default Page5_Q2_SAppeler;
