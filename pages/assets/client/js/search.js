document.addEventListener('DOMContentLoaded', () => {
    // Lấy các element - sửa lại ID cho đúng với HTML
    const input = document.getElementById('searchQuery'); // Đổi từ 'search-input' thành 'searchQuery'
    const form = document.querySelector('.search-form'); // Lấy form theo class
    const queryText = document.getElementById('query-text');
    const resultCount = document.querySelector('.result-count strong');
    const tourCards = document.querySelectorAll('.tour-card');

    // Kiểm tra xem các element có tồn tại không
    if (!input) {
        console.error('Không tìm thấy input search với id="searchQuery"');
        return;
    }

    // Tạo element suggestions nếu chưa có
    let suggestions = document.getElementById('suggestions');
    if (!suggestions) {
        suggestions = document.createElement('div');
        suggestions.id = 'suggestions';
        suggestions.className = 'search-suggestions';
        input.parentElement.style.position = 'relative';
        input.parentElement.appendChild(suggestions);
    }

    // Danh sách từ khóa gợi ý
    const keywords = [
        'Hạ Long', 'Phú Quốc', 'Hội An', 'Đà Nẵng', 'Sapa',
        'Nha Trang', 'Huế', 'Mekong', 'Hà Giang', 'Cửu Long'
    ];

    // === GỢI Ý TÌM KIẾM ===
    input.addEventListener('input', () => {
        const value = input.value.trim().toLowerCase();
        suggestions.innerHTML = '';

        if (value) {
            const matches = keywords.filter(k => k.toLowerCase().includes(value));

            if (matches.length > 0) {
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
            } else {
                suggestions.style.display = 'none';
            }
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
        // Có từ khóa tìm kiếm
        const searchTerm = decodeURIComponent(query).toLowerCase().trim();

        if (queryText) {
            queryText.textContent = `"${decodeURIComponent(query)}"`;
        }

        tourCards.forEach(card => {
            const cardKeywords = card.getAttribute('data-keyword');

            if (cardKeywords) {
                const keywords = cardKeywords.toLowerCase();

                // Kiểm tra xem từ khóa có trong keywords không
                if (keywords.includes(searchTerm)) {
                    card.style.display = 'block';
                    visibleCount++;
                } else {
                    card.style.display = 'none';
                }
            } else {
                // Nếu không có data-keyword thì ẩn
                card.style.display = 'none';
                console.warn('Tour card thiếu thuộc tính data-keyword:', card);
            }
        });

        // Hiển thị thông báo nếu không có kết quả
        if (visibleCount === 0) {
            const searchResults = document.querySelector('.search-results');
            const existingMessage = document.querySelector('.no-results-message');

            if (searchResults && !existingMessage) {
                const noResultsDiv = document.createElement('div');
                noResultsDiv.className = 'no-results-message';
                noResultsDiv.style.cssText = 'grid-column: 1 / -1; text-align: center; padding: 40px; color: #999; font-style: italic; font-size: 1.1rem;';
                noResultsDiv.textContent = `Không tìm thấy tour nào phù hợp với "${decodeURIComponent(query)}"`;
                searchResults.appendChild(noResultsDiv);
            }
        }
    } else {
        // Không có từ khóa → hiện tất cả tour
        tourCards.forEach(card => {
            card.style.display = 'block';
            visibleCount++;
        });

        if (queryText) {
            queryText.textContent = 'tất cả tour';
        }
    }

    // Cập nhật số lượng kết quả
    if (resultCount) {
        resultCount.textContent = visibleCount;
    }

    console.log('Search initialized:', {
        query: query,
        visibleCount: visibleCount,
        totalCards: tourCards.length
    });
});