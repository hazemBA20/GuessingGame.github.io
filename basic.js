let mybutton=document.querySelector('#user');
let myheader=document.querySelector("h2");
function setUser(){
  let username=prompt("please insert your name in the bracket!");
  localStorage.setItem("nom",username);
  myheader.textContent= "playing as " + username + "    good luck!" ;
}
mybutton.addEventListener("click",function(){setUser();});
if (!localStorage.getItem("nom")) {
  setUser();
} else {
  let storedName = localStorage.getItem("nom");
  myheader.textContent =  "playing as " + storedName + "    good luck!" 
}
let valeur = 0;
let diff=document.querySelector("#difficulty");
let num=document.querySelector("#num");
let easy_mode=document.querySelector("#easy");
let medium_mode=document.querySelector("#medium");
let hard_mode=document.querySelector("#hard");
let res=document.querySelector(".results");
let next=document.querySelector("#next");



function easy() {
  diff.textContent = "playing on easy mode, you have 10 tries in total";
  res.textContent = "";
  next.textContent="10 guesses left"
  let key = Math.floor(Math.random()*20);
  let i = 0;

  function checkGuess() {
    valeur = parseInt(document.getElementById('guess').value); // Convert string to number
    document.getElementById('guess').value = "";

    if (valeur === key) {
      res.textContent = "Congrats you win!";
    } else {
      i++;
      if (i < 10) {
        next.textContent =  (10 - i) + " guesses left";

      } else {
        next.textContent = "You have 0 left";
        res.textContent = "Sorry you lost the random number was "+ key +" try your luck once again!";
        next.textContent = "";
        document.getElementById('guess').value = "";
        next.removeEventListener("click",checkGuess);
        return
      }
    }
  }
  
    next.addEventListener("click", checkGuess);
}
function medium() {
  diff.textContent = "playing on medium difficulty, you have 5 tries in total";
  res.textContent = "";
  next.textContent="5 guesses left"
  let key = Math.floor(Math.random()*20);
  let i = 0;

  function checkGuess() {
    valeur = parseInt(document.getElementById('guess').value); // Convert string to number
    document.getElementById('guess').value = "";

    if (valeur === key) {
      res.textContent = "Congrats you win!";
    } else {
      i++;
      if (i < 5) {
        next.textContent = (5 - i) + " guesses left";

      } else {
        next.textContent = "You have 0 left";
        res.textContent = "Sorry you lost the random number was "+ key+ " try your luck once again!";
        
        next.textContent = "";
        document.getElementById('guess').value = "";
        next.removeEventListener("click",checkGuess);
        return
      }
    }
  }

  next.addEventListener("click", checkGuess);
}
function hard() {
  diff.textContent = "playing on hard mode, you only have 3 tries ,  make the most of them!";
  res.textContent = "";
  next.textContent="3 guesses left"
  let key = Math.floor(Math.random()*20);
  let i = 0;

  function checkGuess() {
    valeur = parseInt(document.getElementById('guess').value); // Convert string to number
    document.getElementById('guess').value = "";

    if (valeur === key) {
      res.textContent = "Congrats you win!";
    } else {
      i++;
      if (i < 3) {
        next.textContent = (3 - i) + " guesses left";

      } else {
        next.textContent = "You have 0 left";
        res.textContent = "Sorry you lost the random number was "+ key +" try your luck once again!";
        next.textContent = "";
        document.getElementById('guess').value = "";
        next.removeEventListener("click",checkGuess);


        return
      }
    }
  }

    next.addEventListener("click", checkGuess);
  
  }

easy_mode.addEventListener("click", function(){easy();});
medium_mode.addEventListener("click", function(){medium();});
hard_mode.addEventListener("click", function(){hard();});


