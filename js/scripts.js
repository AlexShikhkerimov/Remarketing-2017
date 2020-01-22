$(document).ready(function () {

    // --------------------------- HEADER NAV -----------------------------------

    function scrollTo() {

        var winWidth = $(window).width();
        var headerHeight = 89;

        if (winWidth < 768) {
            headerHeight = 59;
        }

        $('.scroll-down').click(function () {
            var scroll_el = $(this).attr('href');
            if ($(scroll_el).length != 0) {
                $('html, body').animate({ scrollTop: $(scroll_el).offset().top - headerHeight }, 500);
            }
            return false;
        });
    }
    scrollTo();

    // --------------------------- HEADER SCROLL --------------------------------


    function headerResize() {
        $(window).scroll(function () {

            if ($(document).scrollTop() > 20) {

                if ($(window).width() > 767) {

                    $('.header').addClass('header__scroll');
                    $('.header .header__logoBlock a').html('<img src="images/svg-png/header-white-logo.png">');

                }
            }

            else {

                if ($(window).width() > 767) {

                    $('.header').removeClass('header__scroll');
                    $('.header .header__logoBlock a').html('<img src="images/svg-png/logo.png">');

                }

            }
        });
    }
    setTimeout(headerResize(), 1000);

    // --------------------------- NAVBAR CLICK HIDE --------------------------------

    function navClick() {

        $('.header__nav__li a').click(function () {
            $('.navbar-collapse').removeClass('in');
        });

    }
    navClick();

    // --------------------------- TICKET CALCULATE --------------------------------

    function ticketCalc() {

        var divVal = $('.tickets-value');
        var divQuant = $('.tickets-quantity');

        var ticketPrice = parseInt(divVal.html());
        var ticketQuant = parseInt(divQuant.html());

        $('.tickets-plus').click(function () {
            ticketQuant += 1;
            setPrice(ticketQuant);
        });

        $('.tickets-minus').click(function () {
            if ($("[name=count]").val() > 1) {
                ticketQuant -= 1;
                setPrice(ticketQuant);
            }
        });

        function setPrice(quant) {
            var price = quant * ticketPrice;
            divVal.html(price);

            divQuant.html(quant);
            $("[name=count]").val(quant)
        }
    }

    ticketCalc();

    // --------------------------- CAROUSEL --------------------------------

    new Slideshow(document.getElementById('slideshow'));


    // --------------------------- MODAL --------------------------------

    $('.speaker-card').click(function () {

        var modal_img = $(this).find('.speaker-photo img').attr('src'),
            modal_name = $(this).find('.speaker-name').html(),
            modal_desc = $(this).find('.for-modal p').html(),
            modal_them = $(this).find('.for-modal .them').html();

        if (!!modal_img) {
            $('.modal-photo img').attr('src', modal_img);
        }
        else {
            $('.modal-photo img').html('images/speaker.png');
        }

        if (!!modal_name) {
            $('.modal-desc h2').html(modal_name);
        }
        else {
            $('.modal-desc h2').html('имя спикера');
        }

        if (!!modal_desc) {
            $('.modal-desc p').html(modal_desc);
        }
        else {
            $('.modal-desc p').html('подробная информация о спикере');
        }


        if (!!modal_them) {
            $('.modal-desc .them').html('Тема: ' + modal_them);
        }
        else {
            $('.modal-desc .them').html(' ');
        }


        $('#speaker_modal').modal('show')
    });

    //  ---------- PROMO INPUT PRICE --------------

    $('.promo-input').keyup(function () {

        var inputValue = $(this).val(),             //  value of the promo input
            priceBlock = $('.tickets-value'),       //  price block
            price = 850,                            //  constant
            priceVal = $('input[name="price"]'),    //
            quant = $('.tickets-quantity').html(),
            quantCoef = 1,
            flag = $('.promoFlag'),
            newTotalPrice;

        if (quant >= 3) {
            quantCoef = 0.9;
        }

        if (flag.val() == 'false') {

            if (inputValue == 'FM') {
                price = Math.round(price * 0.9 * quantCoef);
                newTotalPrice = Math.round(price * quant);

                priceVal.val(price);
                priceBlock.html(newTotalPrice);
                flag.val(true);
            }
            else if (inputValue == 'SAVEBRAND') {
                price = Math.round(price * 0.85 * quantCoef);
                newTotalPrice = Math.round(price * quant);

                priceVal.val(price);
                priceBlock.html(newTotalPrice);
                flag.val(true);
            }
            else if (inputValue == 'RE_SAVE') {
                price = Math.round(price * 0.8 * quantCoef);
                newTotalPrice = Math.round(price * quant);

                priceVal.val(price);
                priceBlock.html(newTotalPrice);
                flag.val(true);
            }
            else if (inputValue == 'RE_SAVE2017') {
                price = Math.round(price * 0.7 * quantCoef);
                newTotalPrice = Math.round(price * quant);

                priceVal.val(price);
                priceBlock.html(newTotalPrice);
                flag.val(true);
            }
        }
    });
});