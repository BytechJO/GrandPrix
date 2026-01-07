import React from "react";
import page_1 from "../../../assets/unite2pages/27.png";

import page5_CD2 from "../../../assets/U2Audio/U2Q2.mp3";
import AudioWithCaption from "../../AudioWithCaption";
import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const Page1 = ({ openPopup }) => {

const captionsExample = [
  { start:5.2 , end: 7.0, text: "Grand prix A1," },
  { start:7.0 , end: 8.3, text: "unité 2," },
  { start:8.3 , end: 8.9, text: "à l'école." },
  { start:9.9 , end: 11.2, text: "Section A," },
  { start:11.2 , end: 12.0, text: "se préparer." },
  { start:13.2 , end: 14.1, text: "Exercice 2." },
  { start:15.1 , end: 15.8, text: "Marie se" },
  { start:15.8 , end: 16.7, text: "prépare à aller" },
  { start:16.7 , end: 17.2, text: "à l'école." },
  { start:17.9 , end: 18.7, text: "Écoute et" },
  { start:18.7 , end: 19.9, text: "retrouve chaque" },
  { start:19.7 , end: 20.3, text: "objet dans" },
  { start:20.3 , end: 21.6, text: "l'illustration," },
  { start:21.6 , end: 22.9, text: "puis écris la" },
  { start:22.9 , end: 23.6, text: "bonne réponse." },
  { start:25.2 , end: 25.9, text: "1." },
  { start:25.9 , end: 26.6, text: "Un stylo." },
  { start:27.5 , end: 29.1, text: "2." },
  { start:29.1 , end: 29.8, text: "Un crayon." },
  { start:31.7 , end: 32.4, text: "3." },
  { start:32.4 , end: 32.9, text: "Une paire" },
  { start:32.9 , end: 33.6, text: "de ciseaux." },
  { start:35.6 , end: 36.1, text: "4." },
  { start:36.1 , end: 36.9, text: "Une trousse." },
  { start:37.9 , end: 39.7, text: "5." },
  { start:39.7 , end: 40.5, text: "Une règle." },
  { start:42.6 , end: 43.3, text: "6." },
  { start:43.3 , end: 44.1, text: "Un livre." },
  { start:46.0 , end: 46.9, text: "7." },
  { start:46.9 , end: 47.7, text: "Une gomme." },
  { start:49.5 , end: 50.4, text: "8." },
  { start:50.4 , end: 51.2, text: "Un cahier." },
  { start:53.1 , end: 54.0, text: "9." },
  { start:54.0 , end: 54.5, text: "Des crayons" },
  { start:54.5 , end: 55.1, text: "de couleur." },
  { start:56.7 , end: 58.0, text: "10." },
  { start:58.0 , end: 58.8, text: "Un sac à dos." },
  { start:60.8 , end: 61.6, text: "11." },
  { start:61.6 , end: 62.5, text: "Un taille-crayon." },
  { start:64.6 , end: 65.5, text: "Douze, des" },
  { start:65.5 , end: 66.3, text: "surligneurs." },
  { start:68.1 , end: 69.1, text: "Treize," },
  { start:69.1 , end: 69.7, text: "un compas." },

  
];

  return (
    <div className="page_1-background">
      <img
        src={page_1}

        // className="w-full h-full object-contain rounded-2xl shadow-lg"
      />
      <div
        id="CD-1-page5"
        className="headset-icon-CD-page5 hover:scale-110 transition"
        style={{
          position: "absolute",
          top: "65%", // عدّل حسب مكان الزر
          left: "2%", // عدّل حسب مكان الزر
          cursor: "pointer",
          width: "50px",
          height: "50px",
         
        }}
        onClick={() => openPopup("audio", <AudioWithCaption src={page5_CD2} captions={captionsExample} />)}
      ></div>

      <div
        className="Click -icon-CD-page5 hover:scale-110 transition"
        style={{
          overflow: "visible",
          position: "absolute",
          top: "15.4%",
          left: "50%",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 90 90"
          onClick={() => openPopup("exercise", { startIndex: 26 })}
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
          top: "73.4%",
          left: "35%",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 90 90"
          onClick={() => openPopup("exercise", { startIndex: 27 })}
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

export default Page1;
