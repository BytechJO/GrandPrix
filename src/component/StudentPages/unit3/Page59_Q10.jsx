import React, { useState, useEffect } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page_Find_Pairs = () => {
  const [selectedA, setSelectedA] = useState(null);
  const [selectedB, setSelectedB] = useState(null);
  const [pairs, setPairs] = useState({});
  const [score, setScore] = useState(null);
  const [shuffledBs, setShuffledBs] = useState([]);
  const [showResults, setShowResults] = useState(false); // حالة جديدة لعرض النتائج

  // النصف الأول (الجمل الناقصة)
  const partA = [
    { id: "a", text: "Dans le salon," },
    { id: "b", text: "Il y a un problème," },
    { id: "c", text: "La salle de bains est" },
    { id: "d", text: "La cuisine a" },
    { id: "e", text: "Je peux voir la" },
    { id: "f", text: "Il y a beaucoup" },
    { id: "g", text: "Le bâtiment" },
    { id: "h", text: "Dans la chambre à coucher," },
    { id: "i", text: "C'est un appartement" }
  ];

  // النصف الثاني (إكمال الجمل)
  const partB = [
    { id: "1", text: "séparée des WC." },
    { id: "2", text: "de fenêtres. Ça me plaît." },
    { id: "3", text: "magnifique" },
    { id: "4", text: "c'est un lit deux places." },
    { id: "5", text: "station de métro et de tram par la fenêtre." },
    { id: "6", text: "il y a une télévision, un canapé et un fauteuil gris." },
    { id: "7", text: "tout le nécessaire." },
    { id: "8", text: "il y a un lit, un bureau et des étagères." },
    { id: "9", text: "est nouveau." }
  ];

  // الإجابات الصحيحة
  const correctPairs = {
    a: "6",
    b: "3",
    c: "1",
    d: "7",
    e: "5",
    f: "2",
    g: "9",
    h: "8",
    i: "4"
  };

  // خلط النصف الثاني عند التحميل
  useEffect(() => {
    const shuffled = [...partB].sort(() => Math.random() - 0.5);
    setShuffledBs(shuffled);
  }, []);

  const handleSelectA = (id) => {
    if (selectedA === id) {
      setSelectedA(null);
    } else {
      setSelectedA(id);
    }
  };

  const handleSelectB = (id) => {
    if (selectedB === id) {
      setSelectedB(null);
    } else {
      setSelectedB(id);
      if (selectedA) {
        // إذا كان هناك جزء أ محدد، قم بإنشاء زوج
        createPair(selectedA, id);
      }
    }
  };

  const createPair = (aId, bId) => {
    const newPairs = { ...pairs };
    newPairs[aId] = bId;
    setPairs(newPairs);
    
    // إعادة تعيين التحديد
    setSelectedA(null);
    setSelectedB(null);
  };

  const removePair = (aId) => {
    const newPairs = { ...pairs };
    delete newPairs[aId];
    setPairs(newPairs);
  };

  const checkAnswer = () => {
    let correctCount = 0;
    const total = Object.keys(correctPairs).length;

    Object.keys(correctPairs).forEach(key => {
      if (pairs[key] === correctPairs[key]) {
        correctCount++;
      }
    });

    setScore({ correct: correctCount, total });
    setShowResults(true); // تفعيل عرض النتائج

    if (correctCount === total) {
      ValidationAlert.success(
        `Excellent! (${correctCount}/${total})`,
        "Toutes les paires sont correctes!"
      );
    } else if (correctCount === 0) {
      ValidationAlert.info(
        `Toutes les paires sont incorrectes (${correctCount}/${total})`,
        "Essayez encore!"
      );
    } else {
      ValidationAlert.error(
        `Vous avez ${correctCount} sur ${total} paires correctes.`,
        "Presque!"
      );
    }
  };

  const showAnswerFunc = () => {
    setPairs(correctPairs);
    setShowResults(true); // عند عرض الإجابات، نعرض النتائج أيضاً
  };

  const resetExercise = () => {
    setPairs({});
    setSelectedA(null);
    setSelectedB(null);
    setScore(null);
    setShowResults(false); // إخفاء النتائج عند إعادة البدء
    // إعادة خلط النصف الثاني
    const shuffled = [...partB].sort(() => Math.random() - 0.5);
    setShuffledBs(shuffled);
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-6 p-4">
      {/* Header */}
               <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span  style={{ backgroundColor: "#5e74b7" }} className="ex-A">C</span> <span style={{color:"black"}} className="number-of-q">10</span>Trouve les paires.</header>

      {/* Instruction */}
      <div className="instruction-container w-full max-w-5xl mb-4">
        <p className="text-base text-gray-700 text-center">
       
          <br />
          <span className="text-xs text-gray-500">Cliquez sur une phrase à gauche, puis sur la phrase à droite, et enfin sur la fin de cette phrase pour la supprimer.</span>
        
        </p>
      </div>

      {/* Game Container - تصميم جديد للعمودين */}
      <div className="game-container w-full max-w-5xl">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Colonne A - العمود الأيسر */}
          <div className="flex-1 w-full">
            <h3 className="text-lg font-bold mb-3 text-center text-blue-700">Phrases</h3>
            <div className="space-y-2">
              {partA.map((item) => {
                const pairedWith = pairs[item.id];
                const isCorrect = pairedWith === correctPairs[item.id];
                const isSelected = selectedA === item.id;
                
                // تحديد اللون بناءً على حالة showResults
                let borderClass = "border-gray-300 hover:border-gray-400";
                let bgClass = "";
                
                if (pairedWith) {
                  if (showResults) {
                    borderClass = isCorrect ? "border-green-500" : "border-red-500";
                    bgClass = isCorrect ? "bg-green-50" : "bg-red-50";
                  } else {
                    borderClass = "border-blue-300";
                    bgClass = "bg-blue-50";
                  }
                } else if (isSelected) {
                  borderClass = "border-blue-500";
                  bgClass = "bg-blue-50";
                }
                
                return (
                  <div
                    key={item.id}
                    className={`p-3 border-2 rounded-lg cursor-pointer transition-all text-sm ${borderClass} ${bgClass}`}
                    onClick={() => handleSelectA(item.id)}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center w-3/4">
                        <span className="font-bold text-base mr-3 min-w-4">{item.id}</span>
                        <span className="text-base truncate">{item.text}</span>
                      </div>
                      {pairedWith && (
                        <div className="flex items-center">
                          <span className="text-gray-500 mr-1">→</span>
                          <span className={`font-bold text-sm px-2 py-0.5 rounded ${
                            showResults 
                              ? (isCorrect ? "bg-green-200" : "bg-red-200") 
                              : "bg-blue-200"
                          }`}>
                            {pairedWith}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              removePair(item.id);
                            }}
                            className="ml-1 text-red-500 hover:text-red-700 text-xs"
                          >
                            ✕
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Colonne B - العمود الأيمن */}
          <div className="flex-1 w-full">
            <h3 className="text-lg font-bold mb-3 text-center text-green-700">Compléments</h3>
            <div className="space-y-2">
              {shuffledBs.map((item) => {
                const isPaired = Object.values(pairs).includes(item.id);
                const isSelected = selectedB === item.id;
                const pairedAId = Object.keys(pairs).find(key => pairs[key] === item.id);
                const isCorrect = pairedAId && pairs[pairedAId] === correctPairs[pairedAId];
                
                let borderClass = "border-gray-300 hover:border-gray-400";
                let bgClass = "";
                
                if (isPaired) {
                  if (showResults) {
                    borderClass = isCorrect ? "border-green-500" : "border-red-500";
                    bgClass = isCorrect ? "bg-green-50" : "bg-red-50";
                  } else {
                    borderClass = "border-blue-300";
                    bgClass = "bg-blue-50";
                  }
                } else if (isSelected) {
                  borderClass = "border-green-500";
                  bgClass = "bg-green-50";
                }
                
                return (
                  <div
                    key={item.id}
                    className={`p-3 border-2 rounded-lg cursor-pointer transition-all text-sm ${borderClass} ${bgClass}`}
                    onClick={() => !isPaired && handleSelectB(item.id)}
                    style={{ opacity: isPaired ? 0.8 : 1 }}
                  >
                    <div className="flex items-center">
                      <span className="font-bold text-base mr-3 min-w-4">{item.id}</span>
                      <span className="text-base truncate">{item.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Pairs Summary */}
       
      </div>

      {/* Score Display */}
      {score && (
        <div className="w-full max-w-4xl mt-4">
          <ScoreCardEnhanced score={score} />
        </div>
      )}

      <div className="spaces">ts</div>

      {/* Buttons */}
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

export default Page_Find_Pairs;