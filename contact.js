document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");
  const formFields = {
    name: document.getElementById("name"),
    email: document.getElementById("email"),
    subject: document.getElementById("subject"),
    message: document.getElementById("message"),
  };

  // Form validation
  function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email.toLowerCase());
  }

  function showError(element, message) {
    const currentError = element.parentElement.querySelector(".error-message");
    if (currentError) {
      currentError.remove();
    }

    const errorDiv = document.createElement("div");
    errorDiv.className = "error-message text-red-500 text-sm mt-1";
    errorDiv.textContent = message;
    element.parentElement.appendChild(errorDiv);
    element.classList.add("border-red-500");
  }

  function clearError(element) {
    const currentError = element.parentElement.querySelector(".error-message");
    if (currentError) {
      currentError.remove();
    }
    element.classList.remove("border-red-500");
  }

  // Form submission handler
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    let isValid = true;

    // Clear previous errors
    Object.values(formFields).forEach((field) => clearError(field));

    // Validate name
    if (formFields.name.value.trim().length < 2) {
      showError(formFields.name, "Name must be at least 2 characters long");
      isValid = false;
    }

    // Validate email
    if (!validateEmail(formFields.email.value)) {
      showError(formFields.email, "Please enter a valid email address");
      isValid = false;
    }

    // Validate subject
    if (formFields.subject.value.trim().length < 3) {
      showError(
        formFields.subject,
        "Subject must be at least 3 characters long",
      );
      isValid = false;
    }

    // Validate message
    if (formFields.message.value.trim().length < 10) {
      showError(
        formFields.message,
        "Message must be at least 10 characters long",
      );
      isValid = false;
    }

    if (isValid) {
      // Disable submit button and show loading state
      const submitButton = contactForm.querySelector('button[type="submit"]');
      const originalButtonText = submitButton ? submitButton.textContent : "";
      if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = "Sending...";
      }

      // Create FormData object
      const formData = new FormData();
      formData.append("name", formFields.name.value);
      formData.append("email", formFields.email.value);
      formData.append("subject", formFields.subject.value);
      formData.append("message", formFields.message.value);

      // Send data to PHP backend
      fetch("./contact.php", {
        method: "POST",
        body: formData,
      })
        .then((response) => {
          if (!response.ok) {
            return response.text().then((text) => {
              throw new Error(text || "Failed to send message");
            });
          }
          return response.text();
        })
        .then((data) => {
          if (data.trim() === "OK") {
            // Set flag in sessionStorage to allow access to message-sent page
            sessionStorage.setItem("formSubmitted", "true");

            // Redirect to success page
            window.location.href = "./message-sent.html";
          } else {
            throw new Error("Unexpected response from server");
          }
        })
        .catch((error) => {
          // Show error message
          const errorDiv = document.createElement("div");
          errorDiv.className =
            "fixed top-4 right-4 bg-red-500 text-white px-6 py-3 rounded shadow-lg z-50";
          errorDiv.textContent = "Error: " + error.message;
          document.body.appendChild(errorDiv);

          // Remove error message after 5 seconds
          setTimeout(() => {
            errorDiv.remove();
          }, 5000);

          // Re-enable submit button
          if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = originalButtonText;
          }

          console.error("Form submission error:", error);
        });
    }
  });

  // Real-time validation
  Object.entries(formFields).forEach(([key, field]) => {
    field.addEventListener("input", function () {
      clearError(field);
    });
  });
});
