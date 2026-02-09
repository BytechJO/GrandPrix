import React from "react";
import page_1 from "../../../assets/unite8pages/163.png"
import page5_CD2 from "../../../assets/U8Audio/u8sbq1.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 5.14, end: 10.02, text: "Grand Prix A1, unité 8, la technologie." },
  { start: 10.16, end: 13.38, text: "Section B, les réseaux sociaux." },
  { start: 13.72, end: 17.78, text: "Exercice 1. Écoute, répète et" },
  { start: 17.78, end: 19.32, text: "place dans l'ordre." },

  { start: 20.87, end: 23.05, text: "1. Une demande d'amis." },
  { start: 24.49, end: 26.59, text: "2. Une notification." },
  { start: 28.31, end: 31.17, text: "3. Un champ de recherche." },
  { start: 32.48, end: 34.78, text: "4. Un calendrier." },
  { start: 36.32, end: 38.96, text: "5. Télécharger une photo." },
  { start: 40.54, end: 42.40, text: "6. Des photos." },
  { start: 42.40, end: 46.24, text: "7. Un statut." },
  { start: 47.59, end: 49.91, text: "8. J'aime." },
  { start: 51.24, end: 53.50, text: "9. Commenter." },
  { start: 54.92, end: 57.08, text: "10. Partager." },
  { start: 58.46, end: 61.26, text: "11. Écrire un commentaire." },
  { start: 62.66, end: 64.08, text: "12. Chatter." },
  { start: 64.08, end: 65.58, text: "13. J'aime." },
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
          top: "13%", // عدّل حسب مكان الزر
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
              style={{ overflow: "visible" , position:"absolute",top:"15.5%",left:"46.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 220 })}
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
