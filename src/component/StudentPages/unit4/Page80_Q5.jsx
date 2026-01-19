import React, { useState,useRef } from "react";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import ValidationAlert from "../../Popup/ValidationAlert";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U4Audio/U4SCQ5.mp3";

const Page5_Q1_CleanAudio = () => {
  const [score, setScore] = useState(null);
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
    { start: 5.6, end: 6.72, text: "Rempris A1," },
    { start: 7.0, end: 8.0, text: "unité 4," },
    { start: 8.35, end: 8.76, text: "en ville." },
    { start: 9.45, end: 10.18, text: "Section C." },
    { start: 11.13, end: 11.72, text: "Briançon," },
    { start: 12.1, end: 13.74, text: "une ville d'art et d'histoire." },
    { start: 14.91, end: 15.87, text: "Exercice 4." },
    { start: 16.57, end: 18.6, text: "Écoute et réponds à la question." },
    { start: 25.47, end: 25.98, text: "Allô ?" },
    { start: 27.07, end: 27.58, text: "Salut Henri." },
    { start: 28.8, end: 29.18, text: "Salut," },
    { start: 29.18, end: 30.3, text: "où es-tu ?" },
    {
      start: 31.16,
      end: 33.24,
      text: "Je suis près du restaurant de hamburgers.",
    },
    { start: 33.24, end: 34.02, text: "Et toi ?" },
    { start: 35.23, end: 36.1, text: "Je suis à l'entrée." },
    { start: 36.54, end: 38.27, text: "C'est où ce restaurant ?" },
    { start: 39.12, end: 40.32, text: "Ce n'est pas très loin de l'entrée." },
    {
      start: 40.8,
      end: 43.8,
      text: "C'est entre le magasin de jouets « Être libre »",
    },
    {
      start: 43.8,
      end: 46.33,
      text: "et le magasin de vêtements « La mode ».",
    },
    { start: 47.33, end: 47.74, text: "D'accord." },
    { start: 48.86, end: 49.62, text: "Et aussi," },
    {
      start: 49.62,
      end: 53.22,
      text: "l'entrée est derrière moi et le cinéma est en face.",
    },
    { start: 53.22, end: 53.72, text: "Ok." },
    { start: 59.97, end: 60.9, text: "Henri ?" },
    { start: 61.1, end: 62.0, text: "Oui ?" },
    { start: 62.0, end: 64.03, text: "Mais qu'est-ce que tu fais ?" },
    { start: 64.03, end: 65.0, text: "Est-ce que tu es perdu ?" },
    { start: 66.2, end: 66.3, text: "Oui," },
    { start: 66.37, end: 66.95, text: "je crois." },
    {
      start: 66.95,
      end: 70.01,
      text: "Parce que je suis devant le restaurant de hamburgers,",
    },
    { start: 70.43, end: 71.6, text: "mais devant moi," },
    { start: 71.6, end: 73.8, text: "il y a un café qui vend des beignets" },
    { start: 73.9, end: 75.7, text: "mais pas de magasin de vêtements." },
    { start: 76.15, end: 77.75, text: "Ah !" },
    { start: 77.89, end: 79.45, text: "Tu es près de quelle entrée ?" },
    { start: 80.41, end: 80.89, text: "L'entrée 2." },
    { start: 80.89, end: 82.81, text: "Ah !" },
    { start: 82.81, end: 84.29, text: "Je suis près de l'entrée 1." },
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
const sentences = [
  { id: "a", text: "Les deux garçons sont dans le cinéma." },
  { id: "b", text: "Robert est près du café." },
  { id: "c", text: "L’entrée est derrière Robert." },
  { id: "d", text: "Henri est perdu." },
  { id: "e", text: "Henri est devant le café." },
  { id: "f", text: "Henri est près de l’entrée 3." },

];


    const correctAnswers = ["e", "c","d"];

  const [checked, setChecked] = useState({});
  const [showFeedback, setShowFeedback] = useState(false);

  // ✅ TOGGLE CHECK
  const toggleCheck = (id, value) => {
    if (showFeedback) return;
    setChecked((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  // ✅ CHECK ANSWER
  const checkAnswer = () => {
    let correctCount = 0;
    let incomplete = false;

    sentences.forEach((s) => {
      // ⛔ لم يتم اختيار إجابة
      if (checked[s.id] === undefined) {
        incomplete = true;
        return;
      }

      const isCorrect = correctAnswers.includes(s.id);
      if (checked[s.id] === isCorrect) {
        correctCount++;
      }
    });

    setShowFeedback(true);
    const total = sentences.length;

    // ✅ تحديث السكور
    setScore({ correct: correctCount, total });

    if (incomplete) {
      ValidationAlert.info(
        "Incomplete",
        "Some answers are missing.",
        `${correctCount}/${total}`
      );
    } else if (correctCount === total) {
      ValidationAlert.success(
        "Excellent!",
        "Toutes vos réponses sont correctes!",
        `${correctCount}/${total}`
      );
    } else if (correctCount === 0) {
      ValidationAlert.info(
        "Essayez encore!",
        "Toutes les réponses sont incorrectes.",
        `${correctCount}/${total}`
      );
    } else {
      ValidationAlert.error(
        "Presque!",
        "Certaines réponses sont incorrectes.",
        `${correctCount}/${total}`
      );
    }
  };

  // ✅ SHOW ANSWER
  const showCorrectAnswer = () => {
    const correctMap = {};
    sentences.forEach((s) => {
      correctMap[s.id] = correctAnswers.includes(s.id);
    });
    setChecked(correctMap);
    setShowFeedback(true);
    ValidationAlert.success("Réponses affichées", "Les bonnes réponses sont cochées.", "");
  };

  // ✅ RESET
  const resetExercise = () => {
    setChecked({});
    setShowFeedback(false);
    resetAudio();
    setScore(null);
    if (ValidationAlert && typeof ValidationAlert.close === "function") {
      ValidationAlert.close();
    }
  };

  return (
  <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
      {/* العنوان الرئيسي */}
       <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
      >
        <span style={{ backgroundColor: "#d47176", color: "#white" }} className="ex-A">C</span>
        <span style={{ color: "black" }} className="number-of-q">5</span>
     Vrai (✔️ ) ou faux ( ✖️) ?
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
      {/* ✅ QUESTIONS LIST - تخطيط شبكي */}
      <div className="page50Q5-questions-grid">
        {sentences.map((sentence) => {
          const correct = correctAnswers.includes(sentence.id);
          const userAnswer = checked[sentence.id];
          const isAnswered = userAnswer !== undefined;
          
          let feedbackState = "";
          if (showFeedback) {
            feedbackState = userAnswer === correct ? "correct" : "incorrect";
          }

          return (
            <div
              key={sentence.id}
              className={`page50Q5-question-card ${feedbackState} ${isAnswered ? "answered" : ""}`}
            >
              <div className="page50Q5-question-header">
                <div className="page50Q5-question-id">{sentence.id})</div>
                <div className="page50Q5-question-text">{sentence.text}</div>
              </div>

              {/* أزرار Vrai/Faux */}
              <div className="page50Q5-answer-buttons">
                <button
                  className={`page50Q5-answer-button page50Q5-vrai-button ${userAnswer === true ? "selected" : ""} ${showFeedback && correct ? "correct-highlight" : ""}`}
                  onClick={() => toggleCheck(sentence.id, true)}
                  disabled={showFeedback}
                >
                  <span className="page50Q5-button-icon">✔️</span>
                  <span className="page50Q5-button-text">Vrai</span>
                 
                </button>
                <button
                  className={`page50Q5-answer-button page50Q5-faux-button ${userAnswer === false ? "selected" : ""} ${showFeedback && !correct ? "correct-highlight" : ""}`}
                  onClick={() => toggleCheck(sentence.id, false)}
                  disabled={showFeedback}
                >
                  <span className="page50Q5-button-icon">✖️</span>
                  <span className="page50Q5-button-text">Faux</span>
                 
                </button>
              </div>

              {/* Feedback message */}
              {showFeedback && (
                <div className="page50Q5-feedback-message">
                  {userAnswer === correct ? (
                    <span className="page50Q5-correct-feedback"></span>
                  ) : (
                    <span className="page50Q5-incorrect-feedback">
                      Incorrect. La réponse correcte est <strong>{correct ? "Vrai" : "Faux"}</strong>
                    </span>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* بطاقة النتيجة */}
      {score && (
        <div className="page50Q5-score-container">
          <ScoreCardEnhanced score={score} />
        </div>
      )}

      {/* أزرار التحكم */}
          <div className="action-buttons-container flex gap-4">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showCorrectAnswer} className="show-answer-btn">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>
    </div>
  );
};

export default Page5_Q1_CleanAudio;