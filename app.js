const I18N = {
  uk: {
    "brand.title": "Metinvest Digital",
    "brand.subtitle": "Демо рішень",
    "nav.live": "Наживо",
    "nav.slides": "Слайди",
    "nav.about": "Про Нас",
    "hero.titleA": "Демо рішень",
    "hero.titleB": "Metinvest Digital",
    "hero.subtitle": "Оберіть рішення, щоб ознайомитись з його можливостями",
    "tile.logistics.title": "Оптимізація логістики",
    "tile.logistics.desc": "Геокодування адрес та планування оптимальних маршрутів доставки",
    "tile.logistics.tag1": "Маршрутизація",
    "tile.logistics.tag2": "Геокодування",
    "tile.tech.title": "Автоматизація створення технологій",
    "tile.tech.desc": "Розпізнавання креслень та автоматична генерація технологічних карт",
    "tile.tech.tag1": "Креслення",
    "tile.tech.tag2": "AI-обробка",
    "tile.docs.title": "Розумна обробка документів",
    "tile.docs.desc": "Класифікація, витяг даних та інтелектуальний пошук у документах",
    "tile.docs.tag1": "OCR",
    "tile.docs.tag2": "NLP",
    "footer.text": "Metinvest Digital 2026"
  },
  en: {
    "brand.title": "Metinvest Digital",
    "brand.subtitle": "Solutions Demo",
    "nav.live": "Live",
    "nav.slides": "Slides",
    "nav.about": "About",
    "hero.titleA": "Demo Solutions of",
    "hero.titleB": "Metinvest Digital",
    "hero.subtitle": "Choose a solution to explore its capabilities",
    "tile.logistics.title": "Logistics Optimization",
    "tile.logistics.desc": "Address geocoding and optimal delivery route planning",
    "tile.logistics.tag1": "Routing",
    "tile.logistics.tag2": "Geocoding",
    "tile.tech.title": "Process Engineering Automation",
    "tile.tech.desc": "Drawing recognition and automatic generation of process charts",
    "tile.tech.tag1": "Drawings",
    "tile.tech.tag2": "AI processing",
    "tile.docs.title": "Smart Document Processing",
    "tile.docs.desc": "Classification, data extraction and intelligent document search",
    "tile.docs.tag1": "OCR",
    "tile.docs.tag2": "NLP",
    "footer.text": "Metinvest Digital 2026"
  }
};

const STORAGE_KEY = "mdigital.lang";

function applyLang(lang) {
  const dict = I18N[lang] || I18N.uk;
  document.documentElement.lang = lang === "en" ? "en" : "uk";
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key] != null) el.textContent = dict[key];
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

document.querySelectorAll(".nav-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".nav-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

document.querySelectorAll(".tile-fav").forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.stopPropagation();
    btn.classList.toggle("active");
  });
});

document.querySelectorAll(".tile").forEach((tile) => {
  const open = () => {
    const href = tile.getAttribute("data-href");
    if (href) {
      window.location.href = href;
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

let initial = "uk";
try { initial = localStorage.getItem(STORAGE_KEY) || "uk"; } catch (_) {}
applyLang(initial);
