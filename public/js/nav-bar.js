const menuToggle = document.querySelector(".menu-toggle-nav");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", ()=>{
    nav.classList.toggle("active")
})