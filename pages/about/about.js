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