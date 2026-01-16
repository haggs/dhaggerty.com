// Dark Mode functionality
function initDarkMode() {
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

// Mobile Navigation Menu
function initMobileNav() {
  const navMenuToggle = document.getElementById('nav-menu-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navMenuLinks = document.querySelectorAll('.nav-menu-link');
  const main = document.querySelector('.main');
  const footer = document.querySelector('.footer');
  const scrollToTop = document.getElementById('scroll-to-top');
  const MOBILE_BREAKPOINT = 900;

  if (!navMenuToggle || !navMenu || !main || !footer) {
    console.error('Mobile nav elements not found');
    return;
  }

  let isMenuOpen = false;

  function toggleMenu() {
    isMenuOpen = !isMenuOpen;

    if (isMenuOpen) {
      navMenu.style.display = 'flex';
      main.style.display = 'none';
      footer.style.display = 'none';
      if (scrollToTop) scrollToTop.style.display = 'none';
      document.body.style.overflow = 'hidden';
    } else {
      navMenu.style.display = 'none';
      main.style.display = 'block';
      footer.style.display = 'grid';
      document.body.style.overflow = '';
    }
  }

  function closeMenu() {
    if (isMenuOpen) {
      toggleMenu();
    }
  }

  navMenuToggle.addEventListener('click', toggleMenu);

  // Close menu when clicking a link
  navMenuLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      closeMenu();

      // Handle anchor links
      const href = link.getAttribute('href');
      if (href && href.startsWith('#')) {
        e.preventDefault();
        setTimeout(() => {
          const target = document.querySelector(href);
          if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
          }
        }, 10);
      }
    });
  });

  // Close menu on window resize if it gets too wide
  window.addEventListener('resize', () => {
    if (window.innerWidth > MOBILE_BREAKPOINT) {
      closeMenu();
    }
  });
}

// Scroll to Top Button
function initScrollToTop() {
  const scrollToTopButton = document.getElementById('scroll-to-top');
  const SCROLL_THRESHOLD = 200;

  if (!scrollToTopButton) {
    console.error('Scroll to top button not found');
    return;
  }

  function handleScroll() {
    const scrollTop =
      document.body.scrollTop || document.documentElement.scrollTop;

    if (scrollTop > SCROLL_THRESHOLD) {
      scrollToTopButton.style.display = 'flex';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  }

  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  window.addEventListener('scroll', handleScroll);
  scrollToTopButton.addEventListener('click', scrollToTop);

  // Initial check
  handleScroll();
}

// Smooth Scroll for all anchor links
function initSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');

  anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');

      // Don't handle empty hash or just '#'
      if (!href || href === '#') return;

      const target = document.querySelector(href);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth' });

        // Update URL without scrolling
        if (history.pushState) {
          history.pushState(null, null, href);
        }
      }
    });
  });
}

// Set current year in footer
function initFooterYear() {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
}

// Initialize all modules
function init() {
  initDarkMode();
  initMobileNav();
  initScrollToTop();
  initSmoothScroll();
  initFooterYear();
}

// Run initialization when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

export { initDarkMode, initMobileNav, initScrollToTop, initSmoothScroll, initFooterYear };
