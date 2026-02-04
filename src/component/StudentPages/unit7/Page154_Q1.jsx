import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page5_Q1_AdverbesFrequence = () => {
  // ================= STATE =================
  const [answers, setAnswers] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: ""
  });

  const [answerStatus, setAnswerStatus] = useState({});
  const [score, setScore] = useState(null);

  // ================= CORRECT ANSWERS =================
  const correctAnswers = {
    a: "toujours",
    b: "parfois",
    c: "jamais",
    d: "d'habitude",
    e: "souvent",
    f: "jamais",
    g: "parfois"
  };

  // ================= QUESTIONS =================
  const questions = {
    a: { label: "a", text: "Je me lève ______ (xxxxx) tôt." },
    b: { label: "b", text: "Il écoute ______ (xx)de la musique." },
    c: { label: "c", text: "Marie ne joue ______ (x) au volley" },
    d: { label: "d", text: "______, (xxxx), nous mangeons ensemble." },
    e: { label: "e", text: "Ma mère fait ______ (xxx) la cuisine." },
    f: { label: "f", text: "Mes parents ne font ______ (x) de skateboard." },
    g: { label: "g", text: "______, (xx), je fais de la randonnée." }
  };

  // ================= HANDLERS =================
  const handleChange = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    setAnswerStatus(prev => ({ ...prev, [key]: "" }));
  };

  const checkAnswer = () => {
    let correctCount = 0;
    let incomplete = false;
    const newStatus = {};

    Object.keys(correctAnswers).forEach(key => {
      const val = answers[key]?.trim().toLowerCase();
      if (!val) incomplete = true;

      const isCorrect = val === correctAnswers[key];
      newStatus[key] = isCorrect ? "correct" : "wrong";
      if (isCorrect) correctCount++;
    });

    setAnswerStatus(newStatus);

    const total = Object.keys(correctAnswers).length;

    if (incomplete) {
      ValidationAlert.info("Incomplet", "Veuillez remplir tous les champs", `${correctCount}/${total}`);
      setScore(null);
      return;
    }

    setScore({ correct: correctCount, total });

    if (correctCount === total) {
      ValidationAlert.success("Excellent!", "Tout est correct!", `${total}/${total}`);
    } else {
      ValidationAlert.error("Résultat", `Correct ${correctCount} sur ${total}`, `${correctCount}/${total}`);
    }
  };

  const showAnswerFunc = () => {
    setAnswers(correctAnswers);
    const status = {};
    Object.keys(correctAnswers).forEach(k => status[k] = "correct");
    setAnswerStatus(status);
    setScore({ correct: Object.keys(correctAnswers).length, total: Object.keys(correctAnswers).length });
    ValidationAlert.success(
      "Réponses affichées",
      "Toutes les réponses correctes ont été remplies.",
      `${Object.keys(correctAnswers).length}/${Object.keys(correctAnswers).length}`
    );
  };

  const resetExercise = () => {
    const empty = {};
    Object.keys(correctAnswers).forEach(k => empty[k] = "");
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
                style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
            >
                <span style={{ backgroundColor: "#cf7230", color: "#white" }} className="ex-A">Grammaire</span>
                <span style={{ color: "black" }} className="number-of-q">1</span>
         Écris les adverbes de fréquence qui correspondent au nombre de (x).

            </header>

      {/* ================= LEGENDA ================= */}
      <div className="legend-box" style={{
        border: "2px solid #d47176",
        padding: "10px 20px",
        borderRadius: "8px",
        marginBottom: "20px",
        backgroundColor: "#fff9f9"
      }}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" ,flexDirection:"column" }}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <strong style={{ marginRight: "5px" }}>Toujours:</strong>
            <span style={{ letterSpacing: "2px" }}>always (xxxxx)</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <strong style={{ marginRight: "5px" }}>D'habitude:</strong>
            <span style={{ letterSpacing: "2px" }}>usually (xxxx)</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <strong style={{ marginRight: "5px" }}>Souvent:</strong>
            <span style={{ letterSpacing: "2px" }}>often (xxx)</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <strong style={{ marginRight: "5px" }}>Parfois:</strong>
            <span style={{ letterSpacing: "2px" }}>sometimes (xx)</span>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <strong style={{ marginRight: "5px" }}>Jamais:</strong>
            <span style={{ letterSpacing: "2px" }}>never, ever (x)</span>
          </div>
        </div>
      </div>

      {/* ================= QUESTIONS ================= */}
      <div className="page22Q1" style={{ marginLeft: "0%" }}>
        <div className="inputs-column" style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          {Object.entries(questions).map(([key, q]) => (
            <div className="input-group" key={key} style={{ display: "flex", alignItems: "center" }}>
              <strong style={{ marginRight: "10px", minWidth: "20px" }}>{q.label}-</strong>
              <span>{q.text.split("______")[0]}</span>
              <input
                type="text"
                value={answers[key] || ""}
                onChange={e => handleChange(key, e.target.value)}
                style={{
                  width: "180px",
                  margin: "0 5px",
                  padding: "6px 10px",
                  borderBottom: "1px solid black",
                  ...getInputStyle(key)
                }}
              />
              <span>{q.text.split("______")[1]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= SCORE ================= */}
      {score && <ScoreCardEnhanced score={score} />}

       {/* Action Buttons */}
      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">
          Recommencer ↻
        </button>
        <button
          onClick={showAnswerFunc}
          className="show-answer-btn swal-continue"
        >
          Afficher la réponse
        </button>
        <button onClick={checkAnswer} className="check-button2">
          Vérifier la réponse✓
        </button>
      </div>

    </div>
  );
};

export default Page5_Q1_AdverbesFrequence;