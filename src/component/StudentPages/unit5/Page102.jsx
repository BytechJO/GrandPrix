import React from "react";
import page_1 from "../../../assets/unite5pages/102.png"
import page5_CD2 from "../../../assets/U5Audio/u5sce5.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start:5.3 , end: 6.8, text: "Grand Prix A1" },
  { start:6.8 , end: 10.2, text: "Unité 5, Les repas" },
  { start:10.2 , end: 12.0, text: "Section C," },
  { start:12.0 , end: 14.0, text: "Les repas en famille" },
  { start:14.0 , end: 16.1, text: "Exercice 5," },
  { start:16.1 , end: 18.6, text: "Écoute et écris l'information" },
  { start:18.7 , end: 19.3, text: "manquante." },
  { start:21.5 , end: 24.1, text: "Bonsoir Antoine, Comment ça va ?" },
  { start:24.1 , end: 25.9, text: "Bonjour monsieur Jacques," },
  { start:25.9 , end: 27.8, text: "Ça va bien et vous ?" },
  { start:27.8 , end: 29.8, text: "Très bien, merci." },
  { start:29.8 , end: 31.0, text: "Allons à table." },
  { start:31.0 , end: 32.4, text: "Salut Antoine," },
  { start:32.4 , end: 33.5, text: "assieds-toi là à côté" },
  { start:33.5 , end: 34.7, text: "de Camille." },
  { start:34.7 , end: 36.7, text: "Oui, madame." },
  { start:36.7 , end: 38.2, text: "Qu'est-ce que tu prends comme" },
  { start:38.2 , end: 40.2, text: "boisson Il y a du jus d'orange" },
  { start:40.2 , end: 41.9, text: "et de l'eau minérale." },
  { start:41.9 , end: 43.5, text: "De l'eau minérale," },
  { start:43.5 , end: 44.8, text: "s'il vous plaît." },
  { start:44.8 , end: 46.3, text: "Pour commencer," },
  { start:46.3 , end: 48.6, text: "il y a de la soupe à la tomate." },
  { start:48.6 , end: 52.2, text: "Bon appétit tout le monde." },
  { start:52.2 , end: 54.6, text: "Hmmm, c'est délicieux." },
  { start:54.6 , end: 56.1, text: "Rose" },
  { start:56.1 , end: 57.2, text: "qu'est-ce que nous avons" },
  { start:57.2 , end: 59.0, text: "comme plat principal ?" },
  { start:59.0 , end: 60.8, text: "Il y a du poisson ou de la" },
  { start:60.8 , end: 62.2, text: "viande et comme légume," },
  { start:62.2 , end: 64.6, text: "il y a des pommes de terre." },
  { start:64.6 , end: 66.9, text: "Bon donne-moi de la viande." },
  { start:66.9 , end: 67.8, text: "Qu'est-ce que tu préfères" },
  { start:67.8 , end: 69.6, text: "Antoine ?" },
  { start:69.6 , end: 71.5, text: "Je préfère le poisson." },
  { start:71.5 , end: 73.6, text: "Tu en veux encore ?" },
  { start:73.6 , end: 76.7, text: "Non merci, j'ai assez mangé." },
  { start:76.7 , end:78.4, text: "Comme dessert," },
  { start:78.4 , end: 79.4, text: "il y a des fruits." },
  { start:79.4 , end: 81.2, text: "Qu'est-ce que tu veux ?" },
  { start:81.2 , end: 83.14, text: "Je voudrais des fraises" },
  { start:83.15 , end: 84.2, text: "s'il te plaît." },
];

const Page5 = ({ openPopup }) => {

  return (
    <div className="page_5-background" style={{ position: "relative" }}>
      {/* الخلفية */}
      <img src={page_1} alt="Page 5" style={{ display: "block", width: "100%" }} />

      {/* زر الصوت الأول */}
           <div
        id="CD-1-page5"
        className="headset-icon-CD-page5 hover:scale-110 transition"
        style={{
          position: "absolute",
          top: "6%", // عدّل حسب مكان الزر
          left: "2%", // عدّل حسب مكان الزر
          cursor: "pointer",
          width: "50px", height: "50px",
         
       
        }}
        onClick={() =>
          openPopup(
            "audio",
            <AudioWithCaption src={page5_CD2}  captions={captionsExample} />
          )
        }
      >
      </div>
        <div
            className="Click -icon-CD-page5 hover:scale-110 transition"
              style={{ overflow: "visible" , position:"absolute",top:"6.9%",left:"50.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 137 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"47.0%",left:"35.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 138 })}
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
