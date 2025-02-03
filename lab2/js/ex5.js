//Ex5
const quizData = [
    {
        question: "What is the capital of France?",
        options: ["Berlin", "Madrid", "Paris", "Rome"],
        answer: "Paris"
    },
    {
        question: "Which planet is known as the Red Planet?",
        options: ["Earth", "Mars", "Jupiter", "Venus"],
        answer: "Mars"
    },
    {
        question: "What is the largest ocean on Earth?",
        options: ["Atlantic", "Indian", "Arctic", "Pacific"],
        answer: "Pacific"
    }
];

const quizContainer = document.getElementById("quiz");
const submitButton = document.getElementById("submit");
const resultContainer = document.getElementById("result");

function loadQuiz() {
    quizContainer.innerHTML = "";

    quizData.forEach((item, index) => {
        const questionElem = document.createElement("div");
        questionElem.innerHTML = `<p><strong>${index + 1}. ${item.question}</strong></p>`;

        item.options.forEach(option => {
            const label = document.createElement("label");
            label.innerHTML = `<input type="radio" name="question${index}" value="${option}"> ${option}`;
            questionElem.appendChild(label);
            questionElem.appendChild(document.createElement("br"));
        });

        quizContainer.appendChild(questionElem);
    });
}

function checkAnswers() {
    let score = 0;
    quizData.forEach((item, index) => {
        const selectedOption = document.querySelector(`input[name='question${index}']:checked`);
        if (selectedOption && selectedOption.value === item.answer) {
            score++;
        }
    });
    resultContainer.innerHTML = `<h3>Your score: ${score}/${quizData.length}</h3>`;
}

submitButton.addEventListener("click", checkAnswers);
loadQuiz(); 
