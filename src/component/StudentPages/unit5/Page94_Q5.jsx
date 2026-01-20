import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import img1 from "../../../assets/unite5pages/SVG/img1page94.svg";
import img2 from "../../../assets/unite5pages/SVG/img2page94.svg";

const Page5_Q2_SAppeler = () => {
  // ================= STATE =================
  const [answers, setAnswers] = useState({
    a1: "",
    a2: "",
    b: "",
    c: "",
    d1: "",
    d2: "",
    d3: "",
  });

  const [answerStatus, setAnswerStatus] = useState({});
  const [score, setScore] = useState(null);

  // ================= CORRECT ANSWERS =================
  const correctAnswers = {
    a1: "bien",
    a2: "jus",
    b: "petit-déjeuner",
    c: "Et toi",
    d1: "lait",
    d2: "café",
  };

  // ================= QUESTIONS WITH IMAGES =================
  const dialogues = [
    {
      id: "a",
      img: img1,
      text: "Salut, maman ! Ça va ______. Je mange des céréales et je prends du ______.",
    },
    {
      id: "b",
      img: img2,
      text: "Salut, Sara ! Ça va ? Qu’est-ce que tu prends au ______ ?",
    },
    {
      id: "c",
      img: img1,
      text: "Bonjour, Léo ! Ça va bien, merci. ______ ?",
    },
    {
      id: "d",
      img: img2,
      text: "Je prends des toastés avec de la confiture d’oranges, du ______ chaud et des fruits. Et toi ?",
    },
    {
      id: "e",
      img: img1,
      text: "Salut, Marie ! Ça va ?",
    },
    {
      id: "f",
      img: img2,
      text: "Pas mal, merci. Tu prends au petit-déjeuner ?",
    },
    {
      id: "g",
      img: img1,
      text: "Des croissants et du ______.",
    },
  ];

  // ================= HANDLERS =================
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
      ValidationAlert.info(
        "Incomplet",
        "Veuillez remplir tous les champs",
        `${correctCount}/${total}`
      );
      setScore(null);
      return;
    }

    setScore({ correct: correctCount, total });

    if (correctCount === total) {
      ValidationAlert.success(
        "Excellent !",
        "Toutes les réponses sont correctes !",
        `${total}/${total}`
      );
    } else {
      ValidationAlert.error(
        "Résultat",
        `Correct : ${correctCount} sur ${total}`,
        `${correctCount}/${total}`
      );
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
    ValidationAlert.success(
      "Réponses affichées",
      "Toutes les réponses correctes ont été remplies.",
      `${Object.keys(correctAnswers).length}/${Object.keys(correctAnswers).length}`
    );
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

  // ================= RENDER =================
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
        <span className="ex-A" style={{ backgroundColor: "#f38180" }}>
          5
        </span>
        <span className="number-of-q">10</span> Écoute et écrit l’information
        manquante.
      </header>

      {/* ================= DIALOGUES WITH IMAGES ================= */}
      <div className="dialogues-column" style={{ marginLeft: "0%", width: "80%" }}>
        {dialogues.map((dialogue, index) => {
          // Find blanks in text
          const blanks = dialogue.text.match(/______/g)?.length || 0;
          const parts = dialogue.text.split("______");

          return (
            <div
              key={dialogue.id}
              className="dialogue-item flex items-start gap-4 mb-6"
            >
              <img
                src={dialogue.img}
                alt="Personnage"
                style={{ width: "60px", height: "60px" }}
              />
              <div className="dialogue-text flex flex-wrap items-center gap-1">
                {parts.map((part, partIndex) => (
                  <React.Fragment key={partIndex}>
                    {part}
                    {partIndex < blanks && (
                      <input
                        type="text"
                        value={answers[`${dialogue.id}${partIndex + 1}`] || ""}
                        onChange={(e) =>
                          handleChange(`${dialogue.id}${partIndex + 1}`, e.target.value)
                        }
                        style={{
                          width: "120px",
                          margin: "0 5px",
                          ...getInputStyle(`${dialogue.id}${partIndex + 1}`),
                        }}
                        placeholder="______"
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= SCORE ================= */}
      {score && <ScoreCardEnhanced score={score} />}

      {/* ================= ACTION BUTTONS ================= */}
      <div className="action-buttons-container flex gap-4">
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

export default Page5_Q2_SAppeler;