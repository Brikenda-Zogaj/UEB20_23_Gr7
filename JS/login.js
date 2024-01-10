class FormHandler {
  //construktor per manip me array
    constructor() {
      this.numbers = [1, 2, 3, 4, 5];
      this.initializeEvents();
    }
  // funks per submit te loginform
    initializeEvents() {
      $(document).ready(() => {
        $('#loginForm').submit((event) => {
          event.preventDefault(); 
          this.handleLoginForm();
        });
      });
    }
  
    handleLoginForm() {
      // Get the value of the username input
      let usernameValue = $('input[name="username"]').val();
      console.log('Username:', usernameValue);
  
      // Set a new value to the password input
      $('input[name="password"]').val('newPassword');
  
      // Add a class to the username input
      $('input[name="username"]').addClass('new-class');
  
      // Remove a class from the password input
      $('input[name="password"]').removeClass('form-control');
  
      window.location.href = '../Pages/home.html'; 
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
