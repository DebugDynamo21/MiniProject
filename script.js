// ============= PRODUCTS DATA =============
const products = [
    // Sunglasses
    { id: 1, name: 'Classic Aviator Gold', price: 12367, originalPrice: 16517, category: 'sunglasses', rating: 4.8, image: 'images/product-Sunglasses/aviator.png', badge: 'BEST SELLER', discount: 25 },
    { id: 2, name: 'Modern Wayfarer Black', price: 10707, originalPrice: 13167, category: 'sunglasses', rating: 4.9, image: 'images/product-Sunglasses/wayfer.png', badge: 'NEW', discount: 19 },
    { id: 3, name: 'Sport Shield Silver', price: 14857, originalPrice: 19007, category: 'sunglasses', rating: 4.7, image: 'images/product-Sunglasses/sport.png', badge: 'SALE', discount: 22 },
    { id: 4, name: 'Round Vintage Tortoise', price: 11537, originalPrice: 15687, category: 'sunglasses', rating: 4.6, image: 'images/product-Sunglasses/round.png', badge: '', discount: 26 },
    { id: 5, name: 'Executive Square Navy', price: 15687, originalPrice: 20667, category: 'sunglasses', rating: 4.9, image: 'images/product-Sunglasses/square.png', badge: 'PREMIUM', discount: 24 },
    { id: 6, name: 'Polarized Pro Gray', price: 16517, originalPrice: 23157, category: 'sunglasses', rating: 5.0, image: 'images/product-Sunglasses/polariedpro.png', badge: 'TRENDING', discount: 29 },
    { id: 19, name: 'Designer Cat Eye Pink', price: 13167, originalPrice: 17327, category: 'sunglasses', rating: 4.7, image: 'images/product-Sunglasses/aviator.png', badge: 'NEW', discount: 24 },
    { id: 20, name: 'Geometric Frame Purple', price: 14857, originalPrice: 19837, category: 'sunglasses', rating: 4.5, image: 'images/product-Sunglasses/wayfer.png', badge: 'TRENDING', discount: 25 },
    { id: 21, name: 'Oversized Square Black', price: 15687, originalPrice: 21487, category: 'sunglasses', rating: 4.8, image: 'images/product-Sunglasses/sport.png', badge: 'BEST SELLER', discount: 27 },
    { id: 22, name: 'Retro Round Green', price: 12367, originalPrice: 16517, category: 'sunglasses', rating: 4.6, image: 'images/product-Sunglasses/round.png', badge: 'SALE', discount: 25 },
    { id: 23, name: 'Minimalist Rectangle Clear', price: 14027, originalPrice: 18987, category: 'sunglasses', rating: 4.9, image: 'images/product-Sunglasses/square.png', badge: 'PREMIUM', discount: 26 },
    { id: 24, name: 'Sport Wraparound Blue', price: 13167, originalPrice: 17327, category: 'sunglasses', rating: 4.7, image: 'images/product-Sunglasses/polariedpro.png', badge: '', discount: 24 },
    
    // Eyeglasses
    { id: 7, name: 'Professional Frame Black', price: 16517, originalPrice: 21487, category: 'eyeglasses', rating: 4.9, image: 'images/product-Eyeglasses/professional.png', badge: 'BEST SELLER', discount: 23 },
    { id: 8, name: 'Smart Reader Brown', price: 13167, originalPrice: 16517, category: 'eyeglasses', rating: 4.7, image: 'images/product-Eyeglasses/smart-reader.png', badge: 'NEW', discount: 20 },
    { id: 9, name: 'Designer Rim Silver', price: 18987, originalPrice: 24787, category: 'eyeglasses', rating: 4.8, image: 'images/product-Eyeglasses/designer-rim.png', badge: 'PREMIUM', discount: 23 },
    { id: 10, name: 'Vintage Round Gold', price: 14857, originalPrice: 19837, category: 'eyeglasses', rating: 4.6, image: 'images/product-Eyeglasses/round.png', badge: '', discount: 25 },
    { id: 11, name: 'Minimalist Frame Clear', price: 14027, originalPrice: 18187, category: 'eyeglasses', rating: 4.9, image: 'images/product-Eyeglasses/minimalist.png', badge: 'TRENDING', discount: 23 },
    { id: 12, name: 'Bold Statement Tortoise', price: 17327, originalPrice: 23157, category: 'eyeglasses', rating: 4.8, image: 'images/product-Eyeglasses/bold-statement.png', badge: 'SALE', discount: 25 },
    { id: 25, name: 'Executive Thin Metal', price: 18187, originalPrice: 24787, category: 'eyeglasses', rating: 4.7, image: 'images/product-Eyeglasses/professional.png', badge: 'NEW', discount: 27 },
    { id: 26, name: 'Computer Blue Light', price: 15687, originalPrice: 20667, category: 'eyeglasses', rating: 4.8, image: 'images/product-Eyeglasses/smart-reader.png', badge: 'BEST SELLER', discount: 24 },
    { id: 27, name: 'Fashion Cat Eye Red', price: 16517, originalPrice: 22317, category: 'eyeglasses', rating: 4.6, image: 'images/product-Eyeglasses/designer-rim.png', badge: 'TRENDING', discount: 26 },
    { id: 28, name: 'Classic Browline Black', price: 14857, originalPrice: 19837, category: 'eyeglasses', rating: 4.9, image: 'images/product-Eyeglasses/round.png', badge: 'PREMIUM', discount: 25 },
    { id: 29, name: 'Ultra Light Titanium', price: 19837, originalPrice: 26437, category: 'eyeglasses', rating: 4.8, image: 'images/product-Eyeglasses/minimalist.png', badge: 'SALE', discount: 25 },
    { id: 30, name: 'Geometric Designer', price: 17327, originalPrice: 23157, category: 'eyeglasses', rating: 4.7, image: 'images/product-Eyeglasses/bold-statement.png', badge: '', discount: 25 },
    
    // Contact Lenses
    { id: 13, name: 'Daily Comfort Lenses', price: 3237, originalPrice: 4067, category: 'contacts', rating: 4.9, image: 'images/product-ContactLens/daily-comfort.png', badge: 'BEST SELLER', type: 'Daily', discount: 20 },
    { id: 14, name: 'Monthly Premium Clear', price: 4067, originalPrice: 5727, category: 'contacts', rating: 4.8, image: 'images/product-ContactLens/monthly-premium.png', badge: '', type: 'Monthly', discount: 29 },
    { id: 15, name: 'Color Enhance Blue', price: 3735, originalPrice: 4897, category: 'contacts', rating: 4.7, image: 'images/product-ContactLens/color-blue.png', badge: 'NEW', type: 'Monthly', discount: 24 },
    { id: 16, name: 'Color Enhance Green', price: 3735, originalPrice: 4897, category: 'contacts', rating: 4.6, image: 'images/product-ContactLens/color-green.png', badge: 'TRENDING', type: 'Monthly', discount: 24 },
    { id: 17, name: 'Toric Astigmatism', price: 4897, originalPrice: 6557, category: 'contacts', rating: 4.9, image: 'images/product-ContactLens/torric.png', badge: 'PREMIUM', type: 'Monthly', discount: 25 },
    { id: 18, name: 'Extended Wear Pro', price: 5727, originalPrice: 8217, category: 'contacts', rating: 5.0, image: 'images/product-ContactLens/extended-wear.png', badge: 'SALE', type: 'Extended', discount: 30 },
    { id: 31, name: 'Biweekly Soft Lenses', price: 4567, originalPrice: 6187, category: 'contacts', rating: 4.8, image: 'images/product-ContactLens/daily-comfort.png', badge: 'NEW', type: 'Biweekly', discount: 26 },
    { id: 32, name: 'Multifocal Progressives', price: 5397, originalPrice: 7377, category: 'contacts', rating: 4.7, image: 'images/product-ContactLens/monthly-premium.png', badge: 'BEST SELLER', type: 'Monthly', discount: 27 },
    { id: 33, name: 'Color Enhance Hazel', price: 3735, originalPrice: 4897, category: 'contacts', rating: 4.6, image: 'images/product-ContactLens/color-blue.png', badge: 'TRENDING', type: 'Monthly', discount: 24 },
    { id: 34, name: 'Daily Disposable Clear', price: 3402, originalPrice: 4522, category: 'contacts', rating: 4.9, image: 'images/product-ContactLens/color-green.png', badge: '', type: 'Daily', discount: 25 },
    { id: 35, name: 'Rigid Gas Permeable', price: 6227, originalPrice: 8747, category: 'contacts', rating: 4.8, image: 'images/product-ContactLens/torric.png', badge: 'PREMIUM', type: 'Extended', discount: 29 },
    { id: 36, name: 'Hydrogel Comfort Plus', price: 4897, originalPrice: 6557, category: 'contacts', rating: 4.7, image: 'images/product-ContactLens/extended-wear.png', badge: 'SALE', type: 'Monthly', discount: 25 },
    
    // Accessories - Contact Lens Solutions (6 products)
    { id: 37, name: 'Baush & Lomb Bio True Contact Lens Solution(450ml)', price: 827, originalPrice: 1237, category: 'accessories', rating: 4.8, image: 'images/accessories/ContactlensSolution/cl-img1.jpg', badge: 'BEST SELLER', discount: 33 },
    { id: 41, name: 'Renu B&L Contact Lens Solution(100ml)', price: 992, originalPrice: 1487, category: 'accessories', rating: 4.8, image: 'images/accessories/ContactlensSolution/cl-img2.jpg', badge: 'PREMIUM', discount: 33 },
    { id: 45, name: 'Opti-Free Pure Moist Solution(300ml)', price: 1157, originalPrice: 1652, category: 'accessories', rating: 4.7, image: 'images/accessories/ContactlensSolution/cl-img3.png', badge: '', discount: 30 },
    { id: 46, name: 'Multi Purpose Contact Lens Soft Solution(250ml)', price: 662, originalPrice: 992, category: 'accessories', rating: 4.6, image: 'images/accessories/ContactlensSolution/cl-img4.jpg', badge: 'NEW', discount: 33 },
    { id: 47, name: 'Protein Remover Solution(Pack of 1)', price: 1322, originalPrice: 1902, category: 'accessories', rating: 4.9, image: 'images/accessories/ContactlensSolution/cl-img5.jpg', badge: 'TRENDING', discount: 31 },
    { id: 48, name: 'Saline Solution Pack(250ml)', price: 497, originalPrice: 747, category: 'accessories', rating: 4.5, image: 'images/accessories/ContactlensSolution/cl-img6.jpg', badge: 'SALE', discount: 34 },
    
    // Accessories - Lens Wipes (6 products)
    { id: 38, name: 'Premium Lens Cleaning Wipes', price: 497, originalPrice: 747, category: 'accessories', rating: 4.6, image: 'images/accessories/lensWipes/img1.jpg', badge: 'NEW', discount: 34 },
    { id: 42, name: 'Microfiber Lens Cleaning Cloth', price: 331, originalPrice: 497, category: 'accessories', rating: 4.5, image: 'images/accessories/lensWipes/img2.jpeg', badge: 'SALE', discount: 33 },
    { id: 49, name: 'Antibacterial Lens Wipes', price: 579, originalPrice: 827, category: 'accessories', rating: 4.7, image: 'images/accessories/lensWipes/img3.jpg', badge: '', discount: 30 },
    { id: 50, name: 'Travel Size Lens Wipes', price: 414, originalPrice: 662, category: 'accessories', rating: 4.8, image: 'images/accessories/lensWipes/img4.jpg', badge: 'BEST SELLER', discount: 37 },
    { id: 51, name: 'Eco-Friendly Bamboo Wipes', price: 662, originalPrice: 992, category: 'accessories', rating: 4.9, image: 'images/accessories/lensWipes/img5.jpg', badge: 'PREMIUM', discount: 33 },
    { id: 52, name: 'Large Pack Lens Wipes', price: 747, originalPrice: 1157, category: 'accessories', rating: 4.6, image: 'images/accessories/lensWipes/img6.jpg', badge: 'TRENDING', discount: 35 },
    
    // Accessories - Packaging Cases (6 products)
    { id: 39, name: 'Hard Shell Protective Case', price: 662, originalPrice: 992, category: 'accessories', rating: 4.7, image: 'images/accessories/packagingCase/c-img1.jpg', badge: '', discount: 33 },
    { id: 43, name: 'Soft Pouch Storage Case', price: 497, originalPrice: 747, category: 'accessories', rating: 4.6, image: 'images/accessories/packagingCase/c-img5.jpg', badge: 'NEW', discount: 34 },
    { id: 53, name: 'Leather Travel Case', price: 1487, originalPrice: 2147, category: 'accessories', rating: 4.8, image: 'images/accessories/packagingCase/c-img2.jpg', badge: 'PREMIUM', discount: 31 },
    { id: 54, name: 'Compact Folding Case', price: 579, originalPrice: 827, category: 'accessories', rating: 4.5, image: 'images/accessories/packagingCase/c-img6.jpg', badge: 'SALE', discount: 30 },
    { id: 55, name: 'Waterproof Storage Case', price: 827, originalPrice: 1237, category: 'accessories', rating: 4.9, image: 'images/accessories/packagingCase/c-img3.jpg', badge: 'BEST SELLER', discount: 33 },
    { id: 56, name: 'Multi-Compartment Case', price: 992, originalPrice: 1487, category: 'accessories', rating: 4.7, image: 'images/accessories/packagingCase/c-img4.jpg', badge: 'TRENDING', discount: 33 },
    
    // Accessories - Lens Cleaning Solutions (6 products)
    { id: 40, name: 'Zeiss Lens Cleaning Spray Solution(2x40ml)', price: 579, originalPrice: 827, category: 'accessories', rating: 4.9, image: 'images/accessories/lensCleaningSolution/s-img2.jpg', badge: 'TRENDING', discount: 30 },
    { id: 44, name: 'Anti-Fog Cleaning Solution(60ml)', price: 747, originalPrice: 1157, category: 'accessories', rating: 4.7, image: 'images/accessories/lensCleaningSolution/s-img3.jpg', badge: '', discount: 35 },
    { id: 57, name: 'Streak-Free Cleaner(4x30ml)', price: 662, originalPrice: 992, category: 'accessories', rating: 4.8, image: 'images/accessories/lensCleaningSolution/s-img4.jpg', badge: 'BEST SELLER', discount: 33 },
    { id: 58, name: 'Spray Lens Cleaner(250 sprays)', price: 827, originalPrice: 1237, category: 'accessories', rating: 4.6, image: 'images/accessories/lensCleaningSolution/s-img5.jpg', badge: 'NEW', discount: 33 },
    { id: 59, name: 'Natural Formula Cleaner(40ml)', price: 912, originalPrice: 1322, category: 'accessories', rating: 4.9, image: 'images/accessories/lensCleaningSolution/s-img6.jpg', badge: 'PREMIUM', discount: 31 },
    { id: 60, name: 'Essilor Lens Cleaning Solution with lens wipes(60ml)', price: 497, originalPrice: 747, category: 'accessories', rating: 4.5, image: 'images/accessories/lensCleaningSolution/s.img1.jpg', badge: 'SALE', discount: 34 }
];

// ============= STATE MANAGEMENT =============
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
let currentFilter = 'all';
let displayedProducts = 12;

// ============= INITIALIZATION =============
document.addEventListener('DOMContentLoaded', function() {
    renderProducts();
    setupEventListeners();
    updateCartUI();
    updateWishlistUI();
    setupScrollToTop();
    
    // Show the load more button initially
    const loadMoreButton = document.querySelector('[onclick="loadMoreProducts()"]');
    if (loadMoreButton) {
        loadMoreButton.style.display = 'inline-block';
    }
    
    // Navbar scroll effect
    window.addEventListener('scroll', updateNavbarScrollEffect);
});

// ============= RENDER PRODUCTS =============
function renderProducts() {
    const productsGrid = document.getElementById('productsGrid');
    const filteredProducts = currentFilter === 'all' 
        ? products 
        : products.filter(p => p.category === currentFilter);
    
    const productsToShow = filteredProducts.slice(0, displayedProducts);
    
    productsGrid.innerHTML = productsToShow.map(product => `
        <div class="col-lg-4 col-md-6 fade-in-up">
            <div class="product-card">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" class="product-img" 
                         onerror="this.src='https://via.placeholder.com/400x300/667eea/ffffff?text=${product.name}'">
                    ${product.badge ? `<span class="product-badge">${product.badge}</span>` : ''}
                    <div class="product-actions">
                        <button class="action-btn ${isInWishlist(product.id) ? 'active' : ''}" 
                                onclick="toggleWishlist(${product.id})" title="Add to Wishlist">
                            <i class="bi ${isInWishlist(product.id) ? 'bi-heart-fill' : 'bi-heart'}"></i>
                        </button>
                        <button class="action-btn" onclick="quickView(${product.id})" title="Quick View">
                            <i class="bi bi-eye"></i>
                        </button>
                    </div>
                </div>
                <div class="product-body">
                    <p class="product-category mb-2">${getCategoryName(product.category)}</p>
                    <h5 class="product-title">${product.name}</h5>
                    <div class="product-rating mb-2">
                        ${renderStars(product.rating)}
                        <span class="ms-2 product-rating-text">(${product.rating})</span>
                    </div>
                    <div class="d-flex align-items-center justify-content-between mb-3">
                        <div>
                            <span class="product-price">₹${product.price.toLocaleString()}</span>
                            ${product.originalPrice ? `<span class="price-original">₹${product.originalPrice.toLocaleString()}</span>` : ''}
                        </div>
                        ${product.discount ? `<span class="badge bg-success">${product.discount}% OFF</span>` : ''}
                    </div>
                    <button class="btn btn-add-cart" onclick="addToCart(${product.id})">
                        <i class="bi bi-cart-plus me-2"></i>Add to Cart
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ============= HELPER FUNCTIONS =============
function renderStars(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    let stars = '';
    
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="bi bi-star-fill"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="bi bi-star-half"></i>';
    }
    for (let i = fullStars + (hasHalfStar ? 1 : 0); i < 5; i++) {
        stars += '<i class="bi bi-star"></i>';
    }
    
    return stars;
}

function getCategoryName(category) {
    const names = {
        'sunglasses': 'Sunglasses',
        'eyeglasses': 'Eyeglasses',
        'contacts': 'Contact Lenses',
        'accessories': 'Accessories'
    };
    return names[category] || category;
}

function isInWishlist(productId) {
    return wishlist.some(item => item.id === productId);
}

function isInCart(productId) {
    return cart.some(item => item.id === productId);
}

// ============= FILTER PRODUCTS =============
function filterProducts(category) {
    currentFilter = category;
    displayedProducts = 12;
    renderProducts();
    scrollToProducts();
    
    // Update active filter button
    document.querySelectorAll('.btn-filter').forEach(btn => {
        btn.classList.remove('active');
        if (btn.getAttribute('data-filter') === category) {
            btn.classList.add('active');
        }
    });
    
    // Show the load more button again when filtering
    const loadMoreButton = document.querySelector('[onclick="loadMoreProducts()"]');
    if (loadMoreButton) {
        loadMoreButton.style.display = 'inline-block';
    }
}

function filterProductsMobile(category) {
    filterProducts(category);
}

function setupEventListeners() {
    // Filter buttons
    document.querySelectorAll('.btn-filter').forEach(button => {
        button.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            filterProducts(filter);
        });
    });
}

// ============= LOAD MORE PRODUCTS =============
function loadMoreProducts() {
    displayedProducts += 12; // Load 12 more products instead of 6
    renderProducts();
    
    // Check if we've loaded all products for the current filter
    const filteredProducts = currentFilter === 'all' 
        ? products 
        : products.filter(p => p.category === currentFilter);
    
    // Hide the load more button if we've loaded all products
    const loadMoreButton = document.querySelector('[onclick="loadMoreProducts()"]');
    if (displayedProducts >= filteredProducts.length) {
        loadMoreButton.style.display = 'none';
    }
}

// ============= CART FUNCTIONS =============
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Save cart with user-specific key if user is logged in
    if (currentUser) {
        localStorage.setItem(`cart_${currentUser.username}`, JSON.stringify(cart));
    } else if (localStorage.getItem('username')) {
        // Check if username is stored in localStorage (user might have refreshed the page)
        const username = localStorage.getItem('username');
        localStorage.setItem(`cart_${username}`, JSON.stringify(cart));
    }
    
    updateCartUI();
    showNotification('Added to cart!', 'success');
    
    // Animate cart icon
    const cartBadge = document.getElementById('cartBadge');
    cartBadge.style.animation = 'pulse 0.5s ease';
    setTimeout(() => {
        cartBadge.style.animation = '';
    }, 500);
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem('cart', JSON.stringify(cart));
    
    // Save cart with user-specific key if user is logged in
    if (currentUser) {
        localStorage.setItem(`cart_${currentUser.username}`, JSON.stringify(cart));
    } else if (localStorage.getItem('username')) {
        // Check if username is stored in localStorage (user might have refreshed the page)
        const username = localStorage.getItem('username');
        localStorage.setItem(`cart_${username}`, JSON.stringify(cart));
    }
    
    updateCartUI();
    showNotification('Removed from cart', 'info');
}

function updateCartQuantity(productId, change) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        } else {
            localStorage.setItem('cart', JSON.stringify(cart));
            
            // Save cart with user-specific key if user is logged in
            if (currentUser) {
                localStorage.setItem(`cart_${currentUser.username}`, JSON.stringify(cart));
            } else if (localStorage.getItem('username')) {
                // Check if username is stored in localStorage (user might have refreshed the page)
                const username = localStorage.getItem('username');
                localStorage.setItem(`cart_${username}`, JSON.stringify(cart));
            }
            
            updateCartUI();
        }
    }
}

function updateCartUI() {
    const cartBadge = document.getElementById('cartBadge');
    const cartItemCount = document.getElementById('cartItemCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    const totalPrice = document.getElementById('totalPrice');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartBadge.textContent = totalItems;
    cartItemCount.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart text-center py-5">
                <i class="bi bi-cart-x display-1 muted-text"></i>
                <p class="muted-text mt-3">Your cart is empty</p>
                <button class="btn btn-gradient rounded-pill" data-bs-dismiss="offcanvas" onclick="scrollToProducts()">Start Shopping</button>
            </div>
        `;
        cartTotal.style.display = 'none';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="row align-items-center">
                    <div class="col-3">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-img" 
                             onerror="this.src='https://via.placeholder.com/80x80/667eea/ffffff?text=Item'">
                    </div>
                    <div class="col-6">
                        <h6 class="mb-1">${item.name}</h6>
                        <p class="muted-text small mb-0">₹${item.price.toLocaleString()}</p>
                        <div class="d-flex align-items-center mt-2">
                            <button class="btn btn-sm btn-outline-light" onclick="updateCartQuantity(${item.id}, -1)">-</button>
                            <span class="mx-3">${item.quantity}</span>
                            <button class="btn btn-sm btn-outline-light" onclick="updateCartQuantity(${item.id}, 1)">+</button>
                        </div>
                    </div>
                    <div class="col-3 text-end">
                        <p class="fw-bold mb-2">₹${(item.price * item.quantity).toLocaleString()}</p>
                        <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${item.id})">
                            <i class="bi bi-trash"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
        cartTotal.style.display = 'block';
        totalPrice.textContent = `₹${total.toLocaleString()}`;
    }
}

// Original toggleWishlist function
function originalToggleWishlist(productId) {
    const product = products.find(p => p.id === productId);
    const index = wishlist.findIndex(item => item.id === productId);
    
    if (index > -1) {
        wishlist.splice(index, 1);
        showNotification('Removed from wishlist', 'info');
    } else {
        wishlist.push(product);
        showNotification('Added to wishlist!', 'success');
    }
    
    localStorage.setItem('wishlist', JSON.stringify(wishlist));
    
    // Save wishlist with user-specific key if user is logged in
    if (currentUser) {
        localStorage.setItem(`wishlist_${currentUser.username}`, JSON.stringify(wishlist));
    } else if (localStorage.getItem('username')) {
        // Check if username is stored in localStorage (user might have refreshed the page)
        const username = localStorage.getItem('username');
        localStorage.setItem(`wishlist_${username}`, JSON.stringify(wishlist));
    }
    
    updateWishlistUI();
    renderProducts(); // Re-render to update heart icons
}

// Modified toggleWishlist function to require login
const originalToggleWishlistFunc = originalToggleWishlist;
window.toggleWishlist = function(productId) {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true' || currentUser;
    
    if (!isLoggedIn) {
        // Show login popup if user is not logged in
        showLoginPopup();
        return;
    }
    // Call original function if user is logged in
    originalToggleWishlistFunc(productId);
};

function updateWishlistUI() {
    const wishlistBadge = document.getElementById('wishlistBadge');
    const wishlistItemCount = document.getElementById('wishlistItemCount');
    const wishlistItems = document.getElementById('wishlistItems');
    
    wishlistBadge.textContent = wishlist.length;
    wishlistItemCount.textContent = wishlist.length;
    
    if (wishlist.length === 0) {
        wishlistItems.innerHTML = `
            <div class="empty-wishlist text-center py-5">
                <i class="bi bi-heart display-1 muted-text"></i>
                <p class="muted-text mt-3">Your wishlist is empty</p>
                <button class="btn btn-gradient rounded-pill" data-bs-dismiss="offcanvas" onclick="scrollToProducts()">Browse Products</button>
            </div>
        `;
    } else {
        wishlistItems.innerHTML = wishlist.map(item => `
            <div class="wishlist-item mb-3">
                <div class="row align-items-center">
                    <div class="col-4">
                        <img src="${item.image}" alt="${item.name}" class="cart-item-img"
                             onerror="this.src='https://via.placeholder.com/80x80/667eea/ffffff?text=Item'">
                    </div>
                    <div class="col-5">
                        <h6 class="mb-1">${item.name}</h6>
                        <p class="text-gradient fw-bold mb-0">₹${item.price.toLocaleString()}</p>
                    </div>
                    <div class="col-3 text-end">
                        <button class="btn btn-sm btn-outline-danger mb-2" onclick="toggleWishlist(${item.id})">
                            <i class="bi bi-trash"></i>
                        </button>
                        <button class="btn btn-sm btn-gradient d-block w-100" onclick="addToCart(${item.id})">
                            <i class="bi bi-cart-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        `).join('');
    }
}

// ============= QUICK VIEW =============
function quickView(productId) {
    const product = products.find(p => p.id === productId);
    const quickViewContent = document.getElementById('quickViewContent');
    
    quickViewContent.innerHTML = `
        <div class="col-md-6">
            <img src="${product.image}" alt="${product.name}" class="img-fluid"
                 onerror="this.src='https://via.placeholder.com/500x500/667eea/ffffff?text=${product.name}'">
        </div>
        <div class="col-md-6 p-4">
            <span class="badge bg-secondary mb-2">${getCategoryName(product.category)}</span>
            <h3 class="mb-3">${product.name}</h3>
            <div class="product-rating mb-3">
                ${renderStars(product.rating)}
                <span class="ms-2">(${product.rating} / 5.0)</span>
            </div>
            <div class="mb-4">
                <span class="fs-3 fw-bold text-gradient">₹${product.price.toLocaleString()}</span>
                ${product.originalPrice ? `<span class="text-decoration-line-through muted-text ms-2">₹${product.originalPrice.toLocaleString()}</span>` : ''}
                ${product.discount ? `<span class="badge bg-success ms-2">${product.discount}% OFF</span>` : ''}
            </div>
            <p class="muted-text mb-4">Premium quality eyewear with advanced features and comfortable fit. Perfect for everyday use.</p>
            <div class="d-grid gap-2">
                <button class="btn btn-gradient btn-lg" onclick="addToCart(${product.id}); bootstrap.Modal.getInstance(document.getElementById('quickViewModal')).hide();">
                    <i class="bi bi-cart-plus me-2"></i>Add to Cart
                </button>
                <button class="btn btn-outline-light btn-lg" onclick="toggleWishlist(${product.id})">
                    <i class="bi ${isInWishlist(product.id) ? 'bi-heart-fill' : 'bi-heart'} me-2"></i>
                    ${isInWishlist(product.id) ? 'Remove from' : 'Add to'} Wishlist
                </button>
            </div>
        </div>
    `;
    
    new bootstrap.Modal(document.getElementById('quickViewModal')).show();
}

// ============= SEARCH FUNCTIONALITY =============
function searchProducts() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const searchResults = document.getElementById('searchResults');
    
    if (searchInput.length < 2) {
        searchResults.innerHTML = '';
        return;
    }
    
    const results = products.filter(p => 
        p.name.toLowerCase().includes(searchInput) || 
        p.category.toLowerCase().includes(searchInput)
    );
    
    if (results.length === 0) {
        searchResults.innerHTML = '<p class="muted-text">No products found</p>';
    } else {
        searchResults.innerHTML = results.slice(0, 5).map(product => `
            <div class="search-result-item d-flex align-items-center p-2 rounded mb-2" style="cursor: pointer; background: rgba(255,255,255,0.05);" onclick="quickView(${product.id}); bootstrap.Modal.getInstance(document.getElementById('searchModal')).hide();">
                <img src="${product.image}" alt="${product.name}" style="width: 50px; height: 50px; object-fit: cover; border-radius: 8px;" 
                     onerror="this.src='https://via.placeholder.com/50x50/667eea/ffffff?text=P'">
                <div class="ms-3">
                    <h6 class="mb-0">${product.name}</h6>
                    <small class="text-gradient fw-bold">₹${product.price.toLocaleString()}</small>
                </div>
            </div>
        `).join('');
    }
}

// ============= NOTIFICATIONS =============
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    const alertClass = type === 'error' ? 'alert-error' : `alert-${type}`;
    const icon = type === 'error' ? 'bi bi-exclamation-circle' : 'bi bi-check-circle';
    
    notification.className = `alert ${alertClass} position-fixed top-0 start-50 translate-middle-x mt-5 shadow-lg`;
    notification.style.zIndex = '9999';
    notification.style.animation = 'fadeInUp 0.5s ease';
    notification.innerHTML = `
        <i class="${icon} me-2"></i>${message}
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'fadeInUp 0.5s ease reverse';
        setTimeout(() => notification.remove(), 500);
    }, 2000);
}

// ============= SCROLL FUNCTIONS =============
function scrollToProducts() {
    document.getElementById('products').scrollIntoView({ behavior: 'smooth' });
}

function scrollToTopFunc() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function setupScrollToTop() {
    const scrollBtn = document.getElementById('scrollToTop');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('show');
        } else {
            scrollBtn.classList.remove('show');
        }
    });
}

// ============= NEWSLETTER =============
document.querySelector('.newsletter-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    showNotification('Thank you for subscribing!', 'success');
    this.reset();
});

// ============= APPOINTMENT BOOKING =============
document.querySelector('.appointment-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    showNotification('Appointment booked successfully! We will contact you shortly.', 'success');
    this.reset();
});

// ============= USER AUTHENTICATION =============
let currentUser = null;

// Check if user is logged in on page load
window.addEventListener('DOMContentLoaded', function() {
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        updateLoginButton();
    } else {
        // Show login popup after 2 seconds if user is not logged in
        setTimeout(showLoginPopup, 2000);
    }
});

// Show login popup
function showLoginPopup() {
    if (!currentUser) {
        const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();
    }
}

// Update login button text
function updateLoginButton() {
    const loginBtnText = document.getElementById('loginBtnText');
    const loginDropdownItem = document.getElementById('loginDropdownItem');
    const logoutDropdownItem = document.getElementById('logoutDropdownItem');
    
    if (currentUser) {
        loginBtnText.textContent = currentUser.username;
        loginDropdownItem.style.display = 'none';
        logoutDropdownItem.style.display = 'block';
    } else {
        loginBtnText.textContent = 'Sign In';
        loginDropdownItem.style.display = 'block';
        logoutDropdownItem.style.display = 'none';
    }
}

// Login form submission
document.getElementById('loginForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('loginUsername').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simple validation (in a real app, this would be server-side)
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.username === username && u.password === password);
    
    if (user) {
        currentUser = user;
        localStorage.setItem('currentUser', JSON.stringify(user));
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', user.username);
        localStorage.setItem('userEmail', user.email || '');
        
        // Restore cart and wishlist for the user
        const userCart = localStorage.getItem(`cart_${user.username}`);
        const userWishlist = localStorage.getItem(`wishlist_${user.username}`);
        
        if (userCart) {
            cart = JSON.parse(userCart);
            localStorage.setItem('cart', JSON.stringify(cart));
        } else {
            cart = [];
            localStorage.setItem('cart', JSON.stringify([]));
        }
        
        if (userWishlist) {
            wishlist = JSON.parse(userWishlist);
            localStorage.setItem('wishlist', JSON.stringify(wishlist));
        } else {
            wishlist = [];
            localStorage.setItem('wishlist', JSON.stringify([]));
        }
        
        // Update UI
        updateCartUI();
        updateWishlistUI();
        updateLoginButton();
        bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
        showNotification('Login successful!', 'success');
    } else {
        showNotification('Invalid username or password!', 'error');
    }
});

// Register form submission
document.getElementById('registerForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('registerUsername').value;
    const email = document.getElementById('registerEmail').value;
    const address = document.getElementById('registerAddress').value;
    const contact = document.getElementById('registerContact').value;
    const password = document.getElementById('registerPassword').value;
    
    // Check if username already exists
    const users = JSON.parse(localStorage.getItem('users')) || [];
    if (users.find(u => u.username === username)) {
        showNotification('Username already exists!', 'error');
        return;
    }
    
    // Create new user
    const newUser = {
        username,
        email,
        address,
        contact,
        password
    };
    
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    
    // Auto-login after registration
    currentUser = newUser;
    localStorage.setItem('currentUser', JSON.stringify(newUser));
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', newUser.username);
    localStorage.setItem('userEmail', newUser.email || '');
    
    // Save cart and wishlist for the new user
    localStorage.setItem(`cart_${newUser.username}`, JSON.stringify(cart));
    localStorage.setItem(`wishlist_${newUser.username}`, JSON.stringify(wishlist));
    
    updateLoginButton();
    bootstrap.Modal.getInstance(document.getElementById('loginModal')).hide();
    showNotification('Registration successful! Welcome ' + username, 'success');
});

// Logout function
function logout() {
    currentUser = null;
    localStorage.removeItem('currentUser');
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    localStorage.removeItem('userEmail');
    
    // Clear cart and wishlist on logout
    localStorage.removeItem('cart');
    localStorage.removeItem('wishlist');
    
    // Reset cart and wishlist arrays
    cart = [];
    wishlist = [];
    
    // Update UI
    updateCartUI();
    updateWishlistUI();
    updateLoginButton();
    showNotification('You have been logged out', 'info');
}

// Modified addToCart function to require login
const originalAddToCart = addToCart;
window.addToCart = function(productId) {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true' || currentUser;
    
    if (!isLoggedIn) {
        // Show login popup if user is not logged in
        showLoginPopup();
        return;
    }
    // Call original function if user is logged in
    originalAddToCart(productId);
};

// Theme Toggle Functionality
function initThemeToggle() {
    const themeToggle = document.getElementById('themeToggle');
    const themeIcon = themeToggle.querySelector('i');
    
    // Check for saved theme or default to dark
    const currentTheme = localStorage.getItem('theme') || 'dark';
    
    // Apply theme
    if (currentTheme === 'light') {
        document.body.classList.add('light-mode');
        themeIcon.classList.remove('bi-moon-fill');
        themeIcon.classList.add('bi-sun-fill');
    }
    
    // Toggle theme on click
    themeToggle.addEventListener('click', function(e) {
        e.preventDefault();
        
        if (document.body.classList.contains('light-mode')) {
            // Switch to dark mode
            document.body.classList.remove('light-mode');
            themeIcon.classList.remove('bi-sun-fill');
            themeIcon.classList.add('bi-moon-fill');
            localStorage.setItem('theme', 'dark');
        } else {
            // Switch to light mode
            document.body.classList.add('light-mode');
            themeIcon.classList.remove('bi-moon-fill');
            themeIcon.classList.add('bi-sun-fill');
            localStorage.setItem('theme', 'light');
        }
        
        // Update navbar scroll effect based on current theme
        updateNavbarScrollEffect();
    });
}

// Update navbar scroll effect based on current theme
function updateNavbarScrollEffect() {
    const nav = document.querySelector('.glass-nav');
    if (!nav) return;
    
    if (document.body.classList.contains('light-mode')) {
        // Light mode colors
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(255, 255, 255, 0.98)';
            nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.15)';
        } else {
            nav.style.background = 'rgba(255, 255, 255, 0.95)';
            nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
        }
    } else {
        // Dark mode colors
        if (window.scrollY > 50) {
            nav.style.background = 'rgba(15, 12, 41, 0.98)';
            nav.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
        } else {
            nav.style.background = 'rgba(15, 12, 41, 0.95)';
            nav.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.3)';
        }
    }
}

// Initialize theme toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initThemeToggle();
});

// Password visibility toggle functionality
function setupPasswordToggle() {
    // Login password toggle
    const toggleLoginPassword = document.getElementById('toggleLoginPassword');
    const loginPassword = document.getElementById('loginPassword');
    
    if (toggleLoginPassword && loginPassword) {
        toggleLoginPassword.addEventListener('click', function() {
            const type = loginPassword.getAttribute('type') === 'password' ? 'text' : 'password';
            loginPassword.setAttribute('type', type);
            this.innerHTML = type === 'password' ? '<i class="bi bi-eye"></i>' : '<i class="bi bi-eye-slash"></i>';
        });
    }
    
    // Register password toggle
    const toggleRegisterPassword = document.getElementById('toggleRegisterPassword');
    const registerPassword = document.getElementById('registerPassword');
    
    if (toggleRegisterPassword && registerPassword) {
        toggleRegisterPassword.addEventListener('click', function() {
            const type = registerPassword.getAttribute('type') === 'password' ? 'text' : 'password';
            registerPassword.setAttribute('type', type);
            this.innerHTML = type === 'password' ? '<i class="bi bi-eye"></i>' : '<i class="bi bi-eye-slash"></i>';
        });
    }
}

// Handle My Account click
function handleMyAccountClick(event) {
    event.preventDefault();
    
    try {
        // Check if user is logged in
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true' || currentUser;
        
        if (isLoggedIn) {
            // Populate account information in the modal
            const currentUserData = JSON.parse(localStorage.getItem('currentUser')) || currentUser;
            
            if (currentUserData) {
                document.getElementById('accountUsername').textContent = currentUserData.username || '';
                document.getElementById('accountEmail').textContent = currentUserData.email || '';
                document.getElementById('accountFullName').textContent = currentUserData.username || '';
                document.getElementById('accountAddress').textContent = currentUserData.address || 'Not provided';
                document.getElementById('accountPhone').textContent = currentUserData.contact || 'Not provided';
                
                // Format join date
                const joinDate = new Date();
                document.getElementById('accountJoinDate').textContent = joinDate.toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                });
            }
            
            // Show account info modal
            const accountModal = new bootstrap.Modal(document.getElementById('accountInfoModal'));
            accountModal.show();
        } else {
            // Show login modal
            const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
            loginModal.show();
        }
    } catch (error) {
        console.error('Error in handleMyAccountClick:', error);
        // Show a simple error message
        alert('There was an error displaying your account information. Please try again.');
    }
}

// Handle My Orders click
function handleMyOrdersClick(event) {
    event.preventDefault();
    
    try {
        // Check if user is logged in
        const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true' || currentUser;
        
        if (!isLoggedIn) {
            // Show login modal
            const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
            loginModal.show();
            return;
        }
        
        // Check if cart has items
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        
        const ordersContent = document.getElementById('ordersContent');
        
        if (cart.length > 0) {
            // Display cart items in the orders modal
            let ordersHTML = `
                <div class="mb-4">
                    <h5>Your Current Cart (${cart.length} items)</h5>
                    <p class="text-muted">Review your items before checkout</p>
                </div>
                <div class="row">
            `;
            
            cart.forEach(item => {
                ordersHTML += `
                    <div class="col-md-6 mb-3">
                        <div class="card h-100">
                            <div class="card-body">
                                <div class="d-flex">
                                    <img src="${item.image}" alt="${item.name}" class="img-fluid rounded" style="width: 80px; height: 80px; object-fit: cover;">
                                    <div class="ms-3">
                                        <h6 class="card-title">${item.name}</h6>
                                        <p class="card-text mb-1">Quantity: ${item.quantity || 1}</p>
                                        <p class="card-text fw-bold">₹${(item.price * (item.quantity || 1)).toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
            
            ordersHTML += `</div>`;
            
            // Add checkout button
            ordersHTML += `
                <div class="mt-4 text-center">
                    <button class="btn btn-primary" onclick="proceedToCheckout()">Proceed to Checkout</button>
                    <button class="btn btn-outline-secondary ms-2" data-bs-dismiss="modal">Continue Shopping</button>
                </div>
            `;
            
            ordersContent.innerHTML = ordersHTML;
        } else {
            // Show empty cart message
            ordersContent.innerHTML = `
                <div class="empty-orders text-center py-5">
                    <i class="bi bi-bag-x display-1 text-muted"></i>
                    <h5 class="mt-3">Your Cart is Empty</h5>
                    <p class="text-muted mb-4">You haven't added any items to your cart yet.</p>
                    <button class="btn btn-primary rounded-pill" data-bs-dismiss="modal" onclick="scrollToProducts()">Start Shopping</button>
                </div>
            `;
        }
        
        // Show orders modal
        const ordersModal = new bootstrap.Modal(document.getElementById('myOrdersModal'));
        ordersModal.show();
    } catch (error) {
        console.error('Error in handleMyOrdersClick:', error);
        // Show a simple error message
        alert('There was an error displaying your orders. Please try again.');
    }
}

// Initialize password toggle when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    setupPasswordToggle();
});

console.log('LuxVision - Premium Optical Store Loaded Successfully! 🎉');

// Proceed to checkout function
function proceedToCheckout() {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true' || currentUser;
    
    if (!isLoggedIn) {
        // Show login modal
        const loginModal = new bootstrap.Modal(document.getElementById('loginModal'));
        loginModal.show();
        return;
    }
    
    // Close the orders modal
    const ordersModal = bootstrap.Modal.getInstance(document.getElementById('myOrdersModal'));
    if (ordersModal) {
        ordersModal.hide();
    }
    
    // Show notification
    showNotification('Proceeding to checkout...', 'info');
    
    // In a real implementation, you would redirect to a checkout page
    // For now, we'll just show a message
    setTimeout(() => {
        showNotification('Redirecting to checkout page...', 'success');
        // Here you would typically redirect to a checkout page
        // window.location.href = '/checkout';
    }, 1000);
}