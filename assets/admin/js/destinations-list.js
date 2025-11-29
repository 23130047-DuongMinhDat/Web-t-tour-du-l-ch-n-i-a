$(document).ready(function () {

    const table = $('#destinationTable').DataTable({
        ...dataTableConfig,
        order: [[0, 'desc']]
    });

    $('#regionFilter').on('change', function () {
        table.column(3).search(this.value).draw();
    });

    $('#statusFilter').on('change', function () {
        table.column(5).search(this.value).draw();
    });

    $('#searchQuery').on('keyup', function () {
        table.search(this.value).draw();
    });
});

// Xóa điểm đến
function confirmDelete(id) {
    if (confirm('Bạn có chắc muốn xóa điểm đến này?')) {
        showToast('Đã xóa điểm đến ID: ' + id, 'success');
        location.reload();
    }
}
