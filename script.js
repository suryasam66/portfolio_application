function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Titles to rotate through
const titles = [ "Full-Stack Web Developer","Electrical Engineer", "Frontend Developer", "Backend Developer"];
let currentTitleIndex = 0;

// Function to change the title
function changeTitle() {
    const titleElement = document.getElementById('title');
    titleElement.style.opacity = 0; // Start fading out

    setTimeout(() => {
        currentTitleIndex = (currentTitleIndex + 1) % titles.length;
        titleElement.textContent = titles[currentTitleIndex];
        titleElement.style.opacity = 1; // Fade back in
    }, 500); // Match this timeout to the CSS transition duration
}

// Change title every 3 seconds
setInterval(changeTitle, 3000);




