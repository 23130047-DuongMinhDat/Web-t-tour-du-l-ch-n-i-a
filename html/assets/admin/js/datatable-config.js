"use strict";

// DataTable default config (Vietnamese)
const dataTableConfig = {
    language: {
        lengthMenu: "Hiển thị _MENU_ mục/trang",
        search: "Tìm kiếm:",
        info: "Hiển thị _START_ đến _END_ trong _TOTAL_ mục",
        infoEmpty: "Không có dữ liệu",
        infoFiltered: "(lọc từ _MAX_ mục)",
        paginate: {
            first: "Đầu",
            last: "Cuối",
            next: "Sau",
            previous: "Trước"
        },
        emptyTable: "Không có dữ liệu",
        zeroRecords: "Không tìm thấy kết quả"
    },
    pageLength: 10,
    responsive: true,
    dom: '<"top"lf>rt<"bottom"ip><"clear">'
};

// Function tạo action buttons
function createActionButtons(id, editUrl = '#', deleteFunc = 'deleteItem') {
    return `
        <div class="#tourTable__action-buttons">
            <a href="${editUrl}?id=${id}" class="btn btn-sm btn-success" title="Sửa">
                <i class="fas fa-edit"></i>
            </a>
            <button onclick="${deleteFunc}(${id})" class="btn btn-sm btn-danger" title="Xóa">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
}

// Function tạo badge status
function createStatusBadge(status) {
    const badgeClass = status === 'Hoạt động' ? 'badge-success' : 'badge-warning';
    const icon = status === 'Hoạt động' ? 'fa-check-circle' : 'fa-pause-circle';
    return `<span class="badge ${badgeClass}"><i class="fas ${icon}"></i> ${status}</span>`;
}

// Function tạo booking status badge
function createBookingStatusBadge(status) {
    let badgeClass = '';
    let statusText = '';

    switch (status) {
        case 'Pending':
            badgeClass = 'status-badge--pending';
            statusText = 'Chờ xử lý';
            break;
        case 'Confirmed':
            badgeClass = 'status-badge--confirmed';
            statusText = 'Đã xác nhận';
            break;
        case 'Completed':
            badgeClass = 'status-badge--completed';
            statusText = 'Hoàn thành';
            break;
        case 'Cancelled':
            badgeClass = 'status-badge--cancelled';
            statusText = 'Đã hủy';
            break;
        default:
            badgeClass = 'status-badge--pending';
            statusText = status;
    }

    return `<span class="status-badge ${badgeClass}">${statusText}</span>`;
}

