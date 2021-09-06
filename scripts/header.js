const header = document.querySelector('.header');
let startOfScrolling = 0;

const headerScroll = () => {
    const scrolling = window.pageYOffset || document.documentElement.scrollTop;
    const occurrence = scrolling - startOfScrolling;
    
    if ( occurrence < 0 ){
        header.classList.add('header__fixed');
    } else {
        header.classList.remove('header__fixed');
    }
    
    startOfScrolling = scrolling;
};

window.addEventListener('scroll', headerScroll);