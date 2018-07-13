
        $(document).ready(function () {
            $('#previous').on('click', function () {
                $('#im_' + currentImage).stop().fadeOut(1);
                decreaseImage();
                $('#im_' + currentImage).stop().fadeIn(1);
            });
            $('#next').on('click', function () {
                $('#im_' + currentImage).stop().fadeOut(1);
                increaseImage();
                $('#im_' + currentImage).stop().fadeIn(1);
            });

            var currentImage = 1;
            var totalImages = 3;

            function increaseImage() {
                ++currentImage;
                if (currentImage > totalImages) {
                    currentImage = 1;
                }
            }
            function decreaseImage() {
                --currentImage;
                if (currentImage < 1) {
                    currentImage = totalImages;
                }
            }
        });


        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            responsiveClass: true,
            responsive: {
                0: {
                    items: 1,
                    nav: true
                },
                576: {
                    items: 1,
                    nav: true
                },
                768: {
                    items: 2,
                    nav: false
                },
                960: {
                    items: 3,
                    nav: true,
                    loop: false
                }
            }
        })
		$(function () {
  $(document).scroll(function () {
    var $nav = $(".fixed-top");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
