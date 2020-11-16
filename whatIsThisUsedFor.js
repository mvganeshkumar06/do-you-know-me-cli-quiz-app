const read = require("readline-sync");
const chalk = require("chalk");

chalk.enabled = true;

const questionsList = [
  {
    question: "Where javascript is mostly used ? ",
    options: [
      "Machine learning",
      "Web development",
      "Augumented reality",
      "Game development",
    ],
    answer: 2,
  },
  {
    question: "Which language is widely used for ios development ? ",
    options: ["PHP", "C++", "Swift", "Perl"],
    answer: 3,
  },
  {
    question: "What is the primary use case of C++ ? ",
    options: [
      "Hacking",
      "Libraries and frameworks",
      "Operating system",
      "Both option b and c",
    ],
    answer: 4,
  },
  {
    question: "Which of the following is majorly used for game development ? ",
    options: ["C#", "Assembly", "Ruby", "SQL"],
    answer: 1,
  },
  {
    question: "Which language is not used for backend development ? ",
    options: ["Javascript", "Java", "Go", "None of the above"],
    answer: 4,
  },
];

let highScore = [
  {
    name: "Babu",
    score: 4,
    position: "1",
  },
  {
    name: "Ram",
    score: 3,
    position: "2",
  },
  {
    name: "Mohan",
    score: 2,
    position: "3",
  },
];

let score = 0;

function game(question, options, answer) {
  console.log(`${chalk.bgWhiteBright.black.bold(question)} \n`);

  let userAnswer = read.keyInSelect(options, null, { cancel: "EXIT" }) + 1;

  if (userAnswer == 0) {
    return -1;
  } else if (userAnswer === answer) {
    score++;

    console.log("");
    console.log(chalk.bgGreenBright.black.bold(`Great ! that's correct \n`));
  } else {
    console.log(chalk.bgYellowBright.black.bold(`\nOops ! that's wrong \n`));
  }
  console.log(
    chalk.bgCyanBright.black.bold(`Your current score is ${score} \n`)
  );

  return 0;
}

console.log(
  chalk.bgMagenta.whiteBright.bold(
    "Welcome to the game, WHAT IS THIS USED FOR ! \n"
  )
);

let userName = read.question(
  chalk.bgMagenta.whiteBright.bold("What is your name ? \n\n")
);

console.log(
  chalk.bgMagenta.whiteBright.bold(`\n Okay ${userName}, let's begin \n`)
);

console.log(
  chalk.bgMagenta.whiteBright.bold(
    `Keep answering the following questions to know the primary use cases of major programming languages ! \n`
  )
);

console.log(
  "----------------------------------------------------------------------------"
);

for (let item of questionsList) {
  if (game(item.question, item.options, item.answer) == -1) {
    break;
  }
  let reply = read.question(
    chalk.bgCyanBright.black.bold("Do you want to continue y/n ? \n\n")
  );
  console.log(
    "----------------------------------------------------------------------------"
  );
  if (reply === "n") {
    break;
  }
}

let currentUser = {
  name: userName,
  score: score,
  position: "4",
};

highScore.push(currentUser);

highScore.sort((person1, person2) => {
  return person2.score - person1.score;
});

for (let i = 0; i < highScore.length; i++) {
  if (currentUser.name === highScore[i].name) {
    highScore[i].position = i + 1;
    currentUser.position = i + 1;
  }
}

for (let i = currentUser.position; i < highScore.length; i++) {
  highScore[i].position = i + 1;
}

if (highScore.length > 3) {
  highScore.splice(3, highScore.length - 3);
}

console.log(
  chalk.bgMagenta.whiteBright.bold(
    `\nHurray ${userName} ! you are done with the quiz, here is your final score ${score}/5 \n`
  )
);

console.log(
  chalk.bgMagenta.whiteBright.bold("The top 3 high scoring participants are \n")
);

highScore.forEach((item) => {
  console.log(
    chalk.bgMagenta.whiteBright.bold(
      `${item.name} scored ${item.score} points and is at position ${item.position}`
    )
  );
});
