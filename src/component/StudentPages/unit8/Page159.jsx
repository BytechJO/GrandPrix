import React from "react";
import page_1 from "../../../assets/unite8pages/159.png"
import page5_CD2 from "../../../assets/U8Audio/u8saq1.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 5.33, end: 10.41, text: "Grand Prix A1, unité 8, la technologie." },
  { start: 10.41, end: 15.67, text: "Section A, les gadgets. Exercice 1." },
  { start: 15.67, end: 19.61, text: "Écoute, répète et place dans l'ordre." },

  { start: 21.24, end: 23.38, text: "A. La tablette." },
  { start: 24.49, end: 27.17, text: "B. Les écouteurs sans fil." },
  { start: 28.57, end: 32.03, text: "C. Les lunettes de réalité virtuelle." },
  { start: 33.25, end: 35.59, text: "D. La smartwatch." },
  { start: 37.09, end: 39.29, text: "E. La liseuse." },
  { start: 40.61, end: 43.25, text: "F. L'ordinateur portable." },
  { start: 44.77, end: 47.81, text: "G. La console de jeux vidéo." },
  { start: 49.24, end: 51.18, text: "H. Le drone." },
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
              style={{ overflow: "visible" , position:"absolute",top:"16.5%",left:"47.0%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 216 })}
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
