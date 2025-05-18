document.addEventListener('DOMContentLoaded', function() {
  // Set current year in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  
  // Navbar scroll effect
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });
  
  // Mobile menu toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu-btn button');
  const mobileNav = document.querySelector('.mobile-nav');
  
  mobileMenuBtn.addEventListener('click', function() {
    mobileNav.classList.toggle('active');
    const isOpen = mobileNav.classList.contains('active');
    mobileMenuBtn.innerHTML = isOpen 
      ? '<i class="fas fa-times"></i>'
      : '<i class="fas fa-bars"></i>';
  });
  
  // Smooth scrolling for all anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      // Close mobile menu if open
      if (mobileNav.classList.contains('active')) {
        mobileNav.classList.remove('active');
        mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
      }
      
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        // Offset for fixed header
        const headerOffset = 80;
        const elementPosition = targetElement.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Testimonials slider
  const testimonialsTrack = document.querySelector('.testimonials-track');
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const prevBtn = document.querySelector('.testimonial-btn.prev');
  const nextBtn = document.querySelector('.testimonial-btn.next');
  let currentIndex = 0;
  
  function updateSlider() {
    // Get the number of cards to show based on screen width
    let cardsToShow = 1;
    if (window.innerWidth >= 1024) {
      cardsToShow = 3;
    } else if (window.innerWidth >= 768) {
      cardsToShow = 2;
    }
    
    // Update the grid columns
    testimonialsTrack.style.gridTemplateColumns = `repeat(${testimonialCards.length}, 1fr)`;
    
    // If we're using grid, transform doesn't work, so we need to use grid-column-start
    testimonialCards.forEach((card, index) => {
      if (index >= currentIndex && index < currentIndex + cardsToShow) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
    
    // Update button states
    prevBtn.disabled = currentIndex === 0;
    nextBtn.disabled = currentIndex >= testimonialCards.length - cardsToShow;
  }
  
  // Initialize slider
  updateSlider();
  
  // Handle prev/next clicks
  prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
      currentIndex--;
      updateSlider();
    }
  });
  
  nextBtn.addEventListener('click', () => {
    const cardsToShow = window.innerWidth >= 1024 ? 3 : window.innerWidth >= 768 ? 2 : 1;
    if (currentIndex < testimonialCards.length - cardsToShow) {
      currentIndex++;
      updateSlider();
    }
  });
  
  // Update slider on window resize
  window.addEventListener('resize', updateSlider);
  
  // Contact form validation and submission
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const nameError = document.getElementById('nameError');
  const emailError = document.getElementById('emailError');
  const messageError = document.getElementById('messageError');
  
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Reset errors
    nameError.textContent = '';
    emailError.textContent = '';
    messageError.textContent = '';
    
    // Validate inputs
    let isValid = true;
    
    if (nameInput.value.trim().length < 3) {
      nameError.textContent = 'Nome deve ter pelo menos 3 caracteres';
      isValid = false;
    }
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(emailInput.value.trim())) {
      emailError.textContent = 'Email inválido';
      isValid = false;
    }
    
    if (messageInput.value.trim().length < 10) {
      messageError.textContent = 'Mensagem deve ter pelo menos 10 caracteres';
      isValid = false;
    }
    
    if (isValid) {
      // In a real app, you would send the form data to your server here
      // For now, we'll just show a success toast
      showToast('Mensagem enviada com sucesso!');
      
      // Reset form
      contactForm.reset();
    }
  });
  
  // Toast notification
  const toast = document.getElementById('toast');
  
  function showToast(message) {
    const toastMessage = document.querySelector('.toast-message');
    toastMessage.textContent = message;
    
    toast.classList.add('show');
    
    // Hide toast after animation completes
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
  
  // Fade in animations on scroll
  function fadeInOnScroll() {
    const elements = document.querySelectorAll('.services-grid > *, .about-content, .about-image-container, .video-container, .contact-card');
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    
    elements.forEach(element => {
      // Set initial styles
      element.style.opacity = '0';
      element.style.transform = 'translateY(20px)';
      observer.observe(element);
    });
  }
  
  // Initialize fade in animations
  fadeInOnScroll();
});