import React, { useState,useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import img1 from "../../../assets/unite2pages/svg/U2P40EXE3.svg";
import page5_CD2 from "../../../assets/U2Audio/U2SdQ3.mp3";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  0: "les maths",
  1: "sportif et le club des art",
  2: "de photographie",
  3: "16 h 45",
  4: "12 h 55",
  5: "cours de français",
};

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
  {start:5.1,end:7.9,text:"Grand prix A1, unité 2,"},
  {start:7.9,end:9.2,text:"à l'école,"},
  {start:9.2,end:10.6,text:"section D,"},
  {start:10.6,end:12.1,text:"un rendez-vous."},
  {start:12.1,end:13.8,text:"Exercice 1."},
  {start:13.8,end:16.2,text:"Écoute et associe l'activité"},
  {start:16.2,end:17.7,text:"au dessin qui correspond."},
  {start:19.7,end:23.3,text:"Le club sportif représente… A."},
  {start:23.3,end:29.7,text:"Le rugby B. La natation C."},
  {start:29.7,end:33.5,text:"Le basketball D."},
  {start:33.5,end:34.6,text:"Le football"},
  {start:36.8,end:39.2,text:"E, la gymnastique."},
  {start:39.2,end:42.2,text:"F, la course à pied."},
  {start:44.1,end:48.4,text:"Le club des arts représente… A,"},
  {start:48.4,end:49.5,text:"la peinture."},
  {start:51.1,end:53.2,text:"B, la photographie."},
  {start:55.0,end:57.4,text:"C, le théâtre."},
  {start:57.4,end:60.2,text:"D, la sculpture."},
  {start:62.0,end:63.8,text:"E, l'artisanat."},
  {start:65.9,end:67.5,text:"F. Le graphisme."},
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

  const [score, setScore] = useState(null);

  const handleInputChange = (index, value) => {
    setInputs({
      ...inputs,
      [index]: value,
    });
  };

  const checkAnswer = () => {
    let correctCount = 0;
    Object.keys(correctAnswers).forEach((key) => {
      const userAnswer = inputs[key] ? inputs[key].toLowerCase().trim() : "";
      const correctAnswer = correctAnswers[key].toLowerCase().trim();

      const isCorrect =
        userAnswer === correctAnswer ||
        userAnswer.includes(correctAnswer) ||
        correctAnswer.includes(userAnswer);

      if (isCorrect) correctCount++;
    });

    const total = Object.keys(correctAnswers).length;
    setScore({ correct: correctCount, total });

    if (correctCount === total) {
      ValidationAlert.success(
        `Excellent! (${correctCount}/${total})`,
        "Toutes les réponses sont correctes!"
      );
    } else if (correctCount === 0) {
      ValidationAlert.error(
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
     resetAudio();
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
        <span className="ex-A" style={{ backgroundColor: "#df4f89" }}>
          D
        </span>
        <span className="number-of-q">3</span> Écoute la conversation, puis écris l'information manquante.
      </header>
 <div style={{ display: "flex", justifyContent: "center", width: "100%" }}>
                  <div className="audio-popup-read" style={{ width: "30%" }}>
                    <div className="audio-inner player-ui">
                      <audio
                        ref={audioRef}
                        src={page5_CD2}
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
                            background: `linear-gradient(to right, #430f68 ${(current / duration) * 100}%, #d9d9d9ff ${(current / duration) * 100}%)`,
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
                                className={`caption-inPopup-line2 ${activeIndex === i ? "active" : ""}`}
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
      <div className="exercise-container w-full max-w-6xl flex flex-row gap-2 ml-0 lg:ml-60">
        {/* الحوار على اليسار */}
        <div className="dialogue-section flex-1 min-w-0">
          <div className="dialogue-exercise w-full bg-white p-8 rounded-xl ">
            <div className="dialogue-text space-y-1">
              {/* Ligne 1 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                  Valerie :
                </span>
                <span className="text">Comment ça va, Lela ?</span>
              </div>

              {/* Ligne 2 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-900 min-w-[80px]">
                  Lela :
                </span>
                <span className="text"> Bien. Et toi ?</span>
              </div>

              {/* Ligne 3 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                  Valerie :
                </span>
                <span className="text">Pas mal.Tu aimes</span>
                <input
                  type="text"
                  value={inputs[0] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-600 focus:outline-none focus:border-blue-500 w-48"
                />
                <span>?</span>
              </div>

              {/* Ligne 4 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-900 min-w-[80px]">
                  Lela :
                </span>

                <span className="text">
                  Oui, mais notre professeur parle très doucement.
                </span>
              </div>

              {/* Ligne 5 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                  Valerie :
                </span>
                <span className="text">
                  Oui, c’est vrai. Est-ce que tu as choisi ton club ?
                </span>
              </div>

              {/* Ligne 7 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-900 min-w-[80px]">
                  Lela :
                </span>
                <span className="text">
                  Non, nous avons deux nouveaux clubs.{" "}
                </span>
              </div>

              {/* Ligne 8 */}
              <div className="dialogue-line flex items-start">
                <span className="text">Le club</span>
                <br />
                <input
                  type="text"
                  value={inputs[1] || ""}
                  onChange={(e) => handleInputChange(4, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-48"
                />
              </div>

              {/* Ligne 9 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                  Valerie :
                </span>
                <span className="text">
                  J’aime le club des arts, parce que c’est intéressant. Je veux
                  m'inscrire au cours
                </span>
              </div>

              {/* Ligne 10 */}
              <div className="dialogue-line flex items-start">
                <input
                  type="text"
                  value={inputs[2] || ""}
                  onChange={(e) => handleInputChange(5, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-600 focus:outline-none focus:border-pink-500 w-40"
                />
                <span className="text">Et après, au cours de graphisme.</span>
              </div>
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-900 min-w-[80px]">
                  Lela :
                </span>
                <span className="text">
                  À quelle heure commence le cours de photographie ?
                </span>
              </div>

              {/* Ligne 11 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                  Valerie :
                </span>
                <span className="text">Il commence à</span>
                <input
                  type="text"
                  value={inputs[3] || ""}
                  onChange={(e) => handleInputChange(5, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-600 focus:outline-none focus:border-pink-500 w-40"
                />
              </div>

                 <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-900 min-w-[80px]">
                  Lela :
                </span>
                <span className="text">
                J'aimerais suivre ce cours, mais j’ai cours de gymnastique.
                </span>
              </div>

                 <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-pink-600 min-w-[80px]">
                 Valerie :
                </span>
                <span className="text">
               Comme c’est triste ! Mais nous avons rendez-vous avec monsieur Berger à proposde notre projet.
                </span>
              </div>
                 <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-900 min-w-[80px]">
              Lela :
                </span>
                <span className="text">
               Oui, c’est vrai ! Oh mon Dieu ! Il est
                </span>
                  <input
                  type="text"
                  value={inputs[4] || ""}
                  onChange={(e) => handleInputChange(5, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-600 focus:outline-none focus:border-pink-500 w-40"
                />
                  <span className="text">
              Nous avons
                </span>
                  <input
                  type="text"
                  value={inputs[5] || ""}
                  onChange={(e) => handleInputChange(5, e.target.value)}
                  className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-600 focus:outline-none focus:border-pink-500 w-40"
                />
                    <span className="text">
              dans 5 minutes.
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* الصور على اليمين */}
        <div className="images-section lg:w-1/3 flex flex-col gap-6">
          <div className="image-container" style={{ width: "100%" }}>
            <img
              src={img1}
              alt="Dialogue illustration 1"
              className="w-full h-auto max-h-[100%] max-w-[100%] object-contain"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
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

export default Page5_Q1_CleanAudio;
