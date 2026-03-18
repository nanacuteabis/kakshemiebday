const startBtn = document.getElementById("start-btn");
const continueBtn = document.getElementById("continue-btn");
const submitBtn = document.getElementById("submit-answer");
const stopGameBtn = document.getElementById("stop-game");

const welcomePage = document.getElementById("welcome-page");
const warningPage = document.getElementById("warning-page");
const gamePage = document.getElementById("game-page");
const endPage = document.getElementById("end-page");

const questionEl = document.getElementById("question");
const answerInput = document.getElementById("answer-input");
const feedback = document.getElementById("feedback");

const questions = [
    { q: "Siapa nama pet TikTok kita?", a: "SHIKA" },
    { q: "Makanan favorit kamu?", a: "SUSHI" },
    { q: "Warna favorit kamu?", a: "KUNING" },
    { q: "Baju kesukaanmu?", a: "KEMEJA" },
    { q: "Siapa penguasa Solo?", a: "JOKOWI" }
];

let currentQuestion = 0;

startBtn.addEventListener("click", () => {
    welcomePage.classList.add("hidden");
    warningPage.classList.remove("hidden");
});

continueBtn.addEventListener("click", () => {
    warningPage.classList.add("hidden");
    gamePage.classList.remove("hidden");
    loadQuestion();
});

function loadQuestion() {
    answerInput.value = "";
    feedback.textContent = "";
    questionEl.textContent = questions[currentQuestion].q;
}

submitBtn.addEventListener("click", () => {
    const answer = answerInput.value.toUpperCase();
    if(answer === questions[currentQuestion].a){
        feedback.textContent = "xixi selamat yeaaa😎";
        currentQuestion++;
        if(currentQuestion < questions.length){
            setTimeout(loadQuestion, 1000);
        } else {
            setTimeout(() => {
                gamePage.classList.add("hidden");
                endPage.classList.remove("hidden");
            }, 1000);
        }
    } else {
        feedback.textContent = "Coba lagi ya😉";
    }
});

stopGameBtn.addEventListener("click", () => {
    endPage.classList.add("hidden");
    welcomePage.classList.remove("hidden");
    currentQuestion = 0;
});
