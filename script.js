// Wedding Date - May 22, 2026
const weddingDate = new Date('May 22, 2026 16:00:00').getTime();

// Countdown Timer
function updateCountdown() {
  const now = new Date().getTime();
  const distance = weddingDate - now;

  // Calculate time units
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById('days').textContent = String(days).padStart(2, '0');
  document.getElementById('hours').textContent = String(hours).padStart(2, '0');
  document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
  document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');

  // If countdown is finished
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.querySelector('.countdown').innerHTML = '<p style="font-size: 2rem; font-family: var(--font-serif);">We\'re Married!</p>';
  }
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      const navHeight = document.querySelector('.navbar').offsetHeight;
      const targetPosition = target.offsetTop - navHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

// Navbar background on scroll
window.addEventListener('scroll', function() {
  const navbar = document.querySelector('.navbar');
  if (window.scrollY > 100) {
    navbar.style.background = 'rgba(255, 255, 255, 1)';
    navbar.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.1)';
  } else {
    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
  }
});

// Copy IBAN function
function copyIBAN() {
  const ibanCode = document.querySelector('.iban-code').textContent;
  const button = document.querySelector('.copy-iban-btn');
  const currentLang = localStorage.getItem('preferredLanguage') || 'it';

  // Copy to clipboard
  navigator.clipboard.writeText(ibanCode).then(function() {
    // Change button text to show success
    const originalText = button.textContent;
    button.textContent = currentLang === 'it' ? 'Copiato!' : 'Copied!';
    button.style.background = '#4CAF50';

    // Reset button after 2 seconds
    setTimeout(function() {
      button.textContent = originalText;
      button.style.background = '';
    }, 2000);
  }).catch(function(err) {
    console.error('Failed to copy IBAN: ', err);
    alert(currentLang === 'it' ? 'Impossibile copiare l\'IBAN' : 'Failed to copy IBAN');
  });
}
