import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import page5_CD2 from "../../../assets/U6Audio/u6sdq5.mp3";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";

const Page5_Q1_CleanAudio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const [showCaption, setShowCaption] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

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

  const captions = [
    { start: 5.47, end: 6.47, text: "Rempris A1," },
  { start: 6.78, end: 7.65, text: "unité 6," },
  { start: 8.01, end: 8.47, text: "le temps." },
  { start: 9.44, end: 10.09, text: "Section D," },
  { start: 10.53, end: 10.91, text: "la mode." },
  { start: 11.61, end: 12.59, text: "Exercice 5." },
  { start: 13.47, end: 17.23, text: "Écoute le reste de la conversation et complète le tableau." },

  { start: 19.42, end: 21.27, text: "Alors, madame, la taille vous convient ?" },
  { start: 22.47, end: 24.07, text: "Hum, la jupe est trop petite." },
  { start: 24.31, end: 25.24, text: "Vous l'avez en plus grand ?" },
  { start: 26.49, end: 27.97, text: "Bien sûr, juste une seconde." },
  { start: 28.39, end: 28.61, text: "Tenez." },
  { start: 29.79, end: 30.20, text: "Alors ?" },
  { start: 31.41, end: 32.73, text: "C'est ma taille. Je la prends." },
  { start: 33.67, end: 34.55, text: "Combien elle coûte ?" },
  { start: 35.77, end: 36.44, text: "50 euros." },
  { start: 37.52, end: 39.18, text: "Est-ce que vous acceptez la carte de crédit ?" },
  { start: 40.45, end: 43.28, text: "Oui, tenez, votre jupe et votre carte de crédit." },
  { start: 44.30, end: 45.32, text: "Merci, au revoir." }
  ];

  const updateCaption = (time) => {
    const index = captions.findIndex(
      (cap) => time >= cap.start && time <= cap.end
    );
    setActiveIndex(index !== -1 ? index : null);
  };

  const resetAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrent(0);
    }
  };

  /* ================= STATE للجدول الجديد ================= */
  const TOTAL_ROWS = 3; // تغيير إلى 3 صفوف

  const [rows, setRows] = useState(
    Array(TOTAL_ROWS).fill().map(() => ({
      probleme: "",
      solution: "",
      prix: "",
      paiement: ""
    }))
  );

  /* ================= FIXED CELLS (الخانات المعبأة مسبقاً) ================= */
  const fixedValues = [
    { 
      probleme: "", 
      solution: "", 
      prix: "", 
      paiement: "" 
    },
    { 
      probleme: "", 
      solution: "", 
      prix: "", 
      paiement: "" 
    },
    { 
      probleme: "", 
      solution: "", 
      prix: "", 
      paiement: "" 
    },
  ];

  /* ================= CORRECT ANSWERS ================= */
  const correctAnswers = [
    { 
      probleme: "la jupe est trop", 
      solution: "la vendeuse lui", 
      prix: "50 euros", 
      paiement: "la carte de crédit" 
    },
    { 
      probleme: "petite", 
      solution: "donne une jupe", 
      prix: "", 
      paiement: "" 
    },
    { 
      probleme: "", 
      solution: "plus grande", 
      prix: "", 
      paiement: "" 
    },
  ];

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (rowIndex, field, value) => {
    // منع الكتابة في الخلايا الفارغة في correctAnswers
    if (correctAnswers[rowIndex][field] === "") {
      return;
    }
    
    const updated = [...rows];
    updated[rowIndex][field] = value;
    setRows(updated);
  };

  /* ================= CHECK ANSWER ================= */
  const checkAnswer = () => {
    let correctCount = 0;
    let total = 0;

    // 🔍 التحقق من التعبئة (فقط الخلايا التي يجب تعبئتها)
    let hasEmpty = false;
    
    rows.forEach((row, i) => {
      Object.keys(row).forEach(key => {
        // فقط الخلايا التي تحتوي على إجابات صحيحة يجب تعبئتها
        if (correctAnswers[i][key] !== "" && !row[key].trim()) {
          hasEmpty = true;
        }
      });
    });

    if (hasEmpty) {
      ValidationAlert.info("Attention!", "Veuillez remplir toutes les cases requises du tableau.");
      return;
    }

    // ✅ التصحيح - جدول المشاكل والحلول
    rows.forEach((row, i) => {
      Object.keys(row).forEach(key => {
        // نحسب فقط الخلايا التي تحتوي على إجابات صحيحة
        if (correctAnswers[i][key] !== "") {
          total++;

          if (fixedValues[i][key] !== "") {
            correctCount++; // خانة ثابتة = صحيحة
          } else if (
            row[key].trim().toLowerCase() ===
            correctAnswers[i][key].toLowerCase()
          ) {
            correctCount++;
          }
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
    // تعبئة فقط الخلايا التي تحتوي على إجابات صحيحة
    const filledRows = rows.map((row, rowIndex) => {
      const newRow = { ...row };
      Object.keys(newRow).forEach(key => {
        if (correctAnswers[rowIndex][key] !== "") {
          newRow[key] = correctAnswers[rowIndex][key];
        }
      });
      return newRow;
    });
    setRows(filledRows);
  };

  /* ================= RESET ================= */
  const resetExercise = () => {
    setRows(
      Array(TOTAL_ROWS).fill().map(() => ({
        probleme: "",
        solution: "",
        prix: "",
        paiement: ""
      }))
    );
    resetAudio();
  };

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
        <span className="ex-A" style={{ backgroundColor: "#d7a965" }}>D</span>
        <span className="number-of-q">5</span>{" "}
Écoute le reste de la conversation et complète le tableau.   </header>

      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div className="audio-popup-read" style={{ width: "30%" }}>
          <div className="audio-inner player-ui">
            <audio
              ref={audioRef}
              src={page5_CD2}
              onTimeUpdate={(e) => {
                const time = e.target.currentTime;
                setCurrent(time);
                updateCaption(time);
              }}
              onLoadedMetadata={(e) => setDuration(e.target.duration)}
            />
            <div className="top-row">
              <span className="audio-time">
                {new Date(current * 1000).toISOString().substring(14, 19)}
              </span>
              <input
                type="range"
                className="audio-slider"
                min="0"
                max={duration}
                value={current}
                onChange={(e) => {
                  audioRef.current.currentTime = e.target.value;
                  updateCaption(Number(e.target.value));
                }}
                style={{
                  background: `linear-gradient(to right, #430f68 ${(current / duration) * 100}%, #d9d9d9ff ${(current / duration) * 100}%)`,
                }}
              />
              <span className="audio-time">
                {new Date(duration * 1000).toISOString().substring(14, 19)}
              </span>
            </div>

            <div className="bottom-row flex justify-between items-center">
              {/* Captions */}
              <div
                className={`round-btn ${showCaption ? "active" : ""}`}
                style={{ position: "relative" }}
                onClick={() => setShowCaption(!showCaption)}
              >
                <TbMessageCircle size={36} />
                <div
                  className={`caption-inPopup ${showCaption ? "show" : ""}`}
                  style={{ top: "100%", left: "10%" }}
                >
                  {captions.map((cap, i) => (
                    <p
                      key={i}
                      id={`caption-${i}`}
                      className={`caption-inPopup-line2 ${activeIndex === i ? "active" : ""}`}
                    >
                      {cap.text}
                    </p>
                  ))}
                </div>
              </div>

              {/* Play/Pause */}
              <button className="play-btn2" onClick={togglePlay}>
                {isPlaying ? <FaPause size={26} /> : <FaPlay size={26} />}
              </button>

              {/* Settings */}
              <div className="settings-wrapper">
                <button
                  className={`round-btn ${showSettings ? "active" : ""}`}
                  onClick={() => setShowSettings(!showSettings)}
                >
                  <IoMdSettings size={36} />
                </button>
                {showSettings && (
                  <div className="settings-popup">
                    <label>Volume</label>
                    <input
                      id="V"
                      type="range"
                      min="0"
                      max="1"
                      step="0.05"
                      value={volume}
                      onChange={(e) => {
                        setVolume(e.target.value);
                        audioRef.current.volume = e.target.value;
                      }}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ===== TABLE الجديد ===== */}
      <div className="nationality-table-container" style={{ width: "80%" }}>
        <table className="nationality-table" style={{ width: "100%" }}>
          <thead>
            <tr className="nationality-table-header">
              <th>Quel est le problème ?</th>
              <th>La solution du problème</th>
              <th>Le prix</th>
              <th>Mode de paiement</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {/* مشكلة */}
                <td className="nationality-table-cell">
                  <input
                    className="nationality-table-input"
                    value={row.probleme}
                    onChange={(e) =>
                      handleChange(rowIndex, "probleme", e.target.value)
                    }
                    placeholder={correctAnswers[rowIndex].probleme ? "Écrivez ici" : ""}
                    style={{ 
                      width: "90%",
                      backgroundColor: correctAnswers[rowIndex].probleme ? "" : "",
                      cursor: correctAnswers[rowIndex].probleme ? "text" : "not-allowed"
                    }}
                    readOnly={!correctAnswers[rowIndex].probleme}
                  />
                </td>

                {/* حل */}
                <td className="nationality-table-cell">
                  <input
                    className="nationality-table-input"
                    value={row.solution}
                    onChange={(e) =>
                      handleChange(rowIndex, "solution", e.target.value)
                    }
                    placeholder={correctAnswers[rowIndex].solution ? "Écrivez ici" : ""}
                    style={{ 
                      width: "90%",
                      backgroundColor: correctAnswers[rowIndex].solution ? "" : "",
                      cursor: correctAnswers[rowIndex].solution ? "text" : "not-allowed"
                    }}
                    readOnly={!correctAnswers[rowIndex].solution}
                  />
                </td>

                {/* سعر */}
                <td className="nationality-table-cell">
                  <input
                    className="nationality-table-input"
                    value={row.prix}
                    onChange={(e) =>
                      handleChange(rowIndex, "prix", e.target.value)
                    }
                    placeholder={correctAnswers[rowIndex].prix ? "Écrivez ici" : ""}
                    style={{ 
                      width: "90%",
                      backgroundColor: correctAnswers[rowIndex].prix ? "" : "",
                      cursor: correctAnswers[rowIndex].prix ? "text" : "not-allowed"
                    }}
                    readOnly={!correctAnswers[rowIndex].prix}
                  />
                </td>

                {/* طريقة الدفع */}
                <td className="nationality-table-cell">
                  <input
                    className="nationality-table-input"
                    value={row.paiement}
                    onChange={(e) =>
                      handleChange(rowIndex, "paiement", e.target.value)
                    }
                    placeholder={correctAnswers[rowIndex].paiement ? "Écrivez ici" : ""}
                    style={{ 
                      width: "90%",
                      backgroundColor: correctAnswers[rowIndex].paiement ? "" : "",
                      cursor: correctAnswers[rowIndex].paiement ? "text" : "not-allowed"
                    }}
                    readOnly={!correctAnswers[rowIndex].paiement}
                  />
                </td>
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