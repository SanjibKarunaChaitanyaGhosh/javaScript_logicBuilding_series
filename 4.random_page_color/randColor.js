
const getColor = () =>{

const randomNumber=Math.floor(Math.random()*16777215);
const randHexCode="#"+randomNumber.toString(16);
document.body.style.backgroundColor=randHexCode;
document.getElementById("color_code").innerHTML=randHexCode;

navigator.clipboard.writeText(randHexCode);

console.log(randomNumber,randHexCode);


}

document.getElementById("Btn").addEventListener("click",getColor)