// Question bank

// var questionBank = [
//   {
//     question:
//       "Eritrea, which became the 182nd member of the UN in 1993, is in the continent of:",
//     option: ["Asia", "Africa", "Europe", "Australia"],
//     answer: "Africa",
//   },
//   {
//     question: "For which of the following disciplines is Nobel Prize awarded?",
//     option: [
//       "Physics and Chemistry",
//       "Physiology or Medicine",
//       "	Literature, Peace and Economics",
//       "All of the above",
//     ],
//     answer: "All of the above",
//   },
//   {
//     question: "Habeas Corpus Act 1679:",
//     option: [
//       "states that no one was to be imprisoned without a writ or warrant stating the charge against him",
//       "provided facilities to a prisoner to obtain either speedy trial or release in bail",
//       "safeguarded the personal liberties of the people against arbitrary imprisonment by the king's orders",
//       "All of the above",
//     ],
//     answer: "All of the above",
//   },
//   {
//     question: "Exposure to sunlight helps a person improve his health because:",
//     option: [
//       "the infrared light kills bacteria in the body",
//       "resistance power increases",
//       "the pigment cells in the skin get stimulated and produce a healthy tan",
//       "the ultraviolet rays convert skin oil into Vitamin D",
//     ],
//     answer: "the ultraviolet rays convert skin oil into Vitamin D",
//   },
//   {
//     question:
//       "Federation Cup, World Cup, Allywyn International Trophy and Challenge Cup are awarded to winners of:",
//     option: ["Tennis", "Volleyball", "Basketball", "Cricket"],
//     answer: "Volleyball",
//   },
// ];

var question = document.getElementById("question");
var quizContainer = document.getElementById("quiz-container");
var scorecard = document.getElementById("scorecard");
var option0 = document.getElementById("option0");
var option1 = document.getElementById("option1");
var option2 = document.getElementById("option2");
var option3 = document.getElementById("option3");
var next = document.querySelector(".next");
var points = document.getElementById("score");
var span = document.querySelectorAll("span");
var stat = document.getElementById("stat");
var i = 0;
var score = 0;

// function to display questions

const displayQuestion = () => {
  for (var a = 0; a < span.length; a++) {
    span[a].style.background = "none";
  }
  question.innerHTML = `Q. ${i + 1}: ${questionBank[i].question}`;
  option0.innerHTML = questionBank[i].option[0];
  option1.innerHTML = questionBank[i].option[1];
  option2.innerHTML = questionBank[i].option[2];
  option3.innerHTML = questionBank[i].option[3];
  stat.innerHTML = `Question ${i + 1} of ${questionBank.length}`;
};

// function to calculate scores

const calcScore = (e) => {
  if (e.innerHTML === questionBank[i].answer && score < questionBank.length) {
    score += 1;
    document.getElementById(e.id).style.background = "limegreen";
  } else {
    document.getElementById(e.id).style.background = "tomato";
  }
  setTimeout(nextQuestion, 300)
};


// function to display next question

const nextQuestion = () => {
    if(i < questionBank.length-1 ) {
        i += 1
        displayQuestion()
    } else {
        points.innerHTML = `${score} / ${questionBank.length}`
        quizContainer.style.display = 'none'
        scoreboard.style.display = 'block'
    }
}

// click event to next button

next.addEventListener('click', nextQuestion)

// Back to Quiz button event 

const backToQuiz = () => {
    location.reload();
}

// function to check Answers

const checkAnswer = () => {
    var answerBank = document.getElementById('answerBank')
    var answers = document.getElementById('answers')
    answerBank.style.display = 'block'
    scoreboard.style.display = 'none'
    for(var a = 0; a < questionBank.length; a++) {
        var listItem = document.createElement('li')
        listItem.innerHTML = questionBank[a].answer
        answers.appendChild(listItem)
    }
}


displayQuestion()
