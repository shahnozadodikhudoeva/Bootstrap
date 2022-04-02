// Part 5 
function add() {
  var num1 = parseInt(document.getElementById("number1").value);
  var num2 = parseInt(document.getElementById("number2").value);
  var sumOfNumbers = num1 + num2;
  document.getElementById("result").value = sumOfNumbers;
}

function sub() {
  var num1 = parseInt(document.getElementById("number1").value);
  var num2 = parseInt(document.getElementById("number2").value);
  var sumOfNumbers = num1 - num2;
  document.getElementById("result").value = sumOfNumbers;
}

function mult() {
  var num1 = parseInt(document.getElementById("number1").value);
  var num2 = parseInt(document.getElementById("number2").value);
  var sumOfNumbers = num1 * num2;
  document.getElementById("result").value = sumOfNumbers;
}

function div() {
  var num1 = parseInt(document.getElementById("number1").value);
  var num2 = parseInt(document.getElementById("number2").value);
  var sumOfNumbers = num1 / num2;
  document.getElementById("result").value = sumOfNumbers;
}



// Part 10

function add10() {
  var num1 = parseInt(document.getElementById("number110").value);
  var num2 = parseInt(document.getElementById("number210").value);
  var sumOfNumbers = num1 + num2;
  document.getElementById("result10").value = sumOfNumbers;
}

function sub10() {
  var num1 = parseInt(document.getElementById("number110").value);
  var num2 = parseInt(document.getElementById("number210").value);
  var sumOfNumbers = num1 - num2;
  document.getElementById("result10").value = sumOfNumbers;
}

function mult10() {
  var num1 = parseInt(document.getElementById("number110").value);
  var num2 = parseInt(document.getElementById("number210").value);
  var sumOfNumbers = num1 * num2;
  document.getElementById("result10").value = sumOfNumbers;
}

function div10() {
  var num1 = parseInt(document.getElementById("number110").value);
  var num2 = parseInt(document.getElementById("number210").value);
  var sumOfNumbers = num1 / num2;
  document.getElementById("result10").value = sumOfNumbers;
}
//Part 11
  const questions = [
    {
      question: "The capital of Tajikistan is ",
      optionA: "Almaty",
      optionB: "Dushanbe",
      optionC: "Khorog",
      optionD: "Khujand",
      correctOption: "optionB",
    },
    {
      question:
        "The highest peak in Tajikistan is",
      optionA: "Fedchenko",
      optionB: "Everest",
      optionC: "Ismoili Somoni",
      optionD: "None of the above",
      correctOption: "optionC",
    },
    {
      question: "When did Tajikistan get its independence?",
      optionA: "1999",
      optionB: "2001",
      optionC: "1993",
      optionD: "1992",
      correctOption: "optionD",
    },
    {
      question:
        "What river is in Tajikistan?",
      optionA: "Pyanj",
      optionB: "Sir",
      optionC: "Amu",
      optionD: "All of the above",
      correctOption: "optionD",
    },
  ];

let shuffledQuestions = [];

function handleQuestions() {

  while (shuffledQuestions.length <= 3) {
    const random = questions[Math.floor(Math.random() * questions.length)];
    if (!shuffledQuestions.includes(random)) {
      shuffledQuestions.push(random);
    }
  }
}

let questionNumber = 1; 
let playerScore = 0; 
let wrongAttempt = 0;
let indexNumber = 0; 

function NextQuestion(index) {
  handleQuestions();
  const currentQuestion = shuffledQuestions[index];
  document.getElementById("player-score").innerHTML = playerScore;
  document.getElementById("display-question").innerHTML =
    currentQuestion.question;
  document.getElementById("option-one-label").innerHTML =
    currentQuestion.optionA;
  document.getElementById("option-two-label").innerHTML =
    currentQuestion.optionB;
  document.getElementById("option-three-label").innerHTML =
    currentQuestion.optionC;
  document.getElementById("option-four-label").innerHTML =
    currentQuestion.optionD;
}

function checkForAnswer() {
  const currentQuestion = shuffledQuestions[indexNumber]; 
  const currentQuestionAnswer = currentQuestion.correctOption; 
  const options = document.getElementsByName("option"); 
  let correctOption = null;

  options.forEach((option) => {
    if (option.value === currentQuestionAnswer) {
      
      correctOption = option.labels[0].id;
    }
  });

 
  if (
    options[0].checked === false &&
    options[1].checked === false &&
    options[2].checked === false &&
    options[3].checked == false
  ) {
    document.getElementById("option-modal").style.display = "flex";
  }


  options.forEach((option) => {
    if (option.checked === true && option.value === currentQuestionAnswer) {
      document.getElementById(correctOption).style.backgroundColor = "green";
      document.getElementById("correctANS").innerHTML =
        "Correct answer! Next question will be loaded automatically.";
      playerScore++; 
      indexNumber++; 
      setTimeout(() => {
        questionNumber++;
      }, 1000);
    } else if (option.checked && option.value !== currentQuestionAnswer) {
      const wrongLabelId = option.labels[0].id;
      document.getElementById(wrongLabelId).style.backgroundColor = "red";
      document.getElementById(correctOption).style.backgroundColor = "green";

      wrongAttempt++; 
      indexNumber++;
      setTimeout(() => {
        questionNumber++;
      }, 1000);
    }
  });
}


function handleNextQuestion() {
  checkForAnswer(); 
  unCheckRadioButtons();
  setTimeout(() => {
    if (indexNumber <= 9) {
      NextQuestion(indexNumber);
    } else {
      handleEndGame(); 
    }
    resetOptionBackground();
  }, 1000);
}

function resetOptionBackground() {
  document.getElementById("correctANS").innerHTML = "";
  const options = document.getElementsByName("option");
  options.forEach((option) => {
    document.getElementById(option.labels[0].id).style.backgroundColor = "";
  });
}

function unCheckRadioButtons() {
  const options = document.getElementsByName("option");
  for (let i = 0; i < options.length; i++) {
    options[i].checked = false;
  }
}
