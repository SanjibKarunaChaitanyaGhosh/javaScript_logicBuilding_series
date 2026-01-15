const startingMinutes=10;

let time=startingMinutes*60;

const countdownEL=document.getElementById("timer");

setInterval(updateCountDown,1000);

function updateCountDown(){
    const min=Math.floor(time/60);
    let sec=time%60;

    sec=sec<10? "0"+sec : sec

    countdownEL.innerHTML=`${min}:${sec}`
    time--;
}