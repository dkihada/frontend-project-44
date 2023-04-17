export const getRandomNumber = (minRange, maxRange) => 
    Math.floor(Math.random() * (maxRange - minRange) + minRange);

export const isEvenNumber = (number) => number % 2 === 0;
