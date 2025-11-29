$(document).ready(function() {
    const PAGE_SIZE = 10;
    let currentPage = 1;

    if ($('#reviewsTable').length) {

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

        const infoBox = document.querySelector('.dataTables_wrapper .dataTables_info');
        const pageContainer = document.querySelector('.dataTables_paginate span');
        const prevBtn = document.querySelector('.dataTables_paginate .previous');
        const nextBtn = document.querySelector('.dataTables_paginate .next');

        function clearChildren(el) {
            while (el.firstChild) el.removeChild(el.firstChild);
        }

        function createPageBtn(page, isActive) {
            const btn = document.createElement("button");
            btn.classList.add("paginate_button");
            if (isActive) btn.classList.add("current");
            btn.textContent = page;
            btn.addEventListener("click", () => showPage(page));
            return btn;
        }

        function showPage(page) {
            currentPage = page;

            const filteredRows = table.rows({search: 'applied'}).nodes();
            const total = filteredRows.length;

            $(filteredRows).hide();
            const start = (page - 1) * PAGE_SIZE;
            const end = start + PAGE_SIZE;
            $(filteredRows).slice(start, end).show();

            // update info text
            const from = total > 0 ? start + 1 : 0;
            const to = Math.min(end, total);
            infoBox.textContent = `Hiển thị ${from} đến ${to} trong tổng số ${total} đánh giá`;

            // render page buttons (không dùng HTML string)
            clearChildren(pageContainer);
            const totalPages = Math.ceil(total / PAGE_SIZE);

            for (let i = 1; i <= totalPages; i++) {
                const btn = createPageBtn(i, i === currentPage);
                pageContainer.appendChild(btn);
            }

            // previous
            prevBtn.classList.toggle("disabled", currentPage === 1);
            prevBtn.onclick = () => {
                if (currentPage > 1) showPage(currentPage - 1);
            };

            // next
            nextBtn.classList.toggle("disabled", currentPage === totalPages);
            nextBtn.onclick = () => {
                if (currentPage < totalPages) showPage(currentPage + 1);
            };
        }

        $('#reviewSearch').on('keyup', function() {
            table.search(this.value).draw();
            showPage(1);
        });

        $('#statusFilter').on('change', function() {
            const val = $.fn.dataTable.util.escapeRegex($(this).val());
            table.column(6).search(val ? '^' + val + '$' : '', true, false).draw();
            showPage(1);
        });

        $('#starFilter').on('change', function() {
            table.column(3).search($(this).val()).draw();
            showPage(1);
        });

        showPage(1);
    }
});
