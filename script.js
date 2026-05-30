
// Mobile Menu Toggle
const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', function() {
        mobileMenu.classList.toggle('active');
        const icon = this.querySelector('i');
        if (mobileMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close mobile menu when clicking on links
const mobileLinks = mobileMenu?.querySelectorAll('a');
if (mobileLinks) {
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            const icon = mobileToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
}

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const headerHeight = document.querySelector('.header').offsetHeight;
            const targetPosition = target.offsetTop - headerHeight - 20;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// Sticky Bar on Scroll
const stickyBar = document.getElementById('stickyBar');
window.addEventListener('scroll', function() {
    if (window.scrollY > 300) {
        stickyBar.classList.add('visible');
    } else {
        stickyBar.classList.remove('visible');
    }
});

// Header Scroll Effect
const header = document.getElementById('header');
window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
        header.style.background = 'rgba(0, 0, 0, 1)';
    } else {
        header.style.background = 'rgba(0, 0, 0, 0.95)';
    }
});

// Booking Form Handler
const bookingForm = document.getElementById('bookingForm');
if (bookingForm) {
    bookingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const formData = new FormData(this);
        const name = this.querySelector('input[type="text"]').value;
        const phone = this.querySelector('input[type="tel"]').value;
        const pickup = this.querySelectorAll('input[type="text"]')[1].value;
        const drop = this.querySelectorAll('input[type="text"]')[2].value;
        
        const message = `Hello! I would like to book a taxi.%0A%0A` +
                       `Name: ${encodeURIComponent(name)}%0A` +
                       `Phone: ${encodeURIComponent(phone)}%0A` +
                       `Pickup: ${encodeURIComponent(pickup)}%0A` +
                       `Drop: ${encodeURIComponent(drop)}%0A%0A` +
                       `Please confirm availability and pricing.`;
        
        const whatsappUrl = `https://wa.me/918700489107?text=${message}`;
        window.open(whatsappUrl, '_blank');
    });
}

// Scroll Animations
const animateOnScroll = function() {
    const elements = document.querySelectorAll('.service-card, .pricing-card, .review-card, .gallery-item');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elements.forEach(el => observer.observe(el));
};

// Initialize animations
if (window.IntersectionObserver) {
    animateOnScroll();
}

// Prevent form double submission
document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', function() {
        const submitBtn = this.querySelector('button[type="submit"]');
        if (submitBtn) {
            submitBtn.disabled = true;
            setTimeout(() => {
                submitBtn.disabled = false;
            }, 3000);
        }
    });
});

// Console welcome message
console.log('%c🚖 Brijdarsan Tourist', 'font-size: 20px; font-weight: bold; color: #FCD34D;');
console.log('%cPremium Taxi Service - Delhi Airport to Mathura & Vrindavan', 'font-size: 14px; color: #6B7280;');
console.log('%cBook Now: +91 870 048 9107', 'font-size: 12px; color: #25D366;');

// Update copyright year
const currentYear = new Date().getFullYear();
const copyrightElement = document.querySelector('.footer-bottom p');
if (copyrightElement) {
    copyrightElement.textContent = copyrightElement.textContent.replace('2024', currentYear);
}
