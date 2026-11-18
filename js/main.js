// ===== Rediger kontaktinformasjon her (ett sted) =====
const CONFIG = {
  email: "glennsvends1@gmail.com",
  phone: "482 64 210",
  phoneHref: "+4748264210",
};
// =====================================================

const $ = (s) => document.querySelector(s);

document.getElementById("year").textContent = new Date().getFullYear();

// Mobilmeny
const menuBtn = $("#menuBtn"), nav = $("#nav");
menuBtn.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});
nav.addEventListener("click", (e) => {
  if (e.target.tagName === "A") { nav.classList.remove("open"); menuBtn.setAttribute("aria-expanded", "false"); }
});

// Kontaktlinjer
const lines = $("#contactLines");
const parts = [];
if (CONFIG.phone) parts.push('Telefon: <a href="tel:' + CONFIG.phoneHref + '">' + CONFIG.phone + "</a>");
if (CONFIG.email) parts.push('E-post: <a href="mailto:' + CONFIG.email + '">' + CONFIG.email + "</a>");
lines.innerHTML = parts.join("<br>");

// Skjema -> mailto
const form = $("#reqForm"), warn = $("#formWarn");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const f = new FormData(form);
  if (!f.get("org") || !f.get("navn") || !f.get("kontakt")) {
    warn.hidden = false; warn.textContent = "Fyll ut organisasjon, navn og e-post eller telefon."; return;
  }
  if (!CONFIG.email) {
    warn.hidden = false; warn.textContent = "E-postadressen er ikke satt opp ennå (se js/main.js)."; return;
  }
  warn.hidden = true;
  const body = [
    "Organisasjon: " + f.get("org"),
    "Rolle: " + (f.get("rolle") || "-"),
    "Navn: " + f.get("navn"),
    "Kontakt: " + f.get("kontakt"),
    "Ønsket tidspunkt/antall: " + (f.get("tid") || "-"),
    "",
    f.get("melding") || "",
  ].join("\n");
  location.href = "mailto:" + CONFIG.email + "?subject=" + encodeURIComponent("Forespørsel: KI i hverdagen") + "&body=" + encodeURIComponent(body);
});

// Del siden
$("#shareBtn").addEventListener("click", async () => {
  const data = { title: "KI i hverdagen – kurs for seniorer", text: "Et praktisk KI-kurs for seniorer i Oslo og Akershus:", url: location.href.split("#")[0] };
  if (navigator.share) { try { await navigator.share(data); return; } catch (_) { return; } }
  location.href = "mailto:?subject=" + encodeURIComponent(data.title) + "&body=" + encodeURIComponent(data.text + "\n" + data.url);
});
