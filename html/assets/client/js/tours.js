"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("#searchInput");
    const locationFilter = document.querySelector("#locationFilter");
    const priceFilter = document.querySelector("#priceFilter");
    const tourCards = document.querySelectorAll(".tour-card");

    // Hàm lọc tour
    function filterTours() {
        const searchValue = searchInput.value.toLowerCase();
        const locationValue = locationFilter.value;
        const priceValue = priceFilter.value;

        tourCards.forEach(card => {
            const title = card.querySelector("h3").textContent.toLowerCase();
            const location = title; // có thể thêm data-location vào card nếu muốn chính xác hơn
            const price = Math.floor(Math.random() * 9) + 1; // tạm dùng random cho demo (triệu)

            let matchesSearch = title.includes(searchValue);
            let matchesLocation = locationValue === "" || location.includes(locationValue.toLowerCase());
            let matchesPrice = true;

            if (priceValue === "low") matchesPrice = price < 3;
            else if (priceValue === "medium") matchesPrice = price >= 3 && price <= 6;
            else if (priceValue === "high") matchesPrice = price > 6;

            if (matchesSearch && matchesLocation && matchesPrice) {
                card.style.display = "block";
            } else {
                card.style.display = "none";
            }
        });
    }

    // Gắn sự kiện
    searchInput.addEventListener("input", filterTours);
    locationFilter.addEventListener("change", filterTours);
    priceFilter.addEventListener("change", filterTours);
});
