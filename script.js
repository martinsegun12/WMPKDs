// Firebase Config
firebase.initializeApp({
  apiKey: "AIzaSyDStRWH7a248AedeRgLVRHwmV4u5jpycFM",
  authDomain: "winnes-collection.firebaseapp.com",
  projectId: "winnes-collection",
  storageBucket: "winnes-collection.firebasestorage.app",
  messagingSenderId: "244146153485",
  appId: "1:244146153485:web:effc3faa893370db8b8d44"
});

const db = firebase.firestore();

// Cart Management
let cart = JSON.parse(localStorage.getItem('wmpkd-cart')) || [];

// Update cart count in navbar
function updateCartCount() {
  const countEl = document.getElementById('cart-count');
  if (countEl) {
    const totalItems = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
    countEl.textContent = totalItems;
  }
}

// Add to Cart with notification
function addToCart(product) {
  if (!product || !product.name) {
    alert("Error: Invalid product");
    return;
  }

  const existing = cart.find(item => item.id === product.id);
  
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({
      ...product,
      qty: 1
    });
  }

  localStorage.setItem('wmpkd-cart', JSON.stringify(cart));
  updateCartCount();

  // Success notification
  const notification = document.createElement('div');
  notification.className = 'fixed bottom-6 left-1/2 transform -translate-x-1/2 bg-green-600 text-white px-8 py-4 rounded-2xl shadow-xl flex items-center gap-3 z-50';
  notification.innerHTML = `
    <i class="fas fa-check-circle text-2xl"></i>
    <span class="font-medium">${product.name} added to cart!</span>
  `;
  document.body.appendChild(notification);

  setTimeout(() => {
    notification.style.transition = 'all 0.4s';
    notification.style.opacity = '0';
    notification.style.transform = 'translate(-50%, 20px)';
    setTimeout(() => notification.remove(), 400);
  }, 2500);
}

// Make functions globally available
window.addToCart = addToCart;
window.updateCartCount = updateCartCount;
