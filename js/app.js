'use strict';

//linter test working

// var banana = 42

// get user name and offer greeting

var userName = prompt('Hello, what \'s your name?');
alert('Hello, ' + userName + '.');
// console.log('Hello, ' + userName + '.');

//write 5 questions. they must accept yes or no or y or n in any case
//examples: YES, yes, YEs

var askOne = prompt('Did I lived in New Jersey?').toLowerCase();

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

var askTwo = prompt('Did I travel to France?').toLowerCase();

if (askTwo === 'no' || askTwo === 'n') {
  alert('Correct ' + userName + '.');
  // console.log('Correct ' + userName + '.');
} else if (askTwo === 'yes' || askTwo === 'y') {
  alert('Wrong, but maybe in the future, ' + userName + '.');
  // console.log('Wrong, but maybe in the future, ' + userName + '.');
}

var askThree = prompt('Do I like food from St.Louis?').toLowerCase();

if (askThree === 'no' || askThree === 'n') {
  alert('Correct, ' + userName + '.');
  // console.log('Correct ' + userName + '.');
} else if (askThree === 'yes' || askThree === 'y') {
  alert('Nope, I never been there before, ' + userName + '.');
  // console.log('Nope, I never been there before, ' + userName + '.');
}

var askFour = prompt('Do I currently work for Lowes').toLowerCase();

if (askFour === 'no' || askFour === 'n') {
  alert('Correct, ' + userName + '.');
  // console.log('Correct ' + userName + '.');
} else if (askFour === 'yes' || askFour === 'y') {
  alert('Sorry, I work for Home Depot, ' + userName + '.');
  // console.log('Sorry, I work for Home Depot, ' + userName + '.');
}

var askFive = prompt('Did I learn to code from Code Fellows in Seatle?').toLowerCase();

if (askFive === 'yes' || askFive === 'y') {
  alert('You are right, ' + userName + '.');
  // console.log('You are right, ' + userName + '.');
} else if (askFive === 'no' || askFive === 'n') {
  alert('Wrong, ' + userName + '.');
  // console.log('Wrong, ' + userName + '.');
}

alert('Thank you, ' + userName + ' for visting my website.');
// console.log('Thank you, ' + userName + ' for visting my website.');

// var questionOne = prompt('Do I live in Seattle').toLowerCase();


// if(questionOne === 'yes'|| questionOne ==='y'){
// console.log('you are correct')
// alert('you are correct');
// you can do a else if or eles statements
// }
