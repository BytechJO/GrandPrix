import React from "react";
import page_1 from "../../../assets/unite4pages/80.png"
import page5_CD2 from "../../../assets/U4Audio/U4SCQ4.mp3";
import page5_CD3 from "../../../assets/U4Audio/U4SCQ5.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start:5.60 , end: 6.72, text: "Rempris A1," },
  { start:7.0 , end: 8.0, text: "unité 4," },
  { start:8.35 , end: 8.76, text: "en ville." },
  { start:9.45 , end: 10.18, text: "Section C." },
  { start:11.13 , end: 11.72, text: "Briançon," },
  { start:12.10 , end: 13.74, text: "une ville d'art et d'histoire." },
  { start:14.91 , end: 15.87, text: "Exercice 4." },
  { start:16.57 , end: 18.60, text: "Écoute et réponds à la question." },
  { start:25.47 , end: 25.98, text: "Allô ?" },
  { start:27.07 , end: 27.58, text: "Salut Henri." },
  { start:28.80 , end: 29.18, text: "Salut," },
  { start:29.18 , end: 30.30, text: "où es-tu ?" },
  { start:31.16 , end: 33.24, text: "Je suis près du restaurant de hamburgers." },
  { start:33.24 , end: 34.02, text: "Et toi ?" },
  { start:35.23 , end: 36.10, text: "Je suis à l'entrée." },
  { start:36.54 , end: 38.27, text: "C'est où ce restaurant ?" },
  { start:39.12 , end: 40.32, text: "Ce n'est pas très loin de l'entrée." },
  { start:40.80 , end: 43.80, text: "C'est entre le magasin de jouets « Être libre »" },
  { start:43.80 , end: 46.33, text: "et le magasin de vêtements « La mode »." },
  { start:47.33 , end: 47.74, text: "D'accord." },
  { start:48.86 , end: 49.62, text: "Et aussi," },
  { start:49.62 , end: 53.22, text: "l'entrée est derrière moi et le cinéma est en face." },
  { start:53.22 , end: 53.72, text: "Ok." },
  { start:59.97 , end: 60.9, text: "Henri ?" },
  { start:61.1 , end: 62.0, text: "Oui ?" },
  { start:62.0 , end: 64.03, text: "Mais qu'est-ce que tu fais ?" },
  { start:64.03 , end: 65.0, text: "Est-ce que tu es perdu ?" },
  { start:66.2 , end: 66.3, text: "Oui," },
  { start:66.37 , end: 66.95, text: "je crois." },
  { start:66.95 , end: 70.01, text: "Parce que je suis devant le restaurant de hamburgers," },
  { start:70.43 , end: 71.6, text: "mais devant moi," },
  { start:71.6 , end: 73.8, text: "il y a un café qui vend des beignets" },
  { start:73.9 , end: 75.7, text: "mais pas de magasin de vêtements." },
  { start:76.15 , end: 77.75, text: "Ah !" },
  { start:77.89 , end: 79.45, text: "Tu es près de quelle entrée ?" },
  { start:80.41 , end: 80.89, text: "L'entrée 2." },
  { start:80.89 , end: 82.81, text: "Ah !" },
  { start:82.81 , end: 84.29, text: "Je suis près de l'entrée 1." },

];
const captionsExample2 = [
  { start:5.60 , end: 6.74, text: "Rempris A1," },
  { start:7.04 , end: 8.04, text: "unité 4," },
  { start:8.35 , end: 8.72, text: "en ville." },
  { start:9.56 , end: 10.28, text: "Section C." },
  { start:11.13 , end: 11.70, text: "Briançon," },
  { start:12.10 , end: 13.74, text: "une ville d'art et d'histoire." },
  { start:14.53 , end: 15.76, text: "Exercice 5." },
  { start:16.54 , end: 17.05, text: "Réécoute." },
  { start:17.88 , end: 19.23, text: "C'est vrai ou faux ?" },
  { start:25.74 , end: 26.18, text: "Allô ?" },
  { start:27.43 , end: 27.90, text: "Salut Henri." },
  { start:29.06 , end: 29.44, text: "Salut," },
  { start:29.44 , end: 30.26, text: "où es-tu ?" },
  { start:31.42 , end: 33.52, text: "Je suis près du restaurant de hamburgers." },
  { start:33.52 , end: 34.68, text: "Et toi ?" },
  { start:35.49 , end: 36.34, text: "Je suis à l'entrée." },
  { start:36.34 , end: 38.59, text: "C'est où ce restaurant ?" },
  { start:39.34 , end: 40.56, text: "Ce n'est pas très loin de l'entrée." },
  { start:40.5 , end: 46.6, text: "C'est entre le magasin de jouets « Être libre » et le magasin de vêtements « La mode »." },
  { start:47.6 , end: 48.0, text: "D'accord." },
  { start:48.2 , end: 49.9, text: "Et aussi," },
  { start:49.9 , end: 53.4, text: "l'entrée est derrière moi et le cinéma est en face." },
  { start:53.46 , end: 53.99, text: "Ok." },
  { start:45.92 , end: 59.96, text: "Henri ?" },
  { start:60.0 , end: 61.20, text: "Oui ?" },
  { start:62.24 , end: 63.28, text: "Mais qu'est-ce que tu fais ?" },
  { start:63.44 , end: 64.52, text: "Est-ce que tu es perdu ?" },
  { start:65.6 , end: 65.9, text: "Oui" },
  { start:65.9 , end: 66.44, text: "je crois," },
  { start:66.56 , end: 69.50, text: "parce que je suis devant le restaurant de hamburgers," },
  { start:69.9 , end: 71.10, text: "mais devant moi," },
  { start:71.22 , end: 73.30, text: "il y a un café qui vend des beignets" },
  { start:73.44 , end: 75.22, text: "mais pas de magasin de vêtements." },
  { start:76.34 , end: 76.41, text: "Ah," },
  { start:76.41 , end: 79.0, text: "tu es près de quelle entrée ?" },
  { start:79.96 , end: 80.42, text: "L'entrée 2." },
  { start:81.50 , end: 81.88, text: "Ah," },
  { start:81.88 , end: 83.92, text: "je suis près de l'entrée 1." },


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
          top: "50%", // عدّل حسب مكان الزر
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
          top: "60%", // عدّل حسب مكان الزر
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
              style={{ overflow: "visible" , position:"absolute",top:"8.0%",left:"77.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 99 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"51.5%",left:"42.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 100 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"61.9%",left:"49.3%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 101 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"64.0%",left:"80.3%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 102 })}
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
