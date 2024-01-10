document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');

  signupForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Get values from form inputs
      const fullName = document.getElementById('fullName').value.trim();
      const email = document.getElementById('email').value.trim();
      const password = document.getElementById('password').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      // validation
      if (!fullName || !email || !password || !confirmPassword) {
          alert('Please fill in all fields.');
          return;
      }

      if (password !== confirmPassword) {
          alert('Passwords do not match.');
          return;
      }

    
      console.log('Form Submitted', { fullName, email, password }); 

  });
});