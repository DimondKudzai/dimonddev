const ctx = document.getElementById("skillsChart");


if(ctx){

new Chart(ctx, {

type:"bar",

data:{

labels:[
"JavaScript",
"Python",
"PHP",
"Solidity",
"React",
"AI/ML",
"Flask",
"Database",
"DevOps"
],


datasets:[{

label:"Skill Level",

data:[
90,
85,
85,
80,
85,
80,
90,
87,
85
]

}]

},


options:{

responsive:true

}


});


}