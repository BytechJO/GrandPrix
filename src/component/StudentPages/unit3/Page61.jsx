import React from "react";
import page_1 from "../../../assets/unite3pages/61.png"
import page5_CD2 from "../../../assets/U3Audio/U3SDQ1.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start:5.5 , end: 6.6, text: "Rempris A1," },
  { start:7.0 , end: 7.9, text: "unité 3," },
  { start:8.5 , end: 9.6, text: "sous le même toit," },
  { start:10.17 , end: 11.0, text: "section D," },
  { start:11.40 , end: 12.40, text: "OU." },
  { start:13.0 , end: 14.2, text: "Exercice 1." },
  { start:15.4 , end: 17.9, text: "Écoute et écris la lettre correspondante." },
  { start:20.5 , end: 20.8, text: "Sur" },
  { start:20.8 , end: 20.9, text: "Dans." },
  { start:23.18 , end: 23.20, text: "Sous." },
  { start:27.55 , end: 27.9, text: "Devant." },
  { start:29.9 , end: 30.6, text: "Derrière." },
  { start:30.6 , end: 33.4, text: "Entre." },

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
              style={{ overflow: "visible" , position:"absolute",top:"15.6%",left:"50.9%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 69 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"51.6%",left:"28.9%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 70 })}
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
