// File: assets/admin/js/customer-detail.js
// Phiên bản: Đã sửa lỗi tính tổng tiền & tối ưu DOM

const customersData = {
    'CUS001': { id: 'CUS001', name: 'Nguyễn Văn A', email: 'a.nguyen@example.com', phone: '0905123456', joinDate: '15/03/2023', category: 'Thân thiết', cccd: '012345678901', gender: 'Nam', birthday: '15/06/1990', address: '789 Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh', avatar: '../../assets/admin/img/avatar.png' },
    'CUS002': { id: 'CUS002', name: 'Trần Thị B', email: 'b.tran@example.com', phone: '0938123456', joinDate: '15/03/2023', category: 'VIP', cccd: '012345678902', gender: 'Nữ', birthday: '22/08/1988', address: '456 Trần Hưng Đạo, Quận 1, TP. Hồ Chí Minh', avatar: '../../assets/admin/img/avatar-female.png' },
    'CUS003': { id: 'CUS003', name: 'Lê Minh C', email: 'c.le@example.com', phone: '0971123456', joinDate: '20/10/2024', category: 'Mới', cccd: '012345678903', gender: 'Nam', birthday: '10/03/1992', address: '123 Lê Lợi, Quận 3, TP. Hồ Chí Minh', avatar: '../../assets/admin/img/avatar.png' },
    'CUS004': { id: 'CUS004', name: 'Phạm Ngọc D', email: 'd.pham@example.com', phone: '0912123456', joinDate: '12/09/2024', category: 'Mới', cccd: '012345678904', gender: 'Nữ', birthday: '05/11/1995', address: '321 Hai Bà Trưng, Quận 3, TP. HCM', avatar: '../../assets/admin/img/avatar-female.png' },
    'CUS005': { id: 'CUS005', name: 'Đỗ Nhật E', email: 'e.do@example.com', phone: '0962123456', joinDate: '01/01/2023', category: 'VIP', cccd: '012345678905', gender: 'Nam', birthday: '20/04/1985', address: '456 Phạm Ngũ Lão, Quận 1, TP. HCM', avatar: '../../assets/admin/img/avatar.png' },
    'CUS006': { id: 'CUS006', name: 'Vũ Thảo Nhi', email: 'nhi.vu@example.com', phone: '0907234567', joinDate: '10/05/2023', category: 'Thân thiết', cccd: '012345678906', gender: 'Nữ', birthday: '14/02/1997', address: '789 Cách Mạng Tháng 8, Quận 3', avatar: '../../assets/admin/img/avatar-female.png' },
    'CUS007': { id: 'CUS007', name: 'Hoàng Xuân F', email: 'f.hoang@example.com', phone: '0939234567', joinDate: '03/02/2023', category: 'VIP', cccd: '012345678907', gender: 'Nam', birthday: '30/12/1980', address: '123 Nguyễn Thị Minh Khai, Q.1', avatar: '../../assets/admin/img/avatar.png' },
    'CUS008': { id: 'CUS008', name: 'Nguyễn Khánh G', email: 'g.khanh@example.com', phone: '0978234567', joinDate: '15/11/2024', category: 'Mới', cccd: '012345678908', gender: 'Nam', birthday: '22/07/1993', address: '456 Điện Biên Phủ, Quận Bình Thạnh', avatar: '../../assets/admin/img/avatar.png' },
    'CUS009': { id: 'CUS009', name: 'Ngô Bích H', email: 'h.ngo@example.com', phone: '0987234501', joinDate: '20/12/2022', category: 'VIP', cccd: '012345678909', gender: 'Nữ', birthday: '18/09/1987', address: '789 Lê Văn Sỹ, Quận Tân Bình', avatar: '../../assets/admin/img/avatar-female.png' },
    'CUS010': { id: 'CUS010', name: 'Đinh Quốc I', email: 'i.dinh@example.com', phone: '0934456123', joinDate: '05/06/2023', category: 'Thân thiết', cccd: '012345678910', gender: 'Nam', birthday: '09/01/1991', address: '321 Nguyễn Trãi, Quận 5', avatar: '../../assets/admin/img/avatar.png' },
    'CUS011': { id: 'CUS011', name: 'Phan Mỹ J', email: 'j.phan@example.com', phone: '0918456732', joinDate: '12/04/2023', category: 'Thân thiết', cccd: '012345678911', gender: 'Nữ', birthday: '25/10/1994', address: '567 Pasteur, Quận 3', avatar: '../../assets/admin/img/avatar-female.png' },
    'CUS012': { id: 'CUS012', name: 'Đỗ Lâm K', email: 'k.lam@example.com', phone: '0976132457', joinDate: '01/10/2024', category: 'Mới', cccd: '012345678912', gender: 'Nam', birthday: '03/05/1996', address: '789 Hoàng Sa, Quận Tân Bình', avatar: '../../assets/admin/img/avatar.png' },
    'CUS013': { id: 'CUS013', name: 'Lý Ánh L', email: 'l.ly@example.com', phone: '0901132456', joinDate: '08/03/2023', category: 'VIP', cccd: '012345678913', gender: 'Nữ', birthday: '17/08/1989', address: '123 Trường Sa, Quận Phú Nhuận', avatar: '../../assets/admin/img/avatar-female.png' },
    'CUS014': { id: 'CUS014', name: 'Phùng Thanh M', email: 'm.thanh@example.com', phone: '0921145789', joinDate: '25/12/2024', category: 'Mới', cccd: '012345678914', gender: 'Nam', birthday: '11/11/1998', address: '456 CMT8, Quận 10', avatar: '../../assets/admin/img/avatar.png' },
    'CUS015': { id: 'CUS015', name: 'Đặng Bảo N', email: 'n.dang@example.com', phone: '0946457832', joinDate: '15/01/2023', category: 'VIP', cccd: '012345678915', gender: 'Nam', birthday: '30/07/1983', address: '789 Nguyễn Văn Cừ, Quận 5', avatar: '../../assets/admin/img/avatar.png' },
    'CUS016': { id: 'CUS016', name: 'Mai Tố O', email: 'o.mai@example.com', phone: '0984456733', joinDate: '18/07/2023', category: 'Thân thiết', cccd: '012345678916', gender: 'Nữ', birthday: '04/04/1990', address: '321 Lý Thường Kiệt, Quận 10', avatar: '../../assets/admin/img/avatar-female.png' },
    'CUS017': { id: 'CUS017', name: 'Nguyễn Quốc P', email: 'p.nguyen@example.com', phone: '0933156782', joinDate: '22/02/2023', category: 'VIP', cccd: '012345678917', gender: 'Nam', birthday: '19/12/1986', address: '567 Bạch Đằng, Quận Bình Thạnh', avatar: '../../assets/admin/img/avatar.png' },
    'CUS018': { id: 'CUS018', name: 'Đoàn Bích Q', email: 'q.doan@example.com', phone: '0917156234', joinDate: '30/09/2024', category: 'Mới', cccd: '012345678918', gender: 'Nữ', birthday: '08/06/1999', address: '123 Ung Văn Khiêm, Quận Bình Thạnh', avatar: '../../assets/admin/img/avatar-female.png' },
    'CUS019': { id: 'CUS019', name: 'Huỳnh Gia R', email: 'r.huynh@example.com', phone: '0989256734', joinDate: '14/05/2023', category: 'Thân thiết', cccd: '012345678919', gender: 'Nam', birthday: '27/03/1992', address: '456 Nguyễn Tri Phương, Quận 10', avatar: '../../assets/admin/img/avatar.png' },
    'CUS020': { id: 'CUS020', name: 'Phạm Thu S', email: 's.thu@example.com', phone: '0978256731', joinDate: '11/11/2024', category: 'Mới', cccd: '012345678920', gender: 'Nữ', birthday: '01/01/1995', address: '789 An Dương Vương, Quận 5', avatar: '../../assets/admin/img/avatar-female.png' }
};

// Lịch sử đặt tour
const bookingsByCustomer = {
    'Nguyễn Văn A': [
        { id: 'BK001', tour: 'Tour Đà Lạt 3N2Đ', bookDate: '15/11/2025', departure: '2025-12-05', people: 2, total: '6,400,000₫', status: 'Đang xử lý', badge: 'bg-info' },
        { id: 'BK005', tour: 'Tour Hạ Long 2N1Đ', bookDate: '10/10/2025', departure: '2025-11-30', people: 5, total: '9,500,000₫', status: 'Đã xác nhận', badge: 'bg-success' },
        { id: 'BK009', tour: 'Tour Miền Tây Sông Nước', bookDate: '01/09/2025', departure: '2025-11-28', people: 4, total: '6,000,000₫', status: 'Đã xác nhận', badge: 'bg-success' },
        { id: 'BK011', tour: 'Tour Bình Thuận – Mũi Né', bookDate: '20/08/2025', departure: '2025-12-09', people: 3, total: '7,800,000₫', status: 'Đã xác nhận', badge: 'bg-success' },
        { id: 'BK019', tour: 'Tour Sài Gòn City Tour', bookDate: '10/07/2025', departure: '2025-12-04', people: 1, total: '900,000₫', status: 'Đã xác nhận', badge: 'bg-success' }
    ],
    'Trần Thị B': [
        { id: 'BK002', tour: 'Tour Nha Trang 4N3Đ', bookDate: '10/11/2025', departure: '2025-11-22', people: 4, total: '18,000,000₫', status: 'Đã xác nhận', badge: 'bg-success' },
        { id: 'BK021', tour: 'Tour Đà Lạt 3N2Đ', bookDate: '05/10/2025', departure: '15/10/2025', people: 2, total: '6,400,000₫', status: 'Hoàn thành', badge: 'bg-success' },
        { id: 'BK022', tour: 'Tour Hạ Long 2N1Đ', bookDate: '20/09/2025', departure: '28/09/2025', people: 2, total: '4,500,000₫', status: 'Hoàn thành', badge: 'bg-success' },
        { id: 'BK023', tour: 'Tour Phú Quốc 4N3Đ', bookDate: '15/08/2025', departure: '25/08/2025', people: 4, total: '14,700,000₫', status: 'Hoàn thành', badge: 'bg-success' },
        { id: 'BK024', tour: 'Tour Hội An - Đà Nẵng', bookDate: '10/07/2025', departure: '18/07/2025', people: 2, total: '2,800,000₫', status: 'Hoàn thành', badge: 'bg-success' },
        { id: 'BK025', tour: 'Tour Sa Pa 3N2Đ', bookDate: '05/06/2025', departure: '12/06/2025', people: 2, total: '1,900,000₫', status: 'Hoàn thành', badge: 'bg-success' },
        { id: 'BK026', tour: 'Tour Ninh Bình - Tràng An', bookDate: '20/05/2025', departure: '28/05/2025', people: 2, total: '1,500,000₫', status: 'Hoàn thành', badge: 'bg-success' },
        { id: 'BK027', tour: 'Tour Miền Tây Sông Nước', bookDate: '10/04/2025', departure: '18/04/2025', people: 2, total: '1,400,000₫', status: 'Hoàn thành', badge: 'bg-success' }
    ],
    'Lê Minh C': [
        { id: 'BK003', tour: 'Tour Hội An – Đà Nẵng', bookDate: '01/12/2025', departure: '2025-12-10', people: 3, total: '8,700,000₫', status: 'Chờ thanh toán', badge: 'bg-warning' },
        { id: 'BK008', tour: 'Tour Huế – Quảng Bình', bookDate: '15/11/2025', departure: '2025-12-02', people: 2, total: '6,600,000₫', status: 'Chờ thanh toán', badge: 'bg-warning' }
    ],
    'Phạm Ngọc D': [
        { id: 'BK004', tour: 'Tour Sa Pa 3N2Đ', bookDate: '20/11/2025', departure: '2025-12-15', people: 1, total: '3,800,000₫', status: 'Đã hủy', badge: 'bg-danger' }
    ],
    'Đỗ Nhật E': [
        { id: 'BK005', tour: 'Tour Hạ Long 2N1Đ', bookDate: '10/10/2025', departure: '2025-11-30', people: 5, total: '9,500,000₫', status: 'Đã xác nhận', badge: 'bg-success' }
    ],
    'Vũ Thảo Nhi': [
        { id: 'BK006', tour: 'Tour Côn Đảo 3N2Đ', bookDate: '01/12/2025', departure: '2025-12-07', people: 2, total: '10,400,000₫', status: 'Đang xử lý', badge: 'bg-info' }
    ],
    'Hoàng Xuân F': [
        { id: 'BK007', tour: 'Tour Phú Quốc 4N3Đ', bookDate: '25/11/2025', departure: '2025-12-20', people: 3, total: '14,700,000₫', status: 'Đã xác nhận', badge: 'bg-success' }
    ],
    'Nguyễn Khánh G': [
        { id: 'BK008', tour: 'Tour Huế – Quảng Bình', bookDate: '15/11/2025', departure: '2025-12-02', people: 2, total: '6,600,000₫', status: 'Chờ thanh toán', badge: 'bg-warning' }
    ],
    'Ngô Bích H': [
        { id: 'BK009', tour: 'Tour Miền Tây Sông Nước', bookDate: '01/09/2025', departure: '2025-11-28', people: 4, total: '6,000,000₫', status: 'Đã xác nhận', badge: 'bg-success' }
    ],
    'Đinh Quốc I': [
        { id: 'BK010', tour: 'Tour Mộc Châu 2N1Đ', bookDate: '20/11/2025', departure: '2025-12-18', people: 2, total: '3,400,000₫', status: 'Đang xử lý', badge: 'bg-info' }
    ],
    'Phan Mỹ J': [
        { id: 'BK011', tour: 'Tour Bình Thuận – Mũi Né', bookDate: '20/08/2025', departure: '2025-12-09', people: 3, total: '7,800,000₫', status: 'Đã xác nhận', badge: 'bg-success' }
    ],
    'Đỗ Lâm K': [
        { id: 'BK012', tour: 'Tour Buôn Mê Thuột', bookDate: '15/11/2025', departure: '2025-12-14', people: 1, total: '2,900,000₫', status: 'Chờ thanh toán', badge: 'bg-warning' }
    ],
    'Lý Ánh L': [
        { id: 'BK013', tour: 'Tour Cần Thơ – Chợ Nổi', bookDate: '10/11/2025', departure: '2025-11-26', people: 5, total: '6,500,000₫', status: 'Đã hủy', badge: 'bg-danger' }
    ],
    'Phùng Thanh M': [
        { id: 'BK014', tour: 'Tour Quy Nhơn – Eo Gió', bookDate: '25/11/2025', departure: '2025-12-03', people: 2, total: '7,000,000₫', status: 'Đang xử lý', badge: 'bg-info' }
    ],
    'Đặng Bảo N': [
        { id: 'BK015', tour: 'Tour Cà Mau – Đất Mũi', bookDate: '30/11/2025', departure: '2025-12-21', people: 3, total: '6,300,000₫', status: 'Đã xác nhận', badge: 'bg-success' }
    ],
    'Mai Tố O': [
        { id: 'BK016', tour: 'Tour Đồng Tháp – Tràm Chim', bookDate: '15/11/2025', departure: '2025-11-29', people: 2, total: '2,800,000₫', status: 'Chờ thanh toán', badge: 'bg-warning' }
    ],
    'Nguyễn Quốc P': [
        { id: 'BK017', tour: 'Tour Đảo Nam Du', bookDate: '20/11/2025', departure: '2025-12-11', people: 4, total: '12,800,000₫', status: 'Đã xác nhận', badge: 'bg-success' }
    ],
    'Đoàn Bích Q': [
        { id: 'BK018', tour: 'Tour Điện Biên – A1', bookDate: '25/11/2025', departure: '2025-12-17', people: 2, total: '4,800,000₫', status: 'Đã hủy', badge: 'bg-danger' }
    ],
    'Huỳnh Gia R': [
        { id: 'BK019', tour: 'Tour Sài Gòn City Tour', bookDate: '10/07/2025', departure: '2025-12-04', people: 1, total: '900,000₫', status: 'Đã xác nhận', badge: 'bg-success' }
    ],
    'Phạm Thu S': [
        { id: 'BK020', tour: 'Tour Cần Giờ – Rừng Ngập Mặn', bookDate: '20/11/2025', departure: '2025-12-06', people: 3, total: '2,550,000₫', status: 'Đang xử lý', badge: 'bg-info' }
    ]
};

// === HELPER FUNCTIONS ===
function getURLParameter(name) {
    return new URLSearchParams(window.location.search).get(name);
}

// Hàm chuyển đổi chuỗi tiền '1,000,000₫' thành số 1000000 để tính toán
function parseMoney(moneyStr) {
    if (!moneyStr) return 0;
    // Loại bỏ dấu phẩy, chữ đ, khoảng trắng
    return parseInt(moneyStr.replace(/[,₫\s]/g, '')) || 0;
}

// Hàm format số thành tiền tệ
function formatMoney(amount) {
    return amount.toLocaleString('vi-VN') + '₫';
}

function createActionButton(type, bookingId) {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `btn-action ${type === 'view' ? 'btn-view' : 'btn-delete'}`;
    btn.title = type === 'view' ? 'Xem chi tiết' : 'Xóa đơn hàng';

    const icon = document.createElement('i');
    icon.className = type === 'view' ? 'fas fa-eye' : 'fas fa-trash-alt';
    btn.appendChild(icon);

    if (type === 'view') {
        btn.addEventListener('click', () => {
            window.location.href = `../bookings/booking-detail.html?id=${bookingId}`;
        });
    } else {
        btn.addEventListener('click', () => {
            if (confirm(`Xóa đơn ${bookingId} này?`)) {
                const tr = btn.closest('tr');
                tr.style.opacity = '0.4';
                tr.style.pointerEvents = 'none';
                alert(`Đã xóa đơn ${bookingId} (demo)`);
                // Sau này gọi API xóa thật thì reload lại tổng tiền
            }
        });
    }
    return btn;
}

function displayCustomerInfo() {
    const customerId = getURLParameter('id') || 'CUS002';
    const customer = customersData[customerId];

    // Xử lý khi không tìm thấy khách hàng mà không dùng innerHTML để replace toàn bộ body
    if (!customer) {
        const errorDiv = document.createElement('div');
        errorDiv.style.textAlign = 'center';
        errorDiv.style.marginTop = '100px';
        errorDiv.style.color = 'red';
        const h2 = document.createElement('h2');
        h2.textContent = `Không tìm thấy khách hàng ${customerId}`;
        errorDiv.appendChild(h2);

        document.body.innerHTML = ''; // Clear body cũ
        document.body.appendChild(errorDiv);
        return;
    }

    // 1. Lấy danh sách booking của khách
    const bookings = bookingsByCustomer[customer.name] || [];

    // 2. Tính toán tổng tiền thực tế (chỉ tính đơn KHÔNG bị hủy)
    let calculatedTotalSpent = 0;
    bookings.forEach(b => {
        if (b.status !== 'Đã hủy') {
            calculatedTotalSpent += parseMoney(b.total);
        }
    });

    // Cập nhật giao diện thông tin khách hàng
    const avatarImg = document.querySelector('.profile-user-img');
    if(avatarImg) avatarImg.src = customer.avatar;

    const userName = document.querySelector('.profile-username');
    if(userName) userName.textContent = customer.name;

    const userCategory = document.querySelector('.text-muted.text-center');
    if(userCategory) userCategory.textContent = 'Khách hàng ' + customer.category;

    // Cập nhật list group bên trái
    const infoItems = document.querySelectorAll('.list-group-item .float-right');
    if (infoItems.length >= 6) {
        infoItems[0].textContent = customer.id;
        infoItems[1].textContent = customer.email;
        infoItems[2].textContent = customer.phone;
        infoItems[3].textContent = customer.joinDate;

        // Gán giá trị tổng tiền ĐÃ TÍNH TOÁN thay vì giá trị cứng từ customersData
        infoItems[4].textContent = formatMoney(calculatedTotalSpent);
        infoItems[4].classList.add('text-success', 'font-weight-bold');

        // Cập nhật số tour (đếm số tour không hủy hoặc tổng tour tùy logic, ở đây lấy tổng tour trong list)
        infoItems[5].textContent = bookings.length + ' tour';
    }

    const emailBtn = document.querySelector('.btn-primary.btn-block');
    if(emailBtn) emailBtn.href = 'mailto:' + customer.email;

    const personalInfos = document.querySelectorAll('.card-info .text-muted');
    if (personalInfos.length >= 4) {
        personalInfos[0].textContent = customer.cccd;
        personalInfos[1].textContent = customer.gender;
        personalInfos[2].textContent = customer.birthday;
        personalInfos[3].textContent = customer.address;
    }

    // 3. Render bảng lịch sử đặt tour (Dùng createElement - An toàn)
    const cardTitle = document.querySelector('.card-title');
    if(cardTitle) cardTitle.textContent = `Lịch sử đặt tour (${bookings.length} đơn)`;

    const tbody = document.querySelector('tbody');
    // Xóa nội dung cũ an toàn
    while (tbody.firstChild) {
        tbody.removeChild(tbody.firstChild);
    }

    bookings.forEach(b => {
        const tr = document.createElement('tr');

        // Helper để tạo td nhanh
        const createTd = (text, className = '') => {
            const td = document.createElement('td');
            td.textContent = text;
            if (className) td.className = className;
            return td;
        };

        tr.appendChild(createTd(b.id));
        tr.appendChild(createTd(b.tour));
        tr.appendChild(createTd(b.bookDate));
        tr.appendChild(createTd(b.departure));
        tr.appendChild(createTd(b.people + ' người'));

        // Cột tổng tiền
        tr.appendChild(createTd(b.total, 'text-success font-weight-bold'));

        // Cột trạng thái (badge)
        const tdStatus = document.createElement('td');
        const badge = document.createElement('span');
        badge.className = 'badge ' + b.badge;
        badge.textContent = b.status;
        tdStatus.appendChild(badge);
        tr.appendChild(tdStatus);

        // Cột hành động
        const tdAction = document.createElement('td');
        tdAction.className = 'text-center';
        tdAction.appendChild(createActionButton('view', b.id));
        tdAction.appendChild(document.createTextNode(' '));
        tdAction.appendChild(createActionButton('delete', b.id));
        tr.appendChild(tdAction);

        tbody.appendChild(tr);
    });
}

document.addEventListener('DOMContentLoaded', displayCustomerInfo);