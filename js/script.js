/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
var quotes = [
  ["You can’t separate peace from freedom because no one can be at peace unless he has his freedom.", MalcomeX],
  ["Whatever the mind of man can conceive and believe, it can achieve"., Napoleon Hill],
  ["Strive not to be a success, but rather to be of value.", Albert Einstein],
  [" I attribute my success to this: I never gave or took any excuse." Florence Nightingale],
  ["You miss 100% of the shots you don’t take." Wayne Gretzky],
];
console.log (quotes);


/***
 * `getRandomQuote` function
***/
function getRanndomQuote (arr){
  let items = ''
  for (let i = 0, i < arr.lenght, i++) {
    items += `<li>${arr[i][0]}</li>;
  }
  console.log(arr)
};
 document.queryselector('main').innerHTML=`
 
/***
 * `printQuote` function
***/



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);