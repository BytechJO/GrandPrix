import React from "react";
import page_1 from "../../../assets/unite6pages/123.png"
import page5_CD2 from "../../../assets/U6Audio/u6scq1.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 5.41, end: 6.47, text: "Rempris A1," },
  { start: 6.88, end: 7.81, text: "unité 6," },
  { start: 8.19, end: 8.67, text: "le temps." },
  { start: 9.50, end: 10.21, text: "Section C," },
  { start: 10.67, end: 11.21, text: "les sports." },
  { start: 12.25, end: 13.29, text: "Exercice 1." },
  { start: 14.11, end: 18.01, text: "Écoute et associe l'activité au dessin qui correspond." },

  { start: 18.55, end: 21.51, text: "A, le golf." },
  { start: 23.71, end: 25.15, text: "B, le hockey sur glace." },
  { start: 27.83, end: 28.49, text: "C, le football." },
  { start: 31.35, end: 31.95, text: "D, le volley." },
  { start: 34.43, end: 34.85, text: "E, le basket." },
  { start: 37.25, end: 38.51, text: "F, le judo." },
  { start: 41.23, end: 41.89, text: "G, le tennis." },
  { start: 44.27, end: 44.79, text: "H, le ski." }
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
              style={{ overflow: "visible" , position:"absolute",top:"16.0%",left:"62.9%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 249 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"78.0%",left:"39.9%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 250 })}
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
