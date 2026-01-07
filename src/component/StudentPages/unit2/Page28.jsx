import React from "react";
import page_1 from "../../../assets/unite2pages/28.png";

import page5_CD2 from "../../../assets/U2Audio/U2Q4.mp3";
import AudioWithCaption from "../../AudioWithCaption";
import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const Page1 = ({ openPopup }) => {

const captionsExample = [
  { start:5.2 , end: 6.5, text: "Grand Prix A1" },
  { start:6.5 , end: 8.5, text: "Unité 2 À" },
  { start:8.5 , end: 10.3, text: "l'école Section" },
  { start:10.3 , end: 12.1, text: "A Se préparer" },
  { start:12.1 , end: 13.4, text: "Exercice" },
  { start:13.4 , end: 14.8, text: "4 Écoute" },
  { start:14.8 , end: 15.8, text: "et écris" },
  { start:15.8 , end: 16.5, text: "l'information" },
  { start:16.5 , end: 17.3, text: "manquante." },
  { start:19.0 , end: 20.8, text: "Salut ma chérie," },
  { start:20.8 , end: 22.6, text: "comment ça va ?" },
  { start:22.6 , end: 23.7, text: "Bonjour maman," },
  { start:23.7 , end: 24.4, text: "ça va bien." },
  { start:25.4 , end: 25.9, text: "Tu es prête" },
  { start:25.9 , end: 27.7, text: "pour l'école ?" },
  { start:27.7 , end: 28.6, text: "Oui, mais j'ai" },
  { start:28.6 , end: 29.1, text: "besoin de" },
  { start:29.1 , end: 29.4, text: "quelques" },
  { start:29.4 , end: 29.9, text: "fournitures" },
  { start:29.9 , end: 30.5, text: "scolaires." },
  { start:31.6 , end: 32.3, text: "Bon, allons" },
  { start:32.3 , end: 32.9, text: "au magasin." },
  { start:35.0 , end: 35.8, text: "Alors, de quoi" },
  { start:35.8 , end: 37.7, text: "as-tu besoin ?" },
  { start:37.7 , end: 38.4, text: "J'ai besoin" },
  { start:38.4 , end: 39.0, text: "de crayons" },
  { start:39.0 , end: 39.7, text: "de couleurs." },
  { start:40.5 , end: 42.0, text: "Et ?" },
  { start:42.0 , end: 42.8, text: "J'ai besoin" },
  { start:42.8 , end: 43.6, text: "d'un cahier." },
  { start:44.2 , end: 45.4, text: "As-tu besoin" },
  { start:45.4 , end: 47.1, text: "d'un stylo ?" },
  { start:47.1 , end: 48.3, text: "Non, j'ai déjà" },
  { start:48.3 , end: 49.5, text: "un stylo, mais" },
  { start:49.5 , end: 50.2, text: "j'ai besoin d'un" },
  { start:50.2 , end: 51.1, text: "compas et d'une" },
  { start:51.1 , end: 51.6, text: "trousse." },
  { start:52.8 , end: 54.5, text: "C'est tout ?" },
  { start:54.5 , end: 55.4, text: "Oui, c'est tout" },
  { start:55.4 , end: 55.9, text: "ce dont j'ai" },
  { start:55.9 , end: 56.5, text: "besoin pour" },
  { start:56.5 , end: 56.9, text: "le moment." },
 
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
          top: "5%", // عدّل حسب مكان الزر
          left: "2%", // عدّل حسب مكان الزر
          cursor: "pointer",
          width: "50px",
          height: "50px",
       
        }}
        onClick={() => openPopup("audio", <AudioWithCaption src={page5_CD2} captions={captionsExample}/>)}
      ></div>

      <div
        className="Click -icon-CD-page5 hover:scale-110 transition"
        style={{
          overflow: "visible",
          position: "absolute",
          top: "6.9%",
          left: "51%",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 90 90"
          onClick={() => openPopup("exercise", { startIndex: 28 })}
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
