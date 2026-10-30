// Node test for quiz-master scoring logic. Run: node test_quiz.js
const assert = require("assert");
const { QUESTIONS, scoreAnswers } = require("./quiz.js");

assert.strictEqual(QUESTIONS.length, 8, "expected 8 local questions");
const allCorrect = QUESTIONS.map((q) => q.answer);
assert.strictEqual(scoreAnswers(allCorrect), 8);
assert.strictEqual(scoreAnswers([0, 0, 0, 0, 0, 0, 0, 0]), 2);
assert.strictEqual(scoreAnswers([]), 0);
assert.strictEqual(scoreAnswers([-1, -1, -1, -1, -1, -1, -1, -1]), 0);
console.log("quiz-master tests: all checks passed (8 questions, perfect/mixed/empty/timed-out scoring)");
