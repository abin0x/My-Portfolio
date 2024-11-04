document.addEventListener('DOMContentLoaded', function() {
    const circles = document.querySelectorAll('.circle');

    circles.forEach(circle => {
        let percentage = circle.getAttribute('data-percent');
        circle.style.background = `conic-gradient(#F8B627 ${percentage * 3.6}deg, #1C1C1C ${percentage * 3.6}deg)`;
    });
});


document.querySelector('.download-cv').addEventListener('click', function() {
    alert('CV Downloaded!');
});
