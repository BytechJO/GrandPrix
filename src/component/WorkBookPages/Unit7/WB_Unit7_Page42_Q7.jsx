import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page28Q1 = () => {
  // ✅ الإجابات الصحيحة للفراغات (2-22)
  const correctAnswers = {
    "2": { answer: "nous levons", type: "verb" },
    "3": { answer: "prenons", type: "verb" },
    "4": { answer: "me coiffe", type: "verb" },
    "5": { answer: "me maquille", type: "verb" },
    "6": { answer: "se rase", type: "verb" },
    "7": { answer: "se brosse", type: "verb" },
    "8": { answer: "se préparent", type: "verb" },
    "9": { answer: "s'habillent", type: "verb" },
    "10": { answer: "sortons", type: "verb" },
    "11": { answer: "nous dépêchons", type: "verb" },
    "12": { answer: "nous embrassons", type: "verb" },
    "13": { answer: "passons", type: "verb" },
    "14": { answer: "rentrent", type: "verb" },
    "15": { answer: "font", type: "verb" },
    "16": { answer: "prépare", type: "verb" },
    "17": { answer: "dînons", type: "verb" },
    "18": { answer: "faisons", type: "verb" },
    "19": { answer: "regardons", type: "verb" },
    "20": { answer: "se couchent", type: "verb" },
    "21": { answer: "nous couchons", type: "verb" },
    "22": { answer: "aimons", type: "verb" }
  };

  const blanks = Object.keys(correctAnswers);
  const [score, setScore] = useState(null);
  const [answers, setAnswers] = useState(
    Object.fromEntries(blanks.map(w => [w, ""]))
  );
  const [answerStatus, setAnswerStatus] = useState({});

  const handleChange = (blank, value) => {
    setAnswers({ ...answers, [blank]: value });
  };

  const checkAnswer = () => {
    const newStatus = {};
    let correctCount = 0;
    let incomplete = false;

    blanks.forEach(w => {
      const val = answers[w]?.trim();
      if (!val) incomplete = true;

      const normalizedVal = val?.toLowerCase().replace(/[.,]/g, '').trim();
      const normalizedCorrect = correctAnswers[w].answer.toLowerCase().replace(/[.,]/g, '').trim();
      
      const isCorrect = normalizedVal === normalizedCorrect;
      newStatus[w] = isCorrect ? "correct" : "wrong";
      if (isCorrect) correctCount++;
    });

    setAnswerStatus(newStatus);

    const total = blanks.length;
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

    blanks.forEach(w => {
      filled[w] = correctAnswers[w].answer;
      status[w] = "correct";
    });

    setAnswers(filled);
    setAnswerStatus(status);

    setScore({
      correct: blanks.length,
      total: blanks.length,
      details: "Toutes les réponses affichées"
    });

    ValidationAlert.success(
      "Réponses affichées",
      "Toutes les bonnes réponses ont été remplies.",
      `${blanks.length}/${blanks.length}`
    );
  };

  const reset = () => {
    setAnswers(Object.fromEntries(blanks.map(w => [w, ""])));
    setAnswerStatus({});
    setScore(null);
  };

  return (
    <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
     <header
                className="header-title-page1 w-full text-left mb-4"
                style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
            >
                <span style={{ backgroundColor: "#cf7230", color: "#white" }} className="ex-A">7</span>
                <span style={{ color: "black" }} className="number-of-q">7</span>
             Complète le texte.
            </header>
      
      {score && <ScoreCardEnhanced score={score} />}

      <div className="Page31Q5 w-full max-w-6xl flex justify-center">
        <div className="bg-white p-8 rounded-2xl " style={{ minHeight: "500px", width: "100%" }}>
          <div className="flex flex-col items-start w-full">
            {/* المقدمة */}
            <div className="text-lg font-medium text-gray-700 mb-6">
              <span className="font-bold text-gray-800">Exemple :</span> (1) <span className="font-bold text-blue-600">nous réveillons</span>
            </div>

            {/* النص مع الفراغات */}
            <div className="text-lg text-gray-800 leading-relaxed w-full space-y-4">
              <p>
                Chaque matin, mon mari et moi, nous (1) <span className="font-bold text-blue-600">nous réveillons</span> (se réveiller) à 7 h 30. Nous
                <span className="inline-flex items-center mx-1">
                  <input
                    type="text"
                    value={answers["2"]}
                    onChange={(e) => handleChange("2", e.target.value)}
                    className={`w-40 p-1 border-b-2 focus:outline-none text-lg ${
                      answerStatus["2"] === "correct"
                        ? "border-green-500 bg-green-50"
                        : answerStatus["2"] === "wrong"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-400"
                    }`}
                    placeholder="(2)"
                  />
                </span>
                (se lever) et nous
                <span className="inline-flex items-center mx-1">
                  <input
                    type="text"
                    value={answers["3"]}
                    onChange={(e) => handleChange("3", e.target.value)}
                    className={`w-40 p-1 border-b-2 focus:outline-none text-lg ${
                      answerStatus["3"] === "correct"
                        ? "border-green-500 bg-green-50"
                        : answerStatus["3"] === "wrong"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-400"
                    }`}
                    placeholder="(3)"
                  />
                </span>
                (prendre) notre petit-déjeuner.
              </p>

              <p>
                Puis, je
                <span className="inline-flex items-center mx-1">
                  <input
                    type="text"
                    value={answers["4"]}
                    onChange={(e) => handleChange("4", e.target.value)}
                    className={`w-40 p-1 border-b-2 focus:outline-none text-lg ${
                      answerStatus["4"] === "correct"
                        ? "border-green-500 bg-green-50"
                        : answerStatus["4"] === "wrong"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-400"
                    }`}
                    placeholder="(4)"
                  />
                </span>
                (se coiffer) et je
                <span className="inline-flex items-center mx-1">
                  <input
                    type="text"
                    value={answers["5"]}
                    onChange={(e) => handleChange("5", e.target.value)}
                    className={`w-40 p-1 border-b-2 focus:outline-none text-lg ${
                      answerStatus["5"] === "correct"
                        ? "border-green-500 bg-green-50"
                        : answerStatus["5"] === "wrong"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-400"
                    }`}
                    placeholder="(5)"
                  />
                </span>
                (se maquiller). Marc
                <span className="inline-flex items-center mx-1">
                  <input
                    type="text"
                    value={answers["6"]}
                    onChange={(e) => handleChange("6", e.target.value)}
                    className={`w-40 p-1 border-b-2 focus:outline-none text-lg ${
                      answerStatus["6"] === "correct"
                        ? "border-green-500 bg-green-50"
                        : answerStatus["6"] === "wrong"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-400"
                    }`}
                    placeholder="(6)"
                  />
                </span>
                (se raser) et
                <span className="inline-flex items-center mx-1">
                  <input
                    type="text"
                    value={answers["7"]}
                    onChange={(e) => handleChange("7", e.target.value)}
                    className={`w-40 p-1 border-b-2 focus:outline-none text-lg ${
                      answerStatus["7"] === "correct"
                        ? "border-green-500 bg-green-50"
                        : answerStatus["7"] === "wrong"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-400"
                    }`}
                    placeholder="(7)"
                  />
                </span>
                (se brosser) les dents pendant que les enfants
                <span className="inline-flex items-center mx-1">
                  <input
                    type="text"
                    value={answers["8"]}
                    onChange={(e) => handleChange("8", e.target.value)}
                    className={`w-40 p-1 border-b-2 focus:outline-none text-lg ${
                      answerStatus["8"] === "correct"
                        ? "border-green-500 bg-green-50"
                        : answerStatus["8"] === "wrong"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-400"
                    }`}
                    placeholder="(8)"
                  />
                </span>
                (se préparer) rapidement.
              </p>

              <p>
                Ils
                <span className="inline-flex items-center mx-1">
                  <input
                    type="text"
                    value={answers["9"]}
                    onChange={(e) => handleChange("9", e.target.value)}
                    className={`w-40 p-1 border-b-2 focus:outline-none text-lg ${
                      answerStatus["9"] === "correct"
                        ? "border-green-500 bg-green-50"
                        : answerStatus["9"] === "wrong"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-400"
                    }`}
                    placeholder="(9)"
                  />
                </span>
                (s'habiller) et nous
                <span className="inline-flex items-center mx-1">
                  <input
                    type="text"
                    value={answers["10"]}
                    onChange={(e) => handleChange("10", e.target.value)}
                    className={`w-40 p-1 border-b-2 focus:outline-none text-lg ${
                      answerStatus["10"] === "correct"
                        ? "border-green-500 bg-green-50"
                        : answerStatus["10"] === "wrong"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-400"
                    }`}
                    placeholder="(10)"
                  />
                </span>
                (sortir). Nous
                <span className="inline-flex items-center mx-1">
                  <input
                    type="text"
                    value={answers["11"]}
                    onChange={(e) => handleChange("11", e.target.value)}
                    className={`w-40 p-1 border-b-2 focus:outline-none text-lg ${
                      answerStatus["11"] === "correct"
                        ? "border-green-500 bg-green-50"
                        : answerStatus["11"] === "wrong"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-400"
                    }`}
                    placeholder="(11)"
                  />
                </span>
                (se dépêcher) pour attraper le bus. Nous
                <span className="inline-flex items-center mx-1">
                  <input
                    type="text"
                    value={answers["12"]}
                    onChange={(e) => handleChange("12", e.target.value)}
                    className={`w-40 p-1 border-b-2 focus:outline-none text-lg ${
                      answerStatus["12"] === "correct"
                        ? "border-green-500 bg-green-50"
                        : answerStatus["12"] === "wrong"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-400"
                    }`}
                    placeholder="(12)"
                  />
                </span>
                (s'embrasser) avant de nous quitter et nous
                <span className="inline-flex items-center mx-1">
                  <input
                    type="text"
                    value={answers["13"]}
                    onChange={(e) => handleChange("13", e.target.value)}
                    className={`w-40 p-1 border-b-2 focus:outline-none text-lg ${
                      answerStatus["13"] === "correct"
                        ? "border-green-500 bg-green-50"
                        : answerStatus["13"] === "wrong"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-400"
                    }`}
                    placeholder="(13)"
                  />
                </span>
                (passer) une bonne journée.
              </p>

              <p>
                D'habitude, mes enfants
                <span className="inline-flex items-center mx-1">
                  <input
                    type="text"
                    value={answers["14"]}
                    onChange={(e) => handleChange("14", e.target.value)}
                    className={`w-40 p-1 border-b-2 focus:outline-none text-lg ${
                      answerStatus["14"] === "correct"
                        ? "border-green-500 bg-green-50"
                        : answerStatus["14"] === "wrong"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-400"
                    }`}
                    placeholder="(14)"
                  />
                </span>
                (rentre) à la maison à 3 h, puis ils
                <span className="inline-flex items-center mx-1">
                  <input
                    type="text"
                    value={answers["15"]}
                    onChange={(e) => handleChange("15", e.target.value)}
                    className={`w-40 p-1 border-b-2 focus:outline-none text-lg ${
                      answerStatus["15"] === "correct"
                        ? "border-green-500 bg-green-50"
                        : answerStatus["15"] === "wrong"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-400"
                    }`}
                    placeholder="(15)"
                  />
                </span>
                (faire) leurs devoirs et moi, je
                <span className="inline-flex items-center mx-1">
                  <input
                    type="text"
                    value={answers["16"]}
                    onChange={(e) => handleChange("16", e.target.value)}
                    className={`w-40 p-1 border-b-2 focus:outline-none text-lg ${
                      answerStatus["16"] === "correct"
                        ? "border-green-500 bg-green-50"
                        : answerStatus["16"] === "wrong"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-400"
                    }`}
                    placeholder="(16)"
                  />
                </span>
                (préparer) le dîner.
              </p>

              <p>
                Nous
                <span className="inline-flex items-center mx-1">
                  <input
                    type="text"
                    value={answers["17"]}
                    onChange={(e) => handleChange("17", e.target.value)}
                    className={`w-40 p-1 border-b-2 focus:outline-none text-lg ${
                      answerStatus["17"] === "correct"
                        ? "border-green-500 bg-green-50"
                        : answerStatus["17"] === "wrong"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-400"
                    }`}
                    placeholder="(17)"
                  />
                </span>
                (dîner) à 6 h, parce que mon mari rentre à la maison à cette heure.
              </p>

              <p>
                Après, nous
                <span className="inline-flex items-center mx-1">
                  <input
                    type="text"
                    value={answers["18"]}
                    onChange={(e) => handleChange("18", e.target.value)}
                    className={`w-40 p-1 border-b-2 focus:outline-none text-lg ${
                      answerStatus["18"] === "correct"
                        ? "border-green-500 bg-green-50"
                        : answerStatus["18"] === "wrong"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-400"
                    }`}
                    placeholder="(18)"
                  />
                </span>
                (faire) parfois du sport ou nous
                <span className="inline-flex items-center mx-1">
                  <input
                    type="text"
                    value={answers["19"]}
                    onChange={(e) => handleChange("19", e.target.value)}
                    className={`w-40 p-1 border-b-2 focus:outline-none text-lg ${
                      answerStatus["19"] === "correct"
                        ? "border-green-500 bg-green-50"
                        : answerStatus["19"] === "wrong"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-400"
                    }`}
                    placeholder="(19)"
                  />
                </span>
                (regarder) la télé ensemble. À 10 h 30 les enfants
                <span className="inline-flex items-center mx-1">
                  <input
                    type="text"
                    value={answers["20"]}
                    onChange={(e) => handleChange("20", e.target.value)}
                    className={`w-40 p-1 border-b-2 focus:outline-none text-lg ${
                      answerStatus["20"] === "correct"
                        ? "border-green-500 bg-green-50"
                        : answerStatus["20"] === "wrong"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-400"
                    }`}
                    placeholder="(20)"
                  />
                </span>
                (se coucher) et nous
                <span className="inline-flex items-center mx-1">
                  <input
                    type="text"
                    value={answers["21"]}
                    onChange={(e) => handleChange("21", e.target.value)}
                    className={`w-40 p-1 border-b-2 focus:outline-none text-lg ${
                      answerStatus["21"] === "correct"
                        ? "border-green-500 bg-green-50"
                        : answerStatus["21"] === "wrong"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-400"
                    }`}
                    placeholder="(21)"
                  />
                </span>
                (se coucher) tard, car nous
                <span className="inline-flex items-center mx-1">
                  <input
                    type="text"
                    value={answers["22"]}
                    onChange={(e) => handleChange("22", e.target.value)}
                    className={`w-40 p-1 border-b-2 focus:outline-none text-lg ${
                      answerStatus["22"] === "correct"
                        ? "border-green-500 bg-green-50"
                        : answerStatus["22"] === "wrong"
                        ? "border-red-500 bg-red-50"
                        : "border-gray-400"
                    }`}
                    placeholder="(22)"
                  />
                </span>
                (aimer) lire.
              </p>
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