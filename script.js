function calculateAge() {
    var birthdate = new Date(document.getElementById("birthdate").value);
    var currentDate = new Date();

    var ageInMilliseconds = currentDate - birthdate;
    var ageInSeconds = Math.floor(ageInMilliseconds / 1000);
    var ageInMinutes = Math.floor(ageInSeconds / 60);
    var ageInHours = Math.floor(ageInMinutes / 60);
    var ageInDays = Math.floor(ageInHours / 24);
    var ageInYears = Math.floor(ageInDays / 365);

    ageInSeconds %= 60;
    ageInMinutes %= 60;
    ageInHours %= 24;
    ageInDays %= 365;

    var ageString = `${ageInYears} years, ${ageInDays} days, ${ageInHours} hours, ${ageInMinutes} minutes, and ${ageInSeconds} seconds`;

    document.getElementById("result").innerHTML = "Your age is: " + ageString;
}


// Add this code at the end of your script.js file
document.addEventListener("DOMContentLoaded", function () {
    var footerText = document.createElement("div");
    footerText.textContent = "Created by Rohit";
    footerText.style.position = "fixed";
    footerText.style.bottom = "10px"; // Adjust vertical positioning as needed
    footerText.style.right = "10px"; // Position it to the right
    footerText.style.fontSize = "16px"; // Adjust font size if needed
    footerText.style.color = "#000000"; // Set the text color to white
    footerText.style.animation = "glow 2s linear infinite"; // Add a glow animation
    document.getElementById("footer-text").appendChild(footerText);
});
