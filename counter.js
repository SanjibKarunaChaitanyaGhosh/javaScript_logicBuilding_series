const counter_main=document.getElementById("counter_main");
const increment=document.getElementById("increment");
const reset=document.getElementById("reset");
const decrement=document.getElementById("decrement");

let count=0;

increment.onclick=function(){
    count++;
    counter_main.innerHTML=count;
}
// inplace of innerHTML we can use textContent
decrement.onclick=function(){
    count--;
    counter_main.innerHTML=count;
}

reset.onclick=function(){
    count=0;
    counter_main.innerHTML=count;
}