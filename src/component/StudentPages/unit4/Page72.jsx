import React from "react";
import page_1 from "../../../assets/unite4pages/72.png"
import page5_CD2 from "../../../assets/U4Audio/U4Q4.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start:7.5 , end: 8.3, text: "unité 4," },
  { start:8.9 , end: 9.5, text: "en ville." },
  { start:10.3 , end: 11.1, text: "Section A," },
  { start:11.6 , end: 12.2, text: "Provence," },
  { start:12.7 , end: 13.9, text: "le goût de la France." },
  { start:14.7 , end: 15.6, text: "Exercice 4." },
  { start:16.9 , end: 18.6, text: "Écoute et entoure la bonne réponse." },
  { start:23.9 , end: 24.9, text: "C'est moi," },
  { start:24.9 , end: 25.5, text: "Caroline," },
  { start:25.5 , end: 27.5, text: "et mon émission Autor de la France." },
  { start:28.1 , end: 28.7, text: "Aujourd'hui," },
  { start:28.7 , end: 30.2, text: "nous parlerons de la Provence." },
  { start:30.4 , end: 31.6, text: "Formidable province," },
  { start:31.6 , end: 32.7, text: "riche en" },
  { start:32.8 , end: 34.7, text: "Vous allez le découvrir avec moi !" },
  { start:35.2 , end: 37.41, text: "Notre premier arrêt est la ville d'Orange." },
  { start:38.1 , end: 38.7, text: "Aujourd'hui," },
  { start:38.7 , end: 39.7, text: "dans notre studio," },
  { start:39.7 , end: 40.6, text: "nous avons Marc." },
  { start:41.2 , end: 41.8, text: "Bonjour Marc," },
  { start:42.0 , end: 42.8, text: "comment ça va ?" },
  { start:44.03 , end: 44.8, text: "Bonjour Caroline," },
  { start:45.3 , end: 46.0, text: "ça va très bien." },
  { start:46.4 , end: 46.9, text: "Et vous ?" },
  { start:48.07 , end: 48.59, text: "Ça va bien." },
  { start:48.8 , end: 49.43, text: "Alors dis-moi," },
  { start:49.3 , end: 50.3, text: "quel âge as-tu ?" },
  { start:51.4 , end: 52.0, text: "J'ai 15 ans." },
  { start:53.0 , end: 53.8, text: "Où habites-tu ?" },
  { start:54.9 , end: 55.9, text: "J'habite à Piolanque." },
  { start:56.5 , end: 58.4, text: "C'est un village à 6 km d'Orange." },
  { start:59.7 , end: 59.9, text: "Super," },
  { start:59.9 , end: 61.0, text: "tu habites dans une ferme ?" },
  { start:62.4 , end: 62.79, text: "Oui," },
  { start:63.0 , end: 64.2, text: "j'habite dans une ferme." },
  { start:65.4 , end: 66.5, text: "Avec qui habites-tu ?" },
  { start:67.8 , end: 68.3, text: "J'habite avec ma famille," },
  { start:69.3 , end: 69.9, text: "ma mère," },
  { start:69.9 , end: 70.7, text: "mon père," },
  { start:71.7 , end: 72.9, text: "mes trois frères et mes grands-parents." },
  { start:73.9 , end: 76.11, text: "Que fait ta famille ?" },
  { start:76.11 , end: 77.35, text: "Ma famille produit des truffes." },
  { start:78.6 , end: 78.95, text: "Très bien." },
  { start:79.15 , end: 79.7, text: "Et maintenant," },
  { start:79.8 , end: 81.6, text: "dis-moi quelque chose à propos d'Orange." },


  
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
          top: "38%", // عدّل حسب مكان الزر
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
              style={{ overflow: "visible" , position:"absolute",top:"41.9%",left:"46.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 90 })}
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
