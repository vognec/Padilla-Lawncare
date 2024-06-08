const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const body = document.body;

hamburger.addEventListener("click", ()=> {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// remove/add scroll on body when hamburger or X is clicked
hamburger.addEventListener("click", ()=> {
    if (hamburger.classList.contains("active")){
        body.classList.add("lock-scroll"); 
    }
    else {
        body.classList.remove("lock-scroll");
    }
       
});


document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
    body.classList.remove("lock-scroll"); // remove body lock scroll when a link is clicked
}));


