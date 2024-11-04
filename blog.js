// document.addEventListener("DOMContentLoaded", function() {
//     // Select all posts
//     const posts = document.querySelectorAll(".post");

//     // Function to truncate content to 10 words
//     function truncateContent(summaryElement, fullContent) {
//         const wordsArray = fullContent.split(" ");
//         if (wordsArray.length > 10) {
//             return wordsArray.slice(0, 10).join(" ") + "...";
//         }
//         return fullContent;
//     }

//     // Initialize the posts with truncated content
//     posts.forEach(post => {
//         const summaryElement = post.querySelector("p");
//         const fullContent = summaryElement.innerText;
//         summaryElement.dataset.fullContent = fullContent;  // Store the full content in a data attribute
//         summaryElement.innerText = truncateContent(summaryElement, fullContent);

//         // Add event listener to expand content on click
//         post.addEventListener("click", function() {
//             if (summaryElement.innerText === truncateContent(summaryElement, fullContent)) {
//                 summaryElement.innerText = fullContent;
//             } else {
//                 summaryElement.innerText = truncateContent(summaryElement, fullContent);
//             }
//         });
//     });

//     // Modal related code
//     const modal = document.getElementById("modal");
//     const modalTitle = document.getElementById("modal-title");
//     const modalAuthor = document.getElementById("modal-author");
//     const modalDate = document.getElementById("modal-date");
//     const modalCategory = document.getElementById("modal-category");
//     const modalImage = document.getElementById("modal-image");
//     const modalContent = document.getElementById("modal-content");
//     const closeButton = document.querySelector(".close-button");

//     posts.forEach(post => {
//         post.addEventListener("click", function() {
//             const title = post.querySelector("h2").innerText;
//             const author = post.getAttribute("data-author");
//             const date = post.getAttribute("data-date");
//             const category = post.getAttribute("data-category");
//             const content = post.getAttribute("data-content");
//             const imageSrc = post.querySelector("img").src;

//             modalTitle.innerText = title;
//             modalAuthor.innerText = author;
//             modalDate.innerText = date;
//             modalCategory.innerText = category;
//             modalContent.innerText = content;
//             modalImage.src = imageSrc;

//             modal.style.display = "block";
//         });
//     });

//     closeButton.addEventListener("click", function() {
//         modal.style.display = "none";
//         // Re-truncate all posts when the modal is closed
//         posts.forEach(post => {
//             const summaryElement = post.querySelector("p");
//             const fullContent = summaryElement.dataset.fullContent;
//             summaryElement.innerText = truncateContent(summaryElement, fullContent);
//         });
//     });

//     window.addEventListener("click", function(event) {
//         if (event.target === modal) {
//             modal.style.display = "none";
//             // Re-truncate all posts when the modal is closed
//             posts.forEach(post => {
//                 const summaryElement = post.querySelector("p");
//                 const fullContent = summaryElement.dataset.fullContent;
//                 summaryElement.innerText = truncateContent(summaryElement, fullContent);
//             });
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    // Select all posts
    const posts = document.querySelectorAll(".post");

    // Function to truncate content to 10 words
    function truncateContent(summaryElement, fullContent) {
        const wordsArray = fullContent.split(" ");
        if (wordsArray.length > 10) {
            return wordsArray.slice(0, 10).join(" ") + "...";
        }
        return fullContent;
    }

    // Initialize the posts with truncated content
    posts.forEach(post => {
        const summaryElement = post.querySelector("p");
        const fullContent = summaryElement.innerText;
        summaryElement.dataset.fullContent = fullContent;  // Store the full content in a data attribute
        summaryElement.innerText = truncateContent(summaryElement, fullContent);

        // Add event listener to expand content on click
        post.addEventListener("click", function() {
            if (summaryElement.innerText === truncateContent(summaryElement, fullContent)) {
                summaryElement.innerText = fullContent;
            } else {
                summaryElement.innerText = truncateContent(summaryElement, fullContent);
            }
        });
    });

    // Modal related code
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
            const content = post.querySelector("p").innerText; // Dynamically get the content
            const imageSrc = post.querySelector("img").src;

            modalTitle.innerText = title;
            modalAuthor.innerText = author;
            modalDate.innerText = date;
            modalCategory.innerText = category;
            modalContent.innerText = content; // Set the modal content dynamically
            modalImage.src = imageSrc;

            modal.style.display = "block";
        });
    });

    closeButton.addEventListener("click", function() {
        modal.style.display = "none";
        // Re-truncate all posts when the modal is closed
        posts.forEach(post => {
            const summaryElement = post.querySelector("p");
            const fullContent = summaryElement.dataset.fullContent;
            summaryElement.innerText = truncateContent(summaryElement, fullContent);
        });
    });

    window.addEventListener("click", function(event) {
        if (event.target === modal) {
            modal.style.display = "none";
            // Re-truncate all posts when the modal is closed
            posts.forEach(post => {
                const summaryElement = post.querySelector("p");
                const fullContent = summaryElement.dataset.fullContent;
                summaryElement.innerText = truncateContent(summaryElement, fullContent);
            });
        }
    });
});
