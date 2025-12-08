// Password Protection for Wedding Website
// Note: This is a simple client-side protection. For production, use Netlify's password protection feature.

const CORRECT_PASSWORD = '22052026'; // Change this to your desired password

function checkPassword() {
  const password = document.getElementById('password-input').value;
  const errorMsg = document.getElementById('error-message');

  if (password === CORRECT_PASSWORD) {
    // Don't store authentication - require password each time
    showMainContent();
  } else {
    errorMsg.textContent = 'Incorrect password. Please try again.';
    errorMsg.style.display = 'block';
    document.getElementById('password-input').value = '';
  }
}

function showMainContent() {
  document.getElementById('password-screen').style.display = 'none';
  document.getElementById('main-content').style.display = 'block';
}

function showPasswordScreen() {
  document.getElementById('password-screen').style.display = 'flex';
  document.getElementById('main-content').style.display = 'none';
}

// Always show password screen on load
window.addEventListener('DOMContentLoaded', function() {
  showPasswordScreen();
});

// Enter key support for password input
document.addEventListener('DOMContentLoaded', function() {
  const passwordInput = document.getElementById('password-input');
  if (passwordInput) {
    passwordInput.addEventListener('keypress', function(e) {
      if (e.key === 'Enter') {
        checkPassword();
      }
    });
  }
});
