import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import img3 from "../../../assets/unit1/imgs/P16Q6-1.svg"
import img1 from "../../../assets/unit1/imgs/P16Q6-2.svg"
import img2 from "../../../assets/unit1/imgs/P16Q6-3.svg"
/* 🔴 الإجابات الصحيحة للتمرين الجديد */
const correctAnswers = {
    a: "c",               // Dis-moi ce que tu manges
    b: "b",             // Nous mangeons chaque jour
    c: "a",               // mangez sainement
    d: "a",               // Mangez tous les jours...

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
        style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
      >
        <span style={{ backgroundColor: "#7cd0f5", color: "#white" }} className="ex-A">A</span>
        <span style={{ color: "black" }} className="number-of-q">8</span>
       Écris la lettre qui correspond.           </header>

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
                                <span className="text">L’invention du téléphone mobile.</span>
                                <input
                                maxLength={1}
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
                            </div>

                            {/* الجملة b */}
                            <div className="sentence-line flex items-start">
                                <span className="sentence-label font-bold min-w-[30px]">b</span>
                                <span className="text">L’invention de la console de jeu vidéo.</span>
                                <input
                                 maxLength={1}
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
                            </div>

                            {/* الجملة c */}
                            <div className="sentence-line flex items-start">
                                <span className="sentence-label font-bold min-w-[30px]">c</span>
                                <span className="text">L’invention de l'ordinateur portable.</span>
                                <input
                                 maxLength={1}
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
                            </div>

                            {/* الجملة d */}
                            <div className="sentence-line flex items-start">
                                <span className="sentence-label font-bold min-w-[30px]">d</span>
                                <span className="text">Il pèse environ 11 kg.</span>

                                <input
                                 maxLength={1}
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