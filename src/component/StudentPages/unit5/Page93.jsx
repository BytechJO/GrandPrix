import React from "react";
import page_1 from "../../../assets/unite5pages/93.png"
import page5_CD2 from "../../../assets/U5Audio/u5saq1.mp3";
import page5_CD22 from "../../../assets/U5Audio/u5saq2.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start:5.1 , end: 6.7, text: "Grand prix A1" },
  { start:6.7 , end: 9.8, text: "unité 5, les repas" },
  { start:9.8 , end: 11.3, text: "section A" },
  { start:11.3 , end: 13.25, text: "le petit-déjeuner" },
  { start:13.25 , end: 15.14, text: "Exercice 1" },
  { start:15.14 , end: 16.30, text: "Écoute" },
  { start:16.30 , end: 18.7, text: "répète et écris le numéro" },
  { start:18.7 , end: 19.6, text: "correspondant." },
  { start:21.1 , end: 22.8, text: "A. Du café." },
  { start:24.48 , end: 26.282, text: "B. Du beurre." },
  { start:27.8 , end: 29.6, text: "C. Du jus d'orange" },
  { start:31.6 , end: 32.7, text: "D. Du lait." },
  { start:34.8 , end: 35.9, text: "E. Du pain." },
  { start:37.5 , end: 39.9, text: "F. Du sucre." },
  { start:39.9 , end: 42.8, text: "G. Du chocolat chaud." },
  { start:44.3 , end: 46.3, text: "H. Du miel." },
  { start:48.21 , end: 50.11, text: "I. Des céréales." },
  { start:52.15 , end: 53.47, text: "J. Des croissants." },
  { start:55.078 , end: 56.658, text: "K. Des fruits." },
  { start:58.29 , end: 60.0, text: "L. Des toasts." },
  { start:60.0 , end: 63.4, text: "M. Des tartines." },
  { start:65.6 , end: 67.0, text: "N, du thé." },
  { start:68.6 , end: 71.3, text: "O, un œuf à la coque." },
  { start:71.3 , end: 74.2, text: "P, de la confiture." },


  
];
const captionsExample2 = [
  { start:5.21, end: 8.8, text: "Grand prix A1, unité 5" },
  { start:8.8, end: 9.3, text: "les repas" },
  { start:9.3, end: 11.4, text: "Section A" },
  { start:11.4, end: 14.9, text: "le petit déjeuner. Exercice 3" },
  { start:14.99, end: 16.6, text: "écoute les personnages qui" },
  { start:16.6, end: 18.7, text: "décrivent leur petit déjeuner." },
  { start:18.78, end: 20.9, text: "Coche la case correspondante" },
  { start:23.0, end: 23.8, text: "Bonjour à tous," },
  { start:23.8, end: 25.5, text: "je m'appelle Claire. Pour moi," },
  { start:25.5, end: 26.8, text: "le petit déjeuner est le plus" },
  { start:26.8, end: 28.5, text: "important repas de la journée." },
  { start:28.5, end: 29.8, text: "C'est pourquoi je prends" },
  { start:29.8, end: 30.8, text: "des céréales" },
  { start:30.8, end: 32.4, text: "du lait et un croissant avec" },
  { start:32.4, end: 33.4, text: "une tasse de café." },
  { start:35.75, end: 37.3, text: "Moi, je suis Maxime." },
  { start:37.3, end: 38.5, text: "Mon petit déjeuner" },
  { start:38.55, end: 39.4, text: "est très simple." },
  { start:39.4, end: 40.9, text: "Je prends du café" },
  { start:40.9, end: 41.7, text: "et des tartines." },
  { start:43.8, end: 45.14, text: "Je m'appelle Marie et pour" },
  { start:45.150, end: 46.129, text: "mon petit-déjeuner" },
  { start:46.129, end: 47.460, text: "je prends souvent des croissants" },
  { start:47.460, end: 49.4, text: "avec du jus d'orange et mon ami" },
  { start:49.4, end: 51.0, text: "Antoine prend la même chose." },
  { start:53.0, end: 55.0, text: "Nous sommes la famille de Léo et" },
  { start:55.0, end: 57.14, text: "pour notre petit-déjeuner..." },
  { start:57.150, end: 58.720, text: "Nous prenons des céréales" },
  { start:58.720, end: 60.0, text: "du lait, des croissants" },
  { start:60., end: 61.5, text: "du beurre..." },
  { start:61.5, end: 63.18, text: "Des œufs à la coque et du café." },

 


  
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
          top: "44%", // عدّل حسب مكان الزر
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
              style={{ overflow: "visible" , position:"absolute",top:"14.9%",left:"59.0%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 122 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"41.6%",left:"26.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 123 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"46.9%",left:"58.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 124 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"72.0%",left:"34.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 125 })}
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
