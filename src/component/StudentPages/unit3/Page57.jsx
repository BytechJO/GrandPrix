import React from "react";
import page_1 from "../../../assets/unite3pages/57.png"
import page5_CD2 from "../../../assets/U3Audio/U3ScQ1.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start:5.47 , end: 6.61, text: "Rempris à 1," },
  { start:7.13 , end: 8.0, text: "unité 3," },
  { start:8.5 , end: 9.5, text: "sous le même toit" },
  { start:10.2 , end: 10.9, text: "Section C," },
  { start:11.5 , end: 12.1, text: "ma maison." },
  { start:13.15 , end: 14.4, text: "Exercice 1." },
  { start:15.4 , end: 17.8, text: "Écoute et écris la lettre correspondante." },
  { start:20.3 , end: 21.9, text: "La maison de la famille Dupont." },
  { start:22.9, end: 23.0, text: "Le salon." },
  { start:25.7 , end: 26.6, text: "La salle à manger." },
  { start:28.8 , end: 29.5, text: "La cuisine." },
  { start:31.8 , end: 32.7, text: "La salle de bain." },
  { start:34.7 , end: 35.55, text: "Le jardin," },
  { start:37.67 , end: 38.5, text: "le garage," },
  { start:40.6 , end: 42.8, text: "la chambre de Monsieur et Madame Dupont," },
  { start:44.8 , end: 46.5, text: "la chambre de Belle et Bête," },
  { start:48.75 , end: 49.79, text: "la chambre de Ray," },
  { start:49.79 , end: 52.55, text: "la chambre d'amis." },
 
  
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
              style={{ overflow: "visible" , position:"absolute",top:"15.5%",left:"50.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 62 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"56.5%",left:"32.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 63 })}
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
