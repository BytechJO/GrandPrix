import React from "react";
import page_1 from "../../../assets/unite4pages/79.png"
import page5_CD2 from "../../../assets/U4Audio/U4SCQ1.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start:5.60 , end: 6.72, text: "Rempris A1," },
  { start:7.0 , end: 8.0, text: "unité 4," },
  { start:8.35 , end: 8.72, text: "en ville." },
  { start:9.63 , end: 10.08, text: "Section C." },
  { start:11.13 , end: 11.72, text: "Briançon," },
  { start:12.10 , end: 13.76, text: "une ville d'art et d'histoire." },
  { start:14.94 , end: 15.99, text: "Exercice 1." },
  { start:16.7 , end: 17.10, text: "Écoute," },
  { start:17.85 , end: 19.74, text: "répète et place dans l'ordre." },
  { start:20.34 , end: 20.36, text: "A." },
  { start:22.62 , end: 23.26, text: "Restaurant." },
  { start:23.26 , end: 23.32, text: "B" },
  { start:26.11 , end: 26.64, text: "Hôpital." },
  { start:26.64 , end: 26.82, text: "c" },
  { start:29.58 , end: 30.28, text: "Supermarché." },
  { start:32.26 , end: 32.52, text: "D." },
  { start:32.9 , end: 33.6, text: "Station-service." },
  { start:35.8 , end: 36.0, text: "E." },
  { start:36.64 , end: 36.9, text: "Banque." },
  { start:39.10 , end: 39.3, text: "F" },
  { start:39.7 , end: 40.28, text: "École." },
  { start:42.40 , end: 42.7, text: "G." },
  { start:43.28 , end: 43.7, text: "Cinéma." },
  { start:45.9 , end: 46.24, text: "H" },
  { start:46.78 , end: 47.20, text: "Stade." },
  { start:47.20 , end: 47.29, text: "I" },
  { start:50.0 , end: 50.9, text: "Poste de police." },
  { start:53.0 , end: 53.4, text: "J." },
  { start:53.9 , end: 55.22, text: "Magasin de chaussures." },
  { start:55.22 , end: 55.3, text: "k" },
  { start:57.7 , end: 58.9, text: "Magasin de vêtements." },
  { start:61.0 , end: 61.3, text: "L" },
  { start:61.3 , end: 62.24, text: "Bijouterie." },
  { start:64.35 , end: 64.68, text: "M." },
  { start:65.09 , end: 65.40, text: "Parc." },
  { start:67.77 , end: 68.12, text: "N" },
  { start:68.12 , end: 69.08, text: "Hôtel" },


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
              style={{ overflow: "visible" , position:"absolute",top:"15.7%",left:"47.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 97 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"62.9%",left:"36.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 98 })}
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
