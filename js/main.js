console.log("HELLO WORLD!");


function toggleMenu() {

    //SET X TO BE OUR #menu ELEMENT
    var x = document.getElementById("dropmenu");
    //SET Y TO BE OUR #navButton ELEMENT
    var y = document.getElementById("menuarrow");

    //TOGGLE (EITHER ADD OR REMOVE) THE .displayMenu CLASS TO #menu ELEMENT
    x.classList.toggle("displayMenu");
    //TOGGLE THE .fa-toggle-on CLASS FROM FONTAWESOME to the #navButton ELEMENT
    y.classList.toggle("fa-chevron-up");

}



function expandContent() {

    //SET X TO BE OUR #menu ELEMENT
    var x = document.getElementById("content");
    //SET Y TO BE OUR #navButton ELEMENT
    var y = document.getElementById("menuplus");

    //TOGGLE (EITHER ADD OR REMOVE) THE .displayMenu CLASS TO #menu ELEMENT
    x.classList.toggle("expandContent");
    //TOGGLE THE .fa-toggle-on CLASS FROM FONTAWESOME to the #navButton ELEMENT
    y.classList.toggle("fa-chevron-up");

}