document.addEventListener('DOMContentLoaded', function() {
    const menuBtn = document.querySelector('.menu-btn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Optional: Close menu when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
            }
        });
    });

    // Add a smoother scroll animation effect to elements
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0) scale(1)';
                // Stop observing once animated so it doesn't replay when scrolling back up
                observer.unobserve(entry.target);
            }
        });
    }, { rootMargin: '0px 0px -20px 0px', threshold: 0.05 });

    // Target individual sections instead of both sections and children to prevent mobile viewport conflicts
    const animatedElements = document.querySelectorAll('section');
    animatedElements.forEach(el => {
        el.style.opacity = 0;
        // Start slightly lower and scaled down
        el.style.transform = 'translateY(30px) scale(0.98)';
        // Extremely smooth custom bezier curve
        el.style.transition = 'opacity 0.8s cubic-bezier(0.22, 1, 0.36, 1), transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)';
        observer.observe(el);
    });
});