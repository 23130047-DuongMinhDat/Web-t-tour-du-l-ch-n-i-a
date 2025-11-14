// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});


document.querySelectorAll('.comment-form').forEach(form => {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Bình luận của bạn đã được gửi!');
        form.reset();
    });
});


//Form tìm kiếm
const searchForm = document.getElementById('searchForm');
if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = document.getElementById('searchInput')?.value.trim() || '';
        alert('Tìm kiếm: ' + query);
    });
}

// Hiển thị đúng 1 blog
document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const validIds = ['tips-vietnam', 'food-street', 'sapa', 'halong-cruise', 'hoian', 'budget-travel'];
    const defaultId = 'tips-vietnam';

    // Ẩn tất cả section
    document.querySelectorAll('.blog-detail-section').forEach(sec => {
        sec.style.display = 'none';
    });

    // Xác định ID cần hiển thị
    const showId = validIds.includes(id) ? id : defaultId;
    const targetSection = document.querySelector(`.blog-detail-section[data-id="${showId}"]`);

    if (targetSection) {
        // Hiện bài viết
        targetSection.style.display = 'block';

        // Cập nhật title trang
        const title = targetSection.querySelector('h1')?.innerText;
        if (title) {
            document.title = title + ' - VietTravel';
        }

        // Cuộn lên đầu trang
        window.scrollTo({ top: 0, behavior: 'smooth' });

        // Chen Sidebả
        const layout = targetSection.querySelector('.blog-layout');
        if (layout && !layout.querySelector('.blog-sidebar')) {
            const template = document.getElementById('blogSidebarTemplate');
            if (template) {
                const clone = template.content.cloneNode(true);
                layout.appendChild(clone);
            }
        }

        // Highlight menu điều hướng
        document.querySelectorAll('.blog-navigation a').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${showId}`) {
                link.classList.add('active');
            }
        });
    }
});