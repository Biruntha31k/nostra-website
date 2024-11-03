
//Popup

var popup = document.getElementById("popup")
var popupClose = document.getElementById("popup_close")

popup.addEventListener("click",function(){
    popup.style.display = "none";
});

//Sidebar

const sideBar = document.getElementById("sidebar");
const navMenu = document.getElementById("nav_menu");
const closeBar = document.getElementById("closebar");

navMenu.addEventListener("click", function () {
    sideBar.style.left = "0";
});

closeBar.addEventListener("click", function () {
    sideBar.style.left = "-60%";
});

//offerbar
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    if (index >= slides.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide = index;
    }

    document.querySelector('.slides').style.transform = `translateX(-${currentSlide * 100}%)`;
}

function changeSlide(direction) {
    showSlide(currentSlide + direction);
}


// Search and products
const search = document.getElementById("search");
const products = document.querySelector(".products");
const divList = products.querySelectorAll(".product-item"); // Selects product items

search.addEventListener("keyup", function (event) {
    const enteredValue = event.target.value.toUpperCase();

    divList.forEach((div) => {
        if (div.textContent.toUpperCase().indexOf(enteredValue) === -1) {
            div.style.display = "none";
        } else {
            div.style.display = "block";
        }
    });
});


