import React from 'react'

import page_1 from "../../../assets/unite2pages/39.png"

import page5_CD2 from "../../../assets/U2Audio/U2SdQ1.mp3";
import U2Q5 from "../../../assets/U2Audio/U2Q5.mp3";
import AudioWithCaption from "../../AudioWithCaption";
import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const Page1 = ({ openPopup }) => {
  const captionexample=[
{start:5.1,end:7.9,text:"Grand prix A1, unité 2,"},
{start:7.9,end:9.2,text:"à l'école,"},
{start:9.2,end:10.6,text:"section D,"},
{start:10.6,end:12.1,text:"un rendez-vous."},
{start:12.1,end:13.8,text:"Exercice 1."},
{start:13.8,end:16.2,text:"Écoute et associe l'activité"},
{start:16.2,end:17.7,text:"au dessin qui correspond."},
{start:19.7,end:23.3,text:"Le club sportif représente… A."},
{start:23.3,end:29.7,text:"Le rugby B. La natation C."},
{start:29.7,end:33.5,text:"Le basketball D."},
{start:33.5,end:34.6,text:"Le football"},
{start:36.8,end:39.2,text:"E, la gymnastique."},
{start:39.2,end:42.2,text:"F, la course à pied."},
{start:44.1,end:48.4,text:"Le club des arts représente… A,"},
{start:48.4,end:49.5,text:"la peinture."},
{start:51.1,end:53.2,text:"B, la photographie."},
{start:55.0,end:57.4,text:"C, le théâtre."},
{start:57.4,end:60.2,text:"D, la sculpture."},
{start:62.0,end:63.8,text:"E, l'artisanat."},
{start:65.9,end:67.5,text:"F. Le graphisme."},

  ]
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
        onClick={() => openPopup("audio", <AudioWithCaption src={page5_CD2} captions={captionexample} />)}
      ></div>
  
      <div
        className="Click -icon-CD-page5 hover:scale-110 transition"
        style={{
          overflow: "visible",
          position: "absolute",
          top: "15.6%",
          left: "61.5%",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 90 90"
          onClick={() => openPopup("exercise", { startIndex: 40})}
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


