import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import "./Page40_Q4.css";

const Page5_Q1_CleanAudio = () => {

  /* ================= STATE ================= */
  const TOTAL_ROWS = 6;

  const [rows, setRows] = useState(
    Array(TOTAL_ROWS).fill().map(() => ({
      col1: "",
      col2: "",
      col3: ""
    }))
  );

  /* ================= CORRECT ANSWERS ================= */
  const correctAnswers = [
    { col1: "",    col2: "l'artisanat et",     col3: "la sculpture" },
    { col1: "",  col2: "",       col3: "C'est très intéressant." },
    { col1: "",      col2: "16 h 30",     col3: "15 h 00" },
    { col1: "",  col2: "17 h 30", col3: "16 h 00" },
    { col1: "",     col2: "",      col3: "sûre" },
    { col1: "",   col2: "brésilienne",   col3: "brésilienne" }
  ];

  /* ================= FIXED CELLS ================= */
  const fixedValues = [
    { col1: "Les cours/clubs",        col2: null,            col3: null },
    { col1: "Pourquoi ?",        col2: "J’aime le sport.",            col3: null },
    { col1: "Le cours commence à",        col2: null,            col3: null },
    { col1: "Le cours se termine à",        col2: null,            col3: null },
    { col1: "Choix",        col2: "N’est pas sûre.",            col3: null },
    { col1: "", col2: "",            col3: "" } // مثال خانة ثابتة
  ];

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (rowIndex, field, value) => {
    const updated = [...rows];
    updated[rowIndex][field] = value;
    setRows(updated);
  };

  /* ================= CHECK ANSWER ================= */
  const checkAnswer = () => {
    let correctCount = 0;
    let total = 0;

    // 🔍 التحقق من التعبئة (الخانات غير الثابتة فقط)
    const hasEmpty = rows.some((row, i) =>
      Object.keys(row).some(
        key => fixedValues[i][key] === null && !row[key].trim()
      )
    );

    if (hasEmpty) {
      ValidationAlert.info("Attention!", "Veuillez remplir toutes les cases.");
      return;
    }

    // ✅ التصحيح
    rows.forEach((row, i) => {
      Object.keys(row).forEach(key => {
        total++;

        if (fixedValues[i][key] !== null) {
          correctCount++; // خانة ثابتة = صحيحة
        } else if (
          row[key].trim().toLowerCase() ===
          correctAnswers[i][key].toLowerCase()
        ) {
          correctCount++;
        }
      });
    });

    const color =
      correctCount === total ? "green" :
      correctCount === 0 ? "red" : "orange";

    const msg = `
      <div style="font-size:20px;text-align:center">
        <span style="color:${color};font-weight:bold">
          Score : ${correctCount} / ${total}
        </span>
      </div>
    `;

    if (correctCount === total) ValidationAlert.success(msg);
    else if (correctCount === 0) ValidationAlert.error(msg);
    else ValidationAlert.warning(msg);
  };

  /* ================= SHOW ANSWERS ================= */
  const showAnswerFunc = () => {
    setRows(correctAnswers);
  };

  /* ================= RESET ================= */
  const resetExercise = () => {
    setRows(
      Array(TOTAL_ROWS).fill().map(() => ({
        col1: "",
        col2: "",
        col3: ""
      }))
    );
  };
const spanValues = [
  { col1: "", col2: "La natation la gymnastique ", col3: "et le théâtre." },
  { col1: "", col2: "", col3: "" },
  { col1: "", col2: "", col3: "" },
  { col1: "", col2: "", col3: "" },
  { col1: "", col2: "", col3: "" },
  { col1: "", col2: "", col3: "" }
];

  /* ================= JSX ================= */
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
        <span className="number-of-q">4</span>
        Écoute la conversation entre Maya et Doreen, puis
écris l'information manquante.
      </header>

      {/* ===== TABLE ===== */}
      <div className="nationality-table-container">
        <table className="nationality-table">
          <thead>
            <tr className="nationality-table-header">
              <th></th>
              <th>Doreen</th>
              <th>Maya</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {["col1", "col2", "col3"].map(col => {
                  const isFixed = fixedValues[i][col] !== null;
                  return (
                  <td key={col} className="nationality-table-cell">
  {spanValues[i][col] && (
    <span className="cell-prefix">
      {spanValues[i][col]}
    </span>
  )}

  <input
    className="nationality-table-input"
    value={isFixed ? fixedValues[i][col] : row[col]}
    readOnly={isFixed}
    onChange={(e) =>
      !isFixed && handleChange(i, col, e.target.value)
    }
 
  />
</td>

                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ===== BUTTONS ===== */}
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
