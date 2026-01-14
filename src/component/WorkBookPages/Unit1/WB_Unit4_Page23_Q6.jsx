import React, { useState,useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U2Audio/SecBQ4.mp3";

/* 🔴 الإجابات الصحيحة */
const correctAnswers = {
  0: "à la",
  1: "à la",
  2: "à l’",
  3: "à la",
  4: "à la",
  5: "à la",

 
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

{start:5.0 , end:6.7 , text:"Grand prix A1,"},
{start:6.7 , end:8.0 , text:"unité 2,"},
{start:8.0 , end:8.7 , text:"à l'école."},
{start:9.6 , end:10.4 , text:"Section B."},
{start:11.0 , end:11.4 , text:"Qu'est-ce que"},
{start:11.4 , end:12.4 , text:"c'est ?"},
{start:12.4 , end:13.5 , text:"Exercice 4."},
{start:14.2 , end:15.7 , text:"Écoute et écris"},
{start:15.7 , end:16.4 , text:"l'information"},
{start:16.4 , end:17.1 , text:"manquante."},
{start:19.0 , end:19.9 , text:"Bonjour Madame"},
{start:19.9 , end:20.6 , text:"Bouton, je"},
{start:20.6 , end:21.6 , text:"m'appelle Marie,"},
{start:21.6 , end:22.1 , text:"je suis une"},
{start:22.1 , end:22.9 , text:"nouvelle élève."},
{start:24.1 , end:25.2 , text:"Bonjour Marie,"},
{start:25.2 , end:25.9 , text:"bienvenue dans"},
{start:25.9 , end:27.0 , text:"ma classe."},
{start:27.0 , end:27.8 , text:"Tout le monde,"},
{start:27.8 , end:28.7 , text:"c'est Marie,"},
{start:28.7 , end:29.3 , text:"votre nouvelle"},
{start:29.3 , end:30.0 , text:"camarade."},
{start:31.0 , end:32.5 , text:"Bonjour Marie !"},
{start:33.6 , end:34.3 , text:"Assieds-toi près"},
{start:34.3 , end:35.1 , text:"de la fenêtre."},
{start:36.2 , end:36.7 , text:"Merci."},
{start:37.8 , end:40.1 , text:"Alors, nous"},
{start:40.1 , end:41.9 , text:"Salut Marie, je"},
{start:41.9 , end:42.8 , text:"m'appelle Chloé,"},
{start:42.8 , end:44.6 , text:"comment ça va ?"},
{start:44.6 , end:45.7 , text:"Salut, ça va"},
{start:45.7 , end:46.2 , text:"pas mal."},
{start:47.4 , end:48.0 , text:"Si tu as besoin"},
{start:48.0 , end:48.2 , text:"de quelque"},
{start:48.2 , end:48.6 , text:"chose,"},
{start:48.6 , end:49.4 , text:"demande-moi, ok"},
{start:50.4 , end:51.1 , text:"Merci."},


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
  };

 const checkAnswer = () => {
  let correctCount = 0;

  Object.keys(correctAnswers).forEach((key) => {
    const userAnswer = inputs[key] ? inputs[key].toLowerCase().trim() : "";
    const correctAnswer = correctAnswers[key].toLowerCase().trim();

    // ✅ تحقق فقط إذا كتب المستخدم شيئًا
    if (userAnswer && userAnswer === correctAnswer) {
      correctCount++;
    }
  });

  const total = Object.keys(correctAnswers).length;
  setScore({ correct: correctCount, total });

  if (correctCount === 0) {
    ValidationAlert.info(
      `Toutes les réponses sont incorrectes (${correctCount}/${total})`,
      "Essayez encore!"
    );
  } else if (correctCount === total) {
    ValidationAlert.success(
      `Excellent! (${correctCount}/${total})`,
      "Toutes les réponses sont correctes!"
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
    <div className="page-wrapper1 flex flex-col items-center justify-center gap-3 p-4">
      {/* Header */}
     <header
className="header-title-page1 w-full text-left mb-4"
  style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span style={{backgroundColor:"#ce5b66"}} className="ex-A">4</span> <span style={{color:"black"}} className="number-of-q">5</span>Complète avec « au », « aux » ou « à l’ ».
      </header>

      {score && <ScoreCardEnhanced score={score} />}

      {/* Exercise Container */}
<div
  className="exercise-container5 w-full max-w-4xl flex flex-row"
  style={{
    justifyContent: "center", // لجعل المحتوى في منتصف الشاشة
    gap: "80px",              // المسافة بين الأعمدة
    margin: "0 auto",         // لضمان التوسيط
  }}
>



        {/* الحوار على اليسار */}
<div className="dialogue-section" style={{ width: "100%" }}>

          <div className="dialogue-exercise w-full bg-white p-8 rounded-xl ">
            <div className="dialogue-text space-y-1">
              {/* Ligne 1 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[80px]">
                  a-
                </span>
                <span className="text">Ma mère doit aller</span>
                <input
                  type="text"
                  value={inputs[0] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  style={{borderBottom:"2px solid black ", marginLeft:"5px"}}
                />
                <span className="text">banque.</span>
                <br />
              </div>




              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[80px]">
                  b-
                </span>
                <span className="text">Mon père travaille</span>
                <input
                  type="text"
                  value={inputs[1] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  style={{borderBottom:"2px solid black ", marginLeft:"5px"}}
                />
                <span className="text">station de police.</span>
                <br />
              </div>




              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[80px]">
                  c-
                </span>
                <span className="text">Les petits enfants doivent aller</span>
                <input
                  type="text"
                  value={inputs[2] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  style={{borderBottom:"2px solid black ", marginLeft:"5px"}}
                />
                <span className="text">école primaire.</span>
                <br />
              </div>


           

             

              {/* Ligne 5 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[80px]">
                d-
                </span>
                   <span className="text">
                Je dois aller
                </span>
                         <input
                  type="text"
                  value={inputs[3] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  style={{borderBottom:"2px solid black ", marginLeft:"5px"}}
                />
                    <span className="text">
             maison.
                </span>
              </div>
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold  min-w-[80px]">
                e-
                </span>
                   <span className="text">
               Les touristes veulent aller
                </span>
                         <input
                  type="text"
                  value={inputs[4] || ""}
                  onChange={(e) => handleInputChange(0, e.target.value)}
                  style={{borderBottom:"2px solid black ", marginLeft:"5px"}}
                />
                    <span className="text">
            Tour Eiffel.
                </span>
                 
              </div>

           

          
              
              {/* Ligne 8 */}
              <div className="dialogue-line flex items-start">
                <span className="speaker font-bold text-blue-900 min-w-[80px]">
                 f-
                </span>
                <span className="text">Je veux aller</span>
                <br />
                <input
                  type="text"
                  value={inputs[5] || ""}
                  onChange={(e) => handleInputChange(4, e.target.value)}
               style={{borderBottom:"2px solid black ", marginLeft:"5px"}}
                />
                             <span className="text">piscine.</span>

              </div>

         

            

          
          
            </div>
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
