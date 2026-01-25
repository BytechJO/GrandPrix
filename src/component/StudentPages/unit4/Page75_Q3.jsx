import React, { useState, useEffect } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import img1 from "../../../assets/unite4pages/SVG/P75Q2-1.svg";
import img2 from "../../../assets/unite4pages/SVG/P75Q2-2.svg";
import img3 from "../../../assets/unite4pages/SVG/P75Q2-3.svg";

const Page_Find_Pairs = () => {
  const [selectedA, setSelectedA] = useState(null);
  const [selectedB, setSelectedB] = useState(null);
  const [pairs, setPairs] = useState({});
  const [score, setScore] = useState(null);
  const [shuffledBs, setShuffledBs] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [imageAnswers, setImageAnswers] = useState({ img1: "", img2: "", img3: "" });

  // النصف الأول (الجمل الناقصة)
  const partA = [
    { id: "a", text: "La voiture roule sur une" },
    { id: "b", text: "À pied, on marche sur le" },
    { id: "c", text: "À vélo, on s’arrête au" },
  ];

  // النصف الثاني (إكمال الجمل)
  const partB = [
    { id: "1", text: "trottoir." },
    { id: "2", text: "feu rouge." },
    { id: "3", text: "route." },
  ];

  // الإجابات الصحيحة
  const correctPairs = {
    a: "3",
    b: "2",
    c: "1",
  };

  const correctImageAnswers = {
    img1: "a",
    img2: "c",
    img3: "b",
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
        createPair(selectedA, id);
      }
    }
  };

  const createPair = (aId, bId) => {
    const newPairs = { ...pairs };
    newPairs[aId] = bId;
    setPairs(newPairs);

    setSelectedA(null);
    setSelectedB(null);
  };

  const removePair = (aId) => {
    const newPairs = { ...pairs };
    delete newPairs[aId];
    setPairs(newPairs);
  };

  const handleImageInputChange = (imgId, value) => {
    setImageAnswers((prev) => ({ ...prev, [imgId]: value.toLowerCase() }));
  };

  const checkAnswer = () => {
    // تحقق من الجمل الناقصة
    let correctCount = 0;
    const total = Object.keys(correctPairs).length;

    Object.keys(correctPairs).forEach((key) => {
      if (pairs[key] === correctPairs[key]) {
        correctCount++;
      }
    });

    // تحقق من الصور
    Object.keys(correctImageAnswers).forEach((key) => {
      if (imageAnswers[key] === correctImageAnswers[key]) {
        correctCount++;
      }
    });

    const totalWithImages = total + Object.keys(correctImageAnswers).length;
    setScore({ correct: correctCount, total: totalWithImages });
    setShowResults(true);

    if (correctCount === totalWithImages) {
      ValidationAlert.success(
        `Excellent! (${correctCount}/${totalWithImages})`,
        "Toutes les réponses sont correctes!"
      );
    } else if (correctCount === 0) {
      ValidationAlert.info(
        `Toutes les réponses sont incorrectes (${correctCount}/${totalWithImages})`,
        "Essayez encore!"
      );
    } else {
      ValidationAlert.error(
        `Vous avez ${correctCount} sur ${totalWithImages} réponses correctes.`,
        "Presque!"
      );
    }
  };

  const showAnswerFunc = () => {
    setPairs(correctPairs);
    setImageAnswers(correctImageAnswers);
    setShowResults(true);
  };

  const resetExercise = () => {
    setPairs({});
    setSelectedA(null);
    setSelectedB(null);
    setScore(null);
    setShowResults(false);
    setImageAnswers({ img1: "", img2: "", img3: "" });
    const shuffled = [...partB].sort(() => Math.random() - 0.5);
    setShuffledBs(shuffled);
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-6 p-4">
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
        <span
          style={{ backgroundColor: "#d47176", color: "#white" }}
          className="ex-A"
        >
          B
        </span>
        <span style={{ color: "black" }} className="number-of-q">
          3
        </span>
        Observe et associe.
      </header>

      {/* Instruction */}
      <div className="instruction-container w-full max-w-5xl mb-4">
        <p className="text-base text-gray-700 text-center">
          <br />
          <span className="text-xs text-gray-500">
            Cliquez sur une phrase à gauche, puis sur la phrase à droite, et
            enfin sur la fin de cette phrase pour la supprimer.
          </span>
        </p>
      </div>

      {/* Game Container */}
      <div className="game-container w-full max-w-5xl">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          {/* Colonne A */}
          <div className="flex-1 w-full">
            <h3 className="text-lg font-bold mb-3 text-center text-blue-700">
              Phrases
            </h3>
            <div className="space-y-2">
              {partA.map((item) => {
                const pairedWith = pairs[item.id];
                const isCorrect = pairedWith === correctPairs[item.id];
                const isSelected = selectedA === item.id;

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
                        <span className="font-bold text-base mr-3 min-w-4">
                          {item.id}
                        </span>
                        <span className="text-base truncate">{item.text}</span>
                      </div>
                      {pairedWith && (
                        <div className="flex items-center">
                          <span className="text-gray-500 mr-1">→</span>
                          <span
                            className={`font-bold text-sm px-2 py-0.5 rounded ${
                              showResults
                                ? isCorrect
                                  ? "bg-green-200"
                                  : "bg-red-200"
                                : "bg-blue-200"
                            }`}
                          >
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

          {/* Colonne B */}
          <div className="flex-1 w-full">
            <h3 className="text-lg font-bold mb-3 text-center text-green-700">
              Compléments
            </h3>
            <div className="space-y-2">
              {shuffledBs.map((item) => {
                const isPaired = Object.values(pairs).includes(item.id);
                const isSelected = selectedB === item.id;
                const pairedAId = Object.keys(pairs).find(
                  (key) => pairs[key] === item.id
                );
                const isCorrect =
                  pairedAId && pairs[pairedAId] === correctPairs[pairedAId];

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
                      <span className="font-bold text-base mr-3 min-w-4">
                        {item.id}
                      </span>
                      <span className="text-base truncate">{item.text}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Images with Inputs */}
        <div className="exercise-images w-full max-w-5xl flex justify-center gap-4 mt-6">
          {[img1, img2, img3].map((img, index) => {
            const imgId = `img${index + 1}`;
            return (
              <div key={index} className="flex flex-col items-center gap-2">
                <img
                  src={img}
                  alt={`Image ${index + 1}`}
                  className="w-32 h-32 object-contain"
                />
                <input
                  type="text"
                  maxLength="1"
                  placeholder="a/b/c"
                  value={imageAnswers[imgId]}
                  onChange={(e) => handleImageInputChange(imgId, e.target.value)}
                  className="q5-input border rounded p-1 w-18 text-center"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Score Display */}
      {score && (
        <div className="w-full max-w-4xl mt-4">
          <ScoreCardEnhanced score={score} />
        </div>
      )}
<div className="spaces"></div>
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
