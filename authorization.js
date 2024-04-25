document.addEventListener("DOMContentLoaded", function () {
    const userData = JSON.parse(localStorage.getItem("userData"));
    if (userData) {
        document.getElementById("display-first-name").textContent = userData.firstName;
        document.getElementById("display-phone-number").textContent = userData.phoneNumber;
    } else {
        // Handle the case when user data is not available
        alert("User data not found. Please sign up first.");
        window.location.href = "signup.html";
    }
});
