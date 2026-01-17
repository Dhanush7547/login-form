document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let username = document.getElementById("username").value.trim();
    let email = document.getElementById("email").value.trim();
    let password = document.getElementById("password").value.trim();
    let error = document.getElementById("error");

    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (username === "" || email === "" || password === "") {
        error.textContent = "All fields are required";
        return;
    }

    if (!emailPattern.test(email)) {
        error.textContent = "Enter a valid email address";
        return;
    }

    // If everything is valid → move to login page
    window.location.href = "login.html";
});
