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

// button for timer reset
const increment=document.getElementById("Increase");
const reset=document.getElementById("reset");
const decrement=document.getElementById("Decrease");

let count=10;

increment.onclick=function(){
    count++;
    countdownEL.innerHTML=count;
}
// inplace of innerHTML we can use textContent
decrement.onclick=function(){
    count--;
    countdownEL.innerHTML=count;
}

reset.onclick=function(){
    count=0;
    countdownEL.innerHTML=count;
}