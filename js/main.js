import { app as firebaseApp, analytics } from "./firebaseConfig.js";
import { getHomeView, getAboutView, getPrivacyView, getTermsView, getSupportView, getFreeCookiesView } from "./views.js";
import { submitLead } from "./marketing.js";




// Routes configuration
const routes = {
  "/": getHomeView,
  "#/": getHomeView,
  "#about": getAboutView,
  "#features": getHomeView, // Features is on Home
  "#privacy": getPrivacyView,
  "#terms": getTermsView,
  "#support": getSupportView,
  "#/get-cookies": getFreeCookiesView,
};

const app = document.getElementById("app");
const navLinks = document.querySelectorAll("nav a");

const render = () => {
  const path = window.location.hash || "#/";
  
  // Handle features anchor specially if we are already on home
  if (path === "#features") {
     const viewFn = routes["#/"]; // Load home
     app.innerHTML = viewFn();
     setTimeout(() => {
        const el = document.getElementById("features");
        if(el) el.scrollIntoView({ behavior: "smooth" });
     }, 100);
     updateActiveLink(path);
     return;
  }

  const viewFn = routes[path] || routes["#/"];
  app.innerHTML = viewFn();
  
  // Re-trigger animations
  const observers = document.querySelectorAll('.animate-on-scroll');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  });
  observers.forEach((el) => observer.observe(el));

  // Handle Form Logic
  if (path === "#/get-cookies") {
      const form = document.getElementById("lead-form");
      if (form) {
          form.addEventListener("submit", async (e) => {
              e.preventDefault();
              
              // 1. Security Check: Honeypot
              const hp = document.getElementById("website_hp").value;
              if (hp) {
                  // Bot detected, silently reject or fake success
                  console.log("Bot detected via honeypot");
                  return;
              }

              const email = document.getElementById("email").value;
              const address = document.getElementById("address").value;
              const btn = form.querySelector("button");
              
              const originalText = btn.innerText;
              btn.innerText = "Sending...";
              btn.disabled = true;

              const result = await submitLead(email, address);

              if (result.success) {
                  form.style.display = "none";
                  document.getElementById("form-success").style.display = "block";
              } else {
                  btn.innerText = originalText;
                  // Rate limiting / prevention of rapid retry
                  setTimeout(() => {
                      btn.disabled = false;
                  }, 2000);
                  document.getElementById("form-error").style.display = "block";
              }
          });
      }
  }

  window.scrollTo(0, 0);
  updateActiveLink(path);
};

const updateActiveLink = (path) => {
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === path || (path === "#/" && href === "index.html")) {
            link.style.fontWeight = "600";
        } else {
            link.style.fontWeight = "400";
        }
    });
}

// Handle navigation
window.addEventListener("hashchange", render);
window.addEventListener("load", render);
