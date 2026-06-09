// Admin Panel - Main Dashboard
const adminPassword = "WMPKD2026"; // Change this to a secure password
let isAdminLoggedIn = false;

document.addEventListener('DOMContentLoaded', function() {
    checkAdminLogin();
});

function checkAdminLogin() {
    const loginStatus = sessionStorage.getItem('adminLoggedIn');
    if (!loginStatus) {
        showLoginForm();
    } else {
        isAdminLoggedIn = true;
        showAdminPanel();
    }
}

function showLoginForm() {
    document.body.innerHTML = `
        <div class="admin-login">
            <div class="login-container">
                <h1>WMPKD Admin Panel</h1>
                <form onsubmit="handleAdminLogin(event)">
                    <div class="form-group">
                        <label for="password">Admin Password:</label>
                        <input type="password" id="password" required autofocus>
                    </div>
                    <button type="submit" class="btn btn-primary">Login</button>
                </form>
            </div>
        </div>

        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }
            
            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
                min-height: 100vh;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            
            .admin-login {
                width: 100%;
                padding: 20px;
            }
            
            .login-container {
                background: white;
                padding: 40px;
                border-radius: 10px;
                box-shadow: 0 10px 40px rgba(0, 0, 0, 0.2);
                max-width: 400px;
                margin: 0 auto;
                text-align: center;
            }
            
            .login-container h1 {
                color: #FF6B6B;
                margin-bottom: 30px;
            }
            
            .form-group {
                margin-bottom: 20px;
                text-align: left;
            }
            
            .form-group label {
                display: block;
                margin-bottom: 8px;
                font-weight: 600;
                color: #333;
            }
            
            .form-group input {
                width: 100%;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
                font-size: 16px;
            }
            
            .btn {
                width: 100%;
                padding: 12px;
                background: #FF6B6B;
                color: white;
                border: none;
                border-radius: 5px;
                font-size: 16px;
                font-weight: 600;
                cursor: pointer;
                transition: background 0.3s;
            }
            
            .btn:hover {
                background: #ff5252;
            }
        </style>
    `;
}

function handleAdminLogin(event) {
    event.preventDefault();
    const password = document.getElementById('password').value;
    
    if (password === adminPassword) {
        sessionStorage.setItem('adminLoggedIn', 'true');
        isAdminLoggedIn = true;
        showAdminPanel();
    } else {
        alert('Invalid password!');
        document.getElementById('password').value = '';
    }
}

function showAdminPanel() {
    document.body.innerHTML = `
        <div class="admin-panel">
            <nav class="admin-nav">
                <div class="nav-brand">
                    <h2>WMPKD Admin</h2>
                </div>
                <ul class="nav-menu">
                    <li><a href="#" onclick="switchTab('dashboard')">Dashboard</a></li>
                    <li><a href="#" onclick="switchTab('products')">Manage Products</a></li>
                    <li><a href="#" onclick="switchTab('orders')">Orders</a></li>
                    <li><a href="#" onclick="switchTab('users')">Users</a></li>
                    <li><a href="#" onclick="switchTab('income')">Income</a></li>
                    <li><a href="#" onclick="logout()" class="logout">Logout</a></li>
                </ul>
            </nav>

            <div class="admin-content">
                <!-- Dashboard Tab -->
                <div id="dashboard" class="tab-content active">
                    <h1>Dashboard</h1>
                    <div class="stats-grid">
                        <div class="stat-card">
                            <h3>Total Orders</h3>
                            <p class="stat-number" id="total-orders">0</p>
                        </div>
                        <div class="stat-card">
                            <h3>Total Users</h3>
                            <p class="stat-number" id="total-users">0</p>
                        </div>
                        <div class="stat-card">
                            <h3>Total Products</h3>
                            <p class="stat-number" id="total-products">0</p>
                        </div>
                        <div class="stat-card">
                            <h3>Total Income</h3>
                            <p class="stat-number" id="total-income">₦0</p>
                        </div>
                    </div>
                </div>

                <!-- Products Tab -->
                <div id="products" class="tab-content">
                    <h1>Manage Products</h1>
                    <button class="btn btn-primary" onclick="showAddProductForm()">Add New Product</button>
                    <div id="product-form" style="display:none; margin-top: 20px; background: #f9f9f9; padding: 20px; border-radius: 8px;">
                        <h3>Add Product</h3>
                        <form onsubmit="handleAddProduct(event)">
                            <div class="form-group">
                                <label>Product Name</label>
                                <input type="text" id="product-name" required>
                            </div>
                            <div class="form-group">
                                <label>Price</label>
                                <input type="number" id="product-price" required>
                            </div>
                            <div class="form-group">
                                <label>Category</label>
                                <select id="product-category">
                                    <option value="cookies">Cookies</option>
                                    <option value="cakes">Cakes</option>
                                    <option value="pastries">Pastries</option>
                                    <option value="energy-bars">Energy Bars</option>
                                    <option value="chips">Chips</option>
                                </select>
                            </div>
                            <div class="form-group">
                                <label>Description</label>
                                <textarea id="product-description"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Add Product</button>
                            <button type="button" class="btn" onclick="document.getElementById('product-form').style.display='none'">Cancel</button>
                        </form>
                    </div>
                    <div id="products-list" style="margin-top: 20px;"></div>
                </div>

                <!-- Orders Tab -->
                <div id="orders" class="tab-content">
                    <h1>Customer Orders</h1>
                    <div id="orders-list"></div>
                </div>

                <!-- Users Tab -->
                <div id="users" class="tab-content">
                    <h1>Customers</h1>
                    <div id="users-list"></div>
                </div>

                <!-- Income Tab -->
                <div id="income" class="tab-content">
                    <h1>Income Report</h1>
                    <div id="income-report"></div>
                </div>
            </div>
        </div>

        <style>
            * {
                margin: 0;
                padding: 0;
                box-sizing: border-box;
            }

            body {
                font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                background: #f5f5f5;
            }

            .admin-panel {
                display: flex;
                min-height: 100vh;
            }

            .admin-nav {
                width: 250px;
                background: linear-gradient(135deg, #FF6B6B 0%, #4ECDC4 100%);
                color: white;
                padding: 20px;
                position: fixed;
                height: 100vh;
                overflow-y: auto;
                left: 0;
                top: 0;
            }

            .nav-brand h2 {
                margin-bottom: 30px;
            }

            .nav-menu {
                list-style: none;
            }

            .nav-menu li {
                margin-bottom: 10px;
            }

            .nav-menu a {
                color: white;
                text-decoration: none;
                display: block;
                padding: 10px;
                border-radius: 5px;
                transition: background 0.3s;
                cursor: pointer;
            }

            .nav-menu a:hover {
                background: rgba(255, 255, 255, 0.2);
            }

            .nav-menu a.logout {
                margin-top: 20px;
                background: rgba(0, 0, 0, 0.2);
            }

            .admin-content {
                margin-left: 250px;
                flex: 1;
                padding: 30px;
            }

            .tab-content {
                display: none;
            }

            .tab-content.active {
                display: block;
            }

            .tab-content h1 {
                margin-bottom: 20px;
                color: #333;
            }

            .stats-grid {
                display: grid;
                grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                gap: 20px;
                margin-bottom: 20px;
            }

            .stat-card {
                background: white;
                padding: 20px;
                border-radius: 8px;
                box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
            }

            .stat-card h3 {
                color: #666;
                font-size: 14px;
                margin-bottom: 10px;
            }

            .stat-number {
                font-size: 28px;
                font-weight: bold;
                color: #FF6B6B;
            }

            .btn {
                padding: 10px 20px;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                font-weight: 600;
                transition: all 0.3s;
                margin-bottom: 10px;
            }

            .btn-primary {
                background: #FF6B6B;
                color: white;
            }

            .btn-primary:hover {
                background: #ff5252;
            }

            .form-group {
                margin-bottom: 15px;
            }

            .form-group label {
                display: block;
                margin-bottom: 5px;
                font-weight: 600;
                color: #333;
            }

            .form-group input,
            .form-group textarea,
            .form-group select {
                width: 100%;
                padding: 10px;
                border: 1px solid #ddd;
                border-radius: 5px;
                font-family: inherit;
            }

            .form-group textarea {
                resize: vertical;
                min-height: 100px;
            }

            @media (max-width: 768px) {
                .admin-nav {
                    width: 100%;
                    height: auto;
                    position: static;
                }

                .nav-menu {
                    display: flex;
                    flex-wrap: wrap;
                    gap: 10px;
                }

                .nav-menu li {
                    margin-bottom: 0;
                }

                .admin-content {
                    margin-left: 0;
                    padding: 15px;
                }
            }
        </style>
    `;

    loadAdminData();
}

function switchTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));

    // Show selected tab
    const selectedTab = document.getElementById(tabName);
    if (selectedTab) {
        selectedTab.classList.add('active');
    }

    // Load data for the tab
    if (tabName === 'orders') loadOrders();
    if (tabName === 'users') loadUsers();
    if (tabName === 'income') loadIncomeReport();
}

function loadAdminData() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const products = JSON.parse(localStorage.getItem('products')) || [];

    // Calculate stats
    const totalOrders = orders.length;
    const totalUsers = new Set(orders.map(o => o.email)).size;
    const totalProducts = products.length;
    const totalIncome = orders.reduce((sum, o) => sum + o.total, 0);

    document.getElementById('total-orders').textContent = totalOrders;
    document.getElementById('total-users').textContent = totalUsers;
    document.getElementById('total-products').textContent = totalProducts;
    document.getElementById('total-income').textContent = '₦' + totalIncome.toLocaleString();

    loadProducts();
}

function showAddProductForm() {
    document.getElementById('product-form').style.display = 'block';
}

function handleAddProduct(event) {
    event.preventDefault();
    
    const name = document.getElementById('product-name').value;
    const price = document.getElementById('product-price').value;
    const category = document.getElementById('product-category').value;
    const description = document.getElementById('product-description').value;

    const products = JSON.parse(localStorage.getItem('products')) || [];
    const newProduct = {
        id: Date.now(),
        name,
        price: parseInt(price),
        category,
        description,
        createdAt: new Date().toISOString()
    };

    products.push(newProduct);
    localStorage.setItem('products', JSON.stringify(products));

    alert('Product added successfully!');
    document.getElementById('product-form').style.display = 'none';
    document.getElementById('product-form').reset();
    loadProducts();
    loadAdminData();
}

function loadProducts() {
    const products = JSON.parse(localStorage.getItem('products')) || [];
    const list = document.getElementById('products-list');
    
    if (!list) return;

    list.innerHTML = '<h3>Products List</h3>';
    
    if (products.length === 0) {
        list.innerHTML += '<p>No products added yet</p>';
        return;
    }

    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.style.cssText = 'background: white; padding: 15px; margin: 10px 0; border-radius: 5px; display: flex; justify-content: space-between; align-items: center;';
        productDiv.innerHTML = `
            <div>
                <strong>${product.name}</strong><br>
                <small>Category: ${product.category} | Price: ₦${product.price}</small>
            </div>
            <button class="btn" onclick="deleteProduct(${product.id})">Delete</button>
        `;
        list.appendChild(productDiv);
    });
}

function deleteProduct(productId) {
    if (confirm('Are you sure you want to delete this product?')) {
        let products = JSON.parse(localStorage.getItem('products')) || [];
        products = products.filter(p => p.id !== productId);
        localStorage.setItem('products', JSON.stringify(products));
        loadProducts();
        loadAdminData();
    }
}

function loadOrders() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const list = document.getElementById('orders-list');
    
    if (!list) return;

    list.innerHTML = '';
    
    if (orders.length === 0) {
        list.innerHTML = '<p>No orders yet</p>';
        return;
    }

    orders.forEach(order => {
        const orderDiv = document.createElement('div');
        orderDiv.style.cssText = 'background: white; padding: 15px; margin: 10px 0; border-radius: 5px;';
        let itemsHTML = '<strong>Items:</strong><br>';
        order.items.forEach(item => {
            itemsHTML += `• ${item.name} x${item.quantity}<br>`;
        });
        
        orderDiv.innerHTML = `
            <strong>${order.name}</strong> - ${order.email}<br>
            <small>Phone: ${order.phone} | Address: ${order.address}</small><br>
            ${itemsHTML}
            <small>Total: ₦${order.total.toLocaleString()} | Date: ${new Date(order.date).toLocaleDateString()}</small>
        `;
        list.appendChild(orderDiv);
    });
}

function loadUsers() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const list = document.getElementById('users-list');
    
    if (!list) return;

    // Get unique users
    const users = {};
    orders.forEach(order => {
        if (!users[order.email]) {
            users[order.email] = {
                name: order.name,
                email: order.email,
                phone: order.phone,
                address: order.address,
                orders: 0,
                totalSpent: 0
            };
        }
        users[order.email].orders++;
        users[order.email].totalSpent += order.total;
    });

    list.innerHTML = '';
    
    if (Object.keys(users).length === 0) {
        list.innerHTML = '<p>No users yet</p>';
        return;
    }

    Object.values(users).forEach(user => {
        const userDiv = document.createElement('div');
        userDiv.style.cssText = 'background: white; padding: 15px; margin: 10px 0; border-radius: 5px;';
        userDiv.innerHTML = `
            <strong>${user.name}</strong><br>
            <small>Email: ${user.email} | Phone: ${user.phone}</small><br>
            <small>Address: ${user.address}</small><br>
            <small>Orders: ${user.orders} | Total Spent: ₦${user.totalSpent.toLocaleString()}</small>
        `;
        list.appendChild(userDiv);
    });
}

function loadIncomeReport() {
    const orders = JSON.parse(localStorage.getItem('orders')) || [];
    const report = document.getElementById('income-report');
    
    if (!report) return;

    const totalIncome = orders.reduce((sum, o) => sum + o.total, 0);
    const totalSubtotal = orders.reduce((sum, o) => sum + o.subtotal, 0);
    const totalDeliveryFee = orders.length * 500;

    report.innerHTML = `
        <div style="background: white; padding: 20px; border-radius: 8px;">
            <h3>Income Summary</h3>
            <p><strong>Total Orders:</strong> ${orders.length}</p>
            <p><strong>Total Subtotal:</strong> ₦${totalSubtotal.toLocaleString()}</p>
            <p><strong>Total Delivery Fees:</strong> ₦${totalDeliveryFee.toLocaleString()}</p>
            <hr style="margin: 15px 0;">
            <h2 style="color: #FF6B6B;">Total Income: ₦${totalIncome.toLocaleString()}</h2>
        </div>
    `;
}

function logout() {
    sessionStorage.removeItem('adminLoggedIn');
    window.location.reload();
}
