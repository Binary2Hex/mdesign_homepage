let logo = document.querySelector("#logo");
let header = document.querySelector(".header");
let output = document.querySelector(".output");

let screenWidth =
  window.innerWidth ||
  document.documentElement.clientWidth ||
  document.body.clientWidth;

let screenHeight =
  window.innerHeight ||
  document.documentElement.clientHeight ||
  document.body.clientHeight;

let maxX = screenWidth / 3;
let maxY = screenHeight / 5;

let initTop;
let initLeft;

function initImgPosition() {
  console.log(`screenWidth = ${screenWidth}`);
  console.log(`screenHeight = ${screenHeight}`);
  let logoWidth = logo.clientWidth;
  let logoHeight = logo.clientHeight;

  console.log(`logoHeight = ${logoHeight}`);
  console.log(`logoWidth = ${logoWidth}`);

  initTop = (screenHeight - logoHeight) / 3;
  initLeft = (screenWidth - logoWidth) / 2;
  logo.style.top = initTop + "px";
  logo.style.left = initLeft + "px";
}

function handleOrientation(event) {
  var absolute = event.absolute;
  // var alpha    = event.alpha;
  // var beta     = event.beta;
  // var gamma    = event.gamma;

  var x = event.beta; // In degree in the range [-180,180]
  var y = event.gamma; // In degree in the range [-90,90]

  if (x > 90) {
    x = 90;
  }
  if (x < -90) {
    x = -90;
  }

  logo.style.top = initTop + (maxY * x) / 90 + "px";
  logo.style.left = initLeft + (maxX * y) / 90 + "px";
}

window.onload = function() {
  initImgPosition();
};

window.addEventListener("deviceorientation", handleOrientation);
