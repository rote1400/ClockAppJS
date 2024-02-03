setInterval(setClock, 1000)



function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getHours() / 60;
    const minutesRatio = (secondsRatio + currentDate.getHours()) / 60;
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;
}