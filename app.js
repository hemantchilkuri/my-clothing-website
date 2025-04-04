let cart = [];

function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCart();
}

function updateCart() {
    const cartItemsDiv = document.getElementById('cart-items');
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = "<p>No items in your cart.</p>";
    } else {
        let cartContent = "<ul>";
        cart.forEach(item => {
            cartContent += `<li>${item.productName} - $${item.price}</li>`;
        });
        cartContent += "</ul>";
        cartItemsDiv.innerHTML = cartContent;
    }
}

document.getElementById('checkout-btn').addEventListener('click', () => {
    alert('Redirecting to checkout...');
});

document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('email').value;
    alert(`Thank you for subscribing with ${email}!`);
});

document.getElementById('review-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('reviewer-name').value;
    const review = document.getElementById('review-text').value;

    const reviewList = document.getElementById('review-list');
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review');
    reviewItem.innerHTML = `<strong>${name}</strong><p>${review}</p>`;

    reviewList.appendChild(reviewItem);

    document.getElementById('reviewer-name').value = '';
    document.getElementById('review-text').value = '';
});

// Carousel functionality
let currentImage = 0;
const images = [
    'men-product1.jpg', 'men-product2.jpg', 'men-product3.jpg'
];

function updateCarousel() {
    document.getElementById('carousel-img').src = images[currentImage];
}

function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    updateCarousel();
}

function prevImage() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    updateCarousel();
}

// Hide loading spinner after page load
window.onload = function() {
    document.getElementById('loading-spinner').style.display = 'none';
};
// Parallax Scroll Effect
gsap.to('.hero', {
    scrollTrigger: {
        trigger: '.hero',
        start: 'top top',
        end: 'bottom top',
        scrub: true
    },
    y: 200,
    ease: 'none'
});

// Reveal Sections as They Come into View (Scroll Animations)
const sections = document.querySelectorAll('.section');
sections.forEach((section) => {
    gsap.fromTo(section, {
        opacity: 0,
        y: 100
    }, {
        opacity: 1,
        y: 0,
        scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            toggleActions: 'play none none none'
        }
    });
});

// Parallax Effect for Background
gsap.to(".parallax-section", {
    scrollTrigger: {
        trigger: ".parallax-section",
        start: "top bottom",
        end: "bottom top",
        scrub: true
    },
    y: -150,
    ease: "none"
});

// Smooth Scroll Effect
gsap.utils.toArray("a").forEach(anchor => {
    anchor.addEventListener("click", function(e) {
        e.preventDefault();
        gsap.to(window, {duration: 1, scrollTo: this.getAttribute("href")});
    });
});

// Hide the loading spinner after page load
window.onload = function() {
    document.getElementById('loading-spinner').style.display = 'none';
};

// Carousel functionality for product images
let currentImage = 0;
const images = ['men-product1.jpg', 'men-product2.jpg', 'men-product3.jpg'];

function updateCarousel() {
    document.getElementById('carousel-img').src = images[currentImage];
}

function nextImage() {
    currentImage = (currentImage + 1) % images.length;
    updateCarousel();
}

function prevImage() {
    currentImage = (currentImage - 1 + images.length) % images.length;
    updateCarousel();
}
