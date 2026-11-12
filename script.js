const Timer = document.querySelector('.fortnite-info-timer-content-num')
const Prikol = document.querySelector('.fortnite-info-timer-content-prikol')

let Time = 100000

const myInterwall = setInterval(() => {
    if (Time>0){
        Time--
        Timer.textContent= Time
    }
    else if(Time<0){
        clearInterval(myInterwall)
    }
    if (Time==0){
        Prikol.style.color = 'white'
    }
    console.log(Time)
}, 1000);