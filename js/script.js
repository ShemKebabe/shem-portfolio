/* =========================================================
   SCRIPT.JS — Shem Ogendi Kebabe Portfolio
   ========================================================= */

/* ---------------------------------------------------------
   1. PROJECTS DATA
   To add a project: copy one { ... } object, paste it at the
   end of the array, and change the values.
   category must be: "web", "data" or "academic"
   --------------------------------------------------------- */
const projects = [
  {
    title: "Digital Occurrence Book :In Progress",
    description: "A secure police occurrence book login system for recording, searching and managing incident reports digitally instead of on paper.",
    image: "assets/POLICEOB.png",
    tech: ["PHP", "JavaScript", "HTML", "MySQL"],
    category: "web",
    demo: "#",
   
  },
  {
    title: "Mediator Chandah: Mediation Services Website",
    description: "[A responsive website for a professional mediation practice in Nairobi, helping clients learn about services, understand the benefits of mediation, read blogs and book a session online. Built as a team project, where I was responsible for the design, the Services and Contact pages and the responsive layout]",
    image: "assets/mediatorchandahwebscreenshot.png",
    tech: ["React", "Bootsrap", "Teamwork"],
    category: "web",
    demo: "https://www.cpmchandah.co.ke/",
    
  },
  {
    title: "Silveroak Educational Complex : A School Website",
    description: "[A school website for a kindergarten, primary and junior secondary school, with an admissions announcement banner, pages for Admissions, Academics and Contact, a campus call-to-action and social media links. Hand-coded in HTML and CSS and made mobile-friendly for parents browsing on their phones.]",
    image: "assets/Silveroakeducomplex.png",
    tech: ["HTML", "CSS","Javascript"],
    category: "academic",
    demo: "https://silveroakeducationalcomplex.sc.ke/",
    
  },
];

/* ---------------------------------------------------------
   2. CERTIFICATES DATA — copy an object to add another.
   --------------------------------------------------------- */
const certificates = [
  {
    title: "Introduction to Cybersecurity",
    issuer: "Cisco Networking Academy",
    date: "[Dec 2025]",
    image: "assets/certificates/cert1.jpg",
    link: "assets/Introduction_to_Cybersecurity_certificate_1060596-cuea-edu_98adb742-10f5-4d1d-95a2-a2bdb37c8019.pdf",
  },
  {
    title: " AI Foundations Associate",
    issuer: "Oracle University",
    date: "[Month Year]",
    image: "assets/certificates/cert2.jpg",
    link: "#",
  },
  /* to be added later on upon achievement{
    title: "[Certificate Name]",
    issuer: "[Issuer]",
    date: "[Month Year]",
    image: "assets/certificates/cert3.jpg",
    link: "#",
  },*/
];

/* Fallback image if a file is missing */
const PLACEHOLDER = "https://placehold.co/800x500/0b1f3a/14b8a6?text=Add+Image";

/* ---------------------------------------------------------
   3. RENDER PROJECT CARDS
   --------------------------------------------------------- */
const projectGrid = document.getElementById("project-grid");
projects.forEach((p) => {
  const card = document.createElement("article");
  card.className = "card reveal";
  card.dataset.category = p.category;
  card.innerHTML = `
    <img src="${p.image}" alt="Screenshot of ${p.title}" loading="lazy" onerror="this.src='${PLACEHOLDER}'">
    <div class="card-body">
      <h3>${p.title}</h3>
      <p>${p.description}</p>
      <div class="tags">${p.tech.map((t) => `<span class="tag">${t}</span>`).join("")}</div>
      <div class="card-links">
        <a href="${p.demo}" class="btn btn-accent small" target="_blank" rel="noopener"><i class="fa-solid fa-up-right-from-square"></i> Live Demo</a>
        <a href="${p.source}" class="btn btn-outline small" target="_blank" rel="noopener"><i class="fa-brands fa-github"></i> Source Code</a>
      </div>
    </div>`;
  projectGrid.appendChild(card);
});

/* Category filter buttons */
document.querySelectorAll(".filter-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const f = btn.dataset.filter;
    projectGrid.querySelectorAll(".card").forEach((c) => {
      c.classList.toggle("hide", f !== "all" && c.dataset.category !== f);
    });
  });
});

/* ---------------------------------------------------------
   4. RENDER CERTIFICATES + MODAL
   --------------------------------------------------------- */
const certGrid = document.getElementById("cert-grid");
const modal = document.getElementById("cert-modal");
certificates.forEach((c) => {
  const card = document.createElement("article");
  card.className = "card cert-card reveal";
  card.tabIndex = 0; // keyboard accessible
  card.setAttribute("role", "button");
  card.innerHTML = `
    <img src="${c.image}" alt="${c.title} certificate" loading="lazy" onerror="this.src='${PLACEHOLDER}'">
    <div class="card-body">
      <h3>${c.title}</h3>
      <p>${c.issuer} · ${c.date}</p>
      <div class="card-links"><a href="${c.link}" class="btn btn-outline small" target="_blank" rel="noopener" onclick="event.stopPropagation()">Credential</a></div>
    </div>`;
  const open = () => openModal(c);
  card.addEventListener("click", open);
  card.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); } });
  certGrid.appendChild(card);
});

function openModal(c) {
  const img = document.getElementById("modal-img");
  img.src = c.image;
  img.onerror = () => (img.src = PLACEHOLDER);
  img.alt = c.title + " certificate";
  document.getElementById("modal-title").textContent = c.title;
  document.getElementById("modal-meta").textContent = `${c.issuer} · ${c.date}`;
  document.getElementById("modal-link").href = c.link;
  modal.hidden = false;
  document.getElementById("modal-close").focus();
}
function closeModal() { modal.hidden = true; }
document.getElementById("modal-close").addEventListener("click", closeModal);
modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });

/* ---------------------------------------------------------
   5. DARK / LIGHT THEME (saved in localStorage)
   --------------------------------------------------------- */
const themeBtn = document.getElementById("theme-toggle");
function setTheme(t) {
  document.documentElement.dataset.theme = t;
  themeBtn.innerHTML = t === "dark" ? '<i class="fa-solid fa-sun"></i>' : '<i class="fa-solid fa-moon"></i>';
  localStorage.setItem("theme", t);
}
setTheme(localStorage.getItem("theme") || "light");
themeBtn.addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));

/* ---------------------------------------------------------
   6. MOBILE HAMBURGER MENU
   --------------------------------------------------------- */
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("nav-links");
hamburger.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  hamburger.setAttribute("aria-expanded", open);
  hamburger.innerHTML = open ? '<i class="fa-solid fa-xmark"></i>' : '<i class="fa-solid fa-bars"></i>';
});
navLinks.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
  navLinks.classList.remove("open");
  hamburger.setAttribute("aria-expanded", false);
  hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
}));

/* ---------------------------------------------------------
   7. SCROLL PROGRESS BAR + SCROLL-SPY
   --------------------------------------------------------- */
const progress = document.getElementById("progress-bar");
const sections = document.querySelectorAll("main section[id]");
window.addEventListener("scroll", () => {
  const h = document.documentElement.scrollHeight - window.innerHeight;
  progress.style.width = (window.scrollY / h) * 100 + "%";

  let current = "";
  sections.forEach((s) => { if (window.scrollY >= s.offsetTop - 120) current = s.id; });
  navLinks.querySelectorAll("a").forEach((a) => a.classList.toggle("active", a.getAttribute("href") === "#" + current));
});

/* ---------------------------------------------------------
   8. REVEAL ANIMATIONS + SKILL BARS (IntersectionObserver)
   --------------------------------------------------------- */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("visible");
    entry.target.querySelectorAll(".bar").forEach((bar) => {
      bar.querySelector(".fill").style.width = bar.dataset.level + "%";
    });
    observer.unobserve(entry.target);
  });
}, { threshold: 0.15 });
document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

/* ---------------------------------------------------------
   9. CONTACT FORM (Formspree with mailto fallback)
   --------------------------------------------------------- */
const MY_EMAIL = "youremail@example.com"; // EDIT: your email for the mailto fallback
const form = document.getElementById("contact-form");
const errorBox = document.getElementById("form-error");
const successBox = document.getElementById("form-success");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  errorBox.textContent = "";
  let valid = true;
  form.querySelectorAll("input, textarea").forEach((field) => {
    const ok = field.value.trim() !== "" && (field.type !== "email" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(field.value));
    field.classList.toggle("invalid", !ok);
    if (!ok) valid = false;
  });
  if (!valid) { errorBox.textContent = "Please fill in all fields with a valid email address."; return; }

  const data = new FormData(form);
  // Fallback: if Formspree ID not set, open the visitor's email app
  if (form.action.includes("YOUR_FORM_ID")) {
    const body = encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
    window.location.href = `mailto:${MY_EMAIL}?subject=${encodeURIComponent(data.get("subject"))}&body=${body}`;
    successBox.hidden = false;
    form.reset();
    return;
  }
  try {
    const res = await fetch(form.action, { method: "POST", body: data, headers: { Accept: "application/json" } });
    if (!res.ok) throw new Error();
    successBox.hidden = false;
    form.reset();
  } catch {
    errorBox.textContent = "Sorry, something went wrong. Please email me directly.";
  }
});

/* ---------------------------------------------------------
   10. PRINT BUTTON + FOOTER YEAR
   --------------------------------------------------------- */
document.getElementById("print-btn").addEventListener("click", () => window.print());
document.getElementById("year").textContent = new Date().getFullYear();
