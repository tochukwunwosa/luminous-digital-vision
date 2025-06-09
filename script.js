// Mobile menu functionality
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const openMenuBtn = document.querySelector('#open-menu');
    const closeMenuBtn = document.querySelector('#close-menu');
    const body = document.body;

    function toggleMenu() {
        const isMenuOpen = mobileMenu.style.display === 'flex';
        
        // Toggle menu visibility
        mobileMenu.style.display = isMenuOpen ? 'none' : 'flex';
        
        // Toggle hamburger icons
        openMenuBtn.style.display = isMenuOpen ? 'block' : 'none';
        closeMenuBtn.style.display = isMenuOpen ? 'none' : 'block';
        
        // Prevent body scroll when menu is open
        body.style.overflow = isMenuOpen ? 'auto' : 'hidden';
    }

    // Toggle menu when hamburger is clicked
    hamburger.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    const mobileMenuLinks = mobileMenu.querySelectorAll('a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu();
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        const isClickInside = mobileMenu.contains(e.target) || hamburger.contains(e.target);
        if (!isClickInside && mobileMenu.style.display === 'flex') {
            toggleMenu();
        }
    });
});

// FAQ functionality
  document.addEventListener("DOMContentLoaded", () => {
    const faqs = document.querySelectorAll(".faq");

    faqs.forEach((faq) => {
      faq.addEventListener("toggle", () => {
        if (faq.open) {
          faqs.forEach((other) => {
            if (other !== faq) other.removeAttribute("open");
          });
        }
      });
    });
  });
