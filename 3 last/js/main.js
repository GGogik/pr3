// alert('Добро пожаловать')
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click",function(){
      document.querySelector("header").classList.toggle("open")
    })
})
const headerItem = document.querySelectorAll('.tab_item');
const mainContent = document.querySelectorAll('.tab-content');

// Перебираем все заголовки табов
for (let item of headerItem) {

    // Вешаем на них click
    item.addEventListener('click', function() {

        // Добавляем всем main__content класс hidden, который скрывает содержимое!
        for (let element of mainContent) {
            element.classList.add('hidden')
        }
        
        // Находим конкретный main__content, который соответствует нажатому заголовку табов
        // и удаляем у него класс hidden, чтобы показать содержимое!
        const content = document.querySelector('#' + item.dataset.tab);
        content.classList.remove('hidden')
    })
}

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n){
    showSlides(slideIndex += n);
}

function currentslide(n){
    showSlides(slideIndex = n);
}
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("comenets__item1");


if (n > slides.length) {
    slideIndex = 1
}
if (n < 1) {
    slideIndex = slides.length
}
for (i=0; i < slides.length; i++){
    slides[i].style.display = "none";
}
slides[slideIndex-1].style.display = "block";
}

let titles = Array.from(document.querySelectorAll('.accordion__title'));

for (let title of titles) {
    title.addEventListener('click', () =>{
        title.nextElementSibling.classList.toggle('hidden')
    })
}