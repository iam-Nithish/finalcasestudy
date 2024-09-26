import { navbar, searchFunction } from "../components/navbar.js";
document.getElementById("navbar").innerHTML = navbar();

document.querySelector("#form").addEventListener("submit", handleFormSubmit);

searchFunction();

// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent form default action (page reload)

    const email = document.querySelector("#email").value.trim();  // Trim whitespace
    const password = document.querySelector("#password").value.trim();

    // Email validation
    if (!email) {
        alert("Please enter your email ID");
        return false;
    }

    // Simple email validation pattern
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Password validation
    if (!password) {
        alert("Please enter your password");
        return false;
    }

    if (password.length < 6) {
        alert("Password should be at least 6 characters long");
        return false;
    }

    // If everything is valid, redirect to the new page (assuming login success)
    window.location.href = "/index.html";
    return true;
}
