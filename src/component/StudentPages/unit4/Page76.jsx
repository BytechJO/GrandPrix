import React from "react";
import page_1 from "../../../assets/unite4pages/76.png"
import page5_CD2 from "../../../assets/U4Audio/U4SBQ4.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start:5.79 , end: 6.95, text: "Rempris A1," },
  { start:7.39 , end: 8.43, text: "unité 4," },
  { start:8.86 , end: 9.41, text: "en ville." },
  { start:10.0 , end: 10.8, text: "Section B." },
  { start:11.52 , end: 12.13, text: "Marseille," },
  { start:12.64 , end: 13.9, text: "une ville formidable." },
  { start:14.8 , end: 15.7, text: "Exercice 4." },
  { start:16.67 , end: 19.11, text: "Écoute et entoure la bonne réponse." },
  { start:23.6 , end: 25.5, text: "Léo et Yvette sont des touristes." },
  { start:26.0 , end: 29.0, text: "Ils viennent à Marseille et ils essayent de trouver leur chemin." },
  { start:31.2 , end: 31.9, text: "Nous sommes ici," },
  { start:32.3 , end: 33.8, text: "à Sainte-Marguerite-Dromel." },
  { start:34.7 , end: 36.1, text: "Pour aller à l'hôtel de ville," },
  { start:36.1 , end: 40.66, text: "nous devons prendre la ligne rouge du métro jusqu'à la station Castellane." },
  { start:41.2 , end: 41.40, text: "Puis," },
  { start:41.40 , end: 44.6, text: "nous devons prendre la ligne de tram jaune et" },
  { start:45.7 , end: 46.0, text: "Mais non," },
  { start:46.0 , end: 46.6, text: "regarde," },
  { start:46.6 , end: 48.8, text: "la ligne jaune ne passe pas devant notre hôtel." },
  { start:49.2 , end: 52.9, text: "Nous devons prendre la ligne rouge du métro et à la station Castellane," },
  { start:53.0 , end: 55.1, text: "nous devons prendre la ligne bleue du métro." },
  { start:56.52 , end: 56.86, text: "C'est ça," },
  { start:56.86 , end: 57.80, text: "tu as raison." },
  { start:57.80 , end: 58.70, text: "Allons-y." },

  
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
              style={{ overflow: "visible" , position:"absolute",top:"8.0%",left:"46.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 94 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"64.5%",left:"29.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 95 })}
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
