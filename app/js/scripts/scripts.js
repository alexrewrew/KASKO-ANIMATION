(function () {
    "use strict";

    if (window.matchMedia("(min-width: 768px)").matches) {
        createFullpage();
    }

    function preloader() {
        var hellopreloader = document.getElementById("hellopreloader_preload");

        function fadeOutnojquery(el) {
            el.style.opacity = 1;
            var interhellopreloader = setInterval(function () {
                el.style.opacity = el.style.opacity - 0.05;
                if (el.style.opacity <= 0.05) {
                    clearInterval(interhellopreloader);
                    hellopreloader.style.display = "none";
                }
            }, 16);
        }

        window.onload = function () {
            setTimeout(function () {
                fadeOutnojquery(hellopreloader);
            }, 1000);
        };
    }

    preloader();

    function createFullpage() {
        $('#fullpage').fullpage({
            anchors: ['screen1', 'screen2', 'screen3', 'screen4', 'screen5', 'screen6', 'screen7', 'screen8', 'screen9'],
            menu: '#nav-menu',
            scrollOverflow: true,
            css3: true,
            scrollingSpeed: 1000,
            afterResize: function(){
                preloader();
                $.fn.fullpage.destroy('all');
                createFullpage();
            }
        });
    }

    var destroy = false;
    $(window).on('load resize', function () {

        if (window.matchMedia("(max-width: 767px)").matches) {
            $.fn.fullpage.destroy('all');
            destroy = true;
        } else if (window.matchMedia("(min-width: 768px)").matches) {
            if (destroy) {
                createFullpage();
                destroy = false;
            }
            // $.fn.fullpage.reBuild();
            $(function () {
                $('.overflow-first').slimScroll({
                    height: 'auto'
                });
            });
            $(function () {
                $('.overflow-second').slimScroll({
                    height: 'auto'
                });
            });
        }
    });

    $(document).ready(function () {


        $(".chosen-select").chosen({
            no_results_text: "Нажаль, нічого не знайдено"
        });

        $('#menu-trigger').click(function (e) {
            e.preventDefault();
            $('body').toggleClass('open-nav').removeClass('open-form');
        });

        $('#form-trigger').click(function (e) {
            e.preventDefault();
            $('body').toggleClass('open-form').removeClass('open-nav');
        });

        $('#want-trigger').click(function (e) {
            e.preventDefault();
            $('body').toggleClass('open-form').removeClass('open-nav');
        });

        $('.link-next-text1, .link-next-text2').click(function (e) {
            e.preventDefault();
        });

        $('.menu > li > a').click(function () {
            $('body').removeClass('open-nav');
        });

        //SECOND SCR1EEN
        $('.link-next-text1').mouseenter(function () {
            if ($(this).hasClass('reverse')) {
                $('#section1').removeClass('transformation');
                $(this).removeClass('reverse');
            } else {
                $('#section1').addClass('transformation');
                $(this).addClass('reverse');
            }
        });

        $('.link-next-text2').mouseenter(function () {
            if ($(this).hasClass('reverse')) {
                $('#section2').removeClass('transformation');
                $(this).toggleClass('reverse');
            } else {
                $('#section2').addClass('transformation');
                $(this).toggleClass('reverse');
            }
        });


        $(function () {
            $("#accordion").accordion({
                heightStyle: "content"
            });
        });

// SLIDER

        $(".smooth").click(function (event) {
            event.preventDefault();
            var id = $(this).attr("href"),
                top = $(id).offset().top - 70;
            $("body,html").animate({
                scrollTop: top
            }, 1500);
        });

    });

// !!! RESPONSIVE SCRIPTS !!!


})();
