const body = document.querySelector('body');
const lockPadding = document.querySelectorAll('.lock-padding');

let unlock = true;

const  timeout = 800;

let popupDiploma = document.getElementById("popup_diploma");

const popupCloseIcon = document.querySelectorAll('.close-popup');
if(popupCloseIcon.length > 0){
    for(let i = 0; i < popupCloseIcon.length; i++){
       const el = popupCloseIcon[i];
       el.addEventListener('click', function (e) {
           popupClose(el.closest('.popup'));
           e.preventDefault();
       });
    } // for
} // if

function popupOpen(currentPopup) {
    if(currentPopup && unlock){
        const popupActive = document.querySelector('.popup.open');
        if (popupActive){
            popupClose(popupActive, false);
        } else{
           bodyLock();
        }
        currentPopup.classList.add('open');
        currentPopup.addEventListener("click", function (e) {
            if(!e.target.closest('.popup_content')){
                popupClose(e.target.closest('.popup'));
            } // if
        }); // addEventListener
    }// if
} // popupOpen

function popupClose(popupActive, doUnlock = true) {
    if(unlock){
        $('.tech').removeClass('_active');
        popupActive.classList.remove("open");
        if(doUnlock){
            bodyUnlock();
        } // if
    } // if
} // popupClose

function bodyLock() {
    const lockPaddingValue = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';

    if(lockPadding.length > 0){
        for (let i = 0; i < lockPadding.length; i++){
            const el = lockPadding[i];
            el.style.paddingRight = lockPaddingValue;
        } // for
    } // if

    body.style.paddingRight = lockPaddingValue;
    body.classList.add("lock");

    unlock = false;
    setTimeout(function () {
        unlock = true;
    }, timeout);
} // bodyLock

function bodyUnlock(){
    setTimeout(function () {
        if(lockPadding.length > 0){
            for (let i = 0; i < lockPadding.length; i++){
                const el = lockPadding[i];
                el.style.paddingRight = '0px';
            } // for
        } // if
        body.style.paddingRight = '0px';
        body.classList.remove('lock');
    }, timeout);

    unlock = false;
    setTimeout(function () {
       unlock = true;
    }, timeout);
} // bodyUnlock

document.addEventListener('keydown', function (e) {
    if(e.which === 27){
        const popupActive = document.querySelector('.popup.open');
        popupClose(popupActive);
    } // if
});



