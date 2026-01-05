import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import img1 from "../../../assets/unite2pages/svg/U2P40EXE3.svg";

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
  const [inputs, setInputs] = useState({});
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
