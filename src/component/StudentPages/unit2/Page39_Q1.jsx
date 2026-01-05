import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import A from "../../../assets/unite2pages/svg/U2page39/img1.svg";
import b from "../../../assets/unite2pages/svg/U2page39/img2.svg";
import c from "../../../assets/unite2pages/svg/U2page39/img3.svg";
import d from "../../../assets/unite2pages/svg/U2page39/img4.svg";
import e from "../../../assets/unite2pages/svg/U2page39/img5.svg";
import f from "../../../assets/unite2pages/svg/U2page39/img6.svg";
import g from "../../../assets/unite2pages/svg/U2page39/img7.svg";
import h from "../../../assets/unite2pages/svg/U2page39/img8.svg";
import i from "../../../assets/unite2pages/svg/U2page39/img9.svg";
import j from "../../../assets/unite2pages/svg/U2page39/img10.svg";
import k from "../../../assets/unite2pages/svg/U2page39/img11.svg";
import l from "../../../assets/unite2pages/svg/U2page39/img12.svg";
import "./Page35_Q2.css"
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page5_Q1_CleanAudio = () => {
  const [answers, setAnswers] = useState({
    je: "",
    tu: "",
    il: "",
    elle: "",
    nous: "",
    vous: "",
    ils: "",
    elles: "",
    el: "",
    el2: "",
    el3: "",
    el4: "",
  });
  const [feedback, setFeedback] = useState({});
  const [score, setScore] = useState(null);

  const correctAnswers = {
    je: "d",
    tu: "b",
    il: "a",
    elle: "e",
    nous: "c",
    vous: "f",
    ils: "f",
    elles: "c",
    el: "e",
    el2: "d",
    el3: "a",
    el4: "b",
  };

  // تعريف المصفوفتين للصور والأسئلة
  const sportsKeys = ["je", "tu", "il", "elle", "nous", "vous"];
  const artsKeys = ["ils", "elles", "el", "el2", "el3", "el4"];

  const handleInputChange = (pronoun, value) => {
    setAnswers((prev) => ({
      ...prev,
      [pronoun]: value,
    }));
  };

  const checkAnswer = () => {
    const blanks = Object.keys(correctAnswers);
    let correctCount = 0;
    let incomplete = false;

    const newFeedback = {};

    blanks.forEach((blank) => {
      const val = answers[blank]?.trim();
      if (!val) incomplete = true;

      const isCorrect =
        val?.toLowerCase() === correctAnswers[blank].toLowerCase();
      newFeedback[blank] = isCorrect;

      if (isCorrect) correctCount++;
    });

    setFeedback(newFeedback);

    const total = blanks.length;

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

  const showAnswerFunc = () => {
    setAnswers(correctAnswers);

    const blanks = Object.keys(correctAnswers);
    const total = blanks.length;

    const newFeedback = {};
    blanks.forEach((blank) => {
      newFeedback[blank] = true;
    });
    setFeedback(newFeedback);

    setScore({ correct: total, total });

    ValidationAlert.success(
      "Answers shown",
      "All correct answers have been filled in.",
      `${total}/${total}`
    );
  };

  const resetExercise = () => {
    const emptyAnswers = {};
    Object.keys(correctAnswers).forEach((blank) => {
      emptyAnswers[blank] = "";
    });

    setAnswers(emptyAnswers);
    setScore(null);
  };

  const imageMap = {
    je: A,
    tu: b,
    il: c,
    elle: d,
    nous: e,
    vous: f,
    ils: g,
    elles: h,
    el: i,
    el2: j,
    el3: k,
    el4: l,
  };

  return (
    <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
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
        <span className="ex-A" style={{ backgroundColor: "#df4f89" }}>D</span>
        <span className="number-of-q">1</span>
        Écoute et associe l'activité au dessin qui correspond.
      </header>

      <div className="flex flex-col items-center w-full">
        {/* القسم الأول: النادي الرياضي */}
        <div className="w-full mb-12">
          <h3 className="font-bold mb-4 text-lg text-center">
            Le club sportif représente :
          </h3>
          <div className="mb-4">
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="flex items-center">
                <span className="mr-1 font-bold">a</span>
                <span>le rugby</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1 font-bold">b</span>
                <span>la natation</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1 font-bold">c</span>
                <span>le basketball</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1 font-bold">d</span>
                <span>le football</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1 font-bold">e</span>
                <span>la gymnastique</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1 font-bold">f</span>
                <span>la course à pied</span>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8"
            style={{ maxWidth: "1500px", width: "100%", margin: "0 auto" }}
          >
            {sportsKeys.map((pronoun) => (
              <div
                key={pronoun}
                className="flex flex-col items-center justify-center p-4"
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={imageMap[pronoun]}
                  alt={pronoun}
                  className="mb-4"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
                <input
                  type="text"
                  value={answers[pronoun]}
                  onChange={(e) => handleInputChange(pronoun, e.target.value)}
                  maxLength={1}
                  style={{
                    width: "100%",
                    maxWidth: "150px",
                    padding: "10px 15px",
                    border: "2px solid",
                    borderColor:
                      feedback[pronoun] === undefined
                        ? "#ccc"
                        : feedback[pronoun]
                        ? "#4a90e2"
                        : "#f5a1a1",
                    borderRadius: "8px",
                    fontSize: "16px",
                    textAlign: "center",
                    backgroundColor: "#fff",
                    transition: "all 0.3s ease",
                    outline: "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow =
                      "0 0 0 2px rgba(74, 144, 226, 0.2)";
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>

        {/* القسم الثاني: نادي الفنون */}
        <div className="w-full">
          <h3 className="font-bold mb-4 text-lg text-center">
            Le club des arts représente :
          </h3>
          <div className="mb-4">
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <div className="flex items-center">
                <span className="mr-1 font-bold">a</span>
                <span>la peinture</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1 font-bold">b</span>
                <span>la photographie</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1 font-bold">c</span>
                <span>le théâtre</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1 font-bold">d</span>
                <span>la sculpture</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1 font-bold">e</span>
                <span>l'artisanat</span>
              </div>
              <div className="flex items-center">
                <span className="mr-1 font-bold">f</span>
                <span>le graphisme</span>
              </div>
            </div>
          </div>

          <div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-8"
            style={{ maxWidth: "1500px", width: "100%", margin: "0 auto" }}
          >
            {artsKeys.map((pronoun) => (
              <div
                key={pronoun}
                className="flex flex-col items-center justify-center p-4"
                style={{
                  borderRadius: "12px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={imageMap[pronoun]}
                  alt={pronoun}
                  className="mb-4"
                  style={{ width: "100%", height: "100%", objectFit: "contain" }}
                />
                <input
                  type="text"
                  value={answers[pronoun]}
                  onChange={(e) => handleInputChange(pronoun, e.target.value)}
                  maxLength={1}
                  style={{
                    width: "100%",
                    maxWidth: "150px",
                    padding: "10px 15px",
                    border: "2px solid",
                    borderColor:
                      feedback[pronoun] === undefined
                        ? "#ccc"
                        : feedback[pronoun]
                        ? "#4a90e2"
                        : "#f5a1a1",
                    borderRadius: "8px",
                    fontSize: "16px",
                    textAlign: "center",
                    backgroundColor: "#fff",
                    transition: "all 0.3s ease",
                    outline: "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.boxShadow =
                      "0 0 0 2px rgba(74, 144, 226, 0.2)";
                  }}
                  onBlur={(e) => {
                    e.target.style.boxShadow = "none";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="spaces"></div>

      <div className="action-buttons-container" style={{ marginTop: "30px" }}>
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

      {score && <ScoreCardEnhanced score={score} />}
    </div>
  );
};

export default Page5_Q1_CleanAudio;