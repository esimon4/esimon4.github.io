//setting up mail client trigger

document.querySelector("#contactbutton").addEventListener("click", function(){
    // alert("hey!");
    window.location = "mailto:ersimon@usc.edu";
});

//
document.querySelector("#honeybis").addEventListener("click", function(){
    window.open("honeybis.html", "_self");
})

document.querySelector("#tl").addEventListener("click", function(){
    window.open("troylabs.html", "_self");
})

document.querySelector("#wins").addEventListener("click", function(){
    window.open("wins.html", "_self");
})

//setting up light/dark mode button

// document.querySelector("#colormode").addEventListener("click", function(){
//     //alert("hey!");
//     changecolor();
// })

// //creating function

// var changecolor = function(){
//     document.querySelector("#").style.color = "white";
// }