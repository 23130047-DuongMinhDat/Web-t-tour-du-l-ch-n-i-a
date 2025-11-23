

// Khởi tạo AOS
AOS.init({
    duration: 1000,
    once: true
});

// Sticky header khi scroll
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 80) {
        $(".header").addClass("scrolled");
    } else {
        $(".header").removeClass("scrolled");
    }
});