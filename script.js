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
    }, { threshold: 0.15 });

    // Target individual cards as well as sections for a more dynamic cascade feel
    const animatedElements = document.querySelectorAll('section, .skill-card, .project-card, .article-card, .timeline-item');
    animatedElements.forEach(el => {
        el.style.opacity = 0;
        // Start slightly lower and scaled down
        el.style.transform = 'translateY(40px) scale(0.96)';
        // Extremely smooth custom bezier curve
        el.style.transition = 'opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1), transform 0.9s cubic-bezier(0.22, 1, 0.36, 1)';
        observer.observe(el);
    });
});