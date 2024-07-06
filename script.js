// Function to check if an element is in viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Function to add animation class when element is in viewport
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');

    elements.forEach(element => {
        if (isInViewport(element)) {
            element.classList.add('show');
        }
    });
}

// Add scroll event listener to trigger animations
window.addEventListener('scroll', animateOnScroll);

// Initial trigger on page load (in case elements are already in view)
document.addEventListener('DOMContentLoaded', animateOnScroll);
