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

  /* ================= STATE ================= */
  const TOTAL_ROWS = 4;

  const [rows, setRows] = useState(
    Array(TOTAL_ROWS).fill().map(() => ({
      leon: "",
      marie: "",
      pierre: "",
      bette: ""
    }))
  );

  /* ================= FIXED CELLS (الخانات المعبأة مسبقاً) ================= */
  const fixedValues = [
    { 
      leon: ".", 
      marie: "", 
      pierre: "", 
      bette: "." 
    },
    { 
      leon: "", 
      marie: ".", 
      pierre: "", 
      bette: "." 
    },
    { 
      leon: "", 
      marie: "", 
      pierre: "", 
      bette: "" 
    },
    { 
      leon: ".", 
      marie: ".", 
      pierre: ".", 
      bette: "" 
    },
  ];

  /* ================= CORRECT ANSWERS (للخانات الفارغة فقط) ================= */
  // هذه إجابات افتراضية بناءً على السياق، يمكنك تعديلها بعد الاستماع للصوت
  const correctAnswers = [
    { 
      leon: "", 
      marie: "des rouleaux de fruits de mer",  // ثابت
      pierre: "une salade verte",  // ثابت
      bette: "" 
    },
    { 
      leon: "des pâtes",  // ثابت
      marie: "", 
      pierre: "de la ratatouille", 
      bette: "" 
    },
    { 
      leon: "du jus d’orange",  // ثابت
      marie: "de l’eau minérale",  // ثابت
      pierre: "du jus de raisin et puis, café noir",  // ثابت
      bette: "un café au lait"  // ثابت
    },
    { 
      leon: "gâteau", 
      marie: "tarte", 
      pierre: "glace", 
      bette: "une crème brulée"  // ثابت
    },
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
        key => fixedValues[i][key] === "" && !row[key].trim()
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

        if (fixedValues[i][key] !== "") {
          correctCount++; // خانة ثابتة = صحيحة (غير فارغة في fixedValues)
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
    // تعبئة فقط الخلايا الفارغة (التي يجب على الطالب ملؤها)
    const filledRows = rows.map((row, rowIndex) => {
      const newRow = { ...row };
      Object.keys(newRow).forEach(key => {
        if (fixedValues[rowIndex][key] === "") {
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
        leon: "",
        marie: "",
        pierre: "",
        bette: ""
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
        <span className="ex-A" style={{ backgroundColor: "#f38180" }}>D</span>
        <span className="number-of-q">4</span>
        Écoute et écris la bonne réponse.
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

      {/* ===== TABLE ===== */}
      <div className="nationality-table-container">
        <table className="nationality-table">
          <thead>
            <tr className="nationality-table-header">
              <th></th>
              <th>Léon</th>
              <th>Marie</th>
              <th>Pierre</th>
              <th>Bette</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {/* Row Header */}
                <td className="nationality-table-cell fixed-cell">
                  {rowIndex === 0 && "Comme entrée"}
                  {rowIndex === 1 && "Comme plat"}
                  {rowIndex === 2 && "Comme boisson"}
                  {rowIndex === 3 && "Comme dessert"}
                </td>

                {/* Input Cells */}
                {["leon", "marie", "pierre", "bette"].map((col) => {
                  const isFixed = fixedValues[rowIndex][col] !== "";
                  return (
                    <td key={col} className="nationality-table-cell">
                      {isFixed ? (
                        // خلية ثابتة (غير قابلة للتعديل)
                        <div className="nationality-table-fixed">
                          {fixedValues[rowIndex][col]}
                        </div>
                      ) : (
                        // خلية قابلة للكتابة
                        <input
                          className="nationality-table-input"
                          value={row[col]}
                          onChange={(e) =>
                            handleChange(rowIndex, col, e.target.value)
                          }
                          placeholder="Écrivez ici"
                        />
                      )}
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