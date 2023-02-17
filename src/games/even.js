import readlineSync from 'readline-sync';

const incorrectAnswer = (name) => `'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, ${name}!`;

const isEven = (number) => (number % 2 === 0);

export default () => {
  console.log('Welcome to the Brain Games!');

  const playerName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${playerName}!`);

  const count = 3;
  console.log('Answer "yes" if the randomNumber is even, otherwise answer "no".');
  let index = 0;

  while (index < count) {
    const randomNumber = Math.floor(Math.random(10) * 10);
    console.log(`Question: ${randomNumber}`);
    const answer = readlineSync.question('Your answer: ');

    if (answer.toLowerCase() === 'yes') {
      if (isEven(randomNumber)) {
        console.log('Correct!');
        index += 1;
      } else {
        console.log(incorrectAnswer(playerName));
        index = 0;
      }
    } else if (answer.toLowerCase() === 'no') {
      if (!isEven(randomNumber)) {
        console.log('Correct!');
        index += 1;
      } else {
        console.log(incorrectAnswer(playerName));
        index = 0;
      }
    }
  }

  console.log(`Congratulations, ${playerName}!`);
};
