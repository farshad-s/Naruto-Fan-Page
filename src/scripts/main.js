const startButton = document.getElementById("start-button");
const showQuestions = document.getElementById("quiz-container");
const nextButton = document.getElementById("next-button");
const questionText = document.getElementById("question-text");

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  startButton.classList.add("hide");
  showQuestions.classList.remove("hide");
  nextButton.classList.remove("hide");
  questionText.innerText = quizArray[0].question;
}

const quizArray = [
  {
    question: "What is the name of the main character?",
    answer1: "Sasuke Uchiha",
    answer2: "The 3rd Hokage",
    answer3: "Naruto Uzumaki",
    answer4: "Kakashi Sensei",
  },
];

console.log(questionArray[0].question);
