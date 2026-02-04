import React from "react";
import page_1 from "../../../assets/unite7pages/138.png"
import page5_CD2 from "../../../assets/U7Audio/u7saq3.mp3";
import page5_CD3 from "../../../assets/U7Audio/u7saq4.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 5.50, end: 6.64, text: "Grand prix A1," },
  { start: 7.10, end: 8.12, text: "unité 7," },
  { start: 8.44, end: 8.94, text: "les loisirs." },
  { start: 9.76, end: 10.52, text: "Section A," },
  { start: 11.20, end: 11.86, text: "mes loisirs." },
  { start: 12.61, end: 13.54, text: "Exercice 3." },
  { start: 14.30, end: 16.42, text: "Écoute et complète le tableau." },

  { start: 18.70, end: 20.38, text: "Il y a beaucoup de choses que j'aime faire," },
  { start: 20.61, end: 22.58, text: "mais mon loisir préféré," },
  { start: 23.02, end: 23.38, text: "c'est la lecture." },
  { start: 24.36, end: 24.92, text: "J'adore lire," },
  { start: 25.66, end: 27.50, text: "découvrir des histoires intéressantes" },
  { start: 27.50, end: 28.10, text: "à chaque page." },
  { start: 28.98, end: 30.50, text: "Je lis chaque jour pendant deux heures." },
  { start: 31.26, end: 33.66, text: "C'est un loisir qui peut se pratiquer à l'intérieur" },
  { start: 34.08, end: 34.70, text: "ou en plein air." },

  { start: 36.99, end: 38.22, text: "Moi, j'aime bien être en" },
  { start: 38.22, end: 40.28, text: "plein air et découvrir des choses nouvelles." },
  { start: 40.80, end: 43.42, text: "Voilà pourquoi mon loisir préféré est la randonnée." },
  { start: 44.16, end: 46.74, text: "Je peux voir la beauté de la nature et des animaux." },
  { start: 47.07, end: 49.62, text: "Je fais de la randonnée le samedi avec mes amis." },

  { start: 51.54, end: 52.14, text: "J'adore l'eau." },
  { start: 52.86, end: 53.84, text: "J'aime la natation," },
  { start: 54.28, end: 55.44, text: "mais je préfère la pêche." },
  { start: 55.90, end: 57.00, text: "C'est mon loisir préféré." },
  { start: 57.90, end: 60.06, text: "J'aime le calme de l'eau et la nature." },
  { start: 60.60, end: 61.88, text: "J'aime attendre les poissons." },
  { start: 61.88, end: 64.98, text: "Je pêche toujours le dimanche avec mes frères." },
];
const captionsExample2 = [
  { start: 5.50, end: 6.64, text: "Grand Prix A1," },
  { start: 7.10, end: 8.10, text: "unité 7," },
  { start: 8.42, end: 8.90, text: "les loisirs." },
  { start: 9.76, end: 10.54, text: "Section A," },
  { start: 11.20, end: 11.90, text: "mes loisirs." },

  { start: 12.99, end: 13.86, text: "Exercice 4." },
  { start: 14.59, end: 15.93, text: "Écoute encore une fois" },
  { start: 16.32, end: 17.48, text: "et complète les phrases." },

  { start: 19.68, end: 21.32, text: "Il y a beaucoup de choses que j'aime faire," },
  { start: 21.60, end: 23.54, text: "mais mon loisir préféré," },
  { start: 23.90, end: 24.60, text: "c'est la lecture." },
  { start: 25.38, end: 26.00, text: "J'adore lire," },
  { start: 26.66, end: 28.42, text: "découvrir des histoires intéressantes" },
  { start: 28.46, end: 29.08, text: "à chaque page." },
  { start: 29.98, end: 31.48, text: "Je lis chaque jour pendant deux heures." },
  { start: 32.26, end: 34.68, text: "C'est un loisir qui peut se pratiquer à l'intérieur" },
  { start: 35.04, end: 38.26, text: "ou en plein air ?" },

  { start: 38.26, end: 39.68, text: "Moi, j'aime bien être en plein air" },
  { start: 39.68, end: 41.32, text: "et découvrir des choses nouvelles." },
  { start: 41.80, end: 44.44, text: "Voilà pourquoi mon loisir préféré est la randonnée." },
  { start: 45.15, end: 47.76, text: "Je peux voir la beauté de la nature et des animaux." },
  { start: 48.03, end: 50.60, text: "Je fais de la randonnée le samedi avec mes amis." },

  { start: 52.54, end: 53.06, text: "J'adore l'eau." },
  { start: 53.78, end: 54.86, text: "J'aime la natation," },
  { start: 55.26, end: 56.44, text: "mais je préfère la pêche." },
  { start: 56.86, end: 58.04, text: "C'est mon loisir préféré." },
  { start: 58.88, end: 61.06, text: "J'aime le calme de l'eau et la nature." },
  { start: 61.58, end: 62.88, text: "J'aime attendre les poissons." },
  { start: 63.61, end: 65.83, text: "Je pêche toujours le dimanche avec mes frères." },
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
          top: "40%", // عدّل حسب مكان الزر
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
              style={{ overflow: "visible" , position:"absolute",top:"7.5%",left:"41.0%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 186 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"42.0%",left:"56.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 187 })}
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
