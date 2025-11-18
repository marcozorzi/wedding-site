// Language Toggle Functionality
let currentLanguage = 'en';

function switchLanguage(lang) {
  currentLanguage = lang;

  // Update all elements with data-en and data-it attributes
  const elements = document.querySelectorAll('[data-en][data-it]');

  elements.forEach(element => {
    const text = element.getAttribute(`data-${lang}`);
    if (text) {
      // For elements with HTML content (like br tags), use innerHTML
      if (text.includes('<br>')) {
        element.innerHTML = text;
      } else {
        element.textContent = text;
      }
    }
  });

  // Update active button states on password screen
  const langBtns = document.querySelectorAll('.lang-btn');
  langBtns.forEach(btn => btn.classList.remove('active'));
  const activeLangBtn = document.getElementById(`lang-${lang}`);
  if (activeLangBtn) {
    activeLangBtn.classList.add('active');
  }

  // Update active button states in navigation
  const langBtnsNav = document.querySelectorAll('.lang-btn-nav');
  langBtnsNav.forEach(btn => btn.classList.remove('active'));
  const activeLangBtnNav = document.getElementById(`lang-${lang}-nav`);
  if (activeLangBtnNav) {
    activeLangBtnNav.classList.add('active');
  }

  // Update password screen text
  const passwordMessage = document.querySelector('.password-message');
  if (passwordMessage && !passwordMessage.hasAttribute('data-en')) {
    if (lang === 'it') {
      passwordMessage.textContent = 'Inserisci la password per visualizzare questo sito';
    } else {
      passwordMessage.textContent = 'Please enter the password to view this website';
    }
  }

  const passwordInput = document.getElementById('password-input');
  if (passwordInput) {
    passwordInput.placeholder = lang === 'it' ? 'Inserisci password' : 'Enter password';
  }

  const passwordButton = document.querySelector('.password-button');
  if (passwordButton) {
    passwordButton.textContent = lang === 'it' ? 'Entra' : 'Enter';
  }

  // Store language preference
  localStorage.setItem('preferredLanguage', lang);
}

// Initialize language on page load
window.addEventListener('DOMContentLoaded', function() {
  // Check for stored language preference
  const savedLang = localStorage.getItem('preferredLanguage') || 'en';

  // Set initial active state for buttons
  setTimeout(() => {
    const langEnNav = document.getElementById('lang-en-nav');
    const langItNav = document.getElementById('lang-it-nav');

    if (savedLang === 'en') {
      if (langEnNav) langEnNav.classList.add('active');
    } else {
      if (langItNav) langItNav.classList.add('active');
      switchLanguage('it');
    }
  }, 100);
});
