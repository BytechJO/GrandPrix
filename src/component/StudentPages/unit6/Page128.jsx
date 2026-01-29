import React from "react";
import page_1 from "../../../assets/unite6pages/128.png"
import page5_CD2 from "../../../assets/U6Audio/u6sbq4.mp3";
import page5_CD22 from "../../../assets/U6Audio/u6sdq5.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 5.47, end: 6.43, text: "Rempris A1," },
  { start: 6.78, end: 7.73, text: "unité 6," },
  { start: 8.01, end: 8.47, text: "le temps." },
  { start: 9.44, end: 10.11, text: "Section D," },
  { start: 10.49, end: 10.87, text: "la mode." },
  { start: 11.68, end: 12.57, text: "Exercice 4." },
  { start: 13.37, end: 17.07, text: "Écoute la conversation et écris l'information manquante." },

  { start: 19.58, end: 21.34, text: "Bonjour madame, puis-je vous aider ?" },
  { start: 22.47, end: 24.25, text: "Oui, avez-vous cette jupe en bleu ?" },
  { start: 25.33, end: 25.81, text: "Bien sûr." },
  { start: 26.99, end: 27.87, text: "Je peux l'essayer ?" },
  { start: 28.95, end: 29.41, text: "Bien sûr," },
  { start: 29.59, end: 31.77, text: "vous avez une cabine d'essayage derrière vous." },
  { start: 31.77, end: 33.25, text: "Merci." }
];
const captionsExample2 = [
  { start: 5.47, end: 6.47, text: "Rempris A1," },
  { start: 6.78, end: 7.65, text: "unité 6," },
  { start: 8.01, end: 8.47, text: "le temps." },
  { start: 9.44, end: 10.09, text: "Section D," },
  { start: 10.53, end: 10.91, text: "la mode." },
  { start: 11.61, end: 12.59, text: "Exercice 5." },
  { start: 13.47, end: 17.23, text: "Écoute le reste de la conversation et complète le tableau." },

  { start: 19.42, end: 21.27, text: "Alors, madame, la taille vous convient ?" },
  { start: 22.47, end: 24.07, text: "Hum, la jupe est trop petite." },
  { start: 24.31, end: 25.24, text: "Vous l'avez en plus grand ?" },
  { start: 26.49, end: 27.97, text: "Bien sûr, juste une seconde." },
  { start: 28.39, end: 28.61, text: "Tenez." },
  { start: 29.79, end: 30.20, text: "Alors ?" },
  { start: 31.41, end: 32.73, text: "C'est ma taille. Je la prends." },
  { start: 33.67, end: 34.55, text: "Combien elle coûte ?" },
  { start: 35.77, end: 36.44, text: "50 euros." },
  { start: 37.52, end: 39.18, text: "Est-ce que vous acceptez la carte de crédit ?" },
  { start: 40.45, end: 43.28, text: "Oui, tenez, votre jupe et votre carte de crédit." },
  { start: 44.30, end: 45.32, text: "Merci, au revoir." }
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
          top: "40%", // عدّل حسب مكان الزر
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
        id="CD-1-page5"
        className="headset-icon-CD-page5 hover:scale-110 transition"
        style={{
          position: "absolute",
          top: "60%", // عدّل حسب مكان الزر
          left: "2%", // عدّل حسب مكان الزر
          cursor: "pointer",
          width: "50px", height: "50px",
       
        }}
        onClick={() =>
          openPopup(
            "audio",
            <AudioWithCaption src={page5_CD22}  captions={captionsExample2} />
          )
        }
      >
      </div>
        <div
            className="Click -icon-CD-page5 hover:scale-110 transition"
              style={{ overflow: "visible" , position:"absolute",top:"40.9%",left:"65.4%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 169 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"62.0%",left:"67.2%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 170 })}
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
