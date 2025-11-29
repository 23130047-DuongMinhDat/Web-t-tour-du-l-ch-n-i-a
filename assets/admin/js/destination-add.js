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

    // Preview + xóa ảnh phụ (KHÔNG dùng innerHTML)
    if (galleryInput) {
        galleryInput.addEventListener('change', function (e) {

            // Xóa preview cũ (an toàn, không innerHTML)
            while (galleryPreview.firstChild) {
                galleryPreview.removeChild(galleryPreview.firstChild);
            }

            Array.from(e.target.files).forEach(file => {
                if (file.type.match('image.*')) {
                    const reader = new FileReader();
                    reader.onload = function (ev) {

                        const div = document.createElement('div');
                        div.classList.add('image-preview');

                        const img = document.createElement('img');
                        img.src = ev.target.result;
                        img.alt = "Preview";

                        const btn = document.createElement('button');
                        btn.type = 'button';
                        btn.classList.add('remove-img');
                        btn.title = "Xóa ảnh này";
                        btn.textContent = "×";

                        div.appendChild(img);
                        div.appendChild(btn);

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
        }
    });

    // Demo submit
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();
            const formData = new FormData(form);
            alert('Địa điểm mới đã được thêm thành công!');
        });
    }
});
