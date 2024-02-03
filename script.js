setInterval(setClock, 1000)

const hourArrow = document.querySelector('[data-hour-arrow]');
const minuteArrow = document.querySelector('[data-minute-arrow]');
const secondArrow = document.querySelector('[data-second-arrow]');


function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
    setRotation(secondArrow, secondsRatio);
    setRotation(minuteArrow, minutesRatio);
    setRotation(hourArrow, hoursRatio);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty('--rotation', rotationRatio * 360);
}

setClock();