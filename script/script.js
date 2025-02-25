const menuToggle = document.querySelector(".menu-toggle");
const sidebar = document.querySelector(".sidebar");

// Function to check screen size and show/hide menu button
function updateMenuVisibility() {
    if (window.innerWidth <= 768) {
        menuToggle.style.display = "block"; // Show menu button on small screens
    } else {
        menuToggle.style.display = "none"; // Hide menu button on large screens
        sidebar.classList.remove("show"); // Ensure sidebar is visible on larger screens
    }
}

// Toggle sidebar and hide menu button when opened
menuToggle.addEventListener("click", function () {
    sidebar.classList.toggle("show");
    menuToggle.style.display = "none";
});

// Close sidebar when clicking outside & show menu button again
document.addEventListener("click", function (event) {
    if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
        sidebar.classList.remove("show");
        if (window.innerWidth <= 768) {
            menuToggle.style.display = "block"; // Show button only on small screens
        }
    }
});

// Run on page load and on window resize
window.addEventListener("load", updateMenuVisibility);
window.addEventListener("resize", updateMenuVisibility);
