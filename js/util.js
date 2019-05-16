function showSlide(index) {
    galeria.hide("slow");
    $(".vegas-background").show();
    $(".vegas-overlay").show();
    slideshow.show("slow");
    loadSlideShow(index);
    callSlide();
}

function backToGallery() {
    slideshow.hide("slow");
    $(".vegas-background").hide();
    $(".vegas-overlay").hide();
    galeria.show("slow");
    resetSlide();
}

function shuffle(array) {
    var tmp,
        current,
        top = array.length;
    if (top)
        while (--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
    return array;
}