import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import page5_CD2 from "../../../assets/U5Audio/u5saq2.mp3";
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
  { start:5.21, end: 8.8, text: "Grand prix A1, unité 5" },
  { start:8.8, end: 9.3, text: "les repas" },
  { start:9.3, end: 11.4, text: "Section A" },
  { start:11.4, end: 14.9, text: "le petit déjeuner. Exercice 3" },
  { start:14.99, end: 16.6, text: "écoute les personnages qui" },
  { start:16.6, end: 18.7, text: "décrivent leur petit déjeuner." },
  { start:18.78, end: 20.9, text: "Coche la case correspondante" },
  { start:23.0, end: 23.8, text: "Bonjour à tous," },
  { start:23.8, end: 25.5, text: "je m'appelle Claire. Pour moi," },
  { start:25.5, end: 26.8, text: "le petit déjeuner est le plus" },
  { start:26.8, end: 28.5, text: "important repas de la journée." },
  { start:28.5, end: 29.8, text: "C'est pourquoi je prends" },
  { start:29.8, end: 30.8, text: "des céréales" },
  { start:30.8, end: 32.4, text: "du lait et un croissant avec" },
  { start:32.4, end: 33.4, text: "une tasse de café." },
  { start:35.75, end: 37.3, text: "Moi, je suis Maxime." },
  { start:37.3, end: 38.5, text: "Mon petit déjeuner" },
  { start:38.55, end: 39.4, text: "est très simple." },
  { start:39.4, end: 40.9, text: "Je prends du café" },
  { start:40.9, end: 41.7, text: "et des tartines." },
  { start:43.8, end: 45.14, text: "Je m'appelle Marie et pour" },
  { start:45.150, end: 46.129, text: "mon petit-déjeuner" },
  { start:46.129, end: 47.460, text: "je prends souvent des croissants" },
  { start:47.460, end: 49.4, text: "avec du jus d'orange et mon ami" },
  { start:49.4, end: 51.0, text: "Antoine prend la même chose." },
  { start:53.0, end: 55.0, text: "Nous sommes la famille de Léo et" },
  { start:55.0, end: 57.14, text: "pour notre petit-déjeuner..." },
  { start:57.150, end: 58.720, text: "Nous prenons des céréales" },
  { start:58.720, end: 60.0, text: "du lait, des croissants" },
  { start:60., end: 61.5, text: "du beurre..." },
  { start:61.5, end: 63.18, text: "Des œufs à la coque et du café." },
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
        <span className="ex-A" style={{ backgroundColor: "#f38180" }}>A</span>
        <span className="number-of-q">3</span>{" "}
     Écoute les personnages qui décrivent leur
petit-déjeuner. <br /> Coche la case correspondante.
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