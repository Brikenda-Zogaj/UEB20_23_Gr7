//Get Data
const nameInput=document.querySelector("#name");
const email=document.querySelector("#email");
const nmessage=document.querySelector("#message");
const success=document.querySelector("#success");
const errorNodes=document.querySelectorAll(".error");

// Validate data
function validateForm() {
    try {
      clearMessage();
  
      let errorFlag = false;
  
      if (nameInput.value.toString().trim().length === 0) {
        errorNodes[0].innerText = "Name cannot be blank";
        nameInput.classList.add("error-border");
        errorFlag = true;
      } else if (!isNaN(parseFloat(nameInput.value)) && isFinite(nameInput.value)) {
        errorNodes[0].innerText = "Please enter a valid name (should not be a number)";
        nameInput.classList.add("error-border");
        errorFlag = true;
      }
  
      if (!emailIsValid(email.value.toString().trim())) {
        errorNodes[1].innerText = "Invalid email address";
        email.classList.add("error-border");
        errorFlag = true;
      }
      if (message.value.toString().trim().length === 0) {
        errorNodes[2].innerText = "Please enter message";
        message.classList.add("error-border");
        errorFlag = true;
      }
      if (message.value.toString().trim().length > 1000) {
        errorNodes[2].innerText = "Message should not exceed 1000 characters";
        message.classList.add("error-border");
        errorFlag = true;
      }
      if (!errorFlag) {
        // Show an alert before submitting the form
        if (confirm("Are you sure you want to submit this form?")) {  //warning
          success.innerText = "Message sent successfully!";
          // Perform form submission here
          document.getElementById('formId').submit();
        } else {
          success.innerText = "Form submission cancelled!";
        }
      }
    } catch (error) {
      throw new Error("Error in form validation: " + error.message);
    }
  }

function clearMessage(){
 for(let i=0;i<errorNodes.length;i++){
    errorNodes[i].innerText="";
 }   
 success.innerText="";
 nameInput.classList.remove("error-border");
 email.classList.remove("error-border");
 message.classList.remove("error-border");
}
function emailIsValid(email){
    let pattern=/\S+@\S+\.\S+/;
    return pattern.test(email);
}



function tellTime(){
  var now=new Date();
  var h=now.getHours();
  var m=now.getMinutes();
  alert("Current time: "+h+":"+m);
 }
