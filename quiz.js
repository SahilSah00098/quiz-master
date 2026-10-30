// quiz-master: local questions, score + per-question timer, no server, no key.
// Pure functions are exported for Node testing; the browser wires them to the DOM.
(function (root) {
  const QUESTIONS = [
    { q: "Which language is this quiz page written in, besides HTML/CSS?", options: ["Python", "JavaScript", "Java", "SQL"], answer: 1 },
    { q: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Machine Language", "Hyperlink Text Mode Language", "Home Tool Markup Language"], answer: 0 },
    { q: "Which Python keyword defines a function?", options: ["func", "define", "def", "function"], answer: 2 },
    { q: "In a FastAPI app, what does GET /todos normally do?", options: ["Delete a todo", "List todos", "Create a todo", "Toggle a todo"], answer: 1 },
    { q: "Which of these is a valid CSS colour value?", options: ["#06B6D4", "colour-blue-9", "rgb(999,0,0)", "blueish"], answer: 0 },
    { q: "What is 2 + 2 * 3?", options: ["12", "8", "10", "6"], answer: 1 },
    { q: "Which data structure is first-in, first-out?", options: ["Stack", "Queue", "Tree", "Graph"], answer: 1 },
    { q: "What does SQLite store data in?", options: ["A remote server only", "A single local file", "The browser cache only", "A spreadsheet in the cloud"], answer: 1 },
  ];

  function scoreAnswers(answers) {
    let score = 0;
    QUESTIONS.forEach((item, i) => {
      if (answers[i] === item.answer) score += 1;
    });
    return score;
  }

  const api = { QUESTIONS, scoreAnswers };
  if (typeof module !== "undefined" && module.exports) {
    module.exports = api;
  } else {
    root.QuizMaster = api;
  }
})(typeof self !== "undefined" ? self : this);

// Browser wiring (only runs when document exists).
if (typeof document !== "undefined") {
  const { QUESTIONS, scoreAnswers } = window.QuizMaster;
  let index = 0;
  let answers = [];
  let secondsLeft = 30;
  let timer = null;

  function render() {
    const q = QUESTIONS[index];
    document.getElementById("question").textContent = `Q${index + 1}. ${q.q}`;
    const opts = document.getElementById("options");
    opts.innerHTML = "";
    q.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.textContent = opt;
      btn.onclick = () => { answers[index] = i; next(); };
      opts.appendChild(btn);
    });
    document.getElementById("progress").textContent = `Question ${index + 1} of ${QUESTIONS.length}`;
    startTimer();
  }

  function startTimer() {
    clearInterval(timer);
    secondsLeft = 30;
    const el = document.getElementById("timer");
    el.textContent = `Time left: ${secondsLeft}s`;
    timer = setInterval(() => {
      secondsLeft -= 1;
      el.textContent = `Time left: ${secondsLeft}s`;
      if (secondsLeft <= 0) { answers[index] = -1; next(); }
    }, 1000);
  }

  function next() {
    clearInterval(timer);
    index += 1;
    if (index >= QUESTIONS.length) {
      const score = scoreAnswers(answers);
      document.getElementById("quiz").innerHTML =
        `<h2>Done! Score: ${score} / ${QUESTIONS.length}</h2><p>Refresh the page to play again.</p>`;
    } else {
      render();
    }
  }

  document.addEventListener("DOMContentLoaded", render);
}
