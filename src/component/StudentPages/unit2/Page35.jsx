import React from "react";

import page_1 from "../../../assets/unite2pages/35.png";

import page5_CD2 from "../../../assets/U2Audio/U2ScQ1.mp3";
import U2Q5 from "../../../assets/U2Audio/U2Q5.mp3";
import AudioWithCaption from "../../AudioWithCaption";
import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const Page1 = ({ openPopup }) => {
  const captionexample=[
{start:5.2,end:6.9,text:"Grand prix A1,"},
{start:6.9,end:8.7,text:"unité 2, à"},
{start:8.7,end:10.5,text:"l'école, section"},
{start:10.5,end:12.8,text:"C, lundi C."},
{start:14.2,end:15.4,text:"Exercice 1,"},
{start:16.0,end:16.9,text:"écoute l'emploi"},
{start:16.9,end:17.7,text:"du temps de"},
{start:17.7,end:18.9,text:"Carole et Jenna."},
{start:21.1,end:23.7,text:"Lundi, 8h30-9h30"},
{start:23.7,end:27.1,text:"SVT, 9h30-10h30"},
{start:27.1,end:27.6,text:"Anglais,"},
{start:28.8,end:30.4,text:"10h30-11h30"},
{start:30.4,end:33.6,text:"Maths, 11h30-13h"},
{start:33.6,end:34.4,text:"déjeuner,"},
{start:35.5,end:36.8,text:"13h-14h"},
{start:36.8,end:37.5,text:"Français,"},
{start:38.6,end:40.8,text:"14h-15h EPS,"},
{start:42.0,end:43.8,text:"15h-16h Arts."},
{start:45.9,end:48.9,text:"Mardi 8h30-9h30"},
{start:48.9,end:49.7,text:"Histoire"},
{start:49.7,end:52.9,text:"9h30-10h30 Math"},
{start:52.9,end:55.6,text:"10h30-11h30"},
{start:55.6,end:56.4,text:"Espagnol"},
{start:56.4,end:59.0,text:"11h30-13h"},
{start:59.0,end:62.3,text:"Déjeuner 13h-14h"},
{start:62.3,end:65.5,text:"Anglais 14h-15h"},
{start:65.5,end:69.8,text:"SVT 15h-16h SVT"},
{start:69.8,end:72.2,text:"Mercredi"},
{start:72.2,end:74.7,text:"8h30-9h30 SVT"},
{start:75.9,end:77.5,text:"9h30-10h30"},
{start:77.5,end:78.3,text:"Technologie"},
{start:78.3,end:81.0,text:"10h30-11h30"},
{start:81.0,end:81.8,text:"Physique"},
{start:81.8,end:84.3,text:"11h30-13h"},
{start:84.3,end:87.3,text:"Déjeuner 13h-14h"},
{start:87.3,end:90.4,text:"Français 14h-15h"},
{start:90.4,end:93.4,text:"Histoire 15h-16h"},
{start:93.4,end:96.7,text:"EPS Jeudi"},
{start:96.7,end:99.4,text:"8h30-9h30 EPS"},
{start:99.4,end:102.1,text:"9h30-10h30"},
{start:102.1,end:103.1,text:"Histoire"},
{start:103.1,end:105.6,text:"10h30-11h30"},
{start:105.6,end:106.3,text:"Français"},
{start:106.3,end:108.7,text:"11h30-13h"},
{start:108.7,end:111.7,text:"Déjeuner 13h-14h"},
{start:111.7,end:112.7,text:"Technologie"},
{start:112.7,end:116.5,text:"14h-15h Maths"},
{start:116.5,end:118.9,text:"15h-16h Physique"},
{start:120.9,end:121.7,text:"Vendredi"},
{start:121.7,end:124.0,text:"8h30-9h30"},
{start:124.0,end:124.8,text:"Espagnol"},
{start:124.8,end:127.5,text:"9h30-10h30"},
{start:127.5,end:128.2,text:"Français"},
{start:128.2,end:131.7,text:"10h30-11h30 SVT"},
{start:131.7,end:134.3,text:"11h30-13h"},
{start:134.3,end:137.6,text:"Déjeuner 13h-14h"},
{start:137.6,end:140.8,text:"Anglais 14h-15h"},
{start:140.8,end:143.8,text:"Maths 15h-16h"},
{start:143.8,end:144.4,text:"EPS"},





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
        onClick={() => openPopup("audio", <AudioWithCaption src={page5_CD2}  captions={captionexample}/>)}
      ></div>
      <div
        className="Click -icon-CD-page5 hover:scale-110 transition"
        style={{
          overflow: "visible",
          position: "absolute",
          top: "15.0%",
          left: "56%",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 90 90"
          onClick={() => openPopup("exercise", { startIndex: 35 })}
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
          top: "48%",
          left: "31.5%",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 90 90"
          onClick={() => openPopup("exercise", { startIndex: 36 })}
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
