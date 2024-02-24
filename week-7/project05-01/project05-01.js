"use strict";
/*    JavaScript 7th Edition
      Chapter 5
      Project 05-01

      Project to present an online quiz with a countdown clock
      Author: Meher Salim
      Date:   02/23/2024

      Filename: project05-01.js
*/

// Constants to set the time given for the quiz in seconds
// and the correct answers to each quiz question
const quizTime = 20;
const correctAnswers = ["10", "4", "-6", "5", "-7"];

// Elements in the quiz page
let startQuiz = document.getElementById("startquiz");
let quizClock = document.getElementById("quizclock");
let overlay = document.getElementById("overlay");

// Initialize the quiz time
quizClock.value = quizTime;
let timeLeft = quizTime;

// Declare the ID for timed commands
let timeID;
// and the node list for questions
const questionList = document.querySelectorAll("div#quiz input")

//add 'onclick. event handler to startQuiz object
startQuiz.onclick = function() {
  //anonymous function for quiz overlay
  overlay.className = "showquiz";
  //start countdown and store interval
  timeID = setInterval(countdown, 1000);
}

//create coundown function
function countdown() {
  if (timeLeft === 0) {
    //if time is up
    clearInterval(timeID);
    //check answers and get total of correct
    const totalCorrect = checkAnswers();

    if (totalCorrect === correctAnswers.length) {
      //if all are correct display message
      alert("Congratulations! You got a 100!");
    } else {
      //if any incorrect display message with the amount of incorrect
      let incorrectAnswers = questionList.length - totalCorrect;
      alert(
         `You have ${incorrectAnswers} incorrect answers out of ${questionList.length} questions.`
         );
      timeLeft = quizTime;
      quizClock.value = timeLeft;
      overlay.className = "hidequiz";
    }
  } else {
   //if time not up, decrease timeLeft and update clock
   //declare timeLeft
   timeLeft--;
   //set quickClock
   quizClock.value = timeLeft;
 }
}



/*------------- Function to check the student answers ----------------*/
function checkAnswers() {
   let correctCount = 0;
   
   for (let i = 0; i < questionList.length; i++) {
      if (questionList[i].value === correctAnswers[i]) {
         correctCount++;
         questionList[i].className = "";
      } else {
         questionList[i].className = "wronganswer";
      }      
   }
   return correctCount;
}

