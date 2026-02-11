import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import page5_CD2 from "../../../assets/U6Audio/u6saq6.mp3";
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
 { start: 5.53, end: 6.57, text: "Rempris A1," },
  { start: 6.94, end: 7.97, text: "unité 6," },
  { start: 8.45, end: 8.87, text: "le temps." },
  { start: 9.57, end: 10.30, text: "Section A." },
  { start: 11.07, end: 12.19, text: "Quel temps fait-il ?" },
  { start: 12.95, end: 13.95, text: "Exercice 6." },
  { start: 14.33, end: 16.55, text: "Écoute et écris la bonne réponse." },

  { start: 19.04, end: 19.65, text: "Aujourd'hui," },
  { start: 19.83, end: 20.77, text: "c'est le 16 avril." },

  { start: 21.05, end: 22.85, text: "Mauvais temps dans l'est de la France" },
  { start: 22.95, end: 24.45, text: "avec de la pluie à Lyon," },
  { start: 24.91, end: 26.29, text: "de la neige à Grenoble" },
  { start: 26.29, end: 27.59, text: "et du vent à Strasbourg." },
  { start: 28.61, end: 31.25, text: "La température dans cette région est de 10 degrés." },

  { start: 31.95, end: 32.53, text: "Dans l'ouest," },
  { start: 32.69, end: 33.31, text: "à Bordeaux," },
  { start: 33.31, end: 34.39, text: "il y a du soleil." },
  { start: 34.62, end: 35.87, text: "Il fait 28 degrés." },

  { start: 36.29, end: 37.53, text: "Dans le sud de la France," },
  { start: 37.59, end: 38.39, text: "il fait chaud," },
  { start: 38.39, end: 39.53, text: "surtout à Toulouse." },
  { start: 39.77, end: 41.13, text: "Il fait 27 degrés." },

  { start: 41.75, end: 42.39, text: "Dans le nord," },
  { start: 42.39, end: 44.03, text: "le temps est mauvais" },
  { start: 44.03, end: 45.27, text: "et il y a de la neige à Roubaix." },
  { start: 45.27, end: 46.69, text: "Il fait moins 5 degrés." }
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
        <span className="ex-A" style={{ backgroundColor: "#d7a965" }}>A</span>
        <span className="number-of-q">6</span>{" "}
Écoute et écris la bonne réponse.    </header>

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