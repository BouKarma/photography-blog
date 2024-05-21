window.addEventListener("scroll", function(){
    var menu = document.querySelector(".menu");
    menu.classList.toggle("sticky", window.scrollY > 0);
})

let popup = document.getElementById("popup");

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup(){
    popup.classList.remove("open-popup");
}