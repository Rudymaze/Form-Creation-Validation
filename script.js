document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;
    let message = [];

    // USERNAME ELENMENT AND INPUT FIELD
    const usernameInput = document.getElementById("username");
    const username = usernameInput.value.trim();
    if (username.length < 3) {
      message.push("Username must be at least 3 characters long.");
      isValid = false;
    }

    // EMAIL ELEMENT AND INPUT FIELD
    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();
    if (!email.incudes("@") || !email.includes(".")) {
      message.push("Email must contain both '@' and '.' characters.");
      isValid = false;
    }

    // PASSWORD ELEMENT AND INPUT FIELD
    const passwordInput = document.getElementById("password");
    const password = passwordInput.value.trim();
    if (password.length < 8) {
      message.push("Password must be at least 8 characters long.");
      isValid = false;
    }

    feedbackDiv.style.display = "block";

    if (isValid) {
      // Success message
      feedbackDiv.textContent = "Registration successful!";
      feedbackDiv.style.color = "#28a745"; // Green color for success
    } else {
      feedbackDiv.innerHTML = messages.join("<br>");
      feedbackDiv.style.color = "#dc3545"; // Red color for errors
    }
  });
  form.addEventListener("submit", form);
});
