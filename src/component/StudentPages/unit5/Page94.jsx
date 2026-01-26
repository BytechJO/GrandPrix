import React from "react";
import page_1 from "../../../assets/unite5pages/94.png"
import page5_CD2 from "../../../assets/U5Audio/u5saq5.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start:5.21 , end: 6.7, text: "Grand prix A1," },
  { start:6.7 , end: 9.9, text: "unité 5. Les repas." },
  { start:9.94 , end: 11.4, text: "Section A." },
  { start:11.43 , end: 15.0, text: "Le petit déjeuner. Exercice 5." },
  { start:15.05 , end: 17.55, text: "Écoute et écris l'information" },
  { start:17.56 , end: 18.45, text: "manquante." },
  { start:20.56 , end: 21.7, text: "Salut Sarah, ça va ?" },
  { start:21.7 , end: 22.4, text: "Qu'est-ce que tu prends" },
  { start:22.47 , end: 24.0, text: "au petit déjeuner ?" },
  { start:24.0 , end: 26.2, text: "Salut maman, ça va bien." },
  { start:26.2 , end: 27.4, text: "Je mange des céréales" },
  { start:27.4 , end: 29.13, text: "et je prends du thé." },
  { start:29.13 , end: 31.6, text: "Très bien, à plus tard." },
  { start:31.6 , end: 34.2, text: "Salut, à plus tard." },
  { start:35.7 , end: 37.6, text: "Salut Marie, ça va ?" },
  { start:37.6 , end: 39.599, text: "Bonjour Léo, ça va bien" },
  { start:39.6 , end: 41.14, text: "merci et toi ?" },
  { start:41.14 , end: 42.87, text: "Pas mal, merci." },
  { start:42.87 , end: 43.919, text: "Qu'est-ce que tu prends" },
  { start:43.919 , end: 45.3, text: "au petit déjeuner ?" },
  { start:45.3 , end: 47.4, text: "Je prends des toasts avec de" },
  { start:47.4 , end: 48.8, text: "la confiture d'orange," },
  { start:48.8 , end: 50.710, text: "du chocolat chaud et des fruits." },
  { start:50.710 , end: 51.779, text: "Et toi ?" },
  { start:51.779 , end: 53.779, text: "Des croissants et du lait." },

 
  
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
          top: "6%", // عدّل حسب مكان الزر
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
              style={{ overflow: "visible" , position:"absolute",top:"7.6%",left:"52.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 126 })}
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
