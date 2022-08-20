const quizData = [
    {
        question: "What kind holiday excites you??",
        a: "Sandy beaches",
        b: "Charming Countryside",
        c: "City break",
        d: "Natures beauty",
        correct: "d",
    },
    {
        question: "What kind of activites would you like to do?",
        a: "Relaxing Spa days and lounging with beautifully made cocktails",
        b: "Sighting see famous landmarks revered through history",
        c: "Strolling through charming villages filled with aromas of fresh pasteries and coffees",
        d: "Fast paced adventures in the outdoors ",
        correct: "b",
    },
    {
        question: "What is your favourite season to travel? ",
        a: "Hot Summer days under the sun and late nights filled with laughter ",
        b: "Cozy Winters filled with snow, warm socks and a cup of cocoa ",
        c: "Toasty through Falls filled with Autumnal leaves ",
        d: "Spring time filled with sweet blossoming florals",
        correct: "a",
    },
    {
        question: "What is your ideal stay?",
        a: "All inclusive resorts",
        b: "All inclusive resorts",
        c: "Trouble-free hotels",
        d: "Camping style",
        correct: "b",
    },
    {
        question: "What is your ideal evening?",
        a: "Late night swims",
        b: "Michelin star dinners",
        c: "Bar hoppping on the town",
        d: "Star gazing ",
        correct: "b", 
    }


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>You answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
       }
    }
})