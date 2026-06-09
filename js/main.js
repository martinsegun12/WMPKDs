// Main JavaScript - Home Page
document.addEventListener('DOMContentLoaded', function() {
    loadFeaturedProducts();
    setupNewsletterForm();
    updateCartBadge();
});

// Sample products with Nigerian snack emojis
const sampleProducts = [
    {
        id: 1,
        name: 'Chinchin - Sweet',
        emoji: '🍟',
        price: 800,
        category: 'chinchin',
        description: 'Crispy sweet chinchin',
        badge: 'Popular'
    },
    {
        id: 2,
        name: 'Chinchin - Spicy',
        emoji: '🌶️',
        price: 800,
        category: 'chinchin',
        description: 'Spicy chinchin with kick',
        badge: 'Hot'
    },
    {
        id: 3,
        name: 'Butter Cookies',
        emoji: '🍪',
        price: 1200,
        category: 'cookies',
        description: 'Soft butter cookies',
        badge: 'New'
    },
    {
        id: 4,
        name: 'Coconut Biscuits',
        emoji: '🥥',
        price: 1000,
        category: 'cookies',
        description: 'Crunchy coconut biscuits',
        badge: ''
    },
    {
        id: 5,
        name: 'Vanilla Cake',
        emoji: '🎂',
        price: 3500,
        category: 'cakes',
        description: 'Moist vanilla cake',
        badge: 'Special'
    },
    {
        id: 6,
        name: 'Chocolate Cake',
        emoji: '🍫',
        price: 3500,
        category: 'cakes',
        description: 'Rich chocolate cake',
        badge: ''
    },
    {
        id: 7,
        name: 'Sausage Roll',
        emoji: '🥐',
        price: 1500,
        category: 'pastries',
        description: 'Crispy sausage roll',
        badge: 'Popular'
    },
    {
        id: 8,
        name: 'Meat Pie',
        emoji: '🥧',
        price: 1500,
        category: 'pastries',
        description: 'Savory meat pie',
        badge: ''
    }
];

function loadFeaturedProducts() {
    const featuredContainer = document.getElementById('featured-products');
    if (!featuredContainer) return;

    featuredContainer.innerHTML = '';
    sampleProducts.forEach(product => {
        const productCard = createProductCard(product);
        featuredContainer.appendChild(productCard);
    });
}

function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';
    const badge = product.badge ? `<span class="product-badge">${product.badge}</span>` : '';
    
    card.innerHTML = `
        <div class="product-image">
            ${product.emoji}
            ${badge}
        </div>
        <div class="product-info">
            <div class="product-name">${product.name}</div>
            <div class="product-desc">${product.description}</div>
            <div class="product-price">₦${product.price.toLocaleString()}</div>
            <div class="product-actions">
                <button class="btn-small btn-add" onclick="addToCart(${product.id}, '${product.name}', ${product.price})">
                    Add
                </button>
                <button class="btn-small btn-view" onclick="openProductModal(${product.id})">
                    View
                </button>
            </div>
        </div>
    `;
    return card;
}

function addToCart(id, name, price) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const existingItem = cart.find(item => item.id === id);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ id, name, price, quantity: 1 });
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    loadCartSidebar();
    showCartNotification(`${name} added to cart!`);
}

function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartBadge = document.getElementById('cart-badge');
    if (cartBadge) {
        cartBadge.textContent = count;
    }
}

function loadCartSidebar() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartList = document.getElementById('cart-items-sidebar');
    const emptyMsg = document.getElementById('cart-empty-msg');
    const cartFooter = document.getElementById('cart-footer');
    
    if (!cartList) return;

    cartList.innerHTML = '';
    
    if (cart.length === 0) {
        emptyMsg.style.display = 'block';
        cartFooter.style.display = 'none';
        return;
    }

    emptyMsg.style.display = 'none';
    cartFooter.style.display = 'block';

    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.innerHTML = `
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-price">₦${item.price}</div>
            </div>
            <div class="cart-item-qty">
                <button class="qty-btn" onclick="updateQty(${index}, -1)">−</button>
                <span>${item.quantity}</span>
                <button class="qty-btn" onclick="updateQty(${index}, 1)">+</button>
            </div>
        `;
        cartList.appendChild(itemDiv);
    });
}

function updateQty(index, change) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart[index].quantity += change;
    
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();
    loadCartSidebar();
}

function toggleCart() {
    const sidebar = document.getElementById('cart-sidebar');
    sidebar.classList.toggle('active');
    if (sidebar.classList.contains('active')) {
        loadCartSidebar();
    }
}

function filterByCategory(category) {
    // You can implement this to filter products
    window.location.href = `products.html?category=${category}`;
}

function showCartNotification(message) {
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
        color: white;
        padding: 15px 25px;
        border-radius: 8px;
        z-index: 2000;
        animation: slideIn 0.3s;
    `;
    notif.textContent = message;
    document.body.appendChild(notif);
    
    setTimeout(() => {
        notif.style.animation = 'slideOut 0.3s';
        setTimeout(() => notif.remove(), 300);
    }, 3000);
}

function openProductModal(productId) {
    const product = sampleProducts.find(p => p.id === productId);
    if (!product) return;
    
    alert(`${product.name}\n\n₦${product.price}\n\n${product.description}\n\nAdded to cart!`);
    addToCart(product.id, product.name, product.price);
}

function setupNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = form.querySelector('input[type="email"]').value;
        alert(`Thanks for subscribing with ${email}!`);
        form.reset();
    });
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Update cart on page load
updateCartBadge();
