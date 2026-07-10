const ctx = document.getElementById("skillsChart");


if(ctx){

new Chart(ctx, {

type:"radar",

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
83,
78,
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