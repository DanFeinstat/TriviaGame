let questions = [{name:"question1",
                  info: "What does HTML stand for?",
                  answers:[{
                          isCorrect:true,
                          content:"Hyper Text Markup Language"
                        },
                        {
                          isCorrect:false,
                          content:"Hifi Type Markup Language"
                        },
                        {
                          isCorrect:false,
                          content:"Handy Text Maker Language"
                        },
                        {
                          isCorrect:false,
                          content:"Hip Tyrannosaurus Making Lassagna"
                        }]
                },
                {name: "question2",
                  info: "CSS is",
                  answers:[{
                            isCorrect:true,
                            content:"All of these answers are true"
                          },
                          {
                            isCorrect:false,
                            content:"A stylesheet language"
                          },
                          {
                            isCorrect:false,
                            content:"Used to describe the presentation of markup languages"
                          },
                          {
                            isCorrect:false,
                            content:"the Devil"
                          }]
                  },
                  {
                    name:"question3",
                    info: "Which of the following is true about javascript?",
                    answers:[{
                              isCorrect:true,
                              content:"NAN is a number"
                            },
                            {
                              isCorrect:false,
                              content:"It is exclusively a back-end language"
                            },
                            {
                              isCorrect:false,
                              content:"it makes extensive use of the '$' symbol as a selector"
                            },
                            {
                              isCorrect:false,
                              content:"Javascript is basically Java with less improvisation"
                            }]
                    },
                    {
                      name: "question4",
                      info: "Which fun fact about arrays is false?",
                      answers:[{
                                isCorrect:true,
                                content:"the bubblesort algorithm will organize any array on the first iteration through"
                              },
                              {
                                isCorrect:false,
                                content:"An array with no keys will evaluate to false"
                              },
                              {
                                isCorrect:false,
                                content:"executing typeof on an array will return 'object'"
                              },
                              {
                                isCorrect:false,
                                content:"the Fisher-Yates Shuffle algorithm will randomize an array"
                              }]
                      },
                      {
                        name: "question5",
                        info: "Jquery...",
                        answers:[{
                                  isCorrect:true,
                                  content:"is a cross-platform javascript library."
                                },
                                {
                                  isCorrect:false,
                                  content:"is a cross-platform javascript framework."
                                },
                                {
                                  isCorrect:false,
                                  content:"is a compiled language."
                                },
                                {
                                  isCorrect:false,
                                  content:"is best use in concert with a js framework like react or angular."
                                }]
                        },
              ];
//
//
//
// //fisher-yates shuffle
// function shuffle(array){
//   var m = array.length;
//   var t;
//   var i;
//
//   //while there remain elements to shuffle
//   while (m){
//     //pick a remaining element
//     i = Math.floor(Math.random() * m--);
//
//     //swap it with current element
//     t = array[m];
//     array[m]= array[i];
//     array[i] = t;
//   }
//
//   return array
// }

document.getElementById("startBtn").onclick = function(){
  document.getElementById("btnBox").innerHTML = "";
  document.getElementById("btnBox").innerHTML =
    '<button type="button" id="answer1" class="btn mb-1 border">Answer1</button>\
    <button type="button" id="answer2" class="btn mb-1 border">Answer2</button>\
    <button type="button" id="answer3" class="btn mb-1 border">Answer3</button>\
    <button type="button" id="answer4" class="btn mb-1 border">Answer4</button>';

}

// document.getElementById("answer1").onclick = function{
//   //stop timer
  //if isCorrect == true, win condition
  //else loss condition
// }
