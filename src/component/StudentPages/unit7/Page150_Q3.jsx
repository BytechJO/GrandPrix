import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U3Audio/U3SAQ4.mp3";
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
        { start: 5.5, end: 6.7, text: "Rempris A1" },
        { start: 6.7, end: 7.9, text: "unité3" },
        { start: 7.9, end: 9.5, text: "sous le même 0toit" },
        { start: 10.14, end: 11.0, text: "SectionA." },
        { start: 11.6, end: 12.2, text: "Ma famille." },
        { start: 13.3, end: 14.47, text: "Exercice 4." },
        { start: 14.8, end: 16.9, text: "Écoute et entoure la bonne réponse" },
        { start: 21.2, end: 21.7, text: "Salut Ray," },
        { start: 21.7, end: 22.6, text: "comment ça va ?" },
        { start: 23.7, end: 25.9, text: "Je suis très heureux parce qu'aujourd'hui," },
        { start: 26.3, end: 27.7, text: "mon ami arrive à Marseille." },
        { start: 29.0, end: 29.5, text: "C'est vrai ?" },
        { start: 29.7, end: 30.75, text: "À quelle heure est son train ?" },
        { start: 32.0, end: 33.6, text: "À 5h15 de l'après-midi." },
        { start: 36.54, end: 37.23, text: "Salut Daniel," },
        { start: 37.5, end: 39.4, text: "comment ça va ?" },
        { start: 39.5, end: 39.9, text: "Salut Ray," },
        { start: 40.2, end: 40.9, text: "ça va très bien." },
        { start: 42.2, end: 43.5, text: "Je suis très heureux de te voir." },
        { start: 44.7, end: 45.3, text: "Moi aussi." },
        { start: 47.5, end: 48.8, text: "Je veux te présenter mon père." },
        { start: 49.3, end: 50.9, text: "Il s'appelle Gérard Dupont." },
        { start: 52.3, end: 53.6, text: "Enchanté Monsieur Dupont." },
        { start: 54.8, end: 56.6, text: "C'est un plaisir de te rencontrer Daniel." },
        { start: 57.5, end: 57.9, text: "Alors," },
        { start: 58.3, end: 59.5, text: "allons à la maison." },
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
