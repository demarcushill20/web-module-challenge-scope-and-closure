//❗❗ PLEASE READ THE README file for project instructions, helpful resources, additional tasks and stretch problems, and more ❗❗ 

// ⭐️ Example Challenge START ⭐️

/**Example Task : processFirstItem()
 * This example shows how you might go about solving the rest of the tasks
 * 
 * Use the higher order function processFirstItem below to do the following:
 *  1. Receive an array of strings in a parameter
 *  2. Receive a callback function that takes a string as its argument in a parameter
 *  3. Return the result of invoking the callback function and passing in the FIRST 
 *     element in the array as the argument
 * 
 * The following code is demonstrating a way of completing this task
 * It returns the string `foofoo`
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
console.log('example task:', processFirstItem(['foo','bar'],function(str){return str+str}));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/*Task 1: counterMaker()
  
  Study the code for counter1 and counter2, then answer the questions below.
  
  1. What is the difference between counter1 and counter2? 

  The main difference between counter1 and counter2 is that counter1 uses a closure, while counter2 does not. counter1 returns a function that has access to the count variable, which is defined in the outer function counterMaker, while counter2 simply references a global variable count.
  
  2. Which of the two uses a closure? How can you tell?

  counter1 uses a closure because it returns a function that has access to the count variable, which is defined in the outer function counterMaker. This is evident from the fact that counterMaker returns the counter function, which references count. On the other hand, counter2 does not use a closure because it simply references the global variable count.
  
  3. In what scenario would the counter1 code be preferable? In what scenario would 
     counter2 be better?  

     counter1 code would be preferable in scenarios where you need to maintain state or count something and you want to avoid polluting the global namespace. Since count is defined within the closure of counterMaker, it is not accessible outside of the closure, which helps to prevent naming conflicts and accidental modification of the variable. On the other hand, counter2 code would be preferable in scenarios where you only need to keep track of a single count variable and you don't need to worry about naming conflicts or accidentally modifying the variable.
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* ⚾️⚾️⚾️ Task 2: inning() ⚾️⚾️⚾️
Use the inning function below to do the following:
  1. Return a random whole number of points between 0 and 2 scored by one team in an inning
  
  For example: invoking inning() should return a numerical score value of 0, 1, or 2
  
NOTE: This will be a callback function for the tasks below
*/

function inning() {
  // Generate a random number between 0 and 1, and then round it up to the nearest integer using Math.ceil
  // This gives us a 50-50 chance of getting either 0 or 1
  let randomNum = Math.ceil(Math.random() * 2) - 1;
  
  // If the random number is 0, return 0. Otherwise, return 1
  // This gives us a 50-50 chance of returning either 0 or 1
  return randomNum === 0 ? 0 : 1;
}


/* ⚾️⚾️⚾️ Task 3: finalScore() ⚾️⚾️⚾️
Use the finalScore function below to do the following:
  1. Receive the callback function `inning` that was created in Task 2 in the first parameter
  2. Receive a number of innings to be played in the second parameter
  3. After each inning, update the score of the home and away teams
  4. After the last inning, return an object containing the final (total) score of the innings played
  
  For example: invoking finalScore(inning, 9) might return this object:
{
  "Home": 11,
  "Away": 5
}
*/ 

function finalScore(inning, numInnings) {
  // Initialize variables to keep track of the home and away team scores
  let homeScore = 0;
  let awayScore = 0;
  
  // Loop through each inning
  for (let i = 1; i <= numInnings; i++) {
    // Call the callback function (inning) to get a random score for this inning
    let inningScore = inning();
    
    // Add the inning score to the home or away team's score based on whether the inning is even or odd
    if (i % 2 === 0) {
      awayScore += inningScore;
    } else {
      homeScore += inningScore;
    }
  }
  
  // Return an object containing the final score of the home and away teams
  return {
    Home: homeScore,
    Away: awayScore
  };
}

/*
function finalScore(inning, numInnings) {: This line declares the finalScore function with two parameters: a callback function inning and a number of innings numInnings.
let homeScore = 0;: This line initializes a variable homeScore to 0 to keep track of the home team's score.
let awayScore = 0;: This line initializes a variable awayScore to 0 to keep track of the away team's score.
for (let i = 1; i <= numInnings; i++) {: This line starts a loop that iterates from 1 to the number of innings specified by numInnings.
let inningScore = inning();: This line calls the callback function inning to get a random score for the current inning and assigns the result to the variable inningScore.
if (i % 2 === 0) { awayScore += inningScore; } else { homeScore += inningScore; }: This line adds the inningScore to either the homeScore or awayScore variable based on whether the inning number is even or odd. If the inning number is even, the score is added to awayScore; otherwise, the score is added to homeScore.
}: This line marks the end of the for loop.
return { Home: homeScore, Away: awayScore };: This line returns an object containing the final score of the home and away teams, with Home and Away properties corresponding to the homeScore and awayScore variables.
*/

/* ⚾️⚾️⚾️ Task 4: getInningScore() ⚾️⚾️⚾️
Use the getInningScore() function below to do the following:
  1. Receive a callback function in a parameter - you will pass in the inning function from task 2 as your argument 
  2. Return an object with a score for home and a score for away that populates from invoking the inning callback function 
  
For example: invoking getInningScore(inning) might return this object:
{
  "Home": 0,
  "Away": 2
}
  */


function getInningScore(inning) {
  // Invoke the callback function (inning) to get a random score for the inning
  let homeScore = inning();
  
  // Invoke the callback function (inning) again to get another random score for the inning
  let awayScore = inning();

  // Return an object containing the home and away scores
  return {
    Home: homeScore,
    Away: awayScore
  };
}


/* STRETCH: ⚾️⚾️⚾️ Task 5: scoreboard() ⚾️⚾️⚾️
Use the scoreboard function below to do the following:
  1. Receive the callback function in the first parameter that will take `getInningScore` from Task 4 as its argument
  2. Receive the callback function in a second parameter that will take `inning` from Task 2 as its argument
  3. Receive a number in a third parameter that will take the number of innings to be played as its argument
  4. Return an array where each of it's index values equals a string stating the
  Home and Away team's scores for each inning.  Not the cummulative score (see the example below).
  5. If there's a tie at the end of the innings, add this message containing the score to the end of the array:  "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there isn't a tie, add this message to the end of the array: "Final Score: Away 13 - Home 11"  (see no tie example below)
  
  NO TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 1",
  "Inning 3: Away 0 - Home 2", 
  "Inning 4: Away 2 - Home 2", 
  "Inning 5: Away 2 - Home 0", 
  "Inning 6: Away 1 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 2",
  "Inning 9: Away 1 - Home 0", 
  "Final Score: Away 11 - Home 12"  
]

  TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 1", 
  "Inning 2: Away 2 - Home 2",
  "Inning 3: Away 1 - Home 0", 
  "Inning 4: Away 1 - Home 2", 
  "Inning 5: Away 0 - Home 0", 
  "Inning 6: Away 2 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 1",
  "Inning 9: Away 1 - Home 1", 
  "This game will require extra innings: Away 10 - Home 10"
] */
// NOTE: There is no test associated with this code; if your output matches the given example, consider it complete!
function scoreboard(/* CODE HERE */) {
  /* CODE HERE */
}




/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working');
  return 'bar';
}
foo();
module.exports = {
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}
