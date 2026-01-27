import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U4Audio/U4Q1.mp3";
import imgBackground from "../../../assets/unite5pages/SVG/P94Q5.svg";
import { FaPlay, FaPause } from "react-icons/fa";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import "./Page94_Q5.css";

/* =========================
   ANSWERS
========================= */
const correctAnswers = {
  "0-0": "ferme",
  "0-1": "village",
  "1-0": "montagne",
  "2-0": "maison de ville",
  "3-0": "île",
  "4-0": "port",
};

/* =========================
   INPUT GROUPS
========================= */
const inputGroups = [
  // {
  //   id: 0,
  //   className: "input-page99-0",
  //   spans: ["Je m’appelle Marc. J’habite dans une", "dans un", "près d’Orange."],
  //   inputsCount: 2,
  // },
  // {
  //   id: 1,
  //   className: "input-page99-1",
  //   spans: ["Je m’appelle Marie. J’habite à la", "dans la ville de Briançon."],
  //   inputsCount: 1,
  // },
  // {
  //   id: 2,
  //   className: "input-page99-2",
  //   spans: ["Je m’appelle Belle. J’habite ici, à Marseille. J’habite dans une"],
  //   inputsCount: 1,
  // },
  // {
  //   id: 3,
  //   className: "input-page99-3",
  //   spans: ["Je m’appelle Antoine. J’habite ici, sur l’", "d’Hyères."],
  //   inputsCount: 1,
  // },
  // {
  //   id: 4,
  //   className: "input-page99-4",
  //   spans: ["Je m’appelle Jacques. J’habite à Cannes. C’est un", "en Provence."],
  //   inputsCount: 1,
  // },
];

/* =========================
   DIALOG GROUPS (IMAGE)
========================= */
const dialogGroups = [
  {
    id: "d0",
    className: "dialog-page99-0",
    text: ["Salut, maman ! Ça va ?", "Je mange des céréales", "et je prends du ___ ."],
  },
  // {
  //   id: "d1",
  //   className: "dialog-page99-1",
  //   text: ["Salut, Sara ! Ça va ?", "Qu’est-ce que tu prends au ___ ?"],
  // },
  // {
  //   id: "d2",
  //   className: "dialog-page99-2",
  //   text: ["Très bien. À plus tard."],
  // },
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
  const [inputs, setInputs] = useState({});
  const [score, setScore] = useState(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.paused ? audio.play() : audio.pause();
    setIsPlaying(!audio.paused);
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
      <header className="header-title-page99">
        <span className="ex-A-page99">A</span> 1 Écoute, observe et écris.
      </header>

      {/* AUDIO */}
      <div className="audio-wrapper-page99">
        <audio ref={audioRef} src={CD6_Pg8_Instruction1_AdultLady} />
        <button onClick={togglePlay}>
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
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
      <div className="action-buttons-page99">
        <button onClick={resetExercise}>Recommencer ↻</button>
        <button onClick={showAnswerFunc}>Afficher la réponse</button>
        <button onClick={checkAnswer}>Vérifier ✓</button>
      </div>
    </div>
  );
};

export default Page99_Q1_CleanAudio;
