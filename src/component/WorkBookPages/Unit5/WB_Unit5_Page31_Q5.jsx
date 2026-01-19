import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import "./WB_Unit5_Page31_Q5.css"
const Page28Q1 = () => {
  // ✅ الإجابات الصحيحة للفراغات
  const correctAnswers = {
    "2": { answer: "pommes de terres", type: "word" },
    "3": { answer: "eau minérale", type: "word" },
    "4": { answer: "céréales", type: "word" },
    "5": { answer: "lait", type: "word" },
    "6": { answer: "tartines", type: "word" },
    "7": { answer: "miel", type: "phrase" },
    "8": { answer: "chocolat chaud", type: "word" },
    "9": { answer: "viande", type: "word" },
    "10": { answer: "potage", type: "word" },
    "11": { answer: "légumes", type: "word" },
    "12": { answer: "jus d'orange", type: "phrase" }
  };

  const words = Object.keys(correctAnswers);
  const [score, setScore] = useState(null);
  const [answers, setAnswers] = useState(
    Object.fromEntries(words.map(w => [w, ""]))
  );
  const [answerStatus, setAnswerStatus] = useState({});

  const handleChange = (word, value) => {
    setAnswers({ ...answers, [word]: value });
  };

  const checkAnswer = () => {
    const newStatus = {};
    let correctCount = 0;
    let incomplete = false;

    words.forEach(w => {
      const val = answers[w]?.trim();
      if (!val) incomplete = true;

      const normalizedVal = val?.toLowerCase().replace(/[.,]/g, '').trim();
      const normalizedCorrect = correctAnswers[w].answer.toLowerCase().replace(/[.,]/g, '').trim();
      
      const isCorrect = normalizedVal === normalizedCorrect;
      newStatus[w] = isCorrect ? "correct" : "wrong";
      if (isCorrect) correctCount++;
    });

    setAnswerStatus(newStatus);

    const total = words.length;
    setScore({
      correct: correctCount,
      total,
      details: ` ${correctCount}/${total} correct`
    });

    if (incomplete) {
      ValidationAlert.error(
        "Incomplet",
        "Veuillez remplir tous les champs.",
        `${correctCount}/${total}`
      );
    } else if (correctCount === total) {
      ValidationAlert.success(
        "Excellent!",
        "Vous avez toutes les bonnes réponses!",
        `${correctCount}/${total}`
      );
    } else {
      ValidationAlert.error(
        "Presque!",
        `Vous avez ${correctCount} sur ${total} correct.`,
        `${correctCount}/${total}`
      );
    }
  };

  const showAnswers = () => {
    const filled = {};
    const status = {};

    words.forEach(w => {
      filled[w] = correctAnswers[w].answer;
      status[w] = "correct";
    });

    setAnswers(filled);
    setAnswerStatus(status);

    setScore({
      correct: words.length,
      total: words.length,
      details: "Toutes les réponses affichées"
    });

    ValidationAlert.success(
      "Réponses affichées",
      "Toutes les bonnes réponses ont été remplies.",
      `${words.length}/${words.length}`
    );
  };

  const reset = () => {
    setAnswers(Object.fromEntries(words.map(w => [w, ""])));
    setAnswerStatus({});
    setScore(null);
  };

  // الكلمات المقترحة في المربعات الحمراء
  const suggestedWords = [
    "pommes de terres",
    "eau minérale",
    "poulet",
    "lait",
    "tartines",
    "chocolat chaud",
    "céréales",
    "miel",
    "jus d'orange",
    "viande",
    "légumes",
    "potage"
  ];

  return (
    <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
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
        <span className="ex-A" style={{ backgroundColor: "#f38180" }}>5</span>
        <span className="number-of-q">5</span>{" "}
        Complète les phrases avec les mots proposés.
      </header>
      
      {score && <ScoreCardEnhanced score={score} />}

      <div className="Page31Q5 w-full max-w-6xl flex justify-center">
        <div className="bg-white p-8 rounded-2xl " style={{ minHeight: "500px" }}>
          <div className="flex flex-row items-start gap-12">
            {/* الجانب الأيسر: الفقرات مع الفراغات */}
            <div className="flex-1 space-y-8">
              {/* المقدمة */}
              <div className="text-lg font-medium text-gray-700 mb-2">
                <span className="font-bold text-gray-800">Exemple :</span> (1) <span className="font-bold">poulet</span>
              </div>

              {/* الفقرة الأولى */}
              <div className="space-y-4">
                <p className="text-lg text-gray-800 leading-relaxed">
                  Je prends le déjeuner à l'école. Mon repas typique est :<br />
                  du (1) <span className="font-bold">poulet</span> avec des 
                  <span className="inline-flex items-center mx-2">
                    <input
                      type="text"
                      value={answers["2"]}
                      onChange={(e) => handleChange("2", e.target.value)}
                      className={`w-48 p-2 border-b-2 focus:outline-none text-lg ${
                        answerStatus["2"] === "correct"
                          ? "border-green-500 bg-green-50"
                          : answerStatus["2"] === "wrong"
                          ? "border-red-500 bg-red-50"
                          : "border-gray-400"
                      }`}
                      placeholder="(2)"
                    />
                  </span>
                  , et comme boisson je prends de l'
                  <span className="inline-flex items-center mx-2">
                    <input
                      type="text"
                      value={answers["3"]}
                      onChange={(e) => handleChange("3", e.target.value)}
                      className={`w-48 p-2 border-b-2 focus:outline-none text-lg ${
                        answerStatus["3"] === "correct"
                          ? "border-green-500 bg-green-50"
                          : answerStatus["3"] === "wrong"
                          ? "border-red-500 bg-red-50"
                          : "border-gray-400"
                      }`}
                      placeholder="(3)"
                    />
                  </span>
                  .
                </p>
              </div>

              {/* الفقرة الثانية */}
              <div className="space-y-4">
                <p className="text-lg text-gray-800 leading-relaxed">
                  a Pour le petit-déjeuner je prends des 
                  <span className="inline-flex items-center mx-2">
                    <input
                      type="text"
                      value={answers["4"]}
                      onChange={(e) => handleChange("4", e.target.value)}
                      className={`w-40 p-2 border-b-2 focus:outline-none text-lg ${
                        answerStatus["4"] === "correct"
                          ? "border-green-500 bg-green-50"
                          : answerStatus["4"] === "wrong"
                          ? "border-red-500 bg-red-50"
                          : "border-gray-400"
                      }`}
                      placeholder="(1)"
                    />
                  </span>
                  avec du 
                  <span className="inline-flex items-center mx-2">
                    <input
                      type="text"
                      value={answers["5"]}
                      onChange={(e) => handleChange("5", e.target.value)}
                      className={`w-40 p-2 border-b-2 focus:outline-none text-lg ${
                        answerStatus["5"] === "correct"
                          ? "border-green-500 bg-green-50"
                          : answerStatus["5"] === "wrong"
                          ? "border-red-500 bg-red-50"
                          : "border-gray-400"
                      }`}
                      placeholder="(2)"
                    />
                  </span>
                  , puis des 
                  <span className="inline-flex items-center mx-2">
                    <input
                      type="text"
                      value={answers["6"]}
                      onChange={(e) => handleChange("6", e.target.value)}
                      className={`w-52 p-2 border-b-2 focus:outline-none text-lg ${
                        answerStatus["6"] === "correct"
                          ? "border-green-500 bg-green-50"
                          : answerStatus["6"] === "wrong"
                          ? "border-red-500 bg-red-50"
                          : "border-gray-400"
                      }`}
                      placeholder="(3)"
                    />
                  </span>
                  avec du 
                  <span className="inline-flex items-center mx-2">
                    <input
                      type="text"
                      value={answers["7"]}
                      onChange={(e) => handleChange("7", e.target.value)}
                      className={`w-40 p-2 border-b-2 focus:outline-none text-lg ${
                        answerStatus["7"] === "correct"
                          ? "border-green-500 bg-green-50"
                          : answerStatus["7"] === "wrong"
                          ? "border-red-500 bg-red-50"
                          : "border-gray-400"
                      }`}
                      placeholder="(4)"
                    />
                  </span>
                  , et comme boisson une tasse de 
                  <span className="inline-flex items-center mx-2">
                    <input
                      type="text"
                      value={answers["8"]}
                      onChange={(e) => handleChange("8", e.target.value)}
                      className={`w-48 p-2 border-b-2 focus:outline-none text-lg ${
                        answerStatus["8"] === "correct"
                          ? "border-green-500 bg-green-50"
                          : answerStatus["8"] === "wrong"
                          ? "border-red-500 bg-red-50"
                          : "border-gray-400"
                      }`}
                      placeholder="(5)"
                    />
                  </span>
                  .
                </p>
              </div>

              {/* الفقرة الثالثة */}
              <div className="space-y-4">
                <p className="text-lg text-gray-800 leading-relaxed">
                  Je prends mon dîner avec ma famille. Nous mangeons souvent de la 
                  <span className="inline-flex items-center mx-2">
                    <input
                      type="text"
                      value={answers["9"]}
                      onChange={(e) => handleChange("9", e.target.value)}
                      className={`w-48 p-2 border-b-2 focus:outline-none text-lg ${
                        answerStatus["9"] === "correct"
                          ? "border-green-500 bg-green-50"
                          : answerStatus["9"] === "wrong"
                          ? "border-red-500 bg-red-50"
                          : "border-gray-400"
                      }`}
                      placeholder="(1)"
                    />
                  </span>
                  , du 
                  <span className="inline-flex items-center mx-2">
                    <input
                      type="text"
                      value={answers["10"]}
                      onChange={(e) => handleChange("10", e.target.value)}
                      className={`w-48 p-2 border-b-2 focus:outline-none text-lg ${
                        answerStatus["10"] === "correct"
                          ? "border-green-500 bg-green-50"
                          : answerStatus["10"] === "wrong"
                          ? "border-red-500 bg-red-50"
                          : "border-gray-400"
                      }`}
                      placeholder="(2)"
                    />
                  </span>
                  et des 
                  <span className="inline-flex items-center mx-2">
                    <input
                      type="text"
                      value={answers["11"]}
                      onChange={(e) => handleChange("11", e.target.value)}
                      className={`w-48 p-2 border-b-2 focus:outline-none text-lg ${
                        answerStatus["11"] === "correct"
                          ? "border-green-500 bg-green-50"
                          : answerStatus["11"] === "wrong"
                          ? "border-red-500 bg-red-50"
                          : "border-gray-400"
                      }`}
                      placeholder="(3)"
                    />
                  </span>
                  . Comme boisson, nous prenons du 
                  <span className="inline-flex items-center mx-2">
                    <input
                      type="text"
                      value={answers["12"]}
                      onChange={(e) => handleChange("12", e.target.value)}
                      className={`w-48 p-2 border-b-2 focus:outline-none text-lg ${
                        answerStatus["12"] === "correct"
                          ? "border-green-500 bg-green-50"
                          : answerStatus["12"] === "wrong"
                          ? "border-red-500 bg-red-50"
                          : "border-gray-400"
                      }`}
                      placeholder="(4)"
                    />
                  </span>
                  .
                </p>
              </div>
            </div>

            {/* الجانب الأيمن: المربعات الحمراء مع الكلمات المقترحة */}
            <div className="w-64 space-y-4">
              <div className="bg-red-100 border-2 border-red-300 rounded-lg p-4">
                <h3 className="text-lg font-bold text-red-800 mb-3">Mots proposés :</h3>
                <div className="grid grid-cols-1 ">
                  {suggestedWords.map((word, index) => (
                    <div 
                      key={index}
                      className="bg-red-50 border border-red-200 rounded px-3 py-2 text-gray-800 text-sm"
                    >
                      {word}
                    </div>
                  ))}
                </div>
              </div>
              
          
            </div>
          </div>
        </div>
      </div>

      <div className="spaces"></div>
      
      <div className="action-buttons-container">
        <button onClick={reset} className="try-again-button">
          Recommencer ↻
        </button>
        <button onClick={showAnswers} className="show-answer-btn swal-continue">
          Afficher la réponse
        </button>
        <button onClick={checkAnswer} className="check-button2">
          Vérifier la réponse ✓
        </button>
      </div>
    </div>
  );
};

export default Page28Q1;