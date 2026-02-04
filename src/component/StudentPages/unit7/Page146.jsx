import React from "react";
import page_1 from "../../../assets/unite7pages/146.png"
import page5_CD2 from "../../../assets/U7Audio/u7scq3.mp3";
import page5_CD3 from "../../../assets/U7Audio/u7scq4.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 5.359, end: 8.409, text: "Grand Prix A1, Unité 7," },
  { start: 8.409, end: 11.159, text: "Les loisirs. Section C," },
  { start: 11.160, end: 12.689, text: "Mes vacances." },

  { start: 12.689, end: 14.809, text: "Exercice 3." },
  { start: 14.809, end: 17.259, text: "Écoute et écris l'information" },
  { start: 17.259, end: 18.600, text: "manquante." },

  { start: 20.600, end: 22.739, text: "Salut Ruby, comment ça va ?" },
  { start: 22.739, end: 25.439, text: "Salut, ça va bien, merci." },

  { start: 25.439, end: 27.140, text: "Où est-ce que tu es allé" },
  { start: 27.140, end: 28.679, text: "pendant tes vacances ?" },

  { start: 28.679, end: 31.819, text: "Je suis allé en Islande." },
  { start: 31.820, end: 32.889, text: "Ah bon ?" },
  { start: 32.889, end: 35.620, text: "J'y suis allée avec ma famille." },

  { start: 35.620, end: 36.789, text: "Qu'est-ce que tu as" },
  { start: 36.789, end: 37.979, text: "fait là-bas ?" },

  { start: 37.979, end: 39.730, text: "Nous avons logé dans un" },
  { start: 39.730, end: 41.159, text: "hôtel formidable." },

  { start: 41.160, end: 42.339, text: "J'ai vu beaucoup de choses" },
  { start: 42.340, end: 43.389, text: "intéressantes." },

  { start: 43.389, end: 44.550, text: "Nous avons exploré" },
  { start: 44.550, end: 45.959, text: "un parc national." },

  { start: 45.959, end: 47.169, text: "Nous avons visité une" },
  { start: 47.170, end: 48.589, text: "chute d'eau. Puis," },

  { start: 48.589, end: 49.890, text: "nous sommes allés observer les" },
  { start: 49.890, end: 51.890, text: "baleines et ma mère et moi avons" },
  { start: 51.890, end: 53.659, text: "nagé dans le lagon bleu." },

  { start: 53.659, end: 55.050, text: "Est-ce que tu as vu une" },
  { start: 55.050, end: 56.529, text: "aurore boréale ?" },

  { start: 56.529, end: 59.030, text: "Oui, c'est magnifique. Et toi," },
  { start: 59.030, end: 59.809, text: "qu'est-ce que tu as fait" },
  { start: 59.810, end: 60.859, text: "pendant tes vacances ?" },
];
const captionsExample2 = [
  { start: 5.379, end: 8.619, text: "Grand prix A1, unité sept," },
  { start: 8.619, end: 9.839, text: "les loisirs." },
  { start: 9.839, end: 12.749, text: "Section C, mes vacances." },

  { start: 12.750, end: 14.989, text: "Exercice quatre," },
  { start: 14.989, end: 16.389, text: "écoute le reste de la" },
  { start: 16.389, end: 18.269, text: "conversation et complète" },
  { start: 18.269, end: 20.319, text: "le tableau." },

  { start: 20.320, end: 21.599, text: "Ah," },
  { start: 21.599, end: 23.240, text: "je suis allé en Espagne dans une" },
  { start: 23.240, end: 24.099, text: "ville magnifique qui" },
  { start: 24.099, end: 25.729, text: "s'appelle Valencia." },

  { start: 25.730, end: 27.009, text: "J'y suis allé avec" },
  { start: 27.009, end: 28.530, text: "mon frère Alex." },

  { start: 28.530, end: 30.639, text: "Nous avons logé avec des amis." },
  { start: 30.639, end: 31.829, text: "Nous avons fait beaucoup" },
  { start: 31.830, end: 32.870, text: "de choses." },

  { start: 32.870, end: 34.799, text: "Nous avons nagé dans la mer et" },
  { start: 34.799, end: 36.150, text: "nous avons visité beaucoup" },
  { start: 36.150, end: 37.580, text: "de sites historiques." },

  { start: 37.580, end: 39.139, text: "Nous avons aussi mangé de la" },
  { start: 39.139, end: 40.999, text: "paella, leur spécialité." },

  { start: 41.000, end: 41.759, text: "Puis," },
  { start: 41.760, end: 43.400, text: "mon frère et moi avons regardé" },
  { start: 43.400, end: 44.819, text: "un match de football." },
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
          top: "42%", // عدّل حسب مكان الزر
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
              style={{ overflow: "visible" , position:"absolute",top:"7.5%",left:"49.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 195 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"44.4%",left:"66.0%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 196 })}
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
