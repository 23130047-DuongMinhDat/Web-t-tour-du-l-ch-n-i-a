const toursData = {
    '1': {
        id: 1,
        name: 'Tour Đà Lạt 3N2Đ',
        code: 'DL-3N2D',
        region: 'Lâm Đồng',
        duration: '3 ngày 2 đêm',
        priceAdult: '3,200,000₫',
        priceChild: '1,600,000₫',
        shortDesc: 'Khám phá thành phố ngàn hoa Đà Lạt với khí hậu mát mẻ quanh năm. Tham quan Hồ Xuân Hương, Thung Lũng Tình Yêu.',
        itinerary: '<p><strong>Ngày 1:</strong> TP.HCM - Đà Lạt - Quảng trường Lâm Viên</p><p><strong>Ngày 2:</strong> Langbiang - Vườn hoa - Chợ đêm</p><p><strong>Ngày 3:</strong> Mua sắm đặc sản - TP.HCM</p>',
        status: 'Hoạt động',
        statusBadge: 'bg-success',
        createdDate: '15/11/2024',
        updatedDate: '20/11/2024',
        totalBookings: 45,
        totalRevenue: '144,000,000₫',
        avgRating: '4.8/5',
        totalViews: 1250,
        mainImage: '../../assets/admin/img/tour-image1.jpg'
    },
    '2': {
        id: 2,
        name: 'Tour Nha Trang 4N3Đ',
        code: 'NT-4N3D',
        region: 'Khánh Hòa',
        duration: '4 ngày 3 đêm',
        priceAdult: '4,500,000₫',
        priceChild: '2,250,000₫',
        shortDesc: 'Tận hưởng bãi biển xanh ngắt tại Nha Trang, tham quan VinWonders và tắm bùn khoáng nóng.',
        itinerary: '<p><strong>Ngày 1:</strong> Đón sân bay - Nhận phòng - Tắm biển</p><p><strong>Ngày 2:</strong> Tour 4 đảo - Lặn ngắm san hô</p><p><strong>Ngày 3:</strong> VinWonders Nha Trang</p><p><strong>Ngày 4:</strong> Tháp Bà Ponagar - Tiễn sân bay</p>',
        status: 'Hoạt động',
        statusBadge: 'bg-success',
        createdDate: '10/11/2024',
        updatedDate: '22/11/2024',
        totalBookings: 32,
        totalRevenue: '144,000,000₫',
        avgRating: '4.7/5',
        totalViews: 980,
        mainImage: '../../assets/admin/img/tour-image1.jpg'
    },
    '3': {
        id: 3,
        name: 'Tour Hội An - Đà Nẵng',
        code: 'DN-HA-3N',
        region: 'Miền Trung',
        duration: '3 ngày 2 đêm',
        priceAdult: '2,900,000₫',
        priceChild: '1,450,000₫',
        shortDesc: 'Hành trình di sản miền Trung: Phố cổ Hội An lung linh đèn lồng và Đà Nẵng năng động.',
        itinerary: '<p><strong>Ngày 1:</strong> Ngũ Hành Sơn - Phố cổ Hội An</p><p><strong>Ngày 2:</strong> Bà Nà Hills - Cầu Vàng</p><p><strong>Ngày 3:</strong> Bán đảo Sơn Trà - Mua sắm - Tiễn khách</p>',
        status: 'Tạm dừng',
        statusBadge: 'bg-warning',
        createdDate: '01/11/2024',
        updatedDate: '15/11/2024',
        totalBookings: 15,
        totalRevenue: '43,500,000₫',
        avgRating: '4.5/5',
        totalViews: 850,
        mainImage: '../../assets/admin/img/tour-image1.jpg'
    },
    '4': {
        id: 4,
        name: 'Tour Sa Pa 3N2Đ',
        code: 'SP-3N2D',
        region: 'Lào Cai',
        duration: '3 ngày 2 đêm',
        priceAdult: '3,800,000₫',
        priceChild: '1,900,000₫',
        shortDesc: 'Chinh phục đỉnh Fansipan - Nóc nhà Đông Dương và bản làng người H\'Mông.',
        itinerary: '<p><strong>Ngày 1:</strong> Hà Nội - Sa Pa - Bản Cát Cát</p><p><strong>Ngày 2:</strong> Chinh phục Fansipan - Thác Bạc</p><p><strong>Ngày 3:</strong> Tự do mua sắm - Hà Nội</p>',
        status: 'Hoạt động',
        statusBadge: 'bg-success',
        createdDate: '20/11/2024',
        updatedDate: '25/11/2024',
        totalBookings: 50,
        totalRevenue: '190,000,000₫',
        avgRating: '4.9/5',
        totalViews: 1500,
        mainImage: '../../assets/admin/img/tour-image1.jpg'
    },
    '5': {
        id: 5,
        name: 'Tour Hạ Long 2N1Đ',
        code: 'HL-2N1D',
        region: 'Quảng Ninh',
        duration: '2 ngày 1 đêm',
        priceAdult: '1,900,000₫',
        priceChild: '950,000₫',
        shortDesc: 'Ngủ đêm trên du thuyền 5 sao, thăm hang Sửng Sốt và đảo Ti Tốp.',
        itinerary: '<p><strong>Ngày 1:</strong> Hà Nội - Hạ Long - Chèo Kayak</p><p><strong>Ngày 2:</strong> Thăm hang động - Lớp học nấu ăn - Hà Nội</p>',
        status: 'Ngưng',
        statusBadge: 'bg-danger',
        createdDate: '05/10/2024',
        updatedDate: '01/11/2024',
        totalBookings: 10,
        totalRevenue: '19,000,000₫',
        avgRating: '4.2/5',
        totalViews: 600,
        mainImage: '../../assets/admin/img/tour-image1.jpg'
    },
    '6': {
        id: 6,
        name: 'Tour Côn Đảo 3N2Đ',
        code: 'CD-3N2D',
        region: 'Bà Rịa - Vũng Tàu',
        duration: '3 ngày 2 đêm',
        priceAdult: '5,200,000₫',
        priceChild: '2,600,000₫',
        shortDesc: 'Về nguồn thăm di tích lịch sử nhà tù Côn Đảo và viếng mộ cô Sáu linh thiêng.',
        itinerary: '<p><strong>Ngày 1:</strong> TP.HCM - Côn Đảo - Trại giam Phú Hải</p><p><strong>Ngày 2:</strong> Viếng nghĩa trang Hàng Dương - Bãi Đầm Trầu</p><p><strong>Ngày 3:</strong> Chợ Côn Đảo - TP.HCM</p>',
        status: 'Hoạt động',
        statusBadge: 'bg-success',
        createdDate: '12/11/2024',
        updatedDate: '22/11/2024',
        totalBookings: 28,
        totalRevenue: '145,600,000₫',
        avgRating: '4.8/5',
        totalViews: 1100,
        mainImage: '../../assets/admin/img/tour-image1.jpg'
    },
    '7': {
        id: 7,
        name: 'Tour Phú Quốc 4N3Đ',
        code: 'PQ-4N3D',
        region: 'Kiên Giang',
        duration: '4 ngày 3 đêm',
        priceAdult: '4,900,000₫',
        priceChild: '2,450,000₫',
        shortDesc: 'Thiên đường đảo ngọc với Bãi Sao, Grand World và cáp treo Hòn Thơm.',
        itinerary: '<p><strong>Ngày 1:</strong> Đón sân bay - Sunset Sanato</p><p><strong>Ngày 2:</strong> Câu cá lặn ngắm san hô</p><p><strong>Ngày 3:</strong> VinWonders - Safari</p><p><strong>Ngày 4:</strong> Mua sắm ngọc trai - Tiễn khách</p>',
        status: 'Hoạt động',
        statusBadge: 'bg-success',
        createdDate: '18/11/2024',
        updatedDate: '24/11/2024',
        totalBookings: 60,
        totalRevenue: '294,000,000₫',
        avgRating: '4.9/5',
        totalViews: 2000,
        mainImage: '../../assets/admin/img/tour-image1.jpg'
    },
    '8': {
        id: 8,
        name: 'Tour Huế - Quảng Bình',
        code: 'HUE-QB-3N',
        region: 'Miền Trung',
        duration: '3 ngày 2 đêm',
        priceAdult: '3,300,000₫',
        priceChild: '1,650,000₫',
        shortDesc: 'Thăm cố đô Huế mộng mơ và khám phá động Phong Nha huyền bí.',
        itinerary: '<p><strong>Ngày 1:</strong> Đà Nẵng - Cố đô Huế - Chùa Thiên Mụ</p><p><strong>Ngày 2:</strong> Huế - Động Phong Nha/Thiên Đường</p><p><strong>Ngày 3:</strong> Lăng Khải Định - Tiễn sân bay</p>',
        status: 'Tạm dừng',
        statusBadge: 'bg-warning',
        createdDate: '05/11/2024',
        updatedDate: '20/11/2024',
        totalBookings: 20,
        totalRevenue: '66,000,000₫',
        avgRating: '4.4/5',
        totalViews: 750,
        mainImage: '../../assets/admin/img/tour-image1.jpg'
    },
    '9': {
        id: 9,
        name: 'Tour Miền Tây Sông Nước',
        code: 'MT-2N1D',
        region: 'ĐBSCL',
        duration: '2 ngày 1 đêm',
        priceAdult: '1,500,000₫',
        priceChild: '750,000₫',
        shortDesc: 'Trải nghiệm văn hóa chợ nổi, vườn trái cây và đờn ca tài tử.',
        itinerary: '<p><strong>Ngày 1:</strong> TP.HCM - Mỹ Tho - Bến Tre</p><p><strong>Ngày 2:</strong> Chợ nổi Cái Răng - Cần Thơ - TP.HCM</p>',
        status: 'Hoạt động',
        statusBadge: 'bg-success',
        createdDate: '15/11/2024',
        updatedDate: '25/11/2024',
        totalBookings: 80,
        totalRevenue: '120,000,000₫',
        avgRating: '4.6/5',
        totalViews: 1300,
        mainImage: '../../assets/admin/img/tour-image1.jpg'
    },
    '10': {
        id: 10,
        name: 'Tour Mộc Châu 2N1Đ',
        code: 'MC-2N1D',
        region: 'Sơn La',
        duration: '2 ngày 1 đêm',
        priceAdult: '1,700,000₫',
        priceChild: '850,000₫',
        shortDesc: 'Ngắm mùa hoa cải trắng, đồi chè trái tim và thác Dải Yếm.',
        itinerary: '<p><strong>Ngày 1:</strong> Hà Nội - Mộc Châu - Đồi chè</p><p><strong>Ngày 2:</strong> Rừng thông Bản Áng - Mua sữa bò - Hà Nội</p>',
        status: 'Hoạt động',
        statusBadge: 'bg-success',
        createdDate: '20/10/2024',
        updatedDate: '15/11/2024',
        totalBookings: 35,
        totalRevenue: '59,500,000₫',
        avgRating: '4.5/5',
        totalViews: 900,
        mainImage: '../../assets/admin/img/tour-image1.jpg'
    },
    '11': {
        id: 11,
        name: 'Tour Bình Thuận – Mũi Né',
        code: 'MN-3N2D',
        region: 'Bình Thuận',
        duration: '3 ngày 2 đêm',
        priceAdult: '2,600,000₫',
        priceChild: '1,300,000₫',
        shortDesc: 'Khám phá đồi cát bay, Bàu Trắng và lâu đài rượu vang.',
        itinerary: '<p><strong>Ngày 1:</strong> TP.HCM - Phan Thiết - Núi Tà Cú</p><p><strong>Ngày 2:</strong> Đồi Cát Bay - Bàu Trắng - Tắm biển</p><p><strong>Ngày 3:</strong> Lâu đài rượu vang - TP.HCM</p>',
        status: 'Hoạt động',
        statusBadge: 'bg-success',
        createdDate: '11/11/2024',
        updatedDate: '11/11/2024',
        totalBookings: 40,
        totalRevenue: '104,000,000₫',
        avgRating: '4.6/5',
        totalViews: 1000,
        mainImage: '../../assets/admin/img/tour-image1.jpg'
    },
    '12': {
        id: 12,
        name: 'Tour Buôn Mê Thuột',
        code: 'BMT-3N2D',
        region: 'Đắk Lắk',
        duration: '3 ngày 2 đêm',
        priceAdult: '2,900,000₫',
        priceChild: '1,450,000₫',
        shortDesc: 'Về miền đất đỏ Bazan, cưỡi voi Bản Đôn và thưởng thức cafe.',
        itinerary: '<p><strong>Ngày 1:</strong> Đón sân bay - Thác Dray Nur</p><p><strong>Ngày 2:</strong> Bản Đôn - Cầu treo - Nhà cổ</p><p><strong>Ngày 3:</strong> Bảo tàng Thế giới Cafe - Tiễn khách</p>',
        status: 'Tạm dừng',
        statusBadge: 'bg-warning',
        createdDate: '01/11/2024',
        updatedDate: '10/11/2024',
        totalBookings: 12,
        totalRevenue: '34,800,000₫',
        avgRating: '4.3/5',
        totalViews: 650,
        mainImage: '../../assets/admin/img/tour-image1.jpg'
    },
    '13': {
        id: 13,
        name: 'Tour Cần Thơ – Chợ Nổi',
        code: 'CT-2N1D',
        region: 'ĐBSCL',
        duration: '2 ngày 1 đêm',
        priceAdult: '1,300,000₫',
        priceChild: '650,000₫',
        shortDesc: 'Khám phá vẻ đẹp Tây Đô, bến Ninh Kiều và chợ nổi sáng sớm.',
        itinerary: '<p><strong>Ngày 1:</strong> TP.HCM - Cần Thơ - Nhà cổ Bình Thủy</p><p><strong>Ngày 2:</strong> Chợ nổi Cái Răng - Lò hủ tiếu - TP.HCM</p>',
        status: 'Hoạt động',
        statusBadge: 'bg-success',
        createdDate: '14/11/2024',
        updatedDate: '24/11/2024',
        totalBookings: 55,
        totalRevenue: '71,500,000₫',
        avgRating: '4.7/5',
        totalViews: 1150,
        mainImage: '../../assets/admin/img/tour-image1.jpg'
    },
    '14': {
        id: 14,
        name: 'Tour Quy Nhơn – Eo Gió',
        code: 'QN-3N2D',
        region: 'Bình Định',
        duration: '3 ngày 2 đêm',
        priceAdult: '3,500,000₫',
        priceChild: '1,750,000₫',
        shortDesc: 'Check-in Eo Gió, Kỳ Co - Maldives của Việt Nam.',
        itinerary: '<p><strong>Ngày 1:</strong> Đón sân bay - Ghềnh Ráng Tiên Sa</p><p><strong>Ngày 2:</strong> Kỳ Co - Eo Gió - Tịnh xá Ngọc Hòa</p><p><strong>Ngày 3:</strong> Tháp Đôi - Mua đặc sản - Tiễn khách</p>',
        status: 'Hoạt động',
        statusBadge: 'bg-success',
        createdDate: '05/11/2024',
        updatedDate: '20/11/2024',
        totalBookings: 38,
        totalRevenue: '133,000,000₫',
        avgRating: '4.8/5',
        totalViews: 1050,
        mainImage: '../../assets/admin/img/tour-image1.jpg'
    },
    '15': {
        id: 15,
        name: 'Tour Cà Mau – Đất Mũi',
        code: 'CM-2N1D',
        region: 'ĐBSCL',
        duration: '2 ngày 1 đêm',
        priceAdult: '2,100,000₫',
        priceChild: '1,050,000₫',
        shortDesc: 'Chinh phục cực Nam tổ quốc, check-in cột mốc tọa độ quốc gia.',
        itinerary: '<p><strong>Ngày 1:</strong> Cần Thơ - Cà Mau - Rừng U Minh</p><p><strong>Ngày 2:</strong> Đất Mũi - Cột mốc tọa độ - Bạc Liêu - TP.HCM</p>',
        status: 'Ngưng',
        statusBadge: 'bg-danger',
        createdDate: '01/10/2024',
        updatedDate: '01/10/2024',
        totalBookings: 8,
        totalRevenue: '16,800,000₫',
        avgRating: '4.1/5',
        totalViews: 500,
        mainImage: '../../assets/admin/img/tour-image1.jpg'
    },
    '16': {
        id: 16,
        name: 'Tour Đồng Tháp – Tràm Chim',
        code: 'DT-2N1D',
        region: 'ĐBSCL',
        duration: '2 ngày 1 đêm',
        priceAdult: '1,400,000₫',
        priceChild: '700,000₫',
        shortDesc: 'Ngắm sếu đầu đỏ, thăm làng hoa Sa Đéc rực rỡ sắc màu.',
        itinerary: '<p><strong>Ngày 1:</strong> TP.HCM - Sa Đéc - Nhà cổ Huỳnh Thủy Lê</p><p><strong>Ngày 2:</strong> Vườn quốc gia Tràm Chim - TP.HCM</p>',
        status: 'Hoạt động',
        statusBadge: 'bg-success',
        createdDate: '16/11/2024',
        updatedDate: '26/11/2024',
        totalBookings: 25,
        totalRevenue: '35,000,000₫',
        avgRating: '4.5/5',
        totalViews: 800,
        mainImage: '../../assets/admin/img/tour-image1.jpg'
    },
    '17': {
        id: 17,
        name: 'Tour Đảo Nam Du',
        code: 'ND-3N2D',
        region: 'Kiên Giang',
        duration: '3 ngày 2 đêm',
        priceAdult: '3,200,000₫',
        priceChild: '1,600,000₫',
        shortDesc: 'Khám phá hòn đảo hoang sơ, lặn ngắm san hô và thưởng thức hải sản.',
        itinerary: '<p><strong>Ngày 1:</strong> Rạch Giá - Nam Du - Hòn Củ Tron</p><p><strong>Ngày 2:</strong> Hòn Mấu - Hòn Dầu - Lặn san hô</p><p><strong>Ngày 3:</strong> Ngọn hải đăng - Rạch Giá - TP.HCM</p>',
        status: 'Hoạt động',
        statusBadge: 'bg-success',
        createdDate: '12/11/2024',
        updatedDate: '24/11/2024',
        totalBookings: 30,
        totalRevenue: '96,000,000₫',
        avgRating: '4.6/5',
        totalViews: 950,
        mainImage: '../../assets/admin/img/tour-image1.jpg'
    },
    '18': {
        id: 18,
        name: 'Tour Điện Biên – A1',
        code: 'DB-3N2D',
        region: 'Điện Biên',
        duration: '3 ngày 2 đêm',
        priceAdult: '2,400,000₫',
        priceChild: '1,200,000₫',
        shortDesc: 'Thăm chiến trường xưa Điện Biên Phủ lừng lẫy năm châu.',
        itinerary: '<p><strong>Ngày 1:</strong> Hà Nội - Đèo Pha Đin - Điện Biên</p><p><strong>Ngày 2:</strong> Đồi A1 - Hầm De Castries - Hồ Pá Khoang</p><p><strong>Ngày 3:</strong> Bảo tàng chiến thắng - Hà Nội</p>',
        status: 'Tạm dừng',
        statusBadge: 'bg-warning',
        createdDate: '02/11/2024',
        updatedDate: '15/11/2024',
        totalBookings: 18,
        totalRevenue: '43,200,000₫',
        avgRating: '4.4/5',
        totalViews: 700,
        mainImage: '../../assets/admin/img/tour-image1.jpg'
    },
    '19': {
        id: 19,
        name: 'Tour Sài Gòn City Tour',
        code: 'SG-1N',
        region: 'Hồ Chí Minh',
        duration: '1 ngày',
        priceAdult: '900,000₫',
        priceChild: '450,000₫',
        shortDesc: 'Dạo quanh các địa danh lịch sử nổi tiếng nhất Hòn ngọc Viễn Đông.',
        itinerary: '<p><strong>Sáng:</strong> Dinh Độc Lập - Nhà thờ Đức Bà - Bưu điện</p><p><strong>Chiều:</strong> Bảo tàng Chứng tích Chiến tranh - Chợ Bến Thành</p>',
        status: 'Hoạt động',
        statusBadge: 'bg-success',
        createdDate: '01/11/2024',
        updatedDate: '28/11/2024',
        totalBookings: 120,
        totalRevenue: '108,000,000₫',
        avgRating: '4.7/5',
        totalViews: 2500,
        mainImage: '../../assets/admin/img/tour-image1.jpg'
    },
    '20': {
        id: 20,
        name: 'Tour Cần Giờ – Rừng Ngập Mặn',
        code: 'CG-1N',
        region: 'Hồ Chí Minh',
        duration: '1 ngày',
        priceAdult: '850,000₫',
        priceChild: '425,000₫',
        shortDesc: 'Tham quan đảo khỉ, chiến khu Rừng Sác và chợ hải sản Hàng Dương.',
        itinerary: '<p><strong>Sáng:</strong> TP.HCM - Đảo Khỉ - Xem xiếc cá sấu</p><p><strong>Chiều:</strong> Cano thăm chiến khu Rừng Sác - Chợ Hàng Dương</p>',
        status: 'Hoạt động',
        statusBadge: 'bg-success',
        createdDate: '05/11/2024',
        updatedDate: '25/11/2024',
        totalBookings: 90,
        totalRevenue: '76,500,000₫',
        avgRating: '4.5/5',
        totalViews: 1800,
        mainImage: '../../assets/admin/img/tour-image1.jpg'
    }
};

document.addEventListener('DOMContentLoaded', function() {
    // 1. Lấy ID
    const urlParams = new URLSearchParams(window.location.search);
    const tourId = urlParams.get('id');

    // 2. Kiểm tra nếu có ID và dữ liệu tồn tại
    if (tourId && toursData[tourId]) {
        const tour = toursData[tourId];

        // Thông tin cơ bản
        setText('tourName', tour.name);
        setText('tourCode', tour.code);
        setText('tourRegion', tour.region);
        setText('tourDuration', tour.duration);

        // Giá
        setText('priceAdult', tour.priceAdult);
        setText('priceChild', tour.priceChild);

        // Mô tả & Hành trình
        setText('tourShortDesc', tour.shortDesc);
        if(document.getElementById('tourItinerary')) {
            document.getElementById('tourItinerary').innerHTML = tour.itinerary;
        }

        // Trạng thái (Badge)
        const statusBadge = document.getElementById('tourStatus');
        if (statusBadge) {
            statusBadge.textContent = tour.status;
            // Reset class và thêm class mới
            statusBadge.className = 'badge';
            statusBadge.classList.add(tour.statusBadge);
        }

        // Ngày tháng & Thống kê
        setText('createdDate', tour.createdDate);
        setText('updatedDate', tour.updatedDate);
        setText('totalBookings', tour.totalBookings);
        setText('totalRevenue', tour.totalRevenue);
        setText('avgRating', tour.avgRating);

        // Tổng lượt xem (nếu có element này)
        if(tour.totalViews) {
            setText('totalViews', tour.totalViews.toLocaleString());
        }

        // Ảnh đại diện
        const imgEl = document.getElementById('tourMainImage');
        if (imgEl) imgEl.src = tour.mainImage;

        //khi bấm Sửa vẫn nhớ là tour nào
        const editLink = document.querySelector('a[href*="edit"]');
        if (editLink) {

            editLink.href = `tour-edit.html?id=${tourId}`;
        }

    } else {
        // Trường hợp không tìm thấy ID hoặc ID sai
        console.warn('Không tìm thấy thông tin tour cho ID:', tourId);
    }
});


function setText(id, value) {
    const el = document.getElementById(id);
    if (el) el.textContent = value;
}