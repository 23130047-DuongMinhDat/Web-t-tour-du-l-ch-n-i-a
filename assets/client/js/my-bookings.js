document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll("#filterTabs .filter-btn");
    const cards   = document.querySelectorAll("#bookingsList .booking-card");

    buttons.forEach(btn => {
        btn.addEventListener("click", function () {
            const status = this.dataset.status;

            // Đổi nút active
            buttons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");

            // Ẩn/hiện card
            cards.forEach(card => {
                if (status === "all" || card.dataset.status === status) {
                    card.style.display = "block";
                } else {
                    card.style.display = "none";
                }
            });
        });
    });

    // Trigger nút "Tất cả" lần đầu để chắc chắn hiện hết
    document.querySelector('#filterTabs .filter-btn[data-status="all"]').click();
});