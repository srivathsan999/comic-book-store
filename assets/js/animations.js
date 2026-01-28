/**
 * Comic Book Store - Animations
 * Powered by GSAP
 */

document.addEventListener('DOMContentLoaded', () => {
    // Register ScrollTrigger if available
    if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
        gsap.registerPlugin(ScrollTrigger);

        // Hero Animation
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            gsap.from(heroContent, {
                duration: 1.2,
                y: 60,
                opacity: 0,
                ease: "power3.out",
                delay: 0.2
            });
        }

        // Fade Up Elements on Scroll
        const fadeElements = document.querySelectorAll('.fade-up');
        fadeElements.forEach(el => {
            gsap.to(el, {
                scrollTrigger: {
                    trigger: el,
                    start: "top 85%",
                    toggleActions: "play none none reverse"
                },
                y: 0,
                opacity: 1,
                visibility: 'visible', // Ensure visibility is set to visible
                duration: 0.8,
                ease: "power2.out"
            });
        });

        // Comic Card Stagger
        const productGrid = document.querySelector('.product-grid');
        if (productGrid) {
            gsap.from(productGrid.children, {
                scrollTrigger: {
                    trigger: productGrid,
                    start: "top 80%"
                },
                y: 40,
                opacity: 0,
                duration: 0.6,
                stagger: 0.1,
                ease: "back.out(1.7)"
            });
        }
    }
});
