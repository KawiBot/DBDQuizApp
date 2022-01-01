const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "Javascript",
    correct: "d",
  },
  {
    question: "What does CSS Stand for?",
    a: "Central Style Sheets",
    b: "Cissy Stylish Stevens",
    c: "Cascading Style Sheets",
    d: "Cars SUVs Sailboats",
    correct: "c",
  },
  {
    question: "How old are you??",
    a: "20",
    b: "14",
    c: "10",
    d: "How do you expect me to know that?",
    correct: "d",
  },
];

const quiz = document.getElementById("quiz");
const answerEles = document.querySelectorAll(".answer");

const questionEle = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();
  const currentQuizData = quizData[currentQuiz];

  questionEle.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function deselectAnswers() {
  answerEles.forEach((answerEle) => (answerEle.checked = false));
}

function getSelected() {
  let answer;

  answerEles.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}
submitBtn.addEventListener("click", () => {
  const answer = getSelected();

  if (answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++;
    }
    currentQuiz++;
    if (currentQuiz < quizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML = `
            <h2 class="end"> You answered <strong class="${
              score === quizData.length ? "green" : "red"
            }">${score}</strong><strong class="green">/${
        quizData.length
      }</strong> questions correctly.</h2>

            <button onclick="location.reload()">Try Again</button>
        `;
    }
  }
});
