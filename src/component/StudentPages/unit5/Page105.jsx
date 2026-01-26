import React from "react";
import page_1 from "../../../assets/unite5pages/105.png"
import page5_CD2 from "../../../assets/U5Audio/u5sdq1.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start:5.19 , end: 8.8, text: "Grand prix A1, unité 5," },
  { start:8.8 , end: 11.3, text: "les repas. Section D," },
  { start:11.3 , end: 14.7, text: "au restaurant. Exercice 1" },
  { start:14.7 , end: 16.6, text: "Écoute et lis les mots." },
  { start:18.8 , end: 19.7, text: "A, un menu." },
  { start:21.9 , end: 23.079, text: "B, une entrée." },
  { start:25.1 , end: 26.5, text: "C, un dessert." },
  { start:28.3 , end: 32.3, text: "D, un plat principal. E," },
  { start:32.3 , end: 33.4, text: "une addition." },
  { start:35.4 , end: 36.56, text: "F, un pourboire." },
  { start:38.62 , end: 40.119, text: "G, un serveur." },
 

  
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
              style={{ overflow: "visible" , position:"absolute",top:"55.0%",left:"36.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 139})}
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
