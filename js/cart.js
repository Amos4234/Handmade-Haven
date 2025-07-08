// Initialize cart
function initCart() {
    if (!localStorage.getItem('cart')) {
        localStorage.setItem('cart', JSON.stringify([]));
    }
    
    // Add to cart buttons
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            addToCart(productId);
        }
    });
    
    // Load cart page if it exists
    if (document.querySelector('.cart-items')) {
        loadCartPage();
    }
}

// Add product to cart
function addToCart(productId) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const product = products.find(p => p.id === productId);
    
    if (!product) return;
    
    // Check if product already in cart
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: 1
        });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
    
    // Show confirmation message
    alert(`${product.name} has been added to your cart!`);
}

// Load cart page
function loadCartPage() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.getElementById('cart-items');
    const cartEmpty = document.getElementById('cart-empty');
    
    if (cart.length === 0) {
        cartEmpty.style.display = 'block';
        cartItemsContainer.style.display = 'none';
        return;
    }
    
    cartEmpty.style.display = 'none';
    cartItemsContainer.style.display = 'block';
    
    // Clear existing items (except header and totals)
    const cartHeader = cartItemsContainer.querySelector('.cart-header');
    const cartTotals = cartItemsContainer.querySelector('.cart-totals');
    cartItemsContainer.innerHTML = '';
    cartItemsContainer.appendChild(cartHeader);
    
    // Add cart items
    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'cart-item';
        itemElement.innerHTML = `
            <div class="cart-item-details">
                <img src="${item.image}" alt="${item.name}" class="cart-item-img">
                <div>
                    <div class="cart-item-title">${item.name}</div>
                </div>
            </div>
            <div class="cart-item-price">$${item.price.toFixed(2)}</div>
            <div class="cart-item-quantity">
                <button class="quantity-btn minus" data-id="${item.id}">-</button>
                <input type="number" class="quantity-input" value="${item.quantity}" min="1" data-id="${item.id}">
                <button class="quantity-btn plus" data-id="${item.id}">+</button>
            </div>
            <div class="cart-item-total">$${(item.price * item.quantity).toFixed(2)}</div>
            <div class="remove-item" data-id="${item.id}"><i class="fas fa-trash"></i></div>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
    
    cartItemsContainer.appendChild(cartTotals);
    
    // Calculate totals
    updateCartTotals();
    
    // Add event listeners for quantity changes
    document.querySelectorAll('.quantity-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const isPlus = this.classList.contains('plus');
            updateCartItemQuantity(productId, isPlus);
        });
    });
    
    // Add event listeners for quantity inputs
    document.querySelectorAll('.quantity-input').forEach(input => {
        input.addEventListener('change', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            const newQuantity = parseInt(this.value);
            
            if (newQuantity < 1) {
                this.value = 1;
                return;
            }
            
            updateCartItemQuantity(productId, null, newQuantity);
        });
    });
    
    // Add event listeners for remove buttons
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', function() {
            const productId = parseInt(this.getAttribute('data-id'));
            removeFromCart(productId);
        });
    });
    
    // Checkout button
    document.getElementById('checkout-btn').addEventListener('click', function() {
        const user = JSON.parse(localStorage.getItem('user'));
        
        if (!user) {
            if (confirm('You need to login to proceed to checkout. Would you like to login now?')) {
                window.location.href = 'login.html';
            }
            return;
        }
        
        alert('Checkout functionality would be implemented here!');
    });
}

// Update cart item quantity
function updateCartItemQuantity(productId, isPlus, newQuantity = null) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    const item = cart.find(item => item.id === productId);
    
    if (!item) return;
    
    if (newQuantity !== null) {
        item.quantity = newQuantity;
    } else {
        if (isPlus) {
            item.quantity += 1;
        } else {
            item.quantity -= 1;
            if (item.quantity < 1) item.quantity = 1;
        }
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartPage();
    updateCartCount();
}

// Remove item from cart
function removeFromCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    loadCartPage();
    updateCartCount();
}

// Update cart totals
function updateCartTotals() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    document.getElementById('cart-subtotal').textContent = `$${subtotal.toFixed(2)}`;
    document.getElementById('cart-total').textContent = `$${subtotal.toFixed(2)}`;
}

// Initialize cart on page load
document.addEventListener('DOMContentLoaded', initCart);