$(document).ready(function () {
    $('#playVideo').click(function () {
        $('#heroVideoFrame').addClass('open');
        $('#heroVideo').prop('muted', false);
        $('#closeVideo').show();
    });
    $('#closeVideo').click(function () {
        $('#heroVideoFrame').removeClass('open');
        $('#heroVideo').prop('muted', true);
        $('#closeVideo').hide();
    });

    $('#hpMediaTrigger').click(function () {
        $('#hpMedia').toggleClass('open');
        openRecentVideo();
    });

    function openRecentVideo() {
        if ($('#hpMedia').hasClass('open')) {
            $('a.btn-open i').removeClass('fa-caret-up');
            $('a.btn-open i').addClass('fa-caret-down');
        } else {
            $('a.btn-open i').removeClass('fa-caret-down');
            $('a.btn-open i').addClass('fa-caret-up');
        }
    }


    $('.video-container').each(function (index) {
        jwplayer($(this).attr('id')).setup({
            file: $(this).data('video-url'),
            image: $(this).data('video-thumb'),
            width: "100%",
            aspectratio: "16:9",
            abouttext: "Robot Wars",
            allowfullscreen: "true",
            skin: {
                name: "robot_wars"
            }
        });
    });
    $("#navTrigger").addClass("active").click(function (e) {
        console.log("sdad");

        if ($(this).hasClass("active")) {
            $(this).removeClass("active");
            $(e.target).closest("header").removeClass("open");
            $("#wrapper").removeClass("is-open")

        } else {
            $(this).addClass("active");
            $(e.target).closest("header").addClass("open");
            $("#wrapper").addClass("is-open")


        }

    });
    $("header").addClass("open");
    // $("#wrapper").addClass("is-open")


    // //Preloader
    // pace.start({
    //     document: false
    // });

    //Navigation trigger
    // $('#navTrigger').click(function () {
    //     $(this).toggleClass('active');
    //     $('header').toggleClass('open');
    //     $('#homeBrand, #wrapper').toggleClass('is-open');
    //     //homepage
    // });

    //check window size
    function checkWidth(init) {
        /*If browser resized, check width again */
        if ($(window).width() > 1080) {
            $('header').addClass('open');
            $('#navTrigger').addClass('active');
            $('#homeBrand, #wrapper').addClass('is-open');
            //Homepage media
            $('#hpMedia').addClass('open');
        }
        else {
            if (!init) {
                $('header').removeClass('open');
                $('#navTrigger').removeClass('active');
                $('#homeBrand, #wrapper').removeClass('is-open');
                //Homepage media
                $('#hpMedia').removeClass('open');
            }
        }
    }

    checkWidth(true);

    $(window).resize(function () {
        checkWidth(false);
    });

    $('body').addClass('no-overflow-X');
    $('#robotList li a').click(function (event) {
        event.preventDefault();

        $('body').addClass('no-overflow-X');

        $('#robotList').addClass('active');
        $('#wrapper').removeClass('shake-close');
        setTimeout(function () {
            $('#wrapper').toggleClass('shake-open');
        }, 1);
        if ($('#wrapper').hasClass('shake-open')) {
            $('#wrapper').removeClass('shake-open');
        }
    });
    $('#closeViewer').click(function (event) {
        event.preventDefault();
        $('#robotList').removeClass('active');
        pauseAll();
        $('#wrapper').removeClass('shake-open');
        setTimeout(function () {
            $('#wrapper').toggleClass('shake-close');
        }, 1);
    });


    // Auto background video play

    function pauseAll() {
        $('#robot-1-vid').get(0).pause();
        $('#robot-2-vid').get(0).pause();
        $('#robot-3-vid').get(0).pause();
        $('#robot-4-vid').get(0).pause();
    }


    $('#robot-1').click(function () {

        $('.robots__select__viewer').removeClass('active');
        $('#robotViewer-1').addClass('active');

        if ($('body').hasClass('no-touch')) {
            pauseAll();
            $('#robot-1-vid').get(0).play();
        }
    });
    $('#robot-2').click(function () {

        $('.robots__select__viewer').removeClass('active');
        $('#robotViewer-2').addClass('active');

        if ($('body').hasClass('no-touch')) {
            pauseAll();
            $('#robot-2-vid').get(0).play();
        }
    });
    $('#robot-3').click(function () {

        $('.robots__select__viewer').removeClass('active');
        $('#robotViewer-3').addClass('active');

        if ($('body').hasClass('no-touch')) {
            pauseAll();
            $('#robot-3-vid').get(0).play();
        }
    });
    $('#robot-4').click(function () {

        $('.robots__select__viewer').removeClass('active');
        $('#robotViewer-4').addClass('active');

        if ($('body').hasClass('no-touch')) {
            pauseAll();
            $('#robot-4-vid').get(0).play();
        }
    });
    $(function () {
        $("#modal-1").on("change", function () {
            if ($(this).is(":checked")) {
                $("body").addClass("modal-open");
            } else {
                $("body").removeClass("modal-open");
            }
        });

        $(".modal-fade-screen, .modal-close").on("click", function () {
            $(".modal-state:checked").prop("checked", false).change();
        });

        $(".modal-inner").on("click", function (e) {
            e.stopPropagation();
        });
    });
    equal = function (container) {

        var currentTallest = 0,
            currentRowStart = 0,
            rowDivs = new Array(),
            $el,
            topPosition = 0;
        $(container).each(function () {

            $el = $(this);
            $($el).height('auto')
            topPostion = $el.position().top;

            if (currentRowStart != topPostion) {
                for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                    rowDivs[currentDiv].height(currentTallest);
                }
                rowDivs.length = 0; // empty the array
                currentRowStart = topPostion;
                currentTallest = $el.height();
                rowDivs.push($el);
            } else {
                rowDivs.push($el);
                currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
            }
            for (currentDiv = 0; currentDiv < rowDivs.length; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
        });
    }

    $(window).load(function () {
        equal('.equal');
    });


    $(window).resize(function () {
        equal('.equal');
    });

    function itemHeights() {
        var header = '.competitors__season-calendar__week__container__item__content__header',
            content = '.competitors__season-calendar__week__container__item__content__content';

        setTimeout(function () {
            equal(header);
        }, 300);
        setTimeout(function () {
            equal(content);
        }, 400);
        setTimeout(function () {
            equal('.equal');
        }, 500);
    }

    function seasons() {
        var windowWidth = $(window).innerWidth();
        var windowHeight = $(window).innerHeight();
        navRemoved = windowHeight - 50;

        if ($('#wrapper').hasClass('is-open')) {
            $('.competitors__season').css('height', windowHeight);
        }
        else {
            $('.competitors__season').css('height', navRemoved);
        }

        if (windowWidth > 700) {
            $('.competitors__season--select__old').removeClass('vSplit');
            $('.competitors__season--select__new').removeClass('vSplit');
            $('.competitors__season--select__old').addClass('hSplit');
            $('.competitors__season--select__new').addClass('hSplit');
        }
        else {
            $('.competitors__season--select__old').removeClass('hSplit');
            $('.competitors__season--select__new').removeClass('hSplit');
            $('.competitors__season--select__old').addClass('vSplit');
            $('.competitors__season--select__new').addClass('vSplit');
        }
    }

    // $('.carousel').owlCarousel({
    //     items: 1,
    //     loop: true,
    //     mouseDrag: true,
    //     touchDrag: true,
    //     nav: true,
    //     navText: ["<span>Prev</span><i></i><i></i><i></i><i></i>",
    //         "<span>Next</span><i></i><i></i><i></i><i></i>"]
    // });


    function sectionHeight() {
        var windowHeight = $(window).innerHeight();

        $('.competitors__team-page__carousel').css('height', windowHeight);
    }

    $('#navTrigger').on('click', function () {
        seasons();
        sectionHeight();
        itemHeights();
    });

    $(window).on('resize', function () {
        seasons();
        sectionHeight();
        itemHeights();
    });
    $('.item ul').hide();
    seasons();
    sectionHeight();
    itemHeights();
    $('.download').click(function (e) {
        e.preventDefault();
        $(this).next('ul').slideToggle();
        $(this).find('i').toggleClass('fa-caret-down fa-caret-up')
        $(this).toggleClass('current');
    });

    $('#faqAccordion').find('a').click(function () {
        $(this).next().slideToggle('fast');
        $(".answer").not($(this).next()).slideUp('fast');

    });
    $(".faq-item li").click(function () {
        $(this).find(".answer").css("display", "block")
    })


});