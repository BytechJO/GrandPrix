import React from "react";
import page_1 from "../../../assets/unite5pages/98.png"
import page5_CD2 from "../../../assets/U5Audio/u5sbq4.mp3";
import page5_CD22 from "../../../assets/U5Audio/u5sbq6.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
{ start:5.189 , end: 8.1, text: "Grand prix A1, unité 5," },
{ start:8.1 , end: 9.29, text: "les repas" },
{ start:9.29 , end: 10.5, text: "section B," },
{ start:10.5 , end: 12.1, text: "des repas sains," },
{ start:12.1 , end: 13.7, text: "exercice 4," },
{ start:13.7 , end: 15.8, text: "écoute l'interview et" },
{ start:15.8 , end: 16.9, text: "lis avec un ami." },
{ start:19.12 , end: 20.2, text: "Alors Léo," },
{ start:20.2 , end: 21.6, text: "qu'est-ce que tu manges" },
{ start:21.64 , end: 23.97, text: "au goûter? Au goûter" },
{ start:23.97 , end: 25.76, text: "je mange une pomme et" },
{ start:25.76 , end: 27.37, text: "parfois des chips." },
{ start:27.37 , end: 29.16, text: "Et toi Claire," },
{ start:29.16 , end: 30.14, text: "qu'est-ce que tu prends" },
{ start:30.14 , end: 32.29, text: "normalement au déjeuner?" },
{ start:32.29 , end: 33.78, text: "Au déjeuner," },
{ start:33.78 , end: 35.17, text: "je prends des pommes de terre" },
{ start:35.17 , end: 36.5, text: "avec de la viande," },
{ start:36.5 , end: 38.2, text: "puis un gâteau." },
{ start:38.21 , end: 40.44, text: "Alors Louis, et toi," },
{ start:40.44 , end: 41.59, text: "qu'est-ce que tu prends" },
{ start:41.59 , end: 44.013, text: "au dîner en général?" },
{ start:44.013 , end: 44.993, text: "En général" },
{ start:44.993 , end: 46.833, text: "je prends un hamburger et des" },
{ start:46.833 , end: 48.973, text: "frites, et après des fraises." },
{ start:48.973 , end: 50.753, text: "Ce n'est pas une bonne" },
{ start:50.753 , end: 52.123, text: "alimentation, Louis." },
{ start:52.123 , end: 54.637, text: "Bon, ce n'est pas très bien" },
{ start:54.637 , end: 56.602, text: "Vous devez vous rappeler que" },
{ start:56.602 , end: 58.082, text: "pour manger sainement," },
{ start:58.082 , end: 60.442, text: "vous devez prendre 5 portions de" },
{ start:60.442 , end: 62.232, text: "fruits et de légumes par jour," },
{ start:62.232 , end: 63.412, text: "moins de chips," },
{ start:63.412 , end: 65.082, text: "de gâteaux et de bonbons." },

  
];
const captionsExample2 = [
{ start:5.189, end: 8.159, text: "Grand prix A1, unité 5" },
{ start:8.159, end: 9.299, text: "les repas" },
{ start:9.299, end: 10.529, text: "section B" },
{ start:10.529, end: 12.059, text: "des repas sains" },
{ start:12.059, end: 14.029, text: "exercice 6" },
{ start:14.029, end: 17.379, text: "Écoute Martin, Théo et Emma." },
{ start:17.379, end: 19.149, text: "Est-ce qu'ils ont des repas" },
{ start:19.149, end: 21.729, text: "sains? Écris bien," },
{ start:21.729, end: 23.929, text: "mal ou pas mal" },
{ start:26.069, end: 27.699, text: "Je m'appelle Martin." },
{ start:27.699, end: 28.949, text: "Pour le goûter" },
{ start:28.949, end: 30.369, text: "je prends une poire" },
{ start:30.369, end: 31.349, text: "et une banane." },
{ start:33.387, end: 34.367, text: "Bonjour à tous" },
{ start:34.367, end: 35.697, text: "je m'appelle Théo." },
{ start:35.697, end: 36.677, text: "Pour le dîner" },
{ start:36.677, end: 38.117, text: "je prends souvent des frites," },
{ start:38.117, end: 40.647, text: "des hamburgers et du gâteau." },
{ start:40.647, end: 42.907, text: "Pour le déjeuner" },
{ start:42.907, end: 44.117, text: "je prends de la viande," },
{ start:44.117, end: 45.487, text: "de la salade et parfois" },
{ start:45.487, end: 46.107, text: "des bonbons." },

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
          top: "75%", // عدّل حسب مكان الزر
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
              style={{ overflow: "visible" , position:"absolute",top:"63.0%",left:"35.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 131 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"80.0%",left:"57.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 132 })}
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
