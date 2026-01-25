import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import "./Page99_Q10.css"
import img1 from "../../../assets/unite5pages/SVG/P99Q10-1.svg"
import img2 from "../../../assets/unite5pages/SVG/P99Q10-2.svg"
import img3 from "../../../assets/unite5pages/SVG/P99Q10-3.svg"
/* 🔴 الإجابات الصحيحة للتمرين الجديد */
const correctAnswers = {
  a: "manges",               // Dis-moi ce que tu manges
  b: "mangeons",             // Nous mangeons chaque jour
  c: "mangez",               // mangez sainement
  d: "Mangez",               // Mangez tous les jours...
  e: ["de sel", "de"],       // Limitez votre consommation de sel et de sucre
  f: "modération",           // mais avec modération
  g: "de l’eau",             // Buvez beaucoup
  h: "fortes et en bonne santé",       // vous serez en bonne santé
};

const Page_Exercise = () => {
  const [inputs, setInputs] = useState({});
  const [score, setScore] = useState(null);

  const handleInputChange = (key, value) => {
    setInputs({
      ...inputs,
      [key]: value
    });
  };

  const normalizeString = (str) => {
    return str
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, ""); // إزالة التشكيل
  };

  const checkAnswer = () => {
    let correctCount = 0;

    Object.keys(correctAnswers).forEach(key => {
      const correct = correctAnswers[key];
      const userAnswer = inputs[key] || "";

      if (Array.isArray(correct)) {
        // إذا كانت الإجابة متعددة (مثل السؤال e)
        const userParts = userAnswer.split(" et ").map(s => normalizeString(s));
        const correctParts = correct.map(normalizeString);
        
        if (
          userParts.length === 2 &&
          userParts[0] === correctParts[0] &&
          userParts[1] === correctParts[1]
        ) {
          correctCount++;
        }
      } else {
        if (normalizeString(userAnswer) === normalizeString(correct)) {
          correctCount++;
        }
      }
    });

    const total = Object.keys(correctAnswers).length;
    setScore({ correct: correctCount, total });

    if (correctCount === total) {
      ValidationAlert.success(
        `Excellent! (${correctCount}/${total})`,
        "Toutes les réponses sont correctes!"
      );
    } else if (correctCount === 0) {
      ValidationAlert.info(
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

  const showAnswerFunc = () => {
    const answers = {};
    Object.keys(correctAnswers).forEach(key => {
      if (Array.isArray(correctAnswers[key])) {
        answers[key] = correctAnswers[key].join(" et ");
      } else {
        answers[key] = correctAnswers[key];
      }
    });
    setInputs(answers);
  };

  const resetExercise = () => {
    setInputs({});
    setScore(null);
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
      {/* العنوان الرئيسي - بدون تغيير */}
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
        <span className="ex-A" style={{ backgroundColor: "#5e74b7" }}>D</span>
        <span className="number-of-q">10</span>{" "}
        Complète les phrases.
      </header>

      {score && <ScoreCardEnhanced score={score} />}

      {/* حاوية التمرين الرئيسية */}
      <div className="exercise-main-container w-full max-w-6xl flex flex-col gap-8" style={{
        justifyContent: "center",
   
      }}>
        {/* الجزء النصي - الجمل المطلوب إكمالها */}
        <div className="dialogue-section">
          <div className="dialogue-exercise w-full bg-white p-8 rounded-xl">
            <div className="dialogue-text space-y-6">
              {/* الجملة a */}
              <div className="sentence-line flex items-start">
                <span className="sentence-label font-bold min-w-[30px]">a</span>
                <span className="text">Dis-moi ce que tu</span>
                <input
                  type="text"
                  value={inputs.a || ""}
                  onChange={(e) => handleInputChange('a', e.target.value)}
                  style={{
                    borderBottom: "2px black solid",
                    marginLeft: "5px",
                    marginRight: "5px",
                    width: "100px",
                    textAlign: "center"
                  }}
                />
                <span className="text">, je te dirai qui tu es.</span>
              </div>

              {/* الجملة b */}
              <div className="sentence-line flex items-start">
                <span className="sentence-label font-bold min-w-[30px]">b</span>
                <span className="text">Nous</span>
                <input
                  type="text"
                  value={inputs.b || ""}
                  onChange={(e) => handleInputChange('b', e.target.value)}
                  style={{
                    borderBottom: "2px black solid",
                    marginLeft: "5px",
                    marginRight: "5px",
                    width: "100px",
                    textAlign: "center"
                  }}
                />
                <span className="text">chaque jour.</span>
              </div>

              {/* الجملة c */}
              <div className="sentence-line flex items-start">
                <span className="sentence-label font-bold min-w-[30px]">c</span>
                <span className="text">Pour être en forme, pour être en bonne santé, pour bien grandir, faites de l'exercice et</span>
                <input
                  type="text"
                  value={inputs.c || ""}
                  onChange={(e) => handleInputChange('c', e.target.value)}
                  style={{
                    borderBottom: "2px black solid",
                    marginLeft: "5px",
                    marginRight: "5px",
                    width: "100px",
                    textAlign: "center"
                  }}
                />
                <span className="text">sainement.</span>
              </div>

              {/* الجملة d */}
              <div className="sentence-line flex items-start">
                <span className="sentence-label font-bold min-w-[30px]">d</span>
                <input
                  type="text"
                  value={inputs.d || ""}
                  onChange={(e) => handleInputChange('d', e.target.value)}
                  style={{
                    borderBottom: "2px black solid",
                    marginRight: "5px",
                    width: "120px",
                    textAlign: "center"
                  }}
                />
                <span className="text">tous les jours au moins 5 portions (600 g) de légumes et de fruits.</span>
              </div>

              {/* الجملة e */}
              <div className="sentence-line flex items-start">
                <span className="sentence-label font-bold min-w-[30px]">e</span>
                <span className="text">Limitez votre consommation</span>
                <input
                  type="text"
                  value={inputs.e || ""}
                  onChange={(e) => handleInputChange('e', e.target.value)}
                  style={{
                    borderBottom: "2px black solid",
                    marginLeft: "5px",
                    marginRight: "5px",
                    width: "150px",
                    textAlign: "center"
                  }}
                />
                <span className="text">et</span>
                <input
                  type="text"
                  style={{
                    borderBottom: "2px black solid",
                    marginLeft: "5px",
                    marginRight: "5px",
                    width: "80px",
                    textAlign: "center"
                  }}
                  value={inputs.e ? inputs.e.split(" et ")[1] || "" : ""}
                  onChange={(e) => {
                    const firstPart = inputs.e ? inputs.e.split(" et ")[0] : "";
                    handleInputChange('e', `${firstPart} et ${e.target.value}`);
                  }}
                />
                <span className="text">sucre.</span>
              </div>

              {/* الجملة f */}
              <div className="sentence-line flex items-start">
                <span className="sentence-label font-bold min-w-[30px]">f</span>
                <span className="text">Mangez de tout … mais avec</span>
                <input
                  type="text"
                  value={inputs.f || ""}
                  onChange={(e) => handleInputChange('f', e.target.value)}
                  style={{
                    borderBottom: "2px black solid",
                    marginLeft: "5px",
                    marginRight: "5px",
                    width: "120px",
                    textAlign: "center"
                  }}
                />
                <span>.</span>
              </div>

              {/* الجملة g */}
              <div className="sentence-line flex items-start">
                <span className="sentence-label font-bold min-w-[30px]">g</span>
                <span className="text">Buvez</span>
                <input
                  type="text"
                  value={inputs.g || ""}
                  onChange={(e) => handleInputChange('g', e.target.value)}
                  style={{
                    borderBottom: "2px black solid",
                    marginLeft: "5px",
                    marginRight: "5px",
                    width: "100px",
                    textAlign: "center"
                  }}
                />
                <span>.</span>
              </div>

              {/* الجملة h */}
              <div className="sentence-line flex items-start">
                <span className="sentence-label font-bold min-w-[30px]">h</span>
                <span className="text">Essayez de suivre ces recommandations et vous serez</span>
                <input
                  type="text"
                  value={inputs.h || ""}
                  onChange={(e) => handleInputChange('h', e.target.value)}
                  style={{
                    borderBottom: "2px black solid",
                    marginLeft: "5px",
                    marginRight: "5px",
                    width: "200px",
                    textAlign: "center"
                  }}
                />
                <span>.</span>
              </div>
            </div>
          </div>
        </div>

        {/* الجزء السفلي - الصور في صف أفقي */}
        <div className="images-section flex flex-row gap-4 justify-center items-stretch">
          {/* الصورة الأولى - طبق الخضار والفواكه */}
          <div className="image-container flex-1 flex justify-center items-center">
            <div className="p-4 rounded-lg w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-gray-600"><img src={img1} alt="" /></div>
              </div>
            </div>
          </div>
          
          {/* الصورة الثانية */}
           <div className="image-container flex-1 flex justify-center items-center">
            <div className=" p-4 rounded-lg w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-gray-600"><img src={img2} alt="" /></div>
              </div>
            </div>
          </div>
          
          {/* الصورة الثالثة */}
            <div className="image-container flex-1 flex justify-center items-center">
            <div className=" p-4 rounded-lg w-full h-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-gray-600"><img src={img3} alt="" /></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="spaces" style={{ height: "40px" }}></div>

      {/* أزرار التحكم */}
      <div className="action-buttons-container flex gap-4">
        <button 
          onClick={resetExercise} 
          className="try-again-button px-6 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition"
        >
          Recommencer ↻
        </button>
        <button 
          onClick={showAnswerFunc} 
          className="show-answer-btn px-6 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition"
        >
          Afficher la réponse
        </button>
        <button 
          onClick={checkAnswer} 
          className="check-button2 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
        >
          Vérifier la réponse✓
        </button>
      </div>
    </div>
  );
};

export default Page_Exercise;