import React from "react";
import page_1 from "../../../assets/unite4pages/84.png"
import page5_CD2 from "../../../assets/U4Audio/U4SDQ3.mp3";
import page5_CD3 from "../../../assets/U4Audio/U4SDQ4.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start:5.18 , end: 6.36, text: "Rempris A1," },
  { start:6.85 , end: 8.0, text: "unité 4," },
  { start:8.38 , end: 8.80, text: "en ville." },
  { start:9.63 , end: 10.28, text: "Section D." },
  { start:11.13 , end: 11.34, text: "Cannes," },
  { start:11.97 , end: 13.32, text: "une ville de cinéma." },
  { start:13.89 , end: 15.06, text: "Exercice 3." },
  { start:15.77 , end: 18.62, text: "Écoute et écris l'information manquante." },
  { start:21.02 , end: 21.80, text: "Excusez-moi," },
  { start:21.80 , end: 22.08, text: "monsieur." },
  { start:23.16, end: 23.74, text: "Pas de problème." },
  { start:25.02 , end: 27.00, text: "Je cherche le musée de la Castre." },
  { start:28.34 , end: 29.62, text: "Vous devez aller tout droit," },
  { start:29.62 , end: 31.12, text: "puis tourner à gauche," },
  { start:31.55 , end: 34.66, text: "traverser la rue et le musée est au coin de la rue Rose." },
  { start:35.18 , end: 37.34, text: "« Merci beaucoup pour votre aide." },
  { start:38.66 , end: 39.00, text: "« De rien." },
  { start:41.52 , end: 41.9, text: "« Bonjour," },
  { start:41.9 , end: 42.68, text: "excusez-moi," },
  { start:42.68 , end: 42.96, text: "monsieur." },
  { start:44.30 , end: 44.86, text: "« Oui ?" },
  { start:45.68 , end: 46.88, text: "« Je cherche la croisette." },
  { start:48.30 , end: 48.34, text: "« Alors," },
  { start:48.34 , end: 49.90, text: "vous devez tourner à droite," },
  { start:50.40 , end: 51.64, text: "traverser la rue," },
  { start:51.42 , end: 52.46, text: "puis aller tout droit." },
  { start:53.42 , end: 54.48, text: "« Passez devant l'hôpital," },
  { start:54.48 , end: 57.64, text: "puis traversez la rue rouge et la croisette est là" },
  { start:58.84 , end: 59.30, text: "« Merci," },
  { start:59.30 , end: 59.72, text: "monsieur." },

];
const captionsExample2 = [
  { start:5.18 , end: 6.36, text: "Rempris A1," },
  { start:6.85 , end: 8.06, text: "unité 4," },
  { start:8.98 , end: 8.78, text: "en ville." },
  { start:9.63 , end: 10.30, text: "Section D." },
  { start:11.13 , end: 11.46, text: "Cannes," },
  { start:11.98 , end: 13.24, text: "une ville de cinéma." },
  { start:14.24 , end: 15.40, text: "Exercice 4." },
  { start:16.32 , end: 19.76, text: "Récoute l'exercice 3 et dessine le chemin." },
  { start:21.84 , end: 22.60, text: "Excusez-moi," },
  { start:22.60 , end: 22.88, text: "monsieur." },
  { start:23.94 , end: 24.46, text: "Pas de problème." },
  { start:25.86 , end: 27.76, text: "Je cherche le musée de la Castre." },
  { start:29.16 , end: 30.48, text: "Vous devez aller tout droit," },
  { start:30.66 , end: 31.96, text: "puis tourner à gauche" },
  { start:32.35 , end: 35.47, text: "Traversez la rue et le musée est au coin de la rue Rose." },
  { start:36.86 , end: 38.15, text: "Merci beaucoup pour votre aide." },
  { start:39.37 , end: 39.81, text: "De rien." },
  { start:42.01 , end: 42.49, text: "Bonjour," },
  { start:42.81 , end: 43.51, text: "excusez-moi," },
  { start:43.51 , end: 43.75, text: "monsieur." },
  { start:44.99 , end: 45.27, text: "Oui ?" },
  { start:46.29 , end: 47.67, text: "Je cherche la croisette." },
  { start:48.83 , end: 50.65, text: "Alors vous devez tourner à droite," },
  { start:51.19 , end: 52.25, text: "traverser la rue," },
  { start:52.25 , end: 53.49, text: "puis aller tout droit." },
  { start:54.03 , end: 55.27, text: "Passez devant l'hôpital," },
  { start:55.27 , end: 58.45, text: "puis traversez la rue Rouge et la croisette est là." },
  { start:59.67 , end: 60.13, text: "Merci," },
  { start:60.13 , end: 60.51, text: "monsieur." },
 
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
          top: "55%", // عدّل حسب مكان الزر
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
              style={{ overflow: "visible" , position:"absolute",top:"8%",left:"50.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 106 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"58.9%",left:"52.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 107 })}
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
