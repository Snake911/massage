const slider = (container) => {
    const prevButtons = container.querySelectorAll('.prev');
    const nextButtons = container.querySelectorAll('.next');
    
    [].forEach.call(prevButtons, (button) => {
        button.addEventListener('click', (e) => {
            const prevSlide = container.querySelector('.prevSlide');
            const nextSlide = container.querySelector('.nextSlide');
            prevSlide.classList.remove('prevSlide');
            nextSlide.classList.remove('nextSlide');
            e.target.parentElement.classList.remove('active');
            e.target.parentElement.classList.add('nextSlide');
            prevSlide.classList.add('active');
            if (prevSlide.previousElementSibling !== null) {
                prevSlide.previousElementSibling.classList.add('prevSlide');
            } else {
                prevSlide.parentElement.lastElementChild.classList.add('prevSlide');
            }
        });
    });
    
    [].forEach.call(nextButtons, (button) => {
        button.addEventListener('click', (e) => {
            const prevSlide = container.querySelector('.prevSlide');
            const nextSlide = container.querySelector('.nextSlide');
            prevSlide.classList.remove('prevSlide');
            nextSlide.classList.remove('nextSlide');
            e.target.parentElement.classList.remove('active');
            e.target.parentElement.classList.add('prevSlide');
            nextSlide.classList.add('active');
            if (nextSlide.nextElementSibling !== null) {
                nextSlide.nextElementSibling.classList.add('nextSlide');
            } else {
                nextSlide.parentElement.firstElementChild.classList.add('nextSlide');
            }
        });
    });
};

const prices = document.querySelector('.prices');
const promotions = document.querySelector('.promotions');

slider(prices);
slider(promotions);

const girlsShow = document.querySelector('.button_vision');
const girlsHide = document.querySelector('.button_hidden');
const girlsAll = document.querySelector('.girls_hidden');
girlsShow.addEventListener('click', (e) => {
    e.target.classList.add('hidden');
    girlsAll.classList.remove('girls_hidden');
    girlsHide.classList.remove('hidden');
});

girlsHide.addEventListener('click', (e) => {
    e.target.classList.add('hidden');
    girlsAll.classList.add('girls_hidden');
    girlsShow.classList.remove('hidden');
    window.location.hash="girls";
});

const anchors = document.querySelectorAll('a[href^="#"]');
const header_menu = document.querySelector('.header_menu');
console.log(header_menu.offsetHeight);
[].forEach.call(anchors, (anchor) => {
    if (anchor.hash) {
        anchor.addEventListener('click', (e) => {
            const targ = document.querySelector(`${anchor.hash}`);
            window.scrollTo({top: getCoords(targ).top - header_menu.offsetHeight});
            e.preventDefault();
        });        
    }
});

const getCoords = (elem) => {
    let box = elem.getBoundingClientRect();
  
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
  }
