window.onload = window.onload = function() {
  setTimeout(function() {
      alert("Welcome to Metropol RealEstate! We're here to help you find your dream home. If you have any questions or need assistance, please don't hesitate to reach out through this contact form. Our team is eager to assist you!");
  }, 2000); 
};

//Get Data
const nameInput=document.querySelector("#name");
const email=document.querySelector("#email");
const nmessage=document.querySelector("#message");
const success=document.querySelector("#success");
const errorNodes=document.querySelectorAll(".error");

document.getElementById('formId').addEventListener('submit', validateForm);
// Validate data
function validateForm(event) {
    try {
      clearMessage();
      event.preventDefault();
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
          window.location.href = '../Pages/response.html';
        
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

    
        const day = now.getDate();
        const month = now.getMonth() + 1;
        const year = now.getFullYear();
    
        const data= `${year}-${month < 10 ? '0' + month : month}-${day < 10 ? '0' + day : day}`;
  var h=now.getHours();
  var m=now.getMinutes();
  alert("Current date: "+data+" Current time: "+h+":"+m);
 }

 //Sticky Navbar
 window.onscroll = function() { scrollFunction() };
 function scrollFunction() {
   var navbar = document.getElementById("navbar");
   var sticky = navbar.offsetTop;
   if (window.pageYOffset > sticky) {
     navbar.classList.add("sticky");
   } else {
     navbar.classList.remove("sticky");
   }
 }
//faq js
function toggleAnswer(id) {
  var answer = document.getElementById(id);
  if (answer.style.display === 'none') {
      answer.style.display = 'block';
  } else {
      answer.style.display = 'none';
  }
}