// ---Project Dropdown Menu--- //
var DropdownCollector = document.getElementsByClassName("Projcet-DropDownButton")
for (var i = 0; i < DropdownCollector.length; i++){
    DropdownCollector[i].addEventListener("click", function() {
        this.classList.toggle("Project-ActiveDropDownButton")
        var panel = this.nextElementSibling;
        var image = this.childNodes[5].childNodes[3].childNodes[1]
        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
            image.src = "images/pictures/dropdown/DdpDownOrange.png"
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
            image.src = "images/pictures/dropdown/DdpUpLight.png"
        }
    
    })

}

// ---Sticky NavBar--- //
// Get the navbar
var NavBar = document.getElementById("NavBar-Section");

// there should only be 1 main section
var MainSection = document.getElementsByClassName("Main-Section")[0];



// Get the offset position of the navbar
var PosStickyStart = NavBar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset >= PosStickyStart) {
    NavBar.classList.add("NavBar-StickyNavBar");
    MainSection.style.marginTop = "var(--NavBarHeight)";
    } else {
    NavBar.classList.remove("NavBar-StickyNavBar");
    MainSection.style.marginTop = "0cm";
    }
}
  
// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};



// // Get the navbar
// var NavBar = document.getElementsByClassName("NavBar-Section");

// // Get the offset position of the navbar
// var PosStickyStart = NavBar.offsetTop;


// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};



// // Slides
var slideIndex = 1; 
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("SlideShow-FadingTitles")

  if (n > slides.length)  {slideIndex=1}
  else if (n < 1) {slideIndex=slides.length}

  for (i=0; i < slides.length; i++)
  {
    if (i == slideIndex-1){
      slides[i].style.display = "block"
    }
    else {
      slides[i].style.display = "none"
    }
  }
}

setInterval(function(){showSlides(slideIndex+=1)},5000);


// Christmas Card 2022

var modal = document.getElementById("Modal-Container");
var btn = document.getElementById("Envelope");
var span = document.getElementsByClassName("close")[0];
var mleft = document.getElementById("mleft");
var mright = document.getElementById("mright");
var CardFront = document.getElementById("Card-Front");
var CardText = document.getElementById("Card-Text");


var CardPos = 0
CardUpdate(0)

function StepUp(x){
  CardUpdate(CardPos+=x)
}

function CardUpdate(x){
  if (CardPos>=1) {CardPos=1;} else if (CardPos<=0) {CardPos=0;}
  
  if (CardPos == 1) {
    mright.style.display="none";
    mleft.style.display="block";
    CardFront.style.display="none";
    CardText.style.display="block";
  }
  else if (CardPos == 0){
    mright.style.display="block";
    mleft.style.display="none";
    CardFront.style.display="block";
    CardText.style.display="none";
  }
  else {
    mright.style.display="block";
    mleft.style.display="block";
    CardFront.style.display="block";
    CardText.style.display="none";
  }
}


btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function(){
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}