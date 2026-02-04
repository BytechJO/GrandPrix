import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import page5_CD2 from "../../../assets/U7Audio/u7saq3.mp3"; // استبدل هذا الملف إذا كان هناك ملف صوتي آخر للتمرين الجديد
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

  // قد تحتاج إلى تحديث التسميات التوضيحية بناءً على الملف الصوتي الجديد
  const captions = [
     { start: 5.50, end: 6.64, text: "Grand prix A1," },
  { start: 7.10, end: 8.12, text: "unité 7," },
  { start: 8.44, end: 8.94, text: "les loisirs." },
  { start: 9.76, end: 10.52, text: "Section A," },
  { start: 11.20, end: 11.86, text: "mes loisirs." },
  { start: 12.61, end: 13.54, text: "Exercice 3." },
  { start: 14.30, end: 16.42, text: "Écoute et complète le tableau." },

  { start: 18.70, end: 20.38, text: "Il y a beaucoup de choses que j'aime faire," },
  { start: 20.61, end: 22.58, text: "mais mon loisir préféré," },
  { start: 23.02, end: 23.38, text: "c'est la lecture." },
  { start: 24.36, end: 24.92, text: "J'adore lire," },
  { start: 25.66, end: 27.50, text: "découvrir des histoires intéressantes" },
  { start: 27.50, end: 28.10, text: "à chaque page." },
  { start: 28.98, end: 30.50, text: "Je lis chaque jour pendant deux heures." },
  { start: 31.26, end: 33.66, text: "C'est un loisir qui peut se pratiquer à l'intérieur" },
  { start: 34.08, end: 34.70, text: "ou en plein air." },

  { start: 36.99, end: 38.22, text: "Moi, j'aime bien être en" },
  { start: 38.22, end: 40.28, text: "plein air et découvrir des choses nouvelles." },
  { start: 40.80, end: 43.42, text: "Voilà pourquoi mon loisir préféré est la randonnée." },
  { start: 44.16, end: 46.74, text: "Je peux voir la beauté de la nature et des animaux." },
  { start: 47.07, end: 49.62, text: "Je fais de la randonnée le samedi avec mes amis." },

  { start: 51.54, end: 52.14, text: "J'adore l'eau." },
  { start: 52.86, end: 53.84, text: "J'aime la natation," },
  { start: 54.28, end: 55.44, text: "mais je préfère la pêche." },
  { start: 55.90, end: 57.00, text: "C'est mon loisir préféré." },
  { start: 57.90, end: 60.06, text: "J'aime le calme de l'eau et la nature." },
  { start: 60.60, end: 61.88, text: "J'aime attendre les poissons." },
  { start: 61.88, end: 64.98, text: "Je pêche toujours le dimanche avec mes frères." },
    // أضف بقية التسميات التوضيحية هنا حسب الملف الصوتي الفعلي
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
  const TOTAL_ROWS = 3; // Gustave, Adèle, Oliver

  const [rows, setRows] = useState(
    Array(TOTAL_ROWS).fill().map(() => ({
      loisir: "",
      interieur: "",
      pleinAir: "",
      quand: "",
      avecQui: ""
    }))
  );

  /* ================= FIXED CELLS (الخانات المعبأة مسبقاً) ================= */
  const fixedValues = [
    { 
      loisir: "", 
      interieur: "", 
      pleinAir: "", 
      quand: "", 
      avecQui: "" 
    },
    { 
      loisir: "", 
      interieur: "", 
      pleinAir: "", 
      quand: "", 
      avecQui: "" 
    },
    { 
      loisir: "", 
      interieur: "", 
      pleinAir: "", 
      quand: "", 
      avecQui: "" 
    },
  ];

  /* ================= CORRECT ANSWERS ================= */
  const correctAnswers = [
    { 
      loisir: "la lecture", 
      interieur: "en salle", 
      pleinAir: "en plein air", 
      quand: "pendant 2 heures chaque jour", 
      avecQui: "" 
    },
    { 
      loisir: "la randonnée", 
      interieur: "", 
      pleinAir: "en plein air", 
      quand: "samedi", 
      avecQui: "avec mes amies" 
    },
    { 
      loisir: "la pêche", 
      interieur: "", 
      pleinAir: "en plein air", 
      quand: "dimanche", 
      avecQui: "avec mes frères" 
    },
  ];

  /* ================= الخلايا التي يجب تعبئتها ================= */
  // خلية يجب تعبئتها إذا كانت موجودة في correctAnswers وغير موجودة في fixedValues
  const shouldBeFilled = (rowIndex, field) => {
    return correctAnswers[rowIndex][field] !== "" && fixedValues[rowIndex][field] === "";
  };

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (rowIndex, field, value) => {
    // السماح بالكتابة فقط في الخلايا التي يجب تعبئتها
    if (!shouldBeFilled(rowIndex, field)) {
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

    // 🔍 التحقق من التعبئة (فقط الخلايا التي يجب تعبئها)
    let hasEmpty = false;
    
    rows.forEach((row, i) => {
      Object.keys(row).forEach(key => {
        // فقط الخلايا التي يجب تعبئها
        if (shouldBeFilled(i, key) && !row[key].trim()) {
          hasEmpty = true;
        }
      });
    });

    if (hasEmpty) {
      ValidationAlert.info("Attention!", "Veuillez remplir toutes les cases requises du tableau.");
      return;
    }

    // ✅ التصحيح
    rows.forEach((row, i) => {
      Object.keys(row).forEach(key => {
        // نحسب فقط الخلايا التي يجب تعبئتها
        if (shouldBeFilled(i, key)) {
          total++;
          
          const userAnswer = row[key].trim().toLowerCase();
          const correctAnswer = correctAnswers[i][key].toLowerCase();
          
          if (userAnswer === correctAnswer) {
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
    // تعبئة فقط الخلايا التي يجب تعبئتها
    const filledRows = rows.map((row, rowIndex) => {
      const newRow = { ...row };
      Object.keys(newRow).forEach(key => {
        if (shouldBeFilled(rowIndex, key)) {
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
        loisir: "",
        interieur: "",
        pleinAir: "",
        quand: "",
        avecQui: ""
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
                <span style={{ backgroundColor: "#cf7230", color: "#white" }} className="ex-A">Aِ</span>
                <span style={{ color: "black" }} className="number-of-q">3</span>
           Écoute et complète le tableau.
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

      {/* ===== TABLE الجديد حسب الصورة ===== */}
      <div className="nationality-table-cont" style={{ width: "60%", marginLeft:"5%" }}>
        <table className="nationality-table" style={{ width: "100%" }}>
          <thead>
            <tr className="nationality-table-header">
              <th>Nom</th>
              <th>Loisir</th>
              <th>À l'intérieur</th>
              <th>En plein air</th>
              <th>Quand ?</th>
              <th>Avec qui ?</th>
            </tr>
          </thead>

          <tbody>
            {/* الصف الأول: Gustave */}
            <tr>
              <td className="nationality-table-cell" style={{ fontWeight: "bold", textAlign: "center" }}>
                Gustave
              </td>
              <td className="nationality-table-cell">
                <input
                  className="nationality-table-input"
                  value={shouldBeFilled(0, "loisir") ? rows[0].loisir : fixedValues[0].loisir}
                  onChange={(e) => handleChange(0, "loisir", e.target.value)}
                  placeholder={shouldBeFilled(0, "loisir") ? "Écrivez ici" : ""}
                  readOnly={!shouldBeFilled(0, "loisir")}
                  style={{ 
                    width: "90%",
                    backgroundColor: shouldBeFilled(0, "loisir") ? "" : "#f0f0f0",
                    cursor: shouldBeFilled(0, "loisir") ? "text" : "not-allowed"
                  }}
                />
              </td>
              <td className="nationality-table-cell">
                <input
                  className="nationality-table-input"
                  value={shouldBeFilled(0, "interieur") ? rows[0].interieur : fixedValues[0].interieur}
                  onChange={(e) => handleChange(0, "interieur", e.target.value)}
                  placeholder={shouldBeFilled(0, "interieur") ? "Écrivez ici" : ""}
                  readOnly={!shouldBeFilled(0, "interieur")}
                  style={{ 
                    width: "90%",
                    backgroundColor: shouldBeFilled(0, "interieur") ? "" : "#f0f0f0",
                    cursor: shouldBeFilled(0, "interieur") ? "text" : "not-allowed"
                  }}
                />
              </td>
              <td className="nationality-table-cell">
                <input
                  className="nationality-table-input"
                  value={shouldBeFilled(0, "pleinAir") ? rows[0].pleinAir : fixedValues[0].pleinAir}
                  onChange={(e) => handleChange(0, "pleinAir", e.target.value)}
                  placeholder={shouldBeFilled(0, "pleinAir") ? "Écrivez ici" : ""}
                  readOnly={!shouldBeFilled(0, "pleinAir")}
                  style={{ 
                    width: "90%",
                    backgroundColor: shouldBeFilled(0, "pleinAir") ? "" : "#f0f0f0",
                    cursor: shouldBeFilled(0, "pleinAir") ? "text" : "not-allowed"
                  }}
                />
              </td>
              <td className="nationality-table-cell">
                <input
                  className="nationality-table-input"
                  value={shouldBeFilled(0, "quand") ? rows[0].quand : fixedValues[0].quand}
                  onChange={(e) => handleChange(0, "quand", e.target.value)}
                  placeholder={shouldBeFilled(0, "quand") ? "Écrivez ici" : ""}
                  readOnly={!shouldBeFilled(0, "quand")}
                  style={{ 
                    width: "90%",
                    backgroundColor: shouldBeFilled(0, "quand") ? "" : "#f0f0f0",
                    cursor: shouldBeFilled(0, "quand") ? "text" : "not-allowed"
                  }}
                />
              </td>
              <td className="nationality-table-cell">
                <input
                  className="nationality-table-input"
                  value={shouldBeFilled(0, "avecQui") ? rows[0].avecQui : fixedValues[0].avecQui}
                  onChange={(e) => handleChange(0, "avecQui", e.target.value)}
                  placeholder={shouldBeFilled(0, "avecQui") ? "Écrivez ici" : ""}
                  readOnly={!shouldBeFilled(0, "avecQui")}
                  style={{ 
                    width: "90%",
                    backgroundColor: shouldBeFilled(0, "avecQui") ? "" : "#f0f0f0",
                    cursor: shouldBeFilled(0, "avecQui") ? "text" : "not-allowed"
                  }}
                />
              </td>
            </tr>
            
            {/* الصف الثاني: Adèle */}
            <tr>
              <td className="nationality-table-cell" style={{ fontWeight: "bold", textAlign: "center" }}>
                Adèle
              </td>
              <td className="nationality-table-cell">
                <input
                  className="nationality-table-input"
                  value={shouldBeFilled(1, "loisir") ? rows[1].loisir : fixedValues[1].loisir}
                  onChange={(e) => handleChange(1, "loisir", e.target.value)}
                  placeholder={shouldBeFilled(1, "loisir") ? "Écrivez ici" : ""}
                  readOnly={!shouldBeFilled(1, "loisir")}
                  style={{ 
                    width: "90%",
                    backgroundColor: shouldBeFilled(1, "loisir") ? "" : "#f0f0f0",
                    cursor: shouldBeFilled(1, "loisir") ? "text" : "not-allowed"
                  }}
                />
              </td>
              <td className="nationality-table-cell">
                <input
                  className="nationality-table-input"
                  value={shouldBeFilled(1, "interieur") ? rows[1].interieur : fixedValues[1].interieur}
                  onChange={(e) => handleChange(1, "interieur", e.target.value)}
                  placeholder={shouldBeFilled(1, "interieur") ? "Écrivez ici" : ""}
                  readOnly={!shouldBeFilled(1, "interieur")}
                  style={{ 
                    width: "90%",
                    backgroundColor: shouldBeFilled(1, "interieur") ? "" : "#f0f0f0",
                    cursor: shouldBeFilled(1, "interieur") ? "text" : "not-allowed"
                  }}
                />
              </td>
              <td className="nationality-table-cell">
                <input
                  className="nationality-table-input"
                  value={shouldBeFilled(1, "pleinAir") ? rows[1].pleinAir : fixedValues[1].pleinAir}
                  onChange={(e) => handleChange(1, "pleinAir", e.target.value)}
                  placeholder={shouldBeFilled(1, "pleinAir") ? "Écrivez ici" : ""}
                  readOnly={!shouldBeFilled(1, "pleinAir")}
                  style={{ 
                    width: "90%",
                    backgroundColor: shouldBeFilled(1, "pleinAir") ? "" : "#f0f0f0",
                    cursor: shouldBeFilled(1, "pleinAir") ? "text" : "not-allowed"
                  }}
                />
              </td>
              <td className="nationality-table-cell">
                <input
                  className="nationality-table-input"
                  value={shouldBeFilled(1, "quand") ? rows[1].quand : fixedValues[1].quand}
                  onChange={(e) => handleChange(1, "quand", e.target.value)}
                  placeholder={shouldBeFilled(1, "quand") ? "Écrivez ici" : ""}
                  readOnly={!shouldBeFilled(1, "quand")}
                  style={{ 
                    width: "90%",
                    backgroundColor: shouldBeFilled(1, "quand") ? "" : "#f0f0f0",
                    cursor: shouldBeFilled(1, "quand") ? "text" : "not-allowed"
                  }}
                />
              </td>
              <td className="nationality-table-cell">
                <input
                  className="nationality-table-input"
                  value={shouldBeFilled(1, "avecQui") ? rows[1].avecQui : fixedValues[1].avecQui}
                  onChange={(e) => handleChange(1, "avecQui", e.target.value)}
                  placeholder={shouldBeFilled(1, "avecQui") ? "Écrivez ici" : ""}
                  readOnly={!shouldBeFilled(1, "avecQui")}
                  style={{ 
                    width: "90%",
                    backgroundColor: shouldBeFilled(1, "avecQui") ? "" : "#f0f0f0",
                    cursor: shouldBeFilled(1, "avecQui") ? "text" : "not-allowed"
                  }}
                />
              </td>
            </tr>
            
            {/* الصف الثالث: Oliver */}
            <tr>
              <td className="nationality-table-cell" style={{ fontWeight: "bold", textAlign: "center" }}>
                Oliver
              </td>
              <td className="nationality-table-cell">
                <input
                  className="nationality-table-input"
                  value={shouldBeFilled(2, "loisir") ? rows[2].loisir : fixedValues[2].loisir}
                  onChange={(e) => handleChange(2, "loisir", e.target.value)}
                  placeholder={shouldBeFilled(2, "loisir") ? "Écrivez ici" : ""}
                  readOnly={!shouldBeFilled(2, "loisir")}
                  style={{ 
                    width: "90%",
                    backgroundColor: shouldBeFilled(2, "loisir") ? "" : "#f0f0f0",
                    cursor: shouldBeFilled(2, "loisir") ? "text" : "not-allowed"
                  }}
                />
              </td>
              <td className="nationality-table-cell">
                <input
                  className="nationality-table-input"
                  value={shouldBeFilled(2, "interieur") ? rows[2].interieur : fixedValues[2].interieur}
                  onChange={(e) => handleChange(2, "interieur", e.target.value)}
                  placeholder={shouldBeFilled(2, "interieur") ? "Écrivez ici" : ""}
                  readOnly={!shouldBeFilled(2, "interieur")}
                  style={{ 
                    width: "90%",
                    backgroundColor: shouldBeFilled(2, "interieur") ? "" : "#f0f0f0",
                    cursor: shouldBeFilled(2, "interieur") ? "text" : "not-allowed"
                  }}
                />
              </td>
              <td className="nationality-table-cell">
                <input
                  className="nationality-table-input"
                  value={shouldBeFilled(2, "pleinAir") ? rows[2].pleinAir : fixedValues[2].pleinAir}
                  onChange={(e) => handleChange(2, "pleinAir", e.target.value)}
                  placeholder={shouldBeFilled(2, "pleinAir") ? "Écrivez ici" : ""}
                  readOnly={!shouldBeFilled(2, "pleinAir")}
                  style={{ 
                    width: "90%",
                    backgroundColor: shouldBeFilled(2, "pleinAir") ? "" : "#f0f0f0",
                    cursor: shouldBeFilled(2, "pleinAir") ? "text" : "not-allowed"
                  }}
                />
              </td>
              <td className="nationality-table-cell">
                <input
                  className="nationality-table-input"
                  value={shouldBeFilled(2, "quand") ? rows[2].quand : fixedValues[2].quand}
                  onChange={(e) => handleChange(2, "quand", e.target.value)}
                  placeholder={shouldBeFilled(2, "quand") ? "Écrivez ici" : ""}
                  readOnly={!shouldBeFilled(2, "quand")}
                  style={{ 
                    width: "90%",
                    backgroundColor: shouldBeFilled(2, "quand") ? "" : "#f0f0f0",
                    cursor: shouldBeFilled(2, "quand") ? "text" : "not-allowed"
                  }}
                />
              </td>
              <td className="nationality-table-cell">
                <input
                  className="nationality-table-input"
                  value={shouldBeFilled(2, "avecQui") ? rows[2].avecQui : fixedValues[2].avecQui}
                  onChange={(e) => handleChange(2, "avecQui", e.target.value)}
                  placeholder={shouldBeFilled(2, "avecQui") ? "Écrivez ici" : ""}
                  readOnly={!shouldBeFilled(2, "avecQui")}
                  style={{ 
                    width: "90%",
                    backgroundColor: shouldBeFilled(2, "avecQui") ? "" : "#f0f0f0",
                    cursor: shouldBeFilled(2, "avecQui") ? "text" : "not-allowed"
                  }}
                />
              </td>
            </tr>
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