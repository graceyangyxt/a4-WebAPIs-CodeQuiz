var timerEl = document.querySelector(".timer-count");
var startButton= document.querySelector(".start-button")
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
    choice:["A. = ","B. x ","C. * ","D. - "],
    rightChoice:"A. = "
},
];

var choicesTags= document.querySelectorAll(".choices");
var questionsTags=document.querySelector(".questions.p");

function runQuiz(event){
    event.preventDefault();
 for(i=0;i<questions.length;i++){
    // questionsTags.textContent= questions[i].question;
    questionsTags.textContent=questions[i].question;
    choicesTags[0]=document.createElement(questions[i].choice[0]);

    // choicesTags[0].setAttribute("button", questions[i].choice[0]);
    // choicesTags[1].setAttribute("button", questions[i].choice[1]);
    // choicesTags[2].setAttribute("button", questions[i].choice[2]);
}
}


// setAttribute to h1 with questions
// setAttibute to four button with choices

startButton.addEventListener("click",runQuiz);

// loop in qustion array[]


// when interact with the right button, 
//change to next question, refresh the timer,show correct note


//when interact with the wrong button,
//no respond


//

