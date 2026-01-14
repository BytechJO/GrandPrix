import React from "react";
import page_1 from "../../../assets/unite3pages/62.png";
import page5_CD2 from "../../../assets/U3Audio/U3SdQ4.mp3";
import page5_CD3 from "../../../assets/U3Audio/U3SDQ5.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample2 = [
  { start: 5.47, end: 6.6, text: "GrandPrixA1" },
  { start: 7.7, end: 8.2, text: "unité 3," },
  { start: 8.45, end: 9.53, text: "sous le même toit," },
  { start: 10.17, end: 11.0, text: "section D," },
  { start: 11.5, end: 12.9, text: "OU." },
  { start: 13.2, end: 14.5, text: "Exercice 5." },
  { start: 14.8, end: 15.4, text: "Écoute," },
  { start: 15.8, end: 17.8, text: "trouve et entoure les objets." },
  { start: 19.97, end: 22.3, text: "La règle est derrière l'ordinateur portable." },
  { start: 23.3, end: 25.2, text: "Le stylo est sous le carnet." },
  { start: 26.4, end: 28.9, text: "La gomme est entre le carnet et la tasse de café." },
  { start: 29.9, end: 32.7, text: "La paire de ciseaux est devant l'ordinateur portable." },
  { start: 33.7, end: 35.6, text: "Les punaises sont sur les feuilles." },
  { start: 36.6, end: 38.3, text: "Le crayon est dans la tasse." },
]
const captionsExample = [
  { start: 5.47, end: 6.6, text: "GrandPrixA1" },
  { start: 7.7, end: 8.2, text: "unité 3," },
  { start: 8.45, end: 9.53, text: "sous le même toit," },
  { start: 10.17, end: 11.0, text: "section D," },
  { start: 11.5, end: 13.5, text: "où ?" },
  { start: 13.5, end: 14.5, text: "Exercice 4." },
  { start: 15.0, end: 17.9, text: "Écoute et écris l'information manquante." },
  {
    start: 20.3,
    end: 23.9,
    text: "Ray est en retard à son cours de football et il ne trouve pas ses affaires.",
  },
  { start: 26.13, end: 26.49, text: "Maman," },
  { start: 26.49, end: 28.49, text: "je suis en retard et je ne trouve rien." },
  { start: 28.8, end: 30.2, text: "Est-ce que tu as rangé ma chambre ?" },
  { start: 31.5, end: 31.7, text: "Oui," },
  { start: 31.7, end: 33.5, text: "parce que ta chambre était en désordre." },
  { start: 34.9, end: 36.3, text: "Je ne trouve pas mes chaussures." },
  { start: 37.4, end: 38.6, text: "Elles sont sous ton lit." },
  { start: 39.7, end: 41.8, text: "Et mes chaussettes ?" },
  { start: 41.8, end: 43.0, text: "Elles sont dans ton tiroir." },
  { start: 44.3, end: 44.5, text: "Bon" },
  { start: 44.8, end: 46.0, text: "je ne trouve pas mon maillot." },
  { start: 47.13, end: 48.4, text: "Il est dans ton armoire." },
  { start: 48.4, end: 49.9, text: "Merci," },
  { start: 49.9, end: 50.8, text: "à plus tard !" },
];

const Page5 = ({ openPopup }) => {
  return (
    <div className="page_5-background" style={{ position: "relative" }}>
      {/* الخلفية */}
      <img
        src={page_1}
        alt="Page 5"
        style={{ display: "block", width: "100%" }}
      />

      {/* زر الصوت الأول */}
      <div
        id="CD-1-page5"
        className="headset-icon-CD-page5 hover:scale-110 transition"
        style={{
          position: "absolute",
          top: "4%", // عدّل حسب مكان الزر
          left: "2%", // عدّل حسب مكان الزر
          cursor: "pointer",
          width: "50px",
          height: "50px",
        }}
        onClick={() =>
          openPopup(
            "audio",
            <AudioWithCaption src={page5_CD2} captions={captionsExample} />
          )
        }
      ></div>
      <div
        id="CD-1-page5"
        className="headset-icon-CD-page5 hover:scale-110 transition"
        style={{
          position: "absolute",
          top: "35%", // عدّل حسب مكان الزر
          left: "2%", // عدّل حسب مكان الزر
          cursor: "pointer",
          width: "50px",
          height: "50px",
        }}
        onClick={() =>
          openPopup(
            "audio",
            <AudioWithCaption src={page5_CD3} captions={captionsExample2} />
          )
        }
      ></div>

      <div
        className="Click -icon-CD-page5 hover:scale-110 transition"
        style={{
          overflow: "visible",
          position: "absolute",
          top: "6.6%",
          left: "50.9%",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 90 90"
          onClick={() => openPopup("exercise", { startIndex: 71 })}
          // className="click-icon-page8-1 hover:scale-110 transition"
          style={{ overflow: "visible" }}
        >
          <image
            href={arrowBtn}
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
          />
        </svg>
      </div>

      <div
        className="Click -icon-CD-page5 hover:scale-110 transition"
        style={{
          overflow: "visible",
          position: "absolute",
          top: "36.6%",
          left: "45.9%",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 90 90"
          onClick={() => openPopup("exercise", { startIndex: 72 })}
          // className="click-icon-page8-1 hover:scale-110 transition"
          style={{ overflow: "visible" }}
        >
          <image
            href={arrowBtn}
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
          />
        </svg>
      </div>
      <div
        className="Click -icon-CD-page5 hover:scale-110 transition"
        style={{
          overflow: "visible",
          position: "absolute",
          top: "73.6%",
          left: "41.9%",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 90 90"
          onClick={() => openPopup("exercise", { startIndex: 73 })}
          // className="click-icon-page8-1 hover:scale-110 transition"
          style={{ overflow: "visible" }}
        >
          <image
            href={arrowBtn}
            x="0"
            y="0"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid meet"
          />
        </svg>
      </div>
    </div>
  );
};

export default Page5;
