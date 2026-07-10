AOS.init();


const button=document.getElementById("theme");


button.onclick=function(){

document.body.classList.toggle("light");


if(document.body.classList.contains("light")){

document.body.style.background="#ffffff";
document.body.style.color="#111";

}else{

document.body.style.background="#050505";
document.body.style.color="#fff";

}

};