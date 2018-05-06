tempest = new Audio('sounds/thunder.mp3');
introSound = new Audio('sounds/intro.mp3');
music = new Audio('sounds/music.mp3');
susp = new Audio('sounds/suspense.mp3');
music.volume = 0.5;
tempest.volume = 0.5;

window.onload = function() {
  let luciferTitle = document.getElementById("title"),
  theGame = document.getElementById("the-game"),
  start = document.getElementById("start"),
  body = document.getElementsByTagName("body")[0],
  wrap = document.getElementById("wrap"),
  question = document.getElementById("question"),
  instructions = document.getElementById("instructions")
  answer = document.getElementById("answer");


  luciferTitle.style = "opacity: 1; font-size: 8em";
  setTimeout(function(){
    start.style = "visibility: visible; opacity: 1;"
  },7000);


  start.onclick = function() {
    luciferTitle.style = "display: none;";
    start.removeAttribute("class", "transition5");
    luciferTitle.removeAttribute("class", "transition10");
    start.setAttribute("class", "transition1");
    luciferTitle.setAttribute("class", "transition1");
    start.style = "opacity: 0";
    luciferTitle.style = "opacity: 0";
    instructions.style = "display: none";
    
    setTimeout(function(){
      wrap.setAttribute("class", "intro-bg");    
    },1000);

    setTimeout(function(){
      wrap.removeAttribute("class", "intro-bg");
      wrap.setAttribute("class", "intro-gif");
      introSound.play();
    },2500);

    setTimeout(function(){
      wrap.setAttribute("class", "intro-black");
      music.loop = true;
      music.play();
    },3680);

    setTimeout(function(){
      tempest.play();
      start.style = "display: none";
      luciferTitle.style = "display: none";  
      wrap.removeAttribute("class", "intro-black");
      theGame.style = "display: block";
      body.setAttribute("id", "game");
    },8000);
  }
  
}