$(document).ready(function() {
    const PAGE_SIZE = 10;
    let currentPage = 1;

    if ($('#reviewsTable').length) {
        // Giữ nguyên DataTable nhưng tắt phân trang mặc định
        const table = $('#reviewsTable').DataTable({
            paging: false,
            info: false,
            searching: true,
            lengthChange: false,
            ordering: true,
            autoWidth: false,
            columnDefs: [{ orderable: false, targets: [7] }],
            language: { zeroRecords: "Không tìm thấy dữ liệu" }
        });

        // Hàm chính
        function showPage(page) {
            currentPage = page;
            const filteredRows = table.rows({search: 'applied'}).nodes();
            const total = filteredRows.length;

            // Ẩn tất cả dòng đã lọc
            $(filteredRows).hide();

            // Tính toán và hiện đúng 10 dòng từ filtered
            const start = (page - 1) * PAGE_SIZE;
            const end = start + PAGE_SIZE;
            $(filteredRows).slice(start, end).show();

            // Cập nhật thông tin
            const from = total > 0 ? start + 1 : 0;
            const to = Math.min(end, total);
            $('.dataTables_wrapper .dataTables_info').html(
                `Hiển thị <strong>${from}</strong> đến <strong>${to}</strong> trong tổng số <strong>${total}</strong> đánh giá`
            );

            // Vẽ lại số trang
            const totalPages = Math.ceil(total / PAGE_SIZE);
            const container = $('.dataTables_paginate span');
            container.empty();

            for (let i = 1; i <= totalPages; i++) {
                const active = i === currentPage ? 'current' : '';
                container.append(`<a class="paginate_button ${active}">${i}</a>`);
            }

            // Xử lý nút Trước / Sau
            $('.dataTables_paginate .previous')
                .off('click').toggleClass('disabled', currentPage === 1)
                .on('click', () => { if (currentPage > 1) showPage(currentPage - 1); });

            $('.dataTables_paginate .next')
                .off('click').toggleClass('disabled', currentPage === totalPages)
                .on('click', () => { if (currentPage < totalPages) showPage(currentPage + 1); });

            // Click vào số trang
            container.find('a').off('click').on('click', function() {
                showPage(parseInt($(this).text()));
            });
        }

        // Bộ lọc - giữ nguyên nhưng gọi showPage sau
        $('#reviewSearch').on('keyup', function() {
            table.search(this.value).draw();
            currentPage = 1;
            showPage(1);
        });

        $('#statusFilter').on('change', function() {
            const val = $.fn.dataTable.util.escapeRegex($(this).val());
            table.column(6).search(val ? '^' + val + '$' : '', true, false).draw();
            currentPage = 1;
            showPage(1);
        });

        $('#starFilter').on('change', function() {
            table.column(3).search($(this).val()).draw();
            currentPage = 1;
            showPage(1);
        });

        // Khởi chạy lần đầu
        showPage(1);
    }
});