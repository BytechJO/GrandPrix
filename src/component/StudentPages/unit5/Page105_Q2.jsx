import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import ScoreCardEnhanced from "../../Popup/ScoreCard";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";
import CD6_Pg8_Instruction1_AdultLady from "../../../assets/U2Audio/U2Q4.mp3";

/* 🔴 الإجابات الصحيحة مع "un/une" */
const correctAnswers = {
  a: ["une entrée", "entrée", 6, "une"],       // Une entrée
  b: ["un serveur", "serveur", 7, "un"],       // Un serveur
  c: ["un pourboire", "pourboire", 9, "un"],   // Un pourboire
  d: ["un dessert", "dessert", 7, "un"],       // Un dessert
  e: ["un menu", "menu", 4, "un"],             // Un menu
  f: ["un plat principal", "plat principal", 14, "un"], // Un plat principal
  g: ["une addition", "addition", 9, "une"],   // Une addition
};

const Page5_Q1_CleanAudio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const [showCaption, setShowCaption] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [inputs, setInputs] = useState({});
  const [score, setScore] = useState(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.play();
      setIsPlaying(false);
    }
  };

  const captions = [
    { start: 5.2, end: 6.5, text: "Grand Prix A1" },
    { start: 6.5, end: 8.5, text: "Unité 2 À" },
    { start: 8.5, end: 10.3, text: "l'école Section" },
    { start: 10.3, end: 12.1, text: "A Se préparer" },
    { start: 12.1, end: 13.4, text: "Exercice" },
    { start: 13.4, end: 14.8, text: "4 Écoute" },
    { start: 14.8, end: 15.8, text: "et écris" },
    { start: 15.8, end: 16.5, text: "l'information" },
    { start: 16.5, end: 17.3, text: "manquante." },
    { start: 19.0, end: 20.8, text: "Salut ma chérie," },
    { start: 20.8, end: 22.6, text: "comment ça va ?" },
    { start: 22.6, end: 23.7, text: "Bonjour maman," },
    { start: 23.7, end: 24.4, text: "ça va bien." },
    { start: 25.4, end: 25.9, text: "Tu es prête" },
    { start: 25.9, end: 27.7, text: "pour l'école ?" },
    { start: 27.7, end: 28.6, text: "Oui, mais j'ai" },
    { start: 28.6, end: 29.1, text: "besoin de" },
    { start: 29.1, end: 29.4, text: "quelques" },
    { start: 29.4, end: 29.9, text: "fournitures" },
    { start: 29.9, end: 30.5, text: "scolaires." },
    { start: 31.6, end: 32.3, text: "Bon, allons" },
    { start: 32.3, end: 32.9, text: "au magasin." },
    { start: 35.0, end: 35.8, text: "Alors, de quoi" },
    { start: 35.8, end: 37.7, text: "as-tu besoin ?" },
    { start: 37.7, end: 38.4, text: "J'ai besoin" },
    { start: 38.4, end: 39.0, text: "de crayons" },
    { start: 39.0, end: 39.7, text: "de couleurs." },
    { start: 40.5, end: 42.0, text: "Et ?" },
    { start: 42.0, end: 42.8, text: "J'ai besoin" },
    { start: 42.8, end: 43.6, text: "d'un cahier." },
    { start: 44.2, end: 45.4, text: "As-tu besoin" },
    { start: 45.4, end: 47.1, text: "d'un stylo ?" },
    { start: 47.1, end: 48.3, text: "Non, j'ai déjà" },
    { start: 48.3, end: 49.5, text: "un stylo, mais" },
    { start: 49.5, end: 50.2, text: "j'ai besoin d'un" },
    { start: 50.2, end: 51.1, text: "compas et d'une" },
    { start: 51.1, end: 51.6, text: "trousse." },
    { start: 52.8, end: 54.5, text: "C'est tout ?" },
    { start: 54.5, end: 55.4, text: "Oui, c'est tout" },
    { start: 55.4, end: 55.9, text: "ce dont j'ai" },
    { start: 55.9, end: 56.5, text: "besoin pour" },
    { start: 56.5, end: 56.9, text: "le moment." },
  ];

  const updateCaption = (time) => {
    const index = captions.findIndex(
      (cap) => time >= cap.start && time <= cap.end,
    );
    setActiveIndex(index !== -1 ? index : null);
  };

  const handleInputChange = (key, section, index, value) => {
    setInputs(prev => {
      const currentSection = prev[key]?.[section] || 
        Array(section === 'article' ? (correctAnswers[key][3] === 'une' ? 3 : 2) : correctAnswers[key][2]).fill('');
      
      const newSection = [...currentSection];
      newSection[index] = value;
      
      return {
        ...prev,
        [key]: {
          ...prev[key],
          [section]: newSection
        }
      };
    });
  };

  const normalizeString = (str) => {
    return str
      .toLowerCase()
      .trim()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/\s+/g, ' ');
  };

  const checkAnswer = () => {
    let correctCount = 0;

    Object.keys(correctAnswers).forEach((key) => {
      const articleLetters = inputs[key]?.article || [];
      const wordLetters = inputs[key]?.word || [];
      
      const userArticle = articleLetters.join('');
      const userWord = wordLetters.join('');
      const fullUserAnswer = `${userArticle} ${userWord}`.trim();
      
      const [fullCorrectAnswer] = correctAnswers[key];
      
      if (normalizeString(fullUserAnswer) === normalizeString(fullCorrectAnswer)) {
        correctCount++;
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
    const newInputs = {};
    Object.keys(correctAnswers).forEach(key => {
      const [fullCorrectAnswer, wordOnly, , articleType] = correctAnswers[key];
      
      newInputs[key] = {
        article: articleType.split(''),
        word: wordOnly.split('').map(char => char === ' ' ? '' : char)
      };
    });
    setInputs(newInputs);
  };

  const resetExercise = () => {
    setInputs({});
    setScore(null);
  };

  const renderInputBoxes = (key) => {
    const [fullCorrectAnswer, wordOnly, wordLength, articleType] = correctAnswers[key];
    const articleLetters = inputs[key]?.article || Array(articleType.length).fill('');
    const wordLetters = inputs[key]?.word || Array(wordLength).fill('');

    return (
      <div key={key} className="word-input-container mb-6">
        <p className="question-text mb-3 font-semibold text-gray-700">
          {key === 'a' && "a Un plat qui est servi en premier."}
          {key === 'b' && "b Une personne qui sert les clients dans un café ou dans un restaurant."}
          {key === 'c' && "c Une gratification qu'un client laisse en supplément de l'addition."}
          {key === 'd' && "d Un plat qui est servi en dernier."}
          {key === 'e' && "e Une liste des plats proposés par un restaurant."}
          {key === 'f' && "f Un plat qui est servi au milieu du repas."}
          {key === 'g' && "g Une note indiquant le montant à payer au restaurant ou au café."}
        </p>
        
        <div className="input-boxes-container flex items-center gap-1 mb-2">
          {/* Article (un/une) */}
          <div className="flex gap-1">
            {articleLetters.map((letter, index) => (
              <input
                key={`${key}-article-${index}`}
                type="text"
                maxLength="1"
                value={letter}
                onChange={(e) => handleInputChange(key, 'article', index, e.target.value)}
                className="w-8 h-8 text-center border-2 border-blue-400 rounded-md focus:border-blue-600 focus:outline-none text-sm font-semibold bg-blue-50"
                style={{ 
                  textTransform: 'uppercase',
                  boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                }}
              />
            ))}
          </div>
          
          {/* مسافة (سهم أو مسافة مرئية) */}
          <div className="mx-2 text-gray-400">→</div>
          
          {/* الكلمة الرئيسية */}
          <div className="flex gap-1 flex-wrap">
            {wordLetters.map((letter, index) => {
              // معالجة المسافات في الكلمات مثل "plat principal"
              const wordArray = wordOnly.split('');
              const isSpace = wordArray[index] === ' ';
              
              if (isSpace) {
                return (
                  <div 
                    key={`${key}-word-space-${index}`}
                    className="w-4 h-8 flex items-center justify-center"
                  >
                    <div className="w-px h-6 bg-gray-300"></div>
                  </div>
                );
              }
              
              return (
                <input
                  key={`${key}-word-${index}`}
                  type="text"
                  maxLength="1"
                  value={letter}
                  onChange={(e) => handleInputChange(key, 'word', index, e.target.value)}
                  className="w-8 h-8 text-center border-2 border-gray-300 rounded-md focus:border-blue-500 focus:outline-none text-sm font-semibold"
                  style={{ 
                    textTransform: 'uppercase',
                    boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
                  }}
                  onKeyUp={(e) => {
                    const totalArticleBoxes = articleType.length;
                    const totalWordBoxes = wordLength;
                    const currentTotalIndex = index + totalArticleBoxes + 1; // +1 للرمز →
                    
                    if (e.key === 'Enter') checkAnswer();
                    if (e.key === 'Backspace' && !letter) {
                      if (index > 0) {
                        document.querySelector(`input[name="${key}-word-${index-1}"]`)?.focus();
                      } else {
                        document.querySelector(`input[name="${key}-article-${totalArticleBoxes-1}"]`)?.focus();
                      }
                    }
                    if (letter && e.key !== 'Backspace') {
                      if (index < totalWordBoxes - 1) {
                        const nextIndex = index + 1;
                        const nextElement = document.querySelector(`input[name="${key}-word-${nextIndex}"]`);
                        if (nextElement) {
                          nextElement.focus();
                        } else {
                          // تخطي المسافات
                          let nextAvailable = nextIndex;
                          while (nextAvailable < totalWordBoxes && wordOnly.split('')[nextAvailable] === ' ') {
                            nextAvailable++;
                          }
                          if (nextAvailable < totalWordBoxes) {
                            document.querySelector(`input[name="${key}-word-${nextAvailable}"]`)?.focus();
                          }
                        }
                      }
                    }
                  }}
                  name={`${key}-word-${index}`}
                />
              );
            })}
          </div>
        </div>
        
        {score && (
          <div className="answer-feedback mt-2">
            {(() => {
              const articleLetters = inputs[key]?.article || [];
              const wordLetters = inputs[key]?.word || [];
              
              const userArticle = articleLetters.join('');
              const userWord = wordLetters.join('');
              const fullUserAnswer = `${userArticle} ${userWord}`.trim();
              const [fullCorrectAnswer] = correctAnswers[key];
              
              if (normalizeString(fullUserAnswer) === normalizeString(fullCorrectAnswer)) {
                return <span className="text-green-600 text-sm">✓ Correct: {fullCorrectAnswer}</span>;
              } else if (userArticle.trim() !== '' || userWord.trim() !== '') {
                return <span className="text-red-600 text-sm">✗ Réponse correcte: {fullCorrectAnswer}</span>;
              }
              return null;
            })()}
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="page-wrapper1 flex flex-col items-center justify-start gap-8 p-4">
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
        <span className="ex-A" style={{ backgroundColor: "#f38180" }}>D</span>
        <span className="number-of-q">2</span>{" "}
Devine et écris les mots.    </header>


      {score && <ScoreCardEnhanced score={score} />}

      {/* تمرين الكلمات المتقاطعة */}
      <div className="crossword-exercise w-full max-w-4xl p-6 bg-white rounded-lg shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="left-column">
            {renderInputBoxes('a')}
            {renderInputBoxes('b')}
            {renderInputBoxes('c')}
            {renderInputBoxes('d')}
          </div>
          <div className="right-column">
            {renderInputBoxes('e')}
            {renderInputBoxes('f')}
            {renderInputBoxes('g')}
          </div>
        </div>
      </div>
      <div className="spaces"></div>

      {/* Buttons */}
      <div className="action-buttons-container flex gap-4">
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
    </div>
  );
};

export default Page5_Q1_CleanAudio;