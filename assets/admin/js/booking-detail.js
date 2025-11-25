/* ============================================================
   BOOKING DETAIL JS
   - Dữ liệu khách hàng được đồng bộ với customer-detail.js
   - Dữ liệu Tour & Booking giữ nguyên theo bookings-list.html
   ============================================================ */

// 1. DATABASE GIẢ LẬP
const bookingsData = {
    "BK001": {
        // Info khớp CUS001
        name: "Nguyễn Văn A",
        email: "a.nguyen@example.com",
        phone: "0905123456",
        address: "789 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
        // Tour Info
        tour: "Tour Đà Lạt 3N2Đ", code: "DL-001", date: "05/12/2025", duration: "3 Ngày 2 Đêm",
        pax: 2, pricePerPax: 3200000, status: "Pending"
    },
    "BK002": {
        // Info khớp CUS002
        name: "Trần Thị B",
        email: "b.tran@example.com",
        phone: "0938123456",
        address: "456 Trần Hưng Đạo, Quận 1, TP. Hồ Chí Minh",
        // Tour Info
        tour: "Tour Nha Trang 4N3Đ", code: "NT-002", date: "22/11/2025", duration: "4 Ngày 3 Đêm",
        pax: 4, pricePerPax: 4500000, status: "Confirmed"
    },
    "BK003": {
        // Info khớp CUS003
        name: "Lê Minh C",
        email: "c.le@example.com",
        phone: "0971123456",
        address: "123 Lê Lợi, Quận 1, TP. Hồ Chí Minh",
        // Tour Info
        tour: "Tour Hội An – Đà Nẵng", code: "HA-003", date: "10/12/2025", duration: "2 Ngày 1 Đêm",
        pax: 3, pricePerPax: 2900000, status: "Pending"
    },
    "BK004": {
        // Info khớp CUS004
        name: "Phạm Ngọc D",
        email: "d.pham@example.com",
        phone: "0909123456",
        address: "321 Hai Bà Trưng, Quận 3, TP. Hồ Chí Minh",
        // Tour Info
        tour: "Tour Sa Pa 3N2Đ", code: "SP-004", date: "15/12/2025", duration: "3 Ngày 2 Đêm",
        pax: 1, pricePerPax: 3800000, status: "Cancelled"
    },
    "BK005": {
        // Info khớp CUS005
        name: "Đỗ Nhật E",
        email: "e.do@example.com",
        phone: "0912123456",
        address: "654 Cách Mạng Tháng 8, Quận 10, TP. Hồ Chí Minh",
        // Tour Info
        tour: "Tour Hạ Long 2N1Đ", code: "HL-005", date: "30/11/2025", duration: "2 Ngày 1 Đêm",
        pax: 5, pricePerPax: 1900000, status: "Confirmed"
    },
    "BK006": {
        name: "Vũ Thảo Nhi",
        email: "nhi.vu@example.com",
        phone: "0988123456",
        address: "12 Nguyễn Trãi, Vũng Tàu",
        tour: "Tour Côn Đảo 3N2Đ", code: "CD-006", date: "07/12/2025", duration: "3 Ngày 2 Đêm",
        pax: 2, pricePerPax: 5200000, status: "Pending"
    },
    "BK007": {
        name: "Hoàng Xuân F",
        email: "f.hoang@example.com",
        phone: "0977123456",
        address: "34 Lê Duẩn, Huế",
        tour: "Tour Phú Quốc 4N3Đ", code: "PQ-007", date: "20/12/2025", duration: "4 Ngày 3 Đêm",
        pax: 3, pricePerPax: 4900000, status: "Confirmed"
    },
    "BK008": {
        name: "Nguyễn Khánh G",
        email: "g.nguyen@example.com",
        phone: "0966123456",
        address: "56 Quang Trung, Quảng Bình",
        tour: "Tour Huế – Quảng Bình", code: "QB-008", date: "02/12/2025", duration: "3 Ngày 2 Đêm",
        pax: 2, pricePerPax: 3300000, status: "Pending"
    },
    "BK009": {
        name: "Ngô Bích H",
        email: "h.ngo@example.com",
        phone: "0955123456",
        address: "78 Hùng Vương, Mỹ Tho",
        tour: "Tour Miền Tây Sông Nước", code: "MT-009", date: "28/11/2025", duration: "2 Ngày 1 Đêm",
        pax: 4, pricePerPax: 1500000, status: "Confirmed"
    },
    "BK010": {
        name: "Đinh Quốc I",
        email: "i.dinh@example.com",
        phone: "0944123456",
        address: "90 Trần Phú, Sơn La",
        tour: "Tour Mộc Châu 2N1Đ", code: "MC-010", date: "18/12/2025", duration: "2 Ngày 1 Đêm",
        pax: 2, pricePerPax: 1700000, status: "Pending"
    },
    "BK011": {
        name: "Phan Mỹ J",
        email: "j.phan@example.com",
        phone: "0933123456",
        address: "11 Nguyễn Tất Thành, Phan Thiết",
        tour: "Tour Bình Thuận – Mũi Né", code: "BT-011", date: "09/12/2025", duration: "3 Ngày 2 Đêm",
        pax: 3, pricePerPax: 2600000, status: "Confirmed"
    },
    "BK012": {
        name: "Đỗ Lâm K",
        email: "k.do@example.com",
        phone: "0922123456",
        address: "22 Lê Thánh Tông, Buôn Ma Thuột",
        tour: "Tour Buôn Mê Thuột", code: "BMT-012", date: "14/12/2025", duration: "3 Ngày 2 Đêm",
        pax: 1, pricePerPax: 2900000, status: "Pending"
    },
    "BK013": {
        name: "Lý Ánh L",
        email: "l.ly@example.com",
        phone: "0911123456",
        address: "33 Ninh Kiều, Cần Thơ",
        tour: "Tour Cần Thơ – Chợ Nổi", code: "CT-013", date: "26/11/2025", duration: "2 Ngày 1 Đêm",
        pax: 5, pricePerPax: 1300000, status: "Cancelled"
    },
    "BK014": {
        name: "Phùng Thanh M",
        email: "m.phung@example.com",
        phone: "0900123456",
        address: "44 Nguyễn Huệ, Quy Nhơn",
        tour: "Tour Quy Nhơn – Eo Gió", code: "QN-014", date: "03/12/2025", duration: "3 Ngày 2 Đêm",
        pax: 2, pricePerPax: 3500000, status: "Pending"
    },
    "BK015": {
        name: "Đặng Bảo N",
        email: "n.dang@example.com",
        phone: "0999123456",
        address: "55 Trần Hưng Đạo, Cà Mau",
        tour: "Tour Cà Mau – Đất Mũi", code: "CM-015", date: "21/12/2025", duration: "3 Ngày 2 Đêm",
        pax: 3, pricePerPax: 2100000, status: "Confirmed"
    },
    "BK016": {
        name: "Mai Tố O",
        email: "o.mai@example.com",
        phone: "0988987654",
        address: "66 Hùng Vương, Cao Lãnh",
        tour: "Tour Đồng Tháp – Tràm Chim", code: "DT-016", date: "29/11/2025", duration: "2 Ngày 1 Đêm",
        pax: 2, pricePerPax: 1400000, status: "Pending"
    },
    "BK017": {
        name: "Nguyễn Quốc P",
        email: "p.nguyen@example.com",
        phone: "0977987654",
        address: "77 Nguyễn Trung Trực, Rạch Giá",
        tour: "Tour Đảo Nam Du", code: "KG-017", date: "11/12/2025", duration: "3 Ngày 2 Đêm",
        pax: 4, pricePerPax: 3200000, status: "Confirmed"
    },
    "BK018": {
        name: "Đoàn Bích Q",
        email: "q.doan@example.com",
        phone: "0966987654",
        address: "88 Võ Nguyên Giáp, Điện Biên",
        tour: "Tour Điện Biên – A1", code: "DB-018", date: "17/12/2025", duration: "3 Ngày 2 Đêm",
        pax: 2, pricePerPax: 2400000, status: "Cancelled"
    },
    "BK019": {
        name: "Huỳnh Gia R",
        email: "r.huynh@example.com",
        phone: "0955987654",
        address: "99 Pasteur, Quận 1, TP.HCM",
        tour: "Tour Sài Gòn City Tour", code: "SG-019", date: "04/12/2025", duration: "1 Ngày",
        pax: 1, pricePerPax: 900000, status: "Confirmed"
    },
    "BK020": {
        name: "Phạm Thu S",
        email: "s.pham@example.com",
        phone: "0944987654",
        address: "100 Rừng Sác, Cần Giờ",
        tour: "Tour Cần Giờ – Rừng Ngập Mặn", code: "CG-020", date: "06/12/2025", duration: "1 Ngày",
        pax: 3, pricePerPax: 850000, status: "Pending"
    }
};
function formatMoney(amount) {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(amount);
}

document.addEventListener('DOMContentLoaded', function() {
    // 1. Lấy ID từ URL
    const urlParams = new URLSearchParams(window.location.search);
    const bookingId = urlParams.get('id') || 'BK001';

    // 2. Lấy dữ liệu
    const data = bookingsData[bookingId];

    if (!data) {
        alert("Không tìm thấy dữ liệu!");
        return;
    }

    // 3. Điền vào HTML (Chỉ điền text, không tạo thẻ mới)
    document.title = `Chi tiết ${bookingId} - VietTravel`;
    document.getElementById('d-booking-id').innerText = bookingId;

    // --- Status ---
    const badge = document.getElementById('d-status-badge');
    const btnConfirm = document.getElementById('btn-confirm');
    const btnCancel = document.getElementById('btn-cancel');

    if (data.status === 'Confirmed') {
        badge.className = 'badge bg-success'; badge.innerText = 'Đã xác nhận';
        if(btnConfirm) btnConfirm.style.display = 'none';
    } else if (data.status === 'Cancelled') {
        badge.className = 'badge bg-danger'; badge.innerText = 'Đã hủy';
        if(btnConfirm) btnConfirm.style.display = 'none';
        if(btnCancel) btnCancel.style.display = 'none';
    } else {
        badge.className = 'badge bg-warning'; badge.innerText = 'Chờ xử lý';
    }

    // --- Thông tin chung ---
    document.getElementById('d-customer-name').innerText = data.name;
    document.getElementById('d-email').innerText = data.email;
    document.getElementById('d-phone').innerText = data.phone;
    document.getElementById('d-address').innerText = data.address;

    document.getElementById('d-tour-name').innerText = data.tour;
    document.getElementById('d-tour-code').innerText = data.code;
    document.getElementById('d-start-date').innerText = data.date;
    document.getElementById('d-duration').innerText = data.duration;

    // --- Tiền ---
    const subTotal = data.pax * data.pricePerPax;
    document.getElementById('d-price-per-pax').innerText = formatMoney(data.pricePerPax);
    document.getElementById('d-pax-count').innerText = data.pax;
    document.getElementById('d-total-price').innerText = formatMoney(subTotal);

    // --- CẬP NHẬT TÊN TRONG BẢNG (Không render lại) ---
    // Chỉ cập nhật tên người đầu tiên trong bảng cho khớp với người đặt
    const mainPaxName = document.getElementById('d-pax-main-name');
    if (mainPaxName) {
        mainPaxName.innerText = data.name;
    }
});

// --- Modal Functions (Giữ nguyên) ---
function openModal(id) { document.getElementById(id).style.display = 'block'; }
function closeModal(id) { document.getElementById(id).style.display = 'none'; }
function confirmAction(msg) { alert(msg); location.reload(); }
window.onclick = function(e) { if(e.target.classList.contains('modal-overlay')) { e.target.style.display = 'none'; } }