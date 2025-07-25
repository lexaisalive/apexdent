document.addEventListener('DOMContentLoaded', function() {
  // Мобильное меню
  const navToggle = document.querySelector('.nav-toggle');
  const navList = document.querySelector('.nav-list');
  
  navToggle.addEventListener('click', function() {
    navList.classList.toggle('active');
  });
  
  // Карусель отзывов
  let currentTestimonial = 0;
  const testimonials = document.querySelectorAll('.testimonial');
  const prevBtn = document.querySelector('.prev-btn');
  const nextBtn = document.querySelector('.next-btn');
  
  function showTestimonial(index) {
    testimonials.forEach(testimonial => {
      testimonial.classList.remove('active');
    });
    
    currentTestimonial = index;
    if (currentTestimonial >= testimonials.length) currentTestimonial = 0;
    if (currentTestimonial < 0) currentTestimonial = testimonials.length - 1;
    
    testimonials[currentTestimonial].classList.add('active');
  }
  
  prevBtn.addEventListener('click', function() {
    showTestimonial(currentTestimonial - 1);
  });
  
  nextBtn.addEventListener('click', function() {
    showTestimonial(currentTestimonial + 1);
  });
  
  // Автоматическое переключение отзывов
  let testimonialInterval = setInterval(function() {
    showTestimonial(currentTestimonial + 1);
  }, 5000);
  
  // Пауза при наведении
  const carousel = document.querySelector('.testimonial-carousel');
  carousel.addEventListener('mouseenter', function() {
    clearInterval(testimonialInterval);
  });
  
  carousel.addEventListener('mouseleave', function() {
    testimonialInterval = setInterval(function() {
      showTestimonial(currentTestimonial + 1);
    }, 5000);
  });
  
  // Форма записи
  const appointmentForm = document.getElementById('appointment-form');
  if (appointmentForm) {
    appointmentForm.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Ваша заявка принята! Мы свяжемся с вами в ближайшее время.');
      this.reset();
    });
  }
  
  // Плавная прокрутка
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Закрываем меню на мобильных
        if (navList.classList.contains('active')) {
          navList.classList.remove('active');
        }
      }
    });
  });
});
