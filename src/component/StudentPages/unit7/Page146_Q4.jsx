import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import page5_CD2 from "../../../assets/U7Audio/u7scq4.mp3";
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
 { start: 5.379, end: 8.619, text: "Grand prix A1, unité sept," },
  { start: 8.619, end: 9.839, text: "les loisirs." },
  { start: 9.839, end: 12.749, text: "Section C, mes vacances." },

  { start: 12.750, end: 14.989, text: "Exercice quatre," },
  { start: 14.989, end: 16.389, text: "écoute le reste de la" },
  { start: 16.389, end: 18.269, text: "conversation et complète" },
  { start: 18.269, end: 20.319, text: "le tableau." },

  { start: 20.320, end: 21.599, text: "Ah," },
  { start: 21.599, end: 23.240, text: "je suis allé en Espagne dans une" },
  { start: 23.240, end: 24.099, text: "ville magnifique qui" },
  { start: 24.099, end: 25.729, text: "s'appelle Valencia." },

  { start: 25.730, end: 27.009, text: "J'y suis allé avec" },
  { start: 27.009, end: 28.530, text: "mon frère Alex." },

  { start: 28.530, end: 30.639, text: "Nous avons logé avec des amis." },
  { start: 30.639, end: 31.829, text: "Nous avons fait beaucoup" },
  { start: 31.830, end: 32.870, text: "de choses." },

  { start: 32.870, end: 34.799, text: "Nous avons nagé dans la mer et" },
  { start: 34.799, end: 36.150, text: "nous avons visité beaucoup" },
  { start: 36.150, end: 37.580, text: "de sites historiques." },

  { start: 37.580, end: 39.139, text: "Nous avons aussi mangé de la" },
  { start: 39.139, end: 40.999, text: "paella, leur spécialité." },

  { start: 41.000, end: 41.759, text: "Puis," },
  { start: 41.760, end: 43.400, text: "mon frère et moi avons regardé" },
  { start: 43.400, end: 44.819, text: "un match de football." },
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
                style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
            >
                <span style={{ backgroundColor: "#cf7230", color: "#white" }} className="ex-A">C</span>
                <span style={{ color: "black" }} className="number-of-q">4</span>
          coute le reste de la conversation et complète le tableau.
            </header>

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