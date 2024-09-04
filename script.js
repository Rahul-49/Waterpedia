document.addEventListener('DOMContentLoaded', function() {
    const pointsDisplay = document.getElementById('points');
    let totalPoints = 0;
    const tasks = document.querySelectorAll('.rewards-tasks input[type="checkbox"]');

    // Function to update points
    function updatePoints() {
        pointsDisplay.textContent = totalPoints;
    }

    // Function to handle task completion
    function handleTaskChange() {
        let points = parseInt(this.getAttribute('data-points'), 10);

        if (this.checked) {
            totalPoints += points;
        } else {
            totalPoints -= points;
        }

        // Ensure totalPoints does not go negative
        if (totalPoints < 0) {
            totalPoints = 0;
        }

        updatePoints();
    }

    // Attach change event listener to each checkbox
    tasks.forEach(checkbox => {
        checkbox.addEventListener('change', handleTaskChange);
    });

    // Initialize points display
    updatePoints();
});


// for scroll effect in landing page

document.addEventListener("DOMContentLoaded", () => {
    const transformationSection = document.querySelector('.transformation-effect');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                transformationSection.classList.add('active');
            } else {
                transformationSection.classList.remove('active');
            }
        });
    }, {
        root: null, // Use the viewport as the root
        rootMargin: '-1px 0px 0px 0px', // Adjust this value to control when the effect kicks in
        threshold: 0.1 // Trigger when any part of the element is visible
    });

    // Observe the target element
    observer.observe(transformationSection);
});



document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.news-slide');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function showNextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    function showPrevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
    }

    nextButton.addEventListener('click', showNextSlide);
    prevButton.addEventListener('click', showPrevSlide);

    // Initialize slideshow
    showSlide(currentIndex);
});

document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.news-slide');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle('active', i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
        scrollToElement(slides[currentSlide]);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
        scrollToElement(slides[currentSlide]);
    }

    function scrollToElement(element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    prevButton.addEventListener('click', prevSlide);
    nextButton.addEventListener('click', nextSlide);

    // Initialize the first slide
    showSlide(currentSlide);
});

document.getElementById('toggle-faqs').addEventListener('click', function() {
    var moreFaqs = document.querySelectorAll('.more-faqs');
    var button = document.getElementById('toggle-faqs');
    
    moreFaqs.forEach(function(faq) {
        faq.classList.toggle('hidden');
    });

    // Toggle button text
    if (button.textContent === "Show More") {
        button.textContent = "Show Less";
    } else {
        button.textContent = "Show More";
    }
});


//rewards
document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function updateCarousel() {
        const itemWidth = carouselItems[0].getBoundingClientRect().width;
        carouselTrack.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < carouselItems.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
});


// rewards page next button
document.addEventListener('DOMContentLoaded', function() {
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselItems = document.querySelectorAll('.carousel-item');
    
    let currentIndex = 0;
    const itemWidth = carouselItems[0].getBoundingClientRect().width;
    
    function updateCarousel() {
        const offset = -currentIndex * itemWidth;
        carouselTrack.style.transform = `translateX(${offset}px)`;
    }
    
    prevButton.addEventListener('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    nextButton.addEventListener('click', function() {
        if (currentIndex < carouselItems.length - 1) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Optional: Add responsiveness to update item width
    window.addEventListener('resize', function() {
        itemWidth = carouselItems[0].getBoundingClientRect().width;
        updateCarousel();
    });
});


//water bodies
