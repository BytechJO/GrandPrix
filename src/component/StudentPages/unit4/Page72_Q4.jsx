import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/unit1/SoundU1/U1SAQ5.mp3";
import ValidationAlert from "../../Popup/ValidationAlert";
import img1 from "../../../assets/unite4pages/SVG/img71.svg";
import img2 from "../../../assets/unite4pages/SVG/img72.svg";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page5_Q1_CleanAudio = () => {
  const audioRef = useRef(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(null);

  // ✅ MCQ Answers
  const [mcqAnswers, setMcqAnswers] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
  });

  // ✅ Correct Answers
  const correctAnswers = {
    a: "C’est l’animatrice de l’émission.",
    b: "Il a quinze ans.",
    c: "Il habite à Piolenc. C’est un village à 6 km d’Orange.",
    d: "Sa famille produit des truffes.",
  };

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

  const handleSelect = (question, value) => {
    setMcqAnswers((prev) => ({
      ...prev,
      [question]: value,
    }));
  };

  const checkAnswer = () => {
    let correctCount = 0;

    Object.keys(correctAnswers).forEach((key) => {
      if (mcqAnswers[key] === correctAnswers[key]) {
        correctCount++;
      }
    });

    setScore({ correct: correctCount, total: 4 });

    if (correctCount === 4) {
      ValidationAlert.success(
        "Excellent!",
        "All answers are correct!",
        "4/4"
      );
    } else if (correctCount === 0) {
      ValidationAlert.error(
        "Incorrect!",
        "Try again!",
        "0/4"
      );
    } else {
      ValidationAlert.error(
        "Almost there!",
        `You got ${correctCount} out of 4 correct.`,
        `${correctCount}/4`
      );
    }
  };

  const showAnswerFunc = () => {
    setMcqAnswers({ ...correctAnswers });
    setScore({ correct: 4, total: 4 });

    ValidationAlert.success(
      "Answers shown",
      "The correct answers have been placed.",
      "4/4"
    );
  };

  const resetExercise = () => {
    setMcqAnswers({ a: "", b: "", c: "", d: "" });
    setScore(null);
    resetAudio();
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center gap-8 p-4">
      <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
      >
        <span style={{ backgroundColor: "#d47176", color: "#white" }} className="ex-A">4</span>
        <span style={{ color: "black" }} className="number-of-q">4</span>
     Écoute et entoure la bonne réponse.
      </header>

      {/* Audio */}
      <audio ref={audioRef} src={CD6_Pg8_Instruction1_AdultLady} />

      {score && <ScoreCardEnhanced score={score} />}

      <div className="question-container">
        <div className="image-box1">
          <img src={img1} alt="img1" style={{ width: "80%" }} />
          <img src={img2} alt="img2" style={{ width: "80%" }} />
        </div>

        <div className="mcq-box">
          {/* A */}
          <div className="question-block">
            <p>a. Qui est Caroline ?</p>
            {[
              "C’est la mère de Marc.",
              "C’est l’animatrice de l’émission.",
              "C’est l’amie de Marc.",
            ].map((opt, index) => (
              <label key={opt} className="option">
                <input
                  type="radio"
                  name="a"
                  checked={mcqAnswers.a === opt}
                  onChange={() => handleSelect("a", opt)}
                />
                <span>{index + 1}.</span> {opt}
              </label>
            ))}
          </div>

          {/* B */}
          <div className="question-block">
            <p>b. Quel âge a Marc ?</p>
            {[
              "Il a douze ans.",
              "Elle a quinze ans.",
              "Il a quinze ans.",
            ].map((opt, index) => (
              <label key={opt} className="option">
                <input
                  type="radio"
                  name="b"
                  checked={mcqAnswers.b === opt}
                  onChange={() => handleSelect("b", opt)}
                />
                <span>{index + 1}.</span> {opt}
              </label>
            ))}
          </div>

          {/* C */}
          <div className="question-block">
            <p>c. Où habite-t-il ?</p>
            {[
              "Il habite à Piolenc. C’est un village à 6 km d’Orange.",
              "Il habite à Piolenc. C’est un village à 16 km d’Orange.",
              "Il habite à Piolenc. C’est un village à 7 km d’Orange.",
            ].map((opt, index) => (
              <label key={opt} className="option">
                <input
                  type="radio"
                  name="c"
                  checked={mcqAnswers.c === opt}
                  onChange={() => handleSelect("c", opt)}
                />
                <span>{index + 1}.</span> {opt}
              </label>
            ))}
          </div>

          {/* ✅ D (تم التصحيح هنا) */}
          <div className="question-block">
            <p>d. Que fait sa famille ?</p>
            {[
              "Sa famille produit du fromage.",
              "Sa famille produit de la laine.",
              "Sa famille produit des truffes.",
            ].map((opt, index) => (
              <label key={opt} className="option">
                <input
                  type="radio"
                  name="d"
                  checked={mcqAnswers.d === opt}   
                  onChange={() => handleSelect("d", opt)}
                />
                <span>{index + 1}.</span> {opt}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="spaces"></div>
  <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">
          Recommencer ↻
        </button>
        <button onClick={showAnswerFunc} className="show-answer-btn swal-continue">
         Afficher la réponse
        </button>
        <button onClick={checkAnswer} className="check-button2">
          Vérifier la réponse✓
        </button>
      </div>
    </div>
  );
};

export default Page5_Q1_CleanAudio;
