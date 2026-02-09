import React from "react";
import page_1 from "../../../assets/unite8pages/172.png"
import page5_CD2 from "../../../assets/U8Audio/u8sdq3.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 4.94, end: 9.38, text: "Grand Prix A1, Unité 8, la technologie." },
  { start: 9.56, end: 14.00, text: "Section D. La vie d'avant. Exercice 3." },
  { start: 14.42, end: 16.82, text: "Écoute le dialogue et entoure" },
  { start: 16.82, end: 18.32, text: "la bonne réponse." },

  { start: 19.57, end: 22.27, text: "Salut papy, comment ça va ?" },
  { start: 22.27, end: 24.87, text: "Salut Pierre, pas mal." },

  { start: 25.15, end: 27.35, text: "J'ai un projet pour l'école," },
  { start: 27.35, end: 28.85, text: "la vie d'avant." },

  { start: 28.91, end: 29.97, text: "Est-ce que tu peux me dire" },
  { start: 29.97, end: 31.59, text: "comment était la vie quand tu" },
  { start: 31.59, end: 32.87, text: "étais jeune ?" },

  { start: 32.87, end: 35.27, text: "Oui, bien sûr. Qu'est-ce que" },
  { start: 35.27, end: 37.01, text: "tu veux savoir ?" },

  { start: 37.01, end: 39.23, text: "Ah, qu'est-ce que tu faisais" },
  { start: 39.23, end: 41.03, text: "après l'école ?" },

  { start: 41.27, end: 42.91, text: "Je faisais mes devoirs et" },
  { start: 42.91, end: 44.69, text: "puis j'allais jouer dehors" },
  { start: 44.69, end: 46.03, text: "avec mes amis car nous" },
  { start: 46.03, end: 47.99, text: "n'avions pas de tablettes ni" },
  { start: 47.99, end: 49.91, text: "de consoles de jeux vidéo." },

  { start: 50.17, end: 52.05, text: "Et si tu voulais envoyer un" },
  { start: 52.05, end: 53.37, text: "message à une personne qui" },
  { start: 53.37, end: 55.97, text: "n'habitait pas dans la même ville ?" },

  { start: 56.05, end: 57.61, text: "Je devais écrire une lettre" },
  { start: 57.61, end: 59.57, text: "et l'envoyer par la poste." },

  { start: 59.67, end: 62.35, text: "Et qu'est-ce que tu faisais le soir ?" },

  { start: 62.83, end: 64.59, text: "Après le dîner, nous passions" },
  { start: 64.59, end: 66.01, text: "du temps ensemble." },
  { start: 66.01, end: 68.71, text: "Nous lisions un roman ou nous" },
  { start: 68.71, end: 70.45, text: "écoutions de la musique." },
  { start: 70.45, end: 73.03, text: "Parfois, nous regardions la télé." },

  { start: 73.07, end: 76.29, text: "Est-ce que la télé était en couleur ?" },
  { start: 76.39, end: 78.67, text: "Non, elle était en noir et blanc." },

  { start: 78.67, end: 78.69, text: "C'est le temps dans le monde ?" },
  { start: 78.69, end: 78.73, text: "Est-ce qu'est-ce que c'est pour toi ?" },
  { start: 78.73, end: 78.77, text: "La télé est en place dans le" },
  { start: 78.77, end: 78.77, text: "monde et la télé." },
  { start: 78.77, end: 80.27, text: "Merci." },
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
              style={{ overflow: "visible" , position:"absolute",top:"7.5%",left:"57.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 234 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"48.5%",left:"31.9%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 235 })}
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
