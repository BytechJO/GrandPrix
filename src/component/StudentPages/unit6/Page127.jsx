import React from "react";
import page_1 from "../../../assets/unite6pages/127.png"
import page5_CD2 from "../../../assets/U6Audio/u6sdq1.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 5.47, end: 6.45, text: "Rempris A1," },
  { start: 6.79, end: 7.49, text: "unité 6," },
  { start: 8.01, end: 8.45, text: "le temps." },
  { start: 9.44, end: 10.11, text: "Section D," },
  { start: 10.49, end: 10.91, text: "la mode." },
  { start: 12.06, end: 13.05, text: "Exercice 1." },
  { start: 13.85, end: 17.15, text: "Écoute les mots, répète et place dans l'ordre." },

  { start: 17.91, end: 20.97, text: "A, un sac à main." },
  { start: 21.07, end: 23.97, text: "B, des bottes." },
  { start: 24.09, end: 27.41, text: "C, un foulard." },
  { start: 29.53, end: 30.67, text: "D, une jupe." },
  { start: 32.85, end: 34.33, text: "E, des chaussures à talons." },
  { start: 36.86, end: 37.95, text: "F, une montre." },
  { start: 40.19, end: 42.41, text: "G, un pull, un chemisier." },
  { start: 44.45, end: 45.63, text: "H, une veste." },
  { start: 46.05, end: 49.19, text: "I, un jean." },
  { start: 51.33, end: 52.79, text: "J, un tee-shirt." },
  { start: 53.09, end: 57.11, text: "K, des lunettes de soleil." },
  { start: 59.19, end: 60.39, text: "L, un collier." }
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
          top: "14%", // عدّل حسب مكان الزر
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
              style={{ overflow: "visible" , position:"absolute",top:"15.6%",left:"54.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 167 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"62.0%",left:"40.9%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 168 })}
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
