
let slidesIndex = 1;
showSlides(slidesIndex);

function plusSlides(n){
    showSlides(slidesIndex += n)
}

function showSlides(n){
    let slides = document.getElementsByClassName("slide");
    if(n > slides.length){slidesIndex = 1}
    if(n < 1) {slidesIndex = slides.length}

    for(let i = 0; i < slides.length; i++){
        slides[i].style.display = "none";
    }
    slides[slidesIndex-1].style.display = "block"
    console.log(slides[slidesIndex-1], n, slides.length)
}