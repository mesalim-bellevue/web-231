/*    JavaScript 7th Edition
      Chapter 2
      Project 02-02

      Application to test for completed form
      Author: Meher Salim
      Date:   01/18/2024

      Filename: project02-02.js
 */
 
//fuction to verify form
function verifyForm() {
      //declare the name variable and get input value
      var name = document.getElementById("name").value;
      //declare the email variable and get input value
      var email = document.getElementById("email").value;
      //declare the phone variable and get input value
      var phone = document.getElementById("phone").value;

      //insert conditional operator
      if (name && email && phone) {
            //message for correct info
            window.alert("Thank You!");
      } else {
            //message for incorrect info
            window.alert("Please fill in all fields");
      }
}

//attach event listener for submit button
document.getElementById("submit").addEventListener("click", verifyForm);