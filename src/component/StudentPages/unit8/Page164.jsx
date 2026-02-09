import React from "react";
import page_1 from "../../../assets/unite8pages/164.png"
import page5_CD2 from "../../../assets/U8Audio/u8sbq3.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 5.14, end: 10.02, text: "Grand Prix A1, unité 8, la technologie." },
  { start: 10.46, end: 13.38, text: "Section B, les réseaux sociaux." },
  { start: 13.54, end: 15.04, text: "Exercice 3." },
  { start: 15.24, end: 17.86, text: "Écoute le dialogue et écris" },
  { start: 17.86, end: 19.78, text: "l'information manquante." },

  { start: 20.83, end: 22.65, text: "Est-ce que tu te rappelles de" },
  { start: 22.65, end: 24.39, text: "Marc Berger, le garçon qui a" },
  { start: 24.39, end: 25.89, text: "habité près de chez moi?" },

  { start: 26.35, end: 27.79, text: "C'est le garçon qui a" },
  { start: 27.79, end: 29.41, text: "déménagé en Italie?" },

  { start: 30.19, end: 32.75, text: "Oui, et regarde, je l'ai" },
  { start: 32.75, end: 34.25, text: "trouvé sur Facebook." },

  { start: 34.71, end: 36.43, text: "Ah, c'est génial!" },
  { start: 36.43, end: 38.41, text: "Mais qu'est-ce qu'il fait maintenant?" },

  { start: 38.61, end: 40.45, text: "Je suis allé sur son journal" },
  { start: 40.45, end: 41.97, text: "et son statut indique «" },
  { start: 41.97, end: 43.49, text: "Vacances en Chine »." },

  { start: 43.49, end: 46.35, text: "Est-ce que tu as écrit un commentaire?" },
  { start: 46.55, end: 47.91, text: "Oui." },

  { start: 47.91, end: 49.73, text: "À ton avis, est-ce qu'il" },
  { start: 49.73, end: 51.07, text: "te reconnaîtra?" },
  { start: 51.07, end: 53.17, text: "Nous étions de bons amis." },

  { start: 53.17, end: 55.13, text: "En plus, je lui ai envoyé une" },
  { start: 55.13, end: 56.25, text: "demande d'amis." },

  { start: 56.25, end: 58.05, text: "Est-ce qu'il partage ou" },
  { start: 58.05, end: 59.91, text: "télécharge des photos de l'Italie?" },

  { start: 59.91, end: 62.21, text: "Oui. Quand il acceptera ma demande" },
  { start: 62.21, end: 63.47, text: "d'amis, je verrai tous" },
  { start: 63.47, end: 64.03, text: "ses téléchargements." },

  { start: 64.03, end: 65.53, text: "Déchargement." },
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
              style={{ overflow: "visible" , position:"absolute",top:"7.5%",left:"60.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 221 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"49.5%",left:"8.0%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 222 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"56.5%",left:"8.0%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 223 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"64.5%",left:"8.0%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 224 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"74.5%",left:"8.0%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 225 })}
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
