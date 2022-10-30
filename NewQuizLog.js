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