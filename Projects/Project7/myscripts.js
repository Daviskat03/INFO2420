// JavaScript Document

var PrintButton1 = new Image();
var PrintButton2 = new Image();
var Logo1 = new Image();
var Logo2 = new Image();

if (document.images) {
  PrintButton1.src = "Images/Print1.jpg";
  PrintButton2.src = "Images/Print2.jpg";
  Logo1.src = "Images/Logo1.png";
  Logo2.src = "Images/Logo2.png";
}

var imgPath = "Images/FullSize/";

var imgArray = [
  "Image1lg.jpg",
  "Image2lg.jpg",
  "Image3lg.jpg",
  "Image4lg.jpg"
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