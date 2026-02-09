import React, { useState, useRef } from "react";
import page5_CD2 from "../../../assets/U5Audio/u5saq5.mp3";
import imgBackground from "../../../assets/unite5pages/SVG/P94Q5.svg";
import { FaPlay, FaPause } from "react-icons/fa";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import "./Page94_Q5.css";

/* =========================
   ANSWERS
========================= */
const correctAnswers = {
  "0-0": "bien",
  "0-1": "thé",
  "1-0": "petitdé jeuner",
  "2-0": "et toi",
  "3-0": "chocolat",
  "4-0": "lait",
  "5-0": "lait",
};

/* =========================
   INPUT GROUPS
========================= */
const inputGroups = [
  {
    id: 0,
    className: "dialog-page99-0",
    spans: ["Salut, maman ! Ça va ", "Je mange des céréales et je prends du"],
    inputsCount: 2,
  },
  {
    id: 1,
    className: "input-page99-1",
    spans: ["Salut, Sara ! Ça va ? Qu’est-ce que tu prends au","?"],
    inputsCount: 1,
  },
  {
    id: 2,
    className: "input-page99-2",
    spans: ["Bonjour, Léo ! Ça va bien, merci,","?"],
    inputsCount: 1,
  },
  {
    id: 3,
    className: "input-page99-3",
    spans: ["Je prends des toasts avec de la confiture d’oranges, du", "chaud et des fruits. Et toi ?"],
    inputsCount: 1,
  },
  {
    id: 4,
    className: "input-page99-4",
    spans: ["Pas mal, merci.", "tu prends au petit-déjeuner ?"],
    inputsCount: 1,
  },
  {
    id: 5,
    className: "input-page99-5",
    spans: ["Des croissants et du"],
    inputsCount: 1,
  },
];

/* =========================
   DIALOG GROUPS (IMAGE)
========================= */
const dialogGroups = [
  {
    id: "d0",
    className: "dialog-page99-01",
    text: ["Salut ! À plus tard."],
  },
  {
    id: "d1",
    className: "dialog-page99-1",
    text: ["Très bien. À plus tard."],
  },
  {
    id: "d2",
    className: "dialog-page99-2",
    text: ["Salut, Marie ! Ça va ?"],
  },
  // {
  //   id: "d3",
  //   className: "dialog-page99-3",
  //   text: ["Salut ! À plus tard."],
  // },
  // {
  //   id: "d4",
  //   className: "dialog-page99-4",
  //   text: ["Bonjour, Léo ! Ça va bien, merci.", "___ ?"],
  // },
  // {
  //   id: "d5",
  //   className: "dialog-page99-5",
  //   text: [
  //     "Je prends des toasts avec",
  //     "de la confiture d’oranges,",
  //     "___ chaud et des fruits.",
  //     "Et toi ?",
  //   ],
  // },
  // {
  //   id: "d6",
  //   className: "dialog-page99-6",
  //   text: ["Salut, Marie ! Ça va ?"],
  // },
  // {
  //   id: "d7",
  //   className: "dialog-page99-7",
  //   text: ["Pas mal, merci."],
  // },
  // {
  //   id: "d8",
  //   className: "dialog-page99-8",
  //   text: ["Tu prends du petit-déjeuner ?"],
  // },
  // {
  //   id: "d9",
  //   className: "dialog-page99-9",
  //   text: ["Des croissants et du ___ ."],
  // },
];

const Page99_Q1_CleanAudio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const [showCaption, setShowCaption] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [inputs, setInputs] = useState({});
  const [score, setScore] = useState(null);

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
  { start:5.21 , end: 6.7, text: "Grand prix A1," },
  { start:6.7 , end: 9.9, text: "unité 5. Les repas." },
  { start:9.94 , end: 11.4, text: "Section A." },
  { start:11.43 , end: 15.0, text: "Le petit déjeuner. Exercice 5." },
  { start:15.05 , end: 17.55, text: "Écoute et écris l'information" },
  { start:17.56 , end: 18.45, text: "manquante." },
  { start:20.56 , end: 21.7, text: "Salut Sarah, ça va ?" },
  { start:21.7 , end: 22.4, text: "Qu'est-ce que tu prends" },
  { start:22.47 , end: 24.0, text: "au petit déjeuner ?" },
  { start:24.0 , end: 26.2, text: "Salut maman, ça va bien." },
  { start:26.2 , end: 27.4, text: "Je mange des céréales" },
  { start:27.4 , end: 29.13, text: "et je prends du thé." },
  { start:29.13 , end: 31.6, text: "Très bien, à plus tard." },
  { start:31.6 , end: 34.2, text: "Salut, à plus tard." },
  { start:35.7 , end: 37.6, text: "Salut Marie, ça va ?" },
  { start:37.6 , end: 39.599, text: "Bonjour Léo, ça va bien" },
  { start:39.6 , end: 41.14, text: "merci et toi ?" },
  { start:41.14 , end: 42.87, text: "Pas mal, merci." },
  { start:42.87 , end: 43.919, text: "Qu'est-ce que tu prends" },
  { start:43.919 , end: 45.3, text: "au petit déjeuner ?" },
  { start:45.3 , end: 47.4, text: "Je prends des toasts avec de" },
  { start:47.4 , end: 48.8, text: "la confiture d'orange," },
  { start:48.8 , end: 50.710, text: "du chocolat chaud et des fruits." },
  { start:50.710 , end: 51.779, text: "Et toi ?" },
  { start:51.779 , end: 53.779, text: "Des croissants et du lait." },
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
  const handleInputChange = (key, value) => {
    setInputs({ ...inputs, [key]: value });
  };

  const checkAnswer = () => {
    let correct = 0;
    Object.keys(correctAnswers).forEach((key) => {
      if ((inputs[key] || "").toLowerCase() === correctAnswers[key]) {
        correct++;
      }
    });
    setScore({ correct, total: Object.keys(correctAnswers).length });
  };

  const showAnswerFunc = () => setInputs(correctAnswers);

  const resetExercise = () => {
    setInputs({});
    setScore(null);
    resetAudio();
    
  };

  const renderInputGroup = (group) =>
    group.spans.map((text, i) => (
      <React.Fragment key={i}>
        <span className="exercise-span-page99">{text}</span>
        {i < group.inputsCount && (
          <input
            className="exercise-input-page99"
            value={inputs[`${group.id}-${i}`] || ""}
            onChange={(e) =>
              handleInputChange(`${group.id}-${i}`, e.target.value)
            }
          />
        )}
      </React.Fragment>
    ));

  return (
    <div className="page-wrapper-page99">
    
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
        <span className="number-of-q">5</span>
     Écoute et et écris l’information manquante.
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

      {score && <ScoreCardEnhanced score={score} />}

      {/* EXERCISE */}
      <div className="exercise-container-page99">
        <img src={imgBackground} alt="exercise" />

        {/* DIALOGS */}
        {dialogGroups.map((dialog) => (
          <div
            key={dialog.id}
            className={`dialog-bubble-page99 ${dialog.className}`}
          >
            {dialog.text.map((line, i) => (
              <p key={i} className="dialog-text-page99">
                {line}
              </p>
            ))}
          </div>
        ))}

        {/* INPUT BUBBLES */}
        {inputGroups.map((group) => (
          <div
            key={group.id}
            className={`dialog-bubble-page99 ${group.className}`}
          >
            {renderInputGroup(group)}
          </div>
        ))}
      </div>

      {/* ACTION BUTTONS */}
   <div className="action-buttons-container flex gap-4">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>
    </div>
  );
};

export default Page99_Q1_CleanAudio;
