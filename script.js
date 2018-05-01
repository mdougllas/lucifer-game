console.log("Lucifer's here");

function luciferGame(){

  let lucifer = false;

  function takeKeyboard(){

    let askLucifer1 = "Oh great master of evil...";
    askLucifer1 = askLucifer1.split("");
    
    let pressCount = 0;
    
    document.onkeydown = function(e){
      if(e.keyCode !== 13){
      console.log(askLucifer1[pressCount]);
      pressCount++;
      }
    }
    
  }

  function leaveKeyboard(){

    document.onkeydown = function(e){
      if(e.keyCode !== 13){
      console.log(e);
      }
    }

  }
  
  document.onkeydown = function(e){

    switch(e.keyCode){
      case 13:
      console.log("enter");
      if(lucifer == false){
        takeKeyboard();
        lucifer = true;
        console.log(lucifer);
      } else {
        leaveKeyboard();
        lucifer = false;
        console.log(lucifer);
      }
      break;
    }

  }
}

luciferGame();