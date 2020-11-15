const read = require("readline-sync");

const questionsList = [
  {
    question: "What is my name ? ",
    answer: "Ganesh Kumar",
  },
  {
    question: "Where do I live ? ",
    answer: "Chennai",
  },
  {
    question: "I'm an engineering student. What is my major ? ",
    answer: "Computer Science",
  },
  {
    question: "What is my favourite programming language ? ",
    answer: "Javascript",
  },
  {
    question: "What is my nick name ? ",
    answer: "Ganny",
  },
];

let score = 0;

function game(question, answer) {
  let userAnswer = read.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score++;
    console.log(`Great ! that's correct`);
  } else {
    console.log(`Oops ! that's wrong`);
  }
  console.log(`Your current score is ${score}`);
}

console.log("Welcome to the game, DO YOU KNOW ME !");

let userName = read.question("What is your name ? ");

console.log(`Okay ${userName}, let's begin`);

console.log(
  `Keep answering the following questions to know how much you know about me !`
);

console.log("--------------------------------------");

for (let item of questionsList) {
  game(item.question, item.answer);
  let reply = read.question("Do you want to continue y/n ? ");
  console.log("--------------------------------------");
  if (reply === "n") {
    break;
  }
}

console.log(
  `Hurray ${userName} ! you are done with the quiz, here is your final score ${score}/5`
);
