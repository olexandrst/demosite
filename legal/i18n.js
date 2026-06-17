/* =========================================================================
   Legal AI Assistant — localization core (uk / en).

   The app is authored in Ukrainian. Switching to English works by reloading
   the page with the chosen language persisted; on load this file:
     • resolves the active language,
     • exposes it (window.LEGAL_LANG) and a t() helper for app.js,
     • translates the static HTML chrome via [data-i18n*] attributes,
     • wires the language switchers.

   Language is resolved from (in order): the ?lang= URL parameter, the shared
   suite key localStorage["mdigital.lang"], then the default "uk". The legacy
   "ua" code used by this app's buttons is normalised to "uk" so the choice
   stays in sync with the rest of the demo suite.

   Loaded (see index.html) after ui-i18n.js (window.LEGAL_UI_STATIC) and
   content.en.js (window.LEGAL_CONTENT_EN), and before app.js.
   ========================================================================= */
(function () {
  "use strict";

  var STORAGE_KEY = "mdigital.lang";
  var SUPPORTED = { uk: true, en: true };
  var DEFAULT_LANG = "uk";

  function normalize(lang) {
    if (!lang) return null;
    lang = String(lang).toLowerCase();
    if (lang === "ua") lang = "uk"; // this app's buttons use "ua" for Ukrainian
    return SUPPORTED[lang] ? lang : null;
  }

  function resolveLang() {
    try {
      var fromUrl = normalize(new URLSearchParams(window.location.search).get("lang"));
      if (fromUrl) {
        try { localStorage.setItem(STORAGE_KEY, fromUrl); } catch (_) {}
        return fromUrl;
      }
    } catch (_) {}
    try {
      var saved = normalize(localStorage.getItem(STORAGE_KEY));
      if (saved) return saved;
    } catch (_) {}
    return DEFAULT_LANG;
  }

  var LANG = resolveLang();

  /* ----------------------------------------------------------------------
     Dynamic strings — the chrome injected by app.js render functions and
     the status/priority/category lookups. Kept here (with both languages)
     so app.js can resolve them through t(). Static HTML strings live in
     window.LEGAL_UI_STATIC (see ui-i18n.js); the two are merged below.
     ---------------------------------------------------------------------- */
  var DYNAMIC = {
    uk: {
      "status.new": "Новий",
      "status.in-progress": "В роботі",
      "status.waiting": "Очікує",
      "status.resolved": "Вирішено",

      "priority.low": "Низький",
      "priority.medium": "Середній",
      "priority.high": "Високий",
      "priority.urgent": "Терміновий",

      "category.labor": "Трудові відносини",
      "category.compliance": "Комплаєнс",
      "category.contracts": "Договори",
      "category.court": "Судові справи",
      "category.corporate": "Корпоративне",

      "dyn.docs.found": "Знайдено:",
      "dyn.docs.relevance": "Релевантність:",
      "dyn.docs.like": "Корисно",
      "dyn.docs.dislike": "Не корисно",
      "dyn.docs.exampleQuery": "Які вимоги до документу з Бізнес-вимогами",

      "dyn.escalate.title": "Запит успішно направлено!",
      "dyn.escalate.text": "Ваш запит успішно направлено фахівцям юридичної служби. Очікуйте відповідь до кінця робочого дня сьогодні.",

      "dyn.ticket.result": "Результат:",
      "dyn.ticket.greeting": "Доброго дня!",
      "dyn.ticket.body": "Звертаюся з питанням щодо \"{title}\". Прошу надати консультацію або направити до відповідного спеціаліста.",
      "dyn.ticket.thanks": "Дякую за допомогу!",
      "dyn.ticket.info": "Інформація",
      "dyn.ticket.category": "Категорія",
      "dyn.ticket.priority": "Пріоритет",
      "dyn.ticket.created": "Створено",
      "dyn.ticket.assignee": "Виконавець",
      "dyn.ticket.assigneeName": "Олена Петренко",
      "dyn.ticket.aiAnalysis": "ШІ-аналіз",
      "dyn.ticket.aiAccuracy": "Категорію визначено автоматично з точністю <strong>98%</strong>",
      "dyn.ticket.aiSources": "Рекомендовані джерела: База знань, КЗпП",

      "dyn.reply.sent": "Відповідь надіслано!",

      "dyn.dispatcher.tickets": "тікетів",
      "dyn.dispatcher.classified": "Класифіковано ШІ",

      "dyn.source.updated": "Оновлено:",
      "dyn.source.settings": "Налаштування",
      "dyn.source.delete": "Видалити",
      "dyn.source.justAdded": "Щойно додано",

      "dyn.logout.confirm": "Ви впевнені, що хочете вийти?",
      "dyn.chat.reply": "Дякую за запитання! Рекомендую скористатися розділом \"Поставити питання ШІ агенту\" для отримання детальної відповіді."
    },
    en: {
      "status.new": "New",
      "status.in-progress": "In progress",
      "status.waiting": "Waiting",
      "status.resolved": "Resolved",

      "priority.low": "Low",
      "priority.medium": "Medium",
      "priority.high": "High",
      "priority.urgent": "Urgent",

      "category.labor": "Labour relations",
      "category.compliance": "Compliance",
      "category.contracts": "Contracts",
      "category.court": "Court cases",
      "category.corporate": "Corporate",

      "dyn.docs.found": "Found:",
      "dyn.docs.relevance": "Relevance:",
      "dyn.docs.like": "Helpful",
      "dyn.docs.dislike": "Not helpful",
      "dyn.docs.exampleQuery": "What are the requirements for a Business Requirements document",

      "dyn.escalate.title": "Request sent successfully!",
      "dyn.escalate.text": "Your request has been successfully sent to the legal department specialists. Expect a reply by the end of the business day today.",

      "dyn.ticket.result": "Resolution:",
      "dyn.ticket.greeting": "Good afternoon!",
      "dyn.ticket.body": "I am writing regarding \"{title}\". Please provide a consultation or refer me to the relevant specialist.",
      "dyn.ticket.thanks": "Thank you for your help!",
      "dyn.ticket.info": "Information",
      "dyn.ticket.category": "Category",
      "dyn.ticket.priority": "Priority",
      "dyn.ticket.created": "Created",
      "dyn.ticket.assignee": "Assignee",
      "dyn.ticket.assigneeName": "Olena Petrenko",
      "dyn.ticket.aiAnalysis": "AI analysis",
      "dyn.ticket.aiAccuracy": "Category determined automatically with <strong>98%</strong> accuracy",
      "dyn.ticket.aiSources": "Recommended sources: Knowledge base, Labour Code",

      "dyn.reply.sent": "Reply sent!",

      "dyn.dispatcher.tickets": "tickets",
      "dyn.dispatcher.classified": "Classified by AI",

      "dyn.source.updated": "Updated:",
      "dyn.source.settings": "Settings",
      "dyn.source.delete": "Delete",
      "dyn.source.justAdded": "Just added",

      "dyn.logout.confirm": "Are you sure you want to log out?",
      "dyn.chat.reply": "Thank you for your question! I recommend using the \"Ask the AI agent a question\" section for a detailed answer."
    }
  };

  /* Merge the static chrome dictionary (ui-i18n.js) with the dynamic one. */
  var STATIC = window.LEGAL_UI_STATIC || { uk: {}, en: {} };
  function merge(a, b) {
    var out = {}, k;
    if (a) for (k in a) if (Object.prototype.hasOwnProperty.call(a, k)) out[k] = a[k];
    if (b) for (k in b) if (Object.prototype.hasOwnProperty.call(b, k)) out[k] = b[k];
    return out;
  }
  var UI = {
    uk: merge(STATIC.uk, DYNAMIC.uk),
    en: merge(STATIC.en, DYNAMIC.en)
  };

  function t(key) {
    var cur = UI[LANG] || UI.uk;
    if (cur && cur[key] != null) return cur[key];
    if (UI.uk && UI.uk[key] != null) return UI.uk[key];
    return key;
  }

  /* Expose for app.js and other scripts. */
  window.LEGAL_LANG = LANG;
  window.LEGAL_UI = UI;
  window.t = t;

  window.setLegalLang = function (lang) {
    var next = normalize(lang);
    if (!next || next === LANG) return;
    try { localStorage.setItem(STORAGE_KEY, next); } catch (_) {}
    var url = new URL(window.location.href);
    url.searchParams.set("lang", next);
    window.location.href = url.toString();
  };

  /* ----------------------------------------------------------------------
     Apply translations to the authored (Ukrainian) static DOM. For the
     default language the dictionary values equal the original markup, so
     this is a no-op; for English it swaps them in.
     ---------------------------------------------------------------------- */
  function applyStaticI18n() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var val = t(el.getAttribute("data-i18n"));
      if (val == null) return;
      if (/<[a-z][\s\S]*>/i.test(val)) el.innerHTML = val;
      else el.textContent = val;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      el.setAttribute("placeholder", t(el.getAttribute("data-i18n-placeholder")));
    });
    document.querySelectorAll("[data-i18n-title]").forEach(function (el) {
      el.setAttribute("title", t(el.getAttribute("data-i18n-title")));
    });
    document.querySelectorAll("[data-i18n-value]").forEach(function (el) {
      var v = t(el.getAttribute("data-i18n-value"));
      el.setAttribute("value", v);
      if ("value" in el) el.value = v;
    });
  }

  /* Reflect the active language on both switchers and wire them up. The
     buttons carry data-lang="ua"|"en"; "ua" maps to "uk". */
  function syncAndWireSwitchers() {
    var groups = [".md-lang-btn", ".settings-seg .seg"];
    groups.forEach(function (sel) {
      document.querySelectorAll(sel).forEach(function (btn) {
        var btnLang = normalize(btn.getAttribute("data-lang"));
        var active = btnLang === LANG;
        btn.classList.toggle("active", active);
        btn.setAttribute("aria-selected", active ? "true" : "false");
        btn.addEventListener("click", function () {
          window.setLegalLang(btn.getAttribute("data-lang"));
        });
      });
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    document.documentElement.lang = LANG;
    /* The static markup is authored in Ukrainian, so it only needs swapping
       for non-default languages; the default view stays exactly as authored. */
    if (LANG !== "uk") applyStaticI18n();
    syncAndWireSwitchers();
  });
})();
