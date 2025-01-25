document.addEventListener('DOMContentLoaded', () => {
    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const navbar = document.querySelector('.navbar');
    const navLinks = document.querySelectorAll('.navbar a');

    // Hamburger Menu Toggle
    hamburgerMenu.addEventListener('click', (e) => {
        e.stopPropagation();
        navbar.classList.toggle('active');
        
        // Toggle hamburger animation
        hamburgerMenu.classList.toggle('active');
    });

    // Close navbar when a link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        });
    });

    // Close navbar when clicking outside
    document.addEventListener('click', (event) => {
        if (!navbar.contains(event.target) && !hamburgerMenu.contains(event.target)) {
            navbar.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });

    // Prevent navbar click from closing it
    navbar.addEventListener('click', (e) => {
        e.stopPropagation();
    });

    // Contact Form Submission (Simple placeholder)
    const contactForm = document.getElementById('contact-form');
    
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Message sent successfully!');
        contactForm.reset();
    });
});