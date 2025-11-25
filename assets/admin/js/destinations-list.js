$(document).ready(function () {

    const table = $('#destinationTable').DataTable({
        ...dataTableConfig,
        order: [[0, 'desc']]
    });

    // Filter theo khu vực
    $('#regionFilter').on('change', function () {
        table.column(3).search(this.value).draw();
    });

    // Filter theo trạng thái
    $('#statusFilter').on('change', function () {
        table.column(5).search(this.value).draw();
    });

    // Tìm kiếm toàn cục từ header
    $('#searchQuery').on('keyup', function () {
        table.search(this.value).draw();
    });
});

// Xóa điểm đến
function confirmDelete(id) {
    if (confirmDelete('Bạn có chắc muốn xóa điểm đến này?')) {
        showToast('Đã xóa điểm đến ID: ' + id, 'success');
        // Thực hiện xóa thực tế (API call)
        location.reload();
    }
}