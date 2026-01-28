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

  // حالة جديدة لحقل اليوم
  const [dateInput, setDateInput] = useState("");

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
  const TOTAL_ROWS = 2;

  const [rows, setRows] = useState(
    Array(TOTAL_ROWS).fill().map(() => ({
      bordeaux: "",
      toulouse: "",
      lyon: "",
      strasbourg: "",
      grenoble: "",
      roubaix: ""
    }))
  );

  /* ================= FIXED CELLS (الخانات المعبأة مسبقاً) ================= */
  const fixedValues = [
    { 
      bordeaux: "Il y a du soleil.", 
      toulouse: "", 
      lyon: "", 
      strasbourg: "", 
      grenoble: "", 
      roubaix: "" 
    },
    { 
      bordeaux: "28", 
      toulouse: "", 
      lyon: "", 
      strasbourg: "", 
      grenoble: "", 
      roubaix: "" 
    },
  ];

  /* ================= CORRECT ANSWERS (للخانات الفارغة فقط) ================= */
  const correctAnswers = [
    { 
      bordeaux: "", // ثابتة بالفعل
      toulouse: "fait chaud",  
      lyon: "pleut",  
      strasbourg: "y a du vent", 
      grenoble: "neige ", 
      roubaix: "neige"  
    },
    { 
      bordeaux: "", // ثابتة بالفعل
      toulouse: "27",  
      lyon: "10",  
      strasbourg: "10", 
      grenoble: "10", 
      roubaix: "-5"  
    },
  ];

  // الإجابة الصحيحة لحقل التاريخ
  const correctDateAnswer = "16"; // يمكنك تغيير هذا حسب ما تريد

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (rowIndex, field, value) => {
    const updated = [...rows];
    updated[rowIndex][field] = value;
    setRows(updated);
  };

  const handleDateChange = (value) => {
    setDateInput(value);
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

    // التحقق من حقل التاريخ
    if (!dateInput.trim()) {
      ValidationAlert.info("Attention!", "Veuillez remplir la date.");
      return;
    }

    if (hasEmpty) {
      ValidationAlert.info("Attention!", "Veuillez remplir toutes les cases du tableau.");
      return;
    }

    // ✅ التصحيح - بداية بحقل التاريخ
    total++;
    if (dateInput.trim().toLowerCase() === correctDateAnswer.toLowerCase()) {
      correctCount++;
    }

    // ✅ التصحيح - جدول الطقس
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
    // تعبئة حقل التاريخ
    setDateInput(correctDateAnswer);
    
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
    setDateInput("");
    setRows(
      Array(TOTAL_ROWS).fill().map(() => ({
        bordeaux: "",
        toulouse: "",
        lyon: "",
        strasbourg: "",
        grenoble: "",
        roubaix: ""
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

      {/* ===== DATE INPUT ===== */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "20px",
        fontSize: "18px",
        width: "100%"
      }}>
        <div style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          backgroundColor: "white",
          padding: "10px 20px",
          borderRadius: "8px",
          boxShadow: "0 2px 4px rgba(0,0,0,0.1)"
        }}>
          <span>Aujourd'hui, c'est le</span>
          <input
            type="text"
            value={dateInput}
            onChange={(e) => handleDateChange(e.target.value)}
            style={{
              width: "60px",
              padding: "5px 10px",
              fontSize: "16px",
              textAlign: "center",
              border: "2px solid #ccc",
              borderRadius: "4px",
              outline: "none"
            }}
            placeholder="__"
          />
          <span>avril.</span>
        </div>
      </div>

      {/* ===== TABLE ===== */}
      <div className="nationality-table-container">
        <table className="nationality-table">
          <thead>
            <tr className="nationality-table-header">
              <th>Ville</th>
              <th>Bordeaux</th>
              <th>Toulouse</th>
              <th>Lyon</th>
              <th>Strasbourg</th>
              <th>Grenoble</th>
              <th>Roubaix</th>
            </tr>
          </thead>

          <tbody>
            {rows.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {/* Row Header */}
                <td className="nationality-table-cell fixed-cell">
                  {rowIndex === 0 && "Temps"}
                  {rowIndex === 1 && "°C"}
                </td>

                {/* Input Cells */}
                {["bordeaux", "toulouse", "lyon", "strasbourg", "grenoble", "roubaix"].map((col) => {
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