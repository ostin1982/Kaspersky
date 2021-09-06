const bye = document.querySelector('.bye');
const byePosition = bye.getBoundingClientRect().top;

const byeScroll = () => {
    if (window.pageYOffset >= byePosition) {
        bye.style.position = 'fixed';
        bye.style.top = '64px';
    } else {
        bye.style.position = 'static';
        bye.style.top = '';
    }
};

window.addEventListener('scroll', byeScroll);