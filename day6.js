const submitbtn = document.getElementById("submitbtn");
const message = document.getElementById("message");

submitbtn.addEventListener("click", function () {

    const name = document.getElementById("nameinput").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    if (name === "") {
        message.textContent = "Please enter name";
        message.style.color = "red";
        return;
    }

    if (email === "") {
        message.textContent = "Please enter email";
        message.style.color = "red";
        return;
    }

    if (password.length < 6) {
        message.textContent = "Password must be at least 6 characters";
        message.style.color = "red";
        return;
    }

    console.log(name, email, password);

    message.textContent = `Welcome ${name}! Form submitted successfully`;
    message.style.color = "green";
});


const nameinput = document.getElementById("nameinput");

nameinput.addEventListener("input", function () {
    console.log(nameinput.value);
});


nameinput.addEventListener("blur", function () {
    console.log("User left the name field");
});


const passwordInput = document.getElementById("password");

passwordInput.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        console.log("Enter pw");
    }
});