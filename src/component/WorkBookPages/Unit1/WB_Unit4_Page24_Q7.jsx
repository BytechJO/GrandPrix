import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import "./WB_Unit4_Page24_Q7.css"
/* 🔴 استيراد الصور */
import img1 from "../../../assets/workpages/svg/24/svg/a.svg";
import img2 from "../../../assets/workpages/svg/24/svg/b.svg";
import img3 from "../../../assets/workpages/svg/24/svg/c.svg";
import img4 from "../../../assets/workpages/svg/24/svg/d.svg";
import img5 from "../../../assets/workpages/svg/24/svg/e.svg";
import img6 from "../../../assets/workpages/svg/24/svg/f.svg";
import img7 from "../../../assets/workpages/svg/24/svg/g.svg";
import img8 from "../../../assets/workpages/svg/24/svg/h.svg";

/* 🔴 الإجابات الصحيحة للأسئلة */
const correctAnswers = {
  a: "à l'",      // a Marc travaille à l'hôpital
  b: "aux",       // b Nous sommes aux grands magasins
  c: "à la",      // c Je veux aller à la piscine
  d: "à la",      // d Nous devons aller à la station-service
  e: "au",        // e Ma mère doit aller au supermarché
  f: "au",        // f Mon frère et moi allons au stade
  g: "au",        // g Nous sommes au cinéma
};

/* 🔴 الإجابات الصحيحة للتطابق (الصور) */
const correctMatches = {
  a: "g",  // Image a → حرف a
  b: "h",  // Image b → حرف b
  c: "e",  // Image c → حرف c
  d: "b",  // Image d → حرف d
  e: "f",  // Image e → حرف e
  f: "d",  // Image f → حرف f
  g: "c",  // Image g → حرف g
};

/* 🔴 الصور للجدول (1 → 7 فقط) */
const images = [
  { id: 'a', src: img1 },
  { id: 'b', src: img2 },
  { id: 'c', src: img3 },
  { id: 'd', src: img4 },
  { id: 'e', src: img5 },
  { id: 'f', src: img6 },
  { id: 'g', src: img7 },
];

/* 🔴 الصور للـ popup (1 → 8) */
const imagesPopup = [
  { id: 'a', src: img1 },
  { id: 'b', src: img2 },
  { id: 'c', src: img3 },
  { id: 'd', src: img4 },
  { id: 'e', src: img5 },
  { id: 'f', src: img6 },
  { id: 'g', src: img7 },
  { id: 'h', src: img8 },
];

const Page5_Q1_CleanAudio = () => {
  const [inputs, setInputs] = useState({}); // للإجابات النصية
  const [matches, setMatches] = useState({}); // للتطابقات (صور → أحرف)
  const [score, setScore] = useState(null);
  const [showImagesPopup, setShowImagesPopup] = useState(false); // التحكم في popup الصور

  const handleInputChange = (questionId, value) => {
    setInputs({
      ...inputs,
      [questionId]: value,
    });
  };

  const handleMatchChange = (imageId, value) => {
    const letter = value.toLowerCase().trim();
    setMatches({
      ...matches,
      [imageId]: letter,
    });
  };

  const checkAnswer = () => {
    let correctCount = 0;
    
    // التحقق من إجابات الأسئلة
    Object.keys(correctAnswers).forEach((questionId) => {
      const userAnswer = inputs[questionId] ? inputs[questionId].toLowerCase().trim() : "";
      const correctAnswer = correctAnswers[questionId].toLowerCase().trim();
      
      if (userAnswer === correctAnswer) {
        correctCount++;
      }
    });
    
    // التحقق من التطابقات
    Object.keys(correctMatches).forEach((imageId) => {
      const userMatch = matches[imageId] ? matches[imageId].toLowerCase().trim() : "";
      const correctMatch = correctMatches[imageId].toLowerCase().trim();
      
      if (userMatch === correctMatch) {
        correctCount++;
      }
    });
    
    const totalQuestions = Object.keys(correctAnswers).length + Object.keys(correctMatches).length;
    setScore({ correct: correctCount, total: totalQuestions });
    
    if (correctCount === 0) {
      ValidationAlert.info(
        `Toutes les réponses sont incorrectes (${correctCount}/${totalQuestions})`,
        "Essayez encore!"
      );
    } else if (correctCount === totalQuestions) {
      ValidationAlert.success(
        `Excellent! (${correctCount}/${totalQuestions})`,
        "Toutes les réponses sont correctes!"
      );
    } else {
      ValidationAlert.error(
        `Vous avez ${correctCount} sur ${totalQuestions} corrects.`,
        "Presque!"
      );
    }
  };

  const showAnswerFunc = () => {
    setInputs(correctAnswers);
    setMatches(correctMatches);
  };

  const resetExercise = () => {
    setInputs({});
    setMatches({});
    setScore(null);
  };

  const openImagesPopup = () => setShowImagesPopup(true);
  const closeImagesPopup = () => setShowImagesPopup(false);

  return (
    <div className="page24-wrapper1 flex flex-col items-center justify-center p-4">
      <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span style={{backgroundColor:"#ce5b66"}} className="ex-A">4</span> <span style={{color:"black"}} className="number-of-q">7</span>Complète avec « au », « aux » ou « à l’ ».
      </header>

      {score && <ScoreCardEnhanced score={score} />}

     

      <div className="page24-main-section w-full max-w-5xl flex flex-row gap-8 mb-8">
        {/* الأسئلة */}
        <div className="page24-questions-container flex-1">
          <div className="page24-questions-title text-xl font-bold mb-4 text-center">
            Complétez les phrases
          </div>
          <div className="page24-questions-list space-y-4">
            {Object.entries(correctAnswers).map(([questionId, correctAnswer]) => (
              <div key={questionId} className="page24-question-item flex items-center gap-3">
                <span className="page24-question-letter font-bold text-lg text-red-600 min-w-6">
                  {questionId}
                </span>
                <span className="page24-question-text text-lg">
                  {(() => {
                    const texts = {
                      a: "Marc travaille ______ hôpital",
                      b: "Nous sommes ______ grands magasins.",
                      c: "Je veux aller ______ piscine.",
                      d: "Nous devons aller ______ station-service.",
                      e: "Ma mère doit aller ______ supermarché.",
                      f: "Mon frère et moi allons ______ stade.",
                      g: "Nous sommes ______ cinéma.",
                    };
                    return texts[questionId];
                  })().split('______')[0]}
                  <input
                    type="text"
                    className="page24-question-input mx-2 border-b-2 focus:outline-none text-center"
                    style={{
                      width: "90px",
                      borderColor: inputs[questionId]
                        ? (inputs[questionId].toLowerCase().trim() === correctAnswers[questionId].toLowerCase().trim()
                            ? "green"
                            : "red")
                        : "#3b82f6",
                      backgroundColor: inputs[questionId]
                        ? (inputs[questionId].toLowerCase().trim() === correctAnswers[questionId].toLowerCase().trim()
                            ? "#d4f5d4"
                            : "#f5d4d4")
                        : "#f9fafb",
                    }}
                    value={inputs[questionId] || ""}
                    onChange={(e) => handleInputChange(questionId, e.target.value)}
                    placeholder="..."
                  />
                  {(() => {
                    const texts = {
                      a: "Marc travaille ______ hôpital",
                      b: "Nous sommes ______ grands magasins.",
                      c: "Je veux aller ______ piscine.",
                      d: "Nous devons aller ______ station-service.",
                      e: "Ma mère doit aller ______ supermarché.",
                      f: "Mon frère et moi allons ______ stade.",
                      g: "Nous sommes ______ cinéma.",
                    };
                    return texts[questionId];
                  })().split('______')[1]}
                </span>
              </div>
            ))}
          </div>

          <div className="page24-show-images-btn-container mt-6 text-center">
            <button 
              onClick={openImagesPopup}
              className="page24-show-images-btn px-6 py-3 bg-blue-500 text-white rounded-lg font-bold hover:bg-blue-600 transition-colors"
            >
              👁️ Voir les dessins
            </button>
          </div>
        </div>

        {/* جدول التطابق */}
        <div className="page24-match-container w-72">
          <div className="page24-match-title text-xl font-bold mb-4 text-center">
            Associez les dessins
          </div>
          <div className="page24-match-table bg-white rounded-lg shadow-lg p-4 border border-gray-200">
            <div className="page24-match-header flex justify-between font-bold border-b-2 border-gray-300 pb-2 mb-3">
              <span className="page24-match-col1 text-center w-1/2">Dessin</span>
              <span className="page24-match-col2 text-center w-1/2">Lettre</span>
            </div>
            <div className="page24-match-body space-y-3">
              {images.map((image) => (
                <div key={image.id} className="page24-match-row flex justify-between items-center">
                  <span className="page24-match-letter font-bold text-lg text-center w-1/2 text-blue-600">
                    {image.id.toUpperCase()}
                  </span>
                  <input
                    type="text"
                    className="page24-match-input border-2 rounded px-3 py-1 text-center text-lg font-bold uppercase w-16"
                    style={{
                      borderColor: matches[image.id]
                        ? (matches[image.id].toLowerCase().trim() === correctMatches[image.id].toLowerCase().trim()
                            ? "green"
                            : "red")
                        : "#d1d5db",
                      backgroundColor: matches[image.id]
                        ? (matches[image.id].toLowerCase().trim() === correctMatches[image.id].toLowerCase().trim()
                            ? "#d4f5d4"
                            : "#f5d4d4")
                        : "#f9fafb",
                    }}
                    value={matches[image.id] || ""}
                    onChange={(e) => handleMatchChange(image.id, e.target.value)}
                    placeholder="?"
                    maxLength="1"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Popup الصور */}
      {showImagesPopup && (
        <div className="page24-images-popup-overlay fixed inset-0 bg-opacity-70 flex items-center justify-center z-50">
          <div className="page24-images-popup-container bg-white rounded-xl shadow-2xl w-11/13 max-w-4xl max-h-[40vh] overflow-y-hidden">
            <div className="page24-popup-header flex justify-between items-center p-4 border-b border-gray-200">
              <h2 className="page24-popup-title text-2xl font-bold text-gray-800">
                Les Dessins - Trouvez la lettre correspondante
              </h2>
              <button 
                onClick={closeImagesPopup}
                className="page24-close-popup-btn text-gray-500 hover:text-gray-700 text-2xl font-bold p-2"
              >
                ✕
              </button>
            </div>

            <div className="page24-popup-content p-6">
              <div className="page24-popup-row flex justify-center gap-8 mb-8">
                {imagesPopup.slice(0, 4).map((image) => (
                  <div key={image.id} className="page24-popup-image-item flex flex-col items-center">
                    <div className="page24-popup mb-2">
                      <img
                        src={image.src}
                        alt={`Dessin ${image.id.toUpperCase()}`}
                        className="page24-popup-image"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <div className="page24-popup-row flex justify-center gap-8 mb-8">
                {imagesPopup.slice(4, 8).map((image) => (
                  <div key={image.id} className="page24-popup-image-item flex flex-col items-center">
                    <div className="page24-popup mb-2">
                      <img
                        src={image.src}
                        alt={`Dessin ${image.id.toUpperCase()}`}
                        className="page24-popup-image"
                        style={{ width: "100%", height: "100%" }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

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
