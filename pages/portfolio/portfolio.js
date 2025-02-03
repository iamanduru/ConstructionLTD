// Portfolio data structure
const portfolioProjects = [
    {
        id: 1,
        title: "Duncan Bungalow - Kitengela",
        category: "designs",
        description: "Luxury residential complex with sustainable features",
        date: "2024",
        images: [
            "/img/Designs/duncan bungalow -kitengela/pic1.jpg",
            "/img/Designs/duncan bungalow -kitengela/pic2.jpg"
        ]
    },
    {
        id: 2,
        title: "Mamboleo Project",
        category: "designs",
        description: "We designed this mamboleo project",
        date: "2023",
        images: [
            "/img/Designs/elizabeth - Mamboleo/pic1.jpg",
            "/img/Designs/elizabeth - Mamboleo/pic2.jpg",
            "/img/Designs/elizabeth - Mamboleo/pic3.jpg"
        ]
    },
    {
        id: 3,
        title: "Hostels in Rongo",
        category: "designs",
        description: "We designed Hostels in Rongo, Migori",
        date: "2023",
        images: [
            "/img/Designs/hostel in rongo/pic1.jpg",
            "/img/Designs/hostel in rongo/pic2.jpg",
            "/img/Designs/hostel in rongo/pic3.jpg"

        ]
    },
    {
        id: 4,
        title: "Hostels in Kisumu",
        category: "designs",
        description: "We designed Hostels in Kisumu",
        date: "2023",
        images: [
            "/img/Designs/hostels- kisumu/pic1.jpg",
            "/img/Designs/hostels- kisumu/pic2.jpg",
            "/img/Designs/hostels- kisumu/pic3.jpg",
            "/img/Designs/hostels- kisumu/pic4.jpg"

        ]
    },
    {
        id: 5,
        title: "Manyatta School SDA church",
        category: "designs",
        description: "We designed Hostels in the school",
        date: "2023",
        images: [
            "/img/Designs/manyatta school sda church/PIC1.jpg",
            "/img/Designs/manyatta school sda church/pic2.jpg",
            "/img/Designs/manyatta school sda church/pic3.jpg"

        ]
    },
    {
        id: 6,
        title: "Skymart Apartment",
        category: "designs",
        description: "We designed Skymart Aprtments",
        date: "2023",
        images: [
            "/img/Designs/skymark apartment/01 Final Edited.jpg",
            "/img/Designs/skymark apartment/01 Final Email size.jpg",
            "/img/Designs/skymark apartment/02.jpg",
            "/img/Designs/skymark apartment/03 Final Edited.jpg"

        ]
    },
    {
        id: 7,
        title: "Nixon's Project",
        category: "supervision",
        description: "We designed and supervised this project",
        date: "2023",
        images: [
            "/img/D&S/nixon oborah - rongo/pic1.jpg",
            "/img/D&S/nixon oborah - rongo/pic2.jpg"

        ]
    },
    {
        id: 8,
        title: "Project in Seme",
        category: "build",
        description: "We designed and build this project",
        date: "2023",
        images: [
            "/img/D$B/dr. antony project  - Seme/pic1.jpg",
            "/img/D$B/dr. antony project  - Seme/pic2.jpg",
            "/img/D$B/dr. antony project  - Seme/pic3.jpg",
            "/img/D$B/dr. antony project  - Seme/pic4.jpg"
        ]
    },
    {
        id: 9,
        title: "KMTC Awendi -Migori County",
        category: "build",
        description: "We designed and build the KMTC awendo",
        date: "2023",
        images: [
            "/img/D$B/kmtc awendo migori county/elly.jpg",
            "/img/D$B/kmtc awendo migori county/NNNNN FINAL.png",
            "/img/D$B/kmtc awendo migori county/thumbnail.jpg"
        ]
    },
    {
        id: 10,
        title: "Lydiah Project",
        category: "build",
        description: "We designed and build this project",
        date: "2023",
        images: [
            "/img/D$B/Lydiah/Pic1.png",
            "/img/D$B/Lydiah/pic2.png",
            "/img/D$B/Lydiah/pic3.png"

        ]
    }
    

    // Add more projects as needed
];

// DOM Elements
const portfolioGrid = document.getElementById("portfolioGrid");
const modal = document.getElementById("projectModal");
const mainImage = document.getElementById("mainImage");
const thumbnailGallery = document.getElementById("thumbnailGallery");
const modalTitle = document.getElementById("modalTitle");
const projectDescription = document.getElementById("projectDescription");
const projectCategory = document.getElementById("projectCategory");
const projectDate = document.getElementById("projectDate");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const filterButtons = document.querySelectorAll(".filter-btn");

let currentProject = null;
let currentImageIndex = 0;

// Initialize Portfolio
document.addEventListener("DOMContentLoaded", () => {
    renderProjects("all"); // Show all projects by default
    setupEventListeners();
});

// Render Projects Based on Category
function renderProjects(category) {
    portfolioGrid.innerHTML = ""; // Clear previous items

    const filteredProjects = portfolioProjects.filter(project =>
        category === "all" ? true : project.category === category
    );

    filteredProjects.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("portfolio-item");
        projectElement.setAttribute("data-id", project.id);
        projectElement.innerHTML = `
            <img src="${project.images[0]}" alt="${project.title}">
            <div class="portfolio-content">
                <h3>${project.title}</h3>
                <span class="portfolio-category">${project.category}</span>
            </div>
        `;
        portfolioGrid.appendChild(projectElement);
    });
}

// Filter Button Click Event
filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        document.querySelector(".filter-btn.active").classList.remove("active");
        button.classList.add("active");
        renderProjects(button.dataset.filter);
    });
});

// Open Project Modal
portfolioGrid.addEventListener("click", (e) => {
    const projectItem = e.target.closest(".portfolio-item");
    if (projectItem) {
        openProjectModal(projectItem.dataset.id);
    }
});

// Open Modal Function
function openProjectModal(projectId) {
    currentProject = portfolioProjects.find(p => p.id === parseInt(projectId));
    currentImageIndex = 0;

    modalTitle.textContent = currentProject.title;
    projectDescription.textContent = currentProject.description;
    projectCategory.textContent = currentProject.category;
    projectDate.textContent = currentProject.date;

    updateModalImages();
    modal.classList.add("active");
    document.body.style.overflow = "hidden";
}

// Update Modal Images
function updateModalImages() {
    mainImage.src = currentProject.images[currentImageIndex];

    thumbnailGallery.innerHTML = currentProject.images.map((img, index) => `
        <div class="thumbnail ${index === currentImageIndex ? 'active' : ''}" data-index="${index}">
            <img src="${img}" alt="Thumbnail ${index + 1}">
        </div>
    `).join('');

    prevBtn.style.display = currentImageIndex > 0 ? "block" : "none";
    nextBtn.style.display = currentImageIndex < currentProject.images.length - 1 ? "block" : "none";
}

// Thumbnail Click Event
thumbnailGallery.addEventListener("click", (e) => {
    const thumbnail = e.target.closest(".thumbnail");
    if (thumbnail) {
        currentImageIndex = parseInt(thumbnail.dataset.index);
        updateModalImages();
    }
});

// Navigation Buttons
prevBtn.addEventListener("click", () => {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        updateModalImages();
    }
});

nextBtn.addEventListener("click", () => {
    if (currentImageIndex < currentProject.images.length - 1) {
        currentImageIndex++;
        updateModalImages();
    }
});

// Close Modal
document.getElementById("closeModal").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => {
    if (e.target === modal || e.target.classList.contains("modal__backdrop")) {
        closeModal();
    }
});

function closeModal() {
    modal.classList.remove("active");
    document.body.style.overflow = "auto";
}
