(function () {
    "use strict";
    // window.scrollBy(0, 1);


    var firstScreen = anime.timeline(),
        showFirstScreen = true,
        secondScreen = anime.timeline(),
        showSecondScreen = true,
        thirdScreen = anime.timeline(),
        showThirdScreen = true;

    function firstScrrenAnimation() {
        //ANIMATION
        firstScreen.add({
            targets: '.sand',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 200
        }).add({
            targets: '.grass',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 0
        }).add({
            targets: '.line1',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 400
        }).add({
            targets: '.line2',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 600
        }).add({
            targets: '.line3',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 800
        }).add({
            targets: '.house1',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 1000
        }).add({
            targets: '.house2',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 1200
        }).add({
            targets: '.house3',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 1400
        }).add({
            targets: '.house4',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 1600
        }).add({
            targets: '.gelik',
            translateX: [
                {value: 0, duration: 0},
                {value: -2850, duration: 2500}
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: 1650, duration: 2500}
            ],
            easing: 'easeOutQuad',
            offset: 1600,
            complete: function () {
                $('.gelik').css('visibility', 'hidden');
            }
        }).add({
            targets: '.tormoz',
            translateX: [
                {value: 0, duration: 0},
                {value: -211, duration: 600}
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: 122, duration: 600}
            ],
            easing: 'easeOutQuad',
            offset: 3300
        }).add({
            targets: '.crash-tormoz',
            opacity: [
                {value: 0, duration: 0},
                {value: 1, duration: 300}
            ],
            easing: 'linear',
            offset: 4000
        }).add({
            targets: '.bus',
            translateX: [
                {value: 0, duration: 0},
                {value: 365, duration: 2100}
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: 210, duration: 2100}
            ],
            easing: 'easeOutQuad',
            offset: 2000,
            complete: function () {
                $('.bus').css('visibility', 'hidden');
            }
        }).add({
            targets: '.crash',
            duration: 0,
            offset: 4100,
            begin: function () {
                $('.crash').css('visibility', 'visible');
            },
            complete: function () {
                var gelik_lights = anime({
                    targets: '.gelik_lights',
                    opacity: [
                        {value: 0, duration: 500},
                        {value: 1, duration: 500}
                    ],
                    easing: 'easeInOutQuad',
                    loop: true,
                    delay: 200
                });
                var bus_lights = anime({
                    targets: '.bus_lights',
                    opacity: [
                        {value: 0, duration: 500},
                        {value: 1, duration: 500}
                    ],
                    easing: 'easeInOutQuad',
                    loop: true,
                    delay: 500
                });
            }
        }).add({
            targets: '.bus_crash',
            rotate: [
                {value: '2deg', duration: 150},
                {value: '0', duration: 150}
            ],
            offset: 4100,
        }).add({
            targets: '.gelik_crash',
            rotate: [
                {value: '-2deg', duration: 150},
                {value: '0', duration: 150}
            ],
            offset: 4100,
        }).add({
            targets: '.casco_car',
            translateX: [
                {value: 0, duration: 0},
                {value: -1270, duration: 1700}
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -730, duration: 1700}
            ],
            easing: 'linear',
            offset: 4100,
            complete: function () {
                $('.casco_car').css('visibility', 'hidden');
            }
        }).add({
            targets: '.casco_car_right',
            translateX: [
                {value: 0, duration: 0},
                {value: 330, duration: 1000}
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -190, duration: 1000}
            ],
            easing: 'easeOutQuad',
            offset: 5800,
            begin: function () {
                $('.casco_car_right').css('visibility', 'visible');
            }
        }).add({
            targets: '.pin',
            translateY: [
                {value: 0, duration: 0},
                {value: 780, duration: 1300}
            ],
            opacity: [{value: 0}, {value: 1}],
            easing: 'easeOutQuad',
            offset: 6200,
            complete: function () {
                var pin = anime({
                    targets: '.pin',
                    translateY: [
                        {value: 750, duration: 1000},
                        {value: 780, duration: 1000}
                    ],
                    easing: 'easeInOutQuad',
                    loop: true
                });
            }
        })
    };

    function secondScreenAnimation() {
        //ANIMATION
        secondScreen.add({
            targets: '.sand2',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 200,
        }).add({
            targets: '.smart2',
            translateX: [
                {value: 0, duration: 0},
            ],
            translateY: [
                {value: 0, duration: 0},
            ],
            easing: 'linear',
            offset: 0,
        }).add({
            targets: '.grass2',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 0
        }).add({
            targets: '.line12',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 400
        }).add({
            targets: '.line22',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 600
        }).add({
            targets: '.line32',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 800
        }).add({
            targets: '.house12',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 1000,
        }).add({
            targets: '.house22',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 1200
        }).add({
            targets: '.house32',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 1400
        }).add({
            targets: '.house42',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 1600
        }).add({
            targets: '.house52',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 1800
        }).add({
            targets: '.casco_car2',
            translateX: [
                {value: 0, duration: 0},
                {value: 122, duration: 1700},
                {value: 218, duration: 1200, delay: 500, easing: 'easeInOutSine'}
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -70, duration: 1700},
                {value: -125, duration: 1200, delay: 500, easing: 'easeInOutSine'}
            ],
            easing: 'easeOutQuad',
            offset: 1900,
            complete: function () {
                $('.casco_car2').css('visibility', 'hidden');

                var blinks2 = anime({
                    targets: '.blinks2',
                    opacity: [
                        {value: 0, duration: 250},
                        {value: 1, duration: 500},
                        {value: 0, duration: 250}
                    ],
                    easing: 'easeInOutQuad',
                    loop: true,
                });
            }
        }).add({
            targets: '.tormoz2',
            translateX: [
                {value: 0, duration: 0},
                {value: 14.5, duration: 500}
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -8.5, duration: 500}
            ],
            easing: 'easeOutQuad',
            offset: 4700
        }).add({
            targets: '.tormoz-crash2',
            opacity: [
                {value: 0, duration: 0},
                {value: 1, duration: 300}
            ],
            easing: 'easeOutQuad',
            offset: 5300
        }).add({
            targets: '.gelik2',
            translateX: [
                {value: 0, duration: 0},
                {value: 650, duration: 3000}
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: 390, duration: 3000}
            ],
            easing: 'linear',
            offset: 2400
        }).add({
            targets: '.gelik2_crash',
            translateX: [
                {value: 0, duration: 0},
                {value: 372, duration: 3000},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: 215, duration: 3000},
            ],
            easing: 'linear',
            offset: 2300,
            complete: function () {
                $('.gelik2_crash').css('visibility', 'hidden');
                $('.crash2').css('visibility', 'visible');
            }
        }).add({
            targets: '.pin2',
            translateY: [
                {value: 0, duration: 0},
                {value: 240, duration: 1300}
            ],
            opacity: [{value: 0}, {value: 1}],
            easing: 'easeOutQuad',
            offset: 5300,
            complete: function () {
                var pin2 = anime({
                    targets: '.pin2',
                    translateY: [
                        {value: 220, duration: 1000},
                        {value: 240, duration: 1000}
                    ],
                    easing: 'easeInOutQuad',
                    loop: true
                });
            }
        }).add({
            targets: '.firststagelight',
            opacity: [
                {value: 1, duration: 0},
                {value: 0, duration: 200}
            ],
            easing: 'easeInSine',
            offset: 3650
        }).add({
            targets: '.secondstagelight',
            opacity: [
                {value: 0, duration: 0},
                {value: 1, duration: 200}
            ],
            easing: 'easeInSine',
            offset: 3700
        }).add({
            targets: '.gelik-after-crash2',
            rotate: [
                {value: 0, duration: 0},
                {value: '1deg', duration: 150},
                {value: 0, duration: 200}
            ],
            easing: 'easeInOutSine',
            offset: 5300
        }).add({
            targets: '.cascocar-after-crash-2',
            rotate: [
                {value: 0, duration: 0},
                {value: '1deg', duration: 150},
                {value: 0, duration: 200}
            ],
            easing: 'easeInOutSine',
            offset: 5300,
            complete: function () {
                var smart2 = anime({
                    targets: '.smart2',
                    translateX: [
                        {value: 0, duration: 0},
                        {value: 381, duration: 3000},
                        {value: 750, duration: 3000, easing: 'easeInOutSine', delay: 500}
                    ],
                    translateY: [
                        {value: 0, duration: 0},
                        {value: 223, duration: 3000},
                        {value: 435, duration: 3000, easing: 'easeInOutSine', delay: 500}
                    ],
                    easing: 'easeOutSine',
                    loop: true
                });

                var firststagelight = anime({
                    targets: '.firststagelight',
                    opacity: [
                        {value: 0, duration: 0},
                        {value: 1, duration: 200, delay: 3000},
                        {value: 0, duration: 200, delay: 3000}
                    ],
                    easing: 'easeInSine',
                    loop: true
                });

                var secondstagelight = anime({
                    targets: '.secondstagelight',
                    opacity: [
                        {value: 1, duration: 0},
                        {value: 0, duration: 200, delay: 3000},
                        {value: 1, duration: 200, delay: 3000}
                    ],
                    easing: 'easeInSine',
                    loop: true
                });
            }
        })
    };

    function thirdScreenAnimation() {
        thirdScreen.add({
            targets: '.sand3',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 200,
        }).add({
            targets: '.grass3',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 0
        }).add({
            targets: '.line13',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 400
        }).add({
            targets: '.line23',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 600
        }).add({
            targets: '.line33',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 800
        }).add({
            targets: '.house13',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 1000,
        }).add({
            targets: '.house23',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 1200
        }).add({
            targets: '.house33',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 1400
        }).add({
            targets: '.house43',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 1600,
            complete: function () {
                var car37 = anime({
                    targets: '.car37',
                    translateX: [
                        {value: 0, duration: 0},
                        {value: 1000, duration: 4000},
                    ],
                    translateY: [
                        {value: 0, duration: 0},
                        {value: 575, duration: 4000},
                    ],
                    easing: 'linear',
                    loop: true,
                    delay: 5000
                });
            }
        }).add({
            targets: '.car_before_most_crash',
            translateX: [
                {value: -100, duration: 0},
                {value: -20, duration: 1000},
                {value: -56, duration: 1000},
            ],
            translateY: [
                {value: -60, duration: 0},
                {value: -13, duration: 1000},
                {value: -32, duration: 1000},
            ],
            easing: 'easeInOutSine',
            offset: 2600,
        }).add({
            targets: '.most-crash',
            opacity: [
                {value: 0, duration: 0},
                {value: 1, duration: 400},
            ],
            easing: 'easeInOutSine',
            offset: 5200,
        }).add({
            targets: '.pin3',
            translateY: [
                {value: 0, duration: 0},
                {value: 285, duration: 1300}
            ],
            opacity: [{value: 0}, {value: 1}],
            easing: 'easeOutQuad',
            offset: 5700,
            complete: function () {
                var pin3 = anime({
                    targets: '.pin3',
                    translateY: [
                        {value: 270, duration: 1000},
                        {value: 285, duration: 1000}
                    ],
                    easing: 'easeInOutQuad',
                    loop: true
                });
            }
        }).add({
            targets: '.car31',
            translateX: [
                {value: 0, duration: 0},
                {value: 200, duration: 1000},
                {value: 350, duration: 1000},
                {value: 850, duration: 3000},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -116, duration: 1000},
                {value: -230, duration: 1000},
                {value: -530, duration: 3000},
            ],
            rotate: [
                {value: 0, duration: 1000},
                {value: '-7deg', duration: 300},
                {value: '-2deg', duration: 600, delay: 700},
            ],
            easing: 'linear',
            offset: 3000,
            complete: function () {
                var car38 = anime({
                    targets: '.car38',
                    translateX: [
                        {value: 0, duration: 0},
                        {value: 1100, duration: 4000},
                    ],
                    translateY: [
                        {value: 0, duration: 0},
                        {value: 635, duration: 4000},
                    ],
                    easing: 'linear',
                    loop: true,
                    delay: 5000
                });
            }
        }).add({
            targets: '.car32',
            translateX: [
                {value: 0, duration: 0},
                {value: 231, duration: 1000, easing: 'linear'},
                {value: 300, duration: 600, easing: 'easeOutSine'},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -134, duration: 1000, easing: 'linear'},
                {value: -190, duration: 600, easing: 'easeOutSine'},
            ],
            rotate: [
                {value: 0, duration: 1000, easing: 'linear'},
                {value: '-7deg', duration: 300, easing: 'easeOutSine'},
            ],
            offset: 6000,
        }).add({
            targets: '.car33',
            translateX: [
                {value: 0, duration: 0},
                {value: 267, duration: 1200, easing: 'linear'},
                {value: 280, duration: 300, easing: 'easeOutSine'},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -153, duration: 1200, easing: 'linear'},
                {value: -172, duration: 300, easing: 'easeOutSine'},
            ],
            rotate: [
                {value: 0, duration: 1200, easing: 'linear'},
                {value: '-5deg', duration: 300, easing: 'easeOutSine'},
            ],
            offset: 7000,
            complete: function () {
                var car36 = anime({
                    targets: '.car36',
                    translateX: [
                        {value: 0, duration: 0},
                        {value: -400, duration: 2000},
                        {value: -635, duration: 1500},
                        {value: -900, duration: 1200},
                    ],
                    translateY: [
                        {value: 0, duration: 0},
                        {value: 225, duration: 2000},
                        {value: 400, duration: 1500},
                        {value: 560, duration: 1200},
                    ],
                    rotate: [
                        {value: 0, duration: 2000},
                        {value: '-5deg', duration: 500},
                        {value: 0, duration: 400, delay: 900},
                    ],
                    easing: 'linear',
                    delay: 3000
                });
            }
        }).add({
            targets: '.car34',
            translateX: [
                {value: 0, duration: 0},
                {value: 276, duration: 1800, easing: 'easeOutSine'},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -159, duration: 1800, easing: 'easeOutSine'},
            ],
            offset: 8500,
        }).add({
            targets: '.car35',
            translateX: [
                {value: 0, duration: 0},
                {value: 259, duration: 1800, easing: 'easeOutSine'},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -150, duration: 1800, easing: 'easeOutSine'},
            ],
            offset: 10000,
        })
    };

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

                if (window.location.hash === '#screen1' || window.location.hash === '') {
                    if (showFirstScreen) {
                        firstScrrenAnimation();
                        showFirstScreen = false;
                    } else {
                        firstScreen.restart();
                    }
                }
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
            afterResize: function () {
                preloader();
                $.fn.fullpage.destroy('all');
                createFullpage();
            },
            onLeave: function (index, nextIndex) {
                switch (index) {
                    case 1:
                        firstScreen.pause();
                        anime.remove('.pin');
                        anime.remove('.gelik_lights');
                        anime.remove('.bus_lights');
                        $('.gelik').css('visibility', 'visible');
                        $('.bus').css('visibility', 'visible');
                        $('.crash').css('visibility', 'hidden');
                        $('.casco_car').css('visibility', 'visible');
                        $('.casco_car_right').css('visibility', 'hidden');
                        break;
                    case 2:
                        secondScreen.pause();
                        $('.casco_car2').css('visibility', 'visible');
                        $('.gelik2_crash').css('visibility', 'visible');
                        $('.crash2').css('visibility', 'hidden');
                        anime.remove('.smart2');
                        anime.remove('.firststagelight');
                        anime.remove('.secondstagelight');
                        anime.remove('.pin2');
                        anime.remove('.blinks2');
                        break;
                    case 3:
                        //thirdScreen.pause();
                }

                switch (nextIndex) {
                    case 1:
                        if (showFirstScreen) {
                            setTimeout(function () {
                                firstScrrenAnimation();
                                showFirstScreen = false;
                            }, 200);
                        } else {
                            setTimeout(function () {
                                firstScreen.restart()
                            }, 200);
                        }
                        break;
                    case 2:
                        if (showSecondScreen) {
                            setTimeout(function () {
                                secondScreenAnimation();
                                showSecondScreen = false;
                            }, 200);
                        } else {
                            setTimeout(function () {
                                secondScreen.restart()
                            }, 200);
                        }
                        break;
                    case 3:
                        if (showThirdScreen) {
                            setTimeout(function () {
                                thirdScreenAnimation();
                                showThirdScreen = false;
                            }, 200);
                        } else {
                            setTimeout(function () {
                                thirdScreen.restart();
                            }, 200);
                        }
                        break;
                }
            }
        });
    }

    if (window.matchMedia("(min-width: 768px)").matches) {
        createFullpage();
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
            // var currentHeight = $(window).scrollTop();
            // console.log(currentHeight);
            $('body').toggleClass('open-nav').removeClass('open-form');
            // $('body, html').scrollTop(currentHeight);
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
