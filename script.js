// Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.mobile-nav').classList.toggle('active');
});

// Smooth Scrolling for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        
        // Close mobile menu after clicking
        document.querySelector('.mobile-nav').classList.remove('active');
    });
});

// Feature Cards Animation
const featureCards = document.querySelectorAll('.feature-card');
featureCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-5px)';
        this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
        this.style.boxShadow = 'none';
    });
});

// Button click animation
const downloadBtn = document.querySelector('.download-btn');

downloadBtn.addEventListener('click', function() {
    // Add your download functionality here
    console.log("Download button clicked!");
    
    // Optional: Add temporary click effect
    this.style.transform = 'scale(0.95)';
    setTimeout(() => {
        this.style.transform = 'scale(1)';
    }, 150);
});

// Optional: Add animation when page loads
document.addEventListener('DOMContentLoaded', function() {
    const heroContent = document.querySelector('.hero-content');
    heroContent.style.opacity = '0';
    heroContent.style.transform = 'translateY(20px)';
    heroContent.style.transition = 'all 0.8s ease';
    
    setTimeout(() => {
        heroContent.style.opacity = '1';
        heroContent.style.transform = 'translateY(0)';
    }, 100);
});

document.addEventListener('DOMContentLoaded', function() {
    // Animate compact cards on scroll
    const compactCards = document.querySelectorAll('.compact-card');
    
    const animateCards = function() {
        compactCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if(cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state
    compactCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1)';
    });
    
    // Add hover effect to buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-3px)';
        });
        
        btn.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Initialize animations
    window.addEventListener('load', animateCards);
    window.addEventListener('scroll', animateCards);
    
    // Add ripple effect to buttons
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            const x = e.clientX - e.target.getBoundingClientRect().left;
            const y = e.clientY - e.target.getBoundingClientRect().top;
            
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            ripple.style.left = `${x}px`;
            ripple.style.top = `${y}px`;
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Animation for feature cards
    const featureCards = document.querySelectorAll('.feature-card');
    const compactCards = document.querySelectorAll('.compact-card');
    
    const animateOnScroll = function() {
        featureCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if(cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
        
        compactCards.forEach(card => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if(cardPosition < screenPosition) {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial state
    featureCards.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
    });
    
    compactCards.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease';
    });
    
    window.addEventListener('load', animateOnScroll);
    window.addEventListener('scroll', animateOnScroll);
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
  const tabButtons = document.querySelectorAll('.tab-btn');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', function() {
      // Remove active class from all buttons and contents
      document.querySelectorAll('.tab-btn, .tab-content').forEach(el => {
        el.classList.remove('active');
      });
      
      // Add active class to clicked button
      this.classList.add('active');
      
      // Show corresponding content
      const tabId = this.getAttribute('data-tab');
      document.getElementById(tabId).classList.add('active');
    });
  });
});
// Enhanced Mobile Menu Toggle
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    const mobileNav = document.querySelector('.mobile-nav');
    mobileNav.classList.toggle('active');
    
    // Toggle aria-expanded for accessibility
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
    
    // Toggle hamburger icon
    this.textContent = isExpanded ? '☰' : '✕';
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(e) {
    const mobileNav = document.querySelector('.mobile-nav');
    const menuBtn = document.querySelector('.mobile-menu-btn');
    
    if (!e.target.closest('.mobile-nav') && !e.target.closest('.mobile-menu-btn') && mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.textContent = '☰';
    }
});

// Initialize aria attributes
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.mobile-menu-btn').setAttribute('aria-expanded', 'false');
    document.querySelector('.mobile-menu-btn').setAttribute('aria-label', 'Toggle menu');
});
