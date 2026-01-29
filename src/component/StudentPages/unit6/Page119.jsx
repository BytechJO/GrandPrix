import React from "react";
import page_1 from "../../../assets/unite6pages/119.png"
import page5_CD2 from "../../../assets/U6Audio/u6sbq1.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 5.53, end: 6.57, text: "Rempris A1," },
  { start: 6.97, end: 7.95, text: "unité 6," },
  { start: 8.29, end: 8.83, text: "le temps." },
  { start: 9.53, end: 10.25, text: "Section B," },
  { start: 10.69, end: 11.37, text: "les saisons." },
  { start: 12.38, end: 13.43, text: "Exercice 1." },
  { start: 14.24, end: 16.03, text: "Écoute et observe." },

  { start: 18.27, end: 18.97, text: "Au printemps," },
  { start: 19.15, end: 19.85, text: "il fait beau." },
  { start: 20.21, end: 21.23, text: "Il y a du soleil." },
  { start: 21.79, end: 23.77, text: "Les mois du printemps sont mars," },
  { start: 24.06, end: 24.65, text: "avril," },
  { start: 24.86, end: 25.21, text: "mai." },

  { start: 27.36, end: 27.87, text: "En été," },
  { start: 28.27, end: 28.99, text: "il fait chaud." },
  { start: 29.31, end: 30.43, text: "Il y a du soleil." },
  { start: 31.09, end: 33.03, text: "Les mois de l'été sont juin," },
  { start: 33.29, end: 33.87, text: "juillet," },
  { start: 34.24, end: 34.45, text: "août." },

  { start: 36.83, end: 37.67, text: "En automne," },
  { start: 37.67, end: 38.23, text: "il pleut," },
  { start: 38.41, end: 39.29, text: "il y a du vent." },
  { start: 39.68, end: 40.75, text: "Les mois de l'automne" },
  { start: 40.89, end: 42.14, text: "sont septembre," },
  { start: 42.27, end: 43.13, text: "octobre," },
  { start: 43.13, end: 43.85, text: "novembre." },

  { start: 46.08, end: 46.65, text: "En hiver," },
  { start: 46.83, end: 47.65, text: "il fait froid," },
  { start: 47.97, end: 48.69, text: "il neige." },
  { start: 49.25, end: 51.67, text: "Les mois de l'hiver sont décembre," },
  { start: 51.81, end: 52.49, text: "janvier," },
  { start: 52.77, end: 53.25, text: "février." }
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
              style={{ overflow: "visible" , position:"absolute",top:"15.5%",left:"30.3%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 160 })}
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
