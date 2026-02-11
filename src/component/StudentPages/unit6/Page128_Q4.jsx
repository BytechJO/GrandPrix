import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import img1 from "../../../assets/unite6pages/SVG/page124.svg";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U6Audio/u6sbq4.mp3";

/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
    0: "vous",
    1: "jupe",
    2: "bleu ",
    3: "avez",
    4: "Merci",
 

};

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
        { start: 5.47, end: 6.43, text: "Rempris A1," },
  { start: 6.78, end: 7.73, text: "unité 6," },
  { start: 8.01, end: 8.47, text: "le temps." },
  { start: 9.44, end: 10.11, text: "Section D," },
  { start: 10.49, end: 10.87, text: "la mode." },
  { start: 11.68, end: 12.57, text: "Exercice 4." },
  { start: 13.37, end: 17.07, text: "Écoute la conversation et écris l'information manquante." },

  { start: 19.58, end: 21.34, text: "Bonjour madame, puis-je vous aider ?" },
  { start: 22.47, end: 24.25, text: "Oui, avez-vous cette jupe en bleu ?" },
  { start: 25.33, end: 25.81, text: "Bien sûr." },
  { start: 26.99, end: 27.87, text: "Je peux l'essayer ?" },
  { start: 28.95, end: 29.41, text: "Bien sûr," },
  { start: 29.59, end: 31.77, text: "vous avez une cabine d'essayage derrière vous." },
  { start: 31.77, end: 33.25, text: "Merci." }
    ];

    const updateCaption = (time) => {
        const index = captions.findIndex(
            (cap) => time >= cap.start && time <= cap.end
        );
        setActiveIndex(index !== -1 ? index : null);
    };

    const handleInputChange = (index, value) => {
        setInputs({
            ...inputs,
            [index]: value,
        });
    };

    const normalizeString = (str) => {
        return str
            .toLowerCase()
            .trim()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, ""); // لإزالة الـ accents
    };

    const checkAnswer = () => {
        let correctCount = 0;

        Object.keys(correctAnswers).forEach((key) => {
            const userAnswer = inputs[key] ? normalizeString(inputs[key]) : "";
            const correctAnswer = normalizeString(correctAnswers[key]);

            if (userAnswer === correctAnswer) {
                correctCount++;
            }
        });

        const total = Object.keys(correctAnswers).length;
        setScore({ correct: correctCount, total });

        if (correctCount === total) {
            ValidationAlert.success(
                `Excellent! (${correctCount}/${total})`,
                "Toutes les réponses sont correctes!"
            );
        } else if (correctCount === 0) {
            ValidationAlert.info(
                `Toutes les réponses sont incorrectes (${correctCount}/${total})`,
                "Essayez encore!"
            );
        } else {
            ValidationAlert.error(
                `Vous avez ${correctCount} sur ${total} corrects.`,
                "Presque!"
            );
        }
    };

    const showAnswerFunc = () => setInputs(correctAnswers);
    const resetExercise = () => {
        setInputs({});
        setScore(null);
    };

    return (
        <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
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
        <span className="ex-A" style={{ backgroundColor: "#d7a965" }}>D</span>
        <span className="number-of-q">4</span>{" "}
Écoute la conversation et écris l’information manquante.   </header>

            {/* Audio Player */}
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
                                    background: `linear-gradient(to right, #430f68 ${(current / duration) * 100
                                        }%, #d9d9d9ff ${(current / duration) * 100}%)`,
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
                                            className={`caption-inPopup-line2 ${activeIndex === i ? "active" : ""
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

            {/* Exercise Container */}
            <div className="page28q4-exercise-container w-full max-w-6xl flex flex-col lg:flex-row gap-8">
                {/* Dialogue */}
                <div className="page28q4-dialogue-section lg:w-2/3">
                    <div className="page28q4-dialogue-exercise w-full bg-white p-8 rounded-xl">
                        <div className="page28q4-dialogue-text space-y-6">
                            {/* Ligne 1 */}
                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-blue-600 min-w-[80px]">
                                    La vendeuse :
                                </span>
                                <span className="text">Bonjour, madame, puis-je</span>
                                <input
                                    type="text"
                                    value={inputs[0] || ""}
                                    onChange={(e) => handleInputChange(0, e.target.value)}
                                    style={{ borderBottom: "2px solid black", marginLeft: "5px" }}
                                />
                                <span className="text">aider ?</span>
                            </div>



                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                                    Mme Leger :
                                </span>
                                <span className="text">Oui. Avez-vous cette </span>

                                <input
                                    type="text"
                                    value={inputs[1] || ""}
                                    onChange={(e) => handleInputChange(0, e.target.value)}
                                    style={{ borderBottom: "2px solid black", marginLeft: "5px" }}
                                />
                                <span className="text">en</span>
                                <input
                                    type="text"
                                    value={inputs[2] || ""}
                                    onChange={(e) => handleInputChange(0, e.target.value)}
                                    style={{ borderBottom: "2px solid black", marginLeft: "5px" }}
                                />
                                <span className="text">?</span>

                            </div>
                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-blue-600 min-w-[80px]">
                                    La vendeuse                                </span>

                                <span className="text">
                                    Bien sûr.                                </span>
                            </div>

                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                                    Mme Leger                                </span>
                                <span className="text">Je peux l’essayer ?</span>

                            </div>

                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-blue-600 min-w-[80px]">
                                    La vendeuse :                </span>
                                <span className="text">Bien sûr. Vous</span>
                                <input
                                    type="text"
                                    value={inputs[3] || ""}
                                    onChange={(e) => handleInputChange(0, e.target.value)}
                                    style={{ borderBottom: "2px solid black", marginLeft: "5px" }}
                                />
                                <span className="text">une cabine d’essayage derrière vous. </span>
                            </div>

                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                                    Mme Leger :                                </span>
                                <input
                                    type="text"
                                    value={inputs[4] || ""}
                                    onChange={(e) => handleInputChange(0, e.target.value)}
                                    style={{ borderBottom: "2px solid black", marginLeft: "5px" }}
                                />
                                <span className="text">.</span>

                            </div>

                           
                        </div>
                    </div>
                </div>

            
            </div>

            <div className="spaces"></div>

            {/* Buttons */}
            <div className="action-buttons-container flex gap-4">
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

export default Page5_Q1_CleanAudio;
