import React from 'react'

import page_1 from "../../../assets/unite2pages/40.png"

import page5_CD2 from "../../../assets/U2Audio/U2SdQ3.mp3";
import U2SdQ4 from "../../../assets/U2Audio/U2SdQ4.mp3";
import AudioWithCaption from "../../AudioWithCaption";
import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const Page1 = ({ openPopup }) => {

const captionsExample=[

{start:5.1,end:7.9,text:"Grand Prix A1, Unité 2,"},
{start:7.9,end:9.2,text:"À l'école,"},
{start:9.2,end:10.6,text:"Section D,"},
{start:10.6,end:12.0,text:"Un rendez-vous,"},
{start:12.0,end:13.6,text:"Exercice 3,"},
{start:13.6,end:15.4,text:"Écoute la conversation,"},
{start:15.4,end:17.2,text:"puis écris l'information"},
{start:17.2,end:17.9,text:"manquante."},
{start:19.8,end:21.9,text:"Comment ça va, Léla ?"},
{start:21.9,end:25.1,text:"Bien, et toi ? Pas mal."},
{start:25.1,end:26.9,text:"Tu aimes les maths ?"},
{start:26.9,end:27.6,text:"Oui,"},
{start:27.6,end:28.4,text:"mais notre prof parle"},
{start:28.4,end:29.7,text:"très doucement."},
{start:29.7,end:31.1,text:"Oui, c'est vrai."},
{start:31.1,end:32.1,text:"Est-ce que tu as choisi"},
{start:32.1,end:33.4,text:"ton club ?"},
{start:33.4,end:34.2,text:"Non,"},
{start:34.2,end:35.5,text:"nous avons deux nouveaux clubs,"},
{start:35.5,end:36.6,text:"le club sportif et"},
{start:36.6,end:37.8,text:"le club des arts."},
{start:37.8,end:40.2,text:"J'aime le club des arts parce"},
{start:40.2,end:41.5,text:"que c'est intéressant."},
{start:41.5,end:43.0,text:"Je veux m'inscrire au cours de"},
{start:43.1,end:44.1,text:"photographie et après au"},
{start:44.1,end:46.2,text:"cours de graphisme."},
{start:46.2,end:47.8,text:"À quelle heure commence le"},
{start:47.8,end:49.5,text:"cours de photographie ?"},
{start:49.5,end:51.9,text:"Il commence à 16h45."},
{start:51.9,end:53.7,text:"J'aimerais suivre ce cours,"},
{start:53.7,end:55.6,text:"mais j'ai cours de gymnastique."},
{start:55.6,end:57.5,text:"Comme c'est triste,"},
{start:57.5,end:59.3,text:"mais nous avons rendez-vous avec"},
{start:59.3,end:60.4,text:"Monsieur Berger à propos"},
{start:60.4,end:61.9,text:"de notre projet."},
{start:61.9,end:64.0,text:"Oui, c'est vrai ! Mon Dieu,"},
{start:64.9,end:65.7,text:"il est 12h55 ! Nous."},






]
const captionsExample2=[
{start:5.1,end:7.9,text:"Grand Prix A1, Unité 2,"},
{start:7.9,end:9.2,text:"À l'école,"},
{start:9.2,end:10.6,text:"Section D,"},
{start:10.6,end:12.0,text:"Un rendez-vous,"},
{start:12.0,end:13.6,text:"Exercice 4,"},
{start:13.9,end:15.5,text:"Écoute la conversation"},
{start:15.5,end:17.7,text:"entre Maya et Doreen,"},
{start:17.7,end:19.4,text:"puis écris l'information"},
{start:19.4,end:20.2,text:"manquante."},
{start:21.7,end:23.0,text:"Maya."},
{start:23.0,end:24.0,text:"Est-Ce que tu as choisi ton."},
{start:24.0,end:25.7,text:"Club ?"},
{start:25.7,end:26.7,text:"Oui,"},
{start:26.7,end:27.8,text:"je veux m'inscrire au club de"},
{start:27.8,end:28.8,text:"sculpture et de théâtre."},
{start:28.8,end:29.9,text:"Je pense que ce sera très"},
{start:29.9,end:31.1,text:"intéressant et le prof est très."},
{start:31.1,end:31.9,text:"Beau. Et toi."},
{start:32.7,end:34.5,text:"Je ne suis pas sûre."},
{start:34.5,end:35.8,text:"Je veux m'inscrire au cours de"},
{start:35.8,end:37.7,text:"natation car j'aime le sport et"},
{start:37.7,end:39.2,text:"le prof est très exigeant."},
{start:39.2,end:40.3,text:"Je vais peut-être aussi"},
{start:40.3,end:41.3,text:"m'inscrire au club de"},
{start:41.3,end:42.8,text:"gymnastique avec Léla."},
{start:42.8,end:44.7,text:"Mais je veux aussi aller au club"},
{start:44.7,end:46.6,text:"d'artisanat et. De sculpture."},
{start:46.6,end:48.2,text:"À quelle heure commence le."},
{start:48.2,end:48.5,text:"Cours de."},
{start:48.5,end:50.3,text:"Natation ?"},
{start:50.3,end:52.4,text:"Le cours commence à 16h30 et se."},
{start:52.4,end:54.6,text:"Termine à 17h30."},
{start:54.6,end:56.7,text:"Bon, viens avec moi au club de."},
{start:56.7,end:58.4,text:"Sculpture et tu peux…."},
{start:58.4,end:59.9,text:"À quelle heure"},
{start:59.9,end:60.1,text:"Commence le club de."},
{start:60.1,end:62.0,text:"Sculpture ?"},
{start:62.0,end:63.9,text:"À 15h. Et au même moment,"},
{start:63.9,end:65.1,text:"il y a le club d'artisanat."},
{start:65.1,end:66.2,text:"Tu peux aller à ces deux clubs."},
{start:66.2,end:66.9,text:"Et faire ton choix."},


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
          top: "4%", // عدّل حسب مكان الزر
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
          top: "50%", // عدّل حسب مكان الزر
          left: "2%", // عدّل حسب مكان الزر
          cursor: "pointer",
          width: "50px",
          height: "50px",
          
         
       
        }}
        onClick={() => openPopup("audio", <AudioWithCaption src={U2SdQ4}  captions={captionsExample2}/>)}
      ></div>

  
      <div
        className="Click -icon-CD-page5 hover:scale-110 transition"
        style={{
          overflow: "visible",
          position: "absolute",
          top: "6.6%",
          left: "67.5%",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 90 90"
          onClick={() => openPopup("exercise", { startIndex: 41})}
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
          top: "55.6%",
          left: "40.9%",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 90 90"
          onClick={() => openPopup("exercise", { startIndex: 42})}
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


