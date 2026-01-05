import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard"; 
import img1 from "../../../assets/unite2pages/svg/page44Q2.png"
import "../unit1/CSSPAGE/Q11.css";

const Page5_Q1_CleanAudio = () => {
  const audioRef = useRef(null);
  const [inputs, setInputs] = useState({});

const handleInputChange = (index, value) => {
  setInputs(prev => ({
    ...prev,
    [index]: value
  }));

  // تحديث answers تلقائياً بناءً على index إذا أردت
  const blankKey = `blank${index + 1}`;
  setAnswers(prev => ({
    ...prev,
    [blankKey]: value
  }));
};


  const [answers, setAnswers] = useState({
    blank1: '',
    blank2: '',
    blank3: '',
    blank4: '',
    blank5: '',

  });

const correctAnswers = {
  blank1: "il ya un cahier",
  blank2: "un compas",
  blank3: "des crayons",
  blank4: "une gomme et un",
  blank5: "taille-crayon",

};



  const [score, setScore] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const checkAnswer = () => {
    const blanks = Object.keys(correctAnswers);
    let correctCount = 0;
    let incomplete = false;

    blanks.forEach(blank => {
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
    Object.keys(correctAnswers).forEach(blank => {
      emptyAnswers[blank] = "";
    });
    setAnswers(emptyAnswers);
    setInputs({});
    setShowResults(false);
    setScore(null);
  };

  const isCorrect = (blank) => {
    if (!showResults) return null;
    return answers[blank].trim().toLowerCase() === correctAnswers[blank].toLowerCase();
  };

  const getInputClass = (blank) => {
    if (!showResults) return 'q11-input-default';
    return isCorrect(blank) ? 'q11-input-correct' : 'q11-input-incorrect';
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
        <span className="ex-A" style={{ backgroundColor: "#2c8ac9", color:"white"}}>
         Grammaire

        </span>
        <span className="number-of-q">2</span>Qu’est-ce qu’il y a dans ton cartable ?

      </header>

      <div className="q11-word-bank-36"
        style={{
          backgroundColor:"#ffe7b1",
          padding:"5px",
          borderRadius:"8px",
          justifyContent:"center",
          border:"5px dashed  #7c529c"
        }}
      >
        <div className="q11-word-list-36">
       
              <span className="q11-word">Tim prépare son sac à dos pour l’école, mais il ne peut pas tout mettre dans <br />
son cartable.  Alors, il a décidé de prendre les fournitures qui commencent <br />
par : « c » (3 choses), « r » (1 chose), « g » (1 chose) et « t » (1 chose).</span>
            
        
        </div>
      </div>

      <div className="q11-questions-container">
        <div className="imgexrsize">
          <img src={img1} alt="" />
        </div>

        <div className="page28q4-dialogue-text space-y-6">
          {/* الحوار الأصلي مع كل input مرتبط بـ correctAnswers */}
         

         

          <div className="dialogue-line flex items-start">
       <div className="dialogue-line flex items-start">
  {[0,1,2,3,4].map((i) => (
    <input
      key={i}
      type="text"
      value={inputs[i] || ""}
      onChange={(e) => handleInputChange(i, e.target.value)}
      style={{borderBottom:"2px black solid", width:"70%", fontSize:"20px", marginLeft:"20%"}}
    />
  ))}
</div>

          
          </div>

      

        </div>
      </div>

      <div className="spaces"></div>
      {score && <ScoreCardEnhanced score={score} />}

      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">Recommencer ↻</button>
        <button onClick={showAnswerFunc} className="show-answer-btn swal-continue">Afficher la réponse</button>
        <button onClick={checkAnswer} className="check-button2">Vérifier la réponse✓</button>
      </div>

    </div>
  );
};

export default Page5_Q1_CleanAudio;
