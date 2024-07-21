// 輪播圖
$(document).ready(function(){
    $('.carouselAboutAlex').slick({
        // 自動播放
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,


    });
});

// menuIcon動畫
function myFunction(x) {
    x.classList.toggle("change");
}