let img_slider = document.getElementsByClassName("img_slider");

let etape = 0;

let nbr_img = img_slider.length;

let precedant = document.querySelector('.bx-chevron-right');
let suivant = document.querySelector('.bx-chevron-left');

function enlActiveImages(){
    for(let i = 0; i < nbr_img ; i++ ){
        img_slider[i].classList.remove('active');
    }
}

suivant.addEventListener('click', function(){
    etape++;
    if(etape >= nbr_img) {
        etape = 0;
    }
    enlActiveImages();
    img_slider[etape].classList.add('active');
})