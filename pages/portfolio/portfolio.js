filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        filterProjects(button.dataset.filter);
    });
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.classList.contains('modal-backdrop')) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
});

// Initialize
document.addEventListener('DOMContentLoaded', initializePortfolio);