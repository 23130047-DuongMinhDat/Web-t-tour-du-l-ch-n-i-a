document.addEventListener('DOMContentLoaded', () => {
    const input = document.getElementById('searchQuery');
    const form = document.querySelector('.search-form');
    const queryText = document.getElementById('query-text');
    const resultCount = document.querySelector('.result-count strong');
    const tourCards = document.querySelectorAll('.tour-card');

    if (!input) return console.error('Không tìm thấy input search với id="searchQuery"');

    // Tạo suggestions nếu chưa có
    let suggestions = document.getElementById('suggestions');
    if (!suggestions) {
        suggestions = document.createElement('div');
        suggestions.id = 'suggestions';
        suggestions.className = 'search-suggestions';
        input.parentElement.style.position = 'relative';
        input.parentElement.appendChild(suggestions);
    }

    const keywords = ['Hạ Long','Phú Quốc','Hội An','Đà Nẵng','Sapa','Nha Trang','Huế','Mekong','Hà Giang','Cửu Long'];

    // Gợi ý tìm kiếm
    input.addEventListener('input', () => {
        const value = input.value.trim().toLowerCase();
        suggestions.innerHTML = '';
        if (!value) return suggestions.style.display = 'none';

        const matches = keywords.filter(k => k.toLowerCase().includes(value));
        if (matches.length) {
            matches.forEach(match => {
                const div = document.createElement('div');
                div.className = 'suggestion-item';
                div.textContent = match;
                div.onclick = () => {
                    input.value = match;
                    suggestions.style.display = 'none';
                    form.submit();
                };
                suggestions.appendChild(div);
            });
            suggestions.style.display = 'block';
        } else suggestions.style.display = 'none';
    });

    document.addEventListener('click', e => {
        if (!input.contains(e.target) && !suggestions.contains(e.target)) suggestions.style.display = 'none';
    });

    // Lọc tour theo query URL
    const urlParams = new URLSearchParams(window.location.search);
    const query = urlParams.get('q')?.trim().toLowerCase();
    let visibleCount = 0;

    tourCards.forEach(card => {
        const keywords = (card.dataset.keyword || '').toLowerCase();
        if (!query || keywords.includes(query)) {
            card.style.display = 'block';
            visibleCount++;
        } else card.style.display = 'none';
    });

    // Thông báo nếu không tìm thấy kết quả
    if (query && visibleCount === 0) {
        const searchResults = document.querySelector('.search-results');
        if (searchResults && !document.querySelector('.no-results-message')) {
            const noResultsDiv = document.createElement('div');
            noResultsDiv.className = 'no-results-message';
            noResultsDiv.style.cssText = 'grid-column:1/-1;text-align:center;padding:40px;color:#999;font-style:italic;font-size:1.1rem;';
            noResultsDiv.textContent = `Không tìm thấy tour nào phù hợp với "${decodeURIComponent(query)}"`;
            searchResults.appendChild(noResultsDiv);
        }
    }

    if (queryText) queryText.textContent = query ? `"${decodeURIComponent(query)}"` : 'tất cả tour';
    if (resultCount) resultCount.textContent = visibleCount;

    console.log('Search initialized:', { query, visibleCount, totalCards: tourCards.length });
});
