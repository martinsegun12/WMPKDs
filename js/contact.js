// Contact Page JavaScript
document.addEventListener('DOMContentLoaded', function() {
    setupContactForm();
});

function setupContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        submitContactForm();
    });
}

function submitContactForm() {
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const subject = document.getElementById('subject').value.trim();
    const message = document.getElementById('message').value.trim();
    const messageDiv = document.getElementById('form-message');

    if (!name || !email || !subject || !message) {
        showMessage('Please fill in all fields', 'error', messageDiv);
        return;
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        showMessage('Please enter a valid email address', 'error', messageDiv);
        return;
    }

    // Save contact message to localStorage
    const contacts = JSON.parse(localStorage.getItem('contact_messages')) || [];
    contacts.push({
        id: Date.now(),
        name,
        email,
        subject,
        message,
        date: new Date().toISOString(),
        read: false
    });
    localStorage.setItem('contact_messages', JSON.stringify(contacts));

    // Send to WhatsApp as alternative
    const whatsappMessage = `New Contact Message:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;
    console.log('Contact message saved:', { name, email, subject, message });

    showMessage('Thank you! Your message has been received. We will get back to you soon.', 'success', messageDiv);
    document.getElementById('contact-form').reset();

    // Clear message after 5 seconds
    setTimeout(() => {
        messageDiv.classList.remove('success');
        messageDiv.style.display = 'none';
    }, 5000);
}

function showMessage(text, type, element) {
    if (!element) return;
    
    element.textContent = text;
    element.className = `form-message ${type}`;
    element.style.display = 'block';
}
