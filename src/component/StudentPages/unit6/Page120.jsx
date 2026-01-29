import React from "react";
import page_1 from "../../../assets/unite6pages/120.png"
import page5_CD2 from "../../../assets/U6Audio/u6sbq4.mp3";
import page5_CD22 from "../../../assets/U6Audio/u6sbq5.mp3";
import page5_CD23 from "../../../assets/U6Audio/u6sbq6.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 5.53, end: 6.57, text: "Rempris A1," },
  { start: 6.97, end: 7.95, text: "unité 6," },
  { start: 8.29, end: 8.79, text: "le temps." },
  { start: 9.53, end: 10.23, text: "Section B," },
  { start: 10.69, end: 11.37, text: "les saisons." },
  { start: 12.09, end: 13.15, text: "Exercice 4." },
  { start: 13.73, end: 16.31, text: "Écoute et entoure la bonne réponse." },

  { start: 18.59, end: 19.09, text: "Salut Eric," },
  { start: 19.09, end: 19.51, text: "ça va ?" },
  { start: 20.61, end: 21.55, text: "Pas mal, et toi ?" },
  { start: 22.81, end: 23.03, text: "Bien," },
  { start: 23.23, end: 23.61, text: "merci." },
  { start: 24.31, end: 25.09, text: "Qu'est-ce qui t'est arrivé ?" },
  { start: 26.49, end: 28.39, text: "Je suis trempé jusqu'aux os." },
  { start: 28.39, end: 30.27, text: "Quoi ?" },
  { start: 30.27, end: 30.75, text: "Il pleut ?" },
  { start: 31.95, end: 32.83, text: "Il pleut des cordes ?" },
  { start: 33.98, end: 36.35, text: "Mais aujourd'hui, c'est l'anniversaire de Nicolas !" },
  { start: 37.60, end: 39.16, text: "Tu as raison, j'avais oublié." }
];
const captionsExample2 = [
  { start: 5.53, end: 6.57, text: "Rempris A1," },
  { start: 6.97, end: 7.95, text: "unité 6," },
  { start: 8.29, end: 8.85, text: "le temps." },
  { start: 9.53, end: 10.23, text: "Section B," },
  { start: 10.69, end: 11.39, text: "les saisons." },
  { start: 12.09, end: 13.34, text: "Exercice 5." },
  { start: 13.92, end: 17.55, text: "Écoute le reste de la conversation et complète les phrases." },

  { start: 19.81, end: 21.39, text: "Il nous invite à le fêter avec lui." },
  { start: 22.65, end: 23.83, text: "Qu'est-ce que tu veux lui acheter ?" },
  { start: 25.09, end: 26.37, text: "Je pense à un gâteau." },
  { start: 27.71, end: 29.59, text: "Bon, où aura lieu la fête ?" },
  { start: 30.94, end: 32.17, text: "Dans le restaurant Bonjour." },
  { start: 32.17, end: 34.07, text: "À quelle heure ?" },
  { start: 35.33, end: 35.99, text: "À 8 heures." },
  { start: 36.61, end: 39.25, text: "Alors nous devons nous retrouver à 7 heures pour être à l'heure." },
  { start: 40.71, end: 41.93, text: "Quel bus devons-nous prendre ?" },
  { start: 41.93, end: 45.57, text: "Le bus numéro 3, puis le métro." }
];
const captionsExample3 = [
  { start: 5.53, end: 6.57, text: "Rempris A1," },
  { start: 6.97, end: 7.93, text: "unité 6," },
  { start: 8.29, end: 8.81, text: "le temps." },
  { start: 9.53, end: 10.25, text: "Section B," },
  { start: 10.69, end: 11.33, text: "les saisons." },
  { start: 12.29, end: 13.85, text: "Exercice 6." },
  { start: 14.43, end: 17.43, text: "Écoute la conversation et réponds aux questions." },

  { start: 19.71, end: 21.75, text: "Il est 7h30, nous sommes en retard." },
  { start: 22.30, end: 23.15, text: "Je dois lui téléphoner." },

  { start: 26.99, end: 27.23, text: "Allô," },
  { start: 27.79, end: 28.23, text: "salut Eric." },
  { start: 29.39, end: 29.97, text: "Salut Jean." },
  { start: 31.25, end: 31.87, text: "Où es-tu ?" },

  { start: 32.79, end: 34.87, text: "Nous sommes en retard." },
  { start: 34.87, end: 36.65, text: "Je suis désolé, mais je ne peux pas y aller aujourd'hui." },
  { start: 38.05, end: 38.45, text: "Pourquoi ?" },

  { start: 41.51, end: 43.81, text: "Je suis malade à cause de la pluie." },
  { start: 42.09, end: 43.81, text: "J'étais trempé jusqu'aux os aujourd'hui." }
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
          top: "40%", // عدّل حسب مكان الزر
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
          top: "60%", // عدّل حسب مكان الزر
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
        id="CD-1-page5"
        className="headset-icon-CD-page5 hover:scale-110 transition"
        style={{
          position: "absolute",
          top: "75%", // عدّل حسب مكان الزر
          left: "2%", // عدّل حسب مكان الزر
          cursor: "pointer",
          width: "50px", height: "50px",
    
       
        }}
        onClick={() =>
          openPopup(
            "audio",
            <AudioWithCaption src={page5_CD23}  captions={captionsExample3} />
          )
        }
      >
      </div>
        <div
            className="Click -icon-CD-page5 hover:scale-110 transition"
              style={{ overflow: "visible" , position:"absolute",top:"40.9%",left:"46.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 161 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"63.5%",left:"67.3%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 162 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"78.0%",left:"57.9%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 163 })}
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
