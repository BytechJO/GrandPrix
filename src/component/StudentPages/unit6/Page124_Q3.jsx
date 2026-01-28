import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import img1 from "../../../assets/unite6pages/SVG/page124.svg";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U3Audio/U3SdQ4.mp3";

/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
    0: "comment ça va",
    1: "Pas mal",
    2: "merci ",
    3: "jouer au golf",
    4: "À quelle heure ?",
    5: "jouer au basket",

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
        { start: 5.47, end: 6.6, text: "GrandPrixA1" },
        { start: 7.7, end: 8.2, text: "unité 3," },
        { start: 8.45, end: 9.53, text: "sous le même toit," },
        { start: 10.17, end: 11.0, text: "section D," },
        { start: 11.5, end: 13.5, text: "où ?" },
        { start: 13.5, end: 14.5, text: "Exercice 4." },
        { start: 15.0, end: 17.9, text: "Écoute et écris l'information manquante." },
        {
            start: 20.3,
            end: 23.9,
            text: "Ray est en retard à son cours de football et il ne trouve pas ses affaires.",
        },
        { start: 26.13, end: 26.49, text: "Maman," },
        { start: 26.49, end: 28.49, text: "je suis en retard et je ne trouve rien." },
        { start: 28.8, end: 30.2, text: "Est-ce que tu as rangé ma chambre ?" },
        { start: 31.5, end: 31.7, text: "Oui," },
        { start: 31.7, end: 33.5, text: "parce que ta chambre était en désordre." },
        { start: 34.9, end: 36.3, text: "Je ne trouve pas mes chaussures." },
        { start: 37.4, end: 38.6, text: "Elles sont sous ton lit." },
        { start: 39.7, end: 41.8, text: "Et mes chaussettes ?" },
        { start: 41.8, end: 43.0, text: "Elles sont dans ton tiroir." },
        { start: 44.3, end: 44.5, text: "Bon" },
        { start: 44.8, end: 46.0, text: "je ne trouve pas mon maillot." },
        { start: 47.13, end: 48.4, text: "Il est dans ton armoire." },
        { start: 48.4, end: 49.9, text: "Merci," },
        { start: 49.9, end: 50.8, text: "à plus tard !" },
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
                <span className="ex-A" style={{ backgroundColor: "#5e74b7" }}>D</span>
                <span className="number-of-q">4</span>
                Écoute et écris l’information
                manquante.
            </header>

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
                                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                                    Dillan :
                                </span>
                                <span className="text">Salut, Gustave, </span>
                                <input
                                    type="text"
                                    value={inputs[0] || ""}
                                    onChange={(e) => handleInputChange(0, e.target.value)}
                                    style={{ borderBottom: "2px solid black", marginLeft: "5px" }}
                                />
                                <span className="text">?</span>
                            </div>

                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-blue-600 min-w-[80px]">
                                    Gustave :
                                </span>

                                <span className="text">
                                    Salut, Dillan, bien et toi ?
                                </span>
                            </div>

                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                                    Dillan :
                                </span>
                                <input
                                    type="text"
                                    value={inputs[1] || ""}
                                    onChange={(e) => handleInputChange(0, e.target.value)}
                                    style={{ borderBottom: "2px solid black", marginLeft: "5px" }}
                                />
                                <span className="text">Qu’est-ce que tu fais aujourd’hui ?</span>
                            </div>
                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-blue-600 min-w-[80px]">
                                    Gustave :
                                </span>

                                <span className="text">
                                    Rien. Pourquoi ?
                                </span>
                            </div>

                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                                    Dillan :
                                </span>
                                <span className="text">Marie va</span>
                                <input
                                    type="text"
                                    value={inputs[2] || ""}
                                    onChange={(e) => handleInputChange(0, e.target.value)}
                                    style={{ borderBottom: "2px solid black", marginLeft: "5px" }}
                                />
                                <span className="text">alors nous pouvons regarder le match de basket.</span>
                            </div>

                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-blue-600 min-w-[80px]">
                                    Gustave :                </span>
                                <span className="text">D ’accord.</span>
                                <input
                                    type="text"
                                    value={inputs[3] || ""}
                                    onChange={(e) => handleInputChange(0, e.target.value)}
                                    style={{ borderBottom: "2px solid black", marginLeft: "5px" }}
                                />
                                <span className="text">?</span>
                            </div>
                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                                    Dillan :
                                </span>
                                <span className="text">À 2 heures. Et nous pouvons faire quelque chose après si tu veux.</span>

                            </div>
                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-blue-600 min-w-[80px]">
                                    Gustave :
                                </span>
                                <span className="text">Bien sûr. J’ai une idée. Mes amis vont</span>
                                <input
                                    type="text"
                                    value={inputs[4] || ""}
                                    onChange={(e) => handleInputChange(0, e.target.value)}
                                    style={{ borderBottom: "2px solid black", marginLeft: "5px" }}
                                />
                                <span className="text">à 5 heures et si tu veux, nous pouvons y aller.</span>

                            </div>
            
                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                                    Dillan :
                                </span>
                                <span className="text">Bon. Je te vois à 2 heures chez moi.</span>


                            </div>
                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-blue-600 min-w-[80px]">
                                    Gustave :
                                </span>
                                <span className="text">D’accord,</span>
                                <input
                                    type="text"
                                    value={inputs[5] || ""}
                                    onChange={(e) => handleInputChange(0, e.target.value)}
                                    style={{ borderBottom: "2px solid black", marginLeft: "5px" }}
                                />

                            </div>
                        </div>
                    </div>
                </div>

                {/* الصور */}
                <div className="page28q4-images-section lg:w-1/3 flex flex-col gap-6">
                    <div className="page28q4-image-container bg-white p-4 rounded-xl">
                        <img
                            src={img1}
                            alt="Dialogue illustration 1"
                            className="page28q4-image w-full h-auto max-h-[280px] object-contain"
                        />
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
