
AOS.init({ duration: 800, once: true });

// Mở/đóng câu hỏi FAQ
document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
        const item = btn.parentElement;
        item.classList.toggle('active');
    });
});