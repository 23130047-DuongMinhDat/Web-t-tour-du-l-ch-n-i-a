// assets/admin/js/settings/setting-profile.js
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('profileForm');
    const avatarInput = document.getElementById('avatarInput');
    const avatarPreview = document.querySelector('.profile-avatar');

    if (!form) return;

    // Preview ảnh đại diện khi chọn file
    if (avatarInput) {
        avatarInput.addEventListener('change', function (e) {
            if (e.target.files && e.target.files[0]) {
                const reader = new FileReader();
                reader.onload = function (ev) {
                    avatarPreview.src = ev.target.result;
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        });
    }

    // Submit form hồ sơ
    form.addEventListener('submit', function (e) {
        e.preventDefault();

        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            password: formData.get('password') || null // chỉ gửi nếu có nhập
        };

        console.log('Cập nhật hồ sơ:', data);

        // TODO: Gọi API cập nhật profile
        // fetch('/api/admin/profile', { method: 'POST', body: formData })

        showToast('Hồ sơ đã được cập nhật thành công!', 'success');
    });
});