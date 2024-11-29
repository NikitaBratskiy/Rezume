
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
function updateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const day = now.getDate();
    const month = now.getMonth() + 1; // Месяцы с 0
    const year = now.getFullYear();

    // Форматируем строку времени
    const timeString = `${hours}:${minutes}:${seconds}`;
    const dateString = `${day}.${month}.${year}`;

    // Обновляем содержимое блока с временем и датой
    document.getElementById('time').textContent = timeString;
    document.getElementById('date').textContent = dateString;
}

// Обновление времени каждую секунду
setInterval(updateTime, 1000);

// Инициализация сразу при загрузке страницы
updateTime();