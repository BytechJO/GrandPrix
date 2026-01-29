import React from "react";
import page_1 from "../../../assets/unite6pages/124.png"
import page5_CD2 from "../../../assets/U6Audio/u6scq3.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 5.41, end: 6.47, text: "Rempris A1," },
  { start: 6.88, end: 7.83, text: "unité 6," },
  { start: 8.19, end: 8.67, text: "le temps," },
  { start: 9.50, end: 10.21, text: "section C," },
  { start: 10.67, end: 11.21, text: "les sports," },
  { start: 11.74, end: 12.86, text: "exercice 3." },
  { start: 13.53, end: 16.99, text: "Écoute le dialogue et écris l'information manquante." },

  { start: 22.14, end: 22.89, text: "Salut Gustave," },
  { start: 22.93, end: 23.59, text: "comment ça va ?" },
  { start: 24.75, end: 25.29, text: "Salut Dylan," },
  { start: 25.66, end: 26.30, text: "bien et toi ?" },
  { start: 27.53, end: 28.27, text: "Pas mal, merci." },
  { start: 28.27, end: 30.04, text: "Qu'est-ce que tu fais aujourd'hui ?" },
  { start: 31.43, end: 32.39, text: "Rien, pourquoi ?" },

  { start: 33.73, end: 34.69, text: "Marie va jouer au golf," },
  { start: 34.95, end: 36.53, text: "alors nous pouvons regarder le match de basket." },
  { start: 37.07, end: 39.07, text: "D'accord." },
  { start: 39.37, end: 40.97, text: "À quelle heure ?" },
  { start: 40.97, end: 41.45, text: "À deux heures." },

  { start: 41.85, end: 44.27, text: "Et nous pouvons faire quelque chose après, si tu veux." },
  { start: 45.44, end: 45.87, text: "Bien sûr." },
  { start: 46.47, end: 47.17, text: "J'ai une idée." },
  { start: 47.71, end: 49.49, text: "Mes amis vont jouer au basket à cinq heures." },
  { start: 49.87, end: 51.31, text: "Et si tu veux, nous pouvons y aller." },

  { start: 52.55, end: 52.75, text: "Bon." },
  { start: 52.75, end: 54.45, text: "Je te vois à deux heures chez moi." },
  { start: 55.68, end: 56.71, text: "D'accord. À bientôt." }
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
              style={{ overflow: "visible" , position:"absolute",top:"8.0%",left:"60.9%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 165 })}
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
