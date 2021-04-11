
let popup_portfolio1 = document.getElementById("popup_portfolio1");

$(document).ready(function () {

    // клик по кнопке "Подробно" о проекте
    $(".portfolio-detail").on('click', function () {
        popupOpen(popup_portfolio1);
    });
});