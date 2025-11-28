
const bookingsByCustomer = {
    'Nguyễn Văn A': [
        { id: 'BK001', total: '6,400,000₫', status: 'Đang xử lý' },
        { id: 'BK005', total: '9,500,000₫', status: 'Đã xác nhận' },
        { id: 'BK009', total: '6,000,000₫', status: 'Đã xác nhận' },
        { id: 'BK011', total: '7,800,000₫', status: 'Đã xác nhận' },
        { id: 'BK019', total: '900,000₫', status: 'Đã xác nhận' }
    ],
    'Trần Thị B': [
        { id: 'BK002', total: '18,000,000₫', status: 'Đã xác nhận' },
        { id: 'BK021', total: '6,400,000₫', status: 'Hoàn thành' },
        { id: 'BK022', total: '4,500,000₫', status: 'Hoàn thành' },
        { id: 'BK023', total: '14,700,000₫', status: 'Hoàn thành' },
        { id: 'BK024', total: '2,800,000₫', status: 'Hoàn thành' },
        { id: 'BK025', total: '1,900,000₫', status: 'Hoàn thành' },
        { id: 'BK026', total: '1,500,000₫', status: 'Hoàn thành' },
        { id: 'BK027', total: '1,400,000₫', status: 'Hoàn thành' }
    ],
    'Lê Minh C': [
        { id: 'BK003', total: '8,700,000₫', status: 'Chờ thanh toán' },
        { id: 'BK008', total: '6,600,000₫', status: 'Chờ thanh toán' }
    ],
    'Phạm Ngọc D': [
        { id: 'BK004', total: '3,800,000₫', status: 'Đã hủy' }
    ],
    'Đỗ Nhật E': [
        { id: 'BK005', total: '9,500,000₫', status: 'Đã xác nhận' }
    ],
    'Vũ Thảo Nhi': [
        { id: 'BK006', total: '10,400,000₫', status: 'Đang xử lý' }
    ],
    'Hoàng Xuân F': [
        { id: 'BK007', total: '14,700,000₫', status: 'Đã xác nhận' }
    ],
    'Nguyễn Khánh G': [
        { id: 'BK008', total: '6,600,000₫', status: 'Chờ thanh toán' }
    ],
    'Ngô Bích H': [
        { id: 'BK009', total: '6,000,000₫', status: 'Đã xác nhận' }
    ],
    'Đinh Quốc I': [
        { id: 'BK010', total: '3,400,000₫', status: 'Đang xử lý' }
    ],
    'Phan Mỹ J': [
        { id: 'BK011', total: '7,800,000₫', status: 'Đã xác nhận' }
    ],
    'Đỗ Lâm K': [
        { id: 'BK012', total: '2,900,000₫', status: 'Chờ thanh toán' }
    ],
    'Lý Ánh L': [
        { id: 'BK013', total: '6,500,000₫', status: 'Đã hủy' }
    ],
    'Phùng Thanh M': [
        { id: 'BK014', total: '7,000,000₫', status: 'Đang xử lý' }
    ],
    'Đặng Bảo N': [
        { id: 'BK015', total: '6,300,000₫', status: 'Đã xác nhận' }
    ],
    'Mai Tố O': [
        { id: 'BK016', total: '2,800,000₫', status: 'Chờ thanh toán' }
    ],
    'Nguyễn Quốc P': [
        { id: 'BK017', total: '12,800,000₫', status: 'Đã xác nhận' }
    ],
    'Đoàn Bích Q': [
        { id: 'BK018', total: '4,800,000₫', status: 'Đã hủy' }
    ],
    'Huỳnh Gia R': [
        { id: 'BK019', total: '900,000₫', status: 'Đã xác nhận' }
    ],
    'Phạm Thu S': [
        { id: 'BK020', total: '2,550,000₫', status: 'Đang xử lý' }
    ]
};

// Hàm chuyển đổi chuỗi tiền thành số
function parseMoney(moneyStr) {
    if (!moneyStr) return 0;
    return parseInt(moneyStr.replace(/[,₫\s]/g, '')) || 0;
}

// Hàm format số thành tiền
function formatMoney(amount) {
    return amount.toLocaleString('vi-VN') + '₫';
}

function updateCustomersTable() {
    // Lấy tất cả các dòng trong bảng (trừ header)
    const rows = document.querySelectorAll('#bookingsTable tbody tr');

    rows.forEach(row => {
        // Cột tên khách hàng là cột thứ 2
        const nameCell = row.cells[1];
        if (!nameCell) return;

        const customerName = nameCell.textContent.trim();
        const bookings = bookingsByCustomer[customerName] || [];

        // Tính toán lại
        let totalSpent = 0;
        let totalTours = bookings.length; // Tổng số tour đã đặt

        bookings.forEach(b => {
            // Chỉ cộng tiền các đơn KHÔNG bị hủy
            if (b.status !== 'Đã hủy') {
                totalSpent += parseMoney(b.total);
            }
        });

        // Cập nhật vào bảng
        // Cột "Số tour đã đặt" là cột thứ 5 (index 4)
        const tourCountCell = row.cells[4];
        if (tourCountCell) {
            tourCountCell.textContent = totalTours;
        }

        // Cột "Tổng chi tiêu" là cột thứ 6 (index 5)
        const spentCell = row.cells[5];
        if (spentCell) {
            spentCell.textContent = formatMoney(totalSpent);
            // Thêm class để hiển thị đẹp hơn nếu cần
            spentCell.classList.add('font-weight-bold');
        }
    });
}


document.addEventListener('DOMContentLoaded', updateCustomersTable);