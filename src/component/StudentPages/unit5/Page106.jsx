import React from "react";
import page_1 from "../../../assets/unite5pages/106.png"
import page5_CD2 from "../../../assets/U5Audio/u5sde3.mp3";
import page5_CD22 from "../../../assets/U5Audio/u5sdq4.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start: 5.44, end: 6.40, text: "Rempris à un," },
  { start: 7.07, end: 8.44, text: "unité 5," },
  { start: 8.80, end: 9.44, text: "les repas." },

  { start: 10.91, end: 11.48, text: "Section D," },
  { start: 12.29, end: 12.96, text: "au restaurant." },
  { start: 14.24, end: 15.32, text: "Exercice 3." },

  { start: 15.87, end: 16.94, text: "Écoute et" },
  { start: 17.04, end: 18.56, text: "complète le dialogue en" },
  { start: 18.56, end: 20.16, text: "utilisant les mots proposés." },

  { start: 22.27, end: 23.02, text: "Bonjour mesdames," },
  { start: 23.36, end: 24.28, text: "bienvenue à Dupois." },

  { start: 25.84, end: 26.06, text: "Bonjour," },
  { start: 26.30, end: 27.80, text: "pouvez-vous nous apporter le menu ?" },

  { start: 29.18, end: 29.96, text: "Avez-vous choisi ?" },

  { start: 31.06, end: 31.26, text: "Oui," },
  { start: 31.54, end: 32.06, text: "comme entrée," },
  { start: 32.06, end: 33.38, text: "je voudrais une salade verte." },

  { start: 33.76, end: 34.12, text: "Et toi," },
  { start: 34.12, end: 34.78, text: "Nicolette ?" },

  { start: 35.82, end: 37.04, text: "Je ne mange pas assez de légumes," },
  { start: 37.04, end: 37.70, text: "alors je voudrais une" },
  { start: 37.70, end: 38.78, text: "salade de chèvre chaud." },

  { start: 39.97, end: 40.52, text: "Bien sûr." },

  { start: 40.93, end: 41.60, text: "Qu'est-ce que vous voulez" },
  { start: 41.60, end: 42.58, text: "comme plat principal ?" },

  { start: 42.58, end: 44.64, text: "Je ne mange pas" },
  { start: 44.64, end: 45.38, text: "beaucoup de poissons," },
  { start: 45.64, end: 46.60, text: "donc je voudrais le poisson." },

  { start: 48.16, end: 49.58, text: "Moi, j'ai mangé trop de poissons hier," },
  { start: 49.58, end: 50.92, text: "donc je voudrais la viande." },

  { start: 52.10, end: 52.66, text: "La viande," },
  { start: 52.66, end: 52.73, text: "oui." },

  { start: 53.58, end: 55.16, text: "Voulez-vous boire quelque chose ?" },

  { start: 55.16, end: 57.22, text: "De l'eau minérale," },
  { start: 57.22, end: 57.82, text: "s'il vous plaît." },

  { start: 58.88, end: 59.98, text: "Je préfère un jus d'orange." },

  { start: 61.24, end: 61.52, text: "C'est tout ?" },
  { start: 62.64, end: 63.20, text: "Oui, merci." },

  { start: 63.68, end: 64.00, text: "C'est tout." },

  { start: 64.83, end: 65.49, text: "Qu'est-ce" },
  { start: 65.51, end: 66.67, text: "que vous voulez comme dessert ?" },

  { start: 68.03, end: 68.79, text: "Je voudrais un peu de" },
  { start: 68.79, end: 69.69, text: "glace à la vanille." },

  { start: 70.81, end: 71.03, text: "Moi," },
  { start: 71.03, end: 71.87, text: "je voudrais une mousse au" },
  { start: 71.87, end: 72.75, text: "chocolat et un café." },

  { start: 73.89, end: 74.43, text: "L'addition," },
  { start: 74.43, end: 74.97, text: "s'il vous plaît." },

  { start: 76.00, end: 76.23, text: "Oui," },
  { start: 76.23, end: 76.85, text: "tout de suite." }
];
const captionsExample2 = [
  { start: 5.44, end: 6.52, text: "Rempris à 1," },

  { start: 7.07, end: 8.50, text: "unité 5," },
  { start: 8.80, end: 9.42, text: "les repas." },

  { start: 10.81, end: 11.35, text: "Section D," },
  { start: 12.20, end: 12.86, text: "au restaurant." },

  { start: 14.14, end: 15.06, text: "Exercice 4." },

  { start: 15.65, end: 17.90, text: "Écoute et écris la bonne réponse." },

  { start: 20.36, end: 22.06, text: "Je voudrais des pâtes avec" },
  { start: 22.10, end: 22.90, text: "du jus d'orange." },

  { start: 25.05, end: 25.60, text: "Comme entrée," },
  { start: 25.60, end: 26.62, text: "je voudrais des rouleaux" },
  { start: 26.62, end: 27.24, text: "de fruits de mer" },
  { start: 27.54, end: 28.28, text: "et comme boisson," },

  { start: 31.00, end: 32.92, text: "Je voudrais une salade verte" },
  { start: 33.19, end: 34.33, text: "puis de la ratatouille" },
  { start: 34.39, end: 35.35, text: "avec du jus de raisin." },

  { start: 36.00, end: 36.71, text: "Comme dessert," },
  { start: 37.07, end: 38.43, text: "je voudrais une tarte aux" },
  { start: 38.43, end: 39.93, text: "pommes avec un café noir." },

  { start: 41.99, end: 43.43, text: "Je voudrais une crème brûlée" },
  { start: 43.43, end: 44.45, text: "avec un café au lait." },

  { start: 44.45, end: 45.20, text: "de l'eau minérale." }
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
          top: "5%", // عدّل حسب مكان الزر
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
          top: "58%", // عدّل حسب مكان الزر
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
              style={{ overflow: "visible" , position:"absolute",top:"6.9%",left:"70.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 140 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"59.0%",left:"43.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 141 })}
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
