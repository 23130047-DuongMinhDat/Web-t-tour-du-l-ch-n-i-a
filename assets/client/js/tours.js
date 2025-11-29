"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.querySelector("#searchInput");
    const locationFilter = document.querySelector("#locationFilter");
    const priceFilter = document.querySelector("#priceFilter");
    const tourCards = document.querySelectorAll(".tour-card");

    function filterTours() {
        const searchValue = searchInput.value.trim().toLowerCase();
        const locationValue = locationFilter.value.trim().toLowerCase();
        const priceValue = priceFilter.value;

        tourCards.forEach(card => {
            const title = card.querySelector("h3")?.textContent.toLowerCase() || "";
            const location = card.dataset.location?.toLowerCase() || ""; // nếu có data-location
            const price = parseInt(card.dataset.price, 10) || 0; // giá triệu VND, dùng data-price

            // Điều kiện lọc
            const matchesSearch = title.includes(searchValue);
            const matchesLocation = !locationValue || location.includes(locationValue);
            let matchesPrice = true;

            if (priceValue === "low") matchesPrice = price < 3;
            else if (priceValue === "medium") matchesPrice = price >= 3 && price <= 6;
            else if (priceValue === "high") matchesPrice = price > 6;

            card.style.display = (matchesSearch && matchesLocation && matchesPrice) ? "block" : "none";
        });
    }

    // Gắn sự kiện
    searchInput?.addEventListener("input", filterTours);
    locationFilter?.addEventListener("change", filterTours);
    priceFilter?.addEventListener("change", filterTours);
});
