// Toggle mobile menu
function toggleMenu() {
    const navMenu = document.getElementById('navMenu');
    const burgerBtn = document.getElementById('burgerBtn');
    
    navMenu.classList.toggle('active');
    burgerBtn.classList.toggle('active');
}

// Close mobile menu
function closeMenu() {
    const navMenu = document.getElementById('navMenu');
    const burgerBtn = document.getElementById('burgerBtn');
    
    navMenu.classList.remove('active');
    burgerBtn.classList.remove('active');
}

// Close menu when clicking outside
document.addEventListener('click', function(event) {
    const navbar = document.querySelector('.navbar');
    const navMenu = document.getElementById('navMenu');
    const burgerBtn = document.getElementById('burgerBtn');
    
    if (!navbar.contains(event.target) && navMenu.classList.contains('active')) {
        closeMenu();
    }
});

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        closeMenu();
        element.scrollIntoView({ behavior: 'smooth' });
    }
}

// Handle form submission
function handleFormSubmit(event) {
    event.preventDefault();
    
    // Get form data
    const form = event.target;
    const formData = new FormData(form);
    
    // Show success message
    alert('Thank you! Your message has been sent. I will get back to you soon.');
    
    // Reset form
    form.reset();
}

// Video rotator
let currentVideoIndex = 0;
const videos = [
    { type: 'video', element: document.getElementById('video-player') },
    { type: 'placeholder', element: document.getElementById('placeholder-2') },
    { type: 'placeholder', element: document.getElementById('placeholder-3') }
];

function rotateVideos() {
    // Hide current video/placeholder
    videos[currentVideoIndex].element.style.display = 'none';
    
    // Move to next
    currentVideoIndex = (currentVideoIndex + 1) % videos.length;
    
    // Show next video/placeholder
    videos[currentVideoIndex].element.style.display = 'block';
    
    // If it's a video, play it
    if (videos[currentVideoIndex].type === 'video') {
        videos[currentVideoIndex].element.play();
    }
}

// Start rotation when page loads
document.addEventListener('DOMContentLoaded', function() {
    // ... existing code ...
    
    // Start video rotation every 3 seconds
    setInterval(rotateVideos, 3000);
    
    // Hero video rotator
    let currentHeroVideoIndex = 0;
    const heroVideos = [
        { type: 'video', element: document.getElementById('hero-video-3') },
        { type: 'video', element: document.getElementById('hero-video-2') },
        { type: 'video', element: document.getElementById('hero-video-1') }
    ];

    function rotateHeroVideos() {
        // Fade out current to semi-transparent for overlap effect
        heroVideos[currentHeroVideoIndex].element.style.opacity = '0.1';
        
        setTimeout(() => {
            // Hide current
            heroVideos[currentHeroVideoIndex].element.style.display = 'none';
            
            // Move to next
            currentHeroVideoIndex = (currentHeroVideoIndex + 1) % heroVideos.length;
            
            // Show next with full opacity
            heroVideos[currentHeroVideoIndex].element.style.display = 'block';
            heroVideos[currentHeroVideoIndex].element.style.opacity = '1';
            
            // If it's a video, play it
            if (heroVideos[currentHeroVideoIndex].type === 'video') {
                heroVideos[currentHeroVideoIndex].element.play();
            }
        }, 200); // Shorter delay for overlap
    }
    
    // Start hero video rotation every 3 seconds
    setInterval(rotateHeroVideos, 3000);
});

// Add CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(style);

// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#') {
            e.preventDefault();
            scrollToSection(href.substring(1));
        }
    });
});
