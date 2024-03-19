
let clock = document.querySelector(".exactTime");
let sessions = document.querySelector("#status");

function updateClock() {
    let currentTine = new Date()
    let hours = currentTine.getHours()%12
    let minutes = currentTine.getMinutes()
    let seconds = currentTine.getSeconds()

    hours = hours < 10 ? '0' + hours : hours
    minutes = minutes < 10 ? '0' + minutes : minutes
    seconds = seconds < 10 ? '0' + seconds : seconds
    let status = currentTine.getTime() < 12 ? 'AM' : 'PM'

    clock.textContent = `${hours}:${minutes}:${seconds}`
    sessions.textContent = `${status}`
}

setInterval(updateClock, 1000);