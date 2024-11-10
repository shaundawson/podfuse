// Scenario 1 Slideshow Logic
let slideIndex1 = 1;
if (document.querySelector("#slideshow1")) {
    showSlides1(slideIndex1);

    function plusSlides1(n) {
        showSlides1(slideIndex1 += n);
    }

    function currentSlide1(n) {
        showSlides1(slideIndex1 = n);
    }

    function showSlides1(n) {
        let i;
        let slides1 = document.querySelectorAll("#slideshow1 .slide");
        let dots1 = document.querySelectorAll("#dots-container1 .dot");
        if (n > slides1.length) { slideIndex1 = 1 }
        if (n < 1) { slideIndex1 = slides1.length }
        for (i = 0; i < slides1.length; i++) {
            slides1[i].style.display = "none";
        }
        for (i = 0; i < dots1.length; i++) {
            dots1[i].className = dots1[i].className.replace(" active", "");
        }
        slides1[slideIndex1 - 1].style.display = "block";
        dots1[slideIndex1 - 1].className += " active";
    }
}

// Scenario 2 Slideshow Logic
let slideIndex2 = 1;
if (document.querySelector("#slideshow2")) {
    showSlides2(slideIndex2);

    function plusSlides2(n) {
        showSlides2(slideIndex2 += n);
    }

    function currentSlide2(n) {
        showSlides2(slideIndex2 = n);
    }

    function showSlides2(n) {
        let i;
        let slides2 = document.querySelectorAll("#slideshow2 .slide");
        let dots2 = document.querySelectorAll("#dots-container2 .dot");
        if (n > slides2.length) { slideIndex2 = 1 }
        if (n < 1) { slideIndex2 = slides2.length }
        for (i = 0; i < slides2.length; i++) {
            slides2[i].style.display = "none";
        }
        for (i = 0; i < dots2.length; i++) {
            dots2[i].className = dots2[i].className.replace(" active", "");
        }
        slides2[slideIndex2 - 1].style.display = "block";
        dots2[slideIndex2 - 1].className += " active";
    }
}

// Wireframes Slideshow Logic
let slideIndex3 = 1;
if (document.querySelector("#wf-slideshow-container")) {
    showSlides3(slideIndex3);

    function plusSlides3(n) {
        showSlides3(slideIndex3 += n);
    }

    function currentSlide3(n) {
        showSlides3(slideIndex3 = n);
    }

    function showSlides3(n) {
        let i;
        let slides3 = document.querySelectorAll("#wf-slideshow-container .wf-slide");
        let dots3 = document.querySelectorAll("#wf-dots-container .dot");
        if (n > slides3.length) { slideIndex3 = 1 }
        if (n < 1) { slideIndex3 = slides3.length }
        for (i = 0; i < slides3.length; i++) {
            slides3[i].style.display = "none";
        }
        for (i = 0; i < dots3.length; i++) {
            dots3[i].className = dots3[i].className.replace(" active", "");
        }
        slides3[slideIndex3 - 1].style.display = "block";
        dots3[slideIndex3 - 1].className += " active";
    }
}
