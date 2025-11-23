"use strict";

// Format số tiền VNĐ
function formatCurrency(amount) {
    return new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND'
    }).format(amount);
}

// Confirm delete với SweetAlert2 (nếu có) hoặc alert thường
function confirmDelete(message = 'Bạn có chắc muốn xóa?') {
    return confirm(message);
}

// Show toast notification
function showToast(message, type = 'success') {
    // Có thể dùng Toastify hoặc tự code
    alert(`[${type.toUpperCase()}] ${message}`);
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('vi-VN');
}
