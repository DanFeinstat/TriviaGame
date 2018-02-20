$(document).ready(function(){

let questionArray = [{name:"question1",
                  toDisplay: "What does HTML stand for?",
                  answers:[{
                          isCorrect:true,
                          toDisplay:"Hyper Text Markup Language"
                        },
                        {
                          isCorrect:false,
                          toDisplay:"Hifi Type Markup Language"
                        },
                        {
                          isCorrect:false,
                          toDisplay:"Handy Text Maker Language"
                        },
                        {
                          isCorrect:false,
                          toDisplay:"Hip Tyrannosaurus Making Lassagna"
                        }]
                },
                {name: "question2",
                  toDisplay: "CSS is",
                  answers:[{
                            isCorrect:true,
                            toDisplay:"All of these answers are true"
                          },
                          {
                            isCorrect:false,
                            toDisplay:"A stylesheet language"
                          },
                          {
                            isCorrect:false,
                            toDisplay:"Used to describe the presentation of markup languages"
                          },
                          {
                            isCorrect:false,
                            toDisplay:"the Devil"
                          }]
                  },
                  {
                    name:"question3",
                    toDisplay: "Which of the following is true about javascript?",
                    answers:[{
                              isCorrect:true,
                              toDisplay:"NAN is a number"
                            },
                            {
                              isCorrect:false,
                              toDisplay:"It is exclusively a back-end language"
                            },
                            {
                              isCorrect:false,
                              toDisplay:"it makes extensive use of the '$' symbol as a selector"
                            },
                            {
                              isCorrect:false,
                              toDisplay:"Javascript is basically Java with less improvisation"
                            }]
                    },
                    { name: "question4",
                      toDisplay: "Which fun fact about arrays is false?",
                      answers:[{
                                isCorrect:true,
                                toDisplay:"the bubblesort algorithm will organize any array on the first iteration through"
                              },
                              {
                                isCorrect:false,
                                toDisplay:"An array with no keys will evaluate to false"
                              },
                              {
                                isCorrect:false,
                                toDisplay:"executing typeof on an array will return 'object'"
                              },
                              {
                                isCorrect:false,
                                toDisplay:"the Fisher-Yates Shuffle algorithm will randomize an array"
                              }]
                      },
                      { name: "question5",
                        toDisplay: "Jquery...",
                        answers:[{
                                  isCorrect:true,
                                  toDisplay:"is a cross-platform javascript library."
                                },
                                {
                                  isCorrect:false,
                                  toDisplay:"is a cross-platform javascript framework."
                                },
                                {
                                  isCorrect:false,
                                  toDisplay:"is a compiled language."
                                },
                                {
                                  isCorrect:false,
                                  toDisplay:"is best use in concert with a js framework like react or angular."
                                }]
                        }
              ];
//question index
let qDex = 0;
//number of correct answers
let goodAnswers = 0;
let badAnswers = 0;
let intervalId;


//fisher-yates shuffle
function shuffle(array){
  var m = array.length;
  var t;
  var i;

  //while there remain elements to shuffle
  while (m){
    //pick a remaining element
    i = Math.floor(Math.random() * m--);

    //swap it with current element
    t = array[m];
    array[m]= array[i];
    array[i] = t;
  }

  return array
}
//clears the interval and resets the style for the timer
function clearTimer(){
  clearInterval(intervalId);
  document.getElementById("timer").style.color = "";
}
//time interval
function countdown(){
  if(timeLeft > 0){
  timeLeft --;
  document.getElementById("timer").innerHTML = timeLeft;
  //warn player they have less time left by changing timer color to red
    if(timeLeft < 6){
      document.getElementById("timer").style.color = "red";
    }
  //out of time condition
  }else{
    clearTimer();
    oot();
  }
}

//Countdown timer
function displayTime(){
  timeLeft = 10;
  console.log(timeLeft);
  document.getElementById("timer").innerHTML = timeLeft;
  intervalId = setInterval(countdown,1000);
}

//out of time function
function oot(){
  var ootElements = document.getElementsByClassName("oot");
  for(var i = 0; i<ootElements.length; i++){
    ootElements[i].innerHTML = "You're out of time!";
    ootElements[i].setAttribute("value", "");
  }
  timeoutId = setTimeout(nextQuestion, 3000);
}

//success condition
function correctAnswer(){
  goodAnswers++;
  var ootElements = document.getElementsByClassName("oot");
  for(var i = 0; i<ootElements.length; i++){
    ootElements[i].setAttribute("value", "");
  }
  timeoutId = setTimeout(nextQuestion, 3000);
}

function wrongAnswer(){
  badAnswers++;
  var ootElements = document.getElementsByClassName("oot");
  for(var i = 0; i<ootElements.length; i++){
    ootElements[i].setAttribute("value", "");
  }
  timeoutId = setTimeout(nextQuestion, 3000);
}

function populateDisplay(){
  document.getElementById("question").innerHTML = questionArray[qDex].toDisplay;
  shuffle(questionArray[qDex].answers);
  for(var i = 0; i<questionArray[qDex].answers.length; i++){
  document.getElementById("answer"+(i+1)).innerHTML = questionArray[qDex].answers[i].toDisplay;
  document.getElementById("answer"+(i+1)).setAttribute("value", questionArray[qDex].answers[i].isCorrect);
  }
}

function nextQuestion(){
  populateDisplay();
  qDex++;
  var ootElements = document.getElementsByClassName("oot");
  for(var i = 0; i<ootElements.length; i++){
    ootElements[i].style.color = "black";
  }
  displayTime();
}

//start function  Initializes answer buttons and randomizes the order of the questions
document.getElementById("startBtn").onclick = function initGame(){
  document.getElementById("btnBox").innerHTML = "";
  document.getElementById("btnBox").innerHTML =
    '<button type="button" id="answer1" class="btn ansBtn mb-1 border oot">Answer1</button>\
    <button type="button" id="answer2" class="btn ansBtn mb-1 border oot">Answer2</button>\
    <button type="button" id="answer3" class="btn ansBtn mb-1 border oot">Answer3</button>\
    <button type="button" id="answer4" class="btn ansBtn mb-1 border oot">Answer4</button>';
    shuffle(questionArray);
    populateDisplay();
    qDex++;
    displayTime();
}

$("#btnBox").on("click", ".ansBtn", function(e){
  var answerBoolean = $(this).attr("value");
    if (answerBoolean === "true"){
      this.innerHTML = "Correct!";
      this.style.color = "green";
      correctAnswer();
      console.log("correct: " + goodAnswers);
    } else if(answerBoolean === "false"){
      this.innerHTML = "Nope!";
      this.style.color = "red";
      wrongAnswer();
      console.log("incorrect: " + badAnswers);
    }
    clearTimer();
})
// document.getElementById("answer1").onclick = function(){
//   if (this.getAttribute("value")){
//     correctAnswer();
//   } else if(this.getAttribute("value") === false){
//     wrongAnswer();
//   } else {
//     null;
//   }
//   clearTimer();
// }
})
