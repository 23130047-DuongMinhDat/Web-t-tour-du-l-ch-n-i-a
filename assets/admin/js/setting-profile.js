document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('profileForm');
    const avatarInput = document.getElementById('avatarInput');
    const avatarPreview = document.querySelector('.profile-avatar');

    if (!form) return;

    if (avatarInput) {
        avatarInput.addEventListener('change', (e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            const reader = new FileReader();
            reader.onload = (ev) => {
                avatarPreview.src = ev.target.result;
            };
            reader.readAsDataURL(file);
        });
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            phone: formData.get('phone'),
            password: formData.get('password') || null
        };

        console.log('Cập nhật hồ sơ:', data);

        // fetch('/api/admin/profile', { method: 'POST', body: formData })

        showToast('Hồ sơ đã được cập nhật thành công!', 'success');
    });
});
