import React, { useState,useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import img1 from "../../../assets/unite4pages/SVG/P75EXE1.png";
import ScoreCardEnhanced from "../../Popup/ScoreCard"; // عدّل المسار حسب مكانه
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U4Audio/U4SBQ1.mp3";
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

{ start:5.79 , end: 6.97, text: "Grand Prix A1," },
  { start:7.39 , end: 8.41, text: "unité 4," },
  { start:8.83 , end: 9.23, text: "en ville." },
  { start:10.0 , end: 10.8, text: "Section B." },
  { start:11.52 , end: 12.19, text: "Marseille," },
  { start:12.64 , end: 13.9, text: "une ville formidable." },
  { start:15.7 , end: 15.9, text: "Exercice 1." },
  { start:16.8 , end: 18.6, text: "Écoute et observe." },
  { start:20.8 , end: 21.4, text: "En bus," },
  { start:21.6 , end: 22.3, text: "en tramway," },
  { start:22.3 , end: 23.3, text: "en métro," },
  { start:23.2 , end: 25.0, text: "les transports en commun sont pratiques." },
  { start:26.3 , end: 26.9, text: "En avion," },
  { start:26.9 , end: 27.7, text: "c'est rapide." },
  { start:27.7 , end: 29.4, text: "En voiture," },
  { start:29.4 , end: 30.4, text: "c'est facile." },
  { start:31.4 , end: 32.0, text: "À vélo," },
  { start:32.2 , end: 33.8, text: "c'est bon pour faire de l'exercice." },
  { start:35.0 , end: 35.4, text: "À pied," },
  { start:35.4 , end: 36.4, text: "avec tes amis," },
  { start:36.4 , end: 37.19, text: "c'est formidable." },


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
  
  // === STATE ===
  const [answers, setAnswers] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: ""
  });

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
    i: ""

  });

  // === الإجابات النموذجية ===
  const correctAnswers = {
    a: "Ce sont l’avion, le vélo, la voiture, le bus, le tramway, le métro, la marche.",
    b: "Le bus, le tramway, le métro sont pratiques. L’ avion est rapide. La voiture est facile. Le vélo est bon pour faire de l’exercice. La marche est formidable.",
 
  };

  // === النصوص الأصلية للأسئلة ===
  const questions = {
    a: "Quels moyens de transports sont cités ?",
    b: "Trouve un aspect positif pour chaque moyen de transport.Est-ce que tu es d’accord ?",
 
  };

  // ✅ HANDLE CHANGE
  const handleChange = (key, value) => {
    setAnswers(prev => ({ ...prev, [key]: value }));
    // إعادة ضبط لون الخلفية عند الكتابة
    setAnswerStatus(prev => ({ ...prev, [key]: "" }));
  };

  // ✅ CHECK ANSWER
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
    ValidationAlert.error(
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
  setAnswers(correctAnswers);

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


  // ✅ دالة لتحديد لون الخلفية حسب الحالة
  const getInputStyle = (key) => {
    if (answerStatus[key] === "correct") return { backgroundColor: "#d4f4dd" }; // أخضر فاتح
    if (answerStatus[key] === "wrong") return { backgroundColor: "#f8d7da" };   // أحمر فاتح
    return {};
  };

  return (
       <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
    <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
      >
        <span style={{ backgroundColor: "#d47176", color: "#white" }} className="ex-A">B</span>
        <span style={{ color: "black" }} className="number-of-q">2</span>
   Réponds aux questions.
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
<div style={{width:"60%"}} > <img style={{width:"100%", height:"50%", marginTop:"0%"}} src={img1} alt="" /></div>
      {/* ✅ QUESTIONS */}
     <div className="page5Q3">
  {Object.keys(questions).map((key, index) => (
    <div className="input-group" key={key}>
      <label>
        <strong style={{fontSize:"20px"}}>{String.fromCharCode(97 + index)} </strong>{questions[key]}
      </label>
   <textarea
  value={answers[key]}
  onChange={(e) => handleChange(key, e.target.value)}
  style={{
    width:"50%",
    borderBottom:"2px solid black",
    resize: "none",
    textAlign: "center",
    ...getInputStyle(key)

  }}
/>

    </div>
  ))}
</div>
<div className="spaces"></div>
   {score && <ScoreCardEnhanced score={score} />}
      {/* Action Buttons */}
      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn swal-continue">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>
    </div>
  );
};

export default Page5_Q1_CleanAudio;
