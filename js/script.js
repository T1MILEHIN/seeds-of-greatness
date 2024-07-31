const dayEl = document.querySelector(".day");
const hourEL = document.querySelector(".hour");
const minEL = document.querySelector(".min");
const secEL = document.querySelector(".sec");


document.addEventListener('DOMContentLoaded', function () {
    function countDown() {
        const futureDate = new Date("11 august 2024");
        const presentDate = new Date();

        const diff = futureDate - presentDate;

        const seconds = diff / 1000;

        day = Math.trunc(seconds / 3600 / 24);
        hour = Math.trunc((seconds / 3600) % 24);
        min = Math.trunc((seconds / 60) % 60);
        sec = Math.trunc(seconds % 60);

        dayEl.innerHTML = day;
        hourEL.innerHTML = formatDate(hour);
        minEL.innerHTML = formatDate(min);
        secEL.innerHTML = formatDate(sec);
    }

    function formatDate(date) {
        return date < 10 ? `0${date}` : date;
    }

    setInterval(countDown, 1000);
});
