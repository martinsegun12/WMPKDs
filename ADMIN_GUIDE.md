# 📱 WMPKD Admin Panel - Quick Guide

## 🔐 Admin Access

### How to Access the Admin Panel:

1. **Go to your website admin URL:**
   - Local: `http://localhost/admin/index.html` (if running locally)
   - GitHub Pages: `https://martinsegun12.github.io/WMPKDs/admin/`

2. **Enter the Admin Password:**
   - Password: **`WMPKD2026`**
   - Click "Login"

---

## 📊 Admin Dashboard Features

### 1. **Dashboard Tab** 
   - View quick stats:
     - Total Orders
     - Total Users/Customers
     - Total Products Listed
     - Total Income (₦)

### 2. **Manage Products Tab**
   - **Add New Product:**
     - Click "Add New Product" button
     - Fill in:
       - Product Name (e.g., "Chinchin - Sweet")
       - Price (in Naira)
       - Category (Chinchin, Cookies, Cakes, Pastries, Chips)
       - Description
     - Click "Add Product"
   
   - **Delete Product:**
     - Click "Delete" button next to any product
     - Confirm the deletion

### 3. **Orders Tab**
   - View all customer orders with:
     - Customer name & email
     - Phone number & address
     - Items ordered (quantity & prices)
     - Total order amount
     - Order date

### 4. **Users Tab**
   - See all customers who placed orders:
     - Customer name & contact info
     - Number of orders placed
     - Total amount spent
     - Delivery address

### 5. **Income Tab**
   - Track your earnings:
     - Total orders placed
     - Total subtotal from products
     - Total delivery fees collected
     - **Total Income** (main figure to track)

---

## 🍪 Available Snacks to Add

Here are some Nigerian snacks you can add to your admin panel:

### Chinchin
- **Price Range:** ₦800-1000
- **Emojis:** 🍟, 🌶️
- **Varieties:** Sweet, Spicy, Coconut

### Cookies
- **Price Range:** ₦1000-1500
- **Emojis:** 🍪, 🥥
- **Varieties:** Butter, Coconut, Chocolate

### Cakes
- **Price Range:** ₦3000-5000
- **Emojis:** 🎂, 🍫
- **Varieties:** Vanilla, Chocolate, Carrot

### Pastries
- **Price Range:** ₦1500-2500
- **Emojis:** 🥐, 🥧
- **Varieties:** Sausage Roll, Meat Pie, Chicken Pie

### Energy Bars
- **Price Range:** ₦1200-1800
- **Emojis:** 🍫, 💪
- **Varieties:** Peanut, Honey, Mixed Nuts

---

## 💰 How Orders Work

1. **Customer Places Order:**
   - Customer browses snacks on homepage
   - Adds items to cart (Glovo-style sliding cart)
   - Clicks "Proceed to Checkout"
   - Fills delivery details

2. **Order Sent to WhatsApp:**
   - Order automatically sends to: **+234 904 326 8478**
   - Contains customer info + items + total amount

3. **Admin Tracks Order:**
   - Check "Orders" tab in admin panel
   - Prepare and deliver order
   - Mark as completed in your records

---

## 🎨 Customization

### Change Admin Password
1. Go to: `admin/admin.js`
2. Line 2: Change `"WMPKD2026"` to your new password

### Change WhatsApp Number
1. Go to: `js/checkout.js`
2. Line 2: Change `'2349043268478'` to your number (without +)

### Change Delivery Fee
1. Go to: `js/checkout.js`
2. Line 1: Change `500` to your new delivery fee

### Change Colors
1. Go to: `styles.css`
2. Lines 12-15: Update CSS colors:
   ```css
   --primary-color: #FF6B6B;        /* Main red */
   --secondary-color: #4ECDC4;      /* Cyan/teal */
   ```

---

## 📈 Tips for Success

✅ **Add Products Regularly** - Keep your menu fresh with new snacks  
✅ **Check Orders Daily** - Respond to WhatsApp orders promptly  
✅ **Monitor Income** - Track your earnings in the Income tab  
✅ **Build Customer Base** - Keep customer contact info for future marketing  
✅ **Get Feedback** - Use contact form messages to improve products  

---

## 🚀 Deployment Checklist

- [ ] GitHub Pages enabled in repository settings
- [ ] Admin password changed from default
- [ ] Products added to inventory
- [ ] WhatsApp number verified
- [ ] Delivery fee set correctly
- [ ] Site colors customized to brand
- [ ] Tested on mobile devices
- [ ] Shared link with friends at UNIBEN

---

## 📞 Contact Information

**Admin Access:** https://martinsegun12.github.io/WMPKDs/admin/  
**Main Site:** https://martinsegun12.github.io/WMPKDs/  
**WhatsApp:** +234 904 326 8478  
**Email:** support@wmpkd.com  

---

## ⚠️ Important Notes

- All data is stored locally in browser storage (localStorage)
- To backup data, periodically save the Orders list
- Consider connecting to Firebase for cloud storage (see firebase-config.js)
- Keep admin password secure and don't share it publicly
- Test new features on local version before going live

---

**Last Updated:** June 2026  
**WMPKD - Premium Handmade Snacks** 🍪
