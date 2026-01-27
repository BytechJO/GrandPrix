import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import img1 from "../../../assets/unite5pages/SVG/page106.svg";
import "../unit1/CSSPAGE/Q11.css";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U5Audio/u5sde3.mp3";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
const Page5_Q1_CleanAudio = () => {
  const audioRef = useRef(null);
  const [inputs, setInputs] = useState({});
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
    { start: 5.44, end: 6.40, text: "Rempris à un," },
  { start: 7.07, end: 8.44, text: "unité 5," },
  { start: 8.80, end: 9.44, text: "les repas." },

  { start: 10.91, end: 11.48, text: "Section D," },
  { start: 12.29, end: 12.96, text: "au restaurant." },
  { start: 14.24, end: 15.32, text: "Exercice 3." },

  { start: 15.87, end: 16.94, text: "Écoute et" },
  { start: 17.04, end: 18.56, text: "complète le dialogue en" },
  { start: 18.56, end: 20.16, text: "utilisant les mots proposés." },

  { start: 22.27, end: 23.02, text: "Bonjour mesdames," },
  { start: 23.36, end: 24.28, text: "bienvenue à Dupois." },

  { start: 25.84, end: 26.06, text: "Bonjour," },
  { start: 26.30, end: 27.80, text: "pouvez-vous nous apporter le menu ?" },

  { start: 29.18, end: 29.96, text: "Avez-vous choisi ?" },

  { start: 31.06, end: 31.26, text: "Oui," },
  { start: 31.54, end: 32.06, text: "comme entrée," },
  { start: 32.06, end: 33.38, text: "je voudrais une salade verte." },

  { start: 33.76, end: 34.12, text: "Et toi," },
  { start: 34.12, end: 34.78, text: "Nicolette ?" },

  { start: 35.82, end: 37.04, text: "Je ne mange pas assez de légumes," },
  { start: 37.04, end: 37.70, text: "alors je voudrais une" },
  { start: 37.70, end: 38.78, text: "salade de chèvre chaud." },

  { start: 39.97, end: 40.52, text: "Bien sûr." },

  { start: 40.93, end: 41.60, text: "Qu'est-ce que vous voulez" },
  { start: 41.60, end: 42.58, text: "comme plat principal ?" },

  { start: 42.58, end: 44.64, text: "Je ne mange pas" },
  { start: 44.64, end: 45.38, text: "beaucoup de poissons," },
  { start: 45.64, end: 46.60, text: "donc je voudrais le poisson." },

  { start: 48.16, end: 49.58, text: "Moi, j'ai mangé trop de poissons hier," },
  { start: 49.58, end: 50.92, text: "donc je voudrais la viande." },

  { start: 52.10, end: 52.66, text: "La viande," },
  { start: 52.66, end: 52.73, text: "oui." },

  { start: 53.58, end: 55.16, text: "Voulez-vous boire quelque chose ?" },

  { start: 55.16, end: 57.22, text: "De l'eau minérale," },
  { start: 57.22, end: 57.82, text: "s'il vous plaît." },

  { start: 58.88, end: 59.98, text: "Je préfère un jus d'orange." },

  { start: 61.24, end: 61.52, text: "C'est tout ?" },
  { start: 62.64, end: 63.20, text: "Oui, merci." },

  { start: 63.68, end: 64.00, text: "C'est tout." },

  { start: 64.83, end: 65.49, text: "Qu'est-ce" },
  { start: 65.51, end: 66.67, text: "que vous voulez comme dessert ?" },

  { start: 68.03, end: 68.79, text: "Je voudrais un peu de" },
  { start: 68.79, end: 69.69, text: "glace à la vanille." },

  { start: 70.81, end: 71.03, text: "Moi," },
  { start: 71.03, end: 71.87, text: "je voudrais une mousse au" },
  { start: 71.87, end: 72.75, text: "chocolat et un café." },

  { start: 73.89, end: 74.43, text: "L'addition," },
  { start: 74.43, end: 74.97, text: "s'il vous plaît." },

  { start: 76.00, end: 76.23, text: "Oui," },
  { start: 76.23, end: 76.85, text: "tout de suite." }
  ];
  const updateCaption = (time) => {
    const index = captions.findIndex(
      (cap) => time >= cap.start && time <= cap.end,
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

  const handleInputChange = (index, value) => {
    setInputs({
      ...inputs,
      [index]: value,
    });
    setAnswers((prev) => ({
      ...prev,
      [`blank${index + 1}`]: value,
    }));
  };

  const [answers, setAnswers] = useState({
    blank1: "",
    blank2: "",
    blank3: "",
    blank4: "",
    blank5: "",
    blank6: "",
    blank7: "",
    blank8: "",
  });

  const correctAnswers = {
    blank1: "menu",
    blank2: "salade",
    blank3: "jus d’orange",
    blank4: "plat principal",
    blank5: "café",
    blank6: "poisson",
    blank7: "addition",
    blank8: "s’il vous plaît",
  };

  const [score, setScore] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const checkAnswer = () => {
    const blanks = Object.keys(correctAnswers);
    let correctCount = 0;
    let incomplete = false;

    blanks.forEach((blank) => {
      const val = answers[blank]?.trim();
      if (!val) incomplete = true;
      if (val?.toLowerCase() === correctAnswers[blank].toLowerCase()) {
        correctCount++;
      }
    });

    const total = blanks.length;

    if (incomplete) {
      ValidationAlert.info(
        "Incomplete",
        "Some answers are missing.",
        `${correctCount}/${total}`,
      );
    } else {
      setScore({ correct: correctCount, total });

      if (correctCount === total) {
        ValidationAlert.success(
          "Good Job!",
          "You got all answers right!",
          `${correctCount}/${total}`,
        );
      } else if (correctCount === 0) {
        ValidationAlert.error(
          "Try Again!",
          "All answers are incorrect.",
          `${correctCount}/${total}`,
        );
      } else {
        ValidationAlert.warning(
          "Some answers are incorrect",
          `You got ${correctCount} out of ${total} correct.`,
          `${correctCount}/${total}`,
        );
      }
    }

    setShowResults(true);
  };

  const showAnswerFunc = () => {
    setAnswers(correctAnswers);
    const newInputs = {};
    Object.keys(correctAnswers).forEach((key, index) => {
      newInputs[index] = correctAnswers[key];
    });
    setInputs(newInputs);

    const total = Object.keys(correctAnswers).length;
    const correctCount = total;

    setScore({ correct: correctCount, total });

    ValidationAlert.success(
      "Answers shown",
      "All correct answers have been filled in.",
      `${correctCount}/${total}`,
    );

    setShowResults(true);
  };

  const resetExercise = () => {
    const emptyAnswers = {};
    Object.keys(correctAnswers).forEach((blank) => {
      emptyAnswers[blank] = "";
    });
    setAnswers(emptyAnswers);
    setInputs({});
    setShowResults(false);
    setScore(null);
    resetAudio();
  };

  const isCorrect = (blank) => {
    if (!showResults) return null;
    return (
      answers[blank].trim().toLowerCase() ===
      correctAnswers[blank].toLowerCase()
    );
  };

  const getInputClass = (blank) => {
    if (!showResults) return "q11-input-default";
    return isCorrect(blank) ? "q11-input-correct" : "q11-input-incorrect";
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
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
        <span className="number-of-q">3</span>{" "}
      Écoute et complète le dialogue en utilisant les mots proposés.
    </header>
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div className="audio-popup-read" style={{ width: "30%" }}>
          <div className="audio-inner player-ui">
            <audio
              ref={audioRef}
              src={CD6_Pg8_Instruction1_AdultLady}
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
      <div
        className="q11-word-bank-36"
        style={{
          backgroundColor: "#ffe7b1",
          padding: "5px",
          borderRadius: "8px",
          justifyContent: "center",
          border: "5px dashed  #7c529c",
        }}
      >
        <div className="q11-word-list-36">
          {Object.values(correctAnswers).map((word, index) => (
            <React.Fragment key={index}>
              <span className="q11-word">{word}</span>
              {(index + 1) % 6 === 0 ? <br /> : null}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="q11-questions-container">
        <div className="imgexrsize">
          <img src={img1} alt="" />
        </div>

        <div className="page28q4-dialogue-text space-y-6">
          {/* الحوار الأصلي مع كل input مرتبط بـ correctAnswers */}
          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-red-300 min-w-[80px]">
              Le serveur:
            </span>
            <span className="text">
              Bonjour, mesdames. Bienvenue à « Dupoix ».
            </span>
          </div>
          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-blue-300 min-w-[80px]">
              Ella:
            </span>
            <span className="text">Bonjour. Pouvez-vous nous apporter le</span>
            <input
              type="text"
              value={inputs[0] || ""}
              onChange={(e) => handleInputChange(2, e.target.value)}
              className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-300 focus:outline-none focus:border-blue-500 w-40"
            />
            <span className="text"> ?</span>
          </div>

          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-red-300 min-w-[80px]">
              Le serveur:
            </span>
            <span className="text">Avez-vous choisi ?</span>
          </div>

          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-blue-300 min-w-[80px]">
              Ella :
            </span>
            <span className="text">Oui, comme entrée, je voudrais une</span>
            <input
              type="text"
              value={inputs[1] || ""}
              onChange={(e) => handleInputChange(2, e.target.value)}
              className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-900 focus:outline-none focus:border-blue-500 w-40"
            />
            <span className="text">verte.</span>
          </div>

          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-green-600 min-w-[80px]">
              Nicolette :
            </span>
            <span className="text">: Je ne mange pas assez de légumes, alors, je voudrais une salade</span>
            
          </div>
            <span className="text"> de chèvre chaud.</span>
          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-red-300 min-w-[80px]">
             Le serveur :
            </span>
            <span className="text">
              Bien sûr, qu’est-ce que vous voulez comme
            </span>
            <input
              type="text"
              value={inputs[2] || ""}
              onChange={(e) => handleInputChange(4, e.target.value)}
              className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-48"
            />
            <span className="text">?</span>
          </div>
          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-green-600 min-w-[80px]">
            Nicolette :
            </span>
            <span className="text">
              Je ne mange pas beaucoup de poisson, donc je voudrais le
            </span>
            <input
              type="text"
              value={inputs[3] || ""}
              onChange={(e) => handleInputChange(4, e.target.value)}
              className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-48"
            />
          </div>
          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-blue-300 min-w-[80px]">
             Ella :
            </span>
            <span className="text">Moi, j’ai mangé trop de poisson, hier, donc je voudrais la viande.</span>
          </div>
          <div className="dialogue-line flex items-start">
        <span className="speaker font-bold text-red-300 min-w-[80px]">
           Le serveur
            </span>
            <span className="text">La viande. Oui, voulez-vous boire quelque chose ?</span>
          </div>

          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-blue-300 min-w-[80px]">
            Ella:
            </span>
            <span className="text">De l’eau minérale,</span>
            <input
              type="text"
              value={inputs[4] || ""}
              onChange={(e) => handleInputChange(5, e.target.value)}
              className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-40"
            />
          </div>
          <div className="dialogue-line flex items-start">
              <span className="speaker font-bold text-red-300 min-w-[80px]">
           Le serveur : 
            </span>
            <span>C’est tout ?</span>
          </div>
          <div className="dialogue-line flex items-start">
              <span className="speaker font-bold text-blue-300 min-w-[80px]">
          Ella :
            </span>
            <span>Oui, merci, c’est tout.</span>
          </div>

          <div className="dialogue-line flex items-start">
              <span className="speaker font-bold text-red-300 min-w-[80px]">
         Le serveur :
            </span>
            <span>Qu’est-ce que vous voulez comme dessert ?</span>
          </div>
          <div className="dialogue-line flex items-start">
              <span className="speaker font-bold text-blue-300 min-w-[80px]">
        Ella :
            </span>
            <span>Je voudrais un peu de glace à la vanille.</span>
          </div>
          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-green-600 min-w-[80px]">
             Nicolette :
            </span>
            <span className="text">
              Moi, je voudrais une mousse au chocolat et un
            </span>
            <input
              type="text"
              value={inputs[5] || ""}
              onChange={(e) => handleInputChange(5, e.target.value)}
              className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-40"
            />
            <span className="text">?</span>
          </div>
          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-green-600 min-w-[80px]">
             Nicolette :
            </span>
            <span className="text">
              L’
            </span>
            <input
              type="text"
              value={inputs[6] || ""}
              onChange={(e) => handleInputChange(5, e.target.value)}
              className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-40"
            />
            <span className="text">s’il vous plaît.</span>
          </div>

          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-red-300 min-w-[80px]">
              Le serveur :
            </span>
            <span className="text">
            Oui, tout de suite.
            </span>
          </div>
        </div>
      </div>

      <div className="spaces"></div>
      {score && <ScoreCardEnhanced score={score} />}

      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">
          Recommencer ↻
        </button>
        <button
          onClick={showAnswerFunc}
          className="show-answer-btn swal-continue"
        >
          Afficher la réponse
        </button>
        <button onClick={checkAnswer} className="check-button2">
          Vérifier la réponse✓
        </button>
      </div>
    </div>
  );
};

export default Page5_Q1_CleanAudio;
