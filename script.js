var timer = document.getElementById('timer')
var btn = document.getElementById('answer-buttons')
var questionEl = document.getElementById('question')
var correctEl = document.getElementById('correct')
var wrongEl = document.getElementById('wrong')
var startBtn = document.getElementById('start-btn')
var scoreBtn = document.getElementById('score-btn')
var nextBtn = document.getElementById('next-btn')
var submitBtn = document.getElementById('submit-btn')
var clearBtn = document.getElementById('clear-btn')
var restartBtn = document.getElementById('restart-btn')
var answerEl = document.getElementById('answer-buttons')
var seconds = 10
var parentContainer = document.getElementById('parent-container')
var globalIndex = 0
var shuffledQuestions, globalIndex

startBtn.addEventListener('click', function(){
    console.log('clicked') 
    setTimer()
    parentContainer.classList.remove('hide')
    startBtn.classList.add('hide')
    scoreBtn.classList.add('hide')
    showQuestion(questionS[globalIndex])
    shuffledQuestions = questionS.sort(() => Math.random() - 0.5)
    nextQuestion()
})

nextBtn.addEventListener('click', () => {
    globalIndex++
    nextQuestion()
})

function setTimer() {
    var time = setInterval(function(){
        timer.innerText = seconds
        seconds--
        if (seconds == 0) {
            clearInterval(time)
        }
        console.log(seconds)
    }, 1000) 
}

function showQuestion(question) {
    questionEl.innerText = question.question
    question.answers.forEach((answer) => {
        var button = document.createElement('button')
        button.innerText = answer.text
        button.setAttribute('dataset', answer.correct)
        button.classList.add('button')
    button.addEventListener('click', selectAnswer)
    answerEl.appendChild(button)
})
}

function selectAnswer(e) {
    var selectedButton = e.target
    // var correct = selectedButton.dataset
    // console.log(correct)
    if (selectedButton === questionS.answers) {
        setStatusClass()
        // button.dataset.correct = answerEl.correct
        // console.log(button.dataset.correct)
        correctEl.classList.remove('hide')

    }
    Array.from(answerEl.children).forEach((button) => {
        // setStatusClass(button, button.dataset.correct)
    })
    if (questionS.length > globalIndex + 1) {
        nextBtn.classList.remove('hide')
    } else {
        startBtn.innerText = 'Restart'
        startBtn.classList.remove('hide')
    }
}

function resetState() {
    nextBtn.classList.add('hide')
    while (answerEl.firstChild) {
        answerEl.removeChild(answerEl.firstChild)
    }
}

function nextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[globalIndex])
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    }
    else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}


const questionS = [
    {
        question: '10 + 10 =',
        answers: [
            {text: '20', correct: true},
            {text: '13', correct: false},
            {text: '19', correct: false},
            {text: '16', correct: false},
        ],
    },
    {
        question: '100 x 90 =',
        answers: [
            {text: '8,000', correct: false},
            {text: '10,000', correct: false},
            {text: '7,000', correct: false},
            {text: '9,000', correct: true},
        ],
    },
    {
        question: '248 / 2 =',
        answers: [
            {text: '136', correct: false},
            {text: '148', correct: false},
            {text: '124', correct: true},
            {text: '118', correct: false},
        ],
    },
    {
        question: '33 x 3 =',
        answers: [
            {text: '79', correct: false},
            {text: '99', correct: true},
            {text: '69', correct: false},
            {text: '66', correct: false},
        ],
    },
    {
        question: '150 - 25 =',
        answers: [
            {text: '120', correct: false},
            {text: '100', correct: false},
            {text: '125', correct: true},
            {text: '115', correct: false},
        ],
    },
    {
        question: '122 x 22 =',
        answers: [
            {text: '2,688', correct: false},
            {text: '2,689', correct: false},
            {text: '2,684', correct: true},
            {text: '2,666', correct: false},
        ],
    },
    
]
