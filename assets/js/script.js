var myQuestions = [
    {
        question: "Commonly used data types do NOT include:",
        answers: ['boolean', 'number', 'string', 'event listener'],
        correctAnswer: 'event listener'
    },
    {
        question: "Which of the following is NOT a type of javaSript loop?",
        answers: ['for', 'do while', 'if statememts', 'none of the above'],
        correctAnswer: 'if statememts'
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
    },
    {
        question: "",
        answers: [],
        correctAnswer: ''
    }
];

var startButton = document.querySelector("#start");
var quizSpace = document.querySelector('#question');
var answerSpace = document.querySelector('#answers');
var timerSpace = document.getElementById('timer');
var feedBackSpace = document.querySelector('#feedback');
var loop = true;
var questionNum = 0;
var numCorrect = 0;
var timeLeft = 60;
var handleTimer;

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
            button.classList.add('wrong-answer');
        }
        button.classList.add('choice');
        answerSpace.appendChild(button);
        }
}
// I'll have to make another function called startGame that the event listener will call that will include code for the timer and deducting time.
function startGame() {
    startButton.style.display = 'none';
    feedBackSpace.style.display = 'none';
    handleTimer = setInterval(function(){
        timerSpace.textContent = timeLeft;
        timeLeft--;
        if(timeLeft <= 0){
            clearInterval(handleTimer);
            timerSpace.textContent = '';
            quizSpace.textContent = '';
            answerSpace.textContent = '';
            feedBackSpace.textContent = 'Quiz completed!';

            var initalsInput = document.createElement("input");
            initalsInput.type = "text";
            initalsInput.placeholder = "Enter your Initals";
            initalsInput.id = "initals-input";
            var submitButton = document.createElement("button");
            submitButton.textContent = "Submit";
        
            feedBackSpace.appendChild(initalsInput);
            feedBackSpace.appendChild(submitButton);
        
            submitButton.addEventListener('click', function(){
                var initialsValue = initalsInput.value;
        
                // Get existing scores from Local Storage or initialize an empty array
                var storedScores = JSON.parse(localStorage.getItem("quizScores")) || [];
        
                // Add the new score to the array
                storedScores.push({ initials: initialsValue, score: numCorrect });
        
                // Store the updated scores array back to Local Storage
                localStorage.setItem("quizScores", JSON.stringify(storedScores));
            });    
        }
    }, 1000)
    


    renderQuestions();
    // Remove any existing event listeners on answerSpace
    answerSpace.removeEventListener("click", answerButtonClick);

    // Add a single event listener to the answerSpace
    answerSpace.addEventListener("click", answerButtonClick);
}

function answerButtonClick(event) {
    var clickedButton = event.target;
    feedBackSpace.style.display = 'block';
    // Check if the clicked element has the 'choice' class
    if (clickedButton.classList.contains("choice")) {
        if(clickedButton.classList.contains("correct")){
            numCorrect++;
            feedBackSpace.textContent = 'Correct!';
        }else if(clickedButton.classList.contains("wrong-answer")){
            timeLeft = timeLeft - 10;
            feedBackSpace.textContent = 'Wrong!';
        }
        questionNum++;
        renderQuestions();
        if (questionNum >= myQuestions.length -1) {
            clearInterval(handleTimer);
            timerSpace.textContent = '';
            quizSpace.textContent = 'Quiz completed!';
            answerSpace.textContent = '';
            feedBackSpace.textContent = '';

            var initalsInput = document.createElement("input");
            initalsInput.type = "text";
            initalsInput.placeholder = "Enter your Initals";
            initalsInput.id = "initals-input";

            var submitButton = document.createElement("button");
            submitButton.textContent = "Submit";

            feedBackSpace.appendChild(initalsInput);
            feedBackSpace.appendChild(submitButton);

            submitButton.addEventListener('click', function(){
                var initialsValue = initalsInput.value;

                // Get existing scores from Local Storage or initialize an empty array
                var storedScores = JSON.parse(localStorage.getItem("quizScores")) || [];

                // Add the new score to the array
                storedScores.push({ initials: initialsValue, score: numCorrect });

                // Store the updated scores array back to Local Storage
                localStorage.setItem("quizScores", JSON.stringify(storedScores));
            });
        }
    }
}



startButton.addEventListener("click", startGame);
