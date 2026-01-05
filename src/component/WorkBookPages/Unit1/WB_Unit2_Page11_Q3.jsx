import React, { useState } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import "./WB_Unit2_Page11_Q3.css";
import ScoreCardEnhanced from "../../Popup/ScoreCard";

const Page5_Q2_SAppeler = () => {
  // ===== STATE =====
  const [selectedQuestions, setSelectedQuestions] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
  });

  const [answers, setAnswers] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
  });

  const [score, setScore] = useState(null);

  // حالة اللون لكل اختيار ولكل input
  const [choiceStatus, setChoiceStatus] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
  });
  const [answerStatus, setAnswerStatus] = useState({
    a: "",
    b: "",
    c: "",
    d: "",
    e: "",
    f: "",
  });

  // ===== DATA =====
  const questionData = {
    a: {
      question: "Luc a un crayon ?",
      choices: ["Qu’est-ce que", "Est-ce que"],
      correctChoice: "Est-ce que",
      correctAnswer: "Non, il n'a pas de crayon",
    },
    b: {
      question: "Amélie est à l'école ?",
      choices: ["Qu’est-ce que", "Est-ce que"],
      correctChoice: "Est-ce que",
      correctAnswer: "Oui, elle est à l’école",
    },
    c: {
      question: "tu fais après l'école ?",
      choices: ["Qu’est-ce que", "Est-ce que"],
      correctChoice: "Qu’est-ce que",
      correctAnswer: "Je fais mes devoirs.(p.ex.)",
    },
    d: {
      question: "Jean a choisi comme club ?",
      choices: ["Qu’est-ce que", "Est-ce que"],
      correctChoice: "Qu’est-ce que",
      correctAnswer: "Il a choisi le club sportif (p.ex.).",
    },
    e: {
      question: "tu préfères comme matière ?",
      choices: ["Qu’est-ce que", "Est-ce que"],
      correctChoice: "Qu’est-ce que",
      correctAnswer: "Je préfère l’anglais (p.ex.).",
    },
    f: {
      question: "tu as dans ta trousse ?",
      choices: ["Qu’est-ce que", "Est-ce que"],
      correctChoice: "Qu’est-ce que",
      correctAnswer:
        "J’ai des stylos, un compas, un taille-crayon et des crayons de couleur. (p.ex.)",
    },
  };

  // ===== HANDLE =====
  const handleQuestionSelect = (key, value) => {
    setSelectedQuestions((prev) => ({ ...prev, [key]: value }));
    setChoiceStatus((prev) => ({ ...prev, [key]: "" }));
  };

  const handleAnswerChange = (key, value) => {
    setAnswers((prev) => ({ ...prev, [key]: value }));
    setAnswerStatus((prev) => ({ ...prev, [key]: "" }));
  };

  // ===== CHECK ANSWER =====
  const checkAnswer = () => {
    let correctCount = 0;
    let incomplete = false;
    const newChoiceStatus = {};
    const newAnswerStatus = {};

    Object.keys(questionData).forEach((key) => {
      const selected = selectedQuestions[key]?.trim();
      const answer = answers[key]?.trim();

      if (!selected || !answer) incomplete = true;

      // مقارنة منفصلة
      if (selected === questionData[key].correctChoice) {
        newChoiceStatus[key] = "correct";
      } else {
        newChoiceStatus[key] = "wrong";
      }

      if (answer === questionData[key].correctAnswer) {
        newAnswerStatus[key] = "correct";
      } else {
        newAnswerStatus[key] = "wrong";
      }

      if (
        newChoiceStatus[key] === "correct" &&
        newAnswerStatus[key] === "correct"
      ) {
        correctCount++;
      }
    });

    setChoiceStatus(newChoiceStatus);
    setAnswerStatus(newAnswerStatus);

    const total = Object.keys(questionData).length;

    if (incomplete) {
      ValidationAlert.info(
        "Incomplete",
        "Please select a question type and fill in all answers.",
        `${correctCount}/${total}`
      );
      setScore(null);
      return;
    }

    setScore({ correct: correctCount, total });

    if (correctCount === total) {
      ValidationAlert.success(
        "Excellent!",
        "All answers are correct!",
        `${correctCount}/${total}`
      );
    } else if (correctCount === 0) {
      ValidationAlert.error(
        "Try Again!",
        "All answers are incorrect.",
        `${correctCount}/${total}`
      );
    } else {
      ValidationAlert.warning(
        "Almost there!",
        `You got ${correctCount} out of ${total} correct.`,
        `${correctCount}/${total}`
      );
    }
  };

  // ===== SHOW ANSWER =====
  const showAnswerFunc = () => {
    const correctSelections = {};
    const correctAnswersText = {};
    const newChoiceStatus = {};
    const newAnswerStatus = {};

    Object.keys(questionData).forEach((key) => {
      correctSelections[key] = questionData[key].correctChoice;
      correctAnswersText[key] = questionData[key].correctAnswer;
      newChoiceStatus[key] = "correct";
      newAnswerStatus[key] = "correct";
    });

    setSelectedQuestions(correctSelections);
    setAnswers(correctAnswersText);
    setChoiceStatus(newChoiceStatus);
    setAnswerStatus(newAnswerStatus);

    const total = Object.keys(questionData).length;
    setScore({ correct: total, total });

    ValidationAlert.success(
      "Answers shown",
      "All correct answers have been filled in.",
      `${total}/${total}`
    );
  };

  // ===== RESET =====
  const resetExercise = () => {
    const emptySelections = {};
    const emptyAnswers = {};
    const emptyChoiceStatus = {};
    const emptyAnswerStatus = {};

    Object.keys(questionData).forEach((key) => {
      emptySelections[key] = "";
      emptyAnswers[key] = "";
      emptyChoiceStatus[key] = "";
      emptyAnswerStatus[key] = "";
    });

    setSelectedQuestions(emptySelections);
    setAnswers(emptyAnswers);
    setChoiceStatus(emptyChoiceStatus);
    setAnswerStatus(emptyAnswerStatus);
    setScore(null);
  };

  // ===== STYLE =====
  const getChoiceStyle = (key) => {
    if (choiceStatus[key] === "correct") return { color: "green" };
    if (choiceStatus[key] === "wrong") return { color: "red" };
    return {};
  };

  const getInputStyle = (key) => {
    if (answerStatus[key] === "correct") return { backgroundColor: "#d4f4dd" };
    if (answerStatus[key] === "wrong") return { backgroundColor: "#f8d7da" };
    return {};
  };

  return (
    <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
          <header
className="header-title-page1 w-full text-left mb-4"
  style={{ marginLeft: "42%", color:"black",marginTop:"5%",fontSize:"25px", fontWeight:"bold" }}
      >
        <span style={{backgroundColor:"#de4484"}} className="ex-A">2</span> <span style={{color:"black"}} className="number-of-q">3</span>

Entoure « Qu’est-ce que ? » ou « Est-ce que ? ». Puis réponds aux questions.
      </header>

      <div className="questions-container w-full max-w-4xl">
        {Object.keys(questionData).map((key) => (
          <div
            key={key}
            className="question-item mb-8 p-4 border border-gray-200 rounded-lg"
          >
            <div className="question-label mb-2">
              <span className="font-bold text-lg">{key}</span>
            </div>

            {/* Question choices */}
            <div className="question-type mb-4">
              <p className="mb-2 font-medium">{questionData[key].question}</p>
              <div className="choices flex gap-6">
                {questionData[key].choices.map((choice, idx) => (
                  <label
                    key={idx}
                    className="choice-label flex items-center gap-2 cursor-pointer"
                    style={
                      selectedQuestions[key] === choice ? getChoiceStyle(key) : {}
                    }
                  >
                    <input
                      type="radio"
                      name={`question-${key}`}
                      value={choice}
                      checked={selectedQuestions[key] === choice}
                      onChange={(e) => handleQuestionSelect(key, e.target.value)}
                      className="choice-radio"
                    />
                    <span className="choice-text">{choice} ?</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Input answer */}
            <div className="answer-field">
              <label className="answer-label mb-1 block">Réponse:</label>
              <input
                type="text"
                value={answers[key]}
                onChange={(e) => handleAnswerChange(key, e.target.value)}
                style={getInputStyle(key)}
                className="answer-input w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-300"
                placeholder="Tapez votre réponse ici..."
              />
            </div>
          </div>
        ))}
      </div>

      {score && <ScoreCardEnhanced score={score} />}

      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">
          Recommencer ↻
        </button>
        <button onClick={showAnswerFunc} className="show-answer-btn swal-continue">
          Afficher la réponse
        </button>
        <button onClick={checkAnswer} className="check-button2">
          Vérifier la réponse ✓
        </button>
      </div>
    </div>
  );
};

export default Page5_Q2_SAppeler;
