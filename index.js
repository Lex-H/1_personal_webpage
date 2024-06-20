$(document).ready(function(){
    $('.pics').slick({
        // 自動播放
        autoplay: true,
        autoplaySpeed: 3000,

        // 中心模式
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,

        // 響應式
        responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 3
            }
          },
          {
            breakpoint: 480,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '40px',
              slidesToShow: 1
            }
          }
        ]
      });
});