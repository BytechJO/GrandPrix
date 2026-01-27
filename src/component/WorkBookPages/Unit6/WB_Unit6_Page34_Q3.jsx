import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

import img1 from "../../../assets/workpages/svg/page34-1.svg";
import img2 from "../../../assets/workpages/svg/page34-2.svg";
import img3 from "../../../assets/workpages/svg/page34-3.svg";
import img4 from "../../../assets/workpages/svg/page34-4.svg";
import img5 from "../../../assets/workpages/svg/page34-5.svg";
import img6 from "../../../assets/workpages/svg/page34-6.svg";

const Page5_Q2_SAppeler = () => {
  const [answers, setAnswers] = useState({
    a: "",
    c1: "",
    c2: "",
    d1: "",
    d2: "",
    j1: "",
    j2: "",
    l1: "",
    l2: "",
    m: "",
  });

  const [answerStatus, setAnswerStatus] = useState({});
  const [score, setScore] = useState(null);

  const correctAnswers = {
    a: "du vent",
    c1: "mauvais",
    c2: "beau",
    d1: "pleut",
    d2: "chaud",
    j1: "du soleil",
    j2: "froid",
    l1: "neige",
    l2: "pleut",
    m: "pleut",
  };

  const questions = {
    a: { label: "a-", text: "a- Steven, mets une veste, il y a  ____  - Oui maman." },
    b: { label: "b-", text: "b- Je veux écouter la météo." },
    c: { label: "c-", text: "- À l’ouest, il y a  ____ à l’est, il fait ____ " },
    d: { label: "d-", text: "au nord, il fait  ____ et au sud il ____ " },
    e: { label: "e-", text: "c-Salut, Marie. Comment ça va ?" },
    f: { label: "f-", text: "- Salut, André. Ça va bien." },
    g: { label: "g-", text: "- Où es-tu ?" },
    h: { label: "h-", text: "- Je suis à Paris." },
    i: { label: "i-", text: "- Quel temps fait-il ?" },
    j: { label: "j-", text: "Il fait  ____ et il y a ____ " },
    k: { label: "k-", text: "d- Salut, Nicole. Quel temps fait-il à Marseille ?" },
    l: { label: "l-", text: "- Il fait  ____ et il ____ Et à Metz ?" },
    m: { label: "m-", text: "- Ah ! Il  ____ depuis deux jours. " },
  };

  const questionImages = {
    a: img2,
    c: [img2, img1],
    d: [img5, img3],
    j: [img3, img6],
    l: [img4, img1],
    m: img5,
  };

  const handleChange = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setAnswerStatus((prev) => ({ ...prev, [key]: "" }));
  };

  const checkAnswer = () => {
    let correctCount = 0;
    let incomplete = false;
    const newStatus = {};

    Object.keys(correctAnswers).forEach((key) => {
      const val = answers[key]?.trim();
      if (!val) incomplete = true;

      const isCorrect = val === correctAnswers[key];
      newStatus[key] = isCorrect ? "correct" : "wrong";
      if (isCorrect) correctCount++;
    });

    setAnswerStatus(newStatus);

    const total = Object.keys(correctAnswers).length;

    if (incomplete) {
      ValidationAlert.info("Incomplete", "Please fill all fields", `${correctCount}/${total}`);
      setScore(null);
      return;
    }

    setScore({ correct: correctCount, total });

    if (correctCount === total) {
      ValidationAlert.success("Excellent!", "All correct!", `${total}/${total}`);
    } else {
      ValidationAlert.error("Result", `Correct ${correctCount} of ${total}`, `${correctCount}/${total}`);
    }
  };

  const showAnswerFunc = () => {
    setAnswers(correctAnswers);
    const status = {};
    Object.keys(correctAnswers).forEach((k) => (status[k] = "correct"));
    setAnswerStatus(status);
    setScore({
      correct: Object.keys(correctAnswers).length,
      total: Object.keys(correctAnswers).length,
    });
  };

  const resetExercise = () => {
    const empty = {};
    Object.keys(correctAnswers).forEach((k) => (empty[k] = ""));
    setAnswers(empty);
    setAnswerStatus({});
    setScore(null);
  };

  const getInputStyle = (key) => {
    if (answerStatus[key] === "correct") return { backgroundColor: "#d4f4dd" };
    if (answerStatus[key] === "wrong") return { backgroundColor: "#f8d7da" };
    return {};
  };

  return (
   <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
       <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
      >
        <span style={{ backgroundColor: "#ca366b", color: "#white" }} className="ex-A">6</span>
        <span style={{ color: "black" }} className="number-of-q">3</span>
   Complète les dialogues.
      </header>

      <div className="inputs-column">
        {Object.entries(questions).map(([key, q]) => {
          const blanks = q.text.match(/____/g)?.length || 0;
          const parts = q.text.split("____");

          return (
            <div className="input-group" key={key}>

              {blanks === 0 && <span>{q.text}</span>}

              {blanks === 1 && (
                <>
                  {parts[0]}
                  <input
                    type="text"
                    value={answers[key] || ""}
                    onChange={(e) => handleChange(key, e.target.value)}
                    style={{ width: "150px", margin: "0 5px", ...getInputStyle(key) }}
                  />
                  {questionImages[key] && (
                    <img
                      src={questionImages[key]}
                      alt=""
                      style={{ width: "40px", display: "inline-block", height: "4vh" }}
                    />
                  )}
                  {parts[1]}
                </>
              )}

              {blanks === 2 && (
                <>
                  {parts[0]}
                  <input
                    type="text"
                    value={answers[`${key}1`] || ""}
                    onChange={(e) => handleChange(`${key}1`, e.target.value)}
                    style={{ width: "140px", margin: "0 5px", ...getInputStyle(`${key}1`) }}
                  />
                  {questionImages[key]?.[0] && (
                    <img
                      src={questionImages[key][0]}
                      alt=""
                      style={{ width: "40px", display: "inline-block", height: "4vh" }}
                    />
                  )}
                  {parts[1]}
                  <input
                    type="text"
                    value={answers[`${key}2`] || ""}
                    onChange={(e) => handleChange(`${key}2`, e.target.value)}
                    style={{ width: "140px", margin: "0 5px", ...getInputStyle(`${key}2`) }}
                  />
                  {questionImages[key]?.[1] && (
                    <img
                      src={questionImages[key][1]}
                      alt=""
                      style={{ width: "40px", display: "inline-block", height: "4vh" }}
                    />
                  )}
                  {parts[2]}
                </>
              )}
            </div>
          );
        })}
      </div>

      {score && <ScoreCardEnhanced score={score} />}
      <div className="spaces"></div>

      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn swal-continue">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse ✓</button>
      </div>
    </div>
  );
};

export default Page5_Q2_SAppeler;
