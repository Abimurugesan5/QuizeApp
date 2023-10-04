const questions = [
    {
        question: "What is the capital of France?",
        options: ["London", "Berlin", "Paris", "Madrid"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Venus", "Jupiter"],
        answer: "Mars"
    },
    {
        question: "What is the largest mammal in the world?",
        options: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        answer: "Blue Whale"
    }
];

let currentQuestion = 0;
let score = 0;

const questionText = document.getElementById("question-text");
const optionsContainer = document.getElementById("options-container");
const nextButtons = document.getElementById("next-button");

function showQuestion() {
    const question = questions[currentQuestion];
    questionText.textContent = question.question;

    optionsContainer.innerHTML = "";
    question.options.forEach((option) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.addEventListener("click", () => checkAnswer(option));
        optionsContainer.appendChild(button);
    });
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        endQuiz();
    }
}

function endQuiz() {
    questionText.textContent = `Quiz Completed! Your Score: ${score}/${questions.length}`;
    optionsContainer.innerHTML = "";
    nextButton.style.display = "none";
}

showQuestion();
nextButtons.addEventListener("click", () => showQuestion());
const timerCountdown = 10;
let timer = timerCountdown;
let timerInterval;

const timerElement = document.getElementById("timer-count");
const nextButton = document.getElementById("next-button");

// Function to start the timer
function startTimer() {
    timer = timerCountdown;
    updateTimerDisplay();
    timerInterval = setInterval(updateTimer, 1000);
}


function updateTimerDisplay() {
    timerElement.textContent = timer;
}


function updateTimer() {
    if (timer > 0) {
        timer--;
        updateTimerDisplay();
    } else {
        clearInterval(timerInterval);
       
        alert("Time's up! Click Next to proceed.");
    }
}


startTimer();

nextButton.addEventListener("click", () => {
    clearInterval(timerInterval);
    startTimer();
    const questionText = document.getElementById("question-text");
    const currentQuestion = parseInt(questionText.textContent.match(/\d+/));
    questionText.textContent = `Question ${currentQuestion + 1}: What is the capital of France?`;
});

