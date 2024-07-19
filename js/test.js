function displayTime() {
    let element = document.getElementById("clock");
    let time = (new Date).toLocaleTimeString();
    element.innerHTML = time;
    setTimeout(displayTime, 1000);
}

window.onload = displayTime;