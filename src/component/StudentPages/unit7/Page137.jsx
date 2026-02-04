import React from "react";
import page_1 from "../../../assets/unite7pages/137.png"
import page5_CD2 from "../../../assets/U7Audio/u7saq1.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 5.50, end: 6.64, text: "Rempris A1," },
  { start: 7.10, end: 8.08, text: "unité 7," },
  { start: 8.40, end: 8.96, text: "les loisirs." },
  { start: 9.76, end: 10.52, text: "Section A," },
  { start: 11.20, end: 11.86, text: "mes loisirs." },
  { start: 12.80, end: 13.88, text: "Exercice 1." },
  { start: 14.59, end: 15.12, text: "Écoute," },
  { start: 15.42, end: 17.46, text: "répète et place dans l'ordre." },
  { start: 19.90, end: 21.08, text: "Jouer aux jeux vidéo." },
  { start: 23.20, end: 23.80, text: "Lire." },
  { start: 25.86, end: 26.96, text: "Faire de la randonnée." },
  { start: 28.99, end: 29.54, text: "Dessiner." },
  { start: 31.62, end: 32.02, text: "Pêcher." },
  { start: 34.31, end: 35.49, text: "Faire de l'équitation." },
  { start: 37.51, end: 38.71, text: "Faire du skateboard." },
  { start: 40.93, end: 41.49, text: "Chatter." },
  { start: 43.53, end: 44.41, text: "Faire la cuisine." },
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
              style={{ overflow: "visible" , position:"absolute",top:"15.5%",left:"47.9%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 185 })}
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
