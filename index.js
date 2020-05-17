var numberOfDrums = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrums; i++) {


  //tu aplikuje na všetky buttony listener a každý pri splnení podmieniky click vezme text z inner html (teda to, čo je v buttone napísané vnútri elementu; this ukazuje presne na ten button, ktorý bol stlačený)
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var znak = this.innerHTML;
    handleClick(znak);
    buttonAnimation(znak);
  });

}

//tento listener je na celý doc a pri stlačení klávesy si vezme vďaka eventu.key kláves a pošli si ho do funkcie
document.addEventListener("keydown", function() {
  var znak = event.key;
  handleClick(znak);
  buttonAnimation(znak);
});

//angela hovorí: že "event" triggered the "keydown"
// addEventListener is a higher order function that takes another function as an input!
//callback function - waits to be executed and then works the higher one;
// to je rozdiel, že button čaká na stlačenie vs klávesa sa stlačí a potom sa deje kód

//aplikovaný listener pri klávesach je na celý dokument - pri stlačení klávesy
//

function handleClick(znak) {


  // switch funguje podobne ako if/else; ale namiesto uzavretia je break; odporúča sa vyplniť aj default, ak by nenašiel ani jednu podmienku;

  switch (znak) {

    case "a":
      var kick = new Audio("sounds/kick-bass.mp3");
      kick.play();
      break;

    case "s":
      var snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;

    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;

    case "d":
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;


    default:
  }

}

function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  }, 100);
      // toto je štandardná funkcia .js - nastaví časovanie funkcie, akejkoľvek jej platnosť v ms



}
