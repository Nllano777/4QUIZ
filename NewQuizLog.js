// define elements
const Timer = document.getElementById("Timer");
const RemainingTime = document.getElementById("RemainingTime");
const done = document.getElementById("done");

const startDiv = document.getElementById("start");
const startQuizBtn = document.getElementById("startQ");

const questionDiv = document.getElementById("Qsheet");
const questionTitle = document.getElementById("questionTitle");
const choiceA = document.getElementById("choiceA");
const choiceB = document.getElementById("choiceB");
const choiceC = document.getElementById("choiceC");
const choiceD = document.getElementById("choiceD");
const answerCheck = document.getElementById("answerCheck");

const summary = document.getElementById("getAll");
const submitInitialBtn = document.getElementById("submitInitialBtn");
const initialInput = document.getElementById("initialInput");
const everything = document.getElementById("containQuiz");

const highScoreSection = document.getElementById("highScoreSection");
const finalScore = document.getElementById("finalScore");

const goBackBtn = document.getElementById("goBackBtn");
const clearHighScoreBtn = document.getElementById("clearHighScoreBtn");
const viewHighScore = document.getElementById("viewHighScore");
const listOfHighScores = document.getElementById("listOfHighScores");

const QuestionArr = [
    {
        question: "is javascript case sensitive?",
        choices: ["A. no", "B. maybe", "C. depends", "D. yes"],
        answer: "D. yes"
    },
    {
        question: "String values must be enclosed within _____ when being assigned to variables.",
        choices: ["A. commas", "B. curly brackets", "C. quotes", "D. parenthesis"],
        answer: "C. quotes"
    },
    {
        question: "How do you write 'hello world' in an alert box? ",
        choices: ["A. msgBox('hello world');", "B. msg('hello world');", "C. alert('hello world');", "D. hola('hello world');"],
        answer: "C. alert('hello world');"
    },
    {
        question: "Commonly used data types DO NOT include:",
        choices: ["A. strings", "B. booleans", "C. alerts", "D. numbers"],
        answer: "C. alerts"
    },
    {
        question: "What is the correct way of typing a function in Jvascript?",
        choices: ["A. function = myFunction()", "B. function myFunction()", "C. function:myFunction()", "D. createMyFunction()"],
        answer: "B. function myFunction()"
    },
    {
        question: "How do you call A function named myFunction?",
        choices: ["A. call myFunction()", "B. call function myFunction()", "C. myFunction()", "D. call myFunction"],
        answer: "C. myFunction()"
    },
    {
        question: "To see if two variables are equal in an if / else statement you would use ____.",
        choices: ["A. =", "B. ==", "C. 'equals'", "D. !="],
        answer: "B. =="
    },
    {
        question: "What is considered the begining of an array?",
        choices: ["A. 0", "B. 2", "C. 1", "D. 4"],
        answer: "A. 0"
    },
    {
        question: "What is the correcct syntax for reffering to an external script called 'xxx.js'?",
        choices: ["A. script href:'xxx.js'", "B. script name:'xxx.js'", "C. <script src:'xxx.js'>", "D. <script 'xxx.js'>"],
        answer: "C. <script src:'xxx.js'>"
    },
    {
        question: "Which of the following function of Number object returns the number's value",
        choices: ["A. toString()", "B. valueOf() ", "C. toLocaleString()", "D. toPrecision()"],
        answer: "A. toString()"
    },
    {
        question: "Which of the following function of Array object joins all elements of an array into a string?",
        choices: ["A. concat()", "B. join()", "C. pop()", "D. map()"],
        answer: "A. join()"
    }
];

// define other variables
var correctAns = 0;
var questionNum = 0;
var scoreResult;
var questionIndex = 0;

// WHEN I click the start button, Timer starts
var totalTime = 157;
function newQuiz() {
    questionIndex = 0;
    totalTime = 157;
    RemainingTime.textContent = totalTime;
    initialInput.textContent = "";

    startDiv.style.display = "none";
    questionDiv.style.display = "block";
    Timer.style.display = "block";
    done.style.display = "none";

    var startTimer = setInterval(function () {
        totalTime--;
        RemainingTime.textContent = totalTime;
        if (totalTime <= 0) {
            clearInterval(startTimer);
            if (questionIndex < QuestionArr.length - 1) {
                gameOver();
            }
        }
    }, 1000);

    showQuiz();
};

// then presented with Question and choices
function showQuiz() {
    nextQuestion();
}

function nextQuestion() {
    questionTitle.textContent = QuestionArr[questionIndex].question;
    choiceA.textContent = QuestionArr[questionIndex].choices[0];
    choiceB.textContent = QuestionArr[questionIndex].choices[1];
    choiceC.textContent = QuestionArr[questionIndex].choices[2];
    choiceD.textContent = QuestionArr[questionIndex].choices[3];
}

// after question is answered, show if correct or wrong
function checkAnswer(answer) {

    var lineBreak = document.getElementById("lineBreak");
    lineBreak.style.display = "block";
    answerCheck.style.display = "block";

    if (QuestionArr[questionIndex].answer === QuestionArr[questionIndex].choices[answer]) {
        // correct answer, add 1 score to final score
        totalTime += 10;
        correctAns++;
        // console.log(correctAns);
        answerCheck.textContent = " =) Correct!";
    } else {
        // wrong answer, deduct 10 second from Timer
        totalTime -= 10;
        // answerCheck.textContent.style.red;
        RemainingTime.textContent = totalTime;
        answerCheck.textContent = " The correct answer is: " + QuestionArr[questionIndex].answer;
    }

    questionIndex++;
    // repeat with the rest of Questions
    if (questionIndex < QuestionArr.length) {
        nextQuestion();
    } else {
        // if no more question, run game over function
        gameOver();
    }
}

function chooseA() { checkAnswer(0); }

function chooseB() { checkAnswer(1); }

function chooseC() { checkAnswer(2); }

function chooseD() { checkAnswer(3); }

// when all Questions are answered or Timer reaches 0, game over
function gameOver() {
    summary.style.display = "block";
    questionDiv.style.display = "none";
    startDiv.style.display = "none";
    Timer.style.display = "none";
    done.style.display = "block";

    // show final score
    finalScore.textContent = correctAns;
}