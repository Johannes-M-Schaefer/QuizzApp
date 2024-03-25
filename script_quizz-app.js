let questions = [
    {
        "question": "Wer hat HTML erfunden?",
        "answer 1": "Robbie Williams",
        "answer 2": "Lady Gaga",
        "answer 3": "Tim Berners-Lee",
        "answer 4": "Justin Bieber",
        "right-answer": 3,
    },
    {
        "question": "Frage2",
        "answer 1": "Robbie Williams",
        "answer 2": "Lady Gaga",
        "answer 3": "Tim Berners-Lee",
        "answer 4": "Justin Bieber",
        "right-answer": 3,
    },
    {
        "question": "Frage3",
        "answer 1": "Robbie Williams",
        "answer 2": "Lady Gaga",
        "answer 3": "Tim Berners-Lee",
        "answer 4": "Justin Bieber",
        "right-answer": 3,
    },
    {
        "question": "Frage4",
        "answer 1": "Robbie Williams",
        "answer 2": "Lady Gaga",
        "answer 3": "Tim Berners-Lee",
        "answer 4": "Justin Bieber",
        "right-answer": 3,
    },
    {
        "question": "Frage5",
        "answer 1": "Robbie Williams",
        "answer 2": "Lady Gaga",
        "answer 3": "Tim Berners-Lee",
        "answer 4": "Justin Bieber",
        "right-answer": 3,
    }
];

let currentQuestion = 0;
let rightQuestions = 0;

function init() {
    let contentMaxNumber = document.getElementById('max-number');
    let contentCurrentNumber = document.getElementById('current-question-number');
    let currentQuestionNumber = currentQuestion + 1;

    contentMaxNumber.innerHTML = questions.length;
    contentCurrentNumber.innerHTML = currentQuestionNumber;

    showQuestion();
}

function addCorrectQuestions() {
    let correctQuestionsContainer = document.getElementById('correct-questions');
    correctQuestionsContainer.innerHTML = rightQuestions;

    let maxQuestionsContainer = document.getElementById('max-questions');
    maxQuestionsContainer.innerHTML = questions.length;
}

function showQuestion() {

    if (currentQuestion >= questions.length) {
        addCorrectQuestions();
       document.getElementById('question-card').classList.add('d-none');
       document.getElementById('endscreen').classList.remove('d-none');
    } else {
        let progressId = document.getElementById('progress-bar');
        let percent = currentQuestion / questions.length;
        percent = Math.round(percent * 100);
        console.log(percent);

        progressId.innerHTML = `${percent} %`;
        progressId.style.width = `${percent}%`;
        
        
        let question = questions[currentQuestion];
        document.getElementById('question-container').innerHTML = question['question'];
        document.getElementById('answer-1').innerHTML = question['answer 1'];
        document.getElementById('answer-2').innerHTML = question['answer 2'];
        document.getElementById('answer-3').innerHTML = question['answer 3'];
        document.getElementById('answer-4').innerHTML = question['answer 4'];
    }
}

function answer(selection) {
    let rightAnswerNumber = questions[currentQuestion]['right-answer'];
    let selectedNumber = selection.slice(-1);
    let selectionContainer = document.getElementById(selection);
    let rightAnswerContainer = document.getElementById(`answer-${rightAnswerNumber}`);
    let nextButton = document.getElementById('next-button');

    if (selectedNumber == rightAnswerNumber) {
        selectionContainer.parentNode.classList.add('bg-success');
        rightQuestions += +1;

    } else {
        console.log(rightAnswerContainer);
        selectionContainer.parentNode.classList.add('bg-danger');
        rightAnswerContainer.parentNode.classList.add('bg-success');
    }
    nextButton.disabled = false;
}

function nextQuestion() {
    let nextButton = document.getElementById('next-button');
    nextButton.disabled = true;
    resetAnswerButtons();

    currentQuestion++;
    init();
}

function resetAnswerButtons() {
    document.getElementById('answer-1').parentNode.classList.remove('bg-danger');
    document.getElementById('answer-1').parentNode.classList.remove('bg-success');
    document.getElementById('answer-2').parentNode.classList.remove('bg-danger');
    document.getElementById('answer-2').parentNode.classList.remove('bg-success');
    document.getElementById('answer-3').parentNode.classList.remove('bg-danger');
    document.getElementById('answer-3').parentNode.classList.remove('bg-success');
    document.getElementById('answer-4').parentNode.classList.remove('bg-danger');
    document.getElementById('answer-4').parentNode.classList.remove('bg-success');
}

function restartGame() {
    document.getElementById('question-card').classList.remove('d-none');
    document.getElementById('endscreen').classList.add('d-none');
    currentQuestion = 0;
    rightQuestions = 0;
    init();
}