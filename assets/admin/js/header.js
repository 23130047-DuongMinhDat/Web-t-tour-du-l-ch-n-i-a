"use strict";

document.addEventListener('DOMContentLoaded', function () {
    // Toggle dropdown menus
    const notificationBtn = document.getElementById('notificationBtn');
    const notificationMenu = document.getElementById('notificationMenu');
    const userBtn = document.getElementById('userBtn');
    const userMenu = document.getElementById('userMenu');

    // Notification dropdown
    if (notificationBtn && notificationMenu) {
        notificationBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            notificationMenu.classList.toggle('show');
            if (userMenu) {
                userMenu.classList.remove('show');
            }
        });
    }

    // User dropdown
    if (userBtn && userMenu) {
        userBtn.addEventListener('click', function (e) {
            e.stopPropagation();
            userMenu.classList.toggle('show');
            if (notificationMenu) {
                notificationMenu.classList.remove('show');
            }
        });
    }

    // Close dropdowns when clicking outside
    document.addEventListener('click', function () {
        if (notificationMenu) {
            notificationMenu.classList.remove('show');
        }
        if (userMenu) {
            userMenu.classList.remove('show');
        }
    });

    // Sync menu toggle with sidebar toggle
    const menuToggle = document.getElementById('menuToggle');
    const sidebarToggle = document.getElementById('sidebarToggle');

    if (menuToggle && sidebarToggle) {
        menuToggle.addEventListener('click', function () {
            sidebarToggle.click();
        });
    }

    // Mark notification as read when clicked
    const notificationItems = document.querySelectorAll('.notification-item');
    notificationItems.forEach(item => {
        item.addEventListener('click', function () {
            this.classList.remove('unread');
        });
    });
});
