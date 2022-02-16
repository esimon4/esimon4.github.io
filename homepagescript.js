//setting up mail client trigger

document.querySelector("#contactbutton").addEventListener("click", function(){
    // alert("hey!");
    window.location = "mailto:ersimon@usc.edu";
});

document.querySelector("#email").addEventListener("click", function(){
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

document.querySelector("#pentridge").addEventListener("click", function(){
    window.open("handbook.html", "_self");
})

document.querySelector("#linkedin").addEventListener("click", function(){
    window.open("https://www.linkedin.com/in/eli-simon-5256561bb/", "_blank");
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