class FormHandler {
  constructor() {
      this.numbers = [1, 2, 3, 4, 5];
      this.initializeEvents();
  }

  initializeEvents() {
      $(document).ready(() => {
          $('#loginForm').submit((event) => {
              event.preventDefault(); 
              this.handleLoginForm();
          });
      });
  }

  handleLoginForm() {
    // Get the value of the username and password inputs
    let emailValue = $('input[name="username"]').val();
    let passwordValue = $('input[name="password"]').val();

    // Validate email
    if (!this.validateEmail(emailValue)) {
        alert("Please enter a valid email address.");
        return; // Stop the function if the email is not valid
    }

    // Validate password
    if (!this.validatePassword(passwordValue)) {
        alert("Password must be at least 8 characters long and start with an uppercase letter.");
        return; // Stop the function if the password is not valid
    }

    console.log('Email:', emailValue);
    console.log('Password:', passwordValue);


    window.location.href = '../Pages/home.html'; 
}

validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return re.test(String(email).toLowerCase());
}

validatePassword(password) {
    return password.length >= 8 && password.charAt(0) === password.charAt(0).toUpperCase();
}
  


    manipulateNumbers() {
      //perdorimi i map per 2fishin e nr ne array
      let doubledNumbers = this.numbers.map((number) => {
        return number * 2;
      });
      console.log('Doubled Numbers:', doubledNumbers);
  
      // Perdorimi i reduce() per shum
      let sum = this.numbers.reduce((accumulator, currentValue) => {
        return accumulator + currentValue;
      }, 0);
      console.log('Sum:', sum);
  
      //perdorimi i filter() per nr tek
      let oddNumbers = this.numbers.filter((number) => {
        return number % 2 !== 0;
      });
      console.log('Odd Numbers:', oddNumbers);
    }
  
    toExponentialNumbers() {
      //perdorimi i map()
      let exponentialNumbers = this.numbers.map((number) => {
        return number.toExponential();
      });
      console.log('Exponential Numbers:', exponentialNumbers);
      return exponentialNumbers;
    }
  }
  
  // instanc e klases formHandler
  const formHandler = new FormHandler();
  
 //thirrja e funks manipulateNumbers()
  formHandler.manipulateNumbers();
  
  //thirrja e funks toExponentialNumbers()
  formHandler.toExponentialNumbers();
  




  //drag and drop

  function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
  }

  
//show and hide

function toggleVisibility() {
  var element = document.getElementById("elementToToggle");
  
  if (element.style.display === "none") {
    element.style.display = "block"; 
  } else {
    element.style.display = "none"; 
  }
}


//validimi i checkbox
function validateForm() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var checked = false;

  checkboxes.forEach(function(checkbox) {
    if (checkbox.checked) {
      checked = true;
    }
  });

  if (!checked) {
    alert("Please select at least one option.");
    return false; 
  }

  return true; 
}

//validimi i radiobutonave

function validateForm() {
  var radios = document.getElementsByName('options');
  var checked = false;

  for (var i = 0; i < radios.length; i++) {
    if (radios[i].checked) {
      checked = true;
      break;
    }
  }

  if (!checked) {
    alert("Please select an option.");
    return false; 
  }

  return true; 
}
