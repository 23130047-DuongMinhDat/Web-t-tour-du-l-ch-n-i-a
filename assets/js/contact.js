"use strict";

const contactForm = document.querySelector("#contact-form");

contactForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = contactForm.querySelector("#name").value;

    const email = contactForm.querySelector("#email").value;

    const subject = contactForm.querySelector("#subject").value;

    const message = contactForm.querySelector("#message").value;

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill in all fields");
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return;
    }

    alert("Message sent successfully!");
});