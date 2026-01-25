import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import page5_CD2 from "../../../assets/U2Audio/U2SdQ4.mp3";
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
    { start: 5.1, end: 7.9, text: "Grand Prix A1, Unité 2," },
    { start: 7.9, end: 9.2, text: "À l'école," },
    { start: 9.2, end: 10.6, text: "Section D," },
    { start: 10.6, end: 12.0, text: "Un rendez-vous," },
    { start: 12.0, end: 13.6, text: "Exercice 4," },
    { start: 13.9, end: 15.5, text: "Écoute la conversation" },
    { start: 15.5, end: 17.7, text: "entre Maya et Doreen," },
    { start: 17.7, end: 19.4, text: "puis écris l'information" },
    { start: 19.4, end: 20.2, text: "manquante." },
    { start: 21.7, end: 23.0, text: "Maya." },
    { start: 23.0, end: 24.0, text: "Est-Ce que tu as choisi ton." },
    { start: 24.0, end: 25.7, text: "Club ?" },
    { start: 25.7, end: 26.7, text: "Oui," },
    { start: 26.7, end: 27.8, text: "je veux m'inscrire au club de" },
    { start: 27.8, end: 28.8, text: "sculpture et de théâtre." },
    { start: 28.8, end: 29.9, text: "Je pense que ce sera très" },
    { start: 29.9, end: 31.1, text: "intéressant et le prof est très." },
    { start: 31.1, end: 31.9, text: "Beau. Et toi." },
    { start: 32.7, end: 34.5, text: "Je ne suis pas sûre." },
    { start: 34.5, end: 35.8, text: "Je veux m'inscrire au cours de" },
    { start: 35.8, end: 37.7, text: "natation car j'aime le sport et" },
    { start: 37.7, end: 39.2, text: "le prof est très exigeant." },
    { start: 39.2, end: 40.3, text: "Je vais peut-être aussi" },
    { start: 40.3, end: 41.3, text: "m'inscrire au club de" },
    { start: 41.3, end: 42.8, text: "gymnastique avec Léla." },
    { start: 42.8, end: 44.7, text: "Mais je veux aussi aller au club" },
    { start: 44.7, end: 46.6, text: "d'artisanat et. De sculpture." },
    { start: 46.6, end: 48.2, text: "À quelle heure commence le." },
    { start: 48.2, end: 48.5, text: "Cours de." },
    { start: 48.5, end: 50.3, text: "Natation ?" },
    { start: 50.3, end: 52.4, text: "Le cours commence à 16h30 et se." },
    { start: 52.4, end: 54.6, text: "Termine à 17h30." },
    { start: 54.6, end: 56.7, text: "Bon, viens avec moi au club de." },
    { start: 56.7, end: 58.4, text: "Sculpture et tu peux…." },
    { start: 58.4, end: 59.9, text: "À quelle heure" },
    { start: 59.9, end: 60.1, text: "Commence le club de." },
    { start: 60.1, end: 62.0, text: "Sculpture ?" },
    { start: 62.0, end: 63.9, text: "À 15h. Et au même moment," },
    { start: 63.9, end: 65.1, text: "il y a le club d'artisanat." },
    { start: 65.1, end: 66.2, text: "Tu peux aller à ces deux clubs." },
    { start: 66.2, end: 66.9, text: "Et faire ton choix." },
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
        <span className="ex-A" style={{ backgroundColor: "#df4f89" }}>D</span>
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