
// create and object of questions

const Questions = [

    {
        question: "what does html stand for?",
        A: "Hyper Text Markup Language",
        B: "hulu",
        C: "highlight",
        D: "Hyper",
        AnswerIsCorrect: "Hyper Text Markup Language"
    },

    {
        question: "What does CSS stand for?",
        A: "cascade",
        B: "Cascading style sheet",
        C: "canada ss",
        AnswerIsCorrect: "Cascading style sheet"
    },

    {
        question: "What does JS stand for?",
        A: "just",
        B: "jokers",
        C: "javascript",
        AnswerIsCorrect: "javascript"
    },
    {

        question: "inside which HTML element do we put the JavaScript?",
        A: "javascrpit",
        B: "script",
        C: "<js>",
        AnswerIsCorrect: "script"
    },

    {
        question: "What is the correcct syntax for reffering to an external script called 'xxx.js'?",
        A: "script href:'xxx.js'",
        B: "script name:'xxx.js'",
        C: "<script src:'xxx.js'>",
        AnswerIsCorrect: "<script src:'xxx.js'>"
    },

    {
        question: "How do you write 'hello world' in an alert box?",
        A: "msgBox('hello world');",
        B: "msg('hello world');",
        C: "alert('hello world');",
        D: "hola('hello world');",
        AnswerIsCorrect: "alert('hello world');"
    },
    {
        question: "is javascript case sensitive?",
        A: "yes",
        B: "does not matter",
        C: "no",
        AnswerIsCorrect: "yes"
    }, {
        question: "Commonly used data types DO NOT include:",
        A: "strings",
        B: "booleans",
        C: "alerts",
        D: "numbers",
        AnswerIsCorrect: "alerts"
    },
    {
        question: "The condition in an if / else statement is enclosed within ____.",
        A: "quotes",
        B: "curly brackets",
        C: "parentheses",
        D: "square brackets",
        AnswerIsCorrect: "parentheses"
    },
    {
        question: "Which built-in method removes the last element from an array and returns that element?",
        A: "last()",
        B: "get()",
        C: "pop()",
        D: "None of the Above",
        AnswerIsCorrect: "pop()"
    },
    {
        question: "Which built-in method returns the calling string value converted to lower case?",
        A: "toLowerCase()",
        B: "toLower()",
        C: "changeCase(case)",
        D: "None of the Above",
        AnswerIsCorrect: "toLowerCase()"
    },
    {
        question: "Which of the following function of Number object returns the number's value",
        A: "toString()",
        B: "valueOf()",
        C: "toLocaleString()",
        D: "toPrecision()",
        AnswerIsCorrect: "valueOf()"
    },
    {
        question: "Which of the following function of Array object joins all elements of an array into a string?",
        A: "concat()",
        B: "join()",
        C: "pop()",
        D: "map()",
        AnswerIsCorrect: "join()"
    }

];
const StartQuiz = document.getElementById("StartQuiz");
const Qsheet = document.getElementById('Qsheet')
const answerEls = document.querySelectorAll('.answer')
const holder = document.getElementById('h2')
const A = document.getElementById('A')
const B = document.getElementById('B')
const C = document.getElementById('C')
const D = document.getElementById('D')
const submitBtn = document.getElementById('submit')
var score = 0;
var currentQ = 0;
var highScores = [];
var interval;
var timeGiven = 60;
var secondsElapsed = 0;
let TIMER = 60;
let userScore = 0;
// Attach event listener to start button to call startGame function on click
submitBtn.addEventListener("click", loadQuiz);
let currentQuiz = 0
// let score
loadQuiz()

//starts quiz from  Welcome page
StartQuiz.addEventListener("click", start);
function start() {
    // Welcome.style.display = "none";
    startTimer();
    renderQuestion();
    show(Qsheet);
    deselectAnswers()
    getSelected()
    nextQuestion()
    renderQuestion()
};

function loadQuiz() {

    const currentQuizData = Questions[currentQuiz]
    holder.innerText = currentQuizData.question
    A.innerText = currentQuizData.A
    B.innerText = currentQuizData.B
    C.innerText = currentQuizData.C
    D.innerText = currentQuizData.D
}
function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}
function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}
submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === Questions[currentQuiz].correct) {
            score++
        }
        currentQuiz++
        if (currentQuiz < Questions.length) {
            loadQuiz()
        } else {
            Qsheet.innerHTML = `
           <h2>You answered ${score}/${Questions.length} questions correctly</h2>
           <button onclick="location.reload()">Reload</button>
           `
        }
    }
})

//starts and updates timer
function startTimer() {
    Timer.textContent = timeGiven;
    interval = setInterval(function () {
        secondsElapsed++;
        Timer.textContent = timeGiven - secondsElapsed;
        if (secondsElapsed >= timeGiven) {
            currentQ = Questions.length;
            nextQuestion();
        }
    }, 1000);
};
//stops timer
function stopTimer() {
    clearInterval(interval);
};
//Clears current question and calls for display of next question
//Calls for input score display if last question
function nextQuestion() {
    currentQ++;
    if (currentQ < Questions.length) {
        renderQuestion();
    } else {
        stopTimer();
        if ((timeGiven - secondsElapsed) > 0)
            score += (timeGiven - secondsElapsed);
        userScore.textContent = score;
        hide(holder);
        show(inputScore);
        Timer.textContent = 0;
    }
};

function renderQuestion() {
    currentQuiz.textContent = Questions.title;
    for (i = 0; i < holder.children.length; i++) {
        options.children[i].children[0].textContent = `${(i + 1)}: ${Questions[currentQ].choices[i]}`;
    }
};

function show(m) {
    let messageHr = document.createElement("hr");
    let messageEl = document.createElement("div");
    messageEl.textContent = m;
    setTimeout(function () {
        messageHr.remove();
        messageEl.remove();
    }, 2000);

};