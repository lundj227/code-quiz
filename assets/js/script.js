var startButton = document.querySelector("#start");

var myQuestions = [
    {
        question: "Commonly used data types do not include:",
        answers: ['boolean', 'number', 'string', 'event listener'],
        correctAnswer: 'event listener'
    },
    {
        question: "Which of the following is not a type of javaSript loop?",
        answers: ['for', 'do while', 'if statememts', 'none of the above'],
        correctAnswer: 'if statements'
    },
    {
        question: "This is a valid javaScript string:\n 'I haven't seen it' ",
        answers: ['true', 'false'],
        correctAnswer: 'false'
    },
    {
        question: "Ethical ways to get help on projects do NOT include:",
        answers: ['asking someone more experienced', 'googling', 'chatGPT', 'Using code that does not belong to you and not giving the author credit'],
        correctAnswer: 'Using code that does not belong to you and not giving the author credit'
    },
    {
        question: "Which is a commonly used coding language for web development?",
        answers: ['javaScript', 'Chrome','Safari','All of the above'],
        correctAnswer: 'javaScript'
    }
];

var quizSpace = document.querySelector('#question');
var answerSpace = document.querySelector('#answers');
var loop = true;
var questionNum = 0;

function renderQuestions(){
    quizSpace.innerHTML = myQuestions[questionNum].question;
    
    // Resets available answers
    answerSpace.innerHTML = '';
    // This for loop will render the possible answers
    for(var i = 0; i < myQuestions[questionNum].answers.length; i++){
        let button = document.createElement('button')
        button.innerText = myQuestions[questionNum].answers[i];
        if(myQuestions[questionNum].answers[i] == myQuestions[questionNum].correctAnswer){
            button.classList.add('correct');
        }else{
            button.classList.add('possible-answers');
        }
        button.classList.add('choice');
        answerSpace.appendChild(button);
        }
}
// I'll have to make another function called startGame that the event listener will call that will include code for the timer and deducting time.
function startGame() {
    startButton.style.display = 'none';
    renderQuestions();

    // Remove any existing event listeners on answerSpace
    answerSpace.removeEventListener("click", answerButtonClick);

    // Add a single event listener to the answerSpace
    answerSpace.addEventListener("click", answerButtonClick);
}

function answerButtonClick(event) {
    var clickedButton = event.target;

    // Check if the clicked element has the 'choice' class
    if (clickedButton.classList.contains("choice")) {
        questionNum++;
        renderQuestions();
    }
}

startButton.addEventListener("click", startGame);