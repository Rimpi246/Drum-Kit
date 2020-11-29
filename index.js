// detecting Button Press

for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function() {

    var buttonInnerHTML = this.innerHTML;

   makeSound(buttonInnerHTML);

   buttonAnimation(buttonInnerHTML);

  });
}

// Detecting keyboard press
document.addEventListener("keydown",function(event){
 // here key is key property of the event which tells us which keyboard was pressed
  makeSound(event.key);
  buttonAnimation(event.key);
});

function makeSound(key1){
  switch (key1) {
    case "s":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "d":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3. play();
      break;

    case "f":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1. play();
      break;

    case "g":
      var kick = new Audio('sounds/kick-bass.mp3');
      kick.play();
      break;

    case "h":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2. play();
      break;

    case "j":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4. play();
      break;

    case "k":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    default:console.log(buttonInnerHTML);

  }
}

function buttonAnimation(currentKey){
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");
  // the animation effect remains,but we don't want that to remain.
  setTimeout(function() {
    activeButton.classList.remove("pressed");
  },100);
}
