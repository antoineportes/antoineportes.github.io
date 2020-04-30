
//RESPONSIVE MENU
var navbar = document.getElementById("navbar");

function mobileDropdown() {
    if (navbar.className === "menu"){
            navbar.className += " responsive";
    }
    else{
        navbar.className = "menu";
    }
}

function closemenu(){
    navbar.className = "menu";
}