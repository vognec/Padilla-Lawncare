const initApp = () => {
    const hamburgerBtn = document.getElementById('hamburger-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = () => {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        hamburgerBtn.classList.toggle('toggle-btn');
    }

    hamburgerBtn.addEventListener('click', toggleMenu);
    mobileMenu.addEventListener('click', toggleMenu);
}

document.addEventListener('DOMContentLoaded', initApp);


function validate() {
    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let email = document.getElementById("email").value;
    let error_message = document.getElementById("error-message");


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
        error_message.style.padding = "10px"
        error_message.innerHTML = errors.join("<br>");
        return false;
    }
    else {
        return true;
    }
}

const year = document.getElementById("year");
const currentYear = new Date();
year.innerText = currentYear.getFullYear();
