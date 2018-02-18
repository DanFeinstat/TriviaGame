let questions = [{name:"question1",
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
                        },
              ];
//
//
//
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

//time interval
function countdown(){
  if(timeLeft > 0){
  timeLeft --;
  document.getElementById("timer").innerHTML = timeLeft;
}else{
    clearInterval(intervalId);
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


//start function  Initializes answer buttons and randomizes the order of the questions
document.getElementById("startBtn").onclick = function(){
  document.getElementById("btnBox").innerHTML = "";
  document.getElementById("btnBox").innerHTML =
    '<button type="button" id="answer1" class="btn mb-1 border">Answer1</button>\
    <button type="button" id="answer2" class="btn mb-1 border">Answer2</button>\
    <button type="button" id="answer3" class="btn mb-1 border">Answer3</button>\
    <button type="button" id="answer4" class="btn mb-1 border">Answer4</button>';
    shuffle(questions);
    document.getElementById("question").innerHTML = questions[0].toDisplay;
    shuffle(questions[0].answers);
    document.getElementById("answer1").innerHTML = questions[0].answers[0].toDisplay;
    document.getElementById("answer2").innerHTML = questions[0].answers[1].toDisplay;
    document.getElementById("answer3").innerHTML = questions[0].answers[2].toDisplay;
    document.getElementById("answer4").innerHTML = questions[0].answers[3].toDisplay;
    displayTime();
}

// document.getElementById("answer1").onclick = function{
//   //stop timer
  //if isCorrect == true, win condition
  //else loss condition
// }
