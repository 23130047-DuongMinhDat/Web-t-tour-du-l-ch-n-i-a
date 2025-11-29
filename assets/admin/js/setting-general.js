// assets/admin/js/settings/setting-general.js
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('generalForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData);

        console.log('Cài đặt chung:', data);

        // fetch('/api/settings/general', { method: 'POST', body: formData })

        showToast('Cài đặt chung đã được lưu thành công!', 'success');
    });
});
