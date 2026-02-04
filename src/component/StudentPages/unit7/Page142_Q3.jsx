import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import page5_CD2 from "../../../assets/U7Audio/u7sbq3.mp3";
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

  // تحديث التسميات التوضيحية للتمرين الجديد
  const captions = [
    { start: 0, end: 5, text: "Écoute Charles qui parle de sa journée. Écris l'heure de chaque activité." },
    { start: 5, end: 10, text: "Charles: Bonjour! Je m'appelle Charles..." },
    // أضف المزيد حسب المحتوى الصوتي الفعلي
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
  const ACTIVITIES = [
    "Se lever",
    "Prendre son petit-déjeuner",
    "Aller à l'école",
    "Rentrer à la maison",
    "Faire ses devoirs",
    "Dîner avec sa famille",
    "Faire du sport",
    "Bavarder avec ses amis",
    "Se coucher"
  ];

  const [times, setTimes] = useState(Array(ACTIVITIES.length).fill(""));

  /* ================= الإجابات الصحيحة (مثال - يجب تعديلها حسب الملف الصوتي) ================= */
  const correctAnswers = [
    "6 h 30", // Se lever (مثال من الصورة)
    "7 h ", // Prendre son petit-déjeuner
    "7 h 30", // Aller à l'école
    "3 h ", // Rentrer à la maison
    "3 h ", // Faire ses devoirs
    "6 h ", // Dîner avec sa famille
    "6 h 30", // Faire du sport
    "7 h 45", // Bavarder avec ses amis
    "10 h 45"  // Se coucher
  ];

  /* ================= الخلايا المعبأة مسبقاً ================= */
  const fixedCells = [
    true,  // Se lever - معبأة مسبقاً في الصورة
    false, // Prendre son petit-déjeuner
    false, // Aller à l'école
    false, // Rentrer à la maison
    false, // Faire ses devoirs
    false, // Dîner avec sa famille
    false, // Faire du sport
    false, // Bavarder avec ses amis
    false  // Se coucher
  ];

  /* ================= HANDLE CHANGE ================= */
  const handleChange = (index, value) => {
    if (fixedCells[index]) return; // لا تسمح بالتعديل على الخلايا المعبأة مسبقاً
    
    const updated = [...times];
    updated[index] = value;
    setTimes(updated);
  };

  /* ================= CHECK ANSWER ================= */
  const checkAnswer = () => {
    let correctCount = 0;
    let total = 0;

    // 🔍 التحقق من التعبئة (فقط الخلايا التي يجب تعبئها)
    let hasEmpty = false;
    
    times.forEach((time, i) => {
      if (!fixedCells[i] && !time.trim()) {
        hasEmpty = true;
      }
    });

    if (hasEmpty) {
      ValidationAlert.info("Attention!", "Veuillez remplir toutes les cases vides du tableau.");
      return;
    }

    // ✅ التصحيح
    times.forEach((time, i) => {
      if (!fixedCells[i]) { // نصحح فقط الخلايا التي يجب تعبئها
        total++;
        
        const userAnswer = time.trim().toLowerCase();
        const correctAnswer = correctAnswers[i].toLowerCase();
        
        // مقارنة مرنة للأوقات (تقبل اختلافات طفيفة في التنسيق)
        const normalizeTime = (t) => t.replace(/\s+/g, ' ').trim();
        
        if (normalizeTime(userAnswer) === normalizeTime(correctAnswer)) {
          correctCount++;
        }
      }
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
    const filledTimes = times.map((time, index) => {
      if (fixedCells[index]) {
        return time; // تحافظ على القيم الثابتة
      } else {
        return correctAnswers[index]; // تعبئة الإجابات الصحيحة
      }
    });
    setTimes(filledTimes);
  };

  /* ================= RESET ================= */
  const resetExercise = () => {
    setTimes(Array(ACTIVITIES.length).fill(""));
    resetAudio();
  };

  /* ================= JSX ================= */
  return (
    <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
       <header
                className="header-title-page1 w-full text-left mb-4"
                style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
            >
                <span style={{ backgroundColor: "#cf7230", color: "#white" }} className="ex-A">B</span>
                <span style={{ color: "black" }} className="number-of-q">3</span>
           Écoute Charles qui parle de sa journée. Écris l’heure de chaque activité.
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
      <div className="nationality-table-cont" style={{ width: "60%", marginLeft: "5%" }}>
        <table className="nationality-table" style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead>
            <tr className="nationality-table-header">
              <th style={{ padding: "12px", textAlign: "center", backgroundColor: "#f0f0f0", border: "1px solid #ddd" }}>
                Activité
              </th>
              <th style={{ padding: "12px", textAlign: "center", backgroundColor: "#f0f0f0", border: "1px solid #ddd" }}>
                Heure
              </th>
            </tr>
          </thead>

          <tbody>
            {ACTIVITIES.map((activity, index) => (
              <tr key={index}>
                <td className="nationality-table-cell" style={{ 
                  padding: "12px", 
                  textAlign: "left", 
                  border: "1px solid #ddd",
                  fontWeight: "normal"
                }}>
                  {activity}
                </td>
                <td className="nationality-table-cell" style={{ 
                  padding: "8px", 
                  textAlign: "center", 
                  border: "1px solid #ddd" 
                }}>
                  {fixedCells[index] ? (
                    // الخلايا المعبأة مسبقاً (للقراءة فقط)
                    <div style={{ 
                      fontWeight: "bold", 
                      color: "#333",
                      padding: "8px",
                      backgroundColor: "#f9f9f9"
                    }}>
                      {times[index] || correctAnswers[index]}
                    </div>
                  ) : (
                    // الخلايا القابلة للتعبئة
                    <input
                      className="nationality-table-input"
                      value={times[index]}
                      onChange={(e) => handleChange(index, e.target.value)}
                      style={{ 
                        width: "90%",
                        padding: "8px",
                        fontSize: "16px",
                        textAlign: "center",
                        borderRadius: "4px"
                      }}
                    />
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="spaces"></div>

      {/* ===== BUTTONS ===== */}
      <div className="action-buttons-container" style={{ marginTop: "20px" }}>
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