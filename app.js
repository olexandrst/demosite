const I18N = {
  uk: {
    "brand.title": "Metinvest Digital",
    "brand.subtitle": "Демо рішень",
    "nav.home": "Головна",
    "nav.solutions": "Рішення",
    "nav.about": "Про проєкт",
    "user.name": "Користувач Demo",
    "user.role": "Metinvest Digital",
    "hero.title": "Демо рішень",
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
    "stat.sec": "сек",
    "stat.respLabel": "Середній час відповіді",
    "stat.accLabel": "Точність обробки",
    "stat.solLabel": "Активних рішення",
    "footer.text": "© Metinvest Digital — демонстраційні рішення"
  },
  en: {
    "brand.title": "Metinvest Digital",
    "brand.subtitle": "Solutions Demo",
    "nav.home": "Home",
    "nav.solutions": "Solutions",
    "nav.about": "About",
    "user.name": "Demo User",
    "user.role": "Metinvest Digital",
    "hero.title": "Solutions Demo",
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
    "stat.sec": "sec",
    "stat.respLabel": "Average response time",
    "stat.accLabel": "Processing accuracy",
    "stat.solLabel": "Active solutions",
    "footer.text": "© Metinvest Digital — demo solutions"
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
