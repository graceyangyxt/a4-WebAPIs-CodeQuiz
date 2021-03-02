var timerEl = document.querySelector(".timer-count");
var startButton= document.querySelector("#start-button");
var resetButton= document.querySelector(".reset-button");
var questionP = document.querySelector("#questions");
var choicesContainer = document.querySelector('#choices');
var answerButtons = document.querySelectorAll('.answer-btn');
var playerNameInput = document.querySelector("#player-name");
var player= playerNameInput.value.trim();
var finalmessage=  document.querySelector(".message");

var correctNote = document.querySelector(".correctNote");
var incorrectNote = document.querySelector(".incorrectNote");

var right= document.querySelector(".right");
var wrong= document.querySelector(".wrong");
var rightCounter=0;
var wrongCounter=0;


var current;

var timer;
var timeLeft;

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
}
];

var indexQuestion = 0;



function showQuestion(event){
    var currentQuestion = questions[indexQuestion];
    // show the question
    // event.preventDefault();
    questionP.textContent = currentQuestion.question;

    //show the buttons
    //   var choicesTags= document.querySelector(".choices"); 
    startButton.style.display = "none";
    
    choicesContainer.style = "";
    
    for (var i =0; i < answerButtons.length; i++) {
        var button = answerButtons[i];
        button.textContent = currentQuestion.choice[i];
    }
}

function setRight(){
    right.textContent=rightCounter;
    localStorage.setItem("rightCount",rightCounter);
}
function setWrong(){
    wrong.textContent=wrongCounter;
    localStorage.setItem("wrongCount",wrongCounter);
}

function setTimer() {
    timeLeft = 30;
    timerEl.textContent = timeLeft;
    timer = setInterval(function() {
        if (timeLeft <= 0) {
            endGame();
            return;
        }
        timeLeft--;
        timerEl.textContent = timeLeft;
    }, 1000);
}

function startGame() {
    indexQuestion = 0;
   

    
    setTimer();
    showQuestion();
    resetButton.style.visibility= "hidden";
    // setRight();
    // setWrong();
}

function endGame() {
    
    localStorage.setItem("player",JSON.stringify(player));
    showScore();
    resetButton.style.visibility= "visible";
    console.log('ended');
    answerButtons.disabled=true;
    clearInterval(timer);
}

function showScore(){
    var score=JSON.parse(localStorage.getItem("rightCount"));
    if(score ===3 ){
        finalmessage.textContent= "Congratulations"+ player +"! You Pass!"}
    
    else {
        finalmessage.textContent= "Sorry"+ player + "! You Didn't Pass!"
    }
}


// add event listener
startButton.addEventListener("click", startGame);
//if choose the right answer: function;

var rightButtons=[questions[0].rightChoice,questions[1].rightChoice,questions[2].rightChoice];
//else,responding the wrong one


choicesContainer.addEventListener("click",function(event){
    var userChoice = event.target.textContent;
   
    if(userChoice === questions[indexQuestion].rightChoice){
        // handle correct answer
        correctNote.style="color: green";
        rightCounter++;
        setRight();
        setTimeout(function() {correctNote.style.display = "none"}, 1500);
   } else {
        // handle incorrect answer
        timeLeft - 5;
        incorrectNote.style="color: red";
        wrongCounter++;
        setWrong();
        setTimeout(function() {incorrectNote.style.display = "none"}, 1500);
   }

    if (indexQuestion < questions.length - 1){
        indexQuestion++;
        showQuestion();
    } else {
        endGame();
    }


    


})


function resetGame(){
    rightCounter=0;
    wrongCounter=0;
    finalmessage.style.display = "none";
    setRight();
    setWrong();
    startGame();
    
}
resetButton.addEventListener("click", resetGame);








