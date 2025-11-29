"use strict";

// Khởi tạo AOS
AOS.init({
    duration: 800,
    easing: 'ease-out-quart',
    once: true,
    offset: 80
});

// Format thời gian
function formatTime(endTime) {
    const distance = Date.now() - endTime;
    if (distance < 0) return "Đã hết hạn";

    const days = Math.floor(distance / 86400000);
    const hours = Math.floor((distance % 86400000) / 3600000);
    const minutes = Math.floor((distance % 3600000) / 60000);

    return `${days} ngày ${hours} giờ ${minutes} phút`;
}

// Cập nhật timer
function updateTimers() {
    const timers = document.querySelectorAll('.deal-timer .time');
    if (!timers.length) return;

    const update = () => {
        timers.forEach(timer => {
            const endTime = parseInt(timer.dataset.endtime, 10);
            if (endTime) timer.textContent = formatTime(endTime);
        });
    };

    update();
    setInterval(update, 60000);
}

// Lọc theo danh mục
function filterByCategory(category) {
    const cards = document.querySelectorAll('.deal-card');
    let visible = 0;

    cards.forEach(card => {
        const show = category === 'all' || card.dataset.category === category;
        card.style.display = show ? 'block' : 'none';
        if (show) visible++;
    });

    const msg = document.getElementById('noResults');
    if (!visible) {
        if (!msg) {
            const div = document.createElement('div');
            div.id = 'noResults';
            div.textContent = 'Không tìm thấy ưu đãi nào.';
            div.style.cssText = 'grid-column:1/-1; text-align:center; padding:40px; color:#999; font-size:18px;';
            document.querySelector('.deals-grid').appendChild(div);
        }
    } else if (msg) {
        msg.remove();
    }
}

// Tìm kiếm
function searchDeals() {
    const input = document.querySelector('.deals-sidebar .search-form input') || document.getElementById('searchInput');
    if (!input) return;

    const term = input.value.toLowerCase().trim();
    const cards = document.querySelectorAll('.deal-card');

    let visible = 0;
    cards.forEach(card => {
        const text = (card.querySelector('h3')?.textContent + ' ' + card.querySelector('p')?.textContent).toLowerCase();
        const show = !term || text.includes(term);
        card.style.display = show ? 'block' : 'none';
        if (show) visible++;
    });

    // Reset filter
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    const allBtn = document.querySelector('.filter-btn[data-category="all"]');
    if (allBtn) allBtn.classList.add('active');

    const msg = document.getElementById('noResults');
    if (!visible) {
        if (!msg) {
            const div = document.createElement('div');
            div.id = 'noResults';
            div.textContent = 'Không tìm thấy ưu đãi nào.';
            div.style.cssText = 'grid-column:1/-1; text-align:center; padding:40px; color:#999; font-size:18px;';
            document.querySelector('.deals-grid').appendChild(div);
        }
    } else if (msg) {
        msg.remove();
    }
}

// Đặt tour
function bookTour(id) {
    if (confirm('Xác nhận đặt tour này?')) {
        alert('Chuyển đến thanh toán...');
    }
}

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    // Filter theo danh mục
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            filterByCategory(btn.dataset.category);
        });
    });

    // Sidebar search
    const form = document.querySelector('.deals-sidebar .search-form');
    if (form) {
        form.addEventListener('submit', e => {
            e.preventDefault();
            searchDeals();
            document.querySelector('.deals-main')?.scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Timer
    updateTimers();

    // Refresh AOS khi DOM thay đổi
    const observer = new MutationObserver(() => setTimeout(() => AOS.refresh(), 100));
    observer.observe(document.querySelector('.deals-grid'), { childList: true, subtree: true });

    console.log('Deals JS loaded - Timer OK');
});
