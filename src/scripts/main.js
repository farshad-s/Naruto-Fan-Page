const startButton = document.getElementById("start-button");
const showQuestions = document.getElementById("quiz-container");
const nextButton = document.getElementById("next-button");
const questionText = document.getElementById("question-text");
const quizOver = document.getElementById("quiz-over");
let scoreCount = document.getElementById("score-count");

const answerOne = document.getElementById("answer-one");
const answerTwo = document.getElementById("answer-two");
const answerThree = document.getElementById("answer-three");
const answerFour = document.getElementById("answer-four");

// Array that holds the quiz questions
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
  {
    question: "How many Kages are there?",
    answers: [
      { text: "3" },
      { text: "10" },
      { text: "5", status: true },
      { text: "2" },
    ],
  },
  {
    question: "Who has the one-tailed beast inside him?",
    answers: [
      { text: "Naruto" },
      { text: "Gaara", status: true },
      { text: "Sakura" },
      { text: "Orochimaru" },
    ],
  },
];

// Start button - When button is clicked, startQuiz runs
// Next Button - When button is clicked, nextQuestion runs
startButton.addEventListener("click", startQuiz);
nextButton.addEventListener("click", nextQuestion);

// Removes start button, shows questions, shows next button
function startQuiz() {
  startButton.classList.add("hide");
  showQuestions.classList.remove("hide");
  nextButton.classList.remove("hide");
  nextQuestion();
}

// count - to loop through the quiz array
// scoreCount - to increase the score when right answer is selected
let count = 0;
scoreCount.innerText = 0;

// Changes question, gives colour + disable to button, adds to scoreCount if answer is correct, enables clicking on the buttons, resets the colour of the buttons
function nextQuestion() {
  changeQuestion();
  choosingAnswer();
  count++;
  enableAnswers();
  resetButtonColour();
}

// Makes the answer buttons clickable
function enableAnswers() {
  answerOne.disabled = false;
  answerTwo.disabled = false;
  answerThree.disabled = false;
  answerFour.disabled = false;
}

// Removes option to click the answer buttons
function disableAnswers() {
  answerOne.disabled = true;
  answerTwo.disabled = true;
  answerThree.disabled = true;
  answerFour.disabled = true;
}

// Resets button background colour to initial
function resetButtonColour() {
  answerOne.style.backgroundColor = "white";
  answerTwo.style.backgroundColor = "white";
  answerThree.style.backgroundColor = "white";
  answerFour.style.backgroundColor = "white";
}

function changeQuestion() {
  if (count < quizArray.length) {
    questionText.innerText = quizArray[count].question;
    answerOne.innerText = quizArray[count].answers[0].text;
    answerTwo.innerText = quizArray[count].answers[1].text;
    answerThree.innerText = quizArray[count].answers[2].text;
    answerFour.innerText = quizArray[count].answers[3].text;
  } else {
    startButton.classList.add("hide");
    showQuestions.classList.add("hide");
    nextButton.classList.add("hide");
    quizOver.classList.remove("hide");
    displayResult();
  }
}

function displayResult() {
  if (scoreCount.innerText >= 3) {
    quizOver.innerText = "Mission Complete!";
  } else {
    quizOver.innerText = "Mission Failed";
  }
}

function choosingAnswer() {
  if (quizArray[count].answers[0].status !== true) {
    answerOne.onclick = function () {
      answerOne.style.backgroundColor = "red";
      disableAnswers();
    };
  } else {
    answerOne.onclick = function () {
      answerOne.style.backgroundColor = "green";
      disableAnswers();
      scoreCount.innerText++;
    };
  }

  if (quizArray[count].answers[1].status !== true) {
    answerTwo.onclick = function () {
      answerTwo.style.backgroundColor = "red";
      disableAnswers();
    };
  } else {
    answerTwo.onclick = function () {
      answerTwo.style.backgroundColor = "green";
      disableAnswers();
      scoreCount.innerText++;
    };
  }

  if (quizArray[count].answers[2].status !== true) {
    answerThree.onclick = function () {
      answerThree.style.backgroundColor = "red";
      disableAnswers();
    };
  } else {
    answerThree.onclick = function () {
      answerThree.style.backgroundColor = "green";
      disableAnswers();
      scoreCount.innerText++;
    };
  }

  if (quizArray[count].answers[3].status !== true) {
    answerFour.onclick = function () {
      answerFour.style.backgroundColor = "red";
      disableAnswers();
    };
  } else {
    answerFour.onclick = function () {
      answerFour.style.backgroundColor = "green";
      disableAnswers();
      scoreCount.innerText++;
    };
  }
}
