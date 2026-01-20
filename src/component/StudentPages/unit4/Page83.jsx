import React from "react";
import page_1 from "../../../assets/unite4pages/83.png"
import page5_CD2 from "../../../assets/U4Audio/U4SDQ1.mp3";
import page5_CD3 from "../../../assets/U4Audio/U4SDQ2.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start:5.18 , end: 6.38, text: "Rempris A1," },
  { start:6.85 , end: 8.02, text: "unité 4," },
  { start:8.38 , end: 8.80, text: "en ville." },
  { start:9.63 , end: 10.28, text: "Section D." },
  { start:11.13 , end: 11.34, text: "Cannes," },
  { start:11.97 , end: 13.32, text: "une ville de cinéma." },
  { start:14.21 , end: 15.10, text: "Exercice 1." },
  { start:16.09 , end: 16.62, text: "Écoute," },
  { start:17.18 , end: 19.14, text: "répète et place dans l'ordre." },
  { start:19.74 , end: 19.76, text: "A" },
  { start:21.76 , end: 22.98, text: "Passe devant." },
  { start:23.02 , end: 24.0, text: "B" },
  { start:25.64 , end: 26.46, text: "Tourne à gauche." },
  { start:26.48 , end: 26.52, text: "C" },
  { start:29.31 , end: 30.22, text: "Traverse la rue." },
  { start:30.22 , end: 30.30, text: "D" },
  { start:32.90 , end: 33.78, text: "Continue tout droit." },
  { start:35.88 , end: 36.12, text: "E" },
  { start:36.54 , end: 37.18, text: "Tourne à droite." },
  { start:39.33 , end: 39.68, text: "F" },
  { start:40.06 , end: 41.96, text: "L'hôpital est au coin de" },
 
];
const captionsExample2 = [
  { start:5.18 , end: 6.36, text: "Rempris A1," },
  { start:6.85 , end: 8.02, text: "unité 4," },
  { start:8.40 , end: 8.82, text: "en ville." },
  { start:9.36 , end: 10.28, text: "Section D." },
  { start:11.13 , end: 11.36, text: "Cannes," },
  { start:11.98 , end: 13.18, text: "une ville de cinéma." },
  { start:13.98 , end: 15.02, text: "Exercice 2." },
  { start:15.45 , end: 17.04, text: "Écoute et écris." },
  { start:19.14 , end: 20.74, text: "Ella est au poste de police." },
  { start:21.21 , end: 22.71, text: "Elle veut aller au supermarché." },
  { start:23.74 , end: 26.40, text: "Marc est au parc et il veut aller au restaurant." },

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
        id="CD-1-page5"
        className="headset-icon-CD-page5 hover:scale-110 transition"
        style={{
          position: "absolute",
          top: "45%", // عدّل حسب مكان الزر
          left: "2%", // عدّل حسب مكان الزر
          cursor: "pointer",
          width: "50px", height: "50px",
       
       
        }}
        onClick={() =>
          openPopup(
            "audio",
            <AudioWithCaption src={page5_CD3}  captions={captionsExample2} />
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
                onClick={() => openPopup("exercise", { startIndex: 104 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"47.9%",left:"27.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 105 })}
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
