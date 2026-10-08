const navLinks = document.querySelectorAll(".navbar a");
const sections = document.querySelectorAll("#home, #projects, #about");

function updateActiveLink() {
    const line = window.scrollY + window.innerHeight * 0.3;
    let currentId = "home";

    sections.forEach((section) => {
        if (section.offsetTop <= line) {
            currentId = section.id;
        }
    });

    if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 2) {
        currentId = sections[sections.length - 1].id;
    }

    navLinks.forEach((link) => {
        link.classList.toggle("active", link.getAttribute("href") === "#" + currentId);
    });
}

window.addEventListener("scroll", updateActiveLink);
updateActiveLink();