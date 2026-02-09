import React from "react";
import page_1 from "../../../assets/unite8pages/160.png"
import page5_CD2 from "../../../assets/U8Audio/u8saq3.mp3";
import page5_CD3 from "../../../assets/U8Audio/u8saq4.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 5.33, end: 10.41, text: "Grand Prix A1, unité 8, la technologie." },
  { start: 10.41, end: 15.25, text: "Section A, les gadgets. Exercice 3." },
  { start: 15.35, end: 17.95, text: "Écoute le dialogue et entoure" },
  { start: 17.95, end: 19.45, text: "la bonne réponse." },

  { start: 20.74, end: 23.84, text: "Salut Paul, comment ça va ?" },
  { start: 23.84, end: 27.52, text: "Bien, merci, et toi ? Pas mal." },
  { start: 27.52, end: 28.50, text: "Qu'est-ce que tu as" },
  { start: 28.50, end: 30.80, text: "fait la semaine dernière ?" },

  { start: 30.80, end: 32.74, text: "Au samedi, j'ai écouté de la" },
  { start: 32.74, end: 33.98, text: "musique avec mes nouveaux" },
  { start: 33.98, end: 35.48, text: "écouteurs sans fil." },

  { start: 35.58, end: 37.02, text: "Puis, j'ai lu un roman" },
  { start: 37.02, end: 38.50, text: "intéressant sur ma liseuse." },

  { start: 38.50, end: 40.02, text: "Et dimanche, mon frère et" },
  { start: 40.02, end: 41.20, text: "moi, nous avons joué à la" },
  { start: 41.20, end: 42.76, text: "console de jeux vidéo." },

  { start: 43.24, end: 45.74, text: "Tu as une console de jeux vidéo ?" },
  { start: 45.74, end: 47.48, text: "Oui. Est-ce que tu veux venir" },
  { start: 47.48, end: 49.54, text: "chez moi aujourd'hui pour jouer ?" },

  { start: 50.12, end: 51.62, text: "Bien sûr." },
  { start: 51.78, end: 54.98, text: "Bon, à 16h. Mais attends," },
  { start: 54.98, end: 56.02, text: "qu'est-ce que tu as fait la" },
  { start: 56.02, end: 57.52, text: "semaine dernière ?" },
];
const captionsExample2 = [
  { start: 5.33, end: 10.41, text: "Grand Prix A1, unité 8, la technologie." },
  { start: 10.41, end: 15.21, text: "Section A, les gadgets. Exercice 4." },
  { start: 15.21, end: 17.17, text: "Écoute le reste de la" },
  { start: 17.17, end: 20.53, text: "conversation et écris la bonne réponse." },

  { start: 21.62, end: 24.30, text: "Alors, samedi, rien de nouveau." },
  { start: 24.30, end: 26.42, text: "Mais dimanche, je suis allé" },
  { start: 26.42, end: 28.06, text: "au magasin d'électronique et" },
  { start: 28.06, end: 29.22, text: "j'ai acheté un drone." },

  { start: 29.22, end: 31.14, text: "Puis, je suis allé au parc" },
  { start: 31.14, end: 32.88, text: "et j'ai pris quelques photos." },

  { start: 33.22, end: 35.62, text: "Combien ce drone a coûté ?" },
  { start: 36.10, end: 38.98, text: "Avec la promotion, 400 euros." },
  { start: 39.48, end: 40.98, text: "C'est un bon prix." },
  { start: 40.98, end: 43.46, text: "Mais pourquoi tu as besoin d'un drone ?" },
  { start: 43.70, end: 46.58, text: "Je veux faire une carte 3D du parc." },
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
            <AudioWithCaption src={page5_CD3}  captions={captionsExample2} />
          )
        }
      >
      </div>
        <div
            className="Click -icon-CD-page5 hover:scale-110 transition"
              style={{ overflow: "visible" , position:"absolute",top:"7.5%",left:"57.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 217 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"38.0%",left:"68.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 218 })}
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
