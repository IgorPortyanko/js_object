const secondArrow = document.querySelector('.second');
const minuteArrow = document.querySelector('.minute');
const hourArrow = document.querySelector('.hour');

function updateClock() {
    const now = new Date();
    const minutes = now.getMinutes();
    const hours = now.getHours();
    const seconds = now.getSeconds();

    const secondDeg = seconds * 6 - 90
    const minuteDeg = (minutes + seconds / 60) * 6 - 90;
    const hourDeg = (hours % 12 + minutes / 60) * 30 - 90;

    secondArrow.style.transform = `translateY(-50%) rotate(${secondDeg}deg)`;
    minuteArrow.style.transform = `translateY(-50%) rotate(${minuteDeg}deg)`;
    hourArrow.style.transform = `translateY(-50%) rotate(${hourDeg}deg)`;
}

setInterval(updateClock, 1000);
updateClock();

export default { secondArrow, minuteArrow, hourArrow, updateClock };