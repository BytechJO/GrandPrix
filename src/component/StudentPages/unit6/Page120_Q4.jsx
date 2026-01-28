import React, { useState, useRef } from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import ValidationAlert from "../../Popup/ValidationAlert";

const Page5_Q1_CleanAudio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showSettings, setShowSettings] = useState(false);
  const [volume, setVolume] = useState(1);

  const [answers, setAnswers] = useState({});
  const [checked, setChecked] = useState(false); // ✅ مهم للهايلايت

  const correctAnswers = {
    q1: "ça va",
    q2: "Pas mal",
    q3: "jusqu'aux os",
    q4: "Il pleut",
    q5: "des cordes",
    q6: "Tu as raison"
  };

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.play();
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

    setChecked(true); // ✅ تفعيل الهايلايت

    const total = Object.keys(correctAnswers).length;

    if (correctCount === total)
      ValidationAlert.success(`Score: ${correctCount}/${total}`);
    else
      ValidationAlert.error(`Score: ${correctCount}/${total}`);
  };

  const showAnswerFunc = () => {
    setAnswers(correctAnswers);
    setChecked(true); // ✅ اظهار الإجابة الصحيحة
  };

  const resetExercise = () => {
    setAnswers({});
    setChecked(false); // ✅ إعادة التمرين
    resetAudio();
  };

  const handleAnswerSelect = (questionId, selectedAnswer) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: selectedAnswer
    }));
  };

  // ===== تمرين المحادثة من الصورة =====
  const dialogueLines = [
    {
      id: "q1",
      speaker: "Jean",
      text: "Salut, Éric,",
      options: ["ça va", "comment ça va ?"]
    },
    {
      id: "q2",
      speaker: "Éric",
      text: "Et toi ?",
      options: ["Pas mal", "mal"]
    },
    {
      id: "textOnly1", // ✅ سطر نصي فقط
      speaker: "", // بدون متحدث
      text: "Bien, merci. Qu'est-ce qui t'est arrivé ?",
      options: [] // بدون خيارات
    },
    {
      id: "q3",
      speaker: "Éric",
      text: "Je suis trempé",
      options: ["jusqu'aux os", "jusqu'à la peau"]
    },
    {
      id: "q4",
      speaker: "Jean",
      text: "Quoi ?",
      options: ["Il neige", "Il pleut"]
    },
    {
      id: "q5",
      speaker: "Éric",
      text: "Il pleut",
      options: ["des chiens", "des cordes"]
    },
    {
      id: "textOnly2", // ✅ سطر نصي فقط
      speaker: "", // بدون متحدث
      text: "Mais aujourd'hui, c'est l'anniversaire de Nicolas.",
      options: [] // بدون خيارات
    },
    {
      id: "q6",
      speaker: "Éric",
      text: "j'ai oublié.",
      options: ["Tu as raison", "tu n'as pas raison"]
    }
  ];

  return (
     <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
      <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color:"black", marginTop:"5%", fontSize:"25px", fontWeight:"bold" }}
      >
        <span style={{backgroundColor:"#73C8D2"}} className="ex-A">4</span> 
        <span style={{color:"black"}} className="number-of-q">Écoute et entoure la bonne réponse.</span>
      </header>

      {/* ================= حوار التمرين ================= */}
      <div className="dialogue-exercise w-full max-w-3xl bg-white p-6 rounded-lg shadow-lg">
        {dialogueLines.map((line, index) => {
          // ✅ التحقق إذا كان السطر نصي فقط (بدون متحدث وخيارات)
          if (line.speaker === "" && line.options.length === 0) {
            return (
              <div key={line.id} className="text-only-line mb-4 p-3 rounded">
                <div className="text-center">
                  <span className="text-gray-700 italic">
                    {line.text}
                  </span>
                </div>
              </div>
            );
          }
          
          // ✅ السطور العادية (مع متحدث وخيارات)
          return (
            <div 
              key={line.id} 
              className={`dialogue-line mb-4 p-3 rounded ${checked ? (
                answers[line.id] === correctAnswers[line.id] 
                  ? 'bg-green-50 border border-green-200' 
                  : 'bg-red-50 border border-red-200'
              ) : ''}`}
            >
              <div className="speaker mb-1">
                <span className="font-semibold" style={{
                  color: line.speaker === "Éric" ? "#ec4899" : "#3b82f6"
                }}>
                  {line.speaker}:
                </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-gray-700">
                  {line.text}
                </span>
                {line.text && line.text.trim() !== "" && <span className="text-gray-400">|</span>}
                <div className="options-container flex gap-4">
                  {line.options.map((option) => (
                    <button
                      key={option}
                      onClick={() => handleAnswerSelect(line.id, option)}
                      className={`px-4 py-2 rounded border transition-all ${
                        answers[line.id] === option
                          ? 'bg-blue-500 text-white border-blue-600'
                          : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* ================= Buttons ================= */}
      <div className="action-buttons-container flex gap-4">
        <button 
          onClick={resetExercise} 
          className="try-again-button px-6 py-2 bg-gray-200 text-gray-700 rounded hover:bg-gray-300 transition-colors"
        >
          Recommencer ↻
        </button>
        <button 
          onClick={showAnswerFunc} 
          className="show-answer-btn px-6 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition-colors"
        >
          Afficher la réponse
        </button>
        <button 
          onClick={checkAnswer} 
          className="check-button2 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
        >
          Vérifier la réponse ✓
        </button>
      </div>
    </div>
  );
};

export default Page5_Q1_CleanAudio;