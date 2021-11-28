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
let startButton = document.getElementById('start-page');
let questions = document.getElementById('question-section');
let questionEl = document.getElementById('question');
let answerOptions = document.getElementById('answer-choices');
let timerEL = document.getElementById('time');


//quiz questions

let quizQuestions = [
    {
       question: 'What is a classList Property?',
        answers: [
            { text: '1. The classList property returns the class name(s) of an element, as a DOMTokenList object.', correct: true },
            { text: '2. It is a method that allows you to target objects.', correct: false
            },

            {text: '3. It is a type of loop.', correct: false

            }
        ]

    },

    {
        question: 'What are JavaScript Data Types?',
        answers: [
            {text: '1. numbers, values, functions', correct: false},
            {text: '2. numbers and strings', correct: false},
            {text: '3. numbers, strings, booleans', correct: true}
        ]
    },

    {
        question: 'What is the correct syntax for an array?',
        answers: [
            {text: '1. function[]', correct: false},
            {text: '2. const array_name = [item1, item2,...]', correct: true},
            {text: '3. var varname()', correct: false}
        ]


    }
]

//timer
var time = quizQuestions.length * 20;
var timer;
//variables

let shuffleQuestions, currentQuestion

//WHEN I click the start button
//THEN a timer starts and I am presented with a question


function startGame() {
    console.log("started");
    startButton.classList.add('hide-this');
    shuffleQuestions = quizQuestions.sort(() => Math.random() - .5);
    currentQuestion = 0
    questions.classList.remove('hide-this');

    //timer
    timer = setInterval(tickingTime, 1000)
    
    nextQuestion();
};

function nextQuestion(){
    
    showQuestion(shuffleQuestions[currentQuestion])
};

function showQuestion(question) {
 questionEl.innerText = question.question
 question.answers.forEach(answer => {
  const button = document.createElement('button')
  button.innerText = answer.text
  button.classList.add('answer-btn')
  if (answer.correct) {
      button.dataset.correct = answer.correct
  }
  button.addEventListener('click', answer)
  answerOptions.appendChild(button)
 })

};


function answer(event) {
 const selected = event.target
 const correct = selected.dataset.correct


};

function tickingTime() {
    time--;
    timerEL.textContent = time;
    if (time <= 0) {
        endOfQuiz();
    }
}

function endOfQuiz(){
    clearInterval(timer)
}

startButton.addEventListener('click', startGame);