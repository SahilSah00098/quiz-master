# quiz-master

New work built for Sahil Sah's GitHub profile. A client-side HTML/JS
quiz with local questions, a score, and a 30-second timer per question.
No server, no API key, no external service.

## What it does

- 8 local questions (general knowledge, HTML, Python, FastAPI, CSS,
  maths, data structures, SQLite)
- One question at a time, click an answer to move on
- 30-second timer per question — running out counts as unanswered
- Final score out of 8, then refresh to play again

## How to run

Open `index.html` in any browser (double-click it, or serve the folder
with any static server). No build step.

## How to test

```bash
node --check quiz.js
node test_quiz.js
```

The test checks the scoring logic only (perfect, mixed, empty and
timed-out answers). It does not claim a browser UI test was run.

## About Sahil

Sahil Sah — Founder & CEO, LegacyShift AI, Pune, India.
GitHub: https://github.com/SahilSah00098
LinkedIn: https://www.linkedin.com/in/sahil-sah-96079a316

Achievements, slightly matching the team (shared items on both,
individual items separate, never identical lists): Datathon 3rd rank,
team Super intelligence (shared with Vinit Potdar, Co-founder & CTO of
LegacyShift AI); LegacyShift AI founder role; Selected for SIH 2nd round
(Smart India Hackathon, college level — Sahil only). Harvard Aspire
Leaders is Vinit's achievement only and is NOT claimed here. No YC
claim, no stars, users or revenue are claimed for this project.
