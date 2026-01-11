import React from "react";
import page_1 from "../../../assets/unite3pages/66.png"
import page5_CD2 from "../../../assets/unit1/SoundU1/1.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start:5.0 , end: 7.0, text: "GrandPrixA1" },
  { start: 7.3, end: 8.3, text: "unité 1," },
  { start: 8.3, end: 9.6, text: " seprésenter. " },
  { start: 10.2, end: 11.2, text: " SectionA " },
  { start: 13.1, end: 14.2, text: " Exercice1 " },
  { start: 14.8, end: 15.3, text: " Écoute " },
  { start: 15.8, end: 17.9, text: " répète et place dans l'ordre. " },
  { start: 20.4, end: 21.2, text: " Bonjour Loïc." },
  { start: 22.7, end: 23.5, text: " Bonjour Théo." },
  { start: 25.5, end: 26.3, text: "Salut Amélie" },
  { start: 27.8, end: 28.1, text: "Salut Emma" },
  { start: 30.4, end: 31.5, text: "Bonjour Madame Rose" },
  { start: 32.8, end: 33.7, text: "Bonjour Madame Lucas." },
  { start: 35.4, end: 36.1, text: "Bonjour Monsieur Henry." },
  { start: 38.7, end: 39.4, text: "Au revoir Tom" },
  { start: 40.7, end: 41.4, text: "Au revoir Adam." },
  
];

const Page5 = ({ openPopup }) => {

  return (
    <div className="page_5-background" style={{ position: "relative" }}>
      {/* الخلفية */}
      <img src={page_1} alt="Page 5" style={{ display: "block", width: "100%" }} />

      {/* زر الصوت الأول */}
     
      
        <div
            className="Click -icon-CD-page5 hover:scale-110 transition"
              style={{ overflow: "visible" , position:"absolute",top:"11.6%",left:"42.9%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 75 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"36.6%",left:"33.9%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 76 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"52.9%",left:"46.2%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 77 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"52.9%",left:"85.2%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 78 })}
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
