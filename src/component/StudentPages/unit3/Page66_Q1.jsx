import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard"; // عدّل المسار حسب مكانه
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U2Audio/U2ScQ4.mp3";

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
    { start: 5.2, end: 8.3, text: "Grand prix A1, unité 2," },
    { start: 8.3, end: 9.7, text: "à l'école," },
    { start: 9.7, end: 11.4, text: "section C." },
    { start: 11.4, end: 15.4, text: "Lundi, c'est exercice 4." },
    { start: 15.4, end: 17.5, text: "Écoute encore une fois et" },
    { start: 17.5, end: 19.3, text: "réponds aux questions." },
    { start: 19.3, end: 21.6, text: "Bonjour Jenna," },
    { start: 21.6, end: 23.4, text: "comment ça va ?" },
    { start: 23.4, end: 25.4, text: "Salut Carole, ça va bien ?" },
    { start: 25.4, end: 26.1, text: "Merci," },
    { start: 26.1, end: 28.5, text: "et toi ? Bien." },
    { start: 28.5, end: 29.5, text: "Tu as vu notre emploi" },
    { start: 29.5, end: 31.3, text: "du temps ? Non," },
    { start: 31.3, end: 33.1, text: "on peut aller voir ?" },
    { start: 33.1, end: 33.9, text: "Oui, bien sûr." },
    { start: 35.6, end: 36.3, text: "Nous n'avons pas beaucoup" },
    { start: 36.3, end: 37.8, text: "de leçons de technologie." },
    { start: 37.8, end: 39.0, text: "J'aime beaucoup le prof." },
    { start: 39.0, end: 41.0, text: "Oui, c'est vrai." },
    { start: 41.0, end: 42.2, text: "Nous avons maths chaque" },
    { start: 42.2, end: 43.7, text: "jour, sauf le mercredi." },
    { start: 43.7, end: 45.0, text: "Le prof de maths pose" },
    { start: 45.0, end: 46.1, text: "beaucoup de questions." },
    { start: 46.1, end: 47.2, text: "J'aime ça." },
    { start: 47.2, end: 48.7, text: "Ah mon Dieu," },
    { start: 48.7, end: 49.5, text: "combien de cours d'anglais" },
    { start: 49.5, end: 51.5, text: "? Un, deux, trois." },
    { start: 51.5, end: 52.5, text: "Magnifique," },
    { start: 52.5, end: 53.8, text: "c'est ma matière préférée." },
    { start: 53.8, end: 54.8, text: "Quelle est ta matière" },
    { start: 54.8, end: 55.8, text: "préférée ?" },
    { start: 55.8, end: 57.5, text: "Ma matière préférée," },
    { start: 57.5, end: 58.4, text: "c'est l'art." },
    { start: 58.4, end: 59.7, text: "Mais malheureusement," },
    { start: 59.7, end: 60.0, text: "nous n'avons pas beaucoup" },
    { start: 60.0, end: 61.0, text: "de cours." },
    { start: 61.0, end: 63.0, text: "Nous avons aussi des." },
    { start: 63.0, end: 63.8, text: "Cours de physique." },
    { start: 63.8, end: 65.1, text: "D'Eps et de SVT." },
    { start: 65.1, end: 66.1, text: "Qu'est-ce que c'est" },
    { start: 66.1, end: 68.5, text: "l'SVT ? SVT," },
    { start: 68.5, end: 69.7, text: "ça veut dire Science de" },
    { start: 69.7, end: 71.3, text: "la Vie et de la Terre." },
    { start: 71.3, end: 73.3, text: "Ah mon Dieu !" },
    { start: 73.3, end: 74.1, text: "Nous avons les nouvelles" },
    { start: 74.1, end: 76.5, text: "leçons d'espagnol ! Oui." },
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
    a: "Est-ce que tu as une grande famille ?",
    b: "Mon petit frère s’appelle Robert",
    c: "Ce livre est intéressant . ",
    d: "J'ai un novel ordinateur portable .",
    e: "Mon père a quarante et un ans .",
    f: "Est-ce que tu as une grande soeur ?",
 
  };

  // === النصوص الأصلية للأسئلة ===
  const questions = {
     a: "famille / tu / - / ce / as / Est / ? / grande / que / une",
    b: "petit / Robert / frère /. / Mon / s’appelle",
    c: ". / est / Ce / intéressant / livre",
    d: "ai / un / portable /. / J / nouvel / ‘/ ordinateur",
    e: "quarante / Mon / et / père / ans /. / un / a",
    f: "tu / - / que / grande / ce / soeur / Est / une / ? / as",
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
        style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span  style={{ backgroundColor: "#a4dce7", color:"#5e74b7" }} className="ex-A">Grammaire</span> <span style={{color:"black"}} className="number-of-q">1</span> Mets les mots dans le bon ordre.</header>
    
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
