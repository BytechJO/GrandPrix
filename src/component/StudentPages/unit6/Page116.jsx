import React from "react";
import page_1 from "../../../assets/unite6pages/116.png"
import page5_CD2 from "../../../assets/U6Audio/u6saq5.mp3";
import page5_CD22 from "../../../assets/U6Audio/u6saq6.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 5.53, end: 6.55, text: "Rempris A1," },
  { start: 6.94, end: 7.89, text: "unité 6," },
  { start: 8.45, end: 8.83, text: "le temps," },
  { start: 9.57, end: 10.23, text: "section A." },
  { start: 11.07, end: 13.09, text: "Quel temps fait-il ?" },
  { start: 13.09, end: 14.20, text: "Exercice 5." },
  { start: 14.56, end: 16.97, text: "Écoute le dialogue et écris" },
  { start: 16.97, end: 17.93, text: "l'information manquante." },

  { start: 22.81, end: 23.55, text: "Bonjour Claire," },
  { start: 23.87, end: 24.47, text: "comment ça va ?" },
  { start: 25.65, end: 26.37, text: "Salut Antoine," },
  { start: 26.37, end: 27.55, text: "ça va bien et toi ?" },
  { start: 28.93, end: 29.15, text: "Bien," },
  { start: 29.15, end: 29.63, text: "merci." },
  { start: 30.15, end: 31.85, text: "Je vais à la gare pour aller à Paris." },
  { start: 33.98, end: 34.11, text: "Ah," },
  { start: 34.11, end: 35.19, text: "c'est formidable !" },
  { start: 35.19, end: 36.06, text: "À quelle heure est ton train ?" },
  { start: 37.13, end: 37.65, text: "À 9h." },
  { start: 38.27, end: 39.79, text: "Et j'arrive à Paris à midi." },
  { start: 41.25, end: 41.39, text: "Bon," },
  { start: 41.39, end: 42.65, text: "mais il pleut aujourd'hui." },
  { start: 42.65, end: 43.89, text: "N'oublie pas ton parapluie." },
  { start: 43.95, end: 45.71, text: "Pfff !" },
  { start: 45.71, end: 47.35, text: "Il fait beau à Marseille aujourd'hui." },
  { start: 48.61, end: 50.25, text: "À bientôt !" },
  { start: 50.25, end: 50.77, text: "À plus !" }
];
const captionsExample2 = [
  { start: 5.53, end: 6.57, text: "Rempris A1," },
  { start: 6.94, end: 7.97, text: "unité 6," },
  { start: 8.45, end: 8.87, text: "le temps." },
  { start: 9.57, end: 10.30, text: "Section A." },
  { start: 11.07, end: 12.19, text: "Quel temps fait-il ?" },
  { start: 12.95, end: 13.95, text: "Exercice 6." },
  { start: 14.33, end: 16.55, text: "Écoute et écris la bonne réponse." },

  { start: 19.04, end: 19.65, text: "Aujourd'hui," },
  { start: 19.83, end: 20.77, text: "c'est le 16 avril." },

  { start: 21.05, end: 22.85, text: "Mauvais temps dans l'est de la France" },
  { start: 22.95, end: 24.45, text: "avec de la pluie à Lyon," },
  { start: 24.91, end: 26.29, text: "de la neige à Grenoble" },
  { start: 26.29, end: 27.59, text: "et du vent à Strasbourg." },
  { start: 28.61, end: 31.25, text: "La température dans cette région est de 10 degrés." },

  { start: 31.95, end: 32.53, text: "Dans l'ouest," },
  { start: 32.69, end: 33.31, text: "à Bordeaux," },
  { start: 33.31, end: 34.39, text: "il y a du soleil." },
  { start: 34.62, end: 35.87, text: "Il fait 28 degrés." },

  { start: 36.29, end: 37.53, text: "Dans le sud de la France," },
  { start: 37.59, end: 38.39, text: "il fait chaud," },
  { start: 38.39, end: 39.53, text: "surtout à Toulouse." },
  { start: 39.77, end: 41.13, text: "Il fait 27 degrés." },

  { start: 41.75, end: 42.39, text: "Dans le nord," },
  { start: 42.39, end: 44.03, text: "le temps est mauvais" },
  { start: 44.03, end: 45.27, text: "et il y a de la neige à Roubaix." },
  { start: 45.27, end: 46.69, text: "Il fait moins 5 degrés." }
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
          top: "35%", // عدّل حسب مكان الزر
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
          top: "59%", // عدّل حسب مكان الزر
          left: "2%", // عدّل حسب مكان الزر
          cursor: "pointer",
          width: "50px", height: "50px",
      
    
       
        }}
        onClick={() =>
          openPopup(
            "audio",
            <AudioWithCaption src={page5_CD22}  captions={captionsExample2} />
          )
        }
      >
      </div>
      
   
 

   
        <div
            className="Click -icon-CD-page5 hover:scale-110 transition"
              style={{ overflow: "visible" , position:"absolute",top:"37.0%",left:"61.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 158 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"61.5%",left:"43.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 159 })}
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
