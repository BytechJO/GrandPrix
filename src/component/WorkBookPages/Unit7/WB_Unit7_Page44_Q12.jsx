import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/unit1/SoundU1/1.mp3";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard"; // عدّل المسار حسب مكانه

const Page5_Q1_CleanAudio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [volume, setVolume] = useState(1);
  const [score, setScore] = useState(null);

  const [answers, setAnswers] = useState({});
  const [answerStatus, setAnswerStatus] = useState({});
  const [checked, setChecked] = useState(false);

const correctAnswers = {
  a: "est partie",
  b: "ne sont pas allées",
  c: "s’est levée",
  d: "sommes arrivés",  // fine
  e: "sont rentrés",  // إذا كنت ستختار الحرف الكبير
  f: "t’es brossé",

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
      setCurrent(0);
    }
  };

  // ✅ CHECK ANSWER
  const checkAnswer = () => {
    const newStatus = {};
    let correctCount = 0;
    let incomplete = false;

    Object.keys(correctAnswers).forEach((key) => {
      const val = answers[key]?.trim();
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

  // ✅ RESET
  const resetExercise = () => {
    const emptyAnswers = {};
    const emptyStatus = {};
    Object.keys(correctAnswers).forEach((key) => {
      emptyAnswers[key] = "";
      emptyStatus[key] = "";
    });

    setAnswers(emptyAnswers);
    setAnswerStatus(emptyStatus);
    setChecked(false);
    setScore(null);
    resetAudio();
  };

  return (
    <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
 <header
                className="header-title-page1 w-full text-left mb-4"
                style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
            >
                <span style={{ backgroundColor: "#cf7230", color: "#white" }} className="ex-A">7</span>
                <span style={{ color: "black" }} className="number-of-q">12</span>
             Entoure la bonne réponse.
            </header>


      <div className="exercise-choices w-full max-w-4xl">
        {[
          { id: "a", text: "Elle ___________ à 5 heures du matin.", options: ["est parti", "est partie","es parti"] },
          { id: "b", text: "Flori et sa mère________au supermarché", options: ["ne sont pas allées", "n’ont pas allées","ne font pas allées"] },
          { id: "c", text: "Ma soeur________________à 6 h hier.", options: ["s’est levée", "s’est levé","s’est lève"] },
          { id: "d", text: "Mon ami et moi____________en retard.", options: ["sommes arrivé", "sommes arrivés","sommes arrivée"] },
          { id: "e", text: "Ils_______________de vacances hier.", options: ["sont rentrés", "ont rentrés","sont rentrées"] },
          { id: "f", text: "Est-ce que tu______________ les dents ce matin ?", options: ["t’est brossé", "t’es brossé","t’ai brossé"] },
      ].map((q) => (
          <div key={q.id} className="question-row">
            <strong>{q.id}.</strong> {q.text}

            {q.options.map((opt) => {
              const isSelected = answers[q.id] === opt;
              const isCorrect = checked && answerStatus[q.id] === "correct" && isSelected;
              const isWrong = checked && answerStatus[q.id] === "wrong" && isSelected;

              return (
                <label
                  key={opt}
                  className={`choice-label 
                    ${isCorrect ? "correct" : ""}
                    ${isWrong ? "wrong" : ""}
                  `}
                >
                  <input
                    type="radio"
                    name={q.id}
                    value={opt}
                    checked={isSelected}
                    onChange={(e) =>
                      setAnswers((prev) => ({ ...prev, [q.id]: e.target.value }))
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

      {score && <ScoreCardEnhanced score={score} />}

      <div className="spaces"></div>

      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">
          Recommencer ↻
        </button>
        <button onClick={showAnswerFunc} className="show-answer-btn">
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
