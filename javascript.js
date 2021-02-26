var timerEl = document.querySelector(".timer-count");
var startButton= document.querySelector(".start-button");

var current

var timer;
var timerCount;


var questions= [
{
    question:"Inside which HTML element do we put the JavaScript?",
    choice:["A. <js>","B. <javascript>","C. <script>","D. <scripting>"],
    rightChoice:"C. <script>"
},
{
    question:"Which event occurs when the user clicks on an HTML element?",
    choice:["A. onmouseclick","B. onmouseover","C. onchange","D. onclick"],
    rightChoice:"D. onclick"
},
{
    question:"Which operator is used to assign a value to a variable?",
    choice:["A = ","B x ","C * ","D - "],
    rightChoice:"A. = "
},
];

var indexQuestion = 0;

function showQuestion(event){
    // show the question
    event.preventDefault();
var questionsTags=document.querySelector(".questions > p");
questionsTags.textContent= questions[0].question;

//show the buttons
var choicesTags= document.querySelector(".choices");
var choiceAButton=choicesTags.setAttribute("class","choiceA");
var choiceBButton=choicesTags.setAttribute("class","choiceB");
var choiceCButton=choicesTags.setAttribute("class","choiceC");
var choiceDButton=choicesTags.setAttribute("class","choiceD");
choiceAButton.textContent = questions[0].choice[0]; 
choiceBButton.textContent = questions[0].choice[1];
choiceCButton.textContent = questions[0].choice[2];
choiceDButton.textContent = questions[0].choice[3];

}
// add event listener
startButton.addEventListener("click",showQuestion);
//verify response
// increase indexQuestion
// showQuestion()

// var choicesTags= document.querySelectorAll(".choices");
// var questionsTags=document.querySelector(".questions > p");

// function runQuiz(event){
//     event.preventDefault();
//  for(i=0;i<questions.length;i++){
    
//     questionsTags.textContent=questions[i].question;
//     choicesTags[0]=document.createElement(questions[i].choice[0]);

   
// }
// }
// startButton.addEventListener("click",runQuiz);

 // choicesTags[0].setAttribute("button", questions[i].choice[0]);
    // choicesTags[1].setAttribute("button", questions[i].choice[1]);
    // choicesTags[2].setAttribute("button", questions[i].choice[2]);

// setAttribute to h1 with questions
// setAttibute to four button with choices



// loop in qustion array[]


// when interact with the right button, 
//change to next question, refresh the timer,show correct note


//when interact with the wrong button,
//no respond


//

