(function($) {
    
    var cryptohousescripts = {

        menu: function() {
            // Mobile Menu
            $(".h-menu li ul").parent('li').append('<i class="icofont-simple-up"></i>').addClass('has-child');
            $(".h-menu li .megamenu").parent('li').addClass('has-megamenu');
            $(".h-menu li .megamenu").parent('li').children('a').append('<i class="icofont-simple-up"></i>');
            $(".h-menu li .megamenu").parent('li').append('<i class="icofont-simple-up"></i>');

            $('.h-menu').clone().prependTo('.mobile-menu');

            $('.menu-trigger, .menu-close').on('click', function (e) {
                e.stopPropagation()
                $('.menu-trigger').toggleClass('active')
                $('.mobile-menu-wrap').toggleClass('active-menu')
                $('body, .header-area').toggleClass('active-mobile-menu')
            })
            $('.mobile-menu-wrap').on('click', function (e) {
                e.stopPropagation()
            })
            $(".mobile-menu .h-menu li i").click(function(e){
                $(this).parent('li').toggleClass("active").children('ul').slideToggle();
                $(this).parent('li').children('.megamenu').slideToggle();
            });

            function mobileMenu() {
                $('.menu-trigger').removeClass('active')
                $('.mobile-menu-wrap').removeClass('active-menu')
                $('body, .header-area').removeClass('active-mobile-menu')
            }

            $(document).on('click', function () {
                mobileMenu()
            })
        },
        gotop: function(){
            // go-to-top
            $("body").prepend('<div id="top"><i class="icofont-simple-up"></i></div>');
            $(window).scroll(function(){
                if( $(window).scrollTop() > 300 ){
                    $("#top").fadeIn();
                }else{
                    $("#top").fadeOut();
                }
            });
            $("#top").click(function(){
                $("body, html").animate({scrollTop: 0});
            });
        },
        accordion: function() {
            // accordion
            $(".accordion-content").hide();
            $(".accordion-item").first().addClass("active").children(".accordion-content").show();
            $(".accordion-title").click(function(){
                $(this).parent().siblings().removeClass("active").children(".accordion-content").slideUp();
                $(this).parent().toggleClass("active").children(".accordion-content").slideToggle();
            });
        },
        countdown: function(){
            // jQuery CountDown
            if( $(".countdown-clock").length ){
                $('.countdown-clock').countdown('2021/10/10', function(event) {
                    $('.clock-days').html(event.strftime('%D'));
                    $('.clock-hours').html(event.strftime('%H'));
                    $('.clock-minutes').html(event.strftime('%M'));
                    $('.clock-seconds').html(event.strftime('%S'));
                });
            }
        },
        videopopup: function(){
            // video popup lightbox
            if($('.vid-play').length){
                $('.vid-play').magnificPopup({
                    disableOn: 700,
                    type: 'iframe',
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
            
                    fixedContentPos: false
                });     
            }
        },
        counterup: function(){
            // counter-up
            if( $(".counter-wrap, .cripto-batch-wrapper").length ){
                var a = 0;
                $(window).scroll(function() {
                    var oTop = $('.counter-wrap , .cripto-batch-wrapper').offset().top - window.innerHeight;
                    if (a == 0 && $(window).scrollTop() > oTop) {
                        $('.counter-value').each(function() {
                            var $this = $(this),
                            countTo = $this.attr('data-count');
                            $({
                                countNum: $this.text()
                            }).animate({
                                countNum: countTo
                            },

                            {
                                duration: 2000,
                                easing: 'swing',
                                step: function() {
                                    $this.text(Math.floor(this.countNum));
                                },
                                complete: function() {
                                    $this.text(this.countNum);
                                }
                            });
                        });
                        a = 1;
                    }
                });
            }
            
        },
        nice_select: function() {
            if ($('select').length) {
                $('select').niceSelect();
            }
            // $('.select-active').niceSelect();
            // $('.select-country').niceSelect();
        },
        carousel: function() {
            // Owl-carousel
            var hero = $(".hero-slider");
            if(hero.length){
                hero.owlCarousel({
                    items: 1,
                    smartSpeed: 600,
                    animateOut: 'fadeOut',
                    nav: true,
                    onInitialized  : counter,
                    onTranslated : counter,
                    navText: ['<i class="icofont-simple-left"></i>','<i class="icofont-simple-right"></i>']
                });
        
                function counter(event) {
                    var element   = event.target; 
                    var items     = event.item.count;     // Number of items
                    var item      = event.item.index + 1; // Position of the current item
                    $(".hero-slider-sec .owl-dot").css('width',100/items+'%');        
                }   
            }

            $(".comment-carousel").owlCarousel({
                items: 1,
                smartSpeed: 600
            });
            $(".tread-slider-wrapper").owlCarousel({
                items: 10,
                smartSpeed: 600,
                autoHeight : false,
                dots:false,
                responsive : {
                    0 : {
                        items: 2, 
                    },
                    480 : {
                        items: 4, 
                    },
                    768 : {
                        items: 6, 
                    },
                    991 : {
                        items: 7, 
                    },
                    1199 : {
                        items: 8, 
                    },
                    1200 : {
                        items: 10, 
                    }
                },
            });
            $('.carousel-active').owlCarousel({
                loop:false,
                margin:10,
                nav:false,
                items:1
            });
            $('.carousel-active-2').owlCarousel({
                loop:false,
                margin:0,
                nav:true,
                navText: ['<i class="icofont-rounded-left"></i>','<i class="icofont-rounded-right"></i>'],
                items:1,
            });
            $('.carousel-active-3').owlCarousel({
                loop:true,
                margin:0,
                nav:false,
                items:1,
                autoplay:true,
                autoplayTimeout:5000,
                autoplayHoverPause:true
            })
        },
        polygone_particles: function(){
            // polygone particles
            if( $("#particles").length ){
                var nodesjs = new NodesJs({
                    id: 'particles',
                    width: window.innerWidth,
                    height: window.innerHeight,
                    particleSize: 4,
                    lineSize: 1,
                    particleColor: [255, 255, 255, 0.3],
                    lineColor: [255, 255, 255],
                    backgroundFrom: [0, 3, 73],
                    backgroundTo: [0, 91, 142],
                    backgroundDuration: 4000,
                    nobg: true,
                    number: window.hasOwnProperty('orientation') ? 30: 100,
                    speed: 20
                });        
            }
        },
        accordion_two: function() { 
            $(".single-accordion, .acorn-click").click(function(){
                if($(this).hasClass('active')){
                    $(this).removeClass("active").children('.accordion-body').slideUp();  
                }else{
                    $('.accordion-wrapper').find('.single-accordion,.acorn-click').removeClass("active").find('.accordion-body').slideUp();
                    $(this).addClass("active").children('.accordion-body').slideDown();
                }
            });
        },
        cripto_accordion: function() { 
            $(".cripto-single-accordion").click(function(){
                $(this).toggleClass("active").children('.cripto-accordion-body').slideToggle().parents('.cripto-single-accordion').siblings().removeClass('active').children('.cripto-accordion-body').slideUp();
            });
        },
        scroll: function() { 
                var addClassOnScroll = function () {
                    var windowTop = $(window).scrollTop();
                    $('.section').each(function (index, elem) {
                      var offsetTop = $(elem).offset().top;
                      var outerHeight = $(this).outerHeight(true);
                
                      if (windowTop > (offsetTop - 50) && windowTop < (offsetTop + outerHeight)) {
                        var elemId = $(elem).attr('id');
                        $(".all-option a.active").removeClass('active');
                        $(".all-option a[href='#" + elemId + "']").addClass('active');
                      }
                    });
                  };
                  $(function () {
                    $(window).on('scroll', function () {
                      addClassOnScroll();
                    });
                  });
                
        },
        sticky: function(){
            $(window).scroll(function(){
                if($(this).scrollTop() > 300){
                    $('.bitcoin-banner-wrap').addClass('sticky')
                } else{
                    $('.bitcoin-banner-wrap').removeClass('sticky')
                }
            });
            var addClassOnScroll = function () {
                var windowTop = $(window).scrollTop();
                $('.section').each(function (index, elem) {
                var offsetTop = $(elem).offset().top;
                var outerHeight = $(this).outerHeight(true);
            
                if (windowTop > (offsetTop - 50) && windowTop < (offsetTop + outerHeight)) {
                    var elemId = $(elem).attr('id');
                    $(".h-menu-wrap ul li a.active").removeClass('active');
                    $(".h-menu-wrap ul li a[href='#" + elemId + "']").addClass('active');
                }
                });
            };
            $(function () {
                $(window).on('scroll', function () {
                addClassOnScroll();
                });
            });

            $('a[href=#]').click(function(e) {
                e.preventDefault(); 
            });
        },
        animation: function(){
            AOS.init({
                duration: 700,
                once: true,
            });
        },
        imgToSvg: function(){
            // Replace all SVG images with inline SVG
            jQuery('img').each(function(){
                var $img = jQuery(this);
                var imgID = $img.attr('id');
                var imgClass = $img.attr('class');
                var imgURL = $img.attr('src');
            
                jQuery.get(imgURL, function(data) {
                    // Get the SVG tag, ignore the rest
                    var $svg = jQuery(data).find('svg');
            
                    // Add replaced image's ID to the new SVG
                    if(typeof imgID !== 'undefined') {
                        $svg = $svg.attr('id', imgID);
                    }
                    // Add replaced image's classes to the new SVG
                    if(typeof imgClass !== 'undefined') {
                        $svg = $svg.attr('class', imgClass+' replaced-svg');
                    }
            
                    // Remove any invalid XML tags as per http://validator.w3.org
                    $svg = $svg.removeAttr('xmlns:a');
            
                    // Replace image with new SVG
                    $img.replaceWith($svg);
            
                }, 'xml');
            
            });
        },
        // all short code js file call here
        
        // Option-Slide Toogle
        option_slide_toogle: function(){
            $('.option-toogle').on("click", function(e){
                $('.all-option').toggleClass('active');
                $('a').click(function(){
                    $('.all-option').removeClass('active');
                });
            });
        },
        single_accordion: function() { 
            $(".accordion").click(function(){
                $(this).toggleClass("active").children('.accordion-body').slideToggle().parents('.acrn-wrap').siblings('.accordion').removeClass('active').children('.accordion-body').slideUp();
            });
        },
        //  Table 
        chart_table: function(){
            $('.live-coin-chart').DataTable({
                responsive: true,
                "searching": false,
                "paging": false,
                "info": false,
                "lengthChange":false
            });
        },


        init: function(){
            cryptohousescripts.menu();
            cryptohousescripts.gotop();
            cryptohousescripts.accordion();
            cryptohousescripts.cripto_accordion();
            cryptohousescripts.accordion_two();
            cryptohousescripts.countdown();
            cryptohousescripts.videopopup();
            cryptohousescripts.counterup();
            cryptohousescripts.carousel();
            cryptohousescripts.polygone_particles();
            cryptohousescripts.animation();
            cryptohousescripts.imgToSvg();
            cryptohousescripts.nice_select();
            cryptohousescripts.option_slide_toogle()
            cryptohousescripts.chart_table()
            cryptohousescripts.scroll()
            cryptohousescripts.sticky()
        }



    }
    
    $(document).ready(function() {
        cryptohousescripts.init();
    });


})(jQuery);



// Site Preloader
$(window).load(function() {
    $(".ch-preloader-sec").delay(200).fadeOut('slow');
    anime({
        targets: '#hexo1 path',
        strokeDashoffset: [anime.setDashoffset, 0],
        easing: 'easeInOutSine',
        duration: 2500,
        delay: function(el, i) { return i * 250 },
        direction: 'alternate',
        loop: true
    });
});


    var coin_exchange = $('.coin-exchange-wrapper').length;

    //if(!$(e.target).hasClass('animate-this')) {
    if(coin_exchange) {
        const currencyEl_one = document.getElementById('currency-one');
        const amountEl_one = document.getElementById('amount-one');
        const currencyEl_two = document.getElementById('currency-two');
        const amountEl_two = document.getElementById('amount-two');
        const rateEl = document.getElementById('rate');
        const swap = document.getElementById('swap');
        function calculate() {
            const currency_one = currencyEl_one.value;
            const currency_two = currencyEl_two.value;

            fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                const rate = data.rates[currency_two];
                
                rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

                amountEl_two.value = (amountEl_one.value * rate).toFixed(2)
            })

        }

        // Event listeners
        currencyEl_one.addEventListener('change', calculate);
        amountEl_one.addEventListener('input', calculate);
        currencyEl_two.addEventListener('change', calculate);
        amountEl_two.addEventListener('input', calculate);

        swap.addEventListener('click', ()=> {
            const temp = currencyEl_one.value;
            currencyEl_one.value = currencyEl_two.value;
            currencyEl_two.value = temp;
            calculate()
        });             
        calculate();
    }


