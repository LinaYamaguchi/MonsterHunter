"use strict";
// Please don't delete the 'use strict' line abov

const moveToRight = () => {
  const element = document.getElementById("news-slide");
  element.style.webkitTransform = "translateX(-310px)";
};

const moveToLeft = () => {
  const element = document.getElementById("news-slide");
  element.style.webkitTransform = "translateX(310px)";
};
