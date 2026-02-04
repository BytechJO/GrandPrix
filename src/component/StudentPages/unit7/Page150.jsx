import React from "react";
import page_1 from "../../../assets/unite7pages/150.png"
import page5_CD2 from "../../../assets/U7Audio/u7sdq3.mp3";
import page5_CD3 from "../../../assets/U7Audio/u7sdq4.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 5.339, end: 8.339, text: "Grand Prix A1, unité sept," },
  { start: 8.340, end: 10.880, text: "les loisirs, section D," },
  { start: 10.880, end: 14.049, text: "autour du monde. Exercice trois." },

  { start: 14.049, end: 16.259, text: "Écoute le dialogue et entoure" },
  { start: 16.259, end: 17.260, text: "la bonne réponse." },

  { start: 19.319, end: 20.939, text: "Salut, comment ça va ?" },
  { start: 20.940, end: 22.839, text: "Très bien, merci." },

  { start: 22.840, end: 24.599, text: "Je t'ai téléphoné hier," },
  { start: 24.599, end: 26.449, text: "mais personne n'a répondu." },

  { start: 26.450, end: 27.749, text: "Avec ma famille," },
  { start: 27.750, end: 29.589, text: "nous sommes allés à un festival." },

  { start: 29.590, end: 31.729, text: "Quel festival ?" },
  { start: 31.730, end: 33.439, text: "Un festival du chocolat qui" },
  { start: 33.440, end: 35.359, text: "s'appelle le Salon du chocolat." },

  { start: 35.359, end: 36.269, text: "Bon," },
  { start: 36.269, end: 37.360, text: "dis-moi quelque chose sur" },
  { start: 37.360, end: 39.550, text: "ce festival. Alors," },

  { start: 39.550, end: 40.640, text: "il a commencé à six heures" },
  { start: 40.640, end: 42.020, text: "avec un défilé de mode." },

  { start: 42.020, end: 43.099, text: "Les mannequins portent des" },
  { start: 43.099, end: 44.620, text: "vêtements en chocolat." },

  { start: 44.620, end: 46.939, text: "Des vêtements en chocolat ?" },
  { start: 46.939, end: 47.839, text: "Oui," },
  { start: 47.840, end: 49.569, text: "des vêtements faits en chocolat." },

  { start: 49.569, end: 49.809, text: "Et puis," },
  { start: 49.809, end: 50.690, text: "nous avons goûté beaucoup" },
  { start: 50.690, end: 52.140, text: "de chocolats différents." },

  { start: 52.140, end: 53.419, text: "C'est bien." },
];
const captionsExample2 = [
  { start: 5.339, end: 8.349, text: "Grand prix A1, unité 7." },
  { start: 8.350, end: 10.659, text: "Les loisirs. Section D." },
  { start: 10.660, end: 12.110, text: "Autour du monde." },

  { start: 12.110, end: 13.809, text: "Exercice 4." },
  { start: 13.809, end: 15.329, text: "Écoute le reste de la" },
  { start: 15.330, end: 17.190, text: "conversation et réponds" },
  { start: 17.190, end: 19.109, text: "aux questions." },

  { start: 19.109, end: 20.289, text: "Et toi," },
  { start: 20.290, end: 21.929, text: "qu'est-ce que tu as fait hier ?" },

  { start: 21.929, end: 23.660, text: "Mes grands-parents sont venus" },
  { start: 23.660, end: 24.729, text: "nous rendre visite." },
  { start: 24.729, end: 26.359, text: "Nous avons dîné ensemble." },
  { start: 26.359, end: 28.220, text: "Et puis j'ai fait mes devoirs." },

  { start: 28.220, end: 30.839, text: "Qu'est-ce que tu as mangé ?" },
  { start: 30.839, end: 32.560, text: "Nous avons mangé du riz avec de" },
  { start: 32.560, end: 34.599, text: "la viande et de la salade." },

  { start: 34.600, end: 35.740, text: "Et à quelle heure tu" },
  { start: 35.740, end: 36.909, text: "t'es couchée ?" },
  { start: 36.910, end: 38.759, text: "Vers dix heures trente." },
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
              style={{ overflow: "visible" , position:"absolute",top:"7.9%",left:"57.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 200 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"44.0%",left:"67.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 201 })}
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
