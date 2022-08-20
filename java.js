// QUESTIONS

const questions = [
    {
      "question": "What kind holiday excites you?",
      "answer1": "Sandy beaches",
      "answer1Total": "1",
      "answer2": "City break",
      "answer2Total": "2",
      "answer3": "Nature retreat",
      "answer3Total": "3"
    },
    {
      "question": "What kind of activites would you like to do?",
      "answer1": "Relaxing Spa days and lounging with beautifully made cocktails",
      "answer1Total": "1",
      "answer2": "Exploring famous landmarks revered through history",
      "answer2Total": "2",
      "answer3": "Strolling through charming villages filled with aromas of fresh pasteries and coffees",
      "answer3Total": "3"
    },
    {
      "question":
        "What is your favourite season to travel?",
      "answer1": "Hot Summer days under the sun and late nights filled with laughter",
      "answer1Total": "1",
      "answer2": "Cozy Winters filled with snow, warm socks and a cup of cocoa",
      "answer2Total": "3",
      "answer3": "Toasty through Falls filled with Autumnal leaves",
      "answer3Total": "2"
    },
    {
      "question": "Best Sentence to describe you on holiday?",
      "answer1": "The planner, everything is planned down to meal times and exploration times.",
      "answer1Total": "3",
      "answer2": "The relaxer, you think holidays are for relaxing only and spend the time lounging around.",
      "answer2Total": "2",
      "answer3":
        "You go with the flow, its your holiday and it will always be what you make it.",
      "answer3Total": "1"
    },
    {
      "question": "What is your ideal stay?",
      "answer1": "All inclusive resorts.",
      "answer1Total": "1",
      "answer2": "Secluded Cottage.",
      "answer2Total": "2",
      "answer3": "Trouble-free hotels.",
      "answer3Total": "3"
    },
    {
      "question":
        "What is your ideal evening?",
      "answer1":
        "Late night swims.",
      "answer1Total": "3",
      "answer2": "Michelin star dinners.",
      "answer2Total": "2",
      "answer3": "Bar hopping in the town.",
      "answer3Total": "1"
    },
    {
      "question": "Your ideal method of travel",
      "answer1": "Jetted out on a plane.",
      "answer1Total": "1",
      "answer2": "Relaxing boat journey.",
      "answer2Total": "2",
      "answer3": "By coach, or a road trip with close friends and family",
      "answer3Total": "3"
    }
  ]
  
  
  let currentQuestion = 0;
  let score = [];
  let selectedAnswersData = [];
  const totalQuestions =questions.length;
  
  const container = document.querySelector('.quiz-container');
  const questionEl = document.querySelector('.question');
  const option1 = document.querySelector('.option1');
  const option2 = document.querySelector('.option2');
  const option3 = document.querySelector('.option3');
  const nextButton = document.querySelector('.next');
  const previousButton = document.querySelector('.previous');
  const restartButton = document.querySelector('.restart');
  const result = document.querySelector('.result');
  
  //Function to generate question 
  function generateQuestions (index) {
      //Select each question by passing it a particular index
      const question = questions[index];
      const option1Total = questions[index].answer1Total;
      const option2Total = questions[index].answer2Total;
      const option3Total = questions[index].answer3Total;
      //Populate html elements 
      questionEl.innerHTML = `${index + 1}. ${question.question}`
      option1.setAttribute('data-total', `${option1Total}`);
      option2.setAttribute('data-total', `${option2Total}`);
      option3.setAttribute('data-total', `${option3Total}`);
      option1.innerHTML = `${question.answer1}`
      option2.innerHTML = `${question.answer2}`
      option3.innerHTML = `${question.answer3}`
  }
  
  
  function loadNextQuestion () {
      const selectedOption = document.querySelector('input[type="radio"]:checked');
      //Check if there is a radio input checked
      if(!selectedOption) {
          alert('Please select your answer!');
          return;
      }
      //Get value of selected radio
      const answerScore = Number(selectedOption.nextElementSibling.getAttribute('data-total'));
  
      ////Add the answer score to the score array
      score.push(answerScore);
  
      selectedAnswersData.push()
      
  
      const totalScore = score.reduce((total, currentNum) => total + currentNum);
  
      //Finally we incement the current question number ( to be used as the index for each array)
      currentQuestion++;
  
          //once finished clear checked
          selectedOption.checked = false;
      //If quiz is on the final question
      if(currentQuestion == totalQuestions - 1) {
          nextButton.textContent = 'Finish';
      }
      //If the quiz is finished then we hide the questions container and show the results 
      if(currentQuestion == totalQuestions) {
          container.style.display = 'none';
          result.innerHTML =
           `<h1 class="final-score">Your score: ${totalScore}</h1>
           <div class="summary">
              <h1>Summary</h1>
              <p>Possible - Holiday Destinations, see below for a summary based on your results:</p>
              <p>15 - 21- The Cotswolds, UK</p>
              <p>10 - 15 - Phucket, Thailand</p>
              <p>5 - 10 - Paris, France </p>
              <p>5 - Venice, Italy</p>
          </div>
          <button class="restart">Restart Quiz</button>
           `;
          return;
      }
      generateQuestions(currentQuestion);
  }
  
  //Function to load previous question
  function loadPreviousQuestion() {
      //Decrement quentions index
      currentQuestion--;
      //remove last array value;
      score.pop();
      //Generate the question
      generateQuestions(currentQuestion);
  }
  
  //Fuction to reset and restart the quiz;
  function restartQuiz(e) {
      if(e.target.matches('button')) {
      //reset array index and score
      currentQuestion = 0;
      score = [];
      //Reload quiz to the start
      location.reload();
      }
  
  }
  
  
  generateQuestions(currentQuestion);
  nextButton.addEventListener('click', loadNextQuestion);
  previousButton.addEventListener('click',loadPreviousQuestion);
  result.addEventListener('click',restartQuiz);