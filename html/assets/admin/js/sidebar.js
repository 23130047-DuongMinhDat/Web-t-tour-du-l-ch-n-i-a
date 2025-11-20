"use strict";

// Toggle sidebar
document.addEventListener('DOMContentLoaded', function () {
    const sidebarToggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.main-sidebar');
    const wrapper = document.querySelector('.wrapper');

    if (sidebarToggle && sidebar && wrapper) {
        sidebarToggle.addEventListener('click', function () {
            // Toggle class collapsed
            const isCollapsed = sidebar.classList.toggle('collapsed');
            wrapper.classList.toggle('sidebar-collapsed');

            // Đổi icon - SỬA LẠI CÁCH LÀM
            const icon = this.querySelector('i');

            // Xóa TẤT CẢ class icon cũ trước
            icon.className = '';

            // Thêm class mới dựa trên trạng thái
            if (isCollapsed) {
                icon.className = 'fas fa-angle-right';
            } else {
                icon.className = 'fas fa-angle-left';
            }

            console.log('Sidebar collapsed:', isCollapsed);
            console.log('Icon class:', icon.className);
        });
    }

    // Treeview toggle
    const treeviewLinks = document.querySelectorAll('.has-treeview > .nav-link');

    treeviewLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();

            // Không cho mở treeview khi sidebar collapsed
            if (sidebar && sidebar.classList.contains('collapsed')) {
                return;
            }

            const parent = this.parentElement;

            // Close other opened treeviews
            document.querySelectorAll('.nav-item.open').forEach(item => {
                if (item !== parent) {
                    item.classList.remove('open');
                }
            });

            // Toggle current treeview
            parent.classList.toggle('open');
        });
    });

    // Set active menu based on current URL
    const currentPath = window.location.pathname;
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href && currentPath.includes(href)) {
            link.classList.add('active');
            const parentLi = link.closest('li');
            if (parentLi) {
                parentLi.classList.add('active');
            }
            const parent = link.closest('.has-treeview');
            if (parent) {
                parent.classList.add('open');
            }
        }
    });
});
