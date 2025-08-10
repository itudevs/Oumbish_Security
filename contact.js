document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formFields = {
        name: document.getElementById('name'),
        email: document.getElementById('email'),
        subject: document.getElementById('subject'),
        message: document.getElementById('message')
    };

    // Form validation
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email.toLowerCase());
    }

    function showError(element, message) {
        const currentError = element.parentElement.querySelector('.error-message');
        if (currentError) {
            currentError.remove();
        }

        const errorDiv = document.createElement('div');
        errorDiv.className = 'error-message text-red-500 text-sm mt-1';
        errorDiv.textContent = message;
        element.parentElement.appendChild(errorDiv);
        element.classList.add('border-red-500');
    }

    function clearError(element) {
        const currentError = element.parentElement.querySelector('.error-message');
        if (currentError) {
            currentError.remove();
        }
        element.classList.remove('border-red-500');
    }

    // Form submission handler
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        let isValid = true;

        // Clear previous errors
        Object.values(formFields).forEach(field => clearError(field));

        // Validate name
        if (formFields.name.value.trim().length < 2) {
            showError(formFields.name, 'Name must be at least 2 characters long');
            isValid = false;
        }

        // Validate email
        if (!validateEmail(formFields.email.value)) {
            showError(formFields.email, 'Please enter a valid email address');
            isValid = false;
        }

        // Validate subject
        if (formFields.subject.value.trim().length < 3) {
            showError(formFields.subject, 'Subject must be at least 3 characters long');
            isValid = false;
        }

        // Validate message
        if (formFields.message.value.trim().length < 10) {
            showError(formFields.message, 'Message must be at least 10 characters long');
            isValid = false;
        }

        if (isValid) {
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded shadow-lg transform transition-all duration-500 ease-in-out';
            successMessage.textContent = 'Message sent successfully!';
            document.body.appendChild(successMessage);

            // Clear form
            contactForm.reset();

            // Remove success message after 3 seconds
            setTimeout(() => {
                successMessage.remove();
            }, 3000);

            // Here you would typically send the form data to your server
            console.log('Form submitted with:', {
                name: formFields.name.value,
                email: formFields.email.value,
                subject: formFields.subject.value,
                message: formFields.message.value
            });
        }
    });

    // Real-time validation
    Object.entries(formFields).forEach(([key, field]) => {
        field.addEventListener('input', function() {
            clearError(field);
        });
    });
});