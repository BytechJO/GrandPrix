import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import "./Page35_Q2.css"; // إذا كنت تستخدم ملف CSS

const Page32_Exercise = () => {
  // البيانات الأصلية
  const words = [
    "chaises", "règles", "trousses", "crayons", "stylos", "diseurs", "gomme",
    "surligneurs", "efficients", "fenêtre", "tableau blanc", "tables", "paire de ciseaux", "cahiers", "CD"
  ];

  // الحالة الأولية للإجابات
  const initialAnswers = {
    un: ["", "", "", "", "", ""],
    une: ["", "", "", "", "", ""],
    des: ["", "", "", "", "", ""]
  };

  // حالة لتلوين الإدخالات بناءً على صحّتها
  const initialInputStatus = {
    un: ["", "", "", "", "", ""],
    une: ["", "", "", "", "", ""],
    des: ["", "", "", "", "", ""]
  };

  const [answers, setAnswers] = useState(initialAnswers);
  const [inputStatus, setInputStatus] = useState(initialInputStatus);
  const [score, setScore] = useState(null);

  // الإجابات الصحيحة
  const correctAnswers = {
    un: ["sac à dos", "stylo", "classeur", "tableau blanc","CD"],
    une: ["chaise", "règle", "trousse", "gomme", "fenêtre", "paire de ciseaux"],
    des: ["crayons", "surligneurs", "effaceurs", "tables", "cahiers"]
  };

  // معالجة تغيير الإدخال
  const handleInputChange = (category, index, value) => {
    setAnswers(prev => ({
      ...prev,
      [category]: prev[category].map((item, i) => i === index ? value : item)
    }));

    // إزالة التلوين عند تعديل الإدخال
    setInputStatus(prev => ({
      ...prev,
      [category]: prev[category].map((item, i) => i === index ? "" : item)
    }));
  };

  // التحقق من الإجابات
  const checkAnswer = () => {
    let correctCount = 0;
    let totalFields = 0;
    const newInputStatus = {};

    Object.keys(correctAnswers).forEach(category => {
      newInputStatus[category] = [];
      answers[category].forEach((answer, index) => {
        const userAnswer = answer.trim().toLowerCase();
        const correctAnswer = correctAnswers[category][index]?.toLowerCase() || "";
        
        if (userAnswer && correctAnswer) {
          totalFields++;
          if (userAnswer === correctAnswer) {
            newInputStatus[category][index] = "correct"; // صحيح
            correctCount++;
          } else {
            newInputStatus[category][index] = "wrong";   // خطأ
          }
        } else {
          newInputStatus[category][index] = ""; // فارغ
        }
      });
    });

    setInputStatus(newInputStatus);
    setScore({ correct: correctCount, total: totalFields });

    if (correctCount === totalFields && totalFields > 0) {
      ValidationAlert.success(
        "Excellent !",
        `Toutes les réponses sont correctes ! (${correctCount}/${totalFields})`
      );
    } else if (correctCount === 0 && totalFields > 0) {
      ValidationAlert.error(
        "Essayez encore !",
        `Aucune réponse correcte. (0/${totalFields})`
      );
    } else if (totalFields === 0) {
      ValidationAlert.info(
        "Champs vides",
        "Veuillez remplir au moins un champ."
      );
    } else {
      ValidationAlert.error(
        "Presque !",
        `Vous avez ${correctCount} sur ${totalFields} corrects.`
      );
    }
  };

  // عرض الإجابات الصحيحة
  const showAnswerFunc = () => {
    setAnswers(correctAnswers);

    // تلوين كل الحقول على أنها صحيحة
    const newInputStatus = {};
    Object.keys(correctAnswers).forEach(category => {
      newInputStatus[category] = correctAnswers[category].map(() => "correct");
    });
    setInputStatus(newInputStatus);

    const totalFields = Object.values(correctAnswers).reduce(
      (total, arr) => total + arr.filter(item => item).length, 
      0
    );
    setScore({ correct: totalFields, total: totalFields });
    
    ValidationAlert.success(
      "Réponses affichées",
      "Toutes les réponses correctes ont été remplies."
    );
  };

  // إعادة تعيين التمرين
  const resetExercise = () => {
    setAnswers(initialAnswers);
    setInputStatus(initialInputStatus);
    setScore(null);
  };

  // دالة لتحديد لون الإدخال بناءً على الحالة
  const getInputClass = (status) => {
    if (status === "correct") return "bg-green-100 border-green-500";
    if (status === "wrong") return "bg-red-100 border-red-500";
    return "bg-white border-gray-300";
  };

  return (
    <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
      {/* العنوان الرئيسي */}
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
        <span className="number-of-q">1</span>  Fais des listes.

      </header>

      {/* عرض كلمات المساعدة */}
      <div className="word-bank mb-8 p-4  rounded-lg" style={{backgroundColor:"#f4b154"}}>
        <h3 className="font-bold mb-3 text-lg text-center">Mots disponibles :</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {words.map((word, index) => (
            <span 
              key={index} 
              className="px-3 py-1 rounded-full text-sm font-bold "
              style={{color:"white", fontSize:"15px"}}
            >
              {word}
            </span>
          ))}
        </div>
      </div>

      {/* الجدول */}
      <div className="exercise-table w-full max-w-4xl mx-auto">
        <table className="w-full border-collapse border shadow-md">
          <thead>
            <tr className="bg-gray-100">
              <th className="border  p-4 text-center font-bold text-lg" style={{backgroundColor:"#2c8ac9", color:"white",  borderTopLeftRadius: "50px",
  borderTopRightRadius: "50px",}}>un</th>
              <th className="border  p-4 text-center font-bold text-lg" style={{backgroundColor:"#5fbc58", color:"white" ,borderTopLeftRadius: "50px",
  borderTopRightRadius: "50px",}}>une</th>
              <th className="border  p-4 text-center font-bold text-lg" style={{backgroundColor:"#d3373c", color:"white",   borderTopLeftRadius: "50px",
  borderTopRightRadius: "50px", }}>des</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(6)].map((_, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {/* عمود un */}
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    value={answers.un[rowIndex] || ""}
                    onChange={(e) => handleInputChange("un", rowIndex, e.target.value)}
                    disabled={rowIndex === 5} // تعطيل الإدخال الخامس
                    className={`w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${getInputClass(inputStatus.un[rowIndex])}`}
                  />
                </td>
                
                {/* عمود une */}
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    value={answers.une[rowIndex] || ""}
                    onChange={(e) => handleInputChange("une", rowIndex, e.target.value)}
                    className={`w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${getInputClass(inputStatus.une[rowIndex])}`}
                  />
                </td>
                
                {/* عمود des */}
                <td className="border border-gray-300 p-2">
                  <input
                    type="text"
                    value={answers.des[rowIndex] || ""}
                    onChange={(e) => handleInputChange("des", rowIndex, e.target.value)}
                    disabled={rowIndex === 5} // تعطيل الإدخال الخامس
                    className={`w-full p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 ${getInputClass(inputStatus.des[rowIndex])}`}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="spaces"></div>

      {/* أزرار التحكم */}
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

      {/* بطاقة النتيجة */}
      {score && <ScoreCardEnhanced score={score} />}
    </div>
  );
};

export default Page32_Exercise;
