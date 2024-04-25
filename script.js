document.getElementById("signup-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const firstName = document.getElementById("first-name").value;
    const phoneNumber = document.getElementById("phone-number").value;

    // Store the user data in localStorage (you should use a database in a real application)
    const userData = {
        firstName,
        phoneNumber,
    };
    localStorage.setItem("userData", JSON.stringify(userData));

    // Redirect to the authorization page
    window.location.href = "home.html";
});





