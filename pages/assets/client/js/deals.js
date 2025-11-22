
// Khởi tạo AOS
AOS.init({
    duration: 800,
    easing: 'ease-out-quart',
    once: true,
    offset: 80
});

// Format thời gian
function formatTime(endTime) {
    const now = Date.now();
    const distance = now - endTime;

    if (distance < 0) return "Đã hết hạn";

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    return `${days} ngày ${hours} giờ ${minutes} phút`;
}

// Cập nhật timer
function updateTimers() {
    const timers = document.querySelectorAll('.deal-timer .time');
    if (timers.length === 0) return;

    const update = () => {
        timers.forEach(timer => {
            const endTime = parseInt(timer.dataset.endtime, 10);
            if (endTime) {
                timer.textContent = formatTime(endTime);
            }
        });
    };

    update(); // Cập nhật ngay
    setInterval(update, 60000); // Cập nhật mỗi phút
}

// Lọc theo danh mục
function filterByCategory(category) {
    const cards = document.querySelectorAll('.deal-card');
    let visible = 0;

    cards.forEach(card => {
        if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'block';
            visible++;
        } else {
            card.style.display = 'none';
        }
    });

    const msg = document.getElementById('noResults');
    if (!msg && visible === 0) {
        const div = document.createElement('div');
        div.id = 'noResults';
        div.textContent = 'Không tìm thấy ưu đãi nào.';
        div.style.cssText = 'grid-column:1/-1; text-align:center; padding:40px; color:#999; font-size:18px;';
        document.querySelector('.deals-grid').appendChild(div);
    } else if (msg && visible > 0) {
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
        if (!term || text.includes(term)) {
            card.style.display = 'block';
            visible++;
        } else {
            card.style.display = 'none';
        }
    });

    filterByCategory('all'); // Reset filter
    document.querySelector('.filter-btn.active')?.classList.remove('active');
    document.querySelector('.filter-btn[data-category="all"]')?.classList.add('active');
}

// Đặt tour
function bookTour(id) {
    if (confirm('Xác nhận đặt tour này?')) {
        alert('Chuyển đến thanh toán...');
    }
}

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    // Filter
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

    // AOS refresh
    const observer = new MutationObserver(() => setTimeout(() => AOS.refresh(), 100));
    observer.observe(document.querySelector('.deals-grid'), { childList: true, subtree: true });

    console.log('Deals JS loaded - Timer OK');
});