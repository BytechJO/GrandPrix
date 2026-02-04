import React, { useState,useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U7Audio/u7saq4.mp3";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard"; // عدّل المسار حسب مكانه
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
const Page5_Q2_SAppeler = () => {
  // === STATE ===

    const audioRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [current, setCurrent] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showSettings, setShowSettings] = useState(false);
    const [volume, setVolume] = useState(1);
    const [showCaption, setShowCaption] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
  const [answers, setAnswers] = useState({
     a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: "",
    i: "",
    j: "",
  });
  const [score, setScore] = useState(null);
 const captions = [
  { start: 5.50, end: 6.64, text: "Grand Prix A1," },
  { start: 7.10, end: 8.10, text: "unité 7," },
  { start: 8.42, end: 8.90, text: "les loisirs." },
  { start: 9.76, end: 10.54, text: "Section A," },
  { start: 11.20, end: 11.90, text: "mes loisirs." },

  { start: 12.99, end: 13.86, text: "Exercice 4." },
  { start: 14.59, end: 15.93, text: "Écoute encore une fois" },
  { start: 16.32, end: 17.48, text: "et complète les phrases." },

  { start: 19.68, end: 21.32, text: "Il y a beaucoup de choses que j'aime faire," },
  { start: 21.60, end: 23.54, text: "mais mon loisir préféré," },
  { start: 23.90, end: 24.60, text: "c'est la lecture." },
  { start: 25.38, end: 26.00, text: "J'adore lire," },
  { start: 26.66, end: 28.42, text: "découvrir des histoires intéressantes" },
  { start: 28.46, end: 29.08, text: "à chaque page." },
  { start: 29.98, end: 31.48, text: "Je lis chaque jour pendant deux heures." },
  { start: 32.26, end: 34.68, text: "C'est un loisir qui peut se pratiquer à l'intérieur" },
  { start: 35.04, end: 38.26, text: "ou en plein air ?" },

  { start: 38.26, end: 39.68, text: "Moi, j'aime bien être en plein air" },
  { start: 39.68, end: 41.32, text: "et découvrir des choses nouvelles." },
  { start: 41.80, end: 44.44, text: "Voilà pourquoi mon loisir préféré est la randonnée." },
  { start: 45.15, end: 47.76, text: "Je peux voir la beauté de la nature et des animaux." },
  { start: 48.03, end: 50.60, text: "Je fais de la randonnée le samedi avec mes amis." },

  { start: 52.54, end: 53.06, text: "J'adore l'eau." },
  { start: 53.78, end: 54.86, text: "J'aime la natation," },
  { start: 55.26, end: 56.44, text: "mais je préfère la pêche." },
  { start: 56.86, end: 58.04, text: "C'est mon loisir préféré." },
  { start: 58.88, end: 61.06, text: "J'aime le calme de l'eau et la nature." },
  { start: 61.58, end: 62.88, text: "J'aime attendre les poissons." },
  { start: 63.61, end: 65.83, text: "Je pêche toujours le dimanche avec mes frères." },
  ];
  

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

  const resetAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrent(0);
    }
  };
  // ✅ حالة لون الإجابات
  const [answerStatus, setAnswerStatus] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
    g: "",
    h: "",
    i: "",
    j: "",

  });

  // === الإجابات النموذجية ===
  const correctAnswers = {
    a: "la lecture",
    b: "chaque jour",
    c: "la randonnée",
    d: "le samedi",
    e: "la pêche",
    f: "mes frères",
 
  
  };

  // === النصوص الأصلية للأسئلة مع الفراغات ____
  const questions = {
    a: "Gustave : Mais mon loisir préféré, c’est ____ ",
    b: "Gustave : Je lis ____ pendant 2 heures.",
    c: "Adèle : Voilà pourquoi mon loisir préféré est ____ ",
    d: "Adèle : Je fais de la randonnée ____ avec mes amis.",
    e: "Oliver : J’aime la natation, mais je préfère ____ ",
    f: "Oliver : Je pêche toujours le dimanche avec ____ ",

 
  };

  // ✅ HANDLE CHANGE
  const handleChange = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    // إعادة ضبط اللون عند الكتابة
    setAnswerStatus(prev => ({ ...prev, [key]: "" }));
  };

  // ✅ CHECK ANSWER
const checkAnswer = () => {
  const newStatus = {};
  let correctCount = 0;
  let incomplete = false;

  Object.keys(correctAnswers).forEach(key => {
    const val = answers[key]?.trim();
    if (!val) incomplete = true;

    const isCorrect = val === correctAnswers[key];
    newStatus[key] = isCorrect ? "correct" : "wrong";

    if (isCorrect) correctCount++;
  });

  setAnswerStatus(newStatus);

  const total = Object.keys(correctAnswers).length;

  if (incomplete) {
    ValidationAlert.info(
      "Incomplete",
      "Please fill in all fields.",
      `${correctCount}/${total}`
    );
    setScore(null); // منع ظهور ScoreCard
  } else {
    setScore({ correct: correctCount, total });

    if (correctCount === total) {
      ValidationAlert.success(
        "Excellent!",
        "You got all answers right!",
        `${correctCount}/${total}`
      );
    } else if (correctCount === 0) {
      ValidationAlert.error(
        "Try Again!",
        "All answers are incorrect.",
        `${correctCount}/${total}`
      );
    } else {
      ValidationAlert.error(
        "Almost there!",
        `You got ${correctCount} out of ${total} correct.`,
        `${correctCount}/${total}`
      );
    }
  }
};

// ✅ SHOW ANSWER
const showAnswerFunc = () => {
  setAnswers({ ...correctAnswers });

  const newStatus = {};
  Object.keys(correctAnswers).forEach(key => {
    newStatus[key] = "correct";
  });
  setAnswerStatus(newStatus);

  const total = Object.keys(correctAnswers).length;
  setScore({ correct: total, total });

  ValidationAlert.success(
    "Answers shown",
    "All correct answers have been filled in.",
    `${total}/${total}`
  );
};

// ✅ RESET
const resetExercise = () => {
  const emptyAnswers = {};
  const emptyStatus = {};
  Object.keys(correctAnswers).forEach(key => {
    emptyAnswers[key] = "";
    emptyStatus[key] = "";
  });

  setAnswers(emptyAnswers);
  setAnswerStatus(emptyStatus);
  setScore(null); // إعادة تعيين ScoreCard
  resetAudio();
};
  const updateCaption = (currentTime) => {
    const index = captions.findIndex(
      (cap) => currentTime >= cap.start && currentTime <= cap.end
    );
    setActiveIndex(index !== -1 ? index : null);
  };

  // ✅ دالة لتحديد لون الخلفية حسب الحالة
  const getInputStyle = (key) => {
    if (answerStatus[key] === "correct") return { backgroundColor: "#d4f4dd" }; // أخضر فاتح
    if (answerStatus[key] === "wrong") return { backgroundColor: "#f8d7da" }; // أحمر فاتح
    return {};
  };

  return (
    <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
     <header
                className="header-title-page1 w-full text-left mb-4"
                style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
            >
                <span style={{ backgroundColor: "#cf7230", color: "#white" }} className="ex-A">Aِ</span>
                <span style={{ color: "black" }} className="number-of-q">4</span>
          Écoute encore une fois et complète les phrases.
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

            {/* Time & Slider */}
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
                  background: `linear-gradient(to right, #430f68 ${
                    (current / duration) * 100
                  }%, #d9d9d9ff ${(current / duration) * 100}%)`,
                }}
              />

              <span className="audio-time">
                {new Date(duration * 1000).toISOString().substring(14, 19)}
              </span>
            </div>

            {/* Controls */}
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
                      className={`caption-inPopup-line2 ${
                        activeIndex === i ? "active" : ""
                      }`}
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
      {/* ✅ QUESTIONS */}
      <div className="page5Q5" style={{marginLeft:"13%"}}>
        <div className="inputs-column" style={{width:"100%"}}>
          {Object.keys(questions).map((key, index) => (
            <div className="input-group" key={key}>
            <label>
<strong style={{ marginRight: "6px", textTransform: "uppercase" }}>
  {String.fromCharCode(97 + index)}.
</strong>


  {questions[key].split("____")[0]}

  <input
    type="text"
    value={answers[key]}
    onChange={(e) => handleChange(key, e.target.value)}
    style={{ width: "130px", margin: "0 5px", ...getInputStyle(key) }}
  />

  {questions[key].split("____")[1]}
</label>

            </div>
          ))}
        </div>
      </div>
      {score && <ScoreCardEnhanced score={score} />}
<div className="spaces"></div>
      {/* Action Buttons */}
      <div className="action-buttons-container flex gap-4">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>
    </div>
  );
};

export default Page5_Q2_SAppeler;
