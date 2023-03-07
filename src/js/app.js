const navLinks = document.querySelector(".nav-links");
const toggleBTn = document.querySelector("#toggle-btn");

toggleBTn.addEventListener("click", () => {
    toggleBTn.name = toggleBTn.name === "menu" ? "close" : "menu";
    navLinks.classList.toggle("hidden");
});

const targetDate = new Date("2023-5-21 23:59:59");
let timeLeft = getTimeLeft(targetDate);

function getTimeLeft(targetDate) {
    const now = new Date();
    const diff = targetDate.getTime() - now.getTime();
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    return { days, hours, minutes, seconds };
}

function updateCounter() {
    const counterElement = document.getElementById("counter");
    counterElement.innerHTML = `
      <div class="bg-gray-800 text-white rounded-md text-center text-4xl font-medium flex flex-col h-36 justify-center items-center place-items-center">${timeLeft.days} <span>Days</span></div>
      <div class="bg-gray-800 text-white rounded-md text-center text-4xl font-medium flex flex-col h-36 justify-center items-center place-items-center">${timeLeft.hours} <span>Hours</span></div>
      <div class="bg-gray-800 text-white rounded-md text-center text-4xl font-medium flex flex-col h-36 justify-center items-center place-items-center">${timeLeft.minutes} <span>Minutes</span></div>
      <div class="bg-gray-800 text-white rounded-md text-center text-4xl font-medium flex flex-col h-36 justify-center items-center place-items-center">${timeLeft.seconds} <span>Seconds</span></div>
    `;
    timeLeft = getTimeLeft(targetDate);
}

setInterval(updateCounter, 1000);

const copyright = document.querySelector("#copyright");

const year = new Date().getFullYear();

copyright.innerHTML = `Copyright © ${year} Rock Fiesta. All rights reserved. Develop by <a
    href="https://www.facebook.com/mrayhan4/"
    class="text-rose-500 hover:text-gray-300 transition-all duration-300 ease-in-out cursor-pointer"
    >Md.Rayhan Bapari</a`;
