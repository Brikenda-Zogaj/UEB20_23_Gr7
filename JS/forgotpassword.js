document.addEventListener('DOMContentLoaded', () => {
  const forgotPasswordForm = document.getElementById('forgotPasswordForm');

  forgotPasswordForm.addEventListener('submit', function (event) {
      event.preventDefault();

      // Get email value form
      const email = document.getElementById('email').value.trim();

      // Basic email validation
      if (!validateEmail(email)) {
          alert('Please enter a valid email address.');
          return;
      }

      console.log('Password reset request for:', email);

      // Display a message
      alert('A password reset link has been sent to your email address.');

      
  });
});

// email validation function
function validateEmail(email) {
  const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
  return re.test(String(email).toLowerCase());
}