"use strict";
/*    JavaScript 7th Edition
      Chapter 6
      Project 06-03

      Script to complete a form containing billing and shipping address information
      Author: Meher Salim
      Date:   03/01/2024

      Filename: project06-03.js
*/

//declare useShip
const useShip = document.getElementById("useShip");

//add event listener to useShip
useShip.addEventListener("click", copyShippingToBilling);

//create copyShippingToBilling() function
function copyShippingToBilling() {
  //check if useShip is checked
  if (useShip.checked) {
    //copy values for corresponding fields
    document.getElementById("firstnameBill").value = document.getElementById("firstnameShip").value;
    document.getElementById("lastnameBill").value = document.getElementById("lastnameShip").value;
    document.getElementById("address1Bill").value = document.getElementById("address1Ship").value;
    document.getElementById("address2Bill").value = document.getElementById("address2Ship").value;
    document.getElementById("cityBill").value = document.getElementById("cityShip").value;
    document.getElementById("countryBill").value = document.getElementById("countryShip").value;
    document.getElementById("codeBill").value = document.getElementById("codeShip").value;

    //set selectIndex
    document.getElementById("stateBill").selectedIndex = document.getElementById("stateShip").selectedIndex;
  }
}

//declare formElements
const formElements = document.querySelectorAll("input[type='text']");

//declare fieldCount
const fieldCount = formElements.length;

//declare errorBox
const errorBox = document.getElementById("errorBox");

//create for loop to iterate each element in formElements
for (let i = 0; i < fieldCount; i++) {
  //apply event listener for each element
  formElements[i].addEventListener("invalid", showValidationError);
}

//create showValidationError(evt) function
function showValidationError(evt) {
  //apply preventDefault()
  evt.preventDefault();

  //set textContent for errorBox
  errorBox.textContent = "Complete all highlighted fields";
}