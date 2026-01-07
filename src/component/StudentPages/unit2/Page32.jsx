import React from 'react'

import page_1 from "../../../assets/unite2pages/32.png"

import page5_CD2 from "../../../assets/U2Audio/SecBQ4.mp3";
import U2Q5 from "../../../assets/U2Audio/U2Q5.mp3";
import AudioWithCaption from "../../AudioWithCaption";
import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const Page1 = ({ openPopup }) => {

  const captionsExample=[
{start:5.0 , end:6.7 , text:"Grand prix A1,"},
{start:6.7 , end:8.0 , text:"unité 2,"},
{start:8.0 , end:8.7 , text:"à l'école."},
{start:9.6 , end:10.4 , text:"Section B."},
{start:11.0 , end:11.4 , text:"Qu'est-ce que"},
{start:11.4 , end:12.4 , text:"c'est ?"},
{start:12.4 , end:13.5 , text:"Exercice 4."},
{start:14.2 , end:15.7 , text:"Écoute et écris"},
{start:15.7 , end:16.4 , text:"l'information"},
{start:16.4 , end:17.1 , text:"manquante."},
{start:19.0 , end:19.9 , text:"Bonjour Madame"},
{start:19.9 , end:20.6 , text:"Bouton, je"},
{start:20.6 , end:21.6 , text:"m'appelle Marie,"},
{start:21.6 , end:22.1 , text:"je suis une"},
{start:22.1 , end:22.9 , text:"nouvelle élève."},
{start:24.1 , end:25.2 , text:"Bonjour Marie,"},
{start:25.2 , end:25.9 , text:"bienvenue dans"},
{start:25.9 , end:27.0 , text:"ma classe."},
{start:27.0 , end:27.8 , text:"Tout le monde,"},
{start:27.8 , end:28.7 , text:"c'est Marie,"},
{start:28.7 , end:29.3 , text:"votre nouvelle"},
{start:29.3 , end:30.0 , text:"camarade."},
{start:31.0 , end:32.5 , text:"Bonjour Marie !"},
{start:33.6 , end:34.3 , text:"Assieds-toi près"},
{start:34.3 , end:35.1 , text:"de la fenêtre."},
{start:36.2 , end:36.7 , text:"Merci."},
{start:37.8 , end:40.1 , text:"Alors, nous"},
{start:40.1 , end:41.9 , text:"Salut Marie, je"},
{start:41.9 , end:42.8 , text:"m'appelle Chloé,"},
{start:42.8 , end:44.6 , text:"comment ça va ?"},
{start:44.6 , end:45.7 , text:"Salut, ça va"},
{start:45.7 , end:46.2 , text:"pas mal."},
{start:47.4 , end:48.0 , text:"Si tu as besoin"},
{start:48.0 , end:48.2 , text:"de quelque"},
{start:48.2 , end:48.6 , text:"chose,"},
{start:48.6 , end:49.4 , text:"demande-moi, ok"},
{start:50.4 , end:51.1 , text:"Merci."},
  ];
  const captionsExample2=[

    {start:5.2,end:7.0,text:"Grand prix A1,"},
    {start:7.0,end:8.3,text:"unité 2,"},
    {start:8.3,end:8.9,text:"à l'école."},
    {start:10.0,end:10.8,text:"Section B."},
    {start:11.3,end:11.8,text:"Qu'est-ce que"},
    {start:11.8,end:12.9,text:"c'est ?"},
    {start:12.9,end:14.8,text:"Exercice 5."},
    {start:14.8,end:16.4,text:"Écoute et écris."},
    {start:18.3,end:19.4,text:"Bonjour Marie,"},
    {start:19.4,end:19.8,text:"nous devons"},
    {start:19.8,end:20.6,text:"vérifier si"},
    {start:20.6,end:21.1,text:"tu es prête"},
    {start:21.1,end:21.7,text:"pour l'école."},
    {start:22.3,end:22.9,text:"Tu as besoin"},
    {start:22.9,end:23.3,text:"d'une paire"},
    {start:23.3,end:24.2,text:"de ciseaux,"},
    {start:24.2,end:24.4,text:"d'un"},
    {start:24.4,end:25.4,text:"taille-crayon,"},
    {start:25.4,end:26.4,text:"d'une règle,"},
    {start:26.4,end:27.5,text:"d'un crayon,"},
    {start:27.5,end:28.4,text:"d'un compas et"},
    {start:28.4,end:28.9,text:"de crayons"},
    {start:28.9,end:29.4,text:"de couleur."},
    {start:30.1,end:30.7,text:"Tu as aussi"},
    {start:30.7,end:31.0,text:"besoin"},
    {start:31.0,end:31.5,text:"de livres."},
   
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
          top: "5%", // عدّل حسب مكان الزر
          left: "2%", // عدّل حسب مكان الزر
          cursor: "pointer",
          width: "50px",
          height: "50px",
      
       
        }}
        onClick={() => openPopup("audio", <AudioWithCaption src={page5_CD2} captions={captionsExample} />)}
      ></div>
   <div
        id="CD-1-page5"
        className="headset-icon-CD-page5 hover:scale-110 transition"
        style={{
          position: "absolute",
          top: "40%", // عدّل حسب مكان الزر
          left: "2%", // عدّل حسب مكان الزر
          cursor: "pointer",
          width: "50px",
          height: "50px",
       
        }}
        onClick={() => openPopup("audio", <AudioWithCaption src={U2Q5} captions={captionsExample2}/>)}
      ></div>
      <div
        className="Click -icon-CD-page5 hover:scale-110 transition"
        style={{
          overflow: "visible",
          position: "absolute",
          top: "7.0%",
          left: "51%",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 90 90"
          onClick={() => openPopup("exercise", { startIndex: 33 })}
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


