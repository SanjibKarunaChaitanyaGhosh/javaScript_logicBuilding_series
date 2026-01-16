const endDate="7 July 2026 00:00 AM";

document.getElementById("end-Date").innerText=endDate;

const inputs=document.querySelectorAll("input");

function clock(){
    const end=new Date(endDate);
    const now=new Date();
    const diff=(end-now)/1000;
    console.log(diff);

    // DAY
    inputs[0].value=Math.floor(diff/3600/24);
    // HOUR
    inputs[1].value=Math.floor(diff/3600)%24;
    // MINUITE
    inputs[2].value=Math.floor(diff/60)%60;
    // SEC
    inputs[3].value=Math.floor(diff)%60;

}

clock();

setInterval(
    ()=>{
        clock()
    },1000
);