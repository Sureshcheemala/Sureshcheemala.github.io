document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu');
    const navLinks = document.getElementById('nav-links') || document.querySelector('.links');
    const yearEl = document.getElementById('year');

    // Dynamic copyright year
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

    if (!menuBtn || !navLinks) return;

    function openMenu() {
        navLinks.classList.add('open');
        menuBtn.setAttribute('aria-expanded', 'true');
        menuBtn.setAttribute('aria-label', 'Close menu');
    }

    function closeMenu() {
        navLinks.classList.remove('open');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.setAttribute('aria-label', 'Open menu');
    }

    function toggleMenu() {
        const isOpen = navLinks.classList.contains('open');
        if (isOpen) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    menuBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        toggleMenu();
    });

    // Close when a link inside navigation is clicked
    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Close when Escape key is pressed
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navLinks.classList.contains('open')) {
            closeMenu();
            menuBtn.focus();
        }
    });

    // Close when clicking outside the menu and toggle button
    document.addEventListener('click', (e) => {
        if (navLinks.classList.contains('open') && !navLinks.contains(e.target) && !menuBtn.contains(e.target)) {
            closeMenu();
        }
    });

    // Reset when resizing past mobile breakpoint
    window.addEventListener('resize', () => {
        if (window.innerWidth > 680 && navLinks.classList.contains('open')) {
            closeMenu();
        }
    });
});
