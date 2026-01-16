// Burger Menu
const burger = document.getElementById("burger");
const mobileMenu = document.getElementById("mobileMenu");

burger.addEventListener("click", () => {
  burger.classList.toggle("active");
  mobileMenu.classList.toggle("open");
});

// Close menu on link click
document.querySelectorAll(".mobile-menu a").forEach((link) => {
  link.addEventListener("click", () => {
    burger.classList.remove("active");
    mobileMenu.classList.remove("open");
  });
});

// Scroll Fade Animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 }
);

document.querySelectorAll(".fade").forEach((el) => observer.observe(el));

document.addEventListener("DOMContentLoaded", () => {
  const DISCORD_SERVER_ID = "1234961685651918888";
  const discordEl = document.getElementById("discord-online");

  function updateDiscordOnline() {
    fetch(`https://discord.com/api/guilds/${DISCORD_SERVER_ID}/widget.json`)
      .then((res) => res.json())
      .then((data) => {
        discordEl.textContent = data.presence_count;
      })
      .catch(() => {
        discordEl.textContent = "Offline";
      });
  }

  // 🔄 direkt beim Laden
  updateDiscordOnline();

  // 🔁 alle 10 Sekunden live aktualisieren
  setInterval(updateDiscordOnline, 10000);
});
// Back to Top Button
const backToTopButton = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
