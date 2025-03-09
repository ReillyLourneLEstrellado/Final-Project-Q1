const quizData = [
    {
        question: "What is a key strategy in addressing food insecurity among children in poverty in the Philippines?",
        choices: ["Only providing direct food aid", "Public education, policy advocacy, fundraising, and business partnerships", "Relying solely on government support", "Ignoring the issue"],
        answer: 1
    },
    {
        question: "How can educating communities help combat food insecurity?",
        choices: ["By spreading misinformation", "By driving engagement and policy change", "By discouraging involvement", "By reducing food supply"],
        answer: 1
    },
    {
        question: "Which policy changes can help address food insecurity?",
        choices: ["Weaker social safety nets", "Agricultural reforms and stronger social safety nets", "Higher food prices", "Less government intervention"],
        answer: 1
    },
    {
        question: "What are effective ways to raise funds for food security initiatives?",
        choices: ["Ignoring financial needs", "Crowdfunding, corporate partnerships, and grants", "Reducing donations", "Relying on a single donor"],
        answer: 1
    },
    {
        question: "How can businesses help reduce food insecurity?",
        choices: ["By discarding surplus food", "By increasing food prices", "By redirecting surplus food to those in need", "By limiting food production"],
        answer: 2
    }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = "";

    const questionEl = document.createElement("h3");
    questionEl.innerText = quizData[currentQuestion].question;
    quizContainer.appendChild(questionEl);

    quizData[currentQuestion].choices.forEach((choice, index) => {
        const button = document.createElement("button");
        button.innerText = choice;
        button.onclick = () => checkAnswer(index);
        quizContainer.appendChild(button);
    });
}

function checkAnswer(selected) {
    if (selected === quizData[currentQuestion].answer) {
        score++;
    }
    currentQuestion++;
    if (currentQuestion < quizData.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    const quizContainer = document.getElementById("quiz");
    quizContainer.innerHTML = `<h2>Your Score: ${score}/${quizData.length}</h2>`;
}

document.addEventListener("DOMContentLoaded", loadQuestion);
