// Base translations shared by every theme. Branding ("brand.title",
// "hero.titleB", "footer.text", document titles) and the whole About
// page ("about.*") are owned by the active theme — see theme.js.
const I18N = {
  uk: {
    "brand.subtitle": "Демо рішень",
    "nav.live": "Наживо",
    "nav.slides": "Слайди",
    "nav.about": "Про Нас",
    "hero.titleA": "Демо рішень",
    "hero.subtitle": "Оберіть рішення, щоб ознайомитись з його можливостями",
    "tile.logistics.title": "Оптимізація логістики",
    "tile.logistics.desc": "Геокодування адрес та планування оптимальних маршрутів доставки",
    "tile.logistics.tag1": "Маршрутизація",
    "tile.logistics.tag2": "Геокодування",
    "tile.tech.title": "Автоматизація створення технологій",
    "tile.tech.desc": "Розпізнавання креслень та автоматична генерація технологічних карт",
    "tile.tech.tag1": "Креслення",
    "tile.tech.tag2": "AI-обробка",
    "tile.legal.title": "Розумний помічник юриста",
    "tile.legal.desc": "Рішення для автоматизації роботи юридичних відділів",
    "tile.legal.tag1": "LLM",
    "tile.legal.tag2": "Legal",
    "tile.docs.title": "Розумна обробка документів",
    "tile.docs.desc": "Класифікація, витяг даних та інтелектуальний пошук у документах",
    "tile.docs.tag1": "OCR",
    "tile.docs.tag2": "NLP"
  },
  en: {
    "brand.subtitle": "Solutions Demo",
    "nav.live": "Live",
    "nav.slides": "Slides",
    "nav.about": "About",
    "hero.titleA": "Demo Solutions of",
    "hero.subtitle": "Choose a solution to explore its capabilities",
    "tile.logistics.title": "Logistics Optimization",
    "tile.logistics.desc": "Address geocoding and optimal delivery route planning",
    "tile.logistics.tag1": "Routing",
    "tile.logistics.tag2": "Geocoding",
    "tile.tech.title": "Process Engineering Automation",
    "tile.tech.desc": "Drawing recognition and automatic generation of process charts",
    "tile.tech.tag1": "Drawings",
    "tile.tech.tag2": "AI processing",
    "tile.legal.title": "Legal AI Assistant",
    "tile.legal.desc": "A solution to automate the work of legal departments",
    "tile.legal.tag1": "LLM",
    "tile.legal.tag2": "Legal",
    "tile.docs.title": "Smart Document Processing",
    "tile.docs.desc": "Classification, data extraction and intelligent document search",
    "tile.docs.tag1": "OCR",
    "tile.docs.tag2": "NLP"
  }
};

const STORAGE_KEY = "mdigital.lang";

function themeDict(lang) {
  const theme = window.SITE_THEME;
  return (theme && theme.i18n && theme.i18n[lang]) || {};
}

function applyLang(lang) {
  const dict = Object.assign({}, I18N[lang] || I18N.uk, themeDict(lang));
  document.documentElement.lang = lang === "en" ? "en" : "uk";
  const page = document.body.getAttribute("data-page");
  if (page && dict["doc.title." + page]) {
    document.title = dict["doc.title." + page];
  }
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] == null) return;
    const val = dict[key];
    if (/<[a-z][\s\S]*>/i.test(val)) {
      el.innerHTML = val;
    } else {
      el.textContent = val;
    }
  });
  document.querySelectorAll(".lang-btn").forEach((b) => {
    const active = b.dataset.lang === lang;
    b.classList.toggle("active", active);
    b.setAttribute("aria-selected", active ? "true" : "false");
  });
  try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
}

document.querySelectorAll(".lang-btn").forEach((btn) => {
  btn.addEventListener("click", () => applyLang(btn.dataset.lang));
});

// The theme is presentation-only (colours, branding and About page content —
// see theme.js). It defaults to "itp" and can be overridden with the
// ?theme=<name> URL parameter; there is no in-page theme switcher.

// Counter values on the About page are owned by the active theme
(function applyThemeStats() {
  const stats = window.SITE_THEME && window.SITE_THEME.aboutStats;
  if (!stats) return;
  document.querySelectorAll(".stat-number").forEach((el, i) => {
    const s = stats[i];
    if (!s) return;
    el.dataset.target = String(s.target);
    if (s.suffix != null) el.dataset.suffix = s.suffix; else delete el.dataset.suffix;
    if (s.prefix != null) el.dataset.prefix = s.prefix; else delete el.dataset.prefix;
  });
})();

// Highlight active nav item based on body[data-page]
(function syncNav() {
  const page = document.body.getAttribute("data-page");
  if (!page) return;
  document.querySelectorAll(".nav-btn[data-page-link]").forEach((el) => {
    el.classList.toggle("active", el.getAttribute("data-page-link") === page);
  });
})();

// Tile navigation (home page)
document.querySelectorAll(".tile").forEach((tile) => {
  const open = () => {
    const href = tile.getAttribute("data-href");
    if (href) {
      const target = tile.getAttribute("data-href-target");
      if (target === "_blank") window.open(href, "_blank", "noopener");
      else window.location.href = href;
      return;
    }
    tile.animate(
      [{ transform: "translateY(-6px) scale(1)" }, { transform: "translateY(-6px) scale(0.98)" }, { transform: "translateY(-6px) scale(1)" }],
      { duration: 260, easing: "cubic-bezier(.2,.8,.2,1)" }
    );
  };
  tile.addEventListener("click", open);
  tile.addEventListener("keydown", (e) => {
    if (e.key === "Enter" || e.key === " ") { e.preventDefault(); open(); }
  });
});

// Tile favorite toggle (home page)
document.querySelectorAll(".tile-fav").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    btn.classList.toggle("active");
  });
});

let initial = "uk";
try { initial = localStorage.getItem(STORAGE_KEY) || "uk"; } catch (_) {}
applyLang(initial);
