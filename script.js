"use strict";

const arrowLeft = document.querySelector(".left-arrow");
const arrowRight = document.querySelector(".right-arrow");
const containerImgs = document.querySelectorAll(".img");
const imgWrapper = document.querySelector(".wrapper");

console.log(containerImgs.length);

let curImage = 1;

let timeout;

arrowLeft.addEventListener("click", function () {
  curImage--;
  clearTimeout(timeout);
  updateImg();
});

arrowRight.addEventListener("click", function () {
  curImage++;
  clearTimeout(timeout);
  updateImg();
});

updateImg();

function updateImg() {
  if (curImage > containerImgs.length) {
    curImage = 1;
  } else if (curImage < 1) {
    curImage = containerImgs.length;
  }

  imgWrapper.style.transform = `translateX(-${(curImage - 1) * 500}px)`;

  timeout = setTimeout(() => {
    curImage++;
    updateImg();
  }, 3000);
}
