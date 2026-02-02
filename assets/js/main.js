/**
 * Comic Book Store - Main Logic
 */

document.addEventListener('DOMContentLoaded', () => {
    // Mobile Menu Toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');
    const navActions = document.querySelector('.nav-actions');

    // Add Login and Sign Up to mobile menu
    function addActionsToMobileMenu() {
        if (window.innerWidth <= 1024 && navLinks && navActions) {
            // Remove existing mobile actions if any
            const existingActions = navLinks.querySelector('.mobile-menu-actions');
            if (existingActions) {
                existingActions.remove();
            }

            // Select Login and Sign Up buttons specifically
            const buttons = navActions.querySelectorAll('.btn');
            let loginBtn = null;
            let signUpBtn = null;

            buttons.forEach(btn => {
                if (btn.innerText.toLowerCase().includes('login')) {
                    loginBtn = btn;
                } else if (btn.innerText.toLowerCase().includes('sign up')) {
                    signUpBtn = btn;
                }
            });

            if (loginBtn || signUpBtn) {
                const actionsContainer = document.createElement('div');
                actionsContainer.className = 'mobile-menu-actions';
                actionsContainer.style.cssText = 'width: 100%; padding-top: 1rem; border-top: 1px solid var(--color-border); margin-top: 1rem;';

                if (loginBtn) {
                    const loginClone = loginBtn.cloneNode(true);
                    loginClone.style.cssText = 'display: block; width: 100%; padding: 0.875rem 1rem; margin-bottom: 0.75rem; text-align: center;';
                    actionsContainer.appendChild(loginClone);
                }

                if (signUpBtn) {
                    const signUpClone = signUpBtn.cloneNode(true);
                    signUpClone.style.cssText = 'display: block; width: 100%; padding: 0.875rem 1rem; text-align: center;';
                    actionsContainer.appendChild(signUpClone);
                }

                navLinks.appendChild(actionsContainer);
            }
        } else {
            // Remove mobile actions on desktop
            const existingActions = navLinks.querySelector('.mobile-menu-actions');
            if (existingActions) {
                existingActions.remove();
            }
        }
    }

    // Initialize mobile menu actions
    addActionsToMobileMenu();
    window.addEventListener('resize', addActionsToMobileMenu);

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isActive = navLinks.classList.contains('active');
            mobileMenuBtn.setAttribute('aria-expanded', isActive);

            // Icon toggle logic if strictly needed, but CSS often handles it
            if (isActive) {
                mobileMenuBtn.innerHTML = '&times;'; // Close code or SVG
            } else {
                mobileMenuBtn.innerHTML = '&#9776;'; // Hamburger code or SVG
            }
        });
    }

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
        if (navLinks && navLinks.classList.contains('active') && !navLinks.contains(e.target) && !mobileMenuBtn.contains(e.target)) {
            navLinks.classList.remove('active');
            mobileMenuBtn.setAttribute('aria-expanded', 'false');
            mobileMenuBtn.innerHTML = '&#9776;';
        }
    });

    // Mobile dropdown menu toggle
    const dropdowns = document.querySelectorAll('.dropdown');
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('.nav-link');
        if (dropdownLink) {
            dropdownLink.addEventListener('click', (e) => {
                // Check if we're on mobile/tablet (viewport width <= 992px)
                if (window.innerWidth <= 1024) {
                    e.preventDefault();
                    dropdown.classList.toggle('active');
                }
            });
        }
    });

    // Form Handling (Visual Only)
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            // Just a visual cue
            const btn = form.querySelector('button[type="submit"]');
            if (btn) {
                const originalText = btn.innerText;
                btn.innerText = 'Sent!';
                btn.disabled = true;
                setTimeout(() => {
                    btn.innerText = originalText;
                    btn.disabled = false;
                    form.reset();
                }, 2000);
            }
        });
    });
});
