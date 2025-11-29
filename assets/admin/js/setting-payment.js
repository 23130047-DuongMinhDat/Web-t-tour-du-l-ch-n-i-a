document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('paymentForm');
    if (!form) return;

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = {
            gateway: formData.get('gateway'),
            partnerCode: formData.get('partnerCode'),
            accessKey: formData.get('accessKey'),
            secretKey: formData.get('secretKey'),
            sandbox: formData.get('sandbox') === 'on'
        };

        console.log('Cấu hình thanh toán:', data);

        // fetch('/api/settings/payment', { method: 'POST', body: JSON.stringify(data) })

        showToast('Cấu hình cổng thanh toán đã được lưu!', 'success');
    });
});
