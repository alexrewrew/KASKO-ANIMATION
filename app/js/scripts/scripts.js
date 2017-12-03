(function () {
    "use strict";
    // window.scrollBy(0, 1);


    var firstScreen = anime.timeline(),
        showFirstScreen = true,
        secondScreen = anime.timeline(),
        showSecondScreen = true,
        thirdScreen = anime.timeline(),
        showThirdScreen = true,
        fourthScreen = anime.timeline(),
        showFourthScreen = true,
        fifthScreen = anime.timeline(),
        showFifthScreen = true,
        sevenScreen = anime.timeline(),
        showSevenScreen = true;

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
                anime({
                    targets: '.gelik_lights',
                    opacity: [
                        {value: 0, duration: 500},
                        {value: 1, duration: 500}
                    ],
                    easing: 'easeInOutQuad',
                    loop: true,
                    delay: 200
                });
                anime({
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
               anime({
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

                anime({
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
                anime({
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
                anime({
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

                anime({
                    targets: '.firststagelight',
                    opacity: [
                        {value: 0, duration: 0},
                        {value: 1, duration: 200, delay: 3000},
                        {value: 0, duration: 200, delay: 3000}
                    ],
                    easing: 'easeInSine',
                    loop: true
                });

                anime({
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
                anime({
                    targets: '.car73',
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
                anime({
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
            targets: '.car13',
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
                anime({
                    targets: '.car83',
                    translateX: [
                        {value: 0, duration: 0},
                        {value: 1100, duration: 4000},
                    ],
                    translateY: [
                        {value: -30, duration: 0},
                        {value: 610, duration: 4000},
                    ],
                    easing: 'linear',
                    loop: true,
                    delay: 5000
                });
            }
        }).add({
            targets: '.car23',
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
               anime({
                    targets: '.car63',
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
            targets: '.car43',
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
            targets: '.car53',
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

    function fourthScrrenAnimation() {
        fourthScreen.add({
            targets: '.sand4',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 200
        }).add({
            targets: '.grass4',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 0
        }).add({
            targets: '.line14',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 400
        }).add({
            targets: '.line24',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 600
        }).add({
            targets: '.line34',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 800
        }).add({
            targets: '.line44',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 1000
        }).add({
            targets: '.line54',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 1200
        }).add({
            targets: '.house14',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 1400
        }).add({
            targets: '.house24',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 1600
        }).add({
            targets: '.house34',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 1800
        }).add({
            targets: '.house44',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 2000
        }).add({
            targets: '.house54',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 2200,
            complete: function () {
                $(".prius-start4").css("visibility", "visible");
            }
        }).add({
            targets: '.casco-car4',
            translateX: [
                {value: 0, duration: 0},
                {value: 360, duration: 2500},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: 207, duration: 2500},
            ],
            rotate: [
                {value: 0, duration: 2000},
                {value: '5deg', duration: 100},
            ],
            easing: 'easeOutSine',
            offset: 2400,
        }).add({
            targets: '.pin4',
            translateY: [
                {value: 0, duration: 0},
                {value: 255, duration: 1300}
            ],
            opacity: [{value: 0}, {value: 1}],
            easing: 'easeOutQuad',
            offset: 5000,
            complete: function () {
                anime({
                    targets: '.pin4',
                    translateY: [
                        {value: 235, duration: 1000},
                        {value: 255, duration: 1000}
                    ],
                    easing: 'easeInOutQuad',
                    loop: true
                });
            }
        }).add({
            targets: '.evacuator4',
            translateX: [
                {value: 0, duration: 0},
                {value: 396, duration: 2000},
                {value: 485, duration: 1000, easing: 'easeOutQuad'},
                {value: 438, duration: 1700, easing: 'easeInOutQuad'},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: 226, duration: 2000},
                {value: 250, duration: 1000, easing: 'easeOutQuad'},
                {value: 225, duration: 1700, easing: 'easeInOutQuad'},
            ],
            easing: 'linear',
            offset: 4900,
            begin: function () {
                anime({
                    targets: '.car4',
                    translateX: [
                        {value: 0, duration: 0},
                        {value: 620, duration: 2700},
                    ],
                    translateY: [
                        {value: 0, duration: 0},
                        {value: 355, duration: 2700},
                    ],
                    easing: 'linear',
                    loop: true,
                    delay: 4000,
                    begin: function () {
                        anime({
                            targets: '.car-cross4',
                            translateX: [
                                {value: 0, duration: 0},
                                {value: -382, duration: 2000},
                            ],
                            translateY: [
                                {value: 0, duration: 0},
                                {value: 221, duration: 2000},
                            ],
                            easing: 'linear',
                            loop: true,
                            delay: 4700,
                            begin: function () {
                                $('.car-cross4').css("visibility", 'visible');
                            }
                        });
                    }
                });
            }
        }).add({
            targets: '.prius-start4',
            translateX: [
                {value: 0, duration: 0},
                {value: -261, duration: 2000},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: 150, duration: 2000},
            ],
            easing: 'linear',
            offset: 4900,
            begin: function () {
                anime({
                    targets: '.blick-blue-start',
                    opacity: [
                        {value: 0, duration: 0},
                        {value: 0.5, duration: 200},
                        {value: 0, duration: 200}
                    ],
                    easing: 'easeInOutSine',
                    loop: true
                });

                anime({
                    targets: '.blick-red-start',
                    opacity: [
                        {value: 0.5, duration: 0},
                        {value: 0, duration: 200},
                        {value: 0.5, duration: 200}
                    ],
                    easing: 'easeInOutSine',
                    loop: true
                });
            },
            complete: function () {
                anime.remove('.blick-blue-start');
                anime.remove('.blick-red-start');
                $('.prius-start4').css('visibility', 'hidden');
            }
        }).add({
            targets: '.prius-end4',
            translateX: [
                {value: -126, duration: 0},
                {value: 0, duration: 2000},
            ],
            translateY: [
                {value: -80, duration: 0},
                {value: 0, duration: 2000},
            ],
            easing: 'easeOutSine',
            offset: 6900,
            begin: function () {
                anime({
                    targets: '.blick-blue-end',
                    opacity: [
                        {value: 0, duration: 0},
                        {value: 0.5, duration: 200},
                        {value: 0, duration: 200}
                    ],
                    easing: 'easeInOutSine',
                    loop: true
                });

                anime({
                    targets: '.blick-red-end',
                    opacity: [
                        {value: 0.5, duration: 0},
                        {value: 0, duration: 200},
                        {value: 0.5, duration: 200}
                    ],
                    easing: 'easeInOutSine',
                    loop: true
                });
                $('.prius-end4').css('visibility', 'visible');

                anime({
                    targets: '.smart4',
                    translateX: [
                        {value: 0, duration: 0},
                        {value: 620, duration: 2700},
                    ],
                    translateY: [
                        {value: 0, duration: 0},
                        {value: 355, duration: 2700},
                    ],
                    easing: 'linear',
                    loop: true,
                    delay: 4000,
                    begin: function () {
                        anime({
                            targets: '.gelik4',
                            translateX: [
                                {value: 0, duration: 0},
                                {value: 620, duration: 2700},
                            ],
                            translateY: [
                                {value: 0, duration: 0},
                                {value: 355, duration: 2700},
                            ],
                            easing: 'linear',
                            loop: true,
                            delay: 4000
                        });
                    }
                });
            }
        })
    };

    function fifthScrrenAnimation() {
        fifthScreen.add({
            targets: '.sand5',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 200,
            begin: function () {
                anime({
                    targets: '.wave',
                    translateX: [
                        {value: 0, duration: 0},
                        {value: 30, duration: 4000},
                        {value: 0, duration: 4000},
                    ],
                    translateY: [
                        {value: 0, duration: 0},
                        {value: 5, duration: 4000},
                        {value: 0, duration: 4000},
                    ],
                    easing: 'easeInOutSine',
                    loop: true
                });
            },
            complete: function () {
                anime({
                    targets: '.car_left1',
                    translateX: [
                        {value: 0, duration: 0},
                        {value: -1140, duration: 5000},
                    ],
                    translateY: [
                        {value: 0, duration: 0},
                        {value: 655, duration: 5000},
                    ],
                    easing: 'linear',
                    delay: 5000,
                    loop: true,
                });
            }
        }).add({
            targets: '.line15',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 400
        }).add({
            targets: '.line25',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 600
        }).add({
            targets: '.line35',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 800
        }).add({
            targets: '.line45',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 1000,
            complete: function () {
                anime({
                    targets: '.boat',
                    rotate: [
                        {value: 0, duration: 0},
                        {value: '-5deg', duration: 2000},
                        {value: 0, duration: 2000},
                        {value: '5deg', duration: 2000},
                        {value: 0, duration: 2000},
                    ],
                    easing: 'linear',
                    loop: true
                });
            }
        }).add({
            targets: '.bus5-before',
            translateX: [
                {value: -180, duration: 0},
                {value: 535, duration: 2700},
            ],
            translateY: [
                {value: 105, duration: 0},
                {value: -309, duration: 2700},
            ],
            rotate: [
                {value: 0, duration: 0},
                {value: '3deg', duration: 300, delay: 2400},
                {value: 0, duration: 150},
            ],
            easing: 'easeOutSine',
            offset: 1200,
            complete: function () {
                $('.bus5-before').css('visibility', 'hidden');
                $('.bus5-crash').css('visibility', 'visible');
                anime({
                    targets: '.car_left2',
                    translateX: [
                        {value: 0, duration: 0},
                        {value: -1140, duration: 5000},
                    ],
                    translateY: [
                        {value: 0, duration: 0},
                        {value: 655, duration: 5000},
                    ],
                    easing: 'linear',
                    delay: 5000,
                    loop: true,
                });
            }
        }).add({
            targets: '.smart5-before',
            translateX: [
                {value: -180, duration: 0},
                {value: 593, duration: 2700},
            ],
            translateY: [
                {value: 105, duration: 0},
                {value: -355, duration: 2700},
            ],
            rotate: [
                {value: 0, duration: 0},
                {value: '-3deg', duration: 300, delay: 2400},
                {value: 0, duration: 150},
            ],
            easing: 'easeOutSine',
            offset: 1200,
            complete: function () {
                $('.smart5-before').css('visibility', 'hidden');
                $('.smart5-crash').css('visibility', 'visible');
            }
        }).add({
            targets: '.cascocar5-before',
            translateX: [
                {value: -180, duration: 0},
                {value: 575, duration: 2700},
            ],
            translateY: [
                {value: 105, duration: 0},
                {value: -332, duration: 2700},
            ],
            easing: 'linear',
            offset: 1200,
            complete: function () {
                $('.cascocar5-before').css('visibility', 'hidden');
                $('.cascocar5-crash').css('visibility', 'visible');
                anime({
                    targets: '.cascocar5-crash',
                    translateX: [
                        {value: -30, duration: 0},
                        {value: 0, duration: 500},
                    ],
                    translateY: [
                        {value: 5, duration: 0},
                        {value: 0, duration: 500},
                    ],
                    easing: 'easeOutSine',
                    complete: function () {
                        $('.crash5').css('visibility', 'visible');
                        anime({
                            targets: '.blinks5',
                            opacity: [
                                {value: 0, duration: 0},
                                {value: 1, duration: 300},
                                {value: 0, duration: 300},
                            ],
                            easing: 'easeInOutSine',
                            loop: true,
                        });
                    }
                });

            }
        }).add({
            targets: '.tormoz5',
            translateX: [
                {value: -61, duration: 0},
                {value: 0, duration: 600},
            ],
            translateY: [
                {value: 21, duration: 0},
                {value: 0, duration: 600},
            ],
            opacity: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000},
            ],
            easing: 'easeOutSine',
            offset: 3700,
        }).add({
            targets: '.tormoz_plazhka5',
            translateX: [
                {value: -46, duration: 0},
            ],
            translateY: [
                {value: 10, duration: 0},
            ],
            easing: 'easeOutSine'
        }).add({
            targets: '.pin5',
            translateY: [
                {value: 0, duration: 0},
                {value: 130, duration: 1300}
            ],
            opacity: [{value: 0}, {value: 1}],
            easing: 'easeOutQuad',
            offset: 4200,
            complete: function () {
                anime({
                    targets: '.pin5',
                    translateY: [
                        {value: 120, duration: 1000},
                        {value: 130, duration: 1000}
                    ],
                    easing: 'easeInOutQuad',
                    loop: true
                });
            }
        }).add({
            targets: '.car_right1',
            translateX: [
                {value: 0, duration: 0},
                {value: 636, duration: 3000},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -368, duration: 3000},
            ],
            easing: 'easeOutSine',
            offset: 2000,
        }).add({
            targets: '.car_right2',
            translateX: [
                {value: 0, duration: 0},
                {value: 636, duration: 3000},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -368, duration: 3000},
            ],
            easing: 'easeOutSine',
            offset: 2200,
        }).add({
            targets: '.car_right3',
            translateX: [
                {value: 0, duration: 0},
                {value: 636, duration: 3000},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -368, duration: 3000},
            ],
            easing: 'easeOutSine',
            offset: 2400,
        }).add({
            targets: '.car_right4',
            translateX: [
                {value: 0, duration: 0},
                {value: 636, duration: 3000},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -368, duration: 3000},
            ],
            easing: 'easeOutSine',
            offset: 2600,
        }).add({
            targets: '.car_right5',
            translateX: [
                {value: 0, duration: 0},
                {value: 636, duration: 3000},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -368, duration: 3000},
            ],
            easing: 'easeOutSine',
            offset: 2800,
        }).add({
            targets: '.car_right6',
            translateX: [
                {value: 0, duration: 0},
                {value: 636, duration: 3000},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -368, duration: 3000},
            ],
            easing: 'easeOutSine',
            offset: 3000,
        }).add({
            targets: '.car_right7',
            translateX: [
                {value: 0, duration: 0},
                {value: 636, duration: 3000},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -368, duration: 3000},
            ],
            easing: 'easeOutSine',
            offset: 3200,
        }).add({
            targets: '.car_right8',
            translateX: [
                {value: 0, duration: 0},
                {value: 636, duration: 3000},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -368, duration: 3000},
            ],
            easing: 'easeOutSine',
            offset: 3400,
            complete: function () {
                anime({
                    targets: '.car_left3',
                    translateX: [
                        {value: 0, duration: 0},
                        {value: -1140, duration: 5000},
                    ],
                    translateY: [
                        {value: 0, duration: 0},
                        {value: 655, duration: 5000},
                    ],
                    easing: 'linear',
                    delay: 5000,
                    loop: true,
                });
            }
        }).add({
            targets: '.car_right9',
            translateX: [
                {value: 0, duration: 0},
                {value: 636, duration: 3000},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -368, duration: 3000},
            ],
            easing: 'easeOutSine',
            offset: 3600,
        }).add({
            targets: '.car_right10',
            translateX: [
                {value: 0, duration: 0},
                {value: 636, duration: 3000},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -368, duration: 3000},
            ],
            easing: 'easeOutSine',
            offset: 3800,
        }).add({
            targets: '.car_right11',
            translateX: [
                {value: 0, duration: 0},
                {value: 636, duration: 3000},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -368, duration: 3000},
            ],
            easing: 'easeOutSine',
            offset: 4000,
        }).add({
            targets: '.car_right12',
            translateX: [
                {value: 0, duration: 0},
                {value: 636, duration: 3000},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -368, duration: 3000},
            ],
            easing: 'easeOutSine',
            offset: 4200,
        }).add({
            targets: '.car_right13',
            translateX: [
                {value: 0, duration: 0},
                {value: 636, duration: 3000},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -368, duration: 3000},
            ],
            easing: 'easeOutSine',
            offset: 4400,
        }).add({
            targets: '.car_right14',
            translateX: [
                {value: 0, duration: 0},
                {value: 636, duration: 3000},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -368, duration: 3000},
            ],
            easing: 'easeOutSine',
            offset: 4600,
        }).add({
            targets: '.car_right15',
            translateX: [
                {value: 0, duration: 0},
                {value: 636, duration: 3000},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -368, duration: 3000},
            ],
            easing: 'easeOutSine',
            offset: 4800,
            complete: function () {
                anime({
                    targets: '.car_left4',
                    translateX: [
                        {value: 0, duration: 0},
                        {value: -1140, duration: 5000},
                    ],
                    translateY: [
                        {value: 0, duration: 0},
                        {value: 655, duration: 5000},
                    ],
                    easing: 'linear',
                    delay: 5000,
                    loop: true,
                });
            }
        })
    };

    function sixthScrrenAnimation() {
        anime({
            targets: '.strips6',
            translateX: [
                {value: 0, duration: 0},
                {value: 140, duration: 1500},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -80, duration: 1500},
            ],
            easing: 'linear',
            loop: true,
        });

        anime({
            targets: '.cascocar6',
            translateY: [
                {value: 0, duration: 0},
                {value: -3, duration: 400},
                {value: 0, duration: 400},
            ],
            easing: 'easeInOutSine',
            loop: true,
        });

        anime({
            targets: '.trees6',
            translateX: [
                {value: -420, duration: 0},
                {value: 1680, duration: 15000},
            ],
            translateY: [
                {value: 240, duration: 0},
                {value: -960, duration: 15000},
            ],
            easing: 'linear',
            loop: true
        });

        anime({
            targets: '.tree61',
            opacity: [
                {value: 0, duration: 0},
                {value: 0, duration: 1500},
                {value: 1, duration: 1000},
                {value: 1, duration: 2000},
                {value: 0, duration: 1000},
                {value: 0, duration: 9500}
            ],
            easing: 'easeInOutSine',
            delay: 0,
            loop: true
        });

        anime({
            targets: '.tree64',
            opacity: [
                {value: 0, duration: 0},
                {value: 0, duration: 4000},
                {value: 1, duration: 1000},
                {value: 1, duration: 1500},
                {value: 0, duration: 1000},
                {value: 0, duration: 7500}
            ],
            easing: 'easeInOutSine',
            delay: 0,
            loop: true
        });

        anime({
            targets: '.tree63',
            opacity: [
                {value: 0, duration: 0},
                {value: 0, duration: 6000},
                {value: 1, duration: 1000},
                {value: 1, duration: 2500},
                {value: 0, duration: 1000},
                {value: 0, duration: 4500}
            ],
            easing: 'easeInOutSine',
            delay: 0,
            loop: true
        });

        anime({
            targets: '.tree62',
            opacity: [
                {value: 0, duration: 0},
                {value: 0, duration: 9000},
                {value: 1, duration: 1000},
                {value: 1, duration: 1500},
                {value: 0, duration: 1000},
                {value: 0, duration: 2500}
            ],
            easing: 'easeInOutSine',
            delay: 0,
            loop: true
        });
    };

    function sevenScrrenAnimation() {
        //ANIMATION
        sevenScreen.add({
            targets: '.sand7',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 200,
            complete: function () {
                anime({
                    targets: '.car17',
                    translateX: [
                        {value: 0, duration: 0},
                        {value: 470, duration: 2000},
                    ],
                    translateY: [
                        {value: 0, duration: 0},
                        {value: 270, duration: 2000},
                    ],
                    loop: true,
                    delay: 3000,
                    easing: 'linear'
                });

                anime({
                    targets: '.car27',
                    translateX: [
                        {value: 0, duration: 0},
                        {value: 470, duration: 2000},
                    ],
                    translateY: [
                        {value: 0, duration: 0},
                        {value: 270, duration: 2000},
                    ],
                    loop: true,
                    delay: 5000,
                    easing: 'linear'
                });

                anime({
                    targets: '.car37',
                    translateX: [
                        {value: 0, duration: 0},
                        {value: -702, duration: 4000},
                    ],
                    translateY: [
                        {value: 0, duration: 0},
                        {value: -406, duration: 4000},
                    ],
                    loop: true,
                    delay: 5000,
                    easing: 'linear'
                });

                anime({
                    targets: '.car47',
                    translateX: [
                        {value: 0, duration: 0},
                        {value: -702, duration: 3500},
                    ],
                    translateY: [
                        {value: 0, duration: 0},
                        {value: -406, duration: 3500},
                    ],
                    loop: true,
                    delay: 7000,
                    easing: 'linear'
                });
            }
        }).add({
            targets: '.grass7',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 0
        }).add({
            targets: '.line17',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 400
        }).add({
            targets: '.line27',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 600
        }).add({
            targets: '.line37',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 800
        }).add({
            targets: '.house17',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 1000
        }).add({
            targets: '.house27',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 1400
        }).add({
            targets: '.house37',
            scale: [
                {value: 0, duration: 0},
                {value: 1, duration: 1000}
            ],
            offset: 1200
        }).add({
            targets: '.cascocar7',
            translateX: [
                {value: 0, duration: 0},
                {value: -482, duration: 3500},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: -278.5, duration: 3500},
            ],
            easing: 'easeOutSine',
            offset: 1600,
            complete: function () {
                $('.cascocar7').css('visibility', 'hidden');
                $('.cascocarufo7').css('visibility', 'visible');
            }
        }).add({
            targets: '.ufo-fly',
            translateX: [
                {value: 0, duration: 0},
                {value: -492, duration: 3500},
            ],
            translateY: [
                {value: 0, duration: 0},
                {value: 284, duration: 3500},
            ],
            easing: 'easeOutSine',
            offset: 4500,
        }).add({
            targets: '.ufo-light',
            opacity: [
                {value: 0, duration: 0},
                {value: 1, duration: 1500},
            ],
            offset: 8300,
        }).add({
            targets: '.cascocarufo7',
            translateY: [
                {value: 0, duration: 0},
                {value: -115, duration: 2000},
            ],
            scale: [
                {value: 1, duration: 0},
                {value: 0, duration: 2000},
            ],
            easing: 'easeOutSine',
            offset: 10000,
        }).add({
            targets: '.ufo-light',
            opacity: [
                {value: 1, duration: 0},
                {value: 0, duration: 1500},
            ],
            offset: 12000,
        }).add({
            targets: '.pin7',
            translateY: [
                {value: 0, duration: 0},
                {value: 130, duration: 1300}
            ],
            opacity: [{value: 0}, {value: 1}],
            easing: 'easeOutQuad',
            offset: 12400,
            complete: function () {
                anime({
                    targets: '.pin7',
                    translateY: [
                        {value: 120, duration: 1000},
                        {value: 130, duration: 1000}
                    ],
                    easing: 'easeInOutQuad',
                    loop: true
                });
            }
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
                        $('.smart2').css('transform', 'translateX(0) translateY(0)');
                        anime.remove('.smart2');
                        anime.remove('.firststagelight');
                        anime.remove('.secondstagelight');
                        anime.remove('.pin2');
                        anime.remove('.blinks2');
                        break;
                    case 3:
                        thirdScreen.pause();
                        $('.car83').css('transform', 'translateX(0) translateY(0)');
                        $('.car73').css('transform', 'translateX(0) translateY(0)');
                        $('.car63').css('transform', 'translateX(0) translateY(0)');
                        anime.remove('.car73');
                        anime.remove('.car83');
                        anime.remove('.car63');
                        anime.remove('.pin3');
                        break;
                    case 4:
                        fourthScreen.pause();
                        $('.prius-start4').css('visibility', 'hidden');
                        $('.prius-end4').css('visibility', 'hidden');
                        $('.car-cross4').css('visibility', 'hidden');
                        $('.smart4').css('transform', 'translateX(0) translateY(0)');
                        $('.gelik4').css('transform', 'translateX(0) translateY(0)');
                        $('.car-cross4').css('transform', 'translateX(0) translateY(0)');
                        anime.remove('.blick-blue-start');
                        anime.remove('.pin4');
                        anime.remove('.car4');
                        anime.remove('.gelik4');
                        anime.remove('.smart4');
                        anime.remove('.car-cross4');
                        anime.remove('.blick-red-start');
                        anime.remove('.blick-blue-end');
                        anime.remove('.blick-red-end');
                        break;
                    case 5:
                        fifthScreen.pause();
                        anime.remove('.wave');
                        anime.remove('.car_left1');
                        anime.remove('.car_left2');
                        anime.remove('.car_left3');
                        anime.remove('.car_left4');
                        anime.remove('.boat');
                        anime.remove('.blinks5');
                        anime.remove('.pin5');
                        $('.crash5').css('visibility', 'hidden');
                        $('.cascocar5-before').css('visibility', 'visible');
                        $('.cascocar5-crash').css('visibility', 'hidden');
                        $('.smart5-before').css('visibility', 'visible');
                        $('.smart5-crash').css('visibility', 'hidden');
                        $('.bus5-before').css('visibility', 'visible');
                        $('.bus5-crash').css('visibility', 'hidden');
                        $('.wave').css('transform', 'translateX(0) translateY(0)');
                        $('.car_left1').css('transform', 'translateX(0) translateY(0)');
                        $('.boat').css('transform', 'rotate(0)');
                        $('.car_left2').css('transform', 'translateX(0) translateY(0)');
                        $('.car_left3').css('transform', 'translateX(0) translateY(0)');
                        $('.car_left4').css('transform', 'translateX(0) translateY(0)');
                        break;
                    case 6:
                        anime.remove('.strips6');
                        $('.strips6').css('transform', 'translateX(0) translateY(0)');
                        anime.remove('.cascocar6');
                        $('.cascocar6').css('transform', 'translateY(0)');
                        anime.remove('.trees6');
                        $('.trees6').css('transform', 'translateX(-420px) translateY(240px)');
                        anime.remove('.tree61');
                        anime.remove('.tree62');
                        anime.remove('.tree63');
                        anime.remove('.tree64');
                        break;
                    case 7:
                        sevenScreen.pause();
                        $('.cascocar7').css('visibility', 'visible');
                        $('.cascocarufo7').css('visibility', 'hidden');
                        anime.remove('.car17');
                        anime.remove('.car27');
                        anime.remove('.car37');
                        anime.remove('.car47');
                        anime.remove('.pin7');
                        $('.car17').css('transform', 'translateX(0) translateY(0)');
                        $('.car27').css('transform', 'translateX(0) translateY(0)');
                        $('.car37').css('transform', 'translateX(0) translateY(0)');
                        $('.car47').css('transform', 'translateX(0) translateY(0)');
                        break;
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
                            }, 300);
                        } else {
                            setTimeout(function () {
                                thirdScreen.restart();
                            }, 200);
                        }
                        break;
                    case 4:
                        if (showFourthScreen) {
                            setTimeout(function () {
                                fourthScrrenAnimation();
                                showFourthScreen = false;
                            }, 400);
                        } else {
                            setTimeout(function () {
                                fourthScreen.restart();
                            }, 200);
                        }
                        break;
                    case 5:
                        if (showFifthScreen) {
                            setTimeout(function () {
                                fifthScrrenAnimation();
                                showFifthScreen = false;
                            }, 400);
                        } else {
                            setTimeout(function () {
                                fifthScreen.restart();
                            }, 200);
                        }
                        break;
                    case 6:
                        setTimeout(function () {
                            sixthScrrenAnimation();
                        }, 400);
                        break;
                    case 7:
                        if (showSevenScreen) {
                            setTimeout(function () {
                                sevenScrrenAnimation();
                                showSevenScreen = false;
                            }, 400);
                        } else {
                            setTimeout(function () {
                                sevenScreen.restart();
                            }, 200);
                        }
                        break;
                }
            }
        });
    }

    $('#menu-trigger').click(function (e) {
        e.preventDefault();
        // var currentHeight = $(window).scrollTop();
        // console.log(currentHeight);
        $('body').toggleClass('open-nav').removeClass('open-form');
        // $('body, html').scrollTop(currentHeight);
    });

    var open = true;
    $('#form-trigger').click(function (e) {
        var current = $('.fp-section.fp-table.active').attr('data-anchor');

        if (open) {
            switch (current) {
                case 'screen1':
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
                case 'screen2':
                    secondScreen.pause();
                    $('.casco_car2').css('visibility', 'visible');
                    $('.gelik2_crash').css('visibility', 'visible');
                    $('.crash2').css('visibility', 'hidden');
                    $('.smart2').css('transform', 'translateX(0) translateY(0)');
                    anime.remove('.smart2');
                    anime.remove('.firststagelight');
                    anime.remove('.secondstagelight');
                    anime.remove('.pin2');
                    anime.remove('.blinks2');
                    break;
                case 'screen3':
                    thirdScreen.pause();
                    $('.car83').css('transform', 'translateX(0) translateY(-30)');
                    $('.car73').css('transform', 'translateX(0) translateY(0)');
                    $('.car63').css('transform', 'translateX(0) translateY(0)');
                    anime.remove('.car73');
                    anime.remove('.car83');
                    anime.remove('.car63');
                    anime.remove('.pin3');
                    break;
                case 'screen4':
                    fourthScreen.pause();
                    $('.prius-start4').css('visibility', 'hidden');
                    $('.prius-end4').css('visibility', 'hidden');
                    $('.car-cross4').css('visibility', 'hidden');
                    $('.smart4').css('transform', 'translateX(0) translateY(0)');
                    $('.gelik4').css('transform', 'translateX(0) translateY(0)');
                    $('.car-cross4').css('transform', 'translateX(0) translateY(0)');
                    anime.remove('.blick-blue-start');
                    anime.remove('.pin4');
                    anime.remove('.car4');
                    anime.remove('.gelik4');
                    anime.remove('.smart4');
                    anime.remove('.car-cross4');
                    anime.remove('.blick-red-start');
                    anime.remove('.blick-blue-end');
                    anime.remove('.blick-red-end');
                    break;
                case 'screen5':
                    fifthScreen.pause();
                    anime.remove('.wave');
                    anime.remove('.car_left1');
                    anime.remove('.car_left2');
                    anime.remove('.car_left3');
                    anime.remove('.car_left4');
                    anime.remove('.boat');
                    anime.remove('.blinks5');
                    anime.remove('.pin5');
                    $('.crash5').css('visibility', 'hidden');
                    $('.cascocar5-before').css('visibility', 'visible');
                    $('.cascocar5-crash').css('visibility', 'hidden');
                    $('.smart5-before').css('visibility', 'visible');
                    $('.smart5-crash').css('visibility', 'hidden');
                    $('.bus5-before').css('visibility', 'visible');
                    $('.bus5-crash').css('visibility', 'hidden');
                    $('.wave').css('transform', 'translateX(0) translateY(0)');
                    $('.car_left1').css('transform', 'translateX(0) translateY(0)');
                    $('.boat').css('transform', 'rotate(0)');
                    $('.car_left2').css('transform', 'translateX(0) translateY(0)');
                    $('.car_left3').css('transform', 'translateX(0) translateY(0)');
                    $('.car_left4').css('transform', 'translateX(0) translateY(0)');
                    break;
                case 'screen6':
                    anime.remove('.strips6');
                    $('.strips6').css('transform', 'translateX(0) translateY(0)');
                    anime.remove('.cascocar6');
                    $('.cascocar6').css('transform', 'translateY(0)');
                    anime.remove('.trees6');
                    $('.trees6').css('transform', 'translateX(-420px) translateY(240px)');
                    anime.remove('.tree61');
                    anime.remove('.tree62');
                    anime.remove('.tree63');
                    anime.remove('.tree64');
                    break;
                case 'screen7':
                    sevenScreen.pause();
                    $('.cascocar7').css('visibility', 'visible');
                    $('.cascocarufo7').css('visibility', 'hidden');
                    anime.remove('.car17');
                    anime.remove('.car27');
                    anime.remove('.car37');
                    anime.remove('.car47');
                    anime.remove('.pin7');
                    $('.car17').css('transform', 'translateX(0) translateY(0)');
                    $('.car27').css('transform', 'translateX(0) translateY(0)');
                    $('.car37').css('transform', 'translateX(0) translateY(0)');
                    $('.car47').css('transform', 'translateX(0) translateY(0)');
                    break;
            }
            open = false;
        } else {
            switch (current) {
                case 'screen1':
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
                case 'screen2':
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
                case 'screen3':
                    if (showThirdScreen) {
                        setTimeout(function () {
                            thirdScreenAnimation();
                            showThirdScreen = false;
                        }, 300);
                    } else {
                        setTimeout(function () {
                            thirdScreen.restart();
                        }, 200);
                    }
                    break;
                case 'screen4':
                    if (showFourthScreen) {
                        setTimeout(function () {
                            fourthScrrenAnimation();
                            showFourthScreen = false;
                        }, 400);
                    } else {
                        setTimeout(function () {
                            fourthScreen.restart();
                        }, 200);
                    }
                    break;
                case 'screen5':
                    if (showFifthScreen) {
                        setTimeout(function () {
                            fifthScrrenAnimation();
                            showFifthScreen = false;
                        }, 400);
                    } else {
                        setTimeout(function () {
                            fifthScreen.restart();
                        }, 200);
                    }
                    break;
                case 'screen6':
                    setTimeout(function () {
                        sixthScrrenAnimation();
                    }, 400);
                    break;
                case 'screen7':
                    if (showSevenScreen) {
                        setTimeout(function () {
                            sevenScrrenAnimation();
                            showSevenScreen = false;
                        }, 400);
                    } else {
                        setTimeout(function () {
                            sevenScreen.restart();
                        }, 200);
                    }
                    break;
            }
            open = true;
        }
        e.preventDefault();
        $('body').toggleClass('open-form').removeClass('open-nav');
    });

    $('#want-trigger').click(function (e) {
        var current = $('.fp-section.fp-table.active').attr('data-anchor');

        if (open) {
            switch (current) {
                case 'screen1':
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
                case 'screen2':
                    secondScreen.pause();
                    $('.casco_car2').css('visibility', 'visible');
                    $('.gelik2_crash').css('visibility', 'visible');
                    $('.crash2').css('visibility', 'hidden');
                    $('.smart2').css('transform', 'translateX(0) translateY(0)');
                    anime.remove('.smart2');
                    anime.remove('.firststagelight');
                    anime.remove('.secondstagelight');
                    anime.remove('.pin2');
                    anime.remove('.blinks2');
                    break;
                case 'screen3':
                    thirdScreen.pause();
                    $('.car83').css('transform', 'translateX(0) translateY(0)');
                    $('.car73').css('transform', 'translateX(0) translateY(0)');
                    $('.car63').css('transform', 'translateX(0) translateY(0)');
                    anime.remove('.car73');
                    anime.remove('.car83');
                    anime.remove('.car63');
                    anime.remove('.pin3');
                    break;
                case 'screen4':
                    fourthScreen.pause();
                    $('.prius-start4').css('visibility', 'hidden');
                    $('.prius-end4').css('visibility', 'hidden');
                    $('.car-cross4').css('visibility', 'hidden');
                    $('.smart4').css('transform', 'translateX(0) translateY(0)');
                    $('.gelik4').css('transform', 'translateX(0) translateY(0)');
                    $('.car-cross4').css('transform', 'translateX(0) translateY(0)');
                    anime.remove('.blick-blue-start');
                    anime.remove('.pin4');
                    anime.remove('.car4');
                    anime.remove('.gelik4');
                    anime.remove('.smart4');
                    anime.remove('.car-cross4');
                    anime.remove('.blick-red-start');
                    anime.remove('.blick-blue-end');
                    anime.remove('.blick-red-end');
                    break;
                case 'screen5':
                    fifthScreen.pause();
                    anime.remove('.wave');
                    anime.remove('.car_left1');
                    anime.remove('.car_left2');
                    anime.remove('.car_left3');
                    anime.remove('.car_left4');
                    anime.remove('.boat');
                    anime.remove('.blinks5');
                    anime.remove('.pin5');
                    $('.crash5').css('visibility', 'hidden');
                    $('.cascocar5-before').css('visibility', 'visible');
                    $('.cascocar5-crash').css('visibility', 'hidden');
                    $('.smart5-before').css('visibility', 'visible');
                    $('.smart5-crash').css('visibility', 'hidden');
                    $('.bus5-before').css('visibility', 'visible');
                    $('.bus5-crash').css('visibility', 'hidden');
                    $('.wave').css('transform', 'translateX(0) translateY(0)');
                    $('.car_left1').css('transform', 'translateX(0) translateY(0)');
                    $('.boat').css('transform', 'rotate(0)');
                    $('.car_left2').css('transform', 'translateX(0) translateY(0)');
                    $('.car_left3').css('transform', 'translateX(0) translateY(0)');
                    $('.car_left4').css('transform', 'translateX(0) translateY(0)');
                    break;
                case 'screen6':
                    anime.remove('.strips6');
                    $('.strips6').css('transform', 'translateX(0) translateY(0)');
                    anime.remove('.cascocar6');
                    $('.cascocar6').css('transform', 'translateY(0)');
                    anime.remove('.trees6');
                    $('.trees6').css('transform', 'translateX(-420px) translateY(240px)');
                    anime.remove('.tree61');
                    anime.remove('.tree62');
                    anime.remove('.tree63');
                    anime.remove('.tree64');
                    break;
                case 'screen7':
                    sevenScreen.pause();
                    $('.cascocar7').css('visibility', 'visible');
                    $('.cascocarufo7').css('visibility', 'hidden');
                    anime.remove('.car17');
                    anime.remove('.car27');
                    anime.remove('.car37');
                    anime.remove('.car47');
                    anime.remove('.pin7');
                    $('.car17').css('transform', 'translateX(0) translateY(0)');
                    $('.car27').css('transform', 'translateX(0) translateY(0)');
                    $('.car37').css('transform', 'translateX(0) translateY(0)');
                    $('.car47').css('transform', 'translateX(0) translateY(0)');
                    break;
            }
            open = false;
        } else {
            switch (current) {
                case 'screen1':
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
                case 'screen2':
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
                case 'screen3':
                    if (showThirdScreen) {
                        setTimeout(function () {
                            thirdScreenAnimation();
                            showThirdScreen = false;
                        }, 300);
                    } else {
                        setTimeout(function () {
                            thirdScreen.restart();
                        }, 200);
                    }
                    break;
                case 'screen4':
                    if (showFourthScreen) {
                        setTimeout(function () {
                            fourthScrrenAnimation();
                            showFourthScreen = false;
                        }, 400);
                    } else {
                        setTimeout(function () {
                            fourthScreen.restart();
                        }, 200);
                    }
                    break;
                case 'screen5':
                    if (showFifthScreen) {
                        setTimeout(function () {
                            fifthScrrenAnimation();
                            showFifthScreen = false;
                        }, 400);
                    } else {
                        setTimeout(function () {
                            fifthScreen.restart();
                        }, 200);
                    }
                    break;
                case 'screen6':
                    setTimeout(function () {
                        sixthScrrenAnimation();
                    }, 400);
                    break;
                case 'screen7':
                    if (showSevenScreen) {
                        setTimeout(function () {
                            sevenScrrenAnimation();
                            showSevenScreen = false;
                        }, 400);
                    } else {
                        setTimeout(function () {
                            sevenScreen.restart();
                        }, 200);
                    }
                    break;
            }
            open = true;
        }
        e.preventDefault();
        $('body').toggleClass('open-form').removeClass('open-nav');
    });

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
