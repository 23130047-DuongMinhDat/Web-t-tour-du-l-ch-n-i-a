"use strict";

const registerForm = document.querySelector("#signup-form");

// Handle form
registerForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = registerForm.querySelector("#name").value.trim();
    const email = registerForm.querySelector("#email").value.trim();
    const password = registerForm.querySelector("#password").value;
    const confirmPassword = registerForm.querySelector("#confirm-password").value;


    if (name === "" || email === "" || password === "" || confirmPassword === "") {
        alert("Please fill in all fields!");
        return;
    }

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,30}$/;

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address!");
        return;
    }

    if (!passwordPattern.test(password)) {
        alert("Password must be at least 12 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one special character.");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    alert("Sign up successful!");
});

// Toggle password visibility on click
document.addEventListener("DOMContentLoaded", () => {

    function setupPasswordToggle(toggleId, inputId) {
        const toggleIcon = document.querySelector(toggleId);
        const inputField = document.querySelector(inputId);

        if (toggleIcon && inputField) {
            toggleIcon.addEventListener("click", () => {
                const isHidden = inputField.type === "password";
                inputField.type = isHidden ? "text" : "password";

                // Toggle current icon
                toggleIcon.classList.toggle("fa-eye", isHidden);
                toggleIcon.classList.toggle("fa-eye-slash", !isHidden);
            });
        }
    }

    // Setup toggle for password fields
    setupPasswordToggle("#toggle-password", "#password");

    // Setup toggle for confirm password field
    setupPasswordToggle("#toggle-confirm-password", "#confirm-password");
});