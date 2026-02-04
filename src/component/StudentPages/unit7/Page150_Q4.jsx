import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard"; // عدّل المسار حسب مكانه
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U7Audio/u7sdq4.mp3";

const Page5_Q1_CleanAudio = () => {
  const audioRef = useRef(null);
  const [inputs, setInputs] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const [showCaption, setShowCaption] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
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
    { start: 5.339, end: 8.349, text: "Grand prix A1, unité 7." },
  { start: 8.350, end: 10.659, text: "Les loisirs. Section D." },
  { start: 10.660, end: 12.110, text: "Autour du monde." },

  { start: 12.110, end: 13.809, text: "Exercice 4." },
  { start: 13.809, end: 15.329, text: "Écoute le reste de la" },
  { start: 15.330, end: 17.190, text: "conversation et réponds" },
  { start: 17.190, end: 19.109, text: "aux questions." },

  { start: 19.109, end: 20.289, text: "Et toi," },
  { start: 20.290, end: 21.929, text: "qu'est-ce que tu as fait hier ?" },

  { start: 21.929, end: 23.660, text: "Mes grands-parents sont venus" },
  { start: 23.660, end: 24.729, text: "nous rendre visite." },
  { start: 24.729, end: 26.359, text: "Nous avons dîné ensemble." },
  { start: 26.359, end: 28.220, text: "Et puis j'ai fait mes devoirs." },

  { start: 28.220, end: 30.839, text: "Qu'est-ce que tu as mangé ?" },
  { start: 30.839, end: 32.560, text: "Nous avons mangé du riz avec de" },
  { start: 32.560, end: 34.599, text: "la viande et de la salade." },

  { start: 34.600, end: 35.740, text: "Et à quelle heure tu" },
  { start: 35.740, end: 36.909, text: "t'es couchée ?" },
  { start: 36.910, end: 38.759, text: "Vers dix heures trente." },
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
    f: "",
  });
  const [score, setScore] = useState(null); // لتخزين عدد الإجابات الصحيحة وإجمالي الأسئلة

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
    a: "Ses grands-parents sont venus leur rendre visite.",
    b: "Ils ont dîné ensemble.",
    c: "Ils ont mangé du riz avec de la viande et de la salade.",
    d: "Elle a fait ses devoirs.",
    e: "Elle s’est couchée vers 10 h 30.",

  };

  // === النصوص الأصلية للأسئلة ===
  const questions = {
    a: "Qui est venu rendre visite à Valérie ?",
    b: "Qu’est-ce qu’ils ont fait ?",
    c: "Qu’est-ce qu’ils ont mangé ?",
    d: "Qu’est-ce que Valérie a fait après ?",
    e: "À quelle heure elle s’est couchée ?",
 
  };

  // ✅ HANDLE CHANGE
  const handleChange = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    // إعادة ضبط لون الخلفية عند الكتابة
    setAnswerStatus((prev) => ({ ...prev, [key]: "" }));
  };

  // ✅ CHECK ANSWER
  // ✅ CHECK ANSWER
  const checkAnswer = () => {
    const newStatus = {};
    let correctCount = 0;
    let incomplete = false;

    Object.keys(correctAnswers).forEach((key) => {
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
    Object.keys(correctAnswers).forEach((key) => {
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
    Object.keys(correctAnswers).forEach((key) => {
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
    if (answerStatus[key] === "wrong") return { backgroundColor: "#f8d7da" }; // أحمر فاتح
    return {};
  };

  return (
    <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
     <header
                className="header-title-page1 w-full text-left mb-4"
                style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
            >
                <span style={{ backgroundColor: "#cf7230", color: "#white" }} className="ex-A">D</span>
                <span style={{ color: "black" }} className="number-of-q">4</span>
          Écoute le reste de la conversation et réponds aux questions.
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
                  background: `linear-gradient(to right, #430f68 ${
                    (current / duration) * 100
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
      <div className="page5Q3" style={{ marginLeft: "43%" }}>
        {Object.keys(questions).map((key, index) => (
          <div className="input-group" key={key}>
            <label>
              <strong style={{ fontSize: "20px" }}>
                {String.fromCharCode(97 + index)}{" "}
              </strong>
              {questions[key]}
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
      {score && <ScoreCardEnhanced score={score} />}
      <div className="spaces"></div>
      {/* Action Buttons */}
      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">
          Recommencer ↻
        </button>
        <button
          onClick={showAnswerFunc}
          className="show-answer-btn swal-continue"
        >
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
