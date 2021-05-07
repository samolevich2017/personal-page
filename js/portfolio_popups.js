
let popup_portfolio1 = document.getElementById("popup_portfolio1");
let popup_portfolio2 = document.getElementById("popup_portfolio2");
let popup_portfolio3 = document.getElementById("popup_portfolio3");
let popup_portfolio4 = document.getElementById("popup_portfolio4");
let current_popup;
let slideIndex = 1;

$(document).ready(function () {

    // клик по кнопке "Подробно" о первом проекте
    $(".portfolio-detail").on('click', function (e) {

        // открыть окно первого проекта
        if(e.currentTarget.classList.contains("project1")){
            current_popup = popup_portfolio1;
            showSlides(slideIndex = 1);
            popupOpen(popup_portfolio1);
            lazyLoadingImages();
        }


        // открыть окно второго проекта
        if(e.currentTarget.classList.contains("project2")){
            current_popup = popup_portfolio2;
            showSlides(slideIndex = 1);
            popupOpen(popup_portfolio2);
            lazyLoadingImages();
        }

        // открыть окно третьего проекта
        if(e.currentTarget.classList.contains("project3")){
            current_popup = popup_portfolio3;
            showSlides(slideIndex = 1);
            popupOpen(popup_portfolio3);
            lazyLoadingImages();
        }

        // открыть окно четвертого проекта
        if(e.currentTarget.classList.contains("project4")){
            current_popup = popup_portfolio4;
            showSlides(slideIndex = 1);
            popupOpen(popup_portfolio4);
            lazyLoadingImages();
        }

        // скрытие стрелок переключения, если это необходимо
        fadeArrows();

    });

});

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
    let slides = current_popup.getElementsByClassName("images-item");

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
