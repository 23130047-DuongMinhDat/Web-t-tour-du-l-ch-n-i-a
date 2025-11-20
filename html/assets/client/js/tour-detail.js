// tour-detail.js - Tối ưu hóa theo yêu cầu không dùng render HTML
document.addEventListener("DOMContentLoaded", () => {
    // Khởi tạo AOS animation
    if (typeof AOS !== 'undefined') {
        AOS.init({ duration: 800, once: true });
    }

    // Lấy ID tour từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const tourId = urlParams.get('id') || 'halong';

    // Database tour (giả lập - sau này có thể lấy từ API)
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

    // Kiểm tra tour có tồn tại không
    if (!tour) {
        console.error('Tour không tồn tại:', tourId);
        alert('Tour không tồn tại! Quay về trang chủ...');
        window.location.href = 'index.html';
        return;
    }

    // === CẬP NHẬT THÔNG TIN TOUR VÀO HTML ===

    // Cập nhật tiêu đề tour
    const tourNameElement = document.getElementById("tourName");
    if (tourNameElement) {
        tourNameElement.textContent = tour.name;
    }

    // Cập nhật breadcrumb
    const breadcrumbElement = document.getElementById("breadcrumbName");
    if (breadcrumbElement) {
        const shortName = tour.name.length > 25 ? tour.name.substring(0, 25) + "..." : tour.name;
        breadcrumbElement.textContent = shortName;
    }

    // Cập nhật giá
    const priceElement = document.getElementById("price");
    if (priceElement) {
        priceElement.textContent = tour.price.toLocaleString('vi-VN') + "đ";
    }

    // Cập nhật giá cũ
    const oldPriceElement = document.querySelector(".tour-price .old-price");
    if (oldPriceElement) {
        oldPriceElement.textContent = tour.oldPrice.toLocaleString('vi-VN') + "đ";
    }

    // Cập nhật % giảm giá
    const discountElement = document.querySelector(".discount");
    if (discountElement) {
        discountElement.textContent = "Giảm " + tour.discount + "%";
    }

    // Cập nhật thời gian
    const durationElement = document.getElementById("duration");
    if (durationElement) {
        durationElement.textContent = tour.duration;
    }

    // Cập nhật số chỗ còn lại
    const slotsElement = document.getElementById("slots");
    if (slotsElement) {
        slotsElement.textContent = tour.slots;
    }

    // Cập nhật hình ảnh hero
    const heroImage = document.querySelector(".page-hero img");
    if (heroImage) {
        heroImage.src = tour.image;
        heroImage.alt = tour.name;
    }

    // Cập nhật điểm khởi hành
    const departureElements = document.querySelectorAll('.tour-highlights li');
    if (departureElements.length >= 2) {
        const departureText = departureElements[1].querySelector('strong');
        if (departureText && departureText.nextSibling) {
            departureText.nextSibling.textContent = ' ' + tour.departure;
        }
    }

    // Cập nhật đánh giá
    const ratingElements = document.querySelectorAll('.tour-highlights li');
    if (ratingElements.length >= 4) {
        const ratingText = ratingElements[3].querySelector('strong');
        if (ratingText && ratingText.nextSibling) {
            ratingText.nextSibling.textContent = ' ' + tour.rating + ' (' + tour.reviews + ')';
        }
    }

    // === XỬ LÝ TABS ===
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active từ tất cả
            tabButtons.forEach(b => b.classList.remove('active'));
            tabPanes.forEach(p => p.classList.remove('active'));

            // Thêm active vào tab được click
            btn.classList.add('active');
            const targetTab = document.getElementById(btn.getAttribute('data-tab'));
            if (targetTab) {
                targetTab.classList.add('active');
            }
        });
    });

    // === TÍNH TỔNG TIỀN ===
    const adultsInput = document.getElementById("adults");
    const childrenInput = document.getElementById("children");
    const totalAmountElement = document.getElementById("totalAmount");

    const calculateTotal = () => {
        const adults = parseInt(adultsInput.value) || 0;
        const children = parseInt(childrenInput.value) || 0;

        // Trẻ em tính 70% giá người lớn
        const total = (adults * tour.price) + (children * tour.price * 0.7);

        if (totalAmountElement) {
            totalAmountElement.textContent = total.toLocaleString('vi-VN') + "đ";
        }
    };

    // Lắng nghe thay đổi số lượng người
    if (adultsInput) {
        adultsInput.addEventListener("input", calculateTotal);
    }
    if (childrenInput) {
        childrenInput.addEventListener("input", calculateTotal);
    }

    // Tính tổng tiền ban đầu
    calculateTotal();

    // === XỬ LÝ ĐẶT TOUR ===
    const bookingForm = document.getElementById("bookingForm");
    if (bookingForm) {
        bookingForm.addEventListener("submit", (e) => {
            e.preventDefault();

            // Lấy thông tin từ form
            const departDate = document.getElementById("departDate").value;
            const adults = parseInt(adultsInput.value) || 0;
            const children = parseInt(childrenInput.value) || 0;

            // Kiểm tra dữ liệu
            if (!departDate) {
                alert("Vui lòng chọn ngày khởi hành!");
                return;
            }

            if (adults === 0) {
                alert("Vui lòng chọn ít nhất 1 người lớn!");
                return;
            }

            // Kiểm tra số chỗ còn lại
            const totalPeople = adults + children;
            if (totalPeople > tour.slots) {
                alert(`Xin lỗi! Tour chỉ còn ${tour.slots} chỗ trống.`);
                return;
            }

            // Xử lý đặt tour (có thể gửi lên server sau này)
            const bookingData = {
                tourId: tourId,
                tourName: tour.name,
                departDate: departDate,
                adults: adults,
                children: children,
                totalAmount: (adults * tour.price) + (children * tour.price * 0.7)
            };

            console.log("Booking data:", bookingData);

            // Thông báo thành công
            alert(`Đặt tour thành công!\n\nTour: ${tour.name}\nNgày khởi hành: ${departDate}\nSố người: ${adults} người lớn, ${children} trẻ em\nTổng tiền: ${bookingData.totalAmount.toLocaleString('vi-VN')}đ\n\nChúng tôi sẽ liên hệ bạn trong thời gian sớm nhất!`);

            // Có thể chuyển hướng đến trang thanh toán
            // window.location.href = 'payment.html?bookingId=' + bookingId;
        });
    }

    // === LOG DEBUG ===
    console.log('Tour detail loaded:', {
        tourId: tourId,
        tourName: tour.name,
        price: tour.price
    });
});