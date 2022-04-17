const menuToggle = document.querySelector(".menu-toggle-nav");
const nav = document.getElementById("nav");

menuToggle.addEventListener("click", ()=>{
    nav.classList.toggle("active")
})
const loginToggle = document.querySelector(".login-toggle-nav");
const loginNav = document.getElementById("login-nav");

loginToggle.addEventListener("click", ()=>{
    loginNav.classList.toggle("active-login")
})