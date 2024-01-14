const stars = document.querySelectorAll('.star');
const averageRatingElement = document.getElementById('average');
let totalRating = 0;
let numberOfRatings = 0;

function handleRating(event) {
    const clickedStar = event.target;

    if (clickedStar.classList.contains('star')) {
        const ratingValue = parseInt(clickedStar.getAttribute('data-value'));

        totalRating += ratingValue;
        numberOfRatings++;

        updateStars(ratingValue);
        calculateAverageRating();
    }
}

function updateStars(selectedRating) {
    stars.forEach((star, index) => {
        if (index < selectedRating) {
            star.classList.add('active');
        } else {
            star.classList.remove('active');
        }
    });
}

function calculateAverageRating() {
    const averageRating = numberOfRatings === 0 ? 0 : totalRating / numberOfRatings;
    averageRatingElement.textContent = averageRating.toFixed(1);
}

function topOfPage() {
    window.location.href;
}
