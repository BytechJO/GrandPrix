import React from "react";
import page_1 from "../../../assets/unite3pages/49.png"
import page5_CD2 from "../../../assets/U3Audio/Unint3SecAQ1.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start:5.4 , end: 7.0, text: "Grand prix A1," },
  { start:7.0 , end: 8.6, text: "unité 3 : Sous" },
  { start:8.6 , end: 9.6, text: "le même toit." },
  { start:10.2 , end: 11.7, text: "Section A " },
  { start:11.7 , end: 12.5, text: "Ma famille." },
  { start:13.2 , end: 15.1, text: "Exercice 1" },
  { start:15.1 , end: 16.6, text: "Écoute et place" },
  { start:16.6 , end: 17.4, text: "dans l'ordre" },
  { start:17.4 , end: 18.6, text: "puis lis." },
  { start:20.5 , end: 21.1, text: "Je m'appelle" },
  { start:21.1 , end: 21.9, text: "Belle Dupont." },
  { start:22.5 , end: 23.0, text: "Je veux vous" },
  { start:23.0 , end: 23.5, text: "présenter" },
  { start:23.5 , end: 24.1, text: "ma famille." },
  { start:24.7 , end: 25.6, text: "Voilà ma sœur" },
  { start:25.6 , end: 26.9, text: "Beth Dupont." },
  { start:26.9 , end: 27.3, text: "Nous sommes" },
  { start:27.3 , end: 28.1, text: "jumelles." },
  { start:28.1 , end: 28.6, text: "Nous avons" },
  { start:28.6 , end: 29.8, text: "18 ans." },
  { start:29.8 , end: 30.3, text: "Voici mes" },
  { start:30.3 , end: 31.0, text: "grands-parents," },
  { start:31.0 , end: 32.0, text: "Pascal et" },
  { start:32.0 , end: 33.3, text: "Vivien Dupont." },
  { start:33.3 , end: 35.1, text: "Ils ont 68 ans." },
  { start:35.1 , end: 35.9, text: "C'est mon père," },
  { start:35.9 , end: 36.5, text: "il s'appelle" },
  { start:36.5 , end: 37.9, text: "Gérard Dupont." },
  { start:37.9 , end: 39.5, text: "Il a 48 ans." },
  { start:39.5 , end: 40.5, text: "Voici ma mère," },
  { start:40.5 , end: 41.2, text: "elle s'appelle" },
  { start:41.2 , end: 42.4, text: "Michèle Dupont." },
  { start:42.4 , end: 43.5, text: "Elle a 47 ans." },
  { start:45.6 , end: 47.1, text: "Je m'appelle Ray," },
  { start:47.1 , end: 48.5, text: "j'ai 10 ans." },
  { start:48.5 , end: 49.1, text: "Je suis le" },
  { start:49.1 , end: 50.2, text: "frère de Belle" },
  { start:50.2 , end: 51.2, text: "et Beth." },

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
          top: "13%", // عدّل حسب مكان الزر
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
            className="Click -icon-CD-page5 hover:scale-110 transition"


              style={{ overflow: "visible" , position:"absolute",top:"15.3%",left:"47.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 50 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"55.0%",left:"26%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 51 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"57.0%",left:"77%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 52 })}
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
