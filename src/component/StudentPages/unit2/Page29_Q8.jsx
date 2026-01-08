import React, { useState, useRef } from "react";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import ValidationAlert from "../../Popup/ValidationAlert";

const Page5_Q1_CleanAudio = () => {
  const audioRef = useRef(null);

  const [score, setScore] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);

  // ✅ QUESTIONS DATA (من Q7 كما هي)
 const sentences = [
    { id: "a", text: "Ce texte parle de deux garçons." },
    { id: "b", text: "Le premier garçon s’appelle Thomas." },
    { id: "c", text: "Thomas se prépare pour l’école." },
    { id: "d", text: "Il a un cartable bleu." },
    { id: "e", text: "Le deuxième garçon s’appelle Charles." },
    { id: "f", text: "Dans le sac de Thomas, il y a un stylo, un crayon ettrois livres." },
    { id: "g", text: "Carlos se prépare pour aller au cinéma." },
    { id: "h", text: "Les deux sacs à dos sont rouges." },
    { id: "i", text: "Dans le sac de Carlos, il y a un taille-crayon, une équerre et unepaire de ciseaux." },
    { id: "j", text: "Thomas et Carlos ont le même âge." },
  ];

  const correctAnswers = ["b", "c","d","i"];

  const [checked, setChecked] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const resetAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrent(0);
    }
  };

  // ✅ TOGGLE CHECK
  const toggleCheck = (id) => {
    if (showFeedback) return;
    setChecked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // ✅ CHECK ANSWER
  const checkAnswer = () => {
    let correctCount = 0;
    let incomplete = false;

    sentences.forEach((s) => {
      // ⛔ لم يتم اختيار إجابة
      if (checked[s.id] === undefined) {
        incomplete = true;
        return;
      }

      const isCorrect = correctAnswers.includes(s.id);

      if (
        (checked[s.id] && isCorrect) ||
        (!checked[s.id] && !isCorrect)
      ) {
        correctCount++;
      }
    });

    setShowFeedback(true);

    const total = sentences.length;

    // ✅ تحديث السكور (نفس الكارد)
    setScore({ correct: correctCount, total });

    if (incomplete) {
      ValidationAlert.info(
        "Incomplete",
        "Some answers are missing.",
        `${correctCount}/${total}`
      );
    } else if (correctCount === total) {
      ValidationAlert.success(
        "Good Job!",
        "You got all answers right!",
        `${correctCount}/${total}`
      );
    } else if (correctCount === 0) {
      ValidationAlert.info(
        "Try Again!",
        "All answers are incorrect.",
        `${correctCount}/${total}`
      );
    } else {
      ValidationAlert.error(
        "Almost There!",
        "Some answers are incorrect.",
        `${correctCount}/${total}`
      );
    }
  };

  // ✅ SHOW ANSWER
  const showCorrectAnswer = () => {
    const correctMap = {};

    sentences.forEach((s) => {
      correctMap[s.id] = correctAnswers.includes(s.id);
    });

    setChecked(correctMap);
    setShowFeedback(true);

    ValidationAlert.success(
      "Answers Shown",
      "Correct sentences are checked.",
      ""
    );
  };

  // ✅ RESET
  const resetExercise = () => {
    setChecked({});
    setShowFeedback(false);
    resetAudio();

    if (ValidationAlert && typeof ValidationAlert.close === "function") {
      ValidationAlert.close();
    }
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center gap-8 p-4">
      {/* العنوان */}
   <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span  style={{ backgroundColor: "#5e74b7" }} className="ex-A">A</span> <span style={{color:"black"}} className="number-of-q">4</span>
   Vrai (✔️ ) ou faux (✖️) ?  </header>



      {/* ✅ QUESTIONS LIST */}
      <div className="questions-list-container ml-20">
        <div className="questions-grid">
          {sentences.map((sentence) => {
            const correct = correctAnswers.includes(sentence.id);
            const userAnswer = checked[sentence.id]; // true = Vrai, false = Faux
            const isAnswered = userAnswer !== undefined;
            
            // تحديد حالة الجواب للتغذية الراجعة
            let feedbackState = "";
            if (showFeedback) {
              if (userAnswer === correct) {
                feedbackState = "correct";
              } else {
                feedbackState = "incorrect";
              }
            }

            return (
              <div
                key={sentence.id}
                className={`question-card ml-20 ${feedbackState} ${isAnswered ? "answered" : ""}`}
                style={{width:"60%", marginLeft:"30%"}}
              >
                <div className="question-content " >
                  <div className="question-id">{sentence.id})</div>
                  <div className="question-text">{sentence.text}</div>
                </div>

                {/* أزرار Vrai/Faux */}
                <div className="answer-buttons-container">
                  <button
                    className={`answer-button vrai-button ${
                      userAnswer === true ? "selected" : ""
                    } ${showFeedback && correct ? "correct-highlight" : ""}`}
                    onClick={() =>
                      !showFeedback &&
                      setChecked((prev) => ({ ...prev, [sentence.id]: true }))
                    }
                    disabled={showFeedback}
                  >
                    <span className="button-icon">✔️</span>
                    <span className="button-text">Vrai</span>
                    {showFeedback && correct && (
                      <span className="feedback-indicator">✓</span>
                    )}
                  </button>
                  <button
                    className={`answer-button faux-button ${
                      userAnswer === false ? "selected" : ""
                    } ${showFeedback && !correct ? "correct-highlight" : ""}`}
                    onClick={() =>
                      !showFeedback &&
                      setChecked((prev) => ({ ...prev, [sentence.id]: false }))
                    }
                    disabled={showFeedback}
                  >
                    <span className="button-icon">✖️</span>
                    <span className="button-text">Faux</span>
                    {showFeedback && !correct && (
                      <span className="feedback-indicator">✓</span>
                    )}
                  </button>
                </div>

                {/* Feedback message */}
                {showFeedback && (
                  <div className="feedback-message">
                    {userAnswer === correct ? (
                      <span className="correct-feedback">Correct !</span>
                    ) : (
                      <span className="incorrect-feedback">
                        Incorrect. La réponse correcte est{" "}
                        <strong>{correct ? "Vrai" : "Faux"}</strong>
                      </span>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* بطاقة النتيجة */}
      {score && (
        <div className="score-card-container">
          <ScoreCardEnhanced score={score} />
        </div>
      )}

   <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">
          Recommencer ↻
        </button>
        <button onClick={showCorrectAnswer} className="show-answer-btn">
          Afficher la réponse
        </button>
        <button onClick={checkAnswer} className="check-button2">
          Vérifier la réponse ✓
        </button>
      </div>
   
    </div>
  );
};

export default Page5_Q1_CleanAudio;