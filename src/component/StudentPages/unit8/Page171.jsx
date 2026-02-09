import React from "react";
import page_1 from "../../../assets/unite8pages/171.png"
import page5_CD2 from "../../../assets/U8Audio/u8sdq1.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 4.94, end: 9.40, text: "Grand Prix A1, Unité 8, la technologie." },
  { start: 9.56, end: 14.32, text: "Section D, la vie d'avant. Exercice 1." },
  { start: 14.36, end: 18.06, text: "Écoute, répète et place dans l'ordre." },

  { start: 19.82, end: 21.34, text: "Écrire une lettre." },
  { start: 22.83, end: 24.91, text: "Aller à la bibliothèque." },
  { start: 26.09, end: 28.41, text: "Passer du temps avec sa famille." },
  { start: 30.02, end: 35.14, text: "Lire un journal, livre. Jouer dehors." },
  { start: 36.88, end: 38.40, text: "Écouter de la musique." },
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
                onClick={() => openPopup("exercise", { startIndex: 233 })}
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
