
//находим ссылки назад и вперед в документе по айди
var prev = document.getElementById('prev');
var next = document.getElementById('next');

//получили список всех слайдов по классу slide  как РHTML элементов
var slides = document.getElementsByClassName('slide');

//преобразовали список в  js массив
slides = Array.from(slides);

function getActiveSlideIndex() {
    //находим индекс текущего активного слайда
    return slides.findIndex(function (slideItem) {
        //с помощью метода cfindIndex проходим по каждому элементу массива slides
        //и проверяем на наличие класса active
        if (slideItem.classList.contains('active')) {
            return true;
        }
        return false;
    });
}

function removeActiveSlideClass(index) {
    //удаляем класс active у текущего активного слайда
    slides[index].classList.remove('active');
}


prev.addEventListener('click', function (event) {

    var activeSlideIndex = getActiveSlideIndex();

    //удаляем класс active у текущего активного слайда
    removeActiveSlideClass(activeSlideIndex);

    //если мы сейчас на первом слайде, то добавляем класс active последнему слайду
    if (activeSlideIndex === 0) {
        slides[slides.length - 1].classList.add('active');
    } else {
        //иначе добавляем класс active предыдущему
        slides[activeSlideIndex - 1].classList.add('active');
    }



});

next.addEventListener('click', function (event) {

    var activeSlideIndex = getActiveSlideIndex();

    //удаляем класс active у текущего активного слайда
    removeActiveSlideClass(activeSlideIndex);

    //если мы сейчас на последнем слайде, то добавляем класс active первому слайду
    if (activeSlideIndex === slides.length - 1) {
        slides[0].classList.add('active');
    } else {
        //иначе добавляем класс active следующему
        slides[activeSlideIndex + 1].classList.add('active');
    }

});

