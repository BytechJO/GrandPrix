import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

// النص مقسم إلى أجزاء مع تحديد الأفعال التي يجب تحويلها
const textSegments = [
    { before: "Comme tous les matins, Sylvie ", verb: "se réveille", after: " à 6 heures.", answer: "s'est réveillée" },
    { before: "Elle ", verb: "reste", after: " un peu au lit et elle ", verb2: "se lève", after2: " à 6 heures et demie.", answer: "est restée", answer2: "s'est levée" },
    { before: "Elle ", verb: "prend", after: " sa douche et elle ", verb2: "s'habille", after2: ".", answer: "a pris", answer2: "s'est habillée" },
    { before: "Ensuite, elle ", verb: "prend", after: " son petit-déjeuner.", answer: "a pris" },
    { before: "Pendant son petit-déjeuner, elle ", verb: "lit", after: " un peu et elle ", verb2: "écoute", after2: " la radio.", answer: "a lu", answer2: "a écouté" },
    { before: "Elle ", verb: "va", after: " au travail à 7 heures et quart.", answer: "est allée" },
    { before: "Avant de commencer son travail, elle ", verb: "prend", after: " un café avec Julien, son collègue.", answer: "a pris" },
    { before: "Elle ", verb: "travaille", after: " de 8 heures.", answer: "a travaillé" },
    { before: "Après son travail, elle ", verb: "va", after: " se promener dans un parc.", answer: "est allée" },
    { before: "Elle ", verb: "se promène", after: " pendant une heure.", answer: "s'est promenée" },
    { before: "Puis, comme chaque soir, elle ", verb: "fait", after: " quelques courses au supermarché du coin et elle ", verb2: "mange", after2: " en regardant la télé.", answer: "a fait", answer2: "a mangé" },
    { before: "Après le dîner, elle ", verb: "fait", after: " la vaisselle et elle ", verb2: "téléphone", after2: " à une amie.", answer: "a fait", answer2: "a téléphoné" }
];

const Page5_Q1_CleanAudio = () => {
    const [inputs, setInputs] = useState({});
    const [score, setScore] = useState(null);
    const [showAnswers, setShowAnswers] = useState(false);

    const handleInputChange = (id, value) => {
        setInputs({
            ...inputs,
            [id]: value
        });
    };

    const checkAnswer = () => {
        let correctCount = 0;
        const totalVerbs = textSegments.reduce((count, segment) => {
            return count + (segment.verb ? 1 : 0) + (segment.verb2 ? 1 : 0);
        }, 0);

        textSegments.forEach((segment, segmentIndex) => {
            // الفعل الأول
            if (segment.verb) {
                const userAnswer = inputs[`${segmentIndex}_1`]?.trim().toLowerCase() || "";
                const correctAnswer = segment.answer.toLowerCase();
                if (userAnswer === correctAnswer) {
                    correctCount++;
                }
            }
            
            // الفعل الثاني إذا موجود
            if (segment.verb2) {
                const userAnswer = inputs[`${segmentIndex}_2`]?.trim().toLowerCase() || "";
                const correctAnswer = segment.answer2.toLowerCase();
                if (userAnswer === correctAnswer) {
                    correctCount++;
                }
            }
        });

        setScore({ correct: correctCount, total: totalVerbs });

        if (correctCount === 0) {
            ValidationAlert.info(
                `Toutes les réponses sont incorrectes (0/${totalVerbs})`,
                "Essayez encore!"
            );
        } else if (correctCount === totalVerbs) {
            ValidationAlert.success(
                `Excellent! (${correctCount}/${totalVerbs})`,
                "Toutes les réponses sont correctes!"
            );
        } else {
            ValidationAlert.error(
                `Vous avez ${correctCount} sur ${totalVerbs} corrects.`,
                "Presque!"
            );
        }
    };

    const showAnswerFunc = () => {
        const answers = {};
        textSegments.forEach((segment, segmentIndex) => {
            if (segment.verb) {
                answers[`${segmentIndex}_1`] = segment.answer;
            }
            if (segment.verb2) {
                answers[`${segmentIndex}_2`] = segment.answer2;
            }
        });
        setInputs(answers);
        setShowAnswers(true);
    };

    const resetExercise = () => {
        setInputs({});
        setScore(null);
        setShowAnswers(false);
    };

    return (
        <div className="page-wrapper1 flex flex-col items-center justify-center gap-3 p-4">
            {/* Header */}
           <header
                className="header-title-page1 w-full text-left mb-4"
                style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
            >
                <span style={{ backgroundColor: "#cf7230", color: "#white" }} className="ex-A">7</span>
                <span style={{ color: "black" }} className="number-of-q">14</span>
             Écris ce texte au passé composé.
            </header>

            {/* التعليمات */}
            <div className="instruction mb-4 w-full max-w-3xl">
                <p className="text-center p-2 bg-yellow-50 border border-yellow-200 rounded">
                    <strong>Consigne:</strong> Conjuguez les verbes entre parenthèses au passé composé.
                </p>
            </div>

            {/* النص مع الإدخال المضمن */}
            <div className="text-container w-full max-w-3xl mb-6 p-4 bg-white border rounded-lg shadow">
                <div className="text-content space-y-3">
                    {textSegments.map((segment, segmentIndex) => (
                        <div key={segmentIndex} className="sentence">
                            <span className="text-gray-800">
                                {segment.before}
                                
                                {/* الفعل الأول */}
                                {segment.verb && (
                                    <>
                                        <span className="relative inline-block mx-1">
                                            <input
                                                type="text"
                                                className={`blank-input inline-block w-40 px-2 py-1 border-b-2 ${
                                                    showAnswers 
                                                        ? (inputs[`${segmentIndex}_1`]?.toLowerCase() === segment.answer.toLowerCase() 
                                                            ? 'border-green-500 bg-green-50 text-green-700' 
                                                            : 'border-red-500 bg-red-50 text-red-700')
                                                        : 'border-blue-500'
                                                }`}
                                                placeholder={`( ${segment.verb} → passé composé )`}
                                                value={inputs[`${segmentIndex}_1`] || ""}
                                                onChange={(e) => handleInputChange(`${segmentIndex}_1`, e.target.value)}
                                            />
                                            {showAnswers && (
                                                <span className="absolute -bottom-6 left-0 text-xs text-gray-500">
                                                    {segment.verb} → {segment.answer}
                                                </span>
                                            )}
                                        </span>
                                    </>
                                )}
                                
                                {segment.after}
                                
                                {/* الفعل الثاني إذا موجود */}
                                {segment.verb2 && (
                                    <>
                                        <span className="relative inline-block mx-1">
                                            <input
                                                type="text"
                                                className={`blank-input inline-block w-40 px-2 py-1 border-b-2 ${
                                                    showAnswers 
                                                        ? (inputs[`${segmentIndex}_2`]?.toLowerCase() === segment.answer2.toLowerCase() 
                                                            ? 'border-green-500 bg-green-50 text-green-700' 
                                                            : 'border-red-500 bg-red-50 text-red-700')
                                                        : 'border-blue-500'
                                                }`}
                                                placeholder={`( ${segment.verb2} → passé composé )`}
                                                value={inputs[`${segmentIndex}_2`] || ""}
                                                onChange={(e) => handleInputChange(`${segmentIndex}_2`, e.target.value)}
                                            />
                                            {showAnswers && (
                                                <span className="absolute -bottom-6 left-0 text-xs text-gray-500">
                                                    {segment.verb2} → {segment.answer2}
                                                </span>
                                            )}
                                        </span>
                                    </>
                                )}
                                
                                {segment.after2}
                            </span>
                        </div>
                    ))}
                </div>
            </div>

            {score && <ScoreCardEnhanced score={score} />}

            {/* Buttons */}
            <div className="action-buttons-container flex gap-4">
                <button 
                    onClick={resetExercise} 
                    className="try-again-button px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg transition"
                >
                    Recommencer ↻
                </button>
                <button 
                    onClick={showAnswerFunc} 
                    className="show-answer-btn px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-lg transition"
                >
                    Afficher la réponse
                </button>
                <button 
                    onClick={checkAnswer} 
                    className="check-button2 px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-lg transition"
                >
                    Vérifier la réponse✓
                </button>
            </div>

            {/* مثال توضيحي */}
            <div className="example mt-4 p-3 bg-gray-50 rounded-lg text-sm">
                <p className="font-bold">Exemple:</p>
                <p>Comme tous les matins, Sylvie <span className="text-blue-600">se réveille</span> → <span className="text-green-600">s'est réveillée</span></p>
                <p>Le verbe pronominal <strong>se réveiller</strong> devient <strong>s'est réveillée</strong> au passé composé (accord avec Sylvie = féminin).</p>
            </div>
            <div className="spaces"></div>
        </div>
    );
};

export default Page5_Q1_CleanAudio;