import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import img1 from "../../../assets/unite2pages/svg/P36Q3.png";
import "../unit1/CSSPAGE/Q11.css";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U2Audio/U2ScQ3.mp3";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
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
   {start:5.2,end:6.9,text:"Grand prix A1,"},
{start:6.9,end:8.0,text:"unité 2,"},
{start:8.5,end:9.3,text:"à l'école,"},
{start:10.1,end:10.9,text:"section C."},
{start:11.8,end:13.0,text:"Lundi, c'est"},
{start:13.0,end:14.6,text:"exercice 3."},
{start:15.4,end:16.0,text:"Écoute la"},
{start:16.0,end:16.6,text:"conversation"},
{start:16.6,end:17.7,text:"entre Carole"},
{start:17.7,end:18.2,text:"et Jenna."},
{start:19.1,end:19.9,text:"Complète le"},
{start:19.9,end:20.8,text:"dialogue en"},
{start:20.8,end:21.7,text:"utilisant les"},
{start:21.7,end:23.4,text:"mots proposés."},
{start:24.4,end:26.6,text:"Bonjour Jenna,"},
{start:26.6,end:28.2,text:"comment ça va ?"},
{start:28.2,end:29.6,text:"Salut Carole,"},
{start:29.6,end:30.3,text:"ça va bien ?"},
{start:30.3,end:31.7,text:"Merci, et toi ?"},
{start:31.7,end:33.8,text:"Bien, tu as vu"},
{start:33.8,end:34.4,text:"notre emploi"},
{start:34.4,end:35.1,text:"du temps ?"},
{start:35.9,end:36.4,text:"Non, on peut"},
{start:36.4,end:36.8,text:"aller voir."},
{start:38.0,end:38.6,text:"Oui, bien sûr."},
{start:40.1,end:40.8,text:"Nous n'avons"},
{start:40.8,end:41.2,text:"pas beaucoup"},
{start:41.2,end:41.8,text:"de leçons de"},
{start:41.8,end:42.3,text:"technologie."},
{start:42.9,end:43.4,text:"J'aime beaucoup"},
{start:43.4,end:44.1,text:"le prof."},
{start:44.1,end:46.0,text:"Oui, c'est vrai."},
{start:46.0,end:46.4,text:"Nous avons"},
{start:46.4,end:47.0,text:"maths chaque"},
{start:47.0,end:47.6,text:"jour, sauf"},
{start:47.6,end:48.8,text:"le mercredi."},
{start:48.8,end:49.5,text:"Le prof de maths"},
{start:49.5,end:50.2,text:"pose beaucoup"},
{start:50.2,end:51.1,text:"de questions."},
{start:51.1,end:51.5,text:"J'aime ça."},
{start:53.0,end:53.6,text:"Mon Dieu,"},
{start:53.6,end:54.0,text:"combien de cours"},
{start:54.0,end:55.2,text:"d'anglais ?"},
{start:55.2,end:56.6,text:"Un, deux, trois."},
{start:56.6,end:57.4,text:"Magnifique,"},
{start:57.4,end:58.0,text:"c'est ma matière"},
{start:58.0,end:59.0,text:"préférée."},
{start:59.0,end:59.3,text:"Quelle est"},
{start:59.3,end:59.6,text:"ta matière"},
{start:59.6,end:60.4,text:"préférée ?"},
{start:61.1,end:61.7,text:"Ma matière"},
{start:61.7,end:62.5,text:"préférée,"},
{start:62.5,end:62.9,text:"c'est l'art."},
{start:63.5,end:63.7,text:"Mais"},
{start:63.7,end:64.7,text:"malheureusement,"},
{start:64.7,end:65.0,text:"nous n'avons"},
{start:65.0,end:65.5,text:"pas beaucoup"},
{start:65.5,end:66.0,text:"de cours."},
{start:67.1,end:67.8,text:"Nous avons aussi"},
{start:67.8,end:68.2,text:"des cours de"},
{start:68.2,end:68.7,text:"physique,"},
{start:68.7,end:70.0,text:"d'EPS et de SVT."},
{start:70.0,end:70.2,text:"Qu'est-ce que"},
{start:70.2,end:72.6,text:"c'est la SVT ?"},
{start:72.6,end:73.8,text:"SVT, ça veut"},
{start:73.8,end:74.4,text:"dire Science"},
{start:74.4,end:75.2,text:"de la Vie et"},
{start:75.2,end:75.8,text:"de la Terre."},
{start:77.1,end:78.1,text:"Mon Dieu !"},
{start:78.1,end:78.7,text:"Nous avons les"},
{start:78.7,end:79.2,text:"nouvelles leçons"},
{start:79.2,end:81.1,text:"d'espagnol !"},
{start:81.1,end:82.1,text:"Oui, je sais,"},
{start:82.1,end:82.4,text:"le prof"},
{start:82.4,end:83.4,text:"n'est pas bon."},
{start:83.4,end:84.2,text:"Il est exigeant."},

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

  const handleInputChange = (index, value) => {
    setInputs({
      ...inputs,
      [index]: value,
    });
    setAnswers((prev) => ({
      ...prev,
      [`blank${index + 1}`]: value,
    }));
  };

  const [answers, setAnswers] = useState({
    blank1: "",
    blank2: "",
    blank3: "",
    blank4: "",
    blank5: "",
    blank6: "",
    blank7: "",
    blank8: "",
    blank9: "",
    blank10: "",
    blank11: "",
    blank12: "",
    blank13: "",
  });

  const correctAnswers = {
    blank1: "emploi du temps",
    blank2: "voir",
    blank3: "bien sûr",
    blank4: "leçons de technologie",
    blank5: "mercredi",
    blank6: "ça",
    blank7: "cours d’anglais",
    blank8: "matière préférée",
    blank9: "l’art",
    blank10: "Qu’est-ce que c’est la SVT",
    blank11: "le prof",
    blank12: "espagnol",
  };

  const [score, setScore] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const checkAnswer = () => {
    const blanks = Object.keys(correctAnswers);
    let correctCount = 0;
    let incomplete = false;

    blanks.forEach((blank) => {
      const val = answers[blank]?.trim();
      if (!val) incomplete = true;
      if (val?.toLowerCase() === correctAnswers[blank].toLowerCase()) {
        correctCount++;
      }
    });

    const total = blanks.length;

    if (incomplete) {
      ValidationAlert.info(
        "Incomplete",
        "Some answers are missing.",
        `${correctCount}/${total}`
      );
    } else {
      setScore({ correct: correctCount, total });

      if (correctCount === total) {
        ValidationAlert.success(
          "Good Job!",
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
        ValidationAlert.warning(
          "Some answers are incorrect",
          `You got ${correctCount} out of ${total} correct.`,
          `${correctCount}/${total}`
        );
      }
    }

    setShowResults(true);
  };

  const showAnswerFunc = () => {
    setAnswers(correctAnswers);
    const newInputs = {};
    Object.keys(correctAnswers).forEach((key, index) => {
      newInputs[index] = correctAnswers[key];
    });
    setInputs(newInputs);

    const total = Object.keys(correctAnswers).length;
    const correctCount = total;

    setScore({ correct: correctCount, total });

    ValidationAlert.success(
      "Answers shown",
      "All correct answers have been filled in.",
      `${correctCount}/${total}`
    );

    setShowResults(true);
  };

  const resetExercise = () => {
    const emptyAnswers = {};
    Object.keys(correctAnswers).forEach((blank) => {
      emptyAnswers[blank] = "";
    });
    setAnswers(emptyAnswers);
    setInputs({});
    setShowResults(false);
    setScore(null);
    resetAudio();
  };

  const isCorrect = (blank) => {
    if (!showResults) return null;
    return (
      answers[blank].trim().toLowerCase() ===
      correctAnswers[blank].toLowerCase()
    );
  };

  const getInputClass = (blank) => {
    if (!showResults) return "q11-input-default";
    return isCorrect(blank) ? "q11-input-correct" : "q11-input-incorrect";
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
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
        <span style={{ backgroundColor: "#df4f89" }} className="ex-A">
          C
        </span>{" "}
        <span style={{ color: "black" }} className="number-of-q">
          3
        </span>
        Écoute la conversation entre Carole et Jenna. Complète le dialogue{" "}
        <br /> en utilisant lesmots proposés.
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
      <div
        className="q11-word-bank-36"
        style={{
          backgroundColor: "#ffe7b1",
          padding: "5px",
          borderRadius: "8px",
          justifyContent: "center",
          border: "5px dashed  #7c529c",
        }}
      >
        <div className="q11-word-list-36">
          {Object.values(correctAnswers).map((word, index) => (
            <React.Fragment key={index}>
              <span className="q11-word">{word}</span>
              {(index + 1) % 6 === 0 ? <br /> : null}
            </React.Fragment>
          ))}
        </div>
      </div>

      <div className="q11-questions-container">
        <div className="imgexrsize">
          <img src={img1} alt="" />
        </div>

        <div className="page28q4-dialogue-text space-y-6">
          {/* الحوار الأصلي مع كل input مرتبط بـ correctAnswers */}
          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-pink-400 min-w-[80px]">
              Carole:
            </span>
            <span className="text">Bonjour, Jenna. Comment ça va ? </span>
          </div>

          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-blue-900 min-w-[80px]">
              Jenna :
            </span>
            <span className="text">
              Salut, Carole. Ça va bien, merci. Et toi ?
            </span>
          </div>

          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-pink-400 min-w-[80px]">
              Carole:
            </span>
            <span className="text">Bien. Tu as vu notre</span>
            <input
              type="text"
              value={inputs[0] || ""}
              onChange={(e) => handleInputChange(2, e.target.value)}
              className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-300 focus:outline-none focus:border-blue-500 w-40"
            />
            <span className="text"> ?</span>
          </div>

          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-blue-900 min-w-[80px]">
              Jenna:
            </span>
            <span className="text">Non. On peut aller</span>
            <input
              type="text"
              value={inputs[1] || ""}
              onChange={(e) => handleInputChange(2, e.target.value)}
              className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-900 focus:outline-none focus:border-blue-500 w-40"
            />
          </div>

          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-pink-400 min-w-[80px]">
              Carole :
            </span>
            <span className="text">Oui,</span>
            <input
              type="text"
              value={inputs[2] || ""}
              onChange={(e) => handleInputChange(2, e.target.value)}
              className="missing-word-input ml-2 px-3 py-1 border-b-2 border-pink-300 focus:outline-none focus:border-blue-500 w-40"
            />
          </div>

          <div className="note italic text-gray-500 text-sm ml-20">
            <strong>(à côté du tableau d’affichage)</strong>
          </div>

          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-blue-900 min-w-[80px]">
              Jenna :
            </span>
            <span className="text">Nous n’avons pas beaucoup de</span>
            <input
              type="text"
              value={inputs[3] || ""}
              onChange={(e) => handleInputChange(3, e.target.value)}
              className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-900 focus:outline-none focus:border-blue-500 w-24"
            />
            <span className="text"> J’aime beaucoup le prof.</span>
          </div>

          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-blue-900 min-w-[80px]">
              Carole :
            </span>
            <span className="text">
              Oui c'est vrai. Nous avons maths chaque jour sauf le
            </span>
            <input
              type="text"
              value={inputs[4] || ""}
              onChange={(e) => handleInputChange(4, e.target.value)}
              className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-48"
            />
            <span className="text">Le prof</span>
          </div>
          <div className="dialogue-line flex items-start">
            <span className="text">
              de maths pose beaucoup de questions. J’aime
            </span>
            <input
              type="text"
              value={inputs[5] || ""}
              onChange={(e) => handleInputChange(4, e.target.value)}
              className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-48"
            />
          </div>
          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-blue-900 min-w-[80px]">
              Jenna :
            </span>
            <span className="text">Oh mon Dieu !!! Combien de</span>
            <input
              type="text"
              value={inputs[6] || ""}
              onChange={(e) => handleInputChange(4, e.target.value)}
              className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-48"
            />
            <span className="text">?Un, deux, trois. Magnifique</span>
          </div>
          <div className="dialogue-line flex items-start">
            <span className="text">c’est ma</span>
            <input
              type="text"
              value={inputs[7] || ""}
              onChange={(e) => handleInputChange(4, e.target.value)}
              className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-48"
            />
            <span className="text">Quelle est ta matière préférée ?</span>
          </div>

          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-pink-400 min-w-[80px]">
              Carole :
            </span>
            <span className="text">Ma matière préférée,c'est</span>
            <input
              type="text"
              value={inputs[8] || ""}
              onChange={(e) => handleInputChange(5, e.target.value)}
              className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-40"
            />
            <span className="text">Mais, malheureusement, nous n’avons</span>
          </div>
          <div className="dialogue-line flex items-start">
            <span>pas beaucoup de cours.</span>
          </div>

          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-pink-400 min-w-[80px]">
              Jenna:
            </span>
            <span className="text">
              Nous avons aussi des cours de physique, d’EPS et de SVT.
            </span>
            <input
              type="text"
              value={inputs[9] || ""}
              onChange={(e) => handleInputChange(5, e.target.value)}
              className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-40"
            />
            <span className="text">?</span>
          </div>

          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-blue-900 min-w-[80px]">
              Carole :
            </span>
            <span className="text">
              SVT , ça veut dire Sciences de la Vie et de la Terre.{" "}
            </span>
          </div>

          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-pink-400 min-w-[80px]">
              jenna :
            </span>
            <span className="text">
              Oh mon Dieu !!! Nous avons les nouvelles leçons
            </span>
            <input
              type="text"
              value={inputs[10] || ""}
              onChange={(e) => handleInputChange(6, e.target.value)}
              className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-48"
            />
          </div>

          <div className="dialogue-line flex items-start">
            <span className="speaker font-bold text-blue-900 min-w-[80px]">
              Carole :{" "}
            </span>
            <span className="text">Oui, je sais</span>
            <input
              type="text"
              value={inputs[11] || ""}
              onChange={(e) => handleInputChange(6, e.target.value)}
              className="missing-word-input ml-2 px-3 py-1 border-b-2 border-blue-300 focus:outline-none focus:border-pink-500 w-48"
            />
            <span className="text">n’est pas bon. Il est exigeant.</span>
          </div>
        </div>
      </div>

      <div className="spaces"></div>
      {score && <ScoreCardEnhanced score={score} />}

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
