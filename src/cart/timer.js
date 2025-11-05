const countd = document.getElementById("countdown");
const timer = document.getElementById("startButton");



let down = 10;


countd.textContent = `${down}`;

timer.addEventListener("click", () => {
    setInterval(1);
    down = down - 1;
    countd.textContent = `${down}`;
});



