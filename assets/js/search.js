document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('search-input');
    const suggestions = document.getElementById('suggestions');
    const form = document.getElementById('search-form');
    const queryText = document.getElementById('query-text');
    const resultCount = document.querySelector('.result-count strong');
    const tourCards = document.querySelectorAll('.tour-card');

    // Danh sách từ khóa gợi ý
    const keywords = [
        'Hạ Long', 'Phú Quốc', 'Hội An', 'Đà Nẵng', 'Sapa',
        'Nha Trang', 'Huế', 'Mekong', 'Hà Giang'
    ];

    // === GỢI Ý TÌM KIẾM ===
    input.addEventListener('input', () => {
        const value = input.value.trim().toLowerCase();
        suggestions.innerHTML = '';

        if (value) {
            const matches = keywords.filter(k => k.toLowerCase().includes(value));
            matches.forEach(match => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.textContent = match;
                div.onclick = () => {
                    input.value = match;
                    suggestions.innerHTML = '';
                    form.submit();
                };
                suggestions.appendChild(div);
            });
            suggestions.style.display = matches.length ? 'block' : 'none';
        } else {
            suggestions.style.display = 'none';
        }
    });

    // === ẨN GỢI Ý KHI CLICK NGOÀI ===
    document.addEventListener('click', (e) => {
        if (!input.contains(e.target) && !suggestions.contains(e.target)) {
            suggestions.style.display = 'none';
        }
    });

    // === LỌC TOUR THEO TỪ KHÓA ===
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q');
    let visibleCount = 0;

    if (query) {
        const searchTerm = decodeURIComponent(query).toLowerCase();
        queryText.textContent = `"${decodeURIComponent(query)}"`;

        tourCards.forEach(card => {
            const keywords = card.dataset.keyword.toLowerCase();
            if (keywords.includes(searchTerm)) {
                card.style.display = 'block';
                visibleCount++;
            } else {
                card.style.display = 'none';
            }
        });
    } else {
        // Nếu không có từ khóa → hiện tất cả
        tourCards.forEach(card => {
            card.style.display = 'block';
            visibleCount++;
        });
        queryText.textContent = 'tất cả tour';
    }

    resultCount.textContent = visibleCount;
});