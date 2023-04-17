export function getRandomNumber(minRange, maxRange) {
  return Math.floor(Math.random() * (maxRange - minRange) + minRange);
}

export const isEvenNumber = (number) => number % 2 === 0;
