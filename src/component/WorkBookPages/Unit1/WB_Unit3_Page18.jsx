import React from "react";
import page2 from "../../../assets/workpages/18.png";
import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";

const WB_Unit1_Page2 = ({ openPopup }) => {
  return (
    <div className="relative w-full h-full flex justify-center items-center">
      {/* صورة الصفحة */}
      <img
        src={page2}
        alt="Book Index"
        className="w-full h-full rounded-2xl shadow-lg"
      />

      {/* زر التمرين 2 */}
      <div
        className="wb-unit1-p3-q2 hover:scale-110 transition"
        style={{ overflow: "visible" , position:"absolute",top:"7.0%",left:"19%"  }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 90 90"
          onClick={() => openPopup("exercise", { startIndex: 36})}
          style={{ overflow: "visible" }}
        >
          <image
            className="svg-img"
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
        className="wb-unit1-p3-q2 hover:scale-110 transition"
        style={{ overflow: "visible" , position:"absolute",top:"31.5%",left:"77%"  }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 90 90"
          onClick={() => openPopup("exercise", { startIndex: 37})}
          style={{ overflow: "visible" }}
        >
          <image
            className="svg-img"
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
        className="wb-unit1-p3-q2 hover:scale-110 transition"
        style={{ overflow: "visible" , position:"absolute",top:"60.7%",left:"51.5%"  }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 90 90"
          onClick={() => openPopup("exercise", { startIndex: 38})}
          style={{ overflow: "visible" }}
        >
          <image
            className="svg-img"
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

export default WB_Unit1_Page2;
