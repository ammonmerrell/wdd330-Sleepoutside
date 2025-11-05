const countd = document.getElementById("countdown");
const timer = document.getElementById("startButton");
console.log(timer);


let down = 10;


countd.textContent = `${down}`;

timer.addEventListener("click", () => {
    setInterval(1);
    let down = -1;
    countd.textContent = `${down}`;
});



