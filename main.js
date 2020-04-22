const header_menu = document.querySelector('.header_menu');
const girlsShow = document.querySelector('.button_vision');
const girlsList = document.querySelector('.girls_list');
const anchors = document.querySelectorAll('a[href^="#"]');
const burgerActive = document.getElementById('burgerActive');
const burger = document.getElementById('burger');
const promotions = document.querySelector('.promotions');
const programes = document.querySelectorAll('.program');
const vacancy_show = document.getElementById('vacancy_show');
const vacancy_descr = document.querySelector('.vacancy_descr');
//Переключение слайдера
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
//Показ всех девушек
girlsShow.addEventListener('click', (e) => {
    if (e.target.classList.contains('active')) {
        girlsList.classList.remove('active');
        e.target.classList.remove('active');
        e.target.textContent = "Показать всех";        
        window.scrollTo({top: getCoords(girlsList).top - header_menu.offsetHeight});
    } else {
        e.target.classList.add('active');
        girlsList.classList.add('active');
        e.target.textContent = "Скрыть";
    }
});
// Скролл к разделу
[].forEach.call(anchors, (anchor) => {
    if (anchor.hash) {
        anchor.addEventListener('click', (e) => {
            console.log(burgerActive.checked)
            if (burgerActive.checked) {
                burgerActive.checked = false;
            }           
            const targ = document.querySelector(`${anchor.hash}`);
            window.scrollTo({top: getCoords(targ).top - header_menu.offsetHeight});            
            e.preventDefault();
        });        
    }
});
//Отображение вакансии
vacancy_show.addEventListener('click', (e) => {
    e.target.classList.add('hidden');
    vacancy_descr.classList.remove('hidden');
});
//Показ описания программы
[].forEach.call(programes, (program) => {
    program.addEventListener('click', (e) => {
        if(program.classList.contains('active')) {
            program.classList.remove('active');
        } else {
            program.classList.add('active');
        }
    });
})
//Определение координат элемента относительно документа
const getCoords = (elem) => {
    let box = elem.getBoundingClientRect();  
    return {
      top: box.top + pageYOffset,
      left: box.left + pageXOffset
    };
};
//Включение слайдера
slider(promotions);