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


  const nodes = {
    mission: document.getElementById('missionNode'),
    vision: document.getElementById('visionNode'),
    values: document.getElementById('valuesNode')
};

const contents = {
    mission: document.getElementById('missionContent'),
    vision: document.getElementById('visionContent'),
    values: document.getElementById('valuesContent')
};

function hideAllContents() {
    Object.values(contents).forEach(content => {
        content.style.display = 'none';
    });
}

Object.keys(nodes).forEach(key => {
    nodes[key].addEventListener('click', () => {
        hideAllContents();
        contents[key].style.display = 'block';
    });
});

document.addEventListener('click', (event) => {
    if (!Object.values(nodes).some(node => node.contains(event.target))) {
        hideAllContents();
    }
});

 // Animate numbers when in viewport
 const stats = document.querySelectorAll('.stat__number');
        
 const animateNumber = (element) => {
     const target = parseInt(element.getAttribute('data-target'));
     const duration = 2000;
     const step = target / (duration / 16);
     let current = 0;
     
     const updateNumber = () => {
         current += step;
         if (current < target) {
             element.textContent = Math.round(current);
             requestAnimationFrame(updateNumber);
         } else {
             element.textContent = target;
         }
     };
     
     updateNumber();
 };

 // Intersection Observer for stats animation
 const observer = new IntersectionObserver((entries) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             animateNumber(entry.target);
             observer.unobserve(entry.target);
         }
     });
 }, { threshold: 0.5 });

 stats.forEach(stat => observer.observe(stat));

