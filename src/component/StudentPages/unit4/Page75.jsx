import React from "react";
import page_1 from "../../../assets/unite4pages/75.png"
import page5_CD2 from "../../../assets/U4Audio/U4SBQ1.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start:5.79 , end: 6.97, text: "Grand Prix A1," },
  { start:7.39 , end: 8.41, text: "unité 4," },
  { start:8.83 , end: 9.23, text: "en ville." },
  { start:10.0 , end: 10.8, text: "Section B." },
  { start:11.52 , end: 12.19, text: "Marseille," },
  { start:12.64 , end: 13.9, text: "une ville formidable." },
  { start:15.7 , end: 15.9, text: "Exercice 1." },
  { start:16.8 , end: 18.6, text: "Écoute et observe." },
  { start:20.8 , end: 21.4, text: "En bus," },
  { start:21.6 , end: 22.3, text: "en tramway," },
  { start:22.3 , end: 23.3, text: "en métro," },
  { start:23.2 , end: 25.0, text: "les transports en commun sont pratiques." },
  { start:26.3 , end: 26.9, text: "En avion," },
  { start:26.9 , end: 27.7, text: "c'est rapide." },
  { start:27.7 , end: 29.4, text: "En voiture," },
  { start:29.4 , end: 30.4, text: "c'est facile." },
  { start:31.4 , end: 32.0, text: "À vélo," },
  { start:32.2 , end: 33.8, text: "c'est bon pour faire de l'exercice." },
  { start:35.0 , end: 35.4, text: "À pied," },
  { start:35.4 , end: 36.4, text: "avec tes amis," },
  { start:36.4 , end: 37.19, text: "c'est formidable." },


  
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
              style={{ overflow: "visible" , position:"absolute",top:"63.6%",left:"34.7%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 92 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"80.0%",left:"31.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 93 })}
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
