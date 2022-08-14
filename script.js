 $('.slider-top').slick({
   slidesToShow: 1,
   slidesToScroll: 1,
   arrows: false,
   fade: true,
   asNavFor: '.slider-bottom'
 });
 $('.slider-bottom').slick({
   slidesToShow: 3,
   slidesToScroll: 1,
   asNavFor: '.slider-top',
   dots: true,
   focusOnSelect: true
 });

 $('a[data-slide]').click(function(e) {
   e.preventDefault();
   let slide = $(this).data('slide');
   $('.slider-bottom').slick('slickGoTo', slide - 1);
 });
