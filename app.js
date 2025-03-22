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

// Example of adding items to cart
addToCart('Men\'s Trendy T-Shirt', 29.99);
addToCart('Women\'s Elegant Dress', 59.99);
