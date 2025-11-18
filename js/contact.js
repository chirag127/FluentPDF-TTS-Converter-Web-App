// Contact form logic
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contactForm');
    const contactMessage = document.getElementById('contactMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value;

            // Since this is a static site, we'll just show a message
            // In a real implementation, you would send this to a backend or email service

            showMessage(
                `Thank you for your message, ${name}! Since this is a static website, ` +
                `please send your inquiry directly to support@spokablepdf.example.com or ` +
                `use one of the other contact methods listed below.`,
                'success'
            );

            // Reset form
            contactForm.reset();
        });
    }

    function showMessage(message, type) {
        contactMessage.textContent = message;
        contactMessage.className = 'message ' + type;
        contactMessage.style.display = 'block';

        // Scroll to message
        contactMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
});
