import React from "react";
import page_1 from "../../../assets/unite5pages/101.png"
import page5_CD2 from "../../../assets/U5Audio/u5sce1.mp3";
import page5_CD22 from "../../../assets/U5Audio/u5sce2.mp3";
import page5_CD23 from "../../../assets/U5Audio/u5sce4.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start:5.25 , end: 6.75, text: "Grand prix A1," },
  { start:6.75 , end: 9.9, text: "unité 5, les repas" },
  { start:9.9 , end: 11.79, text: "Section C" },
  { start:11.79 , end: 14.147, text: "les repas en famille." },
  { start:14.147 , end: 15.95, text: "Exercice 1" },
  { start:15.95 , end: 18.25, text: "écoute et dis la liste" },
  { start:18.25 , end: 18.79, text: "de courses." },
  { start:21.037 , end: 22.327, text: "Il n'y a pas de viande." },
  { start:22.327 , end: 23.877, text: "Il n'y a pas de poisson." },
  { start:23.877 , end: 25.477, text: "Il n'y a pas de poulet." },
  { start:25.477 , end: 27.317, text: "Il n'y a pas de saucisse." },
  { start:27.3 , end: 29.7, text: "Il n'y a pas de fromage." },
  { start:29.7 , end: 30.7, text: "Il n'y a pas d'œuf." },
  { start:30.7 , end: 32.5, text: "Il n'y a pas de riz." },
  { start:32.5 , end: 34.3, text: "Il n'y a pas d'huile." },
  { start:34.3 , end: 36.5, text: "Il n'y a pas d'eau minérale." },
  { start:36.5 , end: 38.052, text: "Il n'y a pas de pête." },

  
  
];
const captionsExample2= [
  { start:5.3 , end: 8.8, text: "Grand prix A1, unité 5," },
  { start:8.8 , end: 11.9, text: "les repas. Section C," },
  { start:11.9 , end: 14.11, text: "les repas en famille." },
  { start:14.12 , end: 15.96, text: "Exercice 2" },
  { start:15.96 , end: 17.9, text: "écoute et écris ce que" },
  { start:17.9 , end: 19.11, text: "l'homme doit acheter." },
  { start:21.5 , end: 23.0, text: "Je dois acheter" },
  { start:23.0 , end: 26.0, text: "un paquet de pâtes," },
  { start:26.0 , end: 28.8, text: "deux bouteilles d'eau minérale," },
  { start:28.8 , end: 30.19, text: "quatre œufs," },
  { start:30.20 , end: 33.129, text: "un morceau de fromage," },
  { start:33.129 , end: 35.2, text: "un kilo de saucisses," },
  { start:35.2 , end: 38.2, text: "deux cents grammes de poisson," },
  { start:38.2 , end: 40.039, text: "un poulet," },
  { start:40.039 , end: 41.9, text: "une bouteille d'huile," },
  { start:41.950 , end: 43.619, text: "deux briques de lait." },


  
  
];
const captionsExample3= [
  { start:5.38 , end: 6.8, text: "Grand prix A1," },
  { start:6.8 , end: 12.2, text: "unité 5, les repas. Section C," },
  { start:12.2 , end: 14.5, text: "les repas en famille." },
  { start:14.5 , end: 16.2, text: "Exercice 4." },
  { start:16.2 , end: 18.4, text: "Écoute et écris combien de" },
  { start:18.4 , end: 20.4, text: "grammes, kilogrammes," },
  { start:20.4 , end: 22.059, text: "de chaque ingrédient il faut" },
  { start:22.060 , end: 23.5, text: "acheter pour faire le gâteau." },
  { start:25.5 , end: 27.1, text: "Nous n'avons pas de beurre," },
  { start:27.1 , end: 29.2, text: "d'œufs et de farine." },
  { start:29.2 , end: 30.4, text: "Pour faire le gâteau," },
  { start:30.4 , end: 31.8, text: "nous devons acheter 200" },
  { start:31.8 , end: 33.049, text: "grammes de beurre," },
  { start:33.050 , end: 34.6, text: "quatre œufs et 500 grammes" },
  { start:34.6 , end: 35.7, text: "de farine." },
 



  
  
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
          top: "12%", // عدّل حسب مكان الزر
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
          top: "50%", // عدّل حسب مكان الزر
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
          top: "50%", // عدّل حسب مكان الزر
          left: "45%", // عدّل حسب مكان الزر
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
              style={{ overflow: "visible" , position:"absolute",top:"52.9%",left:"24.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 135 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"55.0%",left:"82.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 136 })}
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
