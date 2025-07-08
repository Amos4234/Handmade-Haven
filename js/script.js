// DOM Elements
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');
const navLinksItems = document.querySelectorAll('.nav-links li');

// Mobile Navigation
burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    burger.classList.toggle('toggle');
});

// Close mobile menu when clicking on a link
navLinksItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('toggle');
    });
});

// Sample products data (in a real app, this would come from an API)
const products = [
    {
        id: 1,
        name: "Handmade Ceramic Mug",
        description: "Beautiful hand-thrown ceramic mug with unique glaze",
        price: 25.99,
        image: "https://images.unsplash.com/photo-1532413992378-f169ac26fff0?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        category: "pottery"
    },
    {
        id: 2,
        name: "Wool Knit Scarf",
        description: "Warm and cozy hand-knit scarf made with premium wool",
        price: 35.50,
        image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        category: "textiles"
    },
    {
        id: 3,
        name: "Wooden Cutting Board",
        description: "Handcrafted walnut cutting board with juice groove",
        price: 45.00,
        image: "https://images.unsplash.com/photo-1560343090-f0409e92791a?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        category: "woodwork"
    },
        {
        id: 14,
        name: "Custom Wood",
        description: "Handcrafted walnut cutting board with juice groove",
        price: 55.00,
        image: "4.jpg",
        category: "woodwork"
    },
   {
        id: 15,
        name: "Phone/watch Wood holder",
        description: "Handcrafted walnut cutting board with juice groove",
        price: 45.00,
        image: "5.jpg",
        category: "woodwork"
    },

    {
        id: 4,
        name: "Silver Pendant Necklace",
        description: "Handmade sterling silver pendant on a delicate chain",
        price: 65.00,
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        category: "jewelry"
    },
    {
        id: 5,
        name: "Hand-painted Vase",
        description: "Ceramic vase with intricate hand-painted design",
        price: 38.00,
        image: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
        category: "pottery"
    },
    {
        id: 6,
        name: "Macrame Wall Hanging",
        description: "Bohemian-style macrame wall art with wooden beads",
        price: 55.00,
        image: "https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
        category: "textiles"
    },
     {
        id: 7,
        name: "Necklace",
        description: "Ceramic vase with intricate hand-painted design",
        price: 38.00,
        image: "a.png",
        category: "jewelry"
    },
     {
        id: 8,
        name: "silver pendant",
        description: "Ceramic vase with intricate hand-painted design",
        price: 38.00,
        image: "b.png",
        category: "jewelry"
    },
     {
        id: 9,
        name: "Pendant",
        description: "Ceramic vase with intricate hand-painted design",
        price: 38.00,
        image: "c.png",
        category: "jewelry"
    },
     {
        id: 10,
        name: "silver necklace",
        description: "Ceramic vase with intricate hand-painted design",
        price: 38.00,
        image: "d.png",
        category: "jewelry"
    },
     {
        id: 11,
        name: "Extra Large Macrame Wall Hanging",
        description: "Bohemian-style macrame wall art with wooden beads",
        price: 58.00,
        image: "1.jpg",
        category: "textiles"
    },
      {
        id: 12,
        name: "Boho Wall Decor",
        description: "Bohemian-style macrame wall art with wooden beads",
        price: 60.00,
        image: "2.jpg",
        category: "textiles"
    },
      {
        id: 13,
        name: "Macrame Wall Decor",
        description: "Bohemian-style macrame wall art with wooden beads",
        price: 60.00,
        image: "3.png",
        category: "textiles"
    },
];

// Load featured products on home page
if (document.querySelector('.featured .products-grid')) {
    const featuredGrid = document.querySelector('.featured .products-grid');
    const featuredProducts = products.slice(0, 4); // Get first 4 products as featured
    
    featuredProducts.forEach(product => {
        featuredGrid.innerHTML += `
            <div class="product-card" data-id="${product.id}">
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
    });
}

// Load all products on store page
if (document.querySelector('.products-section .products-grid')) {
    const storeGrid = document.querySelector('.products-section .products-grid');
    
    products.forEach(product => {
        storeGrid.innerHTML += `
            <div class="product-card" data-id="${product.id}">
                <div class="product-img">
                    <img src="${product.image}" alt="${product.name}">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <div class="product-price">$${product.price.toFixed(2)}</div>
                    <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                </div>
            </div>
        `;
    });
}

// Load gallery items
if (document.querySelector('.gallery-grid')) {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    products.forEach(product => {
        galleryGrid.innerHTML += `
            <div class="gallery-item" data-category="${product.category}">
                <img src="${product.image}" alt="${product.name}">
                <div class="gallery-item-caption">
                    <h3>${product.name}</h3>
                    <p>${product.category}</p>
                </div>
            </div>
        `;
    });

    // Gallery filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            filterBtns.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            const filter = btn.getAttribute('data-filter');
            const galleryItems = document.querySelectorAll('.gallery-item');
            
            galleryItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
}

// Store page sorting
if (document.getElementById('sort-by')) {
    document.getElementById('sort-by').addEventListener('change', function() {
        const sortValue = this.value;
        const productCards = Array.from(document.querySelectorAll('.product-card'));
        
        productCards.sort((a, b) => {
            const aPrice = parseFloat(a.querySelector('.product-price').textContent.replace('$', ''));
            const bPrice = parseFloat(b.querySelector('.product-price').textContent.replace('$', ''));
            
            switch(sortValue) {
                case 'price-low':
                    return aPrice - bPrice;
                case 'price-high':
                    return bPrice - aPrice;
                case 'newest':
                    return b.getAttribute('data-id') - a.getAttribute('data-id');
                default: // popular
                    return a.getAttribute('data-id') - b.getAttribute('data-id');
            }
        });
        
        const productsGrid = document.querySelector('.products-grid');
        productsGrid.innerHTML = '';
        productCards.forEach(card => productsGrid.appendChild(card));
    });
}

// Store page search
if (document.querySelector('.search-bar input')) {
    document.querySelector('.search-bar input').addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const productCards = document.querySelectorAll(('.product-card'));
        
        productCards.forEach(card => {
            const name = card.querySelector('h3').textContent.toLowerCase();
            const description = card.querySelector('p').textContent.toLowerCase();
            
            if (name.includes(searchTerm) || description.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Update cart count in navbar
function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCountElements = document.querySelectorAll('#cart-count');
    
    cartCountElements.forEach(element => {
        element.textContent = cart.reduce((total, item) => total + item.quantity, 0);
    });
}

// Initialize cart count on page load
updateCartCount();