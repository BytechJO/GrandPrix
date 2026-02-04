import React from "react";
import page_1 from "../../../assets/unite7pages/149.png"
import page5_CD2 from "../../../assets/U7Audio/u7sdq1.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 5.339, end: 8.099, text: "Grand prix A1, unité 7," },
  { start: 8.099, end: 10.659, text: "les loisirs, section D," },
  { start: 10.660, end: 12.439, text: "autour du monde." },

  { start: 12.440, end: 15.429, text: "Exercice 1 : Écoute," },
  { start: 15.430, end: 18.980, text: "répète et place dans l'ordre." },

  { start: 18.980, end: 20.840, text: "Porter un costume." },
  { start: 22.899, end: 24.819, text: "Fêter." },
  { start: 24.820, end: 26.359, text: "Danser." },
  { start: 28.019, end: 30.230, text: "Participer." },
  { start: 30.230, end: 31.539, text: "Pique-niquer." },
  { start: 33.439, end: 35.079, text: "Lancer. Jeter." },
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
                onClick={() => openPopup("exercise", { startIndex: 198 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"78.5%",left:"62.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 199 })}
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
