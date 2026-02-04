import React from "react";
import page_1 from "../../../assets/unite7pages/141.png"
import page5_CD2 from "../../../assets/U7Audio/u7sbq1.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 5.63, end: 6.75, text: "Rempris A1," },
  { start: 7.07, end: 8.01, text: "unité 7," },
  { start: 8.29, end: 8.95, text: "les loisirs." },
  { start: 9.89, end: 10.71, text: "Section B," },
  { start: 11.01, end: 11.59, text: "ma journée." },

  { start: 12.51, end: 13.56, text: "Exercice 1." },
  { start: 14.14, end: 14.51, text: "Écoute," },
  { start: 15.09, end: 17.09, text: "répète et place dans l'ordre." },

  { start: 17.87, end: 17.89, text: "A." },
  { start: 20.49, end: 21.07, text: "Se lever." },

  { start: 21.07, end: 21.11, text: "B." },
  { start: 23.75, end: 24.67, text: "Se brosser les dents." },

  { start: 24.85, end: 24.87, text: "C." },
  { start: 27.33, end: 28.53, text: "Prendre le petit-déjeuner." },

  { start: 28.53, end: 28.60, text: "D." },
  { start: 31.23, end: 31.67, text: "S'habiller." },

  { start: 31.67, end: 31.79, text: "E." },
  { start: 34.31, end: 35.01, text: "Aller à l'école." },

  { start: 37.28, end: 37.51, text: "F." },
  { start: 37.91, end: 39.05, text: "Rentrer à la maison." },

  { start: 41.31, end: 41.61, text: "G." },
  { start: 42.33, end: 43.53, text: "Faire ses devoirs." },

  { start: 45.61, end: 45.81, text: "H." },
  { start: 46.27, end: 47.69, text: "Dîner avec sa famille." },

  { start: 49.85, end: 50.07, text: "I." },
  { start: 50.49, end: 51.99, text: "Bavarder avec ses amis." },

  { start: 54.05, end: 54.35, text: "J." },
  { start: 54.88, end: 55.73, text: "Faire du sport." },

  { start: 57.69, end: 57.87, text: "K." },
  { start: 58.37, end: 59.87, text: "Aller sur les réseaux sociaux." },

  { start: 61.79, end: 62.19, text: "L." },
  { start: 62.45, end: 63.03, text: "Se coucher." },
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
              style={{ overflow: "visible" , position:"absolute",top:"15.5%",left:"47.0%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 189 })}
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
