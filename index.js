const mobile_nav = document.querySelector(".mobile-nav-btn");
const nav = document.querySelector(".nav");

// It will add and remove the 'active' class from the nav class, 
const toggleNavbar = () => {
    nav.classList.toggle("active"); // if active class present, it'll remove it and if not it'll add
}

// Whenever the menu icon btn is clicked, it will call the toggleNavbar() funtion 
mobile_nav.addEventListener("click", () => toggleNavbar());