document.addEventListener("DOMContentLoaded", function() {
    const posts = document.querySelectorAll(".post");
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalAuthor = document.getElementById("modal-author");
    const modalDate = document.getElementById("modal-date");
    const modalCategory = document.getElementById("modal-category");
    const modalImage = document.getElementById("modal-image");
    const modalContent = document.getElementById("modal-content");
    const closeButton = document.querySelector(".close-button");

    posts.forEach(post => {
        post.addEventListener("click", function() {
            const title = post.querySelector("h2").innerText;
            const author = post.getAttribute("data-author");
            const date = post.getAttribute("data-date");
            const category = post.getAttribute("data-category");
            const content = post.getAttribute("data-content");
            const imageSrc = post.querySelector("img").src;

            modalTitle.innerText = title;
            modalAuthor.innerText = author;
            modalDate.innerText = date;
            modalCategory.innerText = category;
            modalContent.innerText = content;
            modalImage.src = imageSrc;

            modal.style.display = "block";
        });
    });

    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});