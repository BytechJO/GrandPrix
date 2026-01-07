import React from 'react'

import page_1 from "../../../assets/unite2pages/36.png"

import page5_CD2 from "../../../assets/U2Audio/U2ScQ3.mp3";
import U2ScQ4 from "../../../assets/U2Audio/U2ScQ4.mp3";
import AudioWithCaption from "../../AudioWithCaption";
import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const Page1 = ({ openPopup }) => {
const captionexample=[
{start:5.2,end:6.9,text:"Grand prix A1,"},
{start:6.9,end:8.0,text:"unité 2,"},
{start:8.5,end:9.3,text:"à l'école,"},
{start:10.1,end:10.9,text:"section C."},
{start:11.8,end:13.0,text:"Lundi, c'est"},
{start:13.0,end:14.6,text:"exercice 3."},
{start:15.4,end:16.0,text:"Écoute la"},
{start:16.0,end:16.6,text:"conversation"},
{start:16.6,end:17.7,text:"entre Carole"},
{start:17.7,end:18.2,text:"et Jenna."},
{start:19.1,end:19.9,text:"Complète le"},
{start:19.9,end:20.8,text:"dialogue en"},
{start:20.8,end:21.7,text:"utilisant les"},
{start:21.7,end:23.4,text:"mots proposés."},
{start:24.4,end:26.6,text:"Bonjour Jenna,"},
{start:26.6,end:28.2,text:"comment ça va ?"},
{start:28.2,end:29.6,text:"Salut Carole,"},
{start:29.6,end:30.3,text:"ça va bien ?"},
{start:30.3,end:31.7,text:"Merci, et toi ?"},
{start:31.7,end:33.8,text:"Bien, tu as vu"},
{start:33.8,end:34.4,text:"notre emploi"},
{start:34.4,end:35.1,text:"du temps ?"},
{start:35.9,end:36.4,text:"Non, on peut"},
{start:36.4,end:36.8,text:"aller voir."},
{start:38.0,end:38.6,text:"Oui, bien sûr."},
{start:40.1,end:40.8,text:"Nous n'avons"},
{start:40.8,end:41.2,text:"pas beaucoup"},
{start:41.2,end:41.8,text:"de leçons de"},
{start:41.8,end:42.3,text:"technologie."},
{start:42.9,end:43.4,text:"J'aime beaucoup"},
{start:43.4,end:44.1,text:"le prof."},
{start:44.1,end:46.0,text:"Oui, c'est vrai."},
{start:46.0,end:46.4,text:"Nous avons"},
{start:46.4,end:47.0,text:"maths chaque"},
{start:47.0,end:47.6,text:"jour, sauf"},
{start:47.6,end:48.8,text:"le mercredi."},
{start:48.8,end:49.5,text:"Le prof de maths"},
{start:49.5,end:50.2,text:"pose beaucoup"},
{start:50.2,end:51.1,text:"de questions."},
{start:51.1,end:51.5,text:"J'aime ça."},
{start:53.0,end:53.6,text:"Mon Dieu,"},
{start:53.6,end:54.0,text:"combien de cours"},
{start:54.0,end:55.2,text:"d'anglais ?"},
{start:55.2,end:56.6,text:"Un, deux, trois."},
{start:56.6,end:57.4,text:"Magnifique,"},
{start:57.4,end:58.0,text:"c'est ma matière"},
{start:58.0,end:59.0,text:"préférée."},
{start:59.0,end:59.3,text:"Quelle est"},
{start:59.3,end:59.6,text:"ta matière"},
{start:59.6,end:60.4,text:"préférée ?"},
{start:61.1,end:61.7,text:"Ma matière"},
{start:61.7,end:62.5,text:"préférée,"},
{start:62.5,end:62.9,text:"c'est l'art."},
{start:63.5,end:63.7,text:"Mais"},
{start:63.7,end:64.7,text:"malheureusement,"},
{start:64.7,end:65.0,text:"nous n'avons"},
{start:65.0,end:65.5,text:"pas beaucoup"},
{start:65.5,end:66.0,text:"de cours."},
{start:67.1,end:67.8,text:"Nous avons aussi"},
{start:67.8,end:68.2,text:"des cours de"},
{start:68.2,end:68.7,text:"physique,"},
{start:68.7,end:70.0,text:"d'EPS et de SVT."},
{start:70.0,end:70.2,text:"Qu'est-ce que"},
{start:70.2,end:72.6,text:"c'est la SVT ?"},
{start:72.6,end:73.8,text:"SVT, ça veut"},
{start:73.8,end:74.4,text:"dire Science"},
{start:74.4,end:75.2,text:"de la Vie et"},
{start:75.2,end:75.8,text:"de la Terre."},
{start:77.1,end:78.1,text:"Mon Dieu !"},
{start:78.1,end:78.7,text:"Nous avons les"},
{start:78.7,end:79.2,text:"nouvelles leçons"},
{start:79.2,end:81.1,text:"d'espagnol !"},
{start:81.1,end:82.1,text:"Oui, je sais,"},
{start:82.1,end:82.4,text:"le prof"},
{start:82.4,end:83.4,text:"n'est pas bon."},
{start:83.4,end:84.2,text:"Il est exigeant."},


]
const captionexample2=[
{start:5.2,end:8.3,text:"Grand prix A1, unité 2,"},
{start:8.3,end:9.7,text:"à l'école,"},
{start:9.7,end:11.4,text:"section C."},
{start:11.4,end:15.4,text:"Lundi, c'est exercice 4."},
{start:15.4,end:17.5,text:"Écoute encore une fois et"},
{start:17.5,end:19.3,text:"réponds aux questions."},
{start:19.3,end:21.6,text:"Bonjour Jenna,"},
{start:21.6,end:23.4,text:"comment ça va ?"},
{start:23.4,end:25.4,text:"Salut Carole, ça va bien ?"},
{start:25.4,end:26.1,text:"Merci,"},
{start:26.1,end:28.5,text:"et toi ? Bien."},
{start:28.5,end:29.5,text:"Tu as vu notre emploi"},
{start:29.5,end:31.3,text:"du temps ? Non,"},
{start:31.3,end:33.1,text:"on peut aller voir ?"},
{start:33.1,end:33.9,text:"Oui, bien sûr."},
{start:35.6,end:36.3,text:"Nous n'avons pas beaucoup"},
{start:36.3,end:37.8,text:"de leçons de technologie."},
{start:37.8,end:39.0,text:"J'aime beaucoup le prof."},
{start:39.0,end:41.0,text:"Oui, c'est vrai."},
{start:41.0,end:42.2,text:"Nous avons maths chaque"},
{start:42.2,end:43.7,text:"jour, sauf le mercredi."},
{start:43.7,end:45.0,text:"Le prof de maths pose"},
{start:45.0,end:46.1,text:"beaucoup de questions."},
{start:46.1,end:47.2,text:"J'aime ça."},
{start:47.2,end:48.7,text:"Ah mon Dieu,"},
{start:48.7,end:49.5,text:"combien de cours d'anglais"},
{start:49.5,end:51.5,text:"? Un, deux, trois."},
{start:51.5,end:52.5,text:"Magnifique,"},
{start:52.5,end:53.8,text:"c'est ma matière préférée."},
{start:53.8,end:54.8,text:"Quelle est ta matière"},
{start:54.8,end:55.8,text:"préférée ?"},
{start:55.8,end:57.5,text:"Ma matière préférée,"},
{start:57.5,end:58.4,text:"c'est l'art."},
{start:58.4,end:59.7,text:"Mais malheureusement,"},
{start:59.7,end:60.0,text:"nous n'avons pas beaucoup"},
{start:60.0,end:61.0,text:"de cours."},
{start:61.0,end:63.0,text:"Nous avons aussi des."},
{start:63.0,end:63.8,text:"Cours de physique."},
{start:63.8,end:65.1,text:"D'Eps et de SVT."},
{start:65.1,end:66.1,text:"Qu'est-ce que c'est"},
{start:66.1,end:68.5,text:"l'SVT ? SVT,"},
{start:68.5,end:69.7,text:"ça veut dire Science de"},
{start:69.7,end:71.3,text:"la Vie et de la Terre."},
{start:71.3,end:73.3,text:"Ah mon Dieu !"},
{start:73.3,end:74.1,text:"Nous avons les nouvelles"},
{start:74.1,end:76.5,text:"leçons d'espagnol ! Oui."},

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
        onClick={() => openPopup("audio", <AudioWithCaption src={page5_CD2} captions={captionexample} />)}
      ></div>
   <div
        id="CD-1-page5"
        className="headset-icon-CD-page5 hover:scale-110 transition"
        style={{
          position: "absolute",
          top: "56%", // عدّل حسب مكان الزر
          left: "2%", // عدّل حسب مكان الزر
          cursor: "pointer",
          width: "50px",
          height: "50px",
        
       
        }}
        onClick={() => openPopup("audio", <AudioWithCaption src={U2ScQ4} captions={captionexample2} />)}
      ></div>
      <div
        className="Click -icon-CD-page5 hover:scale-110 transition"
        style={{
          overflow: "visible",
          position: "absolute",
          top: "9.0%",
          left: "27%",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 90 90"
          onClick={() => openPopup("exercise", { startIndex: 37 })}
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
          top: "58%",
          left: "57.5%",
        }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 90 90"
          onClick={() => openPopup("exercise", { startIndex: 38})}
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


