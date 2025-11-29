AOS.init({ duration: 1000, once: true });

document.querySelectorAll('.comment-form').forEach(form => {
    form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Bình luận của bạn đã được gửi!');
        form.reset();
    });
});

const searchForm = document.getElementById('searchForm');
if (searchForm) {
    searchForm.addEventListener('submit', e => {
        e.preventDefault();
        const query = document.getElementById('searchInput')?.value.trim() || '';
        alert('Tìm kiếm: ' + query);
    });
}

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');
    const validIds = ['tips-vietnam','food-street','sapa','halong-cruise','hoian','budget-travel'];
    const defaultId = 'tips-vietnam';

    document.querySelectorAll('.blog-detail-section').forEach(sec => sec.style.display = 'none');

    const showId = validIds.includes(id) ? id : defaultId;
    const targetSection = document.querySelector(`.blog-detail-section[data-id="${showId}"]`);

    if (targetSection) {
        targetSection.style.display = 'block';
        const title = targetSection.querySelector('h1')?.innerText;
        if (title) document.title = title + ' - VietTravel';
        window.scrollTo({ top: 0, behavior: 'smooth' });

        const layout = targetSection.querySelector('.blog-layout');
        if (layout && !layout.querySelector('.blog-sidebar')) {
            const template = document.getElementById('blogSidebarTemplate');
            if (template) layout.appendChild(template.content.cloneNode(true));
        }

        document.querySelectorAll('.blog-navigation a').forEach(link => {
            link.classList.toggle('active', link.getAttribute('href') === `#${showId}`);
        });
    }
});
