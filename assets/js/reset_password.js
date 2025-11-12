"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('#forgotForm');
    const message = document.querySelector('#message');
    const button = form.querySelector('.btn');

    form.addEventListener('submit', e => {
        e.preventDefault();

        // Giả lập "đang gửi" để UX mượt hơn
        button.disabled = true;
        button.textContent = "Đang gửi...";

        setTimeout(() => {
            message.textContent = "Nếu email tồn tại, hướng dẫn khôi phục sẽ được gửi đến hộp thư của bạn.";
            message.style.color = "#007700";
            button.disabled = false;
            button.textContent = "Gửi yêu cầu";
            form.reset();
        }, 1200);
    });
});
