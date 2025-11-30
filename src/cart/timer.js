const countd = document.getElementById("countdown");
const timer = document.getElementById("startButton");



let down = 10;


countd.textContent = `${down}`;

timer.addEventListener("click", () => {
    setInterval(() => {
        if (down >= 0) {
            countd.textContent = down;
            down = down -1;
        } else {
            setTimeout(0)
            countd.textContent = "Time's up!";
        }  
    }, 1000);
    
});



