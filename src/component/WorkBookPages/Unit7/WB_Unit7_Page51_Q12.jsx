import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

// النص الجديد (Adèle) مقسم إلى أجزاء مع تحديد الأفعال التي يجب تحويلها
const textSegments = [
    { before: "Adèle ", verb: "est", after: " née en 1967, à Marseille.", answer: "est" },
    { before: "Toute sa vie, elle ", verb: "adore", after: " la montagne.", answer: "a adoré" },
    { before: "En juillet 2015, elle ", verb: "va", after: " dans les Alpes pour faire de l’escalade.", answer: "est allée" },
    { before: "Elle ", verb: "commence", after: " son ascension le 15 juillet.", answer: "a commencé" },
    { before: "Elle ", verb: "part", after: " avec 3 personnes.", answer: "est partie" },
    { before: "Le 20 juillet, Adèle ", verb: "tombe", after: " quand elle ", verb2: "arrive", after2: " à 4000 mètres.", answer: "est tombée", answer2: "est arrivée" },
    { before: "Heureusement, elle ne ", verb: "meurt", after: " pas, mais elle se blesse.", answer: "est morte" },
    { before: "Elle ne peut pas continuer à escalader et elle ", verb: "rentre", after: " en France.", answer: "est rentrée" }
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
                <span style={{ backgroundColor: "#7cd0f5", color: "#white" }} className="ex-A">8</span>
                <span style={{ color: "black" }} className="number-of-q">12</span>
             Écris le texte au passé composé.
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
                <p>Adèle <span className="text-blue-600">est née</span> → <span className="text-green-600">est née</span></p>
                <p>Le verbe <strong>naître</strong> devient <strong>est née</strong> au passé composé (accord avec Adèle = féminin).</p>
            </div>
            <div className="spaces"></div>
        </div>
    );
};

export default Page5_Q1_CleanAudio;