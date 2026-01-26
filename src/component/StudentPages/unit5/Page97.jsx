import React from "react";
import page_1 from "../../../assets/unite5pages/97.png"
import page5_CD2 from "../../../assets/U5Audio/u5sbq1.mp3";

import AudioWithCaption from "../../AudioWithCaption";

import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const captionsExample = [
  { start:5.18 , end: 8.15, text: "Grand prix A1, unité 5" },
  { start:8.15 , end: 9.30, text: "les repas" },
  { start:9.30 , end: 10.5, text: "section B" },
  { start:10.5 , end: 12.2, text: "des repas sains." },
  { start:12.27 , end: 14.13, text: "Exercice 1." },
  { start:14.13 , end: 15.2, text: "Écoute" },
  { start:15.2 , end: 17.7, text: "répète et écris le numéro" },
  { start:17.7 , end: 18.5, text: "correspondant." },
  { start:37.117 , end: 39.067, text: "F. Un chou." },
  { start:93.067 , end: 42.167, text: "G. Un poivron." },
  { start:42.2 , end: 45.5, text: "H. Une banane." },
  { start:45.5 , end: 47.8, text: "I. Une orange." },
  { start:50.077 , end: 51.2, text: "J. Une pomme." },
  { start:53.33 , end: 54.697, text: "K. Une poire." },
  { start:56.65 , end: 58.437, text: "L. Une pastèque." },
  { start:60.0 , end: 62.5, text: "M. Des raisins." },
  { start:62.5 , end: 65.157, text: "N. Des fraises." },


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
          top: "12%", // عدّل حسب مكان الزر
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
              style={{ overflow: "visible" , position:"absolute",top:"14.9%",left:"58.5%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 129 })}
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
              style={{ overflow: "visible" , position:"absolute",top:"56.5%",left:"36.9%"  }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 90 90"
                onClick={() => openPopup("exercise", { startIndex: 130 })}
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
