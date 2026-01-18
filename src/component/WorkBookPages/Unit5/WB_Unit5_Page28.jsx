import React from 'react'
import page_1 from "../../../assets/workpages/28.png"
import arrowBtn from "../../../assets/unit1/imgs/Page 01/Arrow.svg";
const WB_Unit1_Page1 = ({openPopup}) => {
  return (
    <div className='page_1-background' >
        
      <img
        src={page_1}

       
     
      />
 {/* زر التمرين 2 */}
      <div
        className="wb-unit1-p3-q2 hover:scale-110 transition"
      style={{ overflow: "visible" , position:"absolute",top:"14.0%",left:"56%"  }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 90 90"
          onClick={() => openPopup("exercise", { startIndex: 57})}
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
      style={{ overflow: "visible" , position:"absolute",top:"51.0%",left:"29%"  }}
      >
        <svg
          width="22"
          height="22"
          viewBox="0 0 90 90"
          onClick={() => openPopup("exercise", { startIndex: 58})}
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
  )
}

export default WB_Unit1_Page1
