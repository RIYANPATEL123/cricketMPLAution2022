var playera;
var teamb = 0;
var teamc = 0;
var teamd = 0;
var teame = 0;
var teamf = 0;
var teamg = 0;
var total  = 0;
var pointb = 0;
var pointc = 0;
var pointd = 0;
var pointe = 0;
var pointf = 0;
var pointg = 0;
var counterb = 1;
var counterc = 1;
var counterd = 1;
var countere = 1;
var counterf = 1;
var counterg = 0;
var mplb = 82000;
var mplc = 75000;
var mpld = 80000;
var mple = 82000;
var mplf = 82000;
var mplg = 86000;


//add button 
function teambb() {
  teamb += 1000;
  document.getElementById("teamb").innerHTML = teamb;
  total = teamb+teamc+teamd+teame+teamf+teamg;
  document.getElementById("total").innerHTML = total;
};

function teamcb() {
  teamc += 1000;
  document.getElementById("teamc").innerHTML = teamc;
  total = teamb+teamc+teamd+teame+teamf+teamg;
  document.getElementById("total").innerHTML = total;
};

function teamdb() {
  teamd += 1000;
  document.getElementById("teamd").innerHTML = teamd;
  total = teamb+teamc+teamd+teame+teamf+teamg;
  document.getElementById("total").innerHTML = total;
};

function teameb() {
  teame += 1000;
  document.getElementById("teame").innerHTML = teame;
  total = teamb+teamc+teamd+teame+teamf+teamg;
  document.getElementById("total").innerHTML = total;
};

function teamfb() {
  teamf += 1000;
  document.getElementById("teamf").innerHTML = teamf;
  total = teamb+teamc+teamd+teame+teamf+teamg;
  document.getElementById("total").innerHTML = total;
};

function teamgb() {
  teamg += 1000;
  document.getElementById("teamg").innerHTML = teamg;
  total = teamb+teamc+teamd+teame+teamf+teamg;
  document.getElementById("total").innerHTML = total;
};


//total button
function totall() {
  total =teamb+teamc+teamd+teame+teamf+teamg;
  document.getElementById("total").innerHTML = total;
};

//minus button 
function teambbb() {
  teamb -= 1000;
  document.getElementById("teamb").innerHTML = teamb;
  total = teamb+teamc+teamd+teame+teamf+teamg;
  document.getElementById("total").innerHTML = total;
  
};
function teambc() {
  teamc -= 1000;
  document.getElementById("teamc").innerHTML = teamc;
  total = teamb+teamc+teamd+teame+teamf+teamg;
  document.getElementById("total").innerHTML = total;
  
};
function teambd() {
  teamd -= 1000;
  document.getElementById("teamd").innerHTML = teamd;
  total = teamb+teamc+teamd+teame+teamf+teamg;
  document.getElementById("total").innerHTML = total;
  
};
function teambe() {
  teame -= 1000;
  document.getElementById("teame").innerHTML = teame;
  total = teamb+teamc+teamd+teame+teamf+teamg;
  document.getElementById("total").innerHTML = total;
  
};
function teambf() {
  teamf -= 1000;
  document.getElementById("teamf").innerHTML = teamf;
  total = teamb+teamc+teamd+teame+teamf+teamg;
  document.getElementById("total").innerHTML = total;
  
};
function teambg() {
  teamg -= 1000;
  document.getElementById("teamg").innerHTML = teamg;
  total = teamb+teamc+teamd+teame+teamf+teamg;
  document.getElementById("total").innerHTML = total;
  
};

//points of one team 

function pointsb(){
  counterb +=1;
  document.getElementById("counterb").innerHTML = counterb;
  mplb -= total;
  document.getElementById("mplb").innerHTML = mplb;
  mplb += 1000;
  document.getElementById("mplb").innerHTML = mplb;
  teamb = 0;
  document.getElementById("teamb").innerHTML = teamb;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamd = 0;
  document.getElementById("teamd").innerHTML = teamd;
  teame = 0;
  document.getElementById("teame").innerHTML = teame;
  teamf = 0;
  document.getElementById("teamf").innerHTML = teamf;
  teamg = 0;
  document.getElementById("teamg").innerHTML = teamg;
  total = 0;
  document.getElementById("total").innerHTML = total;


};

function pointsc(){
  counterc +=1;
  document.getElementById("counterc").innerHTML = counterc;
  mplc -= total;
  document.getElementById("mplc").innerHTML = mplc;
  mplc += 1000;
  document.getElementById("mplc").innerHTML = mplc;
  teamb = 0;
  document.getElementById("teamb").innerHTML = teamb;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamd = 0;
  document.getElementById("teamd").innerHTML = teamd;
  teame = 0;
  document.getElementById("teame").innerHTML = teame;
  teamf = 0;
  document.getElementById("teamf").innerHTML = teamf;
  teamg = 0;
  document.getElementById("teamg").innerHTML = teamg;
  total = 0;
  document.getElementById("total").innerHTML = total;

};

function pointsd(){
  counterd +=1;
  document.getElementById("counterd").innerHTML = counterd;
  mpld -= total;
  document.getElementById("mpld").innerHTML = mpld;
  mpld += 1000;
  document.getElementById("mpld").innerHTML = mpld;
  teamb = 0;
  document.getElementById("teamb").innerHTML = teamb;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamd = 0;
  document.getElementById("teamd").innerHTML = teamd;
  teame = 0;
  document.getElementById("teame").innerHTML = teame;
  teamf = 0;
  document.getElementById("teamf").innerHTML = teamf;
  teamg = 0;
  document.getElementById("teamg").innerHTML = teamg;
  total = 0;
  document.getElementById("total").innerHTML = total;
};

function pointse(){
  countere +=1;
  document.getElementById("countere").innerHTML = countere;
  mple -= total;
  document.getElementById("mple").innerHTML = mple;
  mple += 1000;
  document.getElementById("mple").innerHTML = mple;
  teamb = 0;
  document.getElementById("teamb").innerHTML = teamb;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamd = 0;
  document.getElementById("teamd").innerHTML = teamd;
  teame = 0;
  document.getElementById("teame").innerHTML = teame;
  teamf = 0;
  document.getElementById("teamf").innerHTML = teamf;
  teamg = 0;
  document.getElementById("teamg").innerHTML = teamg;
  total = 0;
  document.getElementById("total").innerHTML = total;
};

function pointsf(){
  counterf +=1;
  document.getElementById("counterf").innerHTML = counterf;
  mplf -= total;
  document.getElementById("mplf").innerHTML = mplf;
  mplf += 1000;
  document.getElementById("mplf").innerHTML = mplf;
  teamb = 0;
  document.getElementById("teamb").innerHTML = teamb;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamd = 0;
  document.getElementById("teamd").innerHTML = teamd;
  teame = 0;
  document.getElementById("teame").innerHTML = teame;
  teamf = 0;
  document.getElementById("teamf").innerHTML = teamf;
  teamg = 0;
  document.getElementById("teamg").innerHTML = teamg;
  total = 0;
  document.getElementById("total").innerHTML = total;
};

function pointsg(){
  counterg +=1;
  document.getElementById("counterg").innerHTML = counterg;
  mplg -= total;
  document.getElementById("mplg").innerHTML = mplg;
  mplg += 1000;
  document.getElementById("mplg").innerHTML = mplg;
  teamb = 0;
  document.getElementById("teamb").innerHTML = teamb;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamc = 0;
  document.getElementById("teamc").innerHTML = teamc;
  teamd = 0;
  document.getElementById("teamd").innerHTML = teamd;
  teame = 0;
  document.getElementById("teame").innerHTML = teame;
  teamf = 0;
  document.getElementById("teamf").innerHTML = teamf;
  teamg = 0;
  document.getElementById("teamg").innerHTML = teamg;
  total = 0;
  document.getElementById("total").innerHTML = total;
};




//image grid
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n+9);
  
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
  showSlides(slideIndex += n);
  
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}