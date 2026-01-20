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

  // الترجمة الجديدة للتمرين الجديد
  const captions = [
    { start: 5.1, end: 7.9, text: "Grand Prix A1, Unité 2," },
    { start: 7.9, end: 9.2, text: "À l'école," },
    { start: 9.2, end: 10.6, text: "Section D," },
    { start: 10.6, end: 12.0, text: "Un rendez-vous," },
    { start: 12.0, end: 13.6, text: "Exercice 3," },
    { start: 13.9, end: 15.5, text: "Écoute les personnages qui" },
    { start: 15.5, end: 17.7, text: "décrivent leur petit-déjeuner." },
    { start: 17.7, end: 19.4, text: "Coche la case correspondante." },
    { start: 21.7, end: 23.0, text: "Claire:" },
    { start: 23.0, end: 24.0, text: "Pour le petit-déjeuner," },
    { start: 24.0, end: 25.7, text: "je prends toujours un café" },
    { start: 25.7, end: 26.7, text: "et des tartines avec" },
    { start: 26.7, end: 27.8, text: "du beurre et de la confiture." },
    { start: 28.8, end: 29.9, text: "Maxime:" },
    { start: 29.9, end: 31.1, text: "Moi, je préfère les céréales" },
    { start: 31.1, end: 31.9, text: "avec du lait et un jus" },
    { start: 31.9, end: 32.7, text: "d'orange frais." },
    { start: 32.7, end: 34.5, text: "Marie et Antoine:" },
    { start: 34.5, end: 35.8, text: "Nous prenons des croissants" },
    { start: 35.8, end: 37.7, text: "et du café le matin." },
    { start: 37.7, end: 39.2, text: "Parfois aussi un œuf à la coque." },
    { start: 39.2, end: 40.3, text: "La famille de Léo:" },
    { start: 40.3, end: 41.3, text: "Chez nous, on boit du lait" },
    { start: 41.3, end: 42.8, text: "et on mange des céréales" },
    { start: 42.8, end: 44.7, text: "ou des tartines avec du beurre." },
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

  /* ================= STATE FOR CHECKBOXES ================= */
  const [checks, setChecks] = useState({
    Claire: { cafe: false, jus: false, tartines: false, croissants: false, beurre: false, cereales: false, lait: false, oeuf: false },
    Maxime: { cafe: false, jus: false, tartines: false, croissants: false, beurre: false, cereales: false, lait: false, oeuf: false },
    "Marie et Antoine": { cafe: false, jus: false, tartines: false, croissants: false, beurre: false, cereales: false, lait: false, oeuf: false },
    "La famille de Léo": { cafe: false, jus: false, tartines: false, croissants: false, beurre: false, cereales: false, lait: false, oeuf: false }
  });

  /* ================= CORRECT ANSWERS ================= */
  const correctAnswers = {
    Claire: { cafe: true, jus: false, tartines: false, croissants: true, beurre: false, cereales: true, lait: true, oeuf: false },
    Maxime: { cafe: true, jus: false, tartines: true, croissants: false, beurre: false, cereales: false, lait: false, oeuf: false },
    "Marie et Antoine": { cafe: false, jus: true, tartines: false, croissants: true, beurre: false, cereales: false, lait: false, oeuf: false },
    "La famille de Léo": { cafe: true, jus: false, tartines: false, croissants: true, beurre: true, cereales: true, lait: true, oeuf: true }
  };

  /* ================= HANDLE CHECKBOX CHANGE ================= */
  const handleCheckChange = (person, item) => {
    setChecks({
      ...checks,
      [person]: {
        ...checks[person],
        [item]: !checks[person][item]
      }
    });
  };

  /* ================= CHECK ANSWER ================= */
  const checkAnswer = () => {
    let correctCount = 0;
    let totalCount = 0;

    // التحقق من جميع الخانات
    Object.keys(checks).forEach(person => {
      Object.keys(checks[person]).forEach(item => {
        totalCount++;
        if (checks[person][item] === correctAnswers[person][item]) {
          correctCount++;
        }
      });
    });

    // التحقق إذا كانت هناك خانات فارغة
    const hasEmpty = Object.values(checks).some(personChecks => 
      Object.values(personChecks).every(value => value === false)
    );

    if (hasEmpty) {
      ValidationAlert.info("Attention!", "Veuillez cocher au moins une case pour chaque personne.");
      return;
    }

    const color =
      correctCount === totalCount ? "green" :
        correctCount === 0 ? "red" : "orange";

    const msg = `
      <div style="font-size:20px;text-align:center">
        <span style="color:${color};font-weight:bold">
          Score : ${correctCount} / ${totalCount}
        </span>
      </div>
    `;

    if (correctCount === totalCount) ValidationAlert.success(msg);
    else if (correctCount === 0) ValidationAlert.error(msg);
    else ValidationAlert.warning(msg);
  };

  /* ================= SHOW ANSWERS ================= */
  const showAnswerFunc = () => {
    setChecks(correctAnswers);
  };

  /* ================= RESET ================= */
  const resetExercise = () => {
    setChecks({
      Claire: { cafe: false, jus: false, tartines: false, croissants: false, beurre: false, cereales: false, lait: false, oeuf: false },
      Maxime: { cafe: false, jus: false, tartines: false, croissants: false, beurre: false, cereales: false, lait: false, oeuf: false },
      "Marie et Antoine": { cafe: false, jus: false, tartines: false, croissants: false, beurre: false, cereales: false, lait: false, oeuf: false },
      "La famille de Léo": { cafe: false, jus: false, tartines: false, croissants: false, beurre: false, cereales: false, lait: false, oeuf: false }
    });
    resetAudio();
  };

  /* ================= JSX ================= */
  const items = [
    { key: 'cafe', label: 'du café' },
    { key: 'jus', label: 'du jus d\'orange' },
    { key: 'tartines', label: 'des tartines' },
    { key: 'croissants', label: 'des croissants' },
    { key: 'beurre', label: 'du beurre' },
    { key: 'cereales', label: 'des céréales' },
    { key: 'lait', label: 'du lait' },
    { key: 'oeuf', label: 'un œuf à la coque' }
  ];

  const persons = ['Claire', 'Maxime', 'Marie et Antoine', 'La famille de Léo'];

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
        <span className="number-of-q">3</span>
        Écoute les personnages qui décrivent leur petit-déjeuner. Coche la case correspondante.
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
              {persons.map(person => (
                <th key={person}>{person}</th>
              ))}
            </tr>
          </thead>

          <tbody>
            {items.map(item => (
              <tr key={item.key}>
                <td className="nationality-table-cell" style={{ textAlign: "left", fontWeight: "bold" }}>
                  {item.label}
                </td>
                {persons.map(person => (
                  <td key={`${person}-${item.key}`} className="nationality-table-cell">
                    <input
                      type="checkbox"
                      checked={checks[person][item.key]}
                      onChange={() => handleCheckChange(person, item.key)}
                      className="checkbox-input"
                      style={{
                        width: "20px",
                        height: "20px",
                        cursor: "pointer"
                      }}
                    />
                  </td>
                ))}
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