import React from "react";
import page_1 from "../../../assets/unite3pages/53.png"
import page5_CD2 from "../../../assets/U3Audio/U3SBQ2.mp3";
import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start:5.6 , end: 6.4, text: "Grand prix" },
  { start:6.4 , end: 8.6, text: "A1, unité 3." },
  { start:9.3 , end: 10.0, text: "Sous le même" },
  { start:10.0 , end: 10.3, text: "toit." },
  { start:11.3 , end: 12.1, text: "Section B." },
  { start:12.6 , end: 14.0, text: "Mon rêve est..." },
  { start:14.8 , end: 16.6, text: "Exercice 2." },
  { start:16.6 , end: 17.7, text: "Écoute et mets" },
  { start:17.7 , end: 18.6, text: "en relation les" },
  { start:18.6 , end: 19.5, text: "professions et" },
  { start:19.5 , end: 20.8, text: "leurs images." },
  { start:22.8 , end: 23.8, text: "Le top 5 des" },
  { start:23.8 , end: 24.4, text: "professions de" },
  { start:24.4 , end: 26.5, text: "rêve des ados." },
  { start:26.5 , end: 27.3, text: "Une fille veut" },
  { start:27.3 , end: 28.0, text: "souvent être" },
  { start:28.9 , end: 30.1, text: "a avocate" },
  { start:32.2 , end: 35.9, text: "b médecin, c" },
  { start:35.9 , end: 37.8, text: "scientifique," },
  { start:39.0 , end: 39.6, text: "d " },
  { start:39.6 , end: 42.4, text: "chef, e" },
  { start:42.4 , end: 43.1, text: "professeur." },
  { start:45.1 , end: 45.9, text: "Un garçon veut" },
  { start:45.9 , end: 46.3, text: "souvent" },
  { start:46.3 , end: 46.5, text: "être" },
  { start:47.7 , end: 51.5, text: "a : athlète, b :" },
  { start:51.5 , end: 54.7, text: "pompier, c :" },
  { start:54.7 , end: 55.4, text: "ingénieur," },
  { start:57.5 , end: 61.2, text: "d pilote, e :" },
  { start:61.3 , end: 62.3, text: "policier" },

  
  
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
          top: "55%", // عدّل حسب مكان الزر
          left: "4%", // عدّل حسب مكان الزر
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
              style={{ overflow: "visible" , position:"absolute",top:"15.3%",left:"58%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 57 })}
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
