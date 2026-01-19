import React from "react";
import page_1 from "../../../assets/unite4pages/71.png"
import page5_CD2 from "../../../assets/U4Audio/U4Q1.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start:5.9 , end: 7.12, text: "Grand Prix A1," },
  { start:7.7 , end: 8.47, text: "unité 4," },
  { start:9.11 , end: 9.61, text: "en ville," },
  { start:10.5 , end: 11.31, text: "section A," },
  { start:11.87 , end: 12.53, text: "Provence," },
  { start:12.9 , end: 14.19, text: "le goût de la France." },
  { start:15.1 , end: 16.25, text: "Exercice 1." },
  { start:17.3 , end: 17.8, text: "Écoute," },
  { start:18.3 , end: 19.9, text: "observe et écris." },
  { start:22.2 , end: 23.0, text: "Je m'appelle Marc." },
  { start:23.3 , end: 26.0, text: "J'habite dans une ferme dans un village près d'Orange." },
  { start:27.3 , end: 28.3, text: "Je m'appelle Marie" },
  { start:28.5 , end: 31.15, text: "J'habite à la montagne dans la ville de Briançon" },
  { start:32.5 , end: 33.7, text: "Je m'appelle Belle." },
  { start:34.0 , end: 35.9, text: "J'habite ici à Marseille." },
  { start:36.3 , end: 38.6, text: "J'habite dans une maison de ville." },
  { start:39.8 , end: 40.9, text: "Je m'appelle Antoine." },
  { start:41.44 , end: 43.4, text: "J'habite ici sur l'île d'Hier." },
  { start:44.8 , end: 45.8, text: "Je m'appelle Jacques." },
  { start:46.15 , end: 46.9, text: "J'habite à Cannes" },
  { start:47.3 , end: 48.5, text: "C'est un port en Provence." },
 

  
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
              style={{ overflow: "visible" , position:"absolute",top:"15.0%",left:"35.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 89 })}
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
