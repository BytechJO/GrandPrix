import React, { useState,useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import img1 from "../../../assets/unite2pages/svg/U2P35EXE1-02.svg";
import ScoreCardEnhanced from "../../Popup/ScoreCard"; // عدّل المسار حسب مكانه
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U2Audio/U2ScQ1.mp3";
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

{start:5.2,end:6.9,text:"Grand prix A1,"},
{start:6.9,end:8.7,text:"unité 2, à"},
{start:8.7,end:10.5,text:"l'école, section"},
{start:10.5,end:12.8,text:"C, lundi C."},
{start:14.2,end:15.4,text:"Exercice 1,"},
{start:16.0,end:16.9,text:"écoute l'emploi"},
{start:16.9,end:17.7,text:"du temps de"},
{start:17.7,end:18.9,text:"Carole et Jenna."},
{start:21.1,end:23.7,text:"Lundi, 8h30-9h30"},
{start:23.7,end:27.1,text:"SVT, 9h30-10h30"},
{start:27.1,end:27.6,text:"Anglais,"},
{start:28.8,end:30.4,text:"10h30-11h30"},
{start:30.4,end:33.6,text:"Maths, 11h30-13h"},
{start:33.6,end:34.4,text:"déjeuner,"},
{start:35.5,end:36.8,text:"13h-14h"},
{start:36.8,end:37.5,text:"Français,"},
{start:38.6,end:40.8,text:"14h-15h EPS,"},
{start:42.0,end:43.8,text:"15h-16h Arts."},
{start:45.9,end:48.9,text:"Mardi 8h30-9h30"},
{start:48.9,end:49.7,text:"Histoire"},
{start:49.7,end:52.9,text:"9h30-10h30 Math"},
{start:52.9,end:55.6,text:"10h30-11h30"},
{start:55.6,end:56.4,text:"Espagnol"},
{start:56.4,end:59.0,text:"11h30-13h"},
{start:59.0,end:62.3,text:"Déjeuner 13h-14h"},
{start:62.3,end:65.5,text:"Anglais 14h-15h"},
{start:65.5,end:69.8,text:"SVT 15h-16h SVT"},
{start:69.8,end:72.2,text:"Mercredi"},
{start:72.2,end:74.7,text:"8h30-9h30 SVT"},
{start:75.9,end:77.5,text:"9h30-10h30"},
{start:77.5,end:78.3,text:"Technologie"},
{start:78.3,end:81.0,text:"10h30-11h30"},
{start:81.0,end:81.8,text:"Physique"},
{start:81.8,end:84.3,text:"11h30-13h"},
{start:84.3,end:87.3,text:"Déjeuner 13h-14h"},
{start:87.3,end:90.4,text:"Français 14h-15h"},
{start:90.4,end:93.4,text:"Histoire 15h-16h"},
{start:93.4,end:96.7,text:"EPS Jeudi"},
{start:96.7,end:99.4,text:"8h30-9h30 EPS"},
{start:99.4,end:102.1,text:"9h30-10h30"},
{start:102.1,end:103.1,text:"Histoire"},
{start:103.1,end:105.6,text:"10h30-11h30"},
{start:105.6,end:106.3,text:"Français"},
{start:106.3,end:108.7,text:"11h30-13h"},
{start:108.7,end:111.7,text:"Déjeuner 13h-14h"},
{start:111.7,end:112.7,text:"Technologie"},
{start:112.7,end:116.5,text:"14h-15h Maths"},
{start:116.5,end:118.9,text:"15h-16h Physique"},
{start:120.9,end:121.7,text:"Vendredi"},
{start:121.7,end:124.0,text:"8h30-9h30"},
{start:124.0,end:124.8,text:"Espagnol"},
{start:124.8,end:127.5,text:"9h30-10h30"},
{start:127.5,end:128.2,text:"Français"},
{start:128.2,end:131.7,text:"10h30-11h30 SVT"},
{start:131.7,end:134.3,text:"11h30-13h"},
{start:134.3,end:137.6,text:"Déjeuner 13h-14h"},
{start:137.6,end:140.8,text:"Anglais 14h-15h"},
{start:140.8,end:143.8,text:"Maths 15h-16h"},
{start:143.8,end:144.4,text:"EPS"},


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
    a: "Lundi, mardi, mercredi, jeudi, vendredi, samedi,dimanche",
    b: "Elles déjeunent à 11 h 30",
 
  };

  // === النصوص الأصلية للأسئلة ===
  const questions = {
    a: "Nomme les jours de la semaine.",
    b: "À quelle heure déjeunent-elles ?",
 
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
        style={{
          marginLeft: "42%",
          color: "black",
          marginTop: "5%",
          fontSize: "25px",
          fontWeight: "bold",
        }}
      >
        <span className="ex-A" style={{ backgroundColor: "#df4f89" }}>C</span>
        <span className="number-of-q">1</span>
  Écoute l’emploi du temps de Carole et Jenna.
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
      <input
        type="text"
        value={answers[key]}
        onChange={(e) => handleChange(key, e.target.value)}
        style={getInputStyle(key)}
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
