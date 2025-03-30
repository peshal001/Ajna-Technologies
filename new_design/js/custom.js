// Lazy Load Images Js
$(function () {
    var referrer = document.referrer;
    if (referrer.length !== 0) {
        if (getCookieTrak("referrer").length === 0) {
            setCookieTrak("referrer", referrer, 0);
        }
    }
    $('.lazy').Lazy();
    $(".at-cookies .at-common-fill-btn").on("click", function () {
        AcceptCookies();
    });

    if (getCookieTrak("at_cookie_accept").length > 0) {
        $(".at-cookies").hide();
    }
});
$(document).ready(function () {
    // Technologies Slider Js
    $('.at-tech-slider').owlCarousel({
        nav: false,
        margin: 20,
        dots: false,
        smartSpeed: 1200,
        responsiveClass: true,
        autoplay: true,
        loop: false,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
                nav: true,
            },
            575: {
                items: 3,
                nav: true,
                margin: 5,
            },
            992: {
                items: 4,
                margin: 10,
            },
            1200: {
                items: 5,
                margin: 15,
            },
            1441: {
                items: 6,
            }
        }
    });
    // Our Best Work Slider Js
    $('.at-work-slider').owlCarousel({
        nav: true,
        margin: 20,
        dots: false,
        items: 1,
        smartSpeed: 1200,
    });
    // Testimonials Text Slider Js
    $('.at-testi-slider').owlCarousel({
        margin: 20,
        dots: true,
        loop: true,
        autoplay: true,
        items: 1,
        smartSpeed: 1200,
        autoplayHoverPause: true
    });
    // Testimonials Video Slider Js
    $('.vp-testi-video-slider').owlCarousel({
        nav: true,
        loop: true,
        dots: false,
        smartSpeed: 1200,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
                margin: 20,
            },
            992: {
                items: 1,
            }
        }
    });
    // Our Client Slider Js
    $('.at-client-slider').owlCarousel({
        nav: true,
        margin: 15,
        loop: true,
        dots: false,
        smartSpeed: 1200,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
            },
            575: {
                items: 3,
            },
            767: {
                items: 4,
            },
            1000: {
                items: 5,
            }
        }
    });
    // Our Global Office Slider Js
    $('.at-office-slider').owlCarousel({
        nav: true,
        margin: 10,
        dots: false,
        smartSpeed: 1200,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1200: {
                items: 4,
            }
        }
    });
    // Award Recognition Slider Js
    $('.at-award-slider').owlCarousel({
        nav: true,
        margin: 0,
        loop: true,
        dots: false,
        autoplay: true,
        smartSpeed: 1200,
        responsiveClass: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 2,
            },
            575: {
                items: 3,
            },
            1000: {
                items: 4,
            }
        }
    });
    // Home page hero
    $('.at-hero-slider').owlCarousel({
        loop: false,
        margin: 0,
        nav: false,
        dots: true,
        items: 1,
        smartSpeed: 1200,
    });
    // Testimonials Video Slider Js
    $('.at-testimonials-video-slider').owlCarousel({
        nav: true,
        loop: true,
        dots: false,
        center: true,
        smartSpeed: 1200,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                center: false,
                margin: 0,
            },
            576: {
                items: 2,
                center: false,
                margin: 30,
            },
            768: {
                items: 3,
                margin: 40,
            },
            992: {
                items: 3,
                margin: 60,
            }
        }
    });

    // Saas Indusries Slider Js
    $('.at-industries-slider').owlCarousel({
        nav: true,
        margin: 30,
        dots: false,
        smartSpeed: 1200,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            575: {
                items: 2,
            },
            1000: {
                items: 4,
            },
            1200: {
                items: 5,
            }
        }
    });

    // Our Best Work Slider Js
    $('.at-mobile-screen-slider').owlCarousel({
        nav: false,
        margin: 20,
        autoplay: true,
        dots: false,
        items: 1,
        smartSpeed: 1200,
    });

    // Our Talented roles Slider Js
    $('.at-talented-roles-slider').owlCarousel({
        nav: true,
        margin: 20,
        dots: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        smartSpeed: 1200,
        autoHeight: true,
        responsive: {
            575: {
                stagePadding: 50
            },
            992: {
                stagePadding: 100
            }

        }
    });
    // Our End Talented roles Slider Js

    // Our Talented roles Slider Small Js
    $('.at-talented-roles-slider-small').owlCarousel({
        nav: true,
        margin: 20,
        dots: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        smartSpeed: 1200,
        autoHeight: true,
        responsive: {
            575: {
                stagePadding: 50
            },
            1199: {
                stagePadding: 250
            }

        }
    });

    // Our Talented roles Slider for power platform page
    $('.at-microsoft-power-platform-slider').owlCarousel({
        nav: true,
        margin: 20,
        dots: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        smartSpeed: 1200,
        responsive: {
            575: {
                items: 1,
                stagePadding: 50
            },
            992: {
                items: 2,
                stagePadding: 100
            }

        }
    });

    // Our Legacy roles Slider Js
    $('.at-lagecy-roles-slider').owlCarousel({
        nav: true,
        margin: 20,
        dots: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        smartSpeed: 1200,
        autoHeight: true,
        responsive: {
            575: {
                stagePadding: 50
            },
            992: {
                stagePadding: 200
            },
            1200: {
                stagePadding: 300
            }

        }
    });

    //Sharepoint slider
    $('.at-sharepoint-roles-slider').owlCarousel({
        nav: true,
        margin: 20,
        dots: false,
        items: 1,
        loop: true,
        stagePadding: 0,
        smartSpeed: 1200,
        autoHeight: true,
        responsive: {
            575: {
                stagePadding: 50,
                items: 1,
            },
            992: {
                stagePadding: 100,
                items: 1,
            },
            1200: {
                stagePadding: 100,
                items: 2,
            },
            1661: {
                stagePadding: 100,
                items: 3,
            }
        }
    });

    // Android Architecture Slider Js
    $('.at-android-architecture-slider').owlCarousel({
        nav: true,
        margin: 20,
        autoplay: true,
        dots: false,
        items: 1,
        smartSpeed: 1200,
        autoHeight: true
    });

    // MatchHeight Js
    $('.at-tech-des').matchHeight();
    $('.at-sf-dev-subdes').matchHeight();
    $('.at-solution-des').matchHeight();
    $('.at-testimonials-info').matchHeight();
    $('.at-office-slider-des').matchHeight();
    $('.at-testimonials-author-info').matchHeight();
    $('.at-best-work-des').matchHeight();
    $('.at-sf-process-des').matchHeight();
    $('.at-sf-icon').matchHeight();
    $('.at-dotnet-list').matchHeight();
    $('.at-ms-migrating-des').matchHeight();
    $('.at-travel-box').matchHeight();
    $('.at-cs-list-info').matchHeight();
    $('.at-rpa-box-des').matchHeight();
    $('.at-flutter-skills-des').matchHeight();
    $('.at-microsoft-power-platform-slider .owl-item').matchHeight();
    $('.at-sharepoint-roles-slider .at-servicenow-list').matchHeight();

    // Appned Arrow/Dots Name Js
    $(".owl-nav button").append("Arrows");
    $(".owl-dots button").append("Dots");

    // Technologies Slider Js
    $('.at-our-team-slider').owlCarousel({
        nav: false,
        margin: 20,
        dots: true,
        smartSpeed: 1200,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            495: {
                items: 2,
            },
            768: {
                items: 3,
            },
            992: {
                items: 4,
            }
        }
    });

    // Team Feedback Slider Js
    $('.at-team-feedback-slider').owlCarousel({
        nav: false,
        margin: 15,
        dots: true,
        smartSpeed: 1200,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
            },
            495: {
                items: 2,
            },
            768: {
                items: 2,
            },
            992: {
                items: 3,
            }
        }
    });

    // Trusted By Slider Js
    $('.at-trust-slider').owlCarousel({
        nav: false,
        margin: 30,
        loop: true,
        dots: false,
        smartSpeed: 1200,
        responsiveClass: true,
        autoplay: true,

        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1,
            },
            495: {
                items: 2.5,
            },
            768: {
                items: 4.5,
            },
            1367: {
                items: 6.5,
            }
        }
    });

    //AI Process Slider
    var bigimage = $("#atProcessContent");
    var thumbs = $("#atProcessThumbs");
    //var totalslides = 10;
    var syncedSecondary = true;

    bigimage
        .owlCarousel({
            items: 1,
            slideSpeed: 2000,
            nav: false,
            autoplay: true,
            dots: false,
            smartSpeed: 200,
            loop: true,
            responsiveRefreshRate: 200,
            responsive: {
                480: {
                    dots: false
                },
                768: {
                    dots: false
                },
                992: {
                    dots: true
                }

            },

        })
        .on("changed.owl.carousel", syncPosition);

    thumbs
        .on("initialized.owl.carousel", function () {
            thumbs
                .find(".owl-item")
                .eq(0)
                .addClass("current");
        })
        .owlCarousel({
            items: 1,
            dots: false,
            nav: false,
            smartSpeed: 200,
            slideSpeed: 2000,
            autoplay: false,
            responsive: {

                480: {
                    items: 3,
                    autoplay: true,
                    dots: false
                },
                768: {
                    items: 4,
                    autoplay: true,
                    dots: false
                },
                992: {
                    items: 7,
                    autoplay: false,
                    dots: true,
                    touchDrag: false,
                    mouseDrag: false,
                    freeDrag: false
                }

            }
        })
        .on("changed.owl.carousel", syncPosition2);

    function syncPosition(el) {
        var count = el.item.count - 1;
        var current = Math.round(el.item.index - el.item.count / 2 - 0.5);

        if (current < 0) {
            current = count;
        }
        if (current > count) {
            current = 0;
        }
        //to this
        thumbs
            .find(".owl-item")
            .removeClass("current")
            .eq(current)
            .addClass("current");
        var onscreen = thumbs.find(".owl-item.active").length - 1;
        var start = thumbs
            .find(".owl-item.active")
            .first()
            .index();
        var end = thumbs
            .find(".owl-item.active")
            .last()
            .index();

        if (current > end) {
            thumbs.data("owl.carousel").to(current, 100, true);
        }
        if (current < start) {
            thumbs.data("owl.carousel").to(current - onscreen, 100, true);
        }
    }

    function syncPosition2(el) {
        if (syncedSecondary) {
            var number = el.item.index;
            bigimage.data("owl.carousel").to(number, 100, true);
        }
    }

    thumbs.on("click", ".owl-item", function (e) {
        e.preventDefault();
        var number = $(this).index();
        bigimage.data("owl.carousel").to(number, 300, true);
    });
    /* AI Process Slider End */

});

// Our Technologies Js
$('.at-tech-des').on('click', function () {
    $('.at-tech-des').removeClass('at-tech-selected');
    $(this).addClass('at-tech-selected');
    // Find Index of Current Item
    currentSlide($(this).parents('.owl-item').index() + 1);
});

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("at-common-tech");
    let dots = document.getElementsByClassName(".at-tech-slider item");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        $(slides[i]).addClass('at-hide-tech');
        $(slides[i]).removeClass('at-show-tech');
    }
    $(slides[slideIndex - 1]).addClass('at-show-tech');
    $(slides[slideIndex - 1]).removeClass('at-hide-tech');
}
// Responisve Menu toggle
$('.navbar-toggler').on('click', function () {
    $('body').toggleClass('navbar-open');
});
//Replace all SVG images with inline SVG Js
$('img.at-svg').each(function () {
    var $img = $(this);
    var imgID = $img.attr('id');
    var imgClass = $img.attr('class');
    var imgURL = $img.attr('src');
    jQuery.get(imgURL, function (data) {
        // Get the SVG tag, ignore the rest
        var $svg = $(data).find('svg');
        // Add replaced image's ID to the new SVG
        if (typeof imgID !== 'undefined') {
            $svg = $svg.attr('id', imgID);
        }
        // Add replaced image's classes to the new SVG
        if (typeof imgClass !== 'undefined') {
            $svg = $svg.attr('class', imgClass + ' replaced-svg');
        }
        // Remove any invalid XML tags as per http://validator.w3.org
        $svg = $svg.removeAttr('xmlns:a');
        // Replace image with new SVG
        $img.replaceWith($svg);
    }, 'xml');
});
// Popup Video Stop When Pupop close
$(document).ready(function () {
    $('.at-testimonial_video_modal').on('hidden.bs.modal', function () {
        var $this = $(this).find('iframe'),
            tempSrc = $this.attr('src');
        $this.attr('src', "");
        $this.attr('src', tempSrc);
    });

    // Testimonials iFrame Js
    $(".at-video-overlay a").on("click", function () {
        var URL = $(this).attr("data-url");
        $("#iframtestimonial_video").attr("src", URL);
    });
});
// Searchbox Js
$(".at-search").click(function () {
    $(".at-search-form-inner input").focus();
});
// Wow Animation Js
new WOW().init();
// On Scroll fixed header
$(window).scroll(function () {
    var sc = $(window).scrollTop()
    if (sc > 30) {
        $(".at-header-fixed").addClass("at-fixed");
        $(".at-logo-change .navbar-brand img").attr("src", "images/ajna.jpg");
        $(".at-white-logo-change .navbar-brand img").attr("src", "../images/ajna.jpg");
    } else {
        $(".at-header-fixed").removeClass("at-fixed");
        $(".at-logo-change .navbar-brand img").attr("src", "images/white-ajna.jpg");
        $(".at-white-logo-change .navbar-brand img").attr("src", "../images/white-ajna.jpg");
    }
});

// portfolio filter
filterSelection("all")

function filterSelection(c) {
    var x, i;
    x = document.getElementsByClassName("at-column-show");
    if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
        w3RemoveClass(x[i], "at-show");
        if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "at-show");
    }
}

function w3AddClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        if (arr1.indexOf(arr2[i]) == -1) { element.className += " " + arr2[i]; }
    }
}

function w3RemoveClass(element, name) {
    var i, arr1, arr2;
    arr1 = element.className.split(" ");
    arr2 = name.split(" ");
    for (i = 0; i < arr2.length; i++) {
        while (arr1.indexOf(arr2[i]) > -1) {
            arr1.splice(arr1.indexOf(arr2[i]), 1);
        }
    }
    element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
$('#atPortfolioFilter').on('click', 'li', function () {
    $('button.at-active').removeClass('at-active');
    $(this).find('button').addClass('at-active');
});

// single
$('.at-popup-link').magnificPopup({
    type: 'image',
    zoom: {
        enabled: true, // By default it's false, so don't forget to enable it
        duration: 500, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function
    },
    gallery: {
        enabled: true,
        navigateByImgClick: true,
        preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
    },
    // other options
});


// GoToTop Arrow Js
$(window).on("load", function () {
    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            $('.at-top-arrow').addClass('sticky');
        } else {
            $('.at-top-arrow').removeClass('sticky');
        }
    });
    $("#toTop").click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 100);
    });
});

// Cookies Hide onClick Js
$(".at-cookies-close-btn, .at-common-fill-btn").click(function () {
    $(".at-cookies").addClass('d-none');
});

// Search Form Js
$(".search-button").keydown(function (e) {
    if (e.keyCode === 13) {
        setTimeout(function () {
            SearchOpen()
        }, 100);
    }
});

function SearchOpen() {
    if (document.getElementById('txtsearch').value.length == 0) {
        alert('Please enter keyword.');
    } else {
        var a = document.getElementById('txtsearch');
        window.open('/SiteSearch.aspx?Keyword=' + a.value, '_self', false);
    }
}

// Set Cookie
function setCookieTrak(cname, cvalue, exdays) {
    var d = new Date();
    var guidlog = "";
    if (cvalue === "") {
        guidlog = generateUUID() + d.getFullYear() + d.getMonth() + d.getDate();
    } else {
        guidlog = cvalue;
    }

    if (exdays > 0) {
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = cname + "=" + guidlog + ";" + expires + ";path=/";
    } else {
        document.cookie = cname + "=" + guidlog + "; path=/";
    }
}

function getCookieTrak(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);

    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function AcceptCookies() {
    setCookieTrak("at_cookie_accept", "Yes", 365);
    $(".at-cookies").hide();
}

// Case Studies Load More JS
$(function () {
    $(".at-cs-list").slice(0, 6).show();
    $("body").on('click touchstart', '.at-load-more', function (e) {
        e.preventDefault();
        $(".at-cs-list:hidden").slice(0, 6).slideDown();
        if ($(".at-cs-list:hidden").length == 0) {
            $(".at-load-more").addClass('d-none');
        }
    });
});

// read more read less //
$(".at-mobile-app-services .at-read-link").click(function () {
    $(this).parents(".at-servicenow-des").children("p").toggleClass("at-more-content");
    if ($(this).text() === "Read Less") {
        $(this).text("Read More");
    }
    else {
        $(this).text("Read Less");
    }
});

// Trigger OwlCarousel Next/Prev Arrows
$(document).ready(function () {
    var owl = $(".owl-carousel");
    owl.owlCarousel();
    $(".next-btn").click(function () {
        owl.trigger("next.owl.carousel");
    });
    $(".prev-btn").click(function () {
        owl.trigger("prev.owl.carousel");
    });
    $(".prev-btn").addClass("disabled");
    $(owl).on("translated.owl.carousel", function (event) {
        if ($(".owl-prev").hasClass("disabled")) {
            $(".prev-btn").addClass("disabled");
        } else {
            $(".prev-btn").removeClass("disabled");
        }
        if ($(".owl-next").hasClass("disabled")) {
            $(".next-btn").addClass("disabled");
        } else {
            $(".next-btn").removeClass("disabled");
        }
    });
});

// ios app development Services accordion
$(document).ready(function () {
    $(".at-scalable-ios .accordion-button").click(function (e) {
        var $accordionItem = $(this).closest(".accordion-item");
        if ($accordionItem.hasClass("show")) {
            e.stopPropagation();
        } else {
            $(".accordion-item").removeClass("show");
            setTimeout(function () {
                $accordionItem.addClass("show");
            }, 500);
        }
    });
});

$(".at-list li.nav-item a").hover(function () {
    // Changes the .image-holder's img src to the src defined in .list a's data attribute.
    var value = $(this).attr('data-src');
    $(".at-image-holder img").attr("src", value);
});

$(".at-list-v2 li.nav-item a").hover(function () {
    // Changes the .image-holder's img src to the src defined in .list a's data attribute.
    var value = $(this).attr('data-src');
    $(".at-image-holder-v2 img").attr("src", value);
});

/* On click scroll section */
$(document).ready(function () {
    var scrollTrigger = $("*[scroll-trigger]");
    scrollTrigger.bind('click', function (e) {
        e.preventDefault(); // prevent hard jump, the default behavior
        var _this = $(this);
        var triggerAttr = _this.attr('scroll-trigger');
        var scrollTarget = $('*[scroll-target=' + triggerAttr + ']');  // Set the target as variable

        // perform animated scrolling by getting top-position of target-element and set it as scroll target
        $('html, body').stop().animate({
            scrollTop: scrollTarget.offset().top - 0
        }, 0);
        return false;
    });
});

/* tabbing Slider */
var owl = $('.at-sharepoint-solution-slider').owlCarousel({
    items: 1,
    loop: false,
    nav: false,
    dots: true,
    autoplay: false,
    smartSpeed: 1200
});

$('.at-sharepoint-tab .at-tab-links .at-solution-des').click(function () {
    $('.at-sharepoint-tab .at-tab-links .at-solution-des').removeClass('active');
    $(this).addClass('active');
    var tabContent = $(this).find(".at-tab-heading").text();
    $('.at-sharepoint-solution-slider .owl-item').each(function (index) {
        var slideContent = $(this).find('.at-slider-heading').text();
        var slideContent = slideContent.trim().replace(/\s+/g, ' ').replace(/\n+/g, ' ');
        if (tabContent === slideContent) {
            owl.trigger('to.owl.carousel', [index, 300]);
            return false;
        }
    });
});

owl.on('changed.owl.carousel', function (event) {
    var currentSlideIndex = event.item.index;
    $('.at-sharepoint-tab .at-tab-links .at-solution-des').removeClass('active');
    $('.at-sharepoint-tab .at-tab-links .at-solution-des').eq(currentSlideIndex).addClass('active');
});

$('.owl-dot').click(function () {
    var dotIndex = $(this).index();
    owl.trigger('to.owl.carousel', [dotIndex, 300]);

    $('.at-sharepoint-tab .at-tab-links .at-solution-des').removeClass('active');
    $('.at-sharepoint-tab .at-tab-links .at-solution-des').eq(dotIndex).addClass('active');
});

document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const element = entry.target;
                const imageUrl = element.getAttribute('data-src'); // Fetching the data-src
                console.log('Image URL:', imageUrl); // Debugging log to check the value

                if (imageUrl) {
                    element.style.backgroundImage = `url(${imageUrl})`; // Set background image
                    element.removeAttribute('data-src'); // Remove the data-src attribute after loading the image
                    observer.unobserve(element); // Stop observing the element after it has loaded
                } else {
                    console.error('No valid data-src attribute found for', element); // Error if data-src is missing or empty
                }
            }
        });
    }, {
        threshold: 0,
        rootMargin: '100px 0px'
    });

    // Select all elements with the data-src attribute
    const elements = document.querySelectorAll('.at-sharepoint-solution-slider .at-common-tech');

    // Start observing each element
    elements.forEach(element => {
        observer.observe(element);
    });

    // Force observer to trigger for elements already in view
    elements.forEach(element => {
        if (isElementInViewport(element)) {
            const imageUrl = element.getAttribute('data-src');
            console.log('Pre-loading image URL:', imageUrl); // Debugging log for pre-load images
            if (imageUrl) {
                element.style.backgroundImage = `url(${imageUrl})`;
                element.removeAttribute('data-src');
            } else {
                console.error('No valid data-src attribute for element in viewport', element);
            }
        }
    });

    // Helper function to check if an element is in the viewport
    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
    }
});

// sharepoint developer Key Benefits
$(document).ready(function () {
    $(".at-sp-key-des").hover(function () {
        $(".at-sp-key-des").removeClass("at-active");
        $(this).addClass("at-active");
    })
})

// lagecy modernization match height
function applyMaxHeightlagecy() {
    var maxHeightofchallenges = 0; // Initialize variable for challenges
    var maxHeightofbenefits = 0;
    $(".at-challenges-list .at-challenges-benefits-des").each(function () {
        var currentHeight = $(this).innerHeight();
        if (currentHeight > maxHeightofchallenges) {
            maxHeightofchallenges = currentHeight;
        }
    });
    $(".at-benefits-list .at-challenges-benefits-des").each(function () {
        var currentHeight = $(this).innerHeight();
        if (currentHeight > maxHeightofbenefits) {
            maxHeightofbenefits = currentHeight;
        }
    });
    if (maxHeightofchallenges > maxHeightofbenefits) {
        var finalmaxheight = maxHeightofchallenges;
    } else {
        var finalmaxheight = maxHeightofbenefits;
    }
    $(".at-challenges-benefits-des").css("height", finalmaxheight + "px");
}
setTimeout(function () { applyMaxHeightlagecy(); }, 1000);
$(window).on('load resize', function () {
    applyMaxHeightlagecy();
});