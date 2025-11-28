
const paymentData = {
    1: {
        id: 1,
        bookingCode: "#BK001",
        customer: "Nguyễn Văn A (CUS001)",
        tour: "Tour Đà Lạt 3N2Đ",
        amount: "3,200,000₫",
        method: "Chuyển khoản",
        payDate: "15/12/2024 14:30:00",
        status: "Hoàn thành",
        statusClass: "bg-success",
        transactionId: "TRAN-123456789",
        fromAccount: "**** **** **** 1234 (Vietcombank)",
        toAccount: "**** **** **** 5678 (VietTravel)",
        fee: "10,000₫",
        note: "Thanh toán cho tour Đà Lạt 3N2Đ",
        history: [
            "15/12/2024 14:00:00 - Tạo thanh toán (Chờ xử lý)",
            "15/12/2024 14:15:00 - Xác nhận giao dịch",
            "15/12/2024 14:30:00 - Hoàn tất thanh toán"
        ]
    },
    2: {
        id: 2,
        bookingCode: "#BK002",
        customer: "Trần Thị B (CUS002)",
        tour: "Tour Nha Trang 4N3Đ",
        amount: "4,500,000₫",
        method: "Tiền mặt",
        payDate: "16/12/2024 09:15:00",
        status: "Chờ xử lý",
        statusClass: "bg-warning",
        transactionId: "CASH-20241216-001",
        fromAccount: "N/A",
        toAccount: "Quầy thu ngân VietTravel",
        fee: "0₫",
        note: "Khách thanh toán trực tiếp tại văn phòng",
        history: [
            "16/12/2024 09:00:00 - Tạo thanh toán",
            "16/12/2024 09:15:00 - Nhân viên xác nhận tiền mặt"
        ]
    },
    3: {
        id: 3,
        bookingCode: "#BK003",
        customer: "Lê Văn C (CUS003)",
        tour: "Tour Hội An - Đà Nẵng",
        amount: "2,900,000₫",
        method: "Thẻ tín dụng",
        payDate: "17/12/2024 11:22:00",
        status: "Hoàn thành",
        statusClass: "bg-success",
        transactionId: "CARD-987654321",
        fromAccount: "**** **** **** 8888 (Techcombank)",
        toAccount: "Cổng thanh toán VNPay",
        fee: "58,000₫",
        note: "Thanh toán qua cổng VNPay",
        history: [
            "17/12/2024 11:20:00 - Khách thực hiện thanh toán",
            "17/12/2024 11:22:00 - VNPay xác nhận thành công"
        ]
    },
    4: {
        id: 4,
        bookingCode: "#BK004",
        customer: "Phạm Thị D (CUS004)",
        tour: "Tour Sa Pa 3N2Đ",
        amount: "3,800,000₫",
        method: "Chuyển khoản",
        payDate: "18/12/2024 16:45:00",
        status: "Thất bại",
        statusClass: "bg-danger",
        transactionId: "TRAN-999888777",
        fromAccount: "**** **** **** 9999 (BIDV)",
        toAccount: "VietTravel Account",
        fee: "0₫",
        note: "Sai nội dung chuyển khoản",
        history: [
            "18/12/2024 16:40:00 - Nhận được chuyển khoản",
            "18/12/2024 16:45:00 - Từ chối do sai nội dung"
        ]
    },
    5: {
        id: 5,
        bookingCode: "#BK005",
        customer: "Hoàng Văn E (CUS005)",
        tour: "Tour Phú Quốc 4N3Đ",
        amount: "4,900,000₫",
        method: "Chuyển khoản",
        payDate: "19/12/2024 13:10:00",
        status: "Hoàn thành",
        statusClass: "bg-success",
        transactionId: "TRAN-555666777",
        fromAccount: "**** **** **** 5555 (MB Bank)",
        toAccount: "VietTravel Account",
        fee: "0₫",
        note: "Thanh toán đúng nội dung",
        history: [
            "19/12/2024 13:05:00 - Nhận chuyển khoản",
            "19/12/2024 13:10:00 - Xác nhận thành công"
        ]
    }
};

document.addEventListener("DOMContentLoaded", function () {
    const urlParams = new URLSearchParams(window.location.search);
    const id = urlParams.get('id');

    const data = paymentData[id] || paymentData[1]; // fallback về 1 nếu không tìm thấy

    // Cập nhật tiêu đề
    document.getElementById("paymentIdDisplay").textContent = data.bookingCode;

    // Điền dữ liệu
    document.getElementById("payId").textContent = data.id;
    document.getElementById("bookingCode").textContent = data.bookingCode;
    document.getElementById("customerName").textContent = data.customer;
    document.getElementById("tourName").textContent = data.tour;
    document.getElementById("amount").textContent = data.amount;
    document.getElementById("method").textContent = data.method;
    document.getElementById("payDate").textContent = data.payDate;
    document.getElementById("statusBadge").innerHTML = `<span class="badge ${data.statusClass}">${data.status}</span>`;

    document.getElementById("transactionId").textContent = data.transactionId;
    document.getElementById("fromAccount").textContent = data.fromAccount;
    document.getElementById("toAccount").textContent = data.toAccount;
    document.getElementById("fee").textContent = data.fee;
    document.getElementById("note").textContent = data.note;

    // Lịch sử
    const historyList = document.getElementById("historyList");
    historyList.innerHTML = "";
    data.history.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item;
        historyList.appendChild(li);
    });

    // Nút hành động
    document.getElementById("refundButton").onclick = () => alert(`Hoàn tiền cho ${data.bookingCode}?`);
    document.getElementById("cancelButton").onclick = () => confirm(`Hủy thanh toán ${data.bookingCode}?`) && alert("Đã hủy!");
});