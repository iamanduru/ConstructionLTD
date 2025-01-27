// Hamburger Menu Functionality
const hamburger = document.getElementById('hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the active class
});


//Scroll Detection
let lastScrollTop = 0;
const navbar = document.querySelector('.navigation__bar');

window.addEventListener('scroll', function() {
    const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        navbar.style.transform = 'translateY(-100%)'; // Hide the navbar
    } else {
        // Scrolling up
        setTimeout(() => {
            navbar.style.transform = 'translateY(0)'; // Show the navbar
        }, 100); // Delay for smoother appearance
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});

//Counter Animation
document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.counter');

    const animateCounter = (counter, target) => {
        let count = 0;
        const speed = 2000 / target; //2 second duration

        const updateCount = () => {
            const increment = target / (2000 / 16); //60fps

            if (count < target) {
                count += increment;
                counter.innerText = Math.ceil(count);
                requestAnimationFrame(updateCount);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    };

    const observerCallback = (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                animateCounter(counter, target);
            }
        });
    };

    const observer = new IntersectionObserver(observerCallback, {
        threshold: 0.5
    });

    counters.forEach(counter => observer.observe(counter));
});


// Initialize Swiper
document.addEventListener('DOMContentLoaded', function() {
    const testimonialSwiper = new Swiper('.testimonials-slider', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      breakpoints: {
        768: {
          slidesPerView: 2
        }
      }
    });
  });

