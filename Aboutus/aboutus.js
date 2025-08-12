$(document).ready(function () {
      $("#menu-toggle").click(function () {
        $("#nav-links").toggleClass("active");
      });

      // Counter animation
      function startCounter(element) {
        const target = parseInt(element.getAttribute('data-target'));
        const duration = 2000; // 2 seconds
        const step = Math.ceil(target / (duration / 16)); // 60fps
        let current = 0;

        const timer = setInterval(() => {
          current += step;
          if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
          } else {
            element.textContent = current;
          }
        }, 16);
      }

      // Intersection Observer for counters
      const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.5
      };

      const counterObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            startCounter(entry.target);
            observer.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Observe all counters
      document.querySelectorAll('.counter').forEach(counter => {
        counterObserver.observe(counter);
      });

      // Add animation class to stat items when they come into view
      const statObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
          }
        });
      }, {
        threshold: 0.2
      });

      document.querySelectorAll('.stat-item').forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        statObserver.observe(item);
      });

      // Testimonials Slider
      const track = document.querySelector('.testimonial-track');
      const cards = document.querySelectorAll('.testimonial-card');
      const dotsContainer = document.querySelector('.testimonial-dots');
      let currentSlide = 0;
      let slideInterval;

      // Create dots
      cards.forEach((_, index) => {
        const dot = document.createElement('div');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
      });

      const dots = document.querySelectorAll('.dot');

      function updateDots() {
        dots.forEach((dot, index) => {
          dot.classList.toggle('active', index === currentSlide);
        });
      }

      function goToSlide(index) {
        currentSlide = index;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots();
      }

      function nextSlide() {
        currentSlide = (currentSlide + 1) % cards.length;
        track.style.transform = `translateX(-${currentSlide * 100}%)`;
        updateDots();
      }

      function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
      }

      function pauseSlideshow() {
        clearInterval(slideInterval);
      }

      // Start the slideshow
      startSlideshow();

      // Pause on hover
      track.addEventListener('mouseenter', pauseSlideshow);
      track.addEventListener('mouseleave', startSlideshow);

      // Touch events for mobile
      let touchStartX = 0;
      let touchEndX = 0;

      track.addEventListener('touchstart', e => {
        touchStartX = e.touches[0].clientX;
        pauseSlideshow();
      });

      track.addEventListener('touchmove', e => {
        touchEndX = e.touches[0].clientX;
        const diff = touchStartX - touchEndX;
        if (Math.abs(diff) > 50) {
          if (diff > 0 && currentSlide < cards.length - 1) {
            goToSlide(currentSlide + 1);
          } else if (diff < 0 && currentSlide > 0) {
            goToSlide(currentSlide - 1);
          }
          touchStartX = touchEndX;
        }
      });

      track.addEventListener('touchend', () => {
        startSlideshow();
      });
    });