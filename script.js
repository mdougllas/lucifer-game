console.log("Lucifer's here");

//Starting main function
function luciferGame(){

  takeKeyboard();//Game start with first method
  let question = document.getElementById("question");
  let body = document.getElementsByTagName("body")[0];
  let newDiv = document.createElement("div");

  //Taking control of keyboard
  function takeKeyboard(){

    //Preparing the fake string to be shown on input while typing
    let askLucifer1 = "Oh great master of evil...";//This will be more and random
    askLucifer1 = askLucifer1.split("");//Separating the string in one array
    let pressCount = 0;//Keypress counter
    let buildQuestion = [];//Empty array will fill the input
    let buildAnswer = [];//Empty array to store real string typed
    
    document.onkeydown = function(e){

      if(e.keyCode !== 17 && e.keyCode !== 8){//Putting key Enter aside we want to access it
        e.preventDefault();//Killing the keys function
        buildQuestion.push(askLucifer1[pressCount]);//push the array on each keypress
        let questionDone = buildQuestion.join("");//making the array string
        question.value = questionDone;//Populating input with fake string
        buildAnswer.push(e.key);//Store the real string typed as an array
        var answerDone = buildAnswer.join("");console.log(answerDone);
        pressCount++;//Increasing keypress counter
      } else if(e.keyCode == 17) {
        leaveKeyboard();//When key enter is pressed
      }

    }
    
  }

  //the game start with this function active (toggle via enter key)
  function leaveKeyboard(array){
    console.log("outro");
    document.onkeydown = function(e){
      if(e.keyCode == 17){//Just waits for the enter key to be pressed
        // question.style = "display:none";
        // body.appendChild(newDiv);
        // let parent = this.getElementsByTagName("div")[0];
        // let pTag = document.createElement('p');
        // let answer = document.createTextNode(takeKeyboard());
        // pTag.appendChild(answer);
        // parent.appendChild(pTag);

        takeKeyboard();//Call other function with enter key
      }
    }

  }

}

luciferGame();//Call the game