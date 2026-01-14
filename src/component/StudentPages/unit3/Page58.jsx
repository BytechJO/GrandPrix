import React from "react";
import page_1 from "../../../assets/unite3pages/58.png"
import page5_CD2 from "../../../assets/U3Audio/U3SCQ4.mp3";
import page5_CD3 from "../../../assets/U3Audio/U3ScQ5.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start:5.5 , end: 6.6, text: "Rempris A1," },
  { start:7.1 , end: 8.6, text: "unité 3," },
  { start:8.5 , end: 9.5, text: "sous le même toit," },
  { start:10.2 , end: 10.9, text: "section C," },
  { start:11.5 , end: 12.1, text: "ma maison." },
  { start:13.0 , end: 13.9, text: "Exercice 4." },
  { start:14.6 , end: 17.9, text: "Écoute la conversation entre Belle et Bête." },
  { start:20.3 , end: 22.0, text: "J'ai trouvé une bonne annonce pour nous." },
  { start:23.23 , end: 23.58, text: "Ah bon ?" },
  { start:24.61 , end: 25.29, text: "C'est un T2." },
  { start:26.6 , end: 27.4, text: "Qu'est-ce que ça veut dire," },
  { start:27.4 , end: 27.9, text: "T2 ?" },
  { start:29.0 , end: 31.07, text: "C'est un appartement qui comporte un salon," },
  { start:31.07 , end: 32.55, text: "une cuisine séparée," },
  { start:32.9 , end: 34.6, text: "une chambre et une salle de bain." },
  { start:35.8 , end: 35.9, text: "Ah," },
  { start:35.9 , end: 36.6, text: "c'est super !" },
  { start:36.8 , end: 38.3, text: "Est-ce que cet appartement est meublé ?" },
  { start:39.44 , end: 39.60, text: "Oui," },
  { start:39.9 , end: 40.3, text: "en plus," },
  { start:40.4 , end: 41.8, text: "il est au deuxième étage." },
  { start:42.9 , end: 44.6, text: "Est-ce que les transports en commun sont loin ?" },
  { start:45.6 , end: 45.7, text: "Non," },
  { start:45.7 , end: 49.40, text: "il y a une station du métro 12 et un arrêt du tram 3A." },
  { start:50.59 , end: 53.3, text: "Est-ce que tu as le numéro du propriétaire ?" },
  { start:53.3 , end: 53.5, text: "Oui," },
  { start:53.5 , end: 54.92, text: "nous devons prendre rendez-vous." },

];
const captionsExample2 = [
  { start:5.4, end: 6.6, text: "Rempris A1," },
  { start:7.1 , end: 8.3, text: "unité 3," },
  { start:8.5 , end: 9.5, text: "sous le même toit," },
  { start:10.2 , end: 10.9, text: "section C," },
  { start:11.5 , end: 12.13, text: "ma maison." },
  { start:13.7 , end: 14.0, text: "Exercice 5." },
  { start:14.7 , end: 17.8, text: "Écoute la conversation entre Belle et Bête." },
  { start:18.6 , end: 20.5, text: "De quoi parle-t-elle ?" },
  { start:20.5 , end: 21.8, text: "Choisis la bonne réponse." },
  { start:23.9 , end: 25.6, text: "J'ai trouvé une bonne annonce pour nous." },
  { start:26.89 , end: 27.23, text: "Ah bon ?" },
  { start:28.25 , end: 28.95, text: "C'est un T2." },
  { start:30.23 , end: 31.51, text: "Qu'est-ce que ça veut dire T2 ?" },
  { start:32.7 , end: 34.75, text: "C'est un appartement qui comporte un salon" },
  { start:34.99 , end: 36.23, text: "une cuisine séparée," },
  { start:36.63 , end: 38.27, text: "une chambre et une salle de bain." },
  { start:39.43 , end: 39.59, text: "Ah," },
  { start:39.6 , end: 40.25, text: "c'est super !" },
  { start:40.47 , end: 41.9, text: "Est-ce que cet appartement est meublé ?" },
  { start:43.0 , end: 43.2, text: "Oui," },
  { start:43.5 , end: 43.9, text: "en plus," },
  { start:44.0 , end: 45.4, text: "il est au deuxième étage." },
  { start:46.5 , end: 48.2, text: "Est-ce que les transports en commun sont loin ?" },
  { start:49.23 , end: 49.37, text: "Non," },
  { start:49.37 , end: 53.0, text: "il y a une station du métro 12 et un arrêt du tram 3A." },
  { start:54.2 , end: 56.9, text: "Est-ce que tu as le numéro du propriétaire ?" },
  { start:56.9 , end: 57.1, text: "Oui," },
  { start:57.1 , end: 58.6, text: "nous devons prendre rendez-vous." },

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
          top: "39%", // عدّل حسب مكان الزر
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
              style={{ overflow: "visible" , position:"absolute",top:"45.6%",left:"20.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 64 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"57.6%",left:"40.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 65 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"68.6%",left:"43.9%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 66 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"43.6%",left:"90.9%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 67 })}
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
