document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('login').classList.add('hidden');
    document.getElementById('menu').classList.remove('hidden');
});

let cart = [];

function addToCart(dishName, price, qtyId) {
    const quantity = document.getElementById(qtyId).value;
    const item = { dishName, price, quantity: parseInt(quantity) };
    cart.push(item);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cartItems');
    cartItems.innerHTML = '';
    cart.forEach((item) => {
        const div = document.createElement('div');
        div.innerHTML = `${item.quantity} x ${item.dishName} @ ₹${item.price} each`;
        cartItems.appendChild(div);
    });
}

function proceedToDelivery() {
    document.getElementById('menu').classList.add('hidden');
    document.getElementById('delivery').classList.remove('hidden');
}

function confirmDelivery() {
    const address = document.getElementById('address').value;
    if (!address) {
        alert('Please enter your address');
        return;
    }
    alert('Order placed successfully!');
    document.getElementById('delivery').classList.add('hidden');
    document.getElementById('feedback').classList.remove('hidden');
}

document.getElementById('feedbackForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for your feedback!');
    document.getElementById('feedback').classList.add('hidden');
    document.getElementById('login').classList.remove('hidden');
    cart = [];
});
