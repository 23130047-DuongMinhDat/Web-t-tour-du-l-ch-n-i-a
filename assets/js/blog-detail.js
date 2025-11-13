// blog-detail.js

// Initialize AOS
AOS.init({
    duration: 1000,
    once: true
});

// Comment Form Submission (dummy for all forms)
const commentForms = document.querySelectorAll('.comment-form');
commentForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Bình luận của bạn đã được gửi!');
        form.reset();
    });
});

// Back to Top
const backToTop = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Newsletter Form (dummy)
const newsletterForm = document.getElementById('newsletterForm');
if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Đăng ký bản tin thành công!');
        newsletterForm.reset();
    });
}

// Search Form (dummy)
const searchForm = document.getElementById('searchForm');
if (searchForm) {
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Tìm kiếm: ' + document.getElementById('searchInput').value);
    });
}

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const validIds = ['tips-vietnam','food-street','sapa','halong-cruise','hoian','budget-travel'];
    const defaultId = 'tips-vietnam';

    document.querySelectorAll('.blog-detail-section').forEach(sec => sec.style.display = 'none');

    const showId = validIds.includes(id) ? id : defaultId;
    const target = document.querySelector(`.blog-detail-section[data-id="${showId}"]`);
    if (target) {
        target.style.display = 'block';
        document.title = target.querySelector('h1').innerText + ' - VietTravel';
        window.scrollTo({top: 0, behavior: 'smooth'});
    }

    // Highlight menu
    document.querySelectorAll('.blog-navigation a').forEach(a => {
        a.classList.remove('active');
        if (a.getAttribute('href') === `#${showId}`) a.classList.add('active');
    });
});