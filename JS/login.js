//show and hide

function toggleVisibility() {
  var element = document.getElementById("elementToToggle");
  
  if (element.style.display === "none") {
    element.style.display = "block"; 
  } else {
    element.style.display = "none"; 
  }
}