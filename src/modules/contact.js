export function createContactPage() {
    return `
    <div class="contact-page">
        <h1>Contact Us</h1>
        <p>Email: info@naijakitchen.com</p>
        <p>Phone: +234 123 456 7890</p>
        <p>Address: 123 Naija Street, warri, Delta State, Nigeria</p>
        <p>We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.</p>
        <p>If you have any questions or inquiries, please feel free to reach out to us using the contact form below:</p>
        <form id="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Send Message</button>
        </form>
    </div>  
    `;
}