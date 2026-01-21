import React, { useState, useRef } from "react";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U4Audio/U4Q4.mp3";
import ValidationAlert from "../../Popup/ValidationAlert";
import img1 from "../../../assets/unite4pages/SVG/img71.svg";
import img2 from "../../../assets/unite4pages/SVG/img72.svg";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";

const Page5_Q1_CleanAudio = () => {
 

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
const captions = [
  { start:7.5 , end: 8.3, text: "unité 4," },
  { start:8.9 , end: 9.5, text: "en ville." },
  { start:10.3 , end: 11.1, text: "Section A," },
  { start:11.6 , end: 12.2, text: "Provence," },
  { start:12.7 , end: 13.9, text: "le goût de la France." },
  { start:14.7 , end: 15.6, text: "Exercice 4." },
  { start:16.9 , end: 18.6, text: "Écoute et entoure la bonne réponse." },
  { start:23.9 , end: 24.9, text: "C'est moi," },
  { start:24.9 , end: 25.5, text: "Caroline," },
  { start:25.5 , end: 27.5, text: "et mon émission Autor de la France." },
  { start:28.1 , end: 28.7, text: "Aujourd'hui," },
  { start:28.7 , end: 30.2, text: "nous parlerons de la Provence." },
  { start:30.4 , end: 31.6, text: "Formidable province," },
  { start:31.6 , end: 32.7, text: "riche en" },
  { start:32.8 , end: 34.7, text: "Vous allez le découvrir avec moi !" },
  { start:35.2 , end: 37.41, text: "Notre premier arrêt est la ville d'Orange." },
  { start:38.1 , end: 38.7, text: "Aujourd'hui," },
  { start:38.7 , end: 39.7, text: "dans notre studio," },
  { start:39.7 , end: 40.6, text: "nous avons Marc." },
  { start:41.2 , end: 41.8, text: "Bonjour Marc," },
  { start:42.0 , end: 42.8, text: "comment ça va ?" },
  { start:44.03 , end: 44.8, text: "Bonjour Caroline," },
  { start:45.3 , end: 46.0, text: "ça va très bien." },
  { start:46.4 , end: 46.9, text: "Et vous ?" },
  { start:48.07 , end: 48.59, text: "Ça va bien." },
  { start:48.8 , end: 49.43, text: "Alors dis-moi," },
  { start:49.3 , end: 50.3, text: "quel âge as-tu ?" },
  { start:51.4 , end: 52.0, text: "J'ai 15 ans." },
  { start:53.0 , end: 53.8, text: "Où habites-tu ?" },
  { start:54.9 , end: 55.9, text: "J'habite à Piolanque." },
  { start:56.5 , end: 58.4, text: "C'est un village à 6 km d'Orange." },
  { start:59.7 , end: 59.9, text: "Super," },
  { start:59.9 , end: 61.0, text: "tu habites dans une ferme ?" },
  { start:62.4 , end: 62.79, text: "Oui," },
  { start:63.0 , end: 64.2, text: "j'habite dans une ferme." },
  { start:65.4 , end: 66.5, text: "Avec qui habites-tu ?" },
  { start:67.8 , end: 68.3, text: "J'habite avec ma famille," },
  { start:69.3 , end: 69.9, text: "ma mère," },
  { start:69.9 , end: 70.7, text: "mon père," },
  { start:71.7 , end: 72.9, text: "mes trois frères et mes grands-parents." },
  { start:73.9 , end: 76.11, text: "Que fait ta famille ?" },
  { start:76.11 , end: 77.35, text: "Ma famille produit des truffes." },
  { start:78.6 , end: 78.95, text: "Très bien." },
  { start:79.15 , end: 79.7, text: "Et maintenant," },
  { start:79.8 , end: 81.6, text: "dis-moi quelque chose à propos d'Orange." },
];

  // ✅ MCQ Answers
  const [mcqAnswers, setMcqAnswers] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
  });

  // ✅ Correct Answers
  const correctAnswers = {
    a: "C’est l’animatrice de l’émission.",
    b: "Il a quinze ans.",
    c: "Il habite à Piolenc. C’est un village à 6 km d’Orange.",
    d: "Sa famille produit des truffes.",
  };

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
    }
  };

  const handleSelect = (question, value) => {
    setMcqAnswers((prev) => ({
      ...prev,
      [question]: value,
    }));
  };

  const checkAnswer = () => {
    let correctCount = 0;

    Object.keys(correctAnswers).forEach((key) => {
      if (mcqAnswers[key] === correctAnswers[key]) {
        correctCount++;
      }
    });

    setScore({ correct: correctCount, total: 4 });

    if (correctCount === 4) {
      ValidationAlert.success(
        "Excellent!",
        "All answers are correct!",
        "4/4"
      );
    } else if (correctCount === 0) {
      ValidationAlert.error(
        "Incorrect!",
        "Try again!",
        "0/4"
      );
    } else {
      ValidationAlert.error(
        "Almost there!",
        `You got ${correctCount} out of 4 correct.`,
        `${correctCount}/4`
      );
    }
  };

  const showAnswerFunc = () => {
    setMcqAnswers({ ...correctAnswers });
    setScore({ correct: 4, total: 4 });

    ValidationAlert.success(
      "Answers shown",
      "The correct answers have been placed.",
      "4/4"
    );
  };

  const resetExercise = () => {
    setMcqAnswers({ a: "", b: "", c: "", d: "" });
    setScore(null);
    resetAudio();
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center gap-8 p-4">
      <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
      >
        <span style={{ backgroundColor: "#d47176", color: "#white" }} className="ex-A">A</span>
        <span style={{ color: "black" }} className="number-of-q">4</span>
     Écoute et entoure la bonne réponse.
      </header>

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

      {score && <ScoreCardEnhanced score={score} />}

      <div className="question-container">
        <div className="image-box1">
          <img src={img1} alt="img1" style={{ width: "80%" }} />
          <img src={img2} alt="img2" style={{ width: "80%" }} />
        </div>

        <div className="mcq-box">
          {/* A */}
          <div className="question-block">
            <p>a. Qui est Caroline ?</p>
            {[
              "C’est la mère de Marc.",
              "C’est l’animatrice de l’émission.",
              "C’est l’amie de Marc.",
            ].map((opt, index) => (
              <label key={opt} className="option">
                <input
                  type="radio"
                  name="a"
                  checked={mcqAnswers.a === opt}
                  onChange={() => handleSelect("a", opt)}
                />
                <span>{index + 1}.</span> {opt}
              </label>
            ))}
          </div>

          {/* B */}
          <div className="question-block">
            <p>b. Quel âge a Marc ?</p>
            {[
              "Il a douze ans.",
              "Elle a quinze ans.",
              "Il a quinze ans.",
            ].map((opt, index) => (
              <label key={opt} className="option">
                <input
                  type="radio"
                  name="b"
                  checked={mcqAnswers.b === opt}
                  onChange={() => handleSelect("b", opt)}
                />
                <span>{index + 1}.</span> {opt}
              </label>
            ))}
          </div>

          {/* C */}
          <div className="question-block">
            <p>c. Où habite-t-il ?</p>
            {[
              "Il habite à Piolenc. C’est un village à 6 km d’Orange.",
              "Il habite à Piolenc. C’est un village à 16 km d’Orange.",
              "Il habite à Piolenc. C’est un village à 7 km d’Orange.",
            ].map((opt, index) => (
              <label key={opt} className="option">
                <input
                  type="radio"
                  name="c"
                  checked={mcqAnswers.c === opt}
                  onChange={() => handleSelect("c", opt)}
                />
                <span>{index + 1}.</span> {opt}
              </label>
            ))}
          </div>

          {/* ✅ D (تم التصحيح هنا) */}
          <div className="question-block">
            <p>d. Que fait sa famille ?</p>
            {[
              "Sa famille produit du fromage.",
              "Sa famille produit de la laine.",
              "Sa famille produit des truffes.",
            ].map((opt, index) => (
              <label key={opt} className="option">
                <input
                  type="radio"
                  name="d"
                  checked={mcqAnswers.d === opt}   
                  onChange={() => handleSelect("d", opt)}
                />
                <span>{index + 1}.</span> {opt}
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="spaces"></div>
  <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">
          Recommencer ↻
        </button>
        <button onClick={showAnswerFunc} className="show-answer-btn swal-continue">
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
