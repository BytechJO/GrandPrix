import React from "react";
import page_1 from "../../../assets/unite8pages/168.png"
import page5_CD2 from "../../../assets/U8Audio/u8scq3.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 5.33, end: 9.85, text: "Grand Prix A1, unité 8, la technologie." },
  { start: 10.09, end: 14.75, text: "Section C, l'Internet. Exercice 3." },
  { start: 14.79, end: 17.07, text: "Écoute le dialogue et réponds" },
  { start: 17.07, end: 18.57, text: "aux questions." },

  { start: 19.69, end: 21.65, text: "Bonjour, je fais une enquête" },
  { start: 21.65, end: 23.99, text: "sur Internet pour le journal Mon âge." },
  { start: 23.99, end: 25.27, text: "Est-ce que vous pouvez" },
  { start: 25.27, end: 26.71, text: "répondre à quelques questions," },
  { start: 26.71, end: 29.47, text: "s'il vous plaît? Euh, d'accord." },

  { start: 29.53, end: 31.59, text: "Comment vous appelez-vous?" },
  { start: 31.79, end: 33.53, text: "Je m'appelle Monique." },

  { start: 33.53, end: 36.27, text: "Est-ce que vous avez un ordinateur?" },
  { start: 36.27, end: 38.77, text: "Non, mais j'ai une tablette." },

  { start: 38.93, end: 40.73, text: "Et est-ce que vous allez" },
  { start: 40.73, end: 42.23, text: "souvent sur Internet?" },

  { start: 42.37, end: 44.33, text: "Ah, entre deux heures et" },
  { start: 44.33, end: 45.83, text: "trois heures par jour." },

  { start: 46.17, end: 48.03, text: "Que faites-vous sur Internet?" },
  { start: 48.15, end: 50.09, text: "J'écoute de la musique, je" },
  { start: 50.09, end: 51.83, text: "regarde des films, je chatte" },
  { start: 51.83, end: 53.47, text: "avec mes amis, je télécharge" },
  { start: 53.47, end: 54.85, text: "des documents." },

  { start: 54.85, end: 57.21, text: "Bon, est-ce que vous aimez" },
  { start: 57.21, end: 58.49, text: "les publicités?" },

  { start: 58.49, end: 60.47, text: "Non, elles apparaissent tout à" },
  { start: 60.47, end: 61.55, text: "coup et elles ne contiennent" },
  { start: 61.55, end: 62.73, text: "pas d'informations utiles." },

  { start: 62.73, end: 64.23, text: "Sous-titrage Société Radio-Canada" },
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
              style={{ overflow: "visible" , position:"absolute",top:"11.5%",left:"7.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 227 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"18.5%",left:"7.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 228 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"26.0%",left:"7.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 229 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"37.5%",left:"7.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 230 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"46.5%",left:"7.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 231 })}
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
