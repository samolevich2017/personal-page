
let popup_portfolio1 = document.getElementById("popup_portfolio1");


$(document).ready(function () {

    // клик по кнопке "Подробно" о первом проекте
    $(".portfolio-detail").on('click', function () {

        popupOpen(popup_portfolio1);

        // скрытие стрелок переключения, если это необходимо
        fadeArrows();

    });


});



/* Устанавливаем индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Увеличиваем индекс на 1 — показываем следующий слайд*/
function nextSlide() {
    showSlides(slideIndex += 1);
}

/* Уменьшает индекс на 1 — показываем предыдущий слайд*/
function previousSlide() {
    showSlides(slideIndex -= 1);
}

/* Устанавливаем текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Функция перелистывания */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("images-item");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }

    /* Проходим по каждому слайду в цикле for */
    for (let slide of slides) {
        slide.style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}

// функция скрытия кнопок для перелистывания слайда, в случае
// отсутствия картинок, либо когда их кол-во не превышает 1
function fadeArrows() {
    let images_count = document.querySelectorAll('.images-item').length;
    if(images_count <= 1){
        $(".btnRight").css('display', 'none');
        $(".btnLeft").css('display', 'none');
    }
}
