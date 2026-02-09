import React, { useState, useRef } from "react";
import ValidationAlert from "../../Popup/ValidationAlert";
import page5_CD2 from "../../../assets/U2Audio/U2SdQ4.mp3";
import { FaPlay, FaPause } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { TbMessageCircle } from "react-icons/tb";

const Page5_Q1_CleanAudio = () => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [current, setCurrent] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [showSettings, setShowSettings] = useState(false);
  const [showCaption, setShowCaption] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const captions = [
    { start: 5.1, end: 7.9, text: "Grand Prix A1, Unité 2," },
    { start: 7.9, end: 9.2, text: "À l'école," },
    { start: 9.2, end: 10.6, text: "Section D," },
    { start: 10.6, end: 12.0, text: "Un rendez-vous," },
    { start: 12.0, end: 13.6, text: "Exercice 4," },
    { start: 13.9, end: 15.5, text: "Écoute la conversation" },
    { start: 15.5, end: 17.7, text: "entre Maya et Doreen," },
    { start: 17.7, end: 19.4, text: "puis écris l'information" },
    { start: 19.4, end: 20.2, text: "manquante." }
  ];

  const updateCaption = (time) => {
    const index = captions.findIndex(
      (cap) => time >= cap.start && time <= cap.end
    );
    setActiveIndex(index !== -1 ? index : null);
  };

  const resetAudio = () => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      audioRef.current.pause();
      setIsPlaying(false);
      setCurrent(0);
    }
  };

  /* ================= STATE ================= */
  const [inputs, setInputs] = useState({
    row1_col2: "",
    row1_col3: "",
    row1_col4: "",
    row1_col5: "",

    row2_col1: "",
    row2_col2: "",
    row2_col3: "",
    row2_col4: "",
    row2_col5: "",

    row3_col1: "",
    row3_col2a: "",
    row3_col2b: "",
    row3_col3: "",
    row3_col4: "",
    row3_col5: ""
  });

  /* ================= CORRECT ANSWERS ================= */
  const correctAnswers = {
    /* ===== ROW 1 ===== */
    row1_col2: "au magasin d’électronique",
    row1_col3: "drone",
    row1_col4: "400",
    row1_col5: "une carte 3D du parc",

    /* ===== ROW 2 ===== */
    row2_col1: "Rien de nouveau",
    row2_col2: "acheté",

    /* ===== ROW 3 ===== */

    row3_col2b: "j’ai pris quelques photos",

  };



  /* ================= TABLE DATA (مطابق للصورة) ================= */
  const tableData = [
    {
      col1: <span>Rien</span>,
      col2: (
        <div>
          <span>Je suis allé </span>
          <input
            style={{ borderBottom: "solid black 2px", color: "red" }}
            className="table-input"
            value={inputs.row1_col2}
            onChange={(e) =>
              setInputs({ ...inputs, row1_col2: e.target.value })
            }
          />
        </div>
      ),
      col3: (
        <div>
          <span>Un </span>
          <input
            style={{ borderBottom: "solid black 2px", color: "red" }}

            className="table-input"
            value={inputs.row1_col3}
            onChange={(e) =>
              setInputs({ ...inputs, row1_col3: e.target.value })
            }
          />
        </div>
      ),
      col4: (
        <div>
          <span>Avec la promotion,</span>
          <br />
          <input
            style={{ borderBottom: "solid black 2px", color: "red" }}

            className="table-input"
            value={inputs.row1_col4}
            onChange={(e) =>
              setInputs({ ...inputs, row1_col4: e.target.value })
            }
          />
        </div>
      ),
      col5: (
        <div>
          <span>Je veux faire</span>
          <br />
          <input
            style={{ borderBottom: "solid black 2px", color: "red" }}

            className="table-input"
            value={inputs.row1_col5}
            onChange={(e) =>
              setInputs({ ...inputs, row1_col5: e.target.value })
            }
          />
        </div>
      )
    },
    {
      col1: (
        <input
          style={{ borderBottom: "solid black 2px", color: "red" }}

          className="table-input"
          value={inputs.row2_col1}
          onChange={(e) =>
            setInputs({ ...inputs, row2_col1: e.target.value })
          }
        />
      ),
      col2: (
        <div>
          <span>et j'ai </span>
          <input
            style={{ borderBottom: "solid black 2px", color: "red" }}

            className="table-input"
            value={inputs.row2_col2}
            onChange={(e) =>
              setInputs({ ...inputs, row2_col2: e.target.value })
            }
          />
        </div>
      ),



    },
    {

      col2: (
        <div>
          <span>Je suis allé au parc </span>

          <br />
          <span>et </span>
          <input
            style={{ borderBottom: "solid black 2px", color: "red" }}

            className="table-input"
            value={inputs.row3_col2b}
            onChange={(e) =>
              setInputs({ ...inputs, row3_col2b: e.target.value })
            }
          />
        </div>
      ),


    }
  ];

  /* ================= CHECK ANSWER ================= */
  const checkAnswer = () => {
    let correctCount = 0;
    const total = Object.keys(correctAnswers).length;

    Object.keys(correctAnswers).forEach((key) => {
      if (
        inputs[key] &&
        inputs[key].trim().toLowerCase() ===
        correctAnswers[key].trim().toLowerCase()
      ) {
        correctCount++;
      }
    });

    const isCorrect = correctCount === total;

    if (isCorrect) {
      ValidationAlert.success(
        `Excellent! (${correctCount}/${total})`,
        "Toutes les réponses sont correctes."
      );
    } else {
      ValidationAlert.error(
        `Résultat : ${correctCount}/${total}`,
        "Écoute encore et réessaie."
      );
    }
  };


  const showAnswerFunc = () => {
    setInputs({ ...inputs, ...correctAnswers });
  };

  const resetExercise = () => {
    setInputs({
      row1_col2: "",
      row1_col3: "",
      row1_col4: "",
      row1_col5: "",
      row2_col1: "",
      row2_col2: "",
      row2_col3: "",
      row2_col4: "",
      row2_col5: "",
      row3_col1: "",
      row3_col2a: "",
      row3_col2b: "",
      row3_col3: "",
      row3_col4: "",
      row3_col5: ""
    });
    resetAudio();
  };

  return (
    <div className="page-wrapper2 flex flex-col items-center justify-start gap-8 p-4">
      <header
        className="header-title-page1 w-full text-left mb-4"
        style={{ marginLeft: "42%", color: "black", marginTop: "5%", fontSize: "25px", fontWeight: "bold" }}
      >
        <span style={{ backgroundColor: "#7cd0f5", color: "#white" }} className="ex-A">A</span>
        <span style={{ color: "black" }} className="number-of-q">4</span>
        Écoute le reste de la conversation et écris la bonne réponse.            </header>
      <div className="nationality-table-container" style={{ width: "80%" }}>
        <table className="nationality-table">
          <thead>
            <tr className="nationality-table-header">
              <th>Samedi</th>
              <th>Dimanche</th>
              <th>Achat</th>
              <th>Combien ?</th>
              <th>Pourquoi ?</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row, rowIndex) => (
              <tr key={rowIndex}>
                {["col1", "col2", "col3", "col4", "col5"].map((col) => (
                  <td key={col} className="nationality-table-cell">
                    {row[col]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="action-buttons-container">
        <button onClick={resetExercise} className="try-again-button">
          Recommencer ↻
        </button>
        <button onClick={showAnswerFunc} className="show-answer-btn">
          Afficher la réponse
        </button>
        <button onClick={checkAnswer} className="check-button2">
          Vérifier la réponse ✓
        </button>
      </div>
    </div>
  );
};

export default Page5_Q1_CleanAudio;
