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

// Cart
let cart = JSON.parse(localStorage.getItem('wmpkd-cart')) || [];

function updateCartCount() {
  const el = document.getElementById('cart-count');
  if (el) el.textContent = cart.reduce((sum, item) => sum + (item.qty || 1), 0);
}

function addToCart(product) {
  if (!product || !product.name) return alert("Invalid product");
  
  const existing = cart.find(i => i.id === product.id);
  if (existing) {
    existing.qty = (existing.qty || 1) + 1;
  } else {
    cart.push({ ...product, qty: 1 });
  }
  
  localStorage.setItem('wmpkd-cart', JSON.stringify(cart));
  updateCartCount();
  
  // Notification
  const toast = document.createElement('div');
  toast.className = "fixed bottom-6 left-1/2 -translate-x-1/2 bg-green-600 text-white px-6 py-3 rounded-2xl shadow-2xl flex items-center gap-3 z-50";
  toast.innerHTML = `✅ ${product.name} added to cart!`;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2500);
}

window.addToCart = addToCart;
window.updateCartCount = updateCartCount;
