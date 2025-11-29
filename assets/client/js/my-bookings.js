document.addEventListener("DOMContentLoaded", () => {
    const buttons = document.querySelectorAll("#filterTabs .filter-btn");
    const cards = document.querySelectorAll("#bookingsList .booking-card");

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            const status = btn.dataset.status;

            buttons.forEach(b => b.classList.toggle("active", b === btn));

            cards.forEach(card => {
                card.style.display = (status === "all" || card.dataset.status === status) ? "block" : "none";
            });
        });
    });

    // Hiển thị tất cả lần đầu
    buttons[0]?.click();
});
