import React from "react";
import page_1 from "../../../assets/unite3pages/54.png"
import page5_CD2 from "../../../assets/U3Audio/U3SBQ5.mp3";
import page5_CD3 from "../../../assets/U3Audio/U3SBQ6.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start:5.5 , end: 6.4, text: "Grand Prix" },
  { start:6.4 , end: 8.6, text: "A1, unité 3." },
  { start:9.3 , end: 10.0, text: "Sous le même" },
  { start:10.0 , end: 11.3, text: "toit." },
  { start:11.3 , end: 12.6, text: "Section B." },
  { start:12.6 , end: 14.4, text: "Mon rêve est :" },
  { start:14.4 , end: 15.6, text: "exercice 5." },
  { start:16.2 , end: 18.1, text: "Écoute et écris" },
  { start:18.1 , end: 18.8, text: "l'information" },
  { start:18.8 , end: 23.8, text: "manquante." },
  { start:26.2 , end: 27.1, text: "Est-ce qu'Antoine" },
  { start:27.1 , end: 27.5, text: "Roux" },
  { start:27.5 , end: 28.2, text: "habite ici ?" },
  { start:29.6 , end: 30.1, text: "Oui, c'est" },
  { start:30.1 , end: 30.6, text: "mon fils." },
  { start:31.8 , end: 32.7, text: "Il y a une lettre" },
  { start:32.7 , end: 33.2, text: "pour lui." },
  { start:34.2 , end: 34.8, text: "Antoine," },
  { start:34.8 , end: 35.4, text: "viens ici." },
  { start:36.6 , end: 37.5, text: "Oui, maman." },
  { start:37.5 , end: 37.9, text: "Qu'est-ce qui" },
  { start:37.9 , end: 38.4, text: "se passe ?" },
  { start:39.6 , end: 40.3, text: "Il y a une lettre" },
  { start:40.3 , end: 40.8, text: "pour toi." },
  { start:42.3 , end: 42.7, text: "Bon." },
  { start:43.4 , end: 43.7, text: "Où est la" },
  { start:43.7 , end: 44.2, text: "lettre ?" },
  { start:45.5 , end: 46.0, text: "Vous devez" },
  { start:46.0 , end: 46.9, text: "signer ici." },
  { start:47.7 , end: 48.1, text: "Merci." },
  { start:48.8 , end: 50.5, text: "Au revoir." },
  { start:50.5 , end: 51.0, text: "Merci." },
  { start:52.2 , end: 52.7, text: "Qui t'envoie" },
  { start:52.7 , end: 53.2, text: "cette lettre ?" },
  { start:54.4 , end: 55.0, text: "C'est une lettre" },
  { start:55.0 , end: 56.1, text: "d'invitation," },
  { start:56.1 , end: 56.4, text: "car je" },
  { start:56.4 , end: 57.1, text: "suis au lycée." },
  { start:57.7 , end: 58.0, text: "Je..." },
  { start:59.0 , end: 59.4, text: "Une lettre" },
  { start:59.4 , end: 60.0, text: "d'invitation ?" },
  { start:61.2 , end: 62.4, text: "Oui, je dois" },
  { start:62.4 , end: 62.8, text: "visiter" },
  { start:62.8 , end: 63.7, text: "l'université" },
  { start:63.7 , end: 64.1, text: "pendant les" },
  { start:64.1 , end: 64.5, text: "journées de" },
  { start:64.5 , end: 65.4, text: "l'orientation." },
  
];
const captionsExample2 = [
    { start:5.5 , end: 6.4, text: "Grand Prix" },
  { start:6.4 , end: 8.6, text: "A1, unité 3." },
  { start:9.3 , end: 10.0, text: "Sous le même" },
  { start:10.0 , end: 11.3, text: "toit." },
  { start:11.3 , end: 12.1, text: "Section B." },
  { start:12.6 , end: 13.6, text: "Mon rêve est" },
  { start:14.4 , end: 15.9, text: "exercice 6." },
  { start:16.4 , end: 18.0, text: "Écoute et écris" },
  { start:18.0 , end: 18.8, text: "l'information" },
  { start:18.8 , end: 19.4, text: "manquante." },
  { start:21.6 , end: 22.6, text: "Oui, c'est" },
  { start:22.6 , end: 23.0, text: "une lettre" },
  { start:23.0 , end: 23.6, text: "d'invitation." },
  { start:24.2 , end: 25.1, text: "Je dois visiter" },
  { start:25.1 , end: 26.0, text: "l'université" },
  { start:26.0 , end: 26.4, text: "pendant les" },
  { start:26.4 , end: 26.9, text: "journées de" },
  { start:26.9 , end: 27.6, text: "l'orientation." },
  { start:28.7 , end: 30.2, text: "Quand ?" },
  { start:30.2 , end: 31.7, text: "C'est le quinze," },
  { start:31.7 , end: 32.7, text: "seize et" },
  { start:32.7 , end: 34.5, text: "dix-huit juin." },
  { start:34.5 , end: 35.1, text: "Bon, à quelle" },
  { start:35.1 , end: 35.5, text: "heure tu dois" },
  { start:35.5 , end: 35.8, text: "aller à" },
  { start:35.8 , end: 36.6, text: "l'université ?" },
  { start:37.8 , end: 38.4, text: "De six heures" },
  { start:38.4 , end: 39.3, text: "quarante-cinq" },
  { start:39.3 , end: 39.6, text: "à vingt" },
  { start:39.6 , end: 41.3, text: "heures trente." },
  { start:41.3 , end: 42.0, text: "Magnifique." },
  { start:42.0 , end: 42.7, text: "Où se passe cet" },
  { start:42.7 , end: 44.4, text: "événement ?" },
  { start:44.4 , end: 45.3, text: "À l'université" },
  { start:45.3 , end: 46.6, text: "Panthéon-Sorbonne," },
  { start:46.6 , end: 47.2, text: "centre Pierre" },
  { start:47.2 , end: 48.1, text: "Mendès," },
  { start:48.1 , end: 48.7, text: "quatre-vingt-dix," },
  { start:48.7 , end: 49.0, text: "rue de" },
  { start:49.0 , end: 50.0, text: "Tolbiac." },
  { start:50.0 , end: 50.9, text: "Mais je ne sais" },
  { start:50.9 , end: 51.4, text: "pas si je" },
  { start:51.4 , end: 52.9, text: "dois y aller." },
  { start:52.9 , end: 53.3, text: "Mais non," },
  { start:53.3 , end: 53.7, text: "qu'est-ce que" },
  { start:53.7 , end: 54.2, text: "tu dis ?" },
  { start:54.8 , end: 55.5, text: "Bien sûr que tu" },
  { start:55.5 , end: 56.5, text: "dois y aller." },
  { start:56.5 , end: 57.1, text: "Ces journées de" },
  { start:57.1 , end: 58.0, text: "l'orientation" },
  { start:58.0 , end: 58.7, text: "aident les ados" },
  { start:58.7 , end: 59.0, text: "à bien" },
  { start:59.0 , end: 59.7, text: "s'orienter dans" },
  { start:59.7 , end: 60.0, text: "leur future" },
  { start:60.0 , end: 61.4, text: "profession, à" },
  { start:61.4 , end: 62.0, text: "choisir s'ils" },
  { start:62.0 , end: 62.6, text: "veulent étudier" },
  { start:62.6 , end: 63.6, text: "les arts, les" },
  { start:63.6 , end: 64.5, text: "langues, les" },
  { start:64.5 , end: 65.4, text: "sciences, la" },
  { start:65.4 , end: 66.9, text: "santé, le droit" },
  { start:66.9 , end: 67.2, text: "ou les" },
  { start:67.2 , end: 68.9, text: "technologies." },
  { start:68.9 , end: 70.1, text: "D'accord, je" },
  { start:70.1 , end: 71.0, text: "vais vérifier." },


  
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
          top: "35%", // عدّل حسب مكان الزر
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
              style={{ overflow: "visible" , position:"absolute",top:"9%",left:"51%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 58 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"38.5%",left:"51%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 59 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"65.9%",left:"55%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 60 })}
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
