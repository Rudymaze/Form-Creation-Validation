document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registration-form");
  const feedbackDiv = document.getElementById("form-feedback");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    let isValid = true;
    let message = [];

    const usernameInput = document.getElementById("username");
    const username = usernameInput.value.trim();
    if (username.length < 3) {
      message.push("Username must be at least 3 characters long.");
      isValid = false;
    }

    const emailInput = document.getElementById("email");
    const email = emailInput.value.trim();
    if (!email.incudes("@") || !email.includes(".")) {
      message.push("Email must contain both '@' and '.' characters.");
      isValid = false;
    }

    const passwordInput = document.getElementById("password");
    const password = passwordInput.value.trim();
    if (password.length < 8) {
      message.push("Password must be at least 8 characters long.");
      isValid = false;
    }
  });
});
