import { useState } from "react";
import Swal from "sweetalert2";
import "./WorkBookNavigator.css";
import next from "../../assets/unit1/imgs/next btn white.svg";
import back from "../../assets/unit1/imgs/back btn white.svg";
import { workBookData } from "./WorkBookData";

export default function WorkBookNavigator({ startIndex = 0 }) {
  const [index, setIndex] = useState(startIndex);

  const lesson = workBookData[index];
  if (!lesson || !lesson.component) {
    return null;
  }

  const CurrentLesson = lesson.component;

  const handleNext = () => {
    const lesson = workBookData[index];
    if (!lesson) return;

    if (lesson.lastOfUnit && lesson.unit % 2 === 0) {
      Swal.fire({
        html: `
          <div class="custom-popup-content">
            <h2 style="font-size:25px;color=black">
              Congratulations! You've finished all the exercises of Unit🎉</br>
              Do you want to continue to the review exercises?
            </h2>
          </div>
        `,
        imageWidth: 200,
        imageHeight: 200,
        icon: "question",
        background: "#dfeaf6",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        buttonsStyling: false,
        customClass: {
          popup: "my-popup",
          image: "my-image",
          title: "my-title",
          content: "my-content",
          confirmButton: "my-button",
          cancelButton: "my-button1",
        },
      }).then((res) => {
        if (res.isConfirmed && index + 1 < workBookData.length) {
          setIndex(index + 1);
        }
      });
      return;
    }

    if (lesson.lastOfUnit) {
      Swal.fire({
        html: `
          <div class="custom-popup-content">
            <h2 style="font-size:25px;color=black">
              Congratulations! You've finished all the exercises of Unit🎉</br>
              Do you want to continue to Unit ${lesson.unit + 1} exercises?
            </h2>
          </div>
        `,
        imageWidth: 200,
        imageHeight: 200,
        icon: "question",
        background: "#dfeaf6",
        confirmButtonText: "Yes",
        cancelButtonText: "No",
        showCancelButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        buttonsStyling: false,
        customClass: {
          popup: "my-popup",
          image: "my-image",
          title: "my-title",
          content: "my-content",
          confirmButton: "my-button",
          cancelButton: "my-button1",
        },
      }).then((res) => {
        if (res.isConfirmed && index + 1 < workBookData.length) {
          setIndex(index + 1);
        }
      });
      return;
    }

    if (lesson.lastOfReview) {
      Swal.fire({
        html: `
          <div class="custom-popup-content">
            <h2 style="font-size:25px;color=black">
              Congratulations! You've finished all the exercises 🎉</br>
              Do you want to restart from the beginning?
            </h2>
          </div>
        `,
        imageWidth: 200,
        imageHeight: 200,
        icon: "question",
        background: "#dfeaf6",
        confirmButtonText: "Start Again",
        cancelButtonText: "No",
        showCancelButton: true,
        allowOutsideClick: false,
        allowEscapeKey: false,
        buttonsStyling: false,
        customClass: {
          popup: "my-popup",
          image: "my-image",
          title: "my-title",
          content: "my-content",
          confirmButton: "my-button",
          cancelButton: "my-button1",
        },
      }).then((res) => {
        if (res.isConfirmed) setIndex(0);
      });
      return;
    }

    if (index + 1 < workBookData.length) {
      setIndex(index + 1);
    }
  };

  return (
    <div>
      <div
        className="nav-buttons"
        style={{
          display: "flex",
          width: "100%",
          marginBottom: "5px",
          position: "fixed",
          gap: "20px",
          justifyContent: "flex-start",
          backgroundColor: "#430f68",
          zIndex: 99000,
        }}
      >
        {index ? (
          <button
            onClick={() => setIndex(index - 1)}
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 90 90"
              style={{ padding: "10px" }}
              className="nav-btn w-10 h-10 rounded-full transition"
            >
              <image href={back} x="0" y="0" width="90" height="90" />
            </svg>
            Exercice précédent
          </button>
        ) : (
          <button
            style={{
              display: "flex",
              alignItems: "center",
              color: "white",
              fontSize: "16px",
              fontWeight: "500",
              cursor: "pointer",
            }}
          >
            <svg
              width="25"
              height="25"
              viewBox="0 0 90 90"
              style={{ padding: "10px" }}
              className="nav-btn w-10 h-10 rounded-full transition"
            >
              <image href={back} x="0" y="0" width="90" height="90" />
            </svg>
            Exercice précédent
          </button>
        )}

        <button
          onClick={handleNext}
          style={{
            display: "flex",
            alignItems: "center",
            color: "white",
            fontSize: "16px",
            fontWeight: "500",
            cursor: "pointer",
          }}
        >
          Exercice suivant
          <svg
            width="25"
            height="25"
            viewBox="0 0 90 90"
            style={{ padding: "10px" }}
            className="nav-btn w-10 h-10 rounded-full transition"
          >
            <image href={next} x="0" y="0" width="90" height="90" />
          </svg>
        </button>
      </div>

      <CurrentLesson />
    </div>
  );
}
