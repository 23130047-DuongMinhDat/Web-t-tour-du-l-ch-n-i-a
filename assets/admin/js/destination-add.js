// assets/admin/js/destination-add.js
document.addEventListener('DOMContentLoaded', function () {
    const mainImageInput = document.querySelector('input[name="main_image"]');
    const mainImagePreview = document.getElementById('mainImagePreview');
    const galleryInput = document.querySelector('input[name="gallery_images[]"]');
    const galleryPreview = document.getElementById('galleryPreview');
    const form = document.getElementById('addDestinationForm');

    // Preview ảnh đại diện
    if (mainImageInput) {
        mainImageInput.addEventListener('change', function (e) {
            if (e.target.files && e.target.files[0]) {
                const reader = new FileReader();
                reader.onload = function (ev) {
                    mainImagePreview.src = ev.target.result;
                    mainImagePreview.classList.remove('d-none');
                };
                reader.readAsDataURL(e.target.files[0]);
            }
        });
    }

    // Preview + xóa ảnh phụ
    if (galleryInput) {
        galleryInput.addEventListener('change', function (e) {
            galleryPreview.innerHTML = ''; // Xóa preview cũ

            Array.from(e.target.files).forEach(file => {
                if (file.type.match('image.*')) {
                    const reader = new FileReader();
                    reader.onload = function (ev) {
                        const div = document.createElement('div');
                        div.className = 'image-preview';
                        div.innerHTML = `
              <img src="${ev.target.result}" alt="Preview">
              <button type="button" class="remove-img" title="Xóa ảnh này">×</button>
            `;
                        galleryPreview.appendChild(div);
                    };
                    reader.readAsDataURL(file);
                }
            });
        });
    }

    // Xử lý nút xóa ảnh phụ
    galleryPreview.addEventListener('click', function (e) {
        if (e.target.classList.contains('remove-img')) {
            e.target.parentElement.remove();
            // Optional: có thể reset input file nếu cần (phức tạp hơn, tạm để vậy là đẹp rồi)
        }
    });

    // Demo submit (sau này thay bằng fetch API thật)
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Tạo FormData để gửi kèm file
            const formData = new FormData(form);

            // Demo thông báo thành công
            alert('Địa điểm mới đã được thêm thành công!');

            // Sau này bạn sẽ dùng đoạn này:
            /*
            fetch('/api/admin/destinations', {
              method: 'POST',
              body: formData,
              headers: { 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content }
            })
            .then(res => res.json())
            .then(data => {
              if (data.success) {
                alert('Thêm thành công!');
                window.location.href = 'destinations-list.html';
              }
            });
            */
        });
    }
});