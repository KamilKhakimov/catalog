document.addEventListener('DOMContentLoaded', () => {
    const filterButton = document.querySelector('.catalog__navigation-filtr-each');
    const popupForm = document.querySelector('.filtration-form');

    filterButton.addEventListener('click', () => {
        popupForm.classList.toggle('hidden');
    });

    window.addEventListener('click', (event) => {
        if (!popupForm.contains(event.target) && !filterButton.contains(event.target)) {
            popupForm.classList.add('hidden');
        }
    });
});