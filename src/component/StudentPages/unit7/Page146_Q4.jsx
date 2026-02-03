import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import page5_CD2 from "../../../assets/U5Audio/u5sdq4.mp3";
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
    { start: 5.44, end: 6.52, text: "Rempris à 1," },
    { start: 7.07, end: 8.50, text: "unité 5," },
    { start: 8.80, end: 9.42, text: "les repas." },
    { start: 10.81, end: 11.35, text: "Section D," },
    { start: 12.20, end: 12.86, text: "au restaurant." },
    { start: 14.14, end: 15.06, text: "Exercice 4." },
    { start: 15.65, end: 17.90, text: "Écoute et écris la bonne réponse." },
    { start: 20.36, end: 22.06, text: "Je voudrais des pâtes avec" },
    { start: 22.10, end: 22.90, text: "du jus d'orange." },
    { start: 25.05, end: 25.60, text: "Comme entrée," },
    { start: 25.60, end: 26.62, text: "je voudrais des rouleaux" },
    { start: 26.62, end: 27.24, text: "de fruits de mer" },
    { start: 27.54, end: 28.28, text: "et comme boisson," },
    { start: 31.00, end: 32.92, text: "Je voudrais une salade verte" },
    { start: 33.19, end: 34.33, text: "puis de la ratatouille" },
    { start: 34.39, end: 35.35, text: "avec du jus de raisin." },
    { start: 36.00, end: 36.71, text: "Comme dessert," },
    { start: 37.07, end: 38.43, text: "je voudrais une tarte aux" },
    { start: 38.43, end: 39.93, text: "pommes avec un café noir." },
    { start: 41.99, end: 43.43, text: "Je voudrais une crème brûlée" },
    { start: 43.43, end: 44.45, text: "avec un café au lait." },
    { start: 44.45, end: 45.20, text: "de l'eau minérale." }
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
      probleme: "en Espagne, Valencia", 
      solution: "avec ses amis", 
      prix: "son frère Alex", 
      paiement: "nager, visiter beaucoup des sites historiques," 
    },
    { 
      probleme: "", 
      solution: "", 
      prix: "", 
      paiement: "manger la « paella », regarder le match de football." 
    },
  { 
      probleme: "", 
      solution: "", 
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
      <div className="nationality-table-container" style={{ width: "100%",marginLeft:"20%" }}>
        <table className="nationality-table" style={{ width: "100%" }}>
          <thead>
            <tr className="nationality-table-header">
              <th>Où ?</th>
              <th>Où il a logé ?</th>
              <th>Avec qui ?</th>
              <th>Qu’est-ce qu’il a fait ?</th>
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
                  <textarea
                
                    className="nationality-table-input"
                    value={row.solution}
                    onChange={(e) =>
                      handleChange(rowIndex, "solution", e.target.value)
                    }
                    placeholder={correctAnswers[rowIndex].solution ? "Écrivez ici" : ""}
                    style={{ 
                        resize:"none",
                      width: "90%",
                      backgroundColor: correctAnswers[rowIndex].solution ? "" : "",
                      cursor: correctAnswers[rowIndex].solution ? "text" : "not-allowed"
                    }}
                    readOnly={!correctAnswers[rowIndex].solution}
                  />
                </td>

                {/* سعر */}
                <td className="nationality-table-cell">
                  <textarea
                    className="nationality-table-input"
                    value={row.prix}
                    onChange={(e) =>
                      handleChange(rowIndex, "prix", e.target.value)
                    }
                    placeholder={correctAnswers[rowIndex].prix ? "Écrivez ici" : ""}
                    style={{ 
                        resize:"none",
                      width: "90%",
                      backgroundColor: correctAnswers[rowIndex].prix ? "" : "",
                      cursor: correctAnswers[rowIndex].prix ? "text" : "not-allowed"
                    }}
                    readOnly={!correctAnswers[rowIndex].prix}
                  />
                </td>

                {/* طريقة الدفع */}
                <td className="nationality-table-cell">
                  <textarea
                    className="nationality-table-input"
                    value={row.paiement}
                    onChange={(e) =>
                      handleChange(rowIndex, "paiement", e.target.value)
                    }
                    placeholder={correctAnswers[rowIndex].paiement ? "Écrivez ici" : ""}
                    style={{
                        resize:"none", 
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