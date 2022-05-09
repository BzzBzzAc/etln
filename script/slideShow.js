let slideIndex = 0;
showSlides();


function currentSlide(num){
    showSlides(slideIndex = num)
}

function showSlides(num){
    let i;
    let slide = document.getElementsByClassName("mySlide");
    let dots = document.getElementsByClassName("dot");
    // if(num < 1){
    //     slideIndex = slide.length
    // }
    for(i = 0; i < slide.length; i++){
        slide[i].style.display = "none"
    }
    slideIndex++;
    if(slideIndex > slide.length){
        slideIndex = 1
    }
    for(i = 0; i < dots.length;i++){
        dots[i].className = dots[i].className.replace(" active-dot", "")
    }

        slide[slideIndex - 1].style.display = "block"
        dots[slideIndex - 1].className += " active-dot"
        setTimeout(showSlides, 3000);
}
