var startButton = document.querySelector("#start");

var myQuestions = [
    {
        question: "Commonly used data types do not include:",
        answers: {
            a: 'boolean',
            b: 'number',
            c: 'string',
            d: 'event listener'
        },
        correctAnswer: 'd'
    },
    {
        question: "Which of the following is not a type of javaSript loop?",
        answers: {
            a: 'for',
            b: 'do while',
            c: 'if statements',
            d: 'none of the above'

        },
        correctAnswer: 'c'
    },
    {
        question: "This is a valid javaScript string:\n 'I haven't seen it' ",
        answers: {
            a: 'true',
            b: 'false',
        },
        correctAnswer: 'b'
    },
    {
        question: "Ethical ways to get help on projects do NOT include:",
        answers: {
            a: 'asking someone more experienced',
            b: 'googling',
            c: 'chatGPT',
            d: 'Using code that does not belong to you and not giving the author credit'
        },
        correctAnswer: 'd'
    },
    {
        question: "Which is a commonly used coding language for web development?",
        answers: {
            a: 'javaScript',
            b: 'Chrome',
            c: 'Safari',
            d: 'All of the above'
        },
        correctAnswer: 'a'
    }
];

var quizSpace = document.querySelector('#question');
var answerSpace = document.querySelector('#answers');
var loop = true;

function displayPossibleAnswers(){
    for(var i = 0; i < 4; i++){
        answerSpace.innerHTML.append()
    }
}

startButton.addEventListener("click", function(){
    var questionNum = 0;
    do{
        quizSpace.innerHTML = myQuestions[questionNum].question;
        answerSpace.innerHTML = myQuestions[questionNum].answers.a;
        loop = false;
    }
    while(loop == true);
});