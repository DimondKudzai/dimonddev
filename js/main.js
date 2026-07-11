AOS.init();


const button = document.getElementById("theme");


button.onclick = function(){

    document.body.classList.toggle("light");

    // Save preference
    if(document.body.classList.contains("light")){
        localStorage.setItem("theme","light");
    } else {
        localStorage.setItem("theme","dark");
    }

};


// Load saved theme
if(localStorage.getItem("theme") === "light"){
    document.body.classList.add("light");
}