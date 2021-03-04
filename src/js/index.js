
$(document).ready(function () {
    // AOS.init({
    //     offset: 15,
    //     disable: 'mobile'
    // });

    $(".time__media").twentytwenty({
        no_overlay: true
    });

    $('.form__field').focus(function () {
        $(this).addClass('form__field_active')
    }).blur(function () {
        if ($(this).val() == "") {
            $(this).removeClass('form__field_active')
        }
    })

    Start();

    function Start() {
        var m = 22,
            s = 0;

        if (m <= 9) {
            m = "0" + m;
        };

        var timerId = setTimeout(function tick() {
            if (s != 0) {
                s = s - 1;

                if (s <= 9) {
                    s = "0" + s;
                }
            } else {
                if (m != 0) {
                    m = m - 1;
                    s = 59;

                    if (m <= 9) {
                        m = "0" + m;
                    }
                } else {
                    return
                }
            }

            $('.form__time-count:nth-of-type(2) span:first-child').text(m);
            $('.form__time-count:last-child span:first-child').text(s);
            timerId = setTimeout(tick, 1000);
        }, 1000);
    }

    var $prev = $('.commits__nextPrev span:first-child').text(),
        $next = $('.commits__nextPrev span:last-child').text();
        

    $('.js-commits__slider').owlCarousel({
        loop: true,
        autoHeight: true,
        margin: 40,
        items: 1,
        responsive: {
            768: {
                nav: true,
                navText: [$prev, $next]
            }
        }
    });
});