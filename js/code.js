$(function(){

    //Color change on dark background pages
    $(document).on("load",function() {
        var head = $('head');
        if (head.attr("data-color")==="white"){
            $('.slide-menu-open').css("color","white");
            $('.menu-right').find("a").css("color","white");
            $('.menu-left').find("a").css("color","white");
            $('.side-menu-wrapper').find("a").css("color","black");
            console.log("go for it")
        }
    });

    //Language change
    var language_change = $('#language-change');
    var language_list = $('#language-change ul');
    $(language_change).on("click",function(){

        language_list.toggleClass("hidden");

    });

    //Mobile menu on/off
    var slidebar_width  = 340;
    $(document).on("resize",function(){
        if ($(window).width() <= 480) {
            slidebar_width  = 240;
            return slidebar_width;
        }
    });

    var slide_bar       = $(".side-menu-wrapper");
    var slide_open_btn  = $(".slide-menu-open");
    var slide_close_btn = $(".menu-close");


    slide_open_btn.click(function(e){
        e.preventDefault();
        slide_bar.css( {"left": "0px"});
    });
    slide_close_btn.click(function(e){
        e.preventDefault();
        slide_bar.css({"left": "-"+ slidebar_width + "px"});
    });


    // $('.product-galery').on('click', function (e) {
    //     if (e.target != this) {
    //         alert('You clicked a Product.');
    //     } else {
    //         alert('You actually clicked Galery');
    //     }
    // });
    
});
//Slider
$(document).ready(function(){
    $('.slider').slick({
        autoplay: true,
        autoplaySpeed: 6000,
        dots: true,
        mobileFirst: true


});
});

function initMap() {
    // Styles a map in night mode.
    var bahrain = {lat: 26.26971189999999, lng: 50.625987099999975};
    var style = [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#333333"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#6a6a6a"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#252525"
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#6a6a6a"
                }
            ]
        },
        {
            "featureType": "administrative.locality",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#6a6a6a"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#2c2c2c"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#8a8a8a"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#2f2f2f"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#786145"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.local",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#6a6a6a"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#1c1c1c"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#786145"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#252525"
                }
            ]
        }

    ];
    var map = new google.maps.Map(document.getElementById('map'), {

        zoom: 12,
        center: bahrain,
        styles:style

    });
    var image = '../images/marker.png';
    var marker = new google.maps.Marker({
        position: bahrain,
        map: map,
        icon:image
    });


}

jQuery.fn.spectragram.accessData = {
    accessToken: '4079607277.105a0fe.ffe28004047f4eb0b4fded893ce1fb2f',
    clientID: '105a0fed163a45c69bd6a9b71efb227c'
};
$('#instagram-feed-container').spectragram('getRecentTagged',{
    query: 'samialhadad',
    max: 5,
    size: 'small'
});
