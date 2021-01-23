'use strict';

let correctCount = 0;

let userName = prompt('Hello, what\'s your name?');

alert(`Hello, ${userName}.`);

function askOne() {
  let askOne = prompt('Did I lived in New Jersey?').toLowerCase();
  if (askOne === 'yes' || askOne === 'y') {
    alert(`You are right, ${userName}.`);
    correctCount++;
  } else if (askOne === 'no' || askOne === 'n') {
    alert(`Wrong, ${userName}.`);
  } else {
    askOne = alert(`${userName}, don't you hear my Jersey accent?`);
  }
}
askOne();

function askTwo() {
  let askTwo = prompt('Did I travel to France?').toLowerCase();

  if (askTwo === 'no' || askTwo === 'n') {
    alert(`Correct ${userName}.`);
    correctCount++;
  } else if (askTwo === 'yes' || askTwo === 'y') {
    alert(`Wrong, but maybe in the future, ${userName}.`);
  }
}
askTwo();

function askThree() {
  let askThree = prompt('Do I like food from St.Louis?').toLowerCase();

  if (askThree === 'no' || askThree === 'n') {
    alert(`Correct,${userName}.`);
    correctCount++;
  } else if (askThree === 'yes' || askThree === 'y') {
    alert(`Nope, I never been there before, ${userName}.`);
  }
}
askThree();

function askFour() {
  let askFour = prompt('Do I currently work for Lowes?').toLowerCase();

  if (askFour === 'no' || askFour === 'n') {
    alert(`Correct, ${userName}.`);
    correctCount++;
  } else if (askFour === 'yes' || askFour === 'y') {
    alert(`Sorry, I work for Home Depot, ${userName}.`);
  }
}
askFour();

function askFive() {
  let askFive = prompt('Did I learn to code from Code Fellows in Seatle?').toLowerCase();

  if (askFive === 'yes' || askFive === 'y') {
    alert(`You are right, ${userName}.`);
    correctCount++;
  } else if (askFive === 'no' || askFive === 'n') {
    alert(`Wrong, ${userName}.`);
  }
}
askFive();

function askSix() {
  let askSix = +prompt(`${userName}, how many trips am I planning next year?`);

  let tryFour = 4;

  let trips = 8;

  for (let i = 0; i < tryFour; i++) {
    if (askSix === trips) {
      alert('You are correct, plan a trip with me.');
      correctCount++;
      break;
    } else if (askSix > trips) {
      alert('Too High');
      break;
    } else if (askSix < trips) {
      alert('Too Low');
      break;
    }
  }
}
askSix();

function askSeven() {
  let favoriteColors = ['red', 'blue', 'black', 'yellow', 'green', 'pink', 'purple'];
  let guessSix = 6;
  let guessCount = 0;
  let correctColors = false;
  let askSeven = prompt('What is my favorite colors to wear?').toLowerCase();
  while (guessCount < guessSix) {
    guessCount++;
  } for (let i = 0; i < favoriteColors.length; i++) {
    if (askSeven === favoriteColors[i]) {
      alert(`Correct ${userName}, you see how good I look in that color.`);
      correctCount++;
      break;
    } else if (askSeven !== favoriteColors.length) {
      alert(`Sorry ${userName}, I don't look good in that color. `);
      break;
    } else (!correctColors);
    alert(`${favoriteColors} are my favorite colors to wear.`);
    break;
  }
}
askSeven();

alert(`Thank you, ${userName} for visting my website.You score ${correctCount} correctly.`);

