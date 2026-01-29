import React from "react";
import page_1 from "../../../assets/unite6pages/115.png"
import page5_CD2 from "../../../assets/U6Audio/u6saq1.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 5.53, end: 6.53, text: "Rempart A1," },
  { start: 6.94, end: 7.89, text: "unit 6," },
  { start: 8.45, end: 8.89, text: "le temps." },
  { start: 9.57, end: 10.27, text: "Section A." },
  { start: 11.07, end: 12.19, text: "Quel temps fait-il ?" },
  { start: 12.93, end: 13.91, text: "Exercice 1." },
  { start: 14.81, end: 15.31, text: "Écoute," },
  { start: 15.83, end: 17.97, text: "répète et place dans l'ordre." },

  { start: 21.07, end: 21.67, text: "A. Il pleut." },
  { start: 24.22, end: 25.15, text: "B. Il y a du vent." },
  { start: 27.73, end: 28.47, text: "C. Il neige." },
  { start: 31.07, end: 31.90, text: "D. Il fait chaud." },
  { start: 34.25, end: 35.35, text: "E. Il y a du soleil." },
  { start: 38.14, end: 39.07, text: "F. Il fait mauvais." },
  { start: 41.79, end: 42.53, text: "G. Il fait beau." },
  { start: 45.31, end: 45.99, text: "H. Il fait froid." }
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
              style={{ overflow: "visible" , position:"absolute",top:"15.5%",left:"46.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 156 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"72.5%",left:"42.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 157 })}
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
