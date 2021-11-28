/* 
WHEN I answer a question
THEN I am presented with another question
WHEN I answer a question incorrectly
THEN time is subtracted from the clock
WHEN all questions are answered or the timer reaches 0
THEN the game is over
WHEN the game is over
THEN I can save my initials and score*/






//getting elements
const startButton = document.getElementById('start-page');
const questions = document.getElementById('question-section');
const questionId = document.getElementById('question');
const answerOptions = document.getElementById('answer-btn');
const timerEL = document.querySelector("#time");

//timer
var time = quizQuestions.length * 15;
var timer


let quizQuestions = [
    {
       question: 'What is a classList Property?',
        choices: [
            { text: 'The classList property returns the class name(s) of an element, as a DOMTokenList object.', correct: true },
            { text: 'It is a method that allows you to target objects.', correct: false
            },

            {text: 'It is a type of loop.', correct: false

            }
        ]
    }
]


startButton.addEventListener('click', startGame);

//WHEN I click the start button
//THEN a timer starts and I am presented with a question


function startGame() {
    console.log("started");
    startButton.classList.add('hide-this');
    let que = actualQuestions[0];
    questions.classList.remove('hide-this');
    
    nextQuestion();
};

function nextQuestion(){
    showQuestion()
};

function showQuestion(question) {
 questionId.innerText = questionId.question


};




function answer() {


};