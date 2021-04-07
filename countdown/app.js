const timer = document.getElementById("timer");
const finalTime = new Date("Dec 1, 2021 00:00:00");

setInterval(() => {
    let time = finalTime.getTime() - new Date().getTime()
    let days = Math.floor(time / (1000 * 60 * 60 * 24));
    let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((time % (1000 * 60)) / (1000));
    timer.innerText = `${days}:${hours}:${minutes}:${seconds}`;
}, 1000);
