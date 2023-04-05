// Slider
$(document).ready(function () {
    $(window).on('load', function () {

        let $carousel = $('.slider__item-wrap');
        $carousel.flickity({
            cellAlign: 'left',
            contain: true,
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false
        });

        $('.control .control__btn.--prev').on('click', function () {
            $carousel.flickity('next');
        });
        $('.control .control__btn.--next').on('click', function () {
            $carousel.flickity('previous');
        });
    });

    // Scroll

    let menuScroll;
    let offsetTopMenu;

    if (!$('.productpage').hasClass('productdetailpage')) {
        menuScroll = $('.menu-scroll');
        offsetTopMenu = $('.slider__menu').offset().top + $('.slider__menu').height();

        $(window).scroll(function () {
            let scrollTop = $(window).scrollTop();
            console.log(scrollTop);
            if (scrollTop > offsetTopMenu) {
                menuScroll.addClass('active');
            } else {
                menuScroll.removeClass('active');
            }
            $('.nav-slider').removeClass('active')
        });
    }

    // Menu

    let btnMenu = $('.mainmenu'),
        nav = $('.nav-slider'),
        closebtn = $('.closebtn'),
        overlay = $('.overlay'),
        main =$('.mainwrapper');

    btnMenu.click(function (e) {
        e.stopPropagation();
        nav.toggleClass('active');
        btnMenu.toggleClass('active');
        overlay.toggleClass('active');
        main.toggleClass('active');
    });

    nav.click(function (e) {
        e.stopPropagation();
    });

    function closeNav() {
        nav.removeClass('active');
        overlay.removeClass('active');
        btnMenu.removeClass('active');
        main.removeClass('active');
    }

    $(window).resize(function () {
        let widthWindow = $(window).width();
        if (widthWindow > 767) {
            closeNav();
        }
    });
    
    closebtn.click(function () {
        closeNav();
    })

    $(document).click(function () {
        closeNav();
    })

    

    // Dim menu

    let itemMenu = $('.nav-slider .slider-body ul li a');
    let scrollMenu = $('.menu-scroll .container-fluid ul a')
    itemMenu.hover(
        function () {
            // mouse enter
            $(this).parent().siblings().find('a').addClass('dim');
        }, function () {
            // mouse leave
            itemMenu.removeClass('dim');
        }
    )
    scrollMenu.hover(
        function () {
            // mouse enter
            $(this).parent().siblings().find('a').addClass('dim');
        }, function () {
            // mouse leave
            scrollMenu.removeClass('dim');
        }
    )

    // Back to top

    let backtotop = $('.backtotop');
    backtotop.on("click", function () {
        $("html, body").animate({
            scrollTop: 0
        }, 200);
    });

    // Select

    let selection = $('.selection'),
        selectionCurrent = $('.selection .selection__current span'),
        selectionOption = $('selection .selection__option'),
        selectionItems = $('.selection .selection__option a');
    selection.click(function (e) {
        e.stopPropagation();
        selection.toggleClass('active');
    })
    selectionItems.click(function () {
        let selectionText = $(this).text();
        let selectionCurrentAll = selectionCurrent.text();
        selectionCurrent.html(selectionText);
        $(this).html(selectionCurrentAll);
    })
    $(document).on('click', function () {
        selection.removeClass('active');
    });

    // Slider product

    let productDetailSlider = $('.productdetail__slide-list');
    pdDetailSlider = productDetailSlider.flickity({
        // options
        pageDots: false,
        prevNextButtons: false,
        draggable: true,
        cellAlign: "left",
        contain: true,
        autoPlay: false,
        wrapAround: true
    });

    $('.control .control__btn.--prev').on('click', function () {
        pdDetailSlider.flickity('next');
    });
    $('.control .control__btn.--next').on('click', function () {
        pdDetailSlider.flickity('previous');
    });
});


