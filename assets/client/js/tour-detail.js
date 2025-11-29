document.addEventListener("DOMContentLoaded", () => {
    if (typeof AOS !== 'undefined') AOS.init({ duration: 800, once: true });

    // --- Lấy tour ID ---
    const tourId = new URLSearchParams(window.location.search).get('id') || 'halong';
    // Database tour
    const tours = {
        halong: {
            name: "Tour Vịnh Hạ Long 3N2Đ",
            price: 6990000,
            oldPrice: 8500000,
            duration: "3 ngày 2 đêm",
            slots: 25,
            maxSlots: 30,
            rating: 4.8,
            reviews: 128,
            departure: "Hà Nội",
            image: "assets/client/images/popular-1.jpg",
            description: "Khám phá Vịnh Hạ Long – Di sản thiên nhiên thế giới với hơn 1.600 đảo đá vôi, hang động kỳ vĩ và làn nước xanh ngọc...",
            discount: 18
        },
        phuquoc: {
            name: "Tour Phú Quốc 4N3Đ",
            price: 6800000,
            oldPrice: 7500000,
            duration: "4 ngày 3 đêm",
            slots: 18,
            maxSlots: 25,
            rating: 4.9,
            reviews: 156,
            departure: "TP.HCM",
            image: "assets/client/images/popular-2.jpg",
            description: "Khám phá đảo ngọc Phú Quốc với biển xanh, cát trắng và những trải nghiệm tuyệt vời...",
            discount: 9
        },
        hoian: {
            name: "Tour Hội An - Phố Cổ Đèn Lồng 2N1Đ",
            price: 1590000,
            oldPrice: 1800000,
            duration: "2 ngày 1 đêm",
            slots: 30,
            maxSlots: 35,
            rating: 4.8,
            reviews: 112,
            departure: "Đà Nẵng",
            image: "assets/client/images/popular-3.jpg",
            description: "Tham quan phố cổ Hội An với những ngôi nhà cổ kính, đèn lồng lung linh...",
            discount: 12
        },
        danang: {
            name: "Tour Đà Nẵng - Cầu Vàng & Biển Mỹ Khê 3N2Đ",
            price: 3990000,
            oldPrice: 4500000,
            duration: "3 ngày 2 đêm",
            slots: 22,
            maxSlots: 30,
            rating: 4.7,
            reviews: 145,
            departure: "TP.HCM",
            image: "assets/client/images/da_nang.jpg",
            description: "Khám phá thành phố đáng sống với Cầu Vàng nổi tiếng và bãi biển Mỹ Khê tuyệt đẹp...",
            discount: 11
        },
        sapa: {
            name: "Tour Sapa - Fansipan & Bản Làng 3N2Đ",
            price: 2990000,
            oldPrice: 3500000,
            duration: "3 ngày 2 đêm",
            slots: 15,
            maxSlots: 25,
            rating: 4.8,
            reviews: 128,
            departure: "Hà Nội",
            image: "assets/client/images/sapa.jpg",
            description: "Chinh phục đỉnh Fansipan, thăm bản làng và ngắm ruộng bậc thang tuyệt đẹp...",
            discount: 15
        },
        nhatrang: {
            name: "Tour Nha Trang - Vinpearl & Lặn Biển 3N2Đ",
            price: 4699000,
            oldPrice: 5200000,
            duration: "3 ngày 2 đêm",
            slots: 20,
            maxSlots: 30,
            rating: 4.6,
            reviews: 97,
            departure: "TP.HCM",
            image: "assets/client/images/nha_trang.jpg",
            description: "Trải nghiệm Vinpearl Land, lặn ngắm san hô và thưởng thức hải sản tươi sống...",
            discount: 10
        },
        hue: {
            name: "Tour Huế - Cố Đô & Lăng Tẩm 3N2Đ",
            price: 2890000,
            oldPrice: 3200000,
            duration: "3 ngày 2 đêm",
            slots: 12,
            maxSlots: 25,
            rating: 4.5,
            reviews: 78,
            departure: "Đà Nẵng",
            image: "assets/client/images/hue.jpg",
            description: "Khám phá di sản văn hóa thế giới với Kinh thành Huế, các lăng tẩm cổ kính...",
            discount: 10
        },
        mekong: {
            name: "Tour Mekong - Chợ Nổi Cái Răng 2N1Đ",
            price: 1690000,
            oldPrice: 1900000,
            duration: "2 ngày 1 đêm",
            slots: 28,
            maxSlots: 35,
            rating: 4.7,
            reviews: 89,
            departure: "TP.HCM",
            image: "assets/client/images/dong_bang_song_cuu_long.jpg",
            description: "Trải nghiệm miền Tây sông nước với chợ nổi Cái Răng, vườn trái cây...",
            discount: 11
        },
        hagiang: {
            name: "Tour Hà Giang - Đèo Mã Pí Lèng 4N3Đ",
            price: 5200000,
            oldPrice: 5800000,
            duration: "4 ngày 3 đêm",
            slots: 10,
            maxSlots: 20,
            rating: 4.9,
            reviews: 67,
            departure: "Hà Nội",
            image: "assets/client/images/ha_giang.jpg",
            description: "Chinh phục cung đường huyền thoại với Đèo Mã Pí Lèng, Cột Cờ Lũng Cú...",
            discount: 10
        }
    };

    // Lấy thông tin tour hiện tại
    const tour = tours[tourId];
    if (!tour) {
        alert('Tour không tồn tại! Quay về trang chủ...');
        return window.location.href = 'index.pages';
    }

    // --- Helper: set text ---
    const setText = (selector, text) => {
        const el = document.querySelector(selector);
        if (el) el.textContent = text;
    };

    // --- Cập nhật thông tin tour ---
    setText("#tourName", tour.name);
    setText("#breadcrumbName", tour.name.length > 25 ? tour.name.slice(0, 25) + "…" : tour.name);
    setText("#price", tour.price.toLocaleString('vi-VN') + "đ");
    setText(".tour-price .old-price", tour.oldPrice.toLocaleString('vi-VN') + "đ");
    setText(".discount", `Giảm ${tour.discount}%`);
    setText("#duration", tour.duration);
    setText("#slots", tour.slots);

    const heroImg = document.querySelector(".page-hero img");
    if (heroImg) { heroImg.src = tour.image; heroImg.alt = tour.name; }

    const departureEl = document.querySelector('.tour-highlights li:nth-child(2) strong');
    if (departureEl) departureEl.nextSibling.textContent = ' ' + tour.departure;

    const ratingEl = document.querySelector('.tour-highlights li:nth-child(4) strong');
    if (ratingEl) ratingEl.nextSibling.textContent = ` ${tour.rating} (${tour.reviews})`;

    // --- Tabs ---
    const tabs = document.querySelectorAll('.tab-btn');
    const panes = document.querySelectorAll('.tab-pane');
    tabs.forEach(tab => tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        panes.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        const target = document.getElementById(tab.dataset.tab);
        if (target) target.classList.add('active');
    }));

    // --- Tính tổng tiền ---
    const adultsInput = document.getElementById("adults");
    const childrenInput = document.getElementById("children");
    const totalEl = document.getElementById("totalAmount");

    const calcTotal = () => {
        const adults = parseInt(adultsInput?.value) || 0;
        const children = parseInt(childrenInput?.value) || 0;
        const total = (adults + children * 0.7) * tour.price;
        if (totalEl) totalEl.textContent = total.toLocaleString('vi-VN') + "đ";
    };
    adultsInput?.addEventListener('input', calcTotal);
    childrenInput?.addEventListener('input', calcTotal);
    calcTotal();

    // --- Đặt tour ---
    document.getElementById("bookingForm")?.addEventListener('submit', e => {
        e.preventDefault();
        const date = document.getElementById("departDate").value;
        const adults = parseInt(adultsInput?.value) || 0;
        const children = parseInt(childrenInput?.value) || 0;

        if (!date) return alert("Vui lòng chọn ngày khởi hành!");
        if (adults === 0) return alert("Vui lòng chọn ít nhất 1 người lớn!");
        if (adults + children > tour.slots) return alert(`Xin lỗi! Tour chỉ còn ${tour.slots} chỗ trống.`);

        alert(`Đặt tour thành công!\nTour: ${tour.name}\nNgày khởi hành: ${date}\nSố người: ${adults} người lớn, ${children} trẻ em\nTổng tiền: ${(adults + children*0.7)*tour.price.toLocaleString('vi-VN')}đ`);
    });

    console.log('Tour detail loaded:', tourId, tour.name);
});