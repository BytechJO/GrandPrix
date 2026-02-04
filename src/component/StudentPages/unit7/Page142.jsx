import React from "react";
import page_1 from "../../../assets/unite7pages/142.png"
import page5_CD2 from "../../../assets/U7Audio/u7sbq3.mp3";
import page5_CD3 from "../../../assets/U7Audio/u7sbq4.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 5.63, end: 6.75, text: "Rempris A1," },
  { start: 7.07, end: 8.01, text: "unité 7," },
  { start: 8.29, end: 8.95, text: "les loisirs." },
  { start: 9.93, end: 10.69, text: "Section B," },
  { start: 11.01, end: 11.59, text: "ma journée." },

  { start: 12.57, end: 13.50, text: "Exercice 3." },
  { start: 14.15, end: 15.23, text: "Écoute Charles" },
  { start: 15.61, end: 16.65, text: "qui parle de sa journée." },
  { start: 17.37, end: 19.09, text: "Écris l'heure de chaque activité." },

  { start: 21.53, end: 22.93, text: "Je me lève à 6h30." },
  { start: 22.93, end: 23.10, text: "Puis," },
  { start: 24.53, end: 25.59, text: "je me brosse les dents" },
  { start: 25.59, end: 27.05, text: "et je mets mon uniforme." },

  { start: 27.81, end: 28.37, text: "À 7h," },
  { start: 28.83, end: 30.75, text: "ma mère et moi prenons notre petit déjeuner." },
  { start: 31.55, end: 32.61, text: "Je prends des céréales" },
  { start: 32.61, end: 33.59, text: "et du jus d'orange." },
  { start: 34.23, end: 35.37, text: "Ma mère mange un sandwich." },

  { start: 36.32, end: 37.93, text: "Je vais à l'école à 7h20." },
  { start: 38.81, end: 41.29, text: "Mais non, attends, à 7h30." },

  { start: 42.37, end: 44.87, text: "À 3h, je rentre à la maison" },
  { start: 44.91, end: 46.05, text: "et je fais tout de suite mes devoirs," },
  { start: 46.59, end: 48.65, text: "parce que je veux les terminer avant le dîner." },

  { start: 49.65, end: 51.37, text: "Mon père rentre à la maison à 6h" },
  { start: 51.83, end: 52.39, text: "et nous dit non." },

  { start: 53.53, end: 55.17, text: "Notre dîner prend 30 minutes." },
  { start: 56.17, end: 56.97, text: "Alors, à 6h30," },
  { start: 56.97, end: 58.41, text: "je vais faire du sport." },
  { start: 59.27, end: 60.01, text: "Je joue au football." },

  { start: 61.05, end: 62.33, text: "Après, vers 8h moins le quart," },
  { start: 62.83, end: 64.13, text: "je bavarde avec mes amis." },

  { start: 65.63, end: 66.29, text: "à 10h15." },
];
const captionsExample2 = [
  { start: 5.599, end: 8.379, text: "Grand prix A1, unité sept," },
  { start: 8.380, end: 11.099, text: "les loisirs. Section B," },
  { start: 11.100, end: 12.279, text: "ma journée." },

  { start: 12.279, end: 14.659, text: "Exercice quatre." },
  { start: 14.659, end: 15.949, text: "Écoute encore une fois" },
  { start: 15.950, end: 17.479, text: "et complète le texte." },

  { start: 19.680, end: 20.760, text: "Je me lève à six heures" },
  { start: 20.760, end: 21.599, text: "et demie." },
  { start: 21.599, end: 22.519, text: "Puis," },
  { start: 22.519, end: 23.979, text: "je me brosse les dents et" },
  { start: 23.979, end: 25.869, text: "je mets mon uniforme." },

  { start: 25.870, end: 26.919, text: "À sept heures," },
  { start: 26.919, end: 27.930, text: "ma mère et moi prenons" },
  { start: 27.930, end: 29.319, text: "notre petit déjeuner." },

  { start: 29.320, end: 30.739, text: "Je prends des céréales" },
  { start: 30.739, end: 32.029, text: "et du jus d'orange." },
  { start: 32.030, end: 34.429, text: "Ma mère mange un sandwich." },

  { start: 34.429, end: 35.829, text: "Je vais à l'école à sept heures" },
  { start: 35.830, end: 38.589, text: "vingt. Mais non, attends," },
  { start: 38.589, end: 39.949, text: "à sept heures et demie." },

  { start: 39.950, end: 41.469, text: "À trois heures," },
  { start: 41.470, end: 43.119, text: "je rentre à la maison et je fais" },
  { start: 43.120, end: 44.870, text: "tout de suite mes devoirs parce" },
  { start: 44.870, end: 46.019, text: "que je veux les terminer" },
  { start: 46.019, end: 47.209, text: "avant le dîner." },

  { start: 47.209, end: 48.999, text: "Mon père rentre à la maison à" },
  { start: 49.000, end: 51.460, text: "six heures et nous dînons." },

  { start: 51.460, end: 52.629, text: "Notre dîner prend" },
  { start: 52.629, end: 53.919, text: "trente minutes." },

  { start: 53.919, end: 55.599, text: "Alors à six heures et demie," },
  { start: 55.599, end: 57.229, text: "je vais faire du sport." },
  { start: 57.230, end: 58.459, text: "Je joue au football." },

  { start: 58.459, end: 59.249, text: "Après," },
  { start: 59.250, end: 60.909, text: "vers huit heures moins le quart," },
  { start: 60.910, end: 62.899, text: "je bavarde avec mes amis." },

  { start: 62.899, end: 64.069, text: "Je me couche à dix" },
  { start: 64.070, end: 64.799, text: "heures et quart." },
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
              style={{ overflow: "visible" , position:"absolute",top:"8.0%",left:"79.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 190 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"45.0%",left:"53.2%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 191 })}
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
