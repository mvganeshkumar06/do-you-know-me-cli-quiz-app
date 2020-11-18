const read = require("readline-sync");
const chalk = require("chalk");

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
    score: 3,
    position: "1",
  },
  {
    name: "Ram",
    score: 2,
    position: "2",
  },
  {
    name: "Mohan",
    score: 1,
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
  chalk.bgMagenta.whiteBright.bold(`\n Okay ${userName}, before we begin \n`)
);

console.log(
  chalk.bgCyanBright.black.bold(
    "Here is the current leaderboard with top 3 high scoring participants, let's see if you can get a new high score ! \n"
  )
);

highScore.forEach((item) => {
  console.log(
    chalk.bgCyanBright.black.bold(
      `${item.name} scored ${item.score} points and is at position ${item.position} \n`
    )
  );
});

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

let currentHighScore = 0;

highScore.forEach((item) => {
  if (item.score > currentHighScore) {
    currentHighScore = item.score;
  }
});

console.log(
  chalk.bgMagenta.whiteBright.bold(
    `\nHurray ${userName} ! you are done with the quiz, here is your final score ${score}/5 \n`
  )
);

if (score > currentHighScore) {
  console.log(
    chalk.bgMagenta.whiteBright.bold(
      `\nCongrats ${userName} ! you have obtained a new high score ${score}/5 . Send me a screenshot to confirm your high score. \n`
    )
  );
}
