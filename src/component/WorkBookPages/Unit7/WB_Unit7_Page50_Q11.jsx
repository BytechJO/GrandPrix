import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/unit1/SoundU1/1.mp3";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page5_Q1_CleanAudio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [answers, setAnswers] = useState({});
  const [answerStatus, setAnswerStatus] = useState({});
  const [checked, setChecked] = useState(false);
  const [score, setScore] = useState(null);

  const correctAnswers = {
    a: "mariés",
    b: "retournée",
    c: "fini",
    d: "levée",
    e: "allés",
    f: "utilisé",
    g: "mangé",
    h: "allé",
    i: "tombée",
    j: "venues",
    k: "nés",
    l: "arrivée",
  };

  const questions = [
    {
      id: "a",
      text: "M. et Mme Dubois se sont __________ en 1991.",
      options: ["marié", "mariée", "mariés"],
    },
    {
      id: "b",
      text: "Ma sœur est __________ au Brésil l’année dernière.",
      options: ["retourné", "retournée", "retournées"],
    },
    {
      id: "c",
      text: "Il n’a pas __________ ses exercices.",
      options: ["finis", "fini", "finie"],
    },
    {
      id: "d",
      text: "Marie s’est __________ tôt hier.",
      options: ["levé", "levée", "levés"],
    },
    {
      id: "e",
      text: "Ils sont __________ au restaurant dimanche soir.",
      options: ["allé", "allée", "allés"],
    },
    {
      id: "f",
      text: "J’ai __________ Internet pour rechercher des informations.",
      options: ["utilisé", "utilise", "utilisés"],
    },
    {
      id: "g",
      text: "Elles n’ont pas __________ de frites.",
      options: ["mangé", "mangée", "mangées"],
    },
    {
      id: "h",
      text: "Robert est __________ en France il y a trois ans.",
      options: ["allée", "allé", "allés"],
    },
    {
      id: "i",
      text: "Hier, Marie est __________ pendant le cours d’EPS.",
      options: ["tombé", "tombée", "tombe"],
    },
    {
      id: "j",
      text: "Bette et Sandra sont __________ ensemble.",
      options: ["venu", "venues", "venus"],
    },
    {
      id: "k",
      text: "Les enfants de ma tante sont __________ en avril.",
      options: ["né", "nés", "nées"],
    },
    {
      id: "l",
      text: "Je suis __________ hier.",
      options: ["arrivée", "arrivé", "arrivés"],
    },
  ];

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
    }
  };

  const checkAnswer = () => {
    const newStatus = {};
    let correctCount = 0;
    let incomplete = false;

    Object.keys(correctAnswers).forEach((key) => {
      const val = answers[key];
      if (!val) incomplete = true;

      const isCorrect = val === correctAnswers[key];
      newStatus[key] = isCorrect ? "correct" : "wrong";
      if (isCorrect) correctCount++;
    });

    setAnswerStatus(newStatus);
    setChecked(true);

    const total = Object.keys(correctAnswers).length;

    if (incomplete) {
      ValidationAlert.info(
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
      } else {
        ValidationAlert.error(
          "Result",
          `You got ${correctCount} out of ${total} correct.`,
          `${correctCount}/${total}`
        );
      }
    }
  };

  const showAnswerFunc = () => {
    setAnswers({ ...correctAnswers });

    const newStatus = {};
    Object.keys(correctAnswers).forEach((key) => {
      newStatus[key] = "correct";
    });

    setAnswerStatus(newStatus);
    setChecked(true);

    const total = Object.keys(correctAnswers).length;
    setScore({ correct: total, total });

    ValidationAlert.success(
      "Answers shown",
      "All correct answers have been filled in.",
      `${total}/${total}`
    );
  };

  const resetExercise = () => {
    setAnswers({});
    setAnswerStatus({});
    setChecked(false);
    setScore(null);
    resetAudio();
  };

  return (
    <div className="page-wrapper2 flex flex-col items-center gap-8 p-4">
      <header
                className="header-title-page1 w-full text-left mb-4"
                style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
            >
                <span style={{ backgroundColor: "#7cd0f5", color: "#white" }} className="ex-A">8</span>
                <span style={{ color: "black" }} className="number-of-q">11</span>
             Souligne la bonne réponse.
            </header>
      <audio ref={audioRef} src={CD6_Pg8_Instruction1_AdultLady} />

      <div className="exercise-choices w-full max-w-4xl">
        {questions.map((q) => (
          <div key={q.id} className="question-row">
            <strong>{q.id}.</strong> {q.text}
            {q.options.map((opt) => {
              const isSelected = answers[q.id] === opt;
              const isCorrect =
                checked && answerStatus[q.id] === "correct" && isSelected;
              const isWrong =
                checked && answerStatus[q.id] === "wrong" && isSelected;

              return (
                <label
                  key={opt}
                  className={`choice-label ${
                    isCorrect ? "correct" : isWrong ? "wrong" : ""
                  }`}
                >
                  <input
                    type="radio"
                    name={q.id}
                    value={opt}
                    checked={isSelected || false}
                    onChange={(e) =>
                      setAnswers((prev) => ({
                        ...prev,
                        [q.id]: e.target.value,
                      }))
                    }
                    disabled={checked}
                  />
                  {opt}
                </label>
              );
            })}
          </div>
        ))}
      </div>
<div className="spaces"></div>
      {score && <ScoreCardEnhanced score={score} />}

      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">
          Recommencer ↻
        </button>
        <button onClick={showAnswerFunc} className="show-answer-btn">
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
