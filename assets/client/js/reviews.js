document.addEventListener('DOMContentLoaded', () => {
    const filterTour = document.getElementById('filter-tour');
    const filterRating = document.getElementById('filter-rating');
    const btnFilter = document.querySelector('.btn-filter');
    const reviews = document.querySelectorAll('.review-card');

    btnFilter.addEventListener('click', () => {
        const tour = filterTour.value;
        const rating = parseInt(filterRating.value) || 0;

        reviews.forEach(review => {
            const reviewTour = review.dataset.tour;
            const reviewRating = parseInt(review.dataset.rating);

            const matchTour = !tour || reviewTour === tour;
            const matchRating = !rating || reviewRating >= rating;

            review.style.display = matchTour && matchRating ? 'block' : 'none';
        });
    });
});