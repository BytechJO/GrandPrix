import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page9Q1 = () => {
  // ✅ الإجابات الصحيحة للفراغات (الجزء a والجزء b)
  const correctAnswers = {
    "a2": { answer: "Qu'est-ce que", type: "question" },
    "a3": { answer: "Quelle", type: "question" },
    "a4": { answer: "Est-ce que", type: "question" },
    "b1": { answer: "Quel", type: "question" },
    "b2": { answer: "quelle", type: "question" },
    "b3": { answer: "Quelle", type: "question" },
    "b4": { answer: "Quel", type: "question" }
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
                <span style={{ backgroundColor: "#7cd0f5", color: "#white" }} className="ex-A">8</span>
                <span style={{ color: "black" }} className="number-of-q">9</span>
            Complète les dialogues.
            </header>
      
      {score && <ScoreCardEnhanced score={score} />}

      <div className="Page9Q1 w-full max-w-6xl flex justify-center ml-70">
        <div className="bg-white p-8 rounded-2xl " style={{ minHeight: "500px", width: "100%" }}>
          <div className="flex flex-col items-start w-full">
            {/* المقدمة */}
            <div className="text-lg font-medium text-gray-700 mb-6">
              <span className="font-bold text-gray-800">Exemple :</span> (1) <span className="font-bold text-blue-600">comment</span>
            </div>

            {/* النص مع الفراغات */}
            <div className="text-lg text-gray-800 leading-relaxed w-full space-y-8">
              {/* الجزء a */}
              <div className="dialogue-part">
                <h3 className="font-bold text-lg mb-3 text-gray-700">a</h3>
                <div className="space-y-4 ml-4">
                  <p>
                    - Salut, (1) <span className="font-bold text-blue-600">comment ça va ?</span><br />
                    - Bien. Et toi ?
                  </p>
                  <p>
                    - (2)
                    <span className="inline-flex items-center mx-2">
                      <input
                        type="text"
                        value={answers["a2"]}
                        onChange={(e) => handleChange("a2", e.target.value)}
                        className={`w-48 p-1 border-b-2 focus:outline-none text-lg ${
                          answerStatus["a2"] === "correct"
                            ? "border-green-500 bg-green-50"
                            : answerStatus["a2"] === "wrong"
                            ? "border-red-500 bg-red-50"
                            : "border-gray-400"
                        }`}
                        placeholder="(2)"
                      />
                    </span>
                    tu as fait samedi ?
                  </p>
                  <p>
                    - J'ai écouté de la musique et j'ai chatté avec mes amis.
                  </p>
                  <p>
                    - (3)
                    <span className="inline-flex items-center mx-2">
                      <input
                        type="text"
                        value={answers["a3"]}
                        onChange={(e) => handleChange("a3", e.target.value)}
                        className={`w-48 p-1 border-b-2 focus:outline-none text-lg ${
                          answerStatus["a3"] === "correct"
                            ? "border-green-500 bg-green-50"
                            : answerStatus["a3"] === "wrong"
                            ? "border-red-500 bg-red-50"
                            : "border-gray-400"
                        }`}
                        placeholder="(3)"
                      />
                    </span>
                    musique préfères-tu ?
                  </p>
                  <p>
                    - Ah ... ça dépend, la musique classique ou le rock.
                  </p>
                  <p>
                    - (4)
                    <span className="inline-flex items-center mx-2">
                      <input
                        type="text"
                        value={answers["a4"]}
                        onChange={(e) => handleChange("a4", e.target.value)}
                        className={`w-48 p-1 border-b-2 focus:outline-none text-lg ${
                          answerStatus["a4"] === "correct"
                            ? "border-green-500 bg-green-50"
                            : answerStatus["a4"] === "wrong"
                            ? "border-red-500 bg-red-50"
                            : "border-gray-400"
                        }`}
                        placeholder="(4)"
                      />
                    </span>
                    tu as parlé à Robert ?
                  </p>
                  <p>
                    - Oui.
                  </p>
                </div>
              </div>

              {/* الجزء b */}
              <div className="dialogue-part">
                <h3 className="font-bold text-lg mb-3 text-gray-700">b</h3>
                <div className="space-y-4 ml-4">
                  <p>
                    - Bonjour, je veux acheter un bijou.
                  </p>
                  <p>
                    - (1)
                    <span className="inline-flex items-center mx-2">
                      <input
                        type="text"
                        value={answers["b1"]}
                        onChange={(e) => handleChange("b1", e.target.value)}
                        className={`w-48 p-1 border-b-2 focus:outline-none text-lg ${
                          answerStatus["b1"] === "correct"
                            ? "border-green-500 bg-green-50"
                            : answerStatus["b1"] === "wrong"
                            ? "border-red-500 bg-red-50"
                            : "border-gray-400"
                        }`}
                        placeholder="(1)"
                      />
                    </span>
                    type de bijou recherchez-vous ?
                  </p>
                  <p>
                    - Un bracelet.
                  </p>
                  <p>
                    - Pour (2)
                    <span className="inline-flex items-center mx-2">
                      <input
                        type="text"
                        value={answers["b2"]}
                        onChange={(e) => handleChange("b2", e.target.value)}
                        className={`w-48 p-1 border-b-2 focus:outline-none text-lg ${
                          answerStatus["b2"] === "correct"
                            ? "border-green-500 bg-green-50"
                            : answerStatus["b2"] === "wrong"
                            ? "border-red-500 bg-red-50"
                            : "border-gray-400"
                        }`}
                        placeholder="(2)"
                      />
                    </span>
                    occasion ?
                  </p>
                  <p>
                    - C'est l'anniversaire de ma mère.
                  </p>
                  <p>
                    - (3)
                    <span className="inline-flex items-center mx-2">
                      <input
                        type="text"
                        value={answers["b3"]}
                        onChange={(e) => handleChange("b3", e.target.value)}
                        className={`w-48 p-1 border-b-2 focus:outline-none text-lg ${
                          answerStatus["b3"] === "correct"
                            ? "border-green-500 bg-green-50"
                            : answerStatus["b3"] === "wrong"
                            ? "border-red-500 bg-red-50"
                            : "border-gray-400"
                        }`}
                        placeholder="(3)"
                      />
                    </span>
                    bonne idée !
                  </p>
                  <p>
                    - (4)
                    <span className="inline-flex items-center mx-2">
                      <input
                        type="text"
                        value={answers["b4"]}
                        onChange={(e) => handleChange("b4", e.target.value)}
                        className={`w-48 p-1 border-b-2 focus:outline-none text-lg ${
                          answerStatus["b4"] === "correct"
                            ? "border-green-500 bg-green-50"
                            : answerStatus["b4"] === "wrong"
                            ? "border-red-500 bg-red-50"
                            : "border-gray-400"
                        }`}
                        placeholder="(4)"
                      />
                    </span>
                    est son style ?
                  </p>
                  <p>
                    - Elle est assez classique.
                  </p>
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

export default Page9Q1;