//Starting main function
function luciferGame(){

  //Taking control of keyboard
  function takeKeyboard(){

    answer.style = "opacity:0;"

    //Preparing the fake string to be shown on input while typing
    let randomQuestions = [
      "Oh great master of death, powerful mind of the dark side, intelligence of the desperate souls! Please, help your servant answer...",

      "Lucifer, strongest power of darkness, prince of evil, malefic mind! Could you please answer for your servant and his friends the following:",
      
      "Dark knight of the shadows, most evil being in the universe, the one who terrifies the weak and the blind! Please, can you tell us the answer",

      "Oh my dark lord, voracious shredder of souls, king of the seven hells, mentor of the badness! We would be pleased if you answer this question:",

      "Wicked leader of evil minds, strongest force in the entire world, the one who all people should praise! Please, honor your servant answering:"
    ];

    let askLucifer = randomQuestions[Math.floor(Math.random()*randomQuestions.length)];

    //Temporary question
    // let askLucifer = "Oh great master of death, powerful mind of the dark side, intelligence of the desperate souls! Please, help your servant answering...";
    
    askLucifer = askLucifer.split("");//Separating the string in one array
    let buildQuestion = [];//Empty array will fill the input
    let buildAnswer = [];//Empty array to store real string typed
    let pressCount = 0;//Keypress counter

    //Hiding the answer
    question.value = " ";
    
    document.onkeydown = function(e){      

      if(e.keyCode > 47 && e.keyCode < 112 ||
         e.keyCode > 185 && e.keyCode < 193 ||
         e.keyCode > 218 && e.keyCode < 230 ||
         e.keyCode == 32){//Picking function keys

        e.preventDefault();//Killing the keys function

        //Making the input show the predefined array
        buildQuestion.push(askLucifer[pressCount]);
        let questionDone = buildQuestion.join("");
        question.value = questionDone;

        //Storing the real string in a array and passing to hidden div as string
        buildAnswer.push(e.key);
        var answerDone = buildAnswer.join("");console.log(answerDone);
        answer.innerHTML = answerDone;

        pressCount++;//Increasing keypress counter
        
      } else if(e.keyCode == 17) {
        eyes.removeAttribute("class");
        eyes.setAttribute("class", "eyes-opened");
        tempest.play();
        leaveKeyboard();//When key enter is pressed
      }

    }
    
  }

  //Giving the keyboard back to the user
  function leaveKeyboard(){

    document.onkeydown = function(e){

      //Enter shows the answer
      if(e.keyCode == 13){

        susp.play();
        answer.style = "opacity:1;"
        setTimeout(function(){
          
        },1500)
      }else if(e.keyCode == 17){//Just waits for the ctrl key to be pressed
        tempest.play();
        eyes.removeAttribute("class");
        eyes.setAttribute("class", "eyes-closing");
        takeKeyboard();//Call other function with ctrl key
      }
    }

  }
  
  takeKeyboard();//Game start with first method

}

luciferGame();//Call the game