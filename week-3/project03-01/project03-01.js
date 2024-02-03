/*    JavaScript 7th Edition
      Chapter 3
      Project 03-01

      Application to calculate total order cost
      Author: Meher Salim
      Date:   01/29/2024

      Filename: project03-01.js
*/

//Declare menuItem
const menuItems = document.getElementsByClassName('menuItem');

//Create 'for' loop
for (let i = 0; i < menuItems.length; i++) {
  //Add event listener for menuItems[i]
  menuItems[i].addEventListener('click', calcTotal);
}

//Create calcTotal function
function calcTotal() {
  //Declare orderTotal 
  let orderTotal = 0;

  //Loop through menuItems
  for (let i =0; i < menuItems.length; i++) {
    //'if' statement for checked items
    if (menuItems[i].checked) {
      //Increase orderTotal based on selected menuItems
      orderTotal += Number(menuItems[i].value);
    }
  }

  //Update innerHTML property with id 'billTotal'
  document.getElementById('billTotal').innerHTML = formatCurrency(orderTotal);
}


// Function to display a numeric value as a text string in the format $##.## 
function formatCurrency(value) {
  return "$" + value.toFixed(2);
}