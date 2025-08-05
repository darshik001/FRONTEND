
const allSections = document.querySelectorAll("main > section");

// Show all on home
document.getElementById("home-link").addEventListener("click", function (e) {
  e.preventDefault();
  allSections.forEach(section => section.classList.remove("hidden-section"));
});

// Show one section at a time
document.querySelectorAll(".section-link").forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("data-target");

    allSections.forEach(section => {
      if (section.id === targetId) {
        section.classList.remove("hidden-section");
      } else {
        section.classList.add("hidden-section");
      }
    });
  });
});


