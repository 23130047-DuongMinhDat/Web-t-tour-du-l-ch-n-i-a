// Khởi tạo AOS
AOS.init({ duration: 800, once: true });

// Toggle FAQ
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', () => q.parentElement.classList.toggle('active'));
    });
});
