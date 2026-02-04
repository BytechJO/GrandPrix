import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U7Audio/u7sdq3.mp3";
import ValidationAlert from "../../Popup/ValidationAlert";
import img1 from "../../../assets/unite3pages/svg/Page50Q4.svg";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
const Page5_Q1_CleanAudio = () => {
    const audioRef = useRef(null);
    const [answers, setAnswers] = useState({});
    const [isPlaying, setIsPlaying] = useState(false);
    const [current, setCurrent] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showSettings, setShowSettings] = useState(false);
    const [volume, setVolume] = useState(1);
    const [showCaption, setShowCaption] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);
    const [checked, setChecked] = useState(false);

    const correctAnswers = {
        a: "Comment ça va",
        b: "heureux",
        c: "ami",
        d: "train",
        e: "5 h 15",
        f: "bien",
        g: "très père",
        h: "à la maison",
    };

    const checkAnswer = () => {
        let correctCount = 0;
        let incomplete = false;

        Object.keys(correctAnswers).forEach((key) => {
            if (!answers[key]) incomplete = true;
            if (answers[key] === correctAnswers[key]) correctCount++;
        });

        if (incomplete) {
            ValidationAlert.info("Incomplete", "Please answer all questions.");
            return;
        }

        setChecked(true);

        const total = Object.keys(correctAnswers).length;
        correctCount === total
            ? ValidationAlert.success(`Score: ${correctCount}/${total}`)
            : ValidationAlert.error(`Score: ${correctCount}/${total}`);
    };

    const showAnswerFunc = () => {
        setAnswers(correctAnswers);
        setChecked(true);
    };

    const resetExercise = () => {
        setAnswers({});
        setChecked(false);
        resetAudio();
    };
    const captions = [
         { start: 5.339, end: 8.339, text: "Grand Prix A1, unité sept," },
  { start: 8.340, end: 10.880, text: "les loisirs, section D," },
  { start: 10.880, end: 14.049, text: "autour du monde. Exercice trois." },

  { start: 14.049, end: 16.259, text: "Écoute le dialogue et entoure" },
  { start: 16.259, end: 17.260, text: "la bonne réponse." },

  { start: 19.319, end: 20.939, text: "Salut, comment ça va ?" },
  { start: 20.940, end: 22.839, text: "Très bien, merci." },

  { start: 22.840, end: 24.599, text: "Je t'ai téléphoné hier," },
  { start: 24.599, end: 26.449, text: "mais personne n'a répondu." },

  { start: 26.450, end: 27.749, text: "Avec ma famille," },
  { start: 27.750, end: 29.589, text: "nous sommes allés à un festival." },

  { start: 29.590, end: 31.729, text: "Quel festival ?" },
  { start: 31.730, end: 33.439, text: "Un festival du chocolat qui" },
  { start: 33.440, end: 35.359, text: "s'appelle le Salon du chocolat." },

  { start: 35.359, end: 36.269, text: "Bon," },
  { start: 36.269, end: 37.360, text: "dis-moi quelque chose sur" },
  { start: 37.360, end: 39.550, text: "ce festival. Alors," },

  { start: 39.550, end: 40.640, text: "il a commencé à six heures" },
  { start: 40.640, end: 42.020, text: "avec un défilé de mode." },

  { start: 42.020, end: 43.099, text: "Les mannequins portent des" },
  { start: 43.099, end: 44.620, text: "vêtements en chocolat." },

  { start: 44.620, end: 46.939, text: "Des vêtements en chocolat ?" },
  { start: 46.939, end: 47.839, text: "Oui," },
  { start: 47.840, end: 49.569, text: "des vêtements faits en chocolat." },

  { start: 49.569, end: 49.809, text: "Et puis," },
  { start: 49.809, end: 50.690, text: "nous avons goûté beaucoup" },
  { start: 50.690, end: 52.140, text: "de chocolats différents." },

  { start: 52.140, end: 53.419, text: "C'est bien." },
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
    const updateCaption = (currentTime) => {
        const index = captions.findIndex(
            (cap) => currentTime >= cap.start && currentTime <= cap.end
        );
        setActiveIndex(index !== -1 ? index : null);
    };
    return (
        <div className="page-wrapper1 flex flex-col items-center gap-8 p-4">
            {/* العنوان */}
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
                <span style={{ backgroundColor: "#5e74b7" }} className="ex-A">
                    A
                </span>{" "}
                <span style={{ color: "black" }} className="number-of-q">
                    4
                </span>
                Écoute et entoure la bonne réponse.{" "}
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
                                    background: `linear-gradient(to right, #430f68 ${(current / duration) * 100
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
            {/* التمرين */}
            <div className="exercise-choices w-full max-w-2xl">
                {[
                    {
                        id: "a",
                        speaker: "Valérie :",
                        before: "Salut, comment ça va ?",

                    },
                    {
                        id: "b",
                        speaker2: "Elise :",

                        options: ["Bien", "très bien"],
                        after: "merci.",
                    },
                    {
                        id: "c",
                        speaker: "Valérie :",

                        after: "Je t'ai téléphoné hier, mais personne n’a répondu.",
                    },
                    {
                        speaker: "Elise :",
                        id: "d",
                        before: "Ah, avec",
                        options: ["ma famille", "mon frère,"],
                        after: "nous sommes allés à un festival.",
                    },
                    {
                        speaker2: "Valérie :",
                        id: "e",
                        before: "Quel",
                        options: ["fête", "festival"],
                        after: "?",
                    },

                    {
                        speaker3: "Elise :",
                        id: "f",
                        before: "Un festival du chocolat qui s'appelle le",
                        options: ["« Spectacle »", "« Salon du chocolat »."],
                    

                    },
                    {
                        speaker2: "Valérie :",
                        id: "g",
                        before: "Bon, dis-moi quelque chose sur ce festival.",
                  
                    },
               
                    {
                        speaker2: "M. Dupont :",
                        id: "h",
                        before: "C’est un plaisir de te rencontrer, Daniel. Alors,allons",
                        options: ["à la maison", "à la station"],
                    },
                ].map((q) => (
                    <div key={q.id} className="question-row">
                        {/* المتكلم */}
                        {q.speaker && (
                            <span
                                style={{
                                    color: "#f89f7c",
                                    fontWeight: "bold",
                                    marginRight: "8px",
                                }}
                            >
                                {q.speaker}
                            </span>
                        )}
                        {q.speaker2 && (
                            <span
                                style={{
                                    color: "#00b0f0",
                                    fontWeight: "bold",
                                    marginRight: "8px",
                                }}
                            >
                                {q.speaker2}
                            </span>
                        )}
                        {q.speaker3 && (
                            <span
                                style={{
                                    color: "#ee4570",
                                    fontWeight: "bold",
                                    marginRight: "8px",
                                }}
                            >
                                {q.speaker3}
                            </span>
                        )}

                        {/* النص قبل الخيار */}
                        {q.before && (
                            <span className="question-text" style={{ marginRight: "8px" }}>
                                {q.before}
                            </span>
                        )}

                        {/* الخيارات */}
                        {q.options &&
                            q.options.map((opt) => {
                                const isSelected = answers[q.id] === opt;
                                const isCorrect = checked && opt === correctAnswers[q.id];
                                const isWrong =
                                    checked && isSelected && opt !== correctAnswers[q.id];

                                return (
                                    <label
                                        key={opt}
                                        className={`choice-label ${isCorrect ? "correct" : ""} ${isWrong ? "wrong" : ""
                                            }`}
                                    >
                                        <input
                                            type="radio"
                                            name={q.id}
                                            value={opt}
                                            checked={isSelected}
                                            onChange={(e) =>
                                                setAnswers((prev) => ({
                                                    ...prev,
                                                    [q.id]: e.target.value,
                                                }))
                                            }
                                            disabled={checked}
                                        />
                                        {opt}
                                    </label>
                                );
                            })}

                        {/* النص بعد الخيار */}
                        {q.after && (
                            <span className="question-text" style={{ marginLeft: "8px" }}>
                                {q.after}
                            </span>
                        )}
                    </div>
                ))}
                <div className="exercise-image50">
                    <img
                        src={img1}
                        alt="Illustration"
                        style={{
                            maxWidth: "400px",
                            height: "auto",
                            display: "block",
                            borderRadius: "8px",
                        }}
                    />
                </div>
            </div>

            <div className="spaces"></div>

            {/* الأزرار */}
            <div className="action-buttons-container">
                <button onClick={resetExercise} className="try-again-button">
                    Recommencer ↻
                </button>
                <button onClick={showAnswerFunc} className="show-answer-btn">
                    Afficher la réponse
                </button>
                <button onClick={checkAnswer} className="check-button2">
                    Vérifier la réponse ✓
                </button>
            </div>
        </div>
    );
};

export default Page5_Q1_CleanAudio;
