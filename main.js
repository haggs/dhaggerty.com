// Dark Mode functionality
function setInitialDarkMode() {
  const DARK_MODE_KEY = 'darkMode';
  const darkModeToggle = document.getElementById('dark-mode-toggle');

  if (!darkModeToggle) {
    console.error('Dark mode toggle button not found');
    return;
  }

  const sunIcon = darkModeToggle.querySelector('.sun-icon');
  const moonIcon = darkModeToggle.querySelector('.moon-icon');

  if (!sunIcon || !moonIcon) {
    console.error('Sun or moon icon not found');
    return;
  }

  // Check for saved dark mode preference or default to light mode
  function getDarkModePreference() {
    const saved = localStorage.getItem(DARK_MODE_KEY);
    if (saved !== null) {
      return saved === 'true';
    }
    // Check system preference
    return (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    );
  }

  function setDarkMode(isDark) {
    if (isDark) {
      document.documentElement.classList.add('dark');
      sunIcon.style.display = 'none';
      moonIcon.style.display = 'block';
    } else {
      document.documentElement.classList.remove('dark');
      sunIcon.style.display = 'block';
      moonIcon.style.display = 'none';
    }
    localStorage.setItem(DARK_MODE_KEY, isDark);
  }

  // Initialize dark mode on page load
  setDarkMode(getDarkModePreference());

  // Toggle dark mode on button click
  darkModeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.classList.contains('dark');
    setDarkMode(!isDark);
  });
}

// Lake St. Clair link randomizer
function randomizeLakeStClairLink() {
  const lakeLinks = [
    'https://www.instagram.com/p/DFonPaeOzy2',
    'https://www.instagram.com/p/DDccirSPoVR',
    'https://www.instagram.com/p/DB7jx03txeX',
    'https://www.instagram.com/p/CsiqGofuAF6',
    'https://www.instagram.com/p/Cri8oBwAQzP',
    'https://www.instagram.com/p/CodAwRaJ4pW',
    'https://www.instagram.com/p/CoP02s3uBz0',
    'https://www.instagram.com/p/CjN76jmg2Um',
    'https://www.instagram.com/p/CayQ6jYti9u',
    'https://www.instagram.com/p/CadWIjEJMzr',
    'https://www.instagram.com/p/CZcvOT2JMGY',
    'https://www.instagram.com/p/CYeB8CXrEQ7',
    'https://www.instagram.com/p/CQtNXDWn1jf',
    'https://www.instagram.com/p/COEM2YsHTFD',
    'https://www.instagram.com/p/CL7NT24nm_M',
    'https://www.instagram.com/p/CK4UBnpnIeE',
    'https://www.instagram.com/p/CJrHgmdHGWz',
    'https://www.instagram.com/p/CKRfznRHDO9',
  ];

  const lakeLink = document.getElementById('lake-link');
  if (lakeLink && lakeLinks.length > 0) {
    const randomLink = lakeLinks[Math.floor(Math.random() * lakeLinks.length)];
    lakeLink.href = randomLink;
  }
}

// Set current year in footer
function setFooterYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Initialize all modules
function init() {
  setInitialDarkMode();
  randomizeLakeStClairLink();
  setFooterYear();
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

export { setInitialDarkMode, randomizeLakeStClairLink, setFooterYear };
