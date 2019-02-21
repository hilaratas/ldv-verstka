export default function () {
    var $mainSider =  $('#js-main-slider');
    var $sliders = $('.js-slider');

    $mainSider.slick();
    $sliders.slick({
      "slidesToShow": 4,
      "slidesToScroll": 2,
      "arrows" : false,
      "dots": true,
      "responsive": [
        {
          breakpoint: 1025,
          settings: {
            "slidesToShow": 3,
            "slidesToScroll": 1,
          }
        },
        {
          breakpoint: 768,
          settings: {
            "slidesToShow": 2,
            "slidesToScroll": 1,
          }
        },
        {
          breakpoint: 640,
          settings: {
            "slidesToShow": 1,
            "slidesToScroll": 1,
          }
        },
      ]
    });

}
