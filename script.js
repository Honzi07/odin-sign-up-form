const pw1 = document.getElementById('password-1');
const pw2 = document.getElementById('password-2');
const btnCreateAcc = document.getElementById('submit');

function validatePassword() {
    if((pw1.value.length > 0 && pw2.value.length > 0) 
    && (pw1.value === pw2.value)) {
        pw1.classList.remove("invalid");
        pw2.classList.remove("invalid");
        pw1.classList.add("valid");
        pw2.classList.add("valid");
        btnCreateAcc.removeAttribute("disabled");
    } else {
        pw1.classList.add("invalid");
        pw2.classList.add("invalid")
        btnCreateAcc.setAttribute("disabled", "");
    }
};

window.onload = validatePassword();

document.addEventListener('input', (e) => {
    validatePassword();
});