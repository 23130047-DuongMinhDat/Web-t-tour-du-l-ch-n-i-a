// tour-detail.js
document.addEventListener("DOMContentLoaded", () => {
    AOS.init({ duration: 800, once: true });

    // Lấy ID tour từ URL (sau này)
    const urlParams = new URLSearchParams(window.location.search);
    const tourId = urlParams.get('id') || 'halong';

    // Giả lập dữ liệu tour
    const tours = {
        halong: {
            name: "Tour Vịnh Hạ Long 3N2Đ",
            price: 6990000,
            duration: "3 ngày 2 đêm",
            slots: 25,
            image: "../assets/images/popular-1.jpg"
        },
        phuquoc: {
            name: "Tour Phú Quốc 4N3Đ",
            price: 8990000,
            duration: "4 ngày 3 đêm",
            slots: 18,
            image: "../assets/images/popular-2.jpg"
        },
        hoian: {
            name: "Tour Hội An - Đà Nẵng 3N2Đ",
            price: 5490000,
            duration: "3 ngày 2 đêm",
            slots: 30,
            image: "../assets/images/popular-3.jpg"
        },
        danang: {
            name: "Tour Đà Nẵng - Bà Nà 3N2Đ",
            price: 5990000,
            duration: "3 ngày 2 đêm",
            slots: 22,
            image: "../assets/images/popular-4.jpg"
        },
        sapa: {
            name: "Tour Sapa - Fansipan 3N2Đ",
            price: 4990000,
            duration: "3 ngày 2 đêm",
            slots: 15,
            image: "../assets/images/popular-5.jpg"
        },
        nhatrang: {
            name: "Tour Nha Trang - Vinpearl 4N3Đ",
            price: 7990000,
            duration: "4 ngày 3 đêm",
            slots: 20,
            image: "../assets/images/popular-6.jpg"
        },
        hue: {
            name: "Tour Huế - Đà Lạt 5N4Đ",
            price: 7490000,
            duration: "5 ngày 4 đêm",
            slots: 12,
            image: "../assets/images/popular-7.jpg"
        },
        mekong: {
            name: "Tour Đồng Bằng Sông Cửu Long 3N2Đ",
            price: 4290000,
            duration: "3 ngày 2 đêm",
            slots: 28,
            image: "../assets/images/popular-8.jpg"
        },
        hagiang: {
            name: "Tour Hà Giang - Cột Cờ Lũng Cú 4N3Đ",
            price: 5890000,
            duration: "4 ngày 3 đêm",
            slots: 10,
            image: "../assets/images/popular-9.jpg"
        },
        dalat: {
            name: "Tour Đà Lạt - Thác Datanla 3N2Đ",
            price: 4590000,
            duration: "3 ngày 2 đêm",
            slots: 32,
            image: "../assets/images/popular-10.jpg"
        }
    };

    const tour = tours[tourId];
    if (tour) {
        document.getElementById("tourName").textContent = tour.name;
        document.getElementById("breadcrumbName").textContent = tour.name.substring(0, 20) + "...";
        document.getElementById("price").textContent = tour.price.toLocaleString('vi-VN') + "đ";
        document.getElementById("duration").textContent = tour.duration;
        document.getElementById("slots").textContent = tour.slots;
        document.querySelector(".page-hero img").src = tour.image;
    }

    // Tabs
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-pane').forEach(p => p.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(btn.dataset.tab).classList.add('active');
        });
    });

    // Tính tiền
    const calcTotal = () => {
        const adults = parseInt(document.getElementById("adults").value) || 0;
        const children = parseInt(document.getElementById("children").value) || 0;
        const total = adults * tour.price + children * (tour.price * 0.7);
        document.getElementById("totalAmount").textContent = total.toLocaleString('vi-VN') + "đ";
    };

    document.getElementById("adults").addEventListener("input", calcTotal);
    document.getElementById("children").addEventListener("input", calcTotal);
    calcTotal();

    // Đặt tour
    document.getElementById("bookingForm").addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Đặt tour thành công! Chúng tôi sẽ liên hệ bạn sớm.");
    });
});