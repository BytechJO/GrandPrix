import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/unit1/SoundU1/P17Q1.mp3";
import imgBackground from "../../../assets/unit1/sectionD/P123Q1.svg";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import "../unit1/Page17_Q1.css";

/* 🔴 القائمة */
const numbersList = [
  { id: "a", label: "Le golf" },
  { id: "b", label: "Le hockey sur glace" },
  { id: "c", label: "Le football" },
  { id: "d", label: "Le volley" },
  { id: "e", label: "Le basket" },
  { id: "f", label: "Le judo" },
  { id: "g", label: "Le tennis" },
  { id: "h", label: "Le ski" },
 
];

/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  0: "e",
  1: "g",
  2: "c",
  3: "h",
  4: "a",
  5: "b",
  6: "f",
  7: "d",

};

/* 🔴 مواقع الـ inputs */
const inputPositions = [
  { id: 0, className: "input-page123-0" },
  { id: 1, className: "input-page123-1" },
  { id: 2, className: "input-page123-2" },
  { id: 3, className: "input-page123-3" },
  { id: 4, className: "input-page123-4" },
  { id: 5, className: "input-page123-5" },
  { id: 6, className: "input-page123-6" },
  { id: 7, className: "input-page123-7" },

];

/* 🔴 الكابتشن */
const captions = [
   { start:4.9, end: 6.6, text: "Grand Prix A1" },
  { start:6.6, end: 8.0, text: "Unité 1" },
  { start:8.0, end: 8.9, text: "Se présenter" },
  { start:9.7, end: 10.5, text: "Section D" },
  { start:11.2, end: 12.2, text: "Ma nationalité" },
  { start:13.2, end: 14.3, text: "Exercice 1" },
  { start:15.0, end: 16.5, text: "Écoute, répète" },
  { start:16.5, end: 17.6, text: "et place" },
  { start:17.6, end: 18.2, text: "dans l'ordre." },
  { start:20.2, end: 20.7, text: "A." },
  { start:20.7, end: 21.4, text: "Je suis" },
  { start:21.4, end: 22.3, text: "Sud-Africain." },
  { start:23.0, end: 23.9, text: "Sud-Africaine." },
  { start:25.8, end: 26.6, text: "B" },
  { start:26.6, end: 28.3, text: "Je suis Canadien." },
  { start:28.3, end: 29.0, text: "Canadienne." },
  { start:30.4, end: 32.0, text: "C" },
  { start:32.0, end: 33.2, text: "Je suis Indien." },
  { start:33.7, end: 34.3, text: "Indienne." },
  { start:36.6, end: 37.3, text: "D." },
  { start:37.3, end: 37.9, text: "Je suis" },
  { start:37.9, end: 38.6, text: "Américain," },
  { start:39.2, end: 40.1, text: "Américaine" },
  { start:41.1, end: 42.7, text: "E" },
  { start:42.7, end: 43.4, text: "Je suis" },
  { start:43.4, end: 44.0, text: "Finlandais," },
  { start:44.8, end: 45.6, text: "Finlandaise." },
  { start:46.9, end: 48.5, text: "F" },
  { start:48.5, end: 48.9, text: "Je suis" },
  { start:48.9, end: 49.6, text: "Australien" },
  { start:50.1, end: 50.9, text: "Australienne." },
  { start:52.5, end: 53.9, text: "G." },
  { start:53.9, end: 54.8, text: "Je suis Français" },
  { start:55.5, end: 56.3, text: "Française." },
  { start:58.5, end: 59.1, text: "H" },
  { start:59.1, end: 59.1, text: "Je suis" },
  { start:60.9, end: 61.7, text: "Brésilien" },
  { start:63.2, end: 64.5, text: "I." },
  { start:64.5, end: 68.2, text: "Je suis Russe" },
  { start:68.2, end: 69.4, text: "Je suis Chinoise." },

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

  /* ▶️ تشغيل / إيقاف */
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

  /* 🔁 إعادة الصوت */
  const resetAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrent(0);
    }
  };

  /* 📝 إدخال الإجابة */
  const handleInputChange = (index, value) => {
    if (/^[a-jA-J]?$/.test(value)) {
      setInputs({ ...inputs, [index]: value.toLowerCase() });
    }
  };

  /* 🧠 تحديث الكابتشن */
  const updateCaption = (currentTime) => {
    const index = captions.findIndex(
      (cap) => currentTime >= cap.start && currentTime <= cap.end
    );
    setActiveIndex(index !== -1 ? index : null);
  };

  /* ✅ تحقق */
  const checkAnswer = () => {
    let correctCount = 0;

    Object.keys(correctAnswers).forEach((key) => {
      if (inputs[key] === correctAnswers[key]) correctCount++;
    });

    const total = Object.keys(correctAnswers).length;
    setScore({ correct: correctCount, total });

    if (correctCount === total) {
      ValidationAlert.success(
        `Excellent! (${correctCount}/${total})`,
        "All answers correct!"
      );
    } else if (correctCount === 0) {
      ValidationAlert.error(
        `All answers incorrect (${correctCount}/${total})`,
        "Try again!"
      );
    } else {
      ValidationAlert.error(
        `You got ${correctCount} out of ${total} correct.`,
        "Almost there!"
      );
    }
  };

  /* 👀 إظهار الحل */
  const showAnswerFunc = () => {
    setInputs(correctAnswers);
  };

  /* 🔄 إعادة التمرين */
  const resetExercise = () => {
    setInputs({});
    setScore(null);
    resetAudio();
  };

  return (
      <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
      {/* Header */}
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
        <span className="ex-A" style={{ backgroundColor: "#d7a965" }}>c</span>
        <span className="number-of-q">1</span>{" "}
Écoute et associe l’activité au dessin qui correspond.  </header>
      {/* 🔊 AUDIO PLAYER */}
      {/* AUDIO PLAYER */}
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

      {score && <ScoreCardEnhanced score={score} />}

      {/* 🧩 التمرين */}
      <div className="exercise-container">
        <div className="numbers-list">
          <ul>
            {numbersList.map((item) => {
              const isUsed = Object.values(inputs).includes(item.id);
              return (
                <li key={item.id} className={isUsed ? "used" : ""}>
                  <span className="itemId">{item.id}.</span>
                  <span className="itemText">{item.label}</span>
                </li>
              );
            })}
          </ul>
        </div>

        <div className="image-container31">
          <img src={imgBackground} alt="Exercise" />
          {inputPositions.map((pos) => (
            <input
              key={pos.id}
              type="text"
              maxLength="1"
              value={inputs[pos.id] || ""}
              onChange={(e) => handleInputChange(pos.id, e.target.value)}
              className={`input-pos ${pos.className}`}
              style={{ width: "5%", height: "5%", backgroundColor: "white", border:"pink solid 2px" }}
            />
          ))}
        </div>
      </div>

      {/* 🔘 أزرار */}
      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">
          Recommencer ↻
        </button>
        <button onClick={showAnswerFunc} className="show-answer-btn">
          Afficher la réponse
        </button>
        <button onClick={checkAnswer} className="check-button2">
          Vérifier la réponse✓
        </button>
      </div>
    </div>
  );
};

export default Page5_Q1_CleanAudio2;
