$(document).ready(function() {



    var mySwiper = new Swiper('.swiper-container', {

        loop: true,

        slidesPerView: 1,
        spaceBetween: 30,
        navigation: {
            nextEl: '.next-btn',
            prevEl: '.prev-btn',
        },
        pagination: {
            el: '.swiper-pagination',
            type: 'bullets',
            clickable: true,
        },
        breakpoints: {

            1025: {
                slidesPerView: 3,
            },

            769: {
                slidesPerView: 2,
            },

            320: {
                slidesPerView: 1,
            }
        }
    });

    function menuShow() {
        $('.popup--form').removeClass('out');
        $('.popup--form').removeClass('popup-fadeout');
        $('.header__nav-list').addClass('popup--form');
        $('.header__nav-list').addClass('nav-list--popup');
        $('.header__nav-list').css('display', 'flex');
        $('.header__nav-link').addClass('nav-link--popup');
        $('.popup-container').fadeIn(1000);

        $('body').addClass('scroll-blocker');

    };

    function menuHide() {

        $('.popup--form').removeClass('out');
        $('.popup--form').removeClass('in');
        $('.header__nav-list').removeClass('nav-list--popup');
        $('.header__nav-list').removeAttr('style');
        $('.header__nav-link').removeClass('nav-link--popup');

        $('.popup-container').fadeOut(1000);
        $('body').removeClass('scroll-blocker');
        $('.header__nav-list').removeClass('popup--form');
    };

    $('.bars').on('click', function(event) {
        event.preventDefault();
        $('.header__nav-list').removeClass('popup-fadeout');
        menuShow();

    });

   

    $(function() {

        $(".callback-popup__phone").mask("+7-999-999-99-99");
    });




    $(document).ready(function() {
        $('.fly-tag').removeClass('fly-tag--centered');
    });

    $(document).mouseup(function(e) {
        var div = $(".header__nav-list");
        cross = $(".bars");
        
        if (!div.is(e.target) &&
            div.has(e.target).length === 0 &&
            div.is(':visible') &&
            cross.is(':visible')) {
            $('.header__nav-list').addClass('popup-fadeout');
            setTimeout(menuHide, 1000);
            setTimeout(function() {
                div.removeAttr('style');
            }, 1000);


        };
    });


    $(document).mouseup(function(e) {
        var
            list = $(".time__listbox");
        if (!list.is(e.target) &&
            list.is(':visible')) {
            list.removeAttr('style');
        };

           });

           $(document).mouseup(function(e) {
            var
            overlay = $(".popup-container")
                form = $(".popup--form");
            if (!form.is(e.target) &&
            form.has(e.target).length === 0 &&
                overlay.is(':visible')) {
                    $('.popup-field').val('');
                PopupHide();
            };
        });


    function PopupHide() {
        
        $('.submit-alert').removeClass('in');
        $('.popup').removeClass('out');
       setTimeout(function() {
        $('.popup').removeClass('visible');
    }, 2100);
        
        $('.popup--form').removeClass('out');
        $('.popup--form').addClass('popup-fadeout');
       
        $('.popup-container').fadeOut(1000);
        enableScroll();
    };


    $('.about-info__btn').on('click', function() {
        $('.submit-alert').removeClass('in');
        $('.popup').removeClass('out');
        
        $('.popup--form').removeClass('out');
        $('.popup--form').removeClass('popup-fadeout');
        $('.popup-container').removeClass('out');
        setTimeout(function() {
            $('.submit-alert').addClass('in');
        }, 2100);
        $('.popup-container').fadeIn(1000);
        $('.about-popup').addClass('visible');
        disableScroll();
    });

    $('.order-form__btn').on('click', function() {
        $('.submit-alert').removeClass('in');
        $('.popup').removeClass('out');
        $('.popup--form').removeClass('out');
        $('.popup--form').removeClass('popup-fadeout');
        $('.popup-container').removeClass('out');
        setTimeout(function() {
            $('.submit-alert').addClass('in');
        }, 2100);
        $('.popup-container').fadeIn(1000);
        $('.order-popup').addClass('visible');
        disableScroll();
    });

    $('.callback__btn').on('click', function() {
        $('.submit-alert').removeClass('in');
        $('.popup').removeClass('out');
        $('.popup--form').removeClass('out');
        $('.popup--form').removeClass('popup-fadeout');
        $('.popup-container').removeClass('out');
        setTimeout(function() {
            $('.submit-alert').addClass('in');
        }, 2100);
        $('.popup-container').fadeIn(1000);
        $('.callback-popup').addClass('visible');
        disableScroll();
    });

    $('.popup__btn').on('click', function() {
        $('.popup-field').val('');
        PopupHide();

    });

    $('.nav__close-btn').on('click', function() {
        $('.header__nav-list').addClass('popup-fadeout');
        setTimeout(menuHide, 1000);
    });

    $('.nav__link').on('click', function(e) {
        event.preventDefault();

        let href = $(this).attr('href');
        offset = $(href).offset().top;
        menuHide();
        $('body, html').animate({
            scrollTop: offset,
        }, 700);

    });

    $(window).on('load scroll', function() {

        if ($(window).scrollTop() > 1) {
            $('.up-btn').css('display', 'block');
        } else {
            $('.up-btn').removeAttr('style');
        };
    });

    $(window).on('resize', function() {
        if ($(window).width() > 1024 &&
            $('.header__nav-list').hasClass('popup--form')) {
            menuHide();
        };
    });

    $('.up-btn').on('click', function(e) {
        event.preventDefaul
        $('body, html').animate({
            scrollTop: 0,
        }, 700);
    });

});