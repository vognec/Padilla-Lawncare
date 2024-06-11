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

function validate() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    let error_message = document.getElementById("error-message");
    
    error_message.style.padding = "10px"

    let errors = [];

    if (name.length < 2) {
        errors.push("Please enter a valid name");
    }
    if (isNaN(phone) || phone.length != 10) {
        errors.push("Please enter a valid phone number");
    }
    if (email.indexOf("@") == -1 || email.length < 6) {
        errors.push("Enter a valid email");
    }

    if (errors.length > 0){
        error_message.innerHTML = errors.join("<br>");
        return false;
    }
    else {
        alert("Form Submitted Successfully!");
        return true;
    }
}
