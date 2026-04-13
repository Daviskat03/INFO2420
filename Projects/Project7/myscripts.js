// JavaScript Document

var PrintButton1 = new Image();
var PrintButton2 = new Image();
var Logo1 = new Image();
var Logo2 = new Image();

if (document.images) {
  PrintButton1.src = "images/Print1.jpg";
  PrintButton2.src = "images/Print2.jpg";
  Logo1.src = "images/Logo1.png";
  Logo2.src = "images/Logo2.png";
}

var imgPath = "images/FullSize/";

var imgArray = [
  "image1Lg.jpg",
  "image2Lg.jpg",
  "image3Lg.jpg",
  "image4Lg.jpg"
];

var titleArray = [
  "Couple Biking",
  "Heli Skiing",
  "Couple on a Motorcycle",
  "Couple Hiking"
];

function swapImage(imgID) {
  var theImage = document.getElementById("theImage");
  var textDiv = document.getElementById("bottomText");

  theImage.src = imgPath + imgArray[imgID];
  theImage.alt = titleArray[imgID];
  textDiv.innerHTML = titleArray[imgID];
}

function preloadImages() {
  for (var i = 0; i < imgArray.length; i++) {
    var tmpImg = new Image();
    tmpImg.src = imgPath + imgArray[i];
  }
}