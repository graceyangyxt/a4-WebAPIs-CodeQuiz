var timerEl = document.querySelector(".timer-count");
var startButton= document.querySelector("#start-button");
var buttonA = document.createElement("buttonA");
var buttonB = document.createElement("buttonB");
var buttonC = document.createElement("buttonC");
var buttonD = document.createElement("buttonD");
var i=0;
var j=0;

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
    // event.preventDefault();
   var questionsTags=document.querySelector(".questions");
   questionsTags.textContent= questions[j].question;

//show the buttons
//   var choicesTags= document.querySelector(".choices"); 
startButton.style.visibility="hidden";
    
    
    buttonA.setAttribute("class","buttonA");
    var buttonAtext = document.createTextNode(questions[i].choice[0]); 
    buttonA.appendChild(buttonAtext);
    document.getElementsByClassName("choices")[0].appendChild(buttonA);

  
 
    buttonB.setAttribute("class","buttonB");
    var buttonBtext = document.createTextNode(questions[i].choice[1]); 
    buttonB.appendChild(buttonBtext);
    document.getElementsByClassName("choices")[0].appendChild(buttonB);

   
    buttonC.setAttribute("class","buttonC");
    var buttonCtext = document.createTextNode(questions[i].choice[2]); 
    buttonC.appendChild(buttonCtext);
    document.getElementsByClassName("choices")[0].appendChild(buttonC);
    
    
    buttonD.setAttribute("class","buttonD");
    var buttonDtext = document.createTextNode(questions[i].choice[3]); 
    buttonD.appendChild(buttonDtext);
    document.getElementsByClassName("choices")[0].appendChild(buttonD);
  }


// add event listener
startButton.addEventListener("click",showQuestion);
//if choose the right answer: function;


//else,responding the wrong one
buttonC.addEventListener("click",function(){
    i+=1;
    j+=1;
    // buttonAtext.style.visibility="hidden";
    showQuestion();

})


//verify response
//   var showNote=document.querySelector(".correctNote");
var correctNotes="Correct!";
  document.getElementsByClassName("correctNote")[0].appendChild(correctNotes);

// increase indexQuestion


// setAttribute to h1 with questions
// setAttibute to four button with choices



// loop in qustion array[]


// when interact with the right button, 
//change to next question, refresh the timer,show correct note


//when interact with the wrong button,
//no respond


//

