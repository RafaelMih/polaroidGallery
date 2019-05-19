function showSlide(index) {
    galeria.hide("slow");
    $(".vegas-background").show();
    $(".vegas-overlay").show();
    slideshow.show("slow");
    loadSlideShow(index);
    callSlide(index);
}

function backToGallery() {
    slideshow.hide("slow");
    $(".vegas-background").hide();
    $(".vegas-overlay").hide();
    galeria.show("slow");
    resetSlide();
    audioStop();
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

function volumeHide(hidden, src) {
    if (hidden) {
        $("#volume").hide();
        $("#audio").hide();
        audioStop();
    } else {
        $("#volume").show();
        audioPlay(src);
    }
}

function audioPlay(src) {
    if (src) {
        $("#audio").attr('src', src);
        $("#audio").trigger('play');
    } else {
        audioStop();
    }
}

function audioStop() {
    $("#audio").trigger('pause');
    $("#audio").currentTime = 0.0;
}

function loadGallery() {
    var html = "";
    var galleryPhotos = [];

    for (var a = [], i = 0; i < countGalleryPhotos; ++i)
        galleryPhotos[i] = i;

    galleryPhotos.forEach(index => {
        var name = getMotherName(index);
        html += `<div onclick="showSlide(${index})" class="polaroid ui-draggable col-xs-1 col-md-3 col-lg-2">
                    <img src="./images/maes/${index}/f.jpg" alt="${name}" />
                    <p>${name}</p>
                 </div>`;
    });

    $("#galeria").html(html);
}

function loadSlideShow(index) {
    var name = getMotherName(index);
    var countPhotos = getCountPhotos(index);
    var html = "";
    for (let i = 0; i < countPhotos; i++) {
        html += `<li>
                    <a href="./images/maes/${index}/${i}.jpg">
                        <img src="./images/maes/${index}/${i}.jpg" title="${name}" data-valign="middle"/>
                    </a>
                </li>`;
    }

    $("#listPhotos").html(html);
}