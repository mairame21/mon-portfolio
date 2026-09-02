const sections = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".site-nav a");

function highlightActiveLink() {
  let currentId = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80; // décalage pour la nav sticky
    if (window.scrollY >= sectionTop) {
      currentId = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.style.color = "";
    if (link.getAttribute("href") === `#${currentId}`) {
      link.style.color = "var(--accent-2)";
    }
  });
}

window.addEventListener("scroll", highlightActiveLink);
window.addEventListener("load", highlightActiveLink);
