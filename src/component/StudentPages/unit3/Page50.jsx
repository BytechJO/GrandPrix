import React from "react";
import page_1 from "../../../assets/unite3pages/50.png"
import page5_CD2 from "../../../assets/U3Audio/U3SAQ1.mp3";
import page5_CD3 from "../../../assets/U3Audio/U3SAQ4.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start:5.0 , end: 7.0, text: "GrandPrixA1" },
  { start: 7.3, end: 8.3, text: "unité 1," },
  { start: 8.3, end: 9.6, text: " seprésenter. " },
  { start: 10.2, end: 11.2, text: " SectionA " },
  { start: 13.1, end: 14.2, text: " Exercice1 " },
  { start: 14.8, end: 15.3, text: " Écoute " },
  { start: 15.8, end: 17.9, text: " répète et place dans l'ordre. " },
  { start: 20.4, end: 21.2, text: " Bonjour Loïc." },
  { start: 22.7, end: 23.5, text: " Bonjour Théo." },
  { start: 25.5, end: 26.3, text: "Salut Amélie" },
  { start: 27.8, end: 28.1, text: "Salut Emma" },
  { start: 30.4, end: 31.5, text: "Bonjour Madame Rose" },
  { start: 32.8, end: 33.7, text: "Bonjour Madame Lucas." },
  { start: 35.4, end: 36.1, text: "Bonjour Monsieur Henry." },
  { start: 38.7, end: 39.4, text: "Au revoir Tom" },
  { start: 40.7, end: 41.4, text: "Au revoir Adam." },
  
];
const captionsExample2 = [
  { start:5.5 , end: 6.7, text: "Rempris A1" },
  { start:6.7 , end: 7.9, text: "unité3" },
  { start:7.9 , end: 9.5, text: "sous le même 0toit" },
  { start:10.14 , end: 11.0, text: "SectionA." },
  { start:11.6 , end: 12.2, text: "Ma famille." },
  { start:13.3 , end: 14.47, text: "Exercice 4." },
  { start:14.8 , end: 16.9, text: "Écoute et entoure la bonne réponse" },
  { start:21.2 , end: 21.7, text: "Salut Ray," },
  { start:21.7 , end: 22.6, text: "comment ça va ?" },
  { start:23.7 , end: 25.9, text: "Je suis très heureux parce qu'aujourd'hui," },
  { start:26.3 , end: 27.7, text: "mon ami arrive à Marseille." },
  { start:29.0 , end: 29.5, text: "C'est vrai ?" },
  { start:29.7 , end: 30.75, text: "À quelle heure est son train ?" },
  { start:32.0 , end: 33.6, text: "À 5h15 de l'après-midi." },
  { start:36.54 , end: 37.23, text: "Salut Daniel," },
  { start:37.5 , end: 39.4, text: "comment ça va ?" },
  { start:39.5 , end: 39.9, text: "Salut Ray," },
  { start:40.2 , end: 40.9, text: "ça va très bien." },
  { start:42.2 , end: 43.5, text: "Je suis très heureux de te voir." },
  { start:44.7 , end: 45.3, text: "Moi aussi." },
  { start:47.5 , end: 48.8, text: "Je veux te présenter mon père." },
  { start:49.3 , end: 50.9, text: "Il s'appelle Gérard Dupont." },
  { start:52.3 , end: 53.6, text: "Enchanté Monsieur Dupont." },
  { start:54.8 , end: 56.6, text: "C'est un plaisir de te rencontrer Daniel." },
  { start:57.5 , end: 57.9, text: "Alors," },
  { start:58.3 , end: 59.5, text: "allons à la maison." },
  
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
          top: "43%", // عدّل حسب مكان الزر
          left: "52%", // عدّل حسب مكان الزر
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
          top: "5%", // عدّل حسب مكان الزر
          left: "1%", // عدّل حسب مكان الزر
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


              style={{ overflow: "visible" , position:"absolute",top:"8.3%",left:"46.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 53 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"45.5%",left:"35.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 54 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"46.0%",left:"90%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 55 })}
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
