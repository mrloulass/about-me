'use strict';

//linter test working

// var banana = 42

// get user name and offer greeting

var userName = prompt('Hello, what\'s your name?');
alert('Hello, ' + userName + '.');
// console.log('Hello, ' + userName + '.');

//write 5 questions. they must accept yes or no or y or n in any case
//examples: YES, yes, YEs
function askOne(userName) {
  let askOne = prompt('Did I lived in New Jersey?').toLowerCase();
  if (askOne === 'yes' || askOne === 'y') {
    alert('You are right, ' + userName + '.');
    // console.log('You are right, ' + userName + '.');
  } else if (askOne === 'no' || askOne === 'n') {
    alert('Wrong, ' + userName + '.');
    // console.log('Wrong, ' + userName + '.');
  } else {
    askOne = alert(userName + ' ,don\'t you hear my Jersey accent?');
    // console.log(userName + ' ,don\'t you hear my Jersey accent?');
  }
}
askOne(userName);

function askTwo(userName) {
  let askTwo = prompt('Did I travel to France?').toLowerCase();

  if (askTwo === 'no' || askTwo === 'n') {
    alert('Correct ' + userName + '.');
    // console.log('Correct ' + userName + '.');
  } else if (askTwo === 'yes' || askTwo === 'y') {
    alert('Wrong, but maybe in the future, ' + userName + '.');
    // console.log('Wrong, but maybe in the future, ' + userName + '.');
  }
}
askTwo(userName);

function askThree(userName) {
  let askThree = prompt('Do I like food from St.Louis?').toLowerCase();

  if (askThree === 'no' || askThree === 'n') {
    alert('Correct, ' + userName + '.');
    // console.log('Correct ' + userName + '.');
  } else if (askThree === 'yes' || askThree === 'y') {
    alert('Nope, I never been there before, ' + userName + '.');
    // console.log('Nope, I never been there before, ' + userName + '.');
  }
}
askThree(userName);

function askFour(userName) {
  let askFour = prompt('Do I currently work for Lowes?').toLowerCase();

  if (askFour === 'no' || askFour === 'n') {
    alert('Correct, ' + userName + '.');
    // console.log('Correct ' + userName + '.');
  } else if (askFour === 'yes' || askFour === 'y') {
    alert('Sorry, I work for Home Depot, ' + userName + '.');
    // console.log('Sorry, I work for Home Depot, ' + userName + '.');
  }
}
askFour(userName);

function askFive(userName) {
  let askFive = prompt('Did I learn to code from Code Fellows in Seatle?').toLowerCase();

  if (askFive === 'yes' || askFive === 'y') {
    alert('You are right, ' + userName + '.');
    // console.log('You are right, ' + userName + '.');
  } else if (askFive === 'no' || askFive === 'n') {
    alert('Wrong, ' + userName + '.');
    // console.log('Wrong, ' + userName + '.');
  }
}
askFive(userName);

alert('Thank you, ' + userName + ' for visting my website.');
  // console.log('Thank you, ' + userName + ' for visting my website.');


// var askSix = +prompt(userName + ', how many trips am I planning next year?');

// // I'm taking 8 trips next year

// var tryFour = 4;

// var trips = 8;

// for (var i = 0; i < tryFour; i++) {
//   if (askSix === trips) {
//     alert('You are correct');
//     score++;
//   } else if (askSix > trips) {
//     alert('Too High');
//   } else if (askSix < trips) {
//     alert('Too Low');
//   }

// var favoriteColor = ['red','blue', 'green', 'yellow','orange','pink','purple'];

// var guessSix = 6;

// var askSeven = prompt('What is my favorite color').toLowerCase();

// while(){

// };