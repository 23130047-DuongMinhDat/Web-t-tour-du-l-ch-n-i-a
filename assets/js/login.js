"use strict";

const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", async (e) => {
    e.preventDefault(); // prevent the default form submission

    const email = loginForm.querySelector("#email").value;
    const password = loginForm.querySelector("#password").value;

    if (email === "" || password === "") {
        alert("Please fill in all fields");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
    }

    try {

        // Use users in users.json for static
        const result = await fetch("../data/users.json");
        const users = await result.json(); // Parse the JSON data

        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert("Login successful");
            window.location.href = "../../html/index.html"; // Redirect to the home page
        } else {
            alert("User not found");
        }


    } catch (error) {
        console.error("Error when fetch user data:", error);
    }
});

// Toggle password visibility on click
document.addEventListener("DOMContentLoaded", () => {
    const togglePassword = document.querySelector(".toggle-pass");
    const passwordInput = document.querySelector("#password");

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener("click", () => {
            const isHidden = passwordInput.type === "password";
            passwordInput.type = isHidden ? "text" : "password";

            togglePassword.classList.toggle("fa-eye", isHidden);
            togglePassword.classList.toggle("fa-eye-slash", !isHidden);
        });
    }
});