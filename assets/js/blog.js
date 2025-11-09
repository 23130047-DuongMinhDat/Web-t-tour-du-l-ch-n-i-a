// Blog Page JavaScript - Minimal Version

// AOS Initialization
AOS.init({
    duration: 1000,
    once: true
});

// Sticky Header
$(window).on("scroll", function () {
    if ($(window).scrollTop() > 80) {
        $(".header").addClass("scrolled");
    } else {
        $(".header").removeClass("scrolled");
    }
});

// Category Filter
$('.filter-btn').on('click', function() {
    const category = $(this).data('category');

    $('.filter-btn').removeClass('active');
    $(this).addClass('active');

    if (category === 'all') {
        $('.blog-card').fadeIn(400);
    } else {
        $('.blog-card').fadeOut(400);
        $(`.blog-card[data-category="${category}"]`).fadeIn(400);
    }
});