const startButton = document.getElementById("start-button");
const showQuestions = document.getElementById("quiz-container");
const nextButton = document.getElementById("next-button");
const questionText = document.getElementById("question-text");

const answerOne = document.getElementById("answer-one");
const answerTwo = document.getElementById("answer-two");
const answerThree = document.getElementById("answer-three");
const answerFour = document.getElementById("answer-four");

startButton.addEventListener("click", startQuiz);

const quizArray = [
  {
    question: "What is the name of the main character?",
    answer1: "Sasuke Uchiha",
    answer2: "The 3rd Hokage",
    answer3: "Naruto Uzumaki",
    answer4: "Kakashi Sensei",
  },
  {
    question: "What is Naruto Uzumakis favourite food?",
    answer1: "Ramen",
    answer2: "Steak",
    answer3: "He doesn't like food",
    answer4: "Apples",
  },
  {
    question: "What power do the Uchiha clan possess",
    answer1: "The Renegan",
    answer2: "The Sharingan",
    answer3: "The Byakugan",
    answer4: "The Nine Tails Chakra",
  },
  {
    question: "Which tailed beast does the Raikages brother control?",
    answer1: "The three tails",
    answer2: "The nine tails",
    answer3: "The eight tails",
    answer4: "The five tails",
  },
];

function startQuiz() {
  startButton.classList.add("hide");
  showQuestions.classList.remove("hide");
  nextButton.classList.remove("hide");
  questionText.innerText = quizArray[0].question;
  answerOne.innerText = quizArray[0].answer1;
  answerTwo.innerText = quizArray[0].answer2;
  answerThree.innerText = quizArray[0].answer3;
  answerFour.innerText = quizArray[0].answer4;
}

function pickRandomQuestion() {
  Math.floor(Math.random() * quizArray.length);
}

pickRandomQuestion();
