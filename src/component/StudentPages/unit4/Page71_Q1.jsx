import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U4Audio/U4Q1.mp3";
import imgBackground from "../../../assets/unite4pages/SVG/P71.png";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import "../unit1/Page17_Q1.css";

/* 🔴 الإجابات الصحيحة لكل input */
const correctAnswers = {
  "0-0": "ferme",
  "0-1": "village",
  "1-0": "montagne",
  "2-0": "maison de ville",
  "3-0": "île",
  "4-0": "port",
};

/* 🔴 مواقع الـ inputs مع محتوى مخصص لكل مجموعة */
const inputGroups = [
  {
    id: 0,
    className: "input-page71q1-0",
    // يمكنك تغيير عدد الـ spans وtext كل واحد هنا
    spans: ["Je m’appelle Marc. J’habite dans une", "dans un", "dprès d’Orange."],
    inputsCount: 2 // عدد الـ inputs في هذه المجموعة (يمكن تغييره)
  },
  {
    id: 1,
    className: "input-page71q1-1",
    spans: ["Je m’appelle Marie. J’habite à la", "dans la ville de Briançon."],
    inputsCount: 1 // هنا فقط 2 inputs
  },
  {
    id: 2,
    className: "input-page71q1-2",
    spans: ["Je m’appelle Belle. J’habite ici, à Marseille. J’habite dans une"],
    inputsCount: 1 // هنا فقط 1 input
  },
  {
    id: 3,
    className: "input-page71q1-3",
    spans: ["Je m’appelle Antoine. J’habite ici, sur l’", "d’Hyères."],
    inputsCount: 1
  },

  {
    id: 4,
    className: "input-page71q1-4",
    spans: ["Je m’appelle Jaques. J’habite à Cannes. C’est un", "en Provence."],
    inputsCount: 1
  },

];

/* 🔴 الكابتشن */
const captions = [
   { start:5.9 , end: 7.12, text: "Grand Prix A1," },
  { start:7.7 , end: 8.47, text: "unité 4," },
  { start:9.11 , end: 9.61, text: "en ville," },
  { start:10.5 , end: 11.31, text: "section A," },
  { start:11.87 , end: 12.53, text: "Provence," },
  { start:12.9 , end: 14.19, text: "le goût de la France." },
  { start:15.1 , end: 16.25, text: "Exercice 1." },
  { start:17.3 , end: 17.8, text: "Écoute," },
  { start:18.3 , end: 19.9, text: "observe et écris." },
  { start:22.2 , end: 23.0, text: "Je m'appelle Marc." },
  { start:23.3 , end: 26.0, text: "J'habite dans une ferme dans un village près d'Orange." },
  { start:27.3 , end: 28.3, text: "Je m'appelle Marie" },
  { start:28.5 , end: 31.15, text: "J'habite à la montagne dans la ville de Briançon" },
  { start:32.5 , end: 33.7, text: "Je m'appelle Belle." },
  { start:34.0 , end: 35.9, text: "J'habite ici à Marseille." },
  { start:36.3 , end: 38.6, text: "J'habite dans une maison de ville." },
  { start:39.8 , end: 40.9, text: "Je m'appelle Antoine." },
  { start:41.44 , end: 43.4, text: "J'habite ici sur l'île d'Hier." },
  { start:44.8 , end: 45.8, text: "Je m'appelle Jacques." },
  { start:46.15 , end: 46.9, text: "J'habite à Cannes" },
  { start:47.3 , end: 48.5, text: "C'est un port en Provence." },
];

const Page5_Q1_CleanAudio2 = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showCaption, setShowCaption] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [volume, setVolume] = useState(1);
  const [activeIndex, setActiveIndex] = useState(null);
  const [inputs, setInputs] = useState({});
  const [score, setScore] = useState(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) { audio.play(); setIsPlaying(true); }
    else { audio.pause(); setIsPlaying(false); }
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

  const updateCaption = (currentTime) => {
    const index = captions.findIndex(cap => currentTime >= cap.start && currentTime <= cap.end);
    setActiveIndex(index !== -1 ? index : null);
  };

  const checkAnswer = () => {
    let correctCount = 0;
    Object.keys(correctAnswers).forEach(key => {
      if ((inputs[key] || "").toLowerCase() === correctAnswers[key].toLowerCase()) correctCount++;
    });
    const total = Object.keys(correctAnswers).length;
    setScore({ correct: correctCount, total });
    if (correctCount === total) ValidationAlert.success(`Excellent! (${correctCount}/${total})`, "All answers correct!");
    else if (correctCount === 0) ValidationAlert.error(`All answers incorrect (${correctCount}/${total})`, "Try again!");
    else ValidationAlert.error(`You got ${correctCount} out of ${total} correct.`, "Almost there!");
  };

  const showAnswerFunc = () => {
    setInputs(correctAnswers);
  };

  const resetExercise = () => {
    setInputs({});
    setScore(null);
    resetAudio();
  };

  // دالة لإنشاء العناصر حسب عدد الـ inputs المطلوب
  const renderInputGroup = (group) => {
    const elements = [];
    
    for (let i = 0; i < group.spans.length; i++) {
      // نضيف span أولاً
      elements.push(
        <span key={`span-${i}`} style={{ color: "white", fontWeight: "bold" }} className="exercise-span">
          {group.spans[i]}
        </span>
      );
      
      // إذا كان هناك input في هذا الموقع (حسب inputsCount)
      if (i < group.inputsCount) {
        elements.push(
          <input
            key={`input-${i}`}
            type="text"
            value={inputs[`${group.id}-${i}`] || ""}
            onChange={(e) => handleInputChange(`${group.id}-${i}`, e.target.value)}
            style={{
              minWidth: "60px",
              textAlign: "center",
              borderBottom: "2px solid white",
              outline: "none",
              fontWeight: "bold",
              fontSize: "14px",
              color: "white",
              background: "transparent"
            }}
          />
        );
      }
    }
    
    return elements;
  };

  return (
    <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
      {/* Header */}
       <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
      >
        <span style={{ backgroundColor: "#d47176", color: "#white" }} className="ex-A">A</span>
        <span style={{ color: "black" }} className="number-of-q">1</span>
      Écoute, observe et écris.
      </header>

      {/* AUDIO PLAYER */}
      <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
        <div className="audio-popup-read" style={{ width: "30%" }}>
          <div className="audio-inner player-ui">
            <audio ref={audioRef} src={CD6_Pg8_Instruction1_AdultLady}
              onTimeUpdate={(e) => { const time = e.target.currentTime; setCurrent(time); updateCaption(time); }}
              onLoadedMetadata={(e) => setDuration(e.target.duration)}
            />
            <div className="top-row">
              <span className="audio-time">{new Date(current*1000).toISOString().substring(14,19)}</span>
              <input type="range" className="audio-slider" min="0" max={duration} value={current}
                onChange={(e)=>{audioRef.current.currentTime=e.target.value; updateCaption(Number(e.target.value));}}
                style={{ background:`linear-gradient(to right, #430f68 ${(current/duration)*100}%, #d9d9d9ff ${(current/duration)*100}%)` }}
              />
              <span className="audio-time">{new Date(duration*1000).toISOString().substring(14,19)}</span>
            </div>
            <div className="bottom-row flex justify-between items-center">
              <div className={`round-btn ${showCaption?"active":""}`} style={{position:"relative"}} onClick={()=>setShowCaption(!showCaption)}>
                <TbMessageCircle size={36}/>
                <div className={`caption-inPopup ${showCaption?"show":""}`} style={{top:"100%", left:"10%"}}>
                  {captions.map((cap,i)=>(
                    <p key={i} id={`caption-${i}`} className={`caption-inPopup-line2 ${activeIndex===i?"active":""}`}>{cap.text}</p>
                  ))}
                </div>
              </div>
              <button className="play-btn2" onClick={togglePlay}>{isPlaying?<FaPause size={26}/>:<FaPlay size={26}/>}</button>
              <div className="settings-wrapper">
                <button className={`round-btn ${showSettings?"active":""}`} onClick={()=>setShowSettings(!showSettings)}>
                  <IoMdSettings size={36}/>
                </button>
                {showSettings && (
                  <div className="settings-popup">
                    <label>Volume</label>
                    <input id="V" type="range" min="0" max="1" step="0.05" value={volume}
                      onChange={(e)=>{setVolume(e.target.value); audioRef.current.volume=e.target.value;}}
                    />
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {score && <ScoreCardEnhanced score={score}/>}

      {/* 🧩 التمرين */}
      <div className="exercise-container">
        <div className="image-container31" style={{ position:"relative"}}>
          <img src={imgBackground} alt="Exercise"/>
          {inputGroups.map((group) => (
            <div
              key={group.id}
              className={group.className}
              style={{
                position:"absolute",
                gap:"8px",
                backgroundColor:"#eb3193",
                padding:"8px 12px",
                borderRadius:"12px",
                width:"30%",
                height:"15%",
                overflow:"hidden",
                display:"flex",
                flexDirection:"column",
                
              }}
            >
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "6px", marginBottom: "4px" }}>
                {renderInputGroup(group)}
              </div>
            </div>
          ))}
        </div>
      </div>
          <div className="spaces"></div>
      {/* 🔘 أزرار */}
      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>
    </div>
  );
};

export default Page5_Q1_CleanAudio2;