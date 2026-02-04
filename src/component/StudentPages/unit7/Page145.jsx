import React from "react";
import page_1 from "../../../assets/unite7pages/145.png"
import page5_CD2 from "../../../assets/U7Audio/u7scq1.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 5.359, end: 8.409, text: "Grand prix A1, unité 7," },
  { start: 8.409, end: 11.159, text: "Les loisirs. Section C," },
  { start: 11.160, end: 12.689, text: "Mes vacances." },

  { start: 12.690, end: 15.659, text: "Exercice 1. Écoute," },
  { start: 15.659, end: 17.939, text: "répète et place dans l'ordre." },

  { start: 19.979, end: 21.279, text: "Loger à l'hôtel." },
  { start: 23.139, end: 24.600, text: "Nager dans le lagon bleu." },
  { start: 26.440, end: 29.649, text: "Aller observer les baleines." },
  { start: 29.649, end: 33.889, text: "Voir une aurore boréale." },
  { start: 33.890, end: 36.769, text: "Visiter une chute d'eau." },
  { start: 36.770, end: 39.419, text: "Explorer un parc national." },
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
          top: "12%", // عدّل حسب مكان الزر
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
              style={{ overflow: "visible" , position:"absolute",top:"15.5%",left:"46.8%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 193 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"68.5%",left:"45.0%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 194 })}
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
