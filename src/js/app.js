const navLinks = document.querySelector(".nav-links");
const toggleBTn = document.querySelector("#toggle-btn");

toggleBTn.addEventListener("click", () => {
    toggleBTn.name = toggleBTn.name === "menu" ? "close" : "menu";
    navLinks.classList.toggle("hidden");
});

