const slides = document.querySelectorAll('.slide');

for (let slide of slides) {
    slide.addEventListener('click', () => {
        clearOtherActiveClasses();
        slide.classList.add('active');
    });
}

function clearOtherActiveClasses() {
    for (let slide of slides) {
        slide.classList.remove('active');
    }
}