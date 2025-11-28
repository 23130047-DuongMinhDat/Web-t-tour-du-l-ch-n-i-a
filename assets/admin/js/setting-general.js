// assets/admin/js/settings/setting-general.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('generalForm');
    if (!form) return;

    form.addEventListener('submit', function (e) {
        e.preventDefault();

        // Thu thập dữ liệu (demo)
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        console.log('Cài đặt chung:', data);

        // TODO: Gửi API thật ở đây
        // fetch('/api/settings/general', { method: 'POST', body: formData })

        // Thông báo thành công đẹp
        showToast('Cài đặt chung đã được lưu thành công!', 'success');
    });
});