// Animate cards on scroll
const cards = document.querySelectorAll('.card');

const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    });
}, options);

cards.forEach(card => {
    observer.observe(card);
});

// Modal functionality
const modal = document.getElementById('modal');
const modalTitle = document.getElementById('modal-title');
const modalProject = document.getElementById('modal-project');
const modalClient = document.getElementById('modal-client');
const modalLanguage = document.getElementById('modal-language');
const modalPreview = document.getElementById('modal-preview');
const modalImage = document.getElementById('modal-image');
const closeBtn = document.querySelector('.close-btn');

cards.forEach(card => {
    card.addEventListener('click', () => {
        modal.style.display = 'block';
        modalTitle.textContent = card.getAttribute('data-title');
        modalProject.textContent = card.getAttribute('data-project');
        modalClient.textContent = card.getAttribute('data-client');
        modalLanguage.textContent = card.getAttribute('data-language');
        modalPreview.href = `https://${card.getAttribute('data-preview')}`;
        modalPreview.textContent = card.getAttribute('data-preview');
        modalImage.src = card.getAttribute('data-image');
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
});
