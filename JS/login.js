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
