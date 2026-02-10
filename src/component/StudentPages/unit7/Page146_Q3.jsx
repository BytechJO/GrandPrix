import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import img1 from "../../../assets/unite6pages/SVG/P146Q3.svg";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U7Audio/u7scq3.mp3";

/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
    0: "comment ça va",
    1: "tu es allée",
    2: "avec ma famille",
    3: "Qu'estce que tu as fait ",
    4: "logé dans un hôtel",
    5: "exploré un parc national",
    6: "les baleines",

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
      { start: 5.359, end: 8.409, text: "Grand Prix A1, Unité 7," },
  { start: 8.409, end: 11.159, text: "Les loisirs. Section C," },
  { start: 11.160, end: 12.689, text: "Mes vacances." },

  { start: 12.689, end: 14.809, text: "Exercice 3." },
  { start: 14.809, end: 17.259, text: "Écoute et écris l'information" },
  { start: 17.259, end: 18.600, text: "manquante." },

  { start: 20.600, end: 22.739, text: "Salut Ruby, comment ça va ?" },
  { start: 22.739, end: 25.439, text: "Salut, ça va bien, merci." },

  { start: 25.439, end: 27.140, text: "Où est-ce que tu es allé" },
  { start: 27.140, end: 28.679, text: "pendant tes vacances ?" },

  { start: 28.679, end: 31.819, text: "Je suis allé en Islande." },
  { start: 31.820, end: 32.889, text: "Ah bon ?" },
  { start: 32.889, end: 35.620, text: "J'y suis allée avec ma famille." },

  { start: 35.620, end: 36.789, text: "Qu'est-ce que tu as" },
  { start: 36.789, end: 37.979, text: "fait là-bas ?" },

  { start: 37.979, end: 39.730, text: "Nous avons logé dans un" },
  { start: 39.730, end: 41.159, text: "hôtel formidable." },

  { start: 41.160, end: 42.339, text: "J'ai vu beaucoup de choses" },
  { start: 42.340, end: 43.389, text: "intéressantes." },

  { start: 43.389, end: 44.550, text: "Nous avons exploré" },
  { start: 44.550, end: 45.959, text: "un parc national." },

  { start: 45.959, end: 47.169, text: "Nous avons visité une" },
  { start: 47.170, end: 48.589, text: "chute d'eau. Puis," },

  { start: 48.589, end: 49.890, text: "nous sommes allés observer les" },
  { start: 49.890, end: 51.890, text: "baleines et ma mère et moi avons" },
  { start: 51.890, end: 53.659, text: "nagé dans le lagon bleu." },

  { start: 53.659, end: 55.050, text: "Est-ce que tu as vu une" },
  { start: 55.050, end: 56.529, text: "aurore boréale ?" },

  { start: 56.529, end: 59.030, text: "Oui, c'est magnifique. Et toi," },
  { start: 59.030, end: 59.809, text: "qu'est-ce que tu as fait" },
  { start: 59.810, end: 60.859, text: "pendant tes vacances ?" },
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
                style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
            >
                <span style={{ backgroundColor: "#cf7230", color: "#white" }} className="ex-A">C</span>
                <span style={{ color: "black" }} className="number-of-q">3</span>
           Écoute et écris l'information manquante.
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
                                    Denis :
                                </span>
                                <span className="text">Salut, Ruby. </span>
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
                                    Ruby :
                                </span>

                                <span className="text">
                                    Salut, ça va bien merci.
                                </span>
                            </div>

                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                                    Denis :
                                </span>
                                <span className="text">Où est-ce que</span>
                                <input
                                    type="text"
                                    value={inputs[1] || ""}
                                    onChange={(e) => handleInputChange(1, e.target.value)}
                                    style={{ borderBottom: "2px solid black", marginLeft: "5px" }}
                                />
                                <span className="text">pendant tes vacances ?</span>
                            </div>
                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-blue-600 min-w-[80px]">
                                    Ruby :
                                </span>

                                <span className="text">
                                    Je suis allée en Islande.
                                </span>
                            </div>
                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                                    Denis :
                                </span>

                                <span className="text">
                                    Ah bon ?
                                </span>
                            </div>

                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-blue-600 min-w-[80px]">
                                    Ruby :
                                </span>
                                <span className="text">J'y suis allée</span>
                                <input
                                    type="text"
                                    value={inputs[2] || ""}
                                    onChange={(e) => handleInputChange(2, e.target.value)}
                                    style={{ borderBottom: "2px solid black", marginLeft: "5px" }}
                                />
                            </div>

                          
                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                                    Denis :            </span>
                                <input
                                    type="text"
                                    value={inputs[3] || ""}
                                    onChange={(e) => handleInputChange(3, e.target.value)}
                                    style={{ borderBottom: "2px solid black", marginLeft: "5px" }}
                                />
                                <span className="text">là-bas ?</span>
                            </div>

                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-blue-600 min-w-[80px]">
                                    Ruby :
                                </span>
                                <span className="text">Nous avons</span>
                                <input
                                    type="text"
                                    value={inputs[4] || ""}
                                    onChange={(e) => handleInputChange(4, e.target.value)}
                                    style={{ borderBottom: "2px solid black", marginLeft: "5px" }}
                                />
                                <span className="text">formidable, j’ai vu beaucoup de choses intéressantes</span>
                                <span className="text">Nous avons</span>
                                <input
                                    type="text"
                                    value={inputs[5] || ""}
                                    onChange={(e) => handleInputChange(5, e.target.value)}
                                    style={{ borderBottom: "2px solid black", marginLeft: "5px" }}
                                />
                                <span className="text">nous avons visité une chute</span> <br />
                                    <span className="text">d’eau. Puis, nous sommes allés observer</span>
                                     <input
                                    type="text"
                                    value={inputs[6] || ""}
                                    onChange={(e) => handleInputChange(6, e.target.value)}
                                    style={{ borderBottom: "2px solid black", marginLeft: "5px" }}
                                />
                                <span className="text">et ma mère et moi avons nagé dans le Lagon Bleu.</span>
                            </div>

                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                                   Denis :
                                </span>
                                <span className="text">Est-ce que tu as vu une aurore boréale ?</span>


                            </div>
                            <div className="dialogue-line flex items-start">
                                <span className="speaker font-bold text-blue-600 min-w-[80px]">
                               Ruby :
                                </span>
                                <span className="text">Oui, c'est magnifique. Et toi, qu’est-ce que tu as fait pendant tes vacances ?</span>


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
