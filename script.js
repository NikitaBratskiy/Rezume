
// Ждём, пока страница загрузится
window.addEventListener("load", () => {
    const loader = document.getElementById("loader");
    const content = document.getElementById("content");

    // Устанавливаем задержку перед скрытием загрузочного экрана
    setTimeout(() => {
        loader.style.opacity = "0"; // Плавное исчезновение
        loader.style.visibility = "hidden";
        content.style.display = "block"; // Показываем основной контент
    }, 1500); // Задержка в 1.5 секунды
});
const slider = document.querySelector('.horizontal-slider');

// Автоматическая прокрутка
let scrollAmount = 0;
const scrollStep = 2; // Скорость прокрутки
const scrollInterval = setInterval(() => {
    slider.scrollLeft += scrollStep;
    scrollAmount += scrollStep;

    // Останавливаем прокрутку, если дошли до конца
    if (slider.scrollLeft >= slider.scrollWidth - slider.clientWidth) {
        clearInterval(scrollInterval);
    }
}, 20);