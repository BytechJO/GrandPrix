import React from 'react'

import page_1 from "../../../assets/unite2pages/31.png"

import page5_CD2 from "../../../assets/U2Audio/SecBQ1.mp3";
import AudioWithCaption from "../../AudioWithCaption";
import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const Page1 = ({ openPopup }) => {

  const captionsExample =[

{start:5.0 ,end:6.7, text:"Grand prix A1,"},
{start:6.7 ,end:8.0, text:"unité 2,"},
{start:8.0 ,end:8.7, text:"à l'école."},
{start:9.6 ,end:11.4, text:"Section B. Qu'est-ce que"},
{start:11.4 ,end:12.8, text:"c'est ?"},
{start:12.8 ,end:13.8, text:"Exercice 1."},
{start:14.6 ,end:16.1, text:"Écoute, répète"},
{start:16.1 ,end:17.1, text:"et place"},
{start:17.1 ,end:17.7, text:"dans l'ordre."},
{start:19.8 ,end:20.8, text:"Un feutre."},
{start:22.0 ,end:22.8, text:"Une fenêtre."},
{start:24.6 ,end:25.6, text:"Une chaise."},
{start:27.3 ,end:28.3, text:"Une porte."},
{start:30.2 ,end:30.9, text:"Un bureau."},
{start:32.6 ,end:33.5, text:"Un CD."},
{start:35.6 ,end:38.8, text:"un classeur, un"},
{start:38.8 ,end:39.5, text:"tableau blanc,"},



  ];
  return (
    <div className="page_1-background">
      <img
        src={page_1}

        // className="w-full h-full object-contain rounded-2xl shadow-lg"
      />
    
   <div
        id="CD-1-page5"
        className="headset-icon-CD-page5 hover:scale-110 transition"
        style={{
          position: "absolute",
          top: "12%", // عدّل حسب مكان الزر
          left: "2%", // عدّل حسب مكان الزر
          cursor: "pointer",
          width: "50px",
          height: "50px",
       
        }}
        onClick={() => openPopup("audio", <AudioWithCaption src={page5_CD2}  captions={captionsExample}/>)}
      ></div>
      <div
        className="Click -icon-CD-page5 hover:scale-110 transition"
        style={{
          overflow: "visible",
          position: "absolute",
          top: "15.4%",
          left: "48%",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 90 90"
          onClick={() => openPopup("exercise", { startIndex: 31 })}
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
        style={{
          overflow: "visible",
          position: "absolute",
          top: "63%",
          left: "48%",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 90 90"
          onClick={() => openPopup("exercise", { startIndex: 32 })}
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

export default Page1;


