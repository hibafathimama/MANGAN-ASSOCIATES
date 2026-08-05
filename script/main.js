$(document).ready(function () {
    $('.hero-slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000
    });
});

$(document).ready(function () {
    $('.hero-slider1').slick({
        dots: true,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

$('.hero-slider4').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    arrows: true,
    dots: true
});
$(document).ready(function () {
    $('.hero-slide5').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        arrows: true,
        dots: true
    });
});

$(document).ready(function () {
    $('.paragraph-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
        dots: true,
        infinite: true
    });
});


$('.hero-slider6').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    arrows: true,
    dots: true
});

$('.hero-slider7').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    infinite: true,
    arrows: true,
    dots: true
});
$('.footer-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    arrows: true,
    dots: true
});

// Get the elements
var openButton = document.getElementById("contact-us");



const overlay = document.getElementById("overlay");

document.getElementById("closeIcon").onclick = function () {
    overlay.style.display = "none";
};

document.getElementById("closeButton").onclick = function () {
    overlay.style.display = "none";
};

// Open the modal
openButton.onclick = function(){

    overlay.style.display = "block";

}

// Close the modal
closeButton.onclick = function(){

    overlay.style.display = "none";

}
