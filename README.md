# WMPKD E-Commerce Site

## Project Overview
A professional e-commerce website for WMPKD - a handmade snacks business run by a student at the University of Benin (UNIBEN).

## Features

### Frontend
- **Home Page**: Hero section, featured products, why choose us section, newsletter
- **About Page**: Business story, mission, vision, and core values
- **Products Page**: Browse all products with filters (search, category, price)
- **Checkout Page**: Shopping cart, order summary, delivery information form
- **Contact Page**: Contact information, contact form, FAQ section

### Admin Panel
- **Dashboard**: Overview stats (orders, users, products, income)
- **Manage Products**: Add, view, and delete products
- **Orders**: View all customer orders with details
- **Users**: See all customers and their purchase history
- **Income Report**: Track total revenue and income breakdown

### Integrations
- **Cloudinary**: Image hosting and management
  - Cloud Name: `dnk1ln0uh`
  - Upload Preset: `WMPKDSE`
- **Firebase**: Backend database and authentication
  - Project ID: `winnes-collection`
- **WhatsApp Integration**: Orders are sent directly to WhatsApp (+234 904 326 8478)

## File Structure

```
WMPKDs/
├── index.html              # Home page
├── about.html              # About page
├── products.html           # Products page
├── checkout.html           # Checkout page
├── contact.html            # Contact page
├── styles.css              # Main stylesheet
├── js/
│   ├── main.js            # Home page scripts
│   ├── products.js        # Products page scripts
│   ├── checkout.js        # Checkout and cart scripts
│   ├── contact.js         # Contact form scripts
│   └── firebase-config.js # Firebase & Cloudinary config
├── admin/
│   ├── index.html         # Admin panel main page
│   └── admin.js           # Admin panel scripts
└── README.md              # This file
```

## Getting Started

### Prerequisites
- Node.js (optional, for local development)
- A GitHub account for deployment

### Installation
1. Clone the repository
2. Edit the configuration in `js/firebase-config.js` if needed
3. Open `index.html` in your browser to view the site

### Admin Access
1. Navigate to `/admin/index.html`
2. Enter password: `WMPKD2026` (change this in `admin/admin.js`)
3. Access the admin dashboard to manage products, view orders, users, and income

## Deployment

### GitHub Pages
1. Go to repository settings
2. Under "Pages", set source to "main" branch
3. Your site will be available at: `https://martinsegun12.github.io/WMPKDs/`

## Usage

### Adding Products
1. Go to Admin Panel
2. Navigate to "Manage Products"
3. Click "Add New Product"
4. Fill in product details and click "Add Product"

### Processing Orders
1. Customers add items to cart from the products page
2. On checkout, they fill their delivery information
3. Order is automatically sent to WhatsApp via the registered number
4. Admin can view all orders in the Admin Panel

### Managing Finances
1. Go to Admin Panel
2. Click "Income" tab
3. View total income, delivery fees, and order summary

## Customization

### Change Admin Password
Edit `admin/admin.js` line 2:
```javascript
const adminPassword = "YourNewPassword";
```

### Change WhatsApp Number
Edit `js/checkout.js` line 2:
```javascript
const WHATSAPP_NUMBER = 'your_number_here'; // without +
```

### Change Delivery Fee
Edit `js/checkout.js` line 1:
```javascript
const DELIVERY_FEE = 1000; // your amount
```

### Modify Colors
Edit `styles.css` CSS variables at the top:
```css
--primary-color: #FF6B6B;
--secondary-color: #4ECDC4;
```

## Technologies Used
- HTML5
- CSS3
- Vanilla JavaScript
- Firebase (Backend)
- Cloudinary (Image Hosting)
- WhatsApp API (Order Notifications)

## Features Highlights
✅ Fully responsive design  
✅ Professional UI/UX  
✅ Shopping cart with local storage  
✅ Admin panel with authentication  
✅ WhatsApp order notifications  
✅ Income tracking  
✅ Customer management  
✅ Product filtering and search  

## Support
For issues or questions, contact: support@wmpkd.com  
Phone: +234 904 326 8478 (WhatsApp available)

## License
© 2026 WMPKD. All rights reserved.
