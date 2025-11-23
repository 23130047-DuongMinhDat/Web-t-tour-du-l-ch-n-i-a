"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const sidebar = document.querySelector('.main-sidebar');
    const wrapper = document.querySelector('.wrapper');
    const sidebarToggle = document.getElementById('sidebarToggle');
    const navLinks = document.querySelectorAll('.sidebar-menu .nav-link');

    // Hàm chung để xóa tất cả các trạng thái active/open hiện tại (RẤT QUAN TRỌNG)
    function removeActiveStates() {
        // Xóa class 'active' khỏi tất cả nav-item và nav-link
        document.querySelectorAll('.sidebar-menu .active').forEach(item => {
            item.classList.remove('active');
        });
        // Xóa class 'open' khỏi tất cả nav-item (đóng tất cả submenu)
        document.querySelectorAll('.nav-item.open').forEach(item => {
            item.classList.remove('open');
        });
    }

    // --- 1. Toggle Sidebar (Giữ nguyên) ---
    if (sidebarToggle && sidebar && wrapper) {
        sidebarToggle.addEventListener('click', function () {
            const isCollapsed = sidebar.classList.toggle('collapsed');
            wrapper.classList.toggle('sidebar-collapsed');

            const icon = this.querySelector('i');
            icon.className = isCollapsed ? 'fas fa-angle-right' : 'fas fa-angle-left';
        });
    }

    // --- 2. Xử lý logic ACTIVE và TREEVIEW khi CLICK ---
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {

            const parentLi = this.closest('.nav-item');

            // Xử lý Treeview Toggle
            if (parentLi.classList.contains('has-treeview')) {
                // Ngăn chặn chuyển trang nếu href="#"
                if (this.getAttribute('href') === '#') {
                    e.preventDefault();
                }

                // Không cho mở/đóng khi sidebar collapsed
                if (sidebar && sidebar.classList.contains('collapsed')) {
                    return;
                }

                // Nếu click vào mục cha, ta cần đóng tất cả mục cha khác
                document.querySelectorAll('.nav-item.open').forEach(item => {
                    if (item !== parentLi) {
                        item.classList.remove('open');
                    }
                });

                // Toggle trạng thái mở/đóng
                parentLi.classList.toggle('open');
            }

            // XÓA ACTIVE CŨ
            // Ta cần xóa active của TẤT CẢ các mục đang active trừ mục cha nếu nó đang là treeview
            document.querySelectorAll('.sidebar-menu .nav-item.active, .sidebar-menu .nav-link.active').forEach(item => {
                // Đảm bảo không xóa active của mục cha đang được mở/đóng trong quá trình này
                if (!parentLi.classList.contains('has-treeview') || item !== parentLi) {
                    item.classList.remove('active');
                }
            });

            // GÁN ACTIVE MỚI
            // Nếu đây là liên kết trang đích, active nó
            if (this.getAttribute('href') !== '#') {
                this.classList.add('active');
                parentLi.classList.add('active');

                // Nếu click vào mục con, ta cần active cả mục cha (has-treeview) của nó
                const parentHasTreeview = parentLi.closest('.has-treeview');
                if (parentHasTreeview) {
                    parentHasTreeview.classList.add('active');
                    parentHasTreeview.querySelector('.nav-link').classList.add('active');
                }
            } else if (parentLi.classList.contains('has-treeview')) {
                // Nếu click vào mục cha, active tạm thời nó
                this.classList.add('active');
                parentLi.classList.add('active');
            }
        });
    });

    // --- 3. Set active menu Dựa trên URL (Khi tải trang) ---
    const currentPath = window.location.pathname.toLowerCase().replace(/\/$/, '');

    // BƯỚC 1: Xóa active tĩnh (Tuyệt đối cần thiết)
    removeActiveStates();

    navLinks.forEach(link => {
        const href = link.getAttribute('href') ? link.getAttribute('href').toLowerCase() : null;

        // Kiểm tra đường dẫn chính xác
        if (href && href !== '#' && currentPath.includes(href) && href.length > 1) {

            const targetLi = link.closest('.nav-item');

            // Active trang đích
            link.classList.add('active');
            if (targetLi) {
                targetLi.classList.add('active');
            }

            // Mở treeview cha và active nó
            const parentHasTreeview = link.closest('.has-treeview');
            if (parentHasTreeview) {
                parentHasTreeview.classList.add('open');
                parentHasTreeview.classList.add('active');
                parentHasTreeview.querySelector('.nav-link').classList.add('active');
            }

            // Ngăn chặn active nhiều mục (Chỉ active mục đầu tiên khớp)
            return;
        }
    });

});