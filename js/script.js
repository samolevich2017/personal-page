const animItems = document.querySelectorAll('.anim-items');
const main = document.querySelector('.main');

if(animItems.length > 0){

    main.addEventListener('scroll', animOnScroll);

    function animOnScroll(params) {
        for (let i = 0; i < animItems.length; i++) {
            const animItem = animItems[i];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;


            let animItemPoint = window.innerHeight - animItemHeight / animStart;

            if(animItemHeight > window.innerHeight){
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            }else{
                if(!animItem.classList.contains('_anim-no-hide')){
                    animItem.classList.remove('_active');
                }
            }
        }
    }

    function offset(el) {
        const rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft};
    }

    setTimeout(()=>{ animOnScroll(); }, 300);
}

let showDiploma = document.getElementById('diploma_step');

showDiploma.addEventListener('click', function (e) {
    current_popup = popupDiploma;
    popupOpen(popupDiploma);
    lazyLoadingImages();
});