"use strict";

document.addEventListener('DOMContentLoaded', function () {
    // Toggle dropdown menus
    const notificationBtn = document.getElementById('notificationBtn');
    const notificationMenu = document.getElementById('notificationMenu');
    const userBtn = document.getElementById('userBtn');
    const userMenu = document.getElementById('userMenu');

    if (notificationBtn && notificationMenu) {
        notificationBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            notificationMenu.classList.toggle('show');
            userMenu?.classList.remove('show');
        });
    }

    if (userBtn && userMenu) {
        userBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            userMenu.classList.toggle('show');
            notificationMenu?.classList.remove('show');
        });
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', function () {
        notificationMenu?.classList.remove('show');
        userMenu?.classList.remove('show');
    });

    // Sync menu toggle with sidebar toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebarToggle = document.getElementById('sidebarToggle');

    if (menuToggle && sidebarToggle) {
        menuToggle.addEventListener('click', function () {
            sidebarToggle.click();
        });
    }
});
