const startButton = document.getElementById("start-button");
const showQuestions = document.getElementById("quiz-container");
const nextButton = document.getElementById("next-button");
const questionText = document.getElementById("question-text");

const answerOne = document.getElementById("answer-one");
const answerTwo = document.getElementById("answer-two");
const answerThree = document.getElementById("answer-three");
const answerFour = document.getElementById("answer-four");

const answerButtons = document.getElementsByClassName("answer-button");

startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);

const quizArray = [
  {
    question: "What is the name of the main character?",
    answers: [
      { text: "Sasuke Uchiha" },
      { text: "The 3rd Hokage" },
      { text: "Naruto Uzumaki", status: true },
      { text: "Kakashi Sensei" },
    ],
  },
  {
    question: "What is Naruto Uzumakis favourite food?",
    answers: [
      { text: "Ramen", status: true },
      { text: "Steak" },
      { text: "He doesn't like food" },
      { text: "Apples" },
    ],
  },
  {
    question: "What power do the Uchiha clan possess?",
    answers: [
      { text: "The Renegan" },
      { text: "The Sharingan", status: true },
      { text: "The Byakugan" },
      { text: "The Nine Tails Chakra" },
    ],
  },
  {
    question: "Which tailed beast does the Raikages brother control?",
    answers: [
      { text: "The three tails" },
      { text: "The nine tails" },
      { text: "The eight tails", status: true },
      { text: "The five tails" },
    ],
  },
];

function startQuiz() {
  startButton.classList.add("hide");
  showQuestions.classList.remove("hide");
  nextButton.classList.remove("hide");
  nextQuestion();
}

function nextQuestion() {
  changeQuestion();
  answerOne.classList.add("btn-light");
  answerTwo.classList.add("btn-light");
  answerThree.classList.add("btn-light");
  answerFour.classList.add("btn-light");

  answerOne.disabled = false;
  answerTwo.disabled = false;
  answerThree.disabled = false;
  answerFour.disabled = false;
}

let count = 0;

function changeQuestion() {
  if (count < quizArray.length) {
    questionText.innerText = quizArray[count].question;
    answerOne.innerText = quizArray[count].answers[0].text;
    answerTwo.innerText = quizArray[count].answers[1].text;
    answerThree.innerText = quizArray[count].answers[2].text;
    answerFour.innerText = quizArray[count].answers[3].text;
    count++;
  }
}
