/* =========================================================================
   Site themes.
   A theme defines: the colour scheme (via the data-theme attribute on <html>,
   consumed by styles.css), the company branding (name shown in headers,
   hero, footer and document titles) and the full "About Us" page content
   in every language. Themes are purely presentational — they never change
   the business logic or capabilities of the solutions.
   ========================================================================= */
(function () {
  "use strict";

  const THEMES = {
    /* ------------------------------------------------------------------
       "mid" — the original Metinvest Digital theme (existing settings).
       ------------------------------------------------------------------ */
    mid: {
      label: "MID",
      brand: "Metinvest Digital",
      footer: "Metinvest Digital 2026",
      i18n: {
        uk: {
          "doc.title.live": "Демо рішень Metinvest Digital",
          "doc.title.about": "Про нас — Metinvest Digital",
          "brand.title": "Metinvest Digital",
          "hero.titleB": "Metinvest Digital",
          "footer.text": "Metinvest Digital 2026",

          "about.badge": "Metinvest Digital",
          "about.heroA": "Про нас",
          "about.heroB": "Metinvest Digital",
          "about.heroSub": "Ми перетворюємо цифрові можливості на джерело зростання вартості бізнесу — від промислової автоматизації до інтелектуальних AI-рішень",
          "about.whoTitle": "Хто ми",
          "about.whoP1": "<strong>Метінвест Діджитал</strong> — українська ІТ-компанія, яка спеціалізується на цифровій трансформації великого бізнесу. Заснована у 2018 році як єдиний ІТ бізнес-партнер Групи Метінвест.",
          "about.whoP2": "Ми розробляємо, впроваджуємо і підтримуємо комплексні ІТ-рішення з побудови наземної та хмарної інфраструктури, розвитку інформаційних систем, системної інтеграції, управління великими даними, промислової автоматизації, кібербезпеки та штучного інтелекту.",
          "about.whoP3": "Обслуговуємо понад 30 підприємств Метінвесту в Україні, Італії, Польщі, Болгарії, США та Великобританії, а також зовнішніх клієнтів у промисловості, телекомунікаціях, банківській сфері та енергетиці.",
          "about.missionTitle": "Наша місія",
          "about.missionText": "Перетворювати цифрові можливості на джерело зростання вартості бізнесу по всьому ланцюжку: процеси — технології — кінцеві споживачі.",

          "about.statsTitleA": "Ключові",
          "about.statsTitleB": "факти та цифри",
          "about.statsSub": "Результати, якими ми пишаємося",
          "about.stat1": "спеціалістів",
          "about.stat2": "рік заснування",
          "about.stat3": "країн присутності",
          "about.stat4": "підприємств Метінвесту",
          "about.stat5": "сервісів та систем",
          "about.stat6": "ІТ-компаній України",

          "about.svcTitleA": "Ключові",
          "about.svcTitleB": "напрямки",
          "about.svcSub": "Повний спектр End-to-End рішень для цифрової трансформації",
          "about.svc1Title": "Рішення SAP",
          "about.svc1Desc": "Інтегровані рішення для фінансів, виробництва, логістики, HR — $52+ млн економічного ефекту",
          "about.svc2Title": "Рішення Microsoft",
          "about.svc2Desc": "Міграція 30 000+ користувачів у хмару, керування 25 000+ ПК, 50 000 облікових записів",
          "about.svc3Title": "R&D та ШІ",
          "about.svc3Desc": "Дослідження та впровадження інноваційних рішень на базі ML/AI, Computer Vision, LLM",
          "about.svc4Title": "Хмарні рішення",
          "about.svc4Desc": "Впровадження та підтримка хмарних рішень IaaS, PaaS, SaaS для корпоративних клієнтів",
          "about.svc5Title": "Кібербезпека",
          "about.svc5Desc": "Побудова та супровід кіберзахисту: захист інфраструктури, IAM, моніторинг та реагування на інциденти",
          "about.svc5Tag1": "IAM",
          "about.svc5Tag2": "SOC",
          "about.svc5Tag3": "Аудит",
          "about.svc6Title": "Бізнес-застосунки",
          "about.svc6Desc": "Корпоративні веб- та мобільні застосунки для автоматизації бізнесу, Legal Tech та юридичні сервіси",
          "about.svc7Title": "Управління даними",
          "about.svc7Desc": "Рішення з управління даними та аналітики: інтеграція, зберігання, Data Lake, DWH, консалтинг",
          "about.svc8Title": "Інфраструктурні рішення",
          "about.svc8Desc": "Розвиток та супровід ІТ-інфраструктури: моніторинг, SLA, ITSM/ITIL-практики",
          "about.svc8Tag3": "Моніторинг",

          "about.innTitleA": "Інноваційні",
          "about.innTitleB": "R&D продукти",
          "about.innSub": "Рішення, розроблені нашою командою R&D",
          "about.inn1Name": "SPAIS <span class=\"inn-tag\">Computer Vision</span>",
          "about.inn1Desc": "Система промислової безпеки на базі комп'ютерного зору. Аналізує відеопотоки з камер спостереження на виробничих об'єктах для виявлення порушень техніки безпеки, контролю засобів захисту та моніторингу небезпечних зон у реальному часі.",
          "about.inn2Name": "Digital Legal Twin <span class=\"inn-tag\">AI / LLM</span>",
          "about.inn2Desc": "Корпоративний AI-асистент юриста. Об'єднує юридичні знання компанії з офіційними зовнішніми джерелами в одну систему на базі Microsoft.",
          "about.inn3Name": "MyOCR <span class=\"inn-tag\">IDP</span>",
          "about.inn3Desc": "Інтелектуальна платформа обробки документів. Обробляє 40 000+ сторінок на місяць на 7 підприємствах, зберігаючи 20 000+ годин на рік.",
          "about.inn4Name": "Vroomic <span class=\"inn-tag\">Logistics</span>",
          "about.inn4Desc": "Платформа оптимізації логістики. Геокодування адрес, планування оптимальних маршрутів доставки та моніторинг транспорту.",
          "about.inn5Name": "AI Translator <span class=\"inn-tag\">NLP</span>",
          "about.inn5Desc": "Корпоративний AI-перекладач. Швидкий переклад текстів та документів зі збереженням форматування, навчений на корпоративній термінології.",

          "about.partTitleA": "Екосистема",
          "about.partTitleB": "партнерів",
          "about.partSub": "Стратегічні партнерства з глобальними технологічними лідерами",
          "about.partGold": "Gold Partner",
          "about.partSilver": "Silver Partner",
          "about.partPartner": "Partner",
          "about.partPartner2": "Partner",
          "about.partPartner3": "Partner",

          "about.geoTitleA": "Географія",
          "about.geoTitleB": "присутності",
          "about.geoSub": "Обслуговуємо підприємства у 6 країнах",
          "about.geo1": "Україна",
          "about.geo2": "Італія",
          "about.geo3": "Польща",
          "about.geo4": "Болгарія",
          "about.geo5": "США",
          "about.geo6": "Великобританія"
        },
        en: {
          "doc.title.live": "Solutions Demo — Metinvest Digital",
          "doc.title.about": "About — Metinvest Digital",
          "brand.title": "Metinvest Digital",
          "hero.titleB": "Metinvest Digital",
          "footer.text": "Metinvest Digital 2026",

          "about.badge": "Metinvest Digital",
          "about.heroA": "About",
          "about.heroB": "Metinvest Digital",
          "about.heroSub": "We turn digital capabilities into a source of business value growth — from industrial automation to intelligent AI solutions",
          "about.whoTitle": "Who we are",
          "about.whoP1": "<strong>Metinvest Digital</strong> is a Ukrainian IT company specialising in digital transformation of large enterprises. Founded in 2018 as the sole IT business partner of the Metinvest Group.",
          "about.whoP2": "We design, deploy and support end-to-end IT solutions covering on-premises and cloud infrastructure, information systems, system integration, big data, industrial automation, cybersecurity and artificial intelligence.",
          "about.whoP3": "We serve more than 30 Metinvest plants across Ukraine, Italy, Poland, Bulgaria, the USA and the United Kingdom, as well as external clients in industry, telecom, banking and energy.",
          "about.missionTitle": "Our mission",
          "about.missionText": "To turn digital capabilities into a source of business value growth across the entire chain: processes — technologies — end users.",

          "about.statsTitleA": "Key",
          "about.statsTitleB": "facts & figures",
          "about.statsSub": "Results we are proud of",
          "about.stat1": "specialists",
          "about.stat2": "founded",
          "about.stat3": "countries of presence",
          "about.stat4": "Metinvest enterprises",
          "about.stat5": "services & systems",
          "about.stat6": "IT companies in Ukraine",

          "about.svcTitleA": "Key",
          "about.svcTitleB": "directions",
          "about.svcSub": "A full spectrum of End-to-End digital transformation solutions",
          "about.svc1Title": "SAP Solutions",
          "about.svc1Desc": "Integrated solutions for finance, manufacturing, logistics, HR — $52M+ of economic impact",
          "about.svc2Title": "Microsoft Solutions",
          "about.svc2Desc": "Migration of 30,000+ users to the cloud, management of 25,000+ PCs and 50,000 accounts",
          "about.svc3Title": "R&D and AI",
          "about.svc3Desc": "Research and rollout of innovative solutions based on ML/AI, Computer Vision and LLM",
          "about.svc4Title": "Cloud Solutions",
          "about.svc4Desc": "Implementation and support of IaaS, PaaS and SaaS cloud solutions for enterprise clients",
          "about.svc5Title": "Cybersecurity",
          "about.svc5Desc": "Building and supporting cyber defence: infrastructure protection, IAM, monitoring and incident response",
          "about.svc5Tag1": "IAM",
          "about.svc5Tag2": "SOC",
          "about.svc5Tag3": "Audit",
          "about.svc6Title": "Business Applications",
          "about.svc6Desc": "Corporate web and mobile apps for business automation, Legal Tech and legal services",
          "about.svc7Title": "Data Management",
          "about.svc7Desc": "Data management and analytics solutions: integration, storage, Data Lake, DWH, consulting",
          "about.svc8Title": "Infrastructure Solutions",
          "about.svc8Desc": "Development and support of IT infrastructure: monitoring, SLA, ITSM/ITIL practices",
          "about.svc8Tag3": "Monitoring",

          "about.innTitleA": "Innovative",
          "about.innTitleB": "R&D products",
          "about.innSub": "Solutions built by our in-house R&D team",
          "about.inn1Name": "SPAIS <span class=\"inn-tag\">Computer Vision</span>",
          "about.inn1Desc": "An industrial safety system based on computer vision. Analyses CCTV video streams at production sites to detect safety violations, control PPE compliance and monitor hazardous zones in real time.",
          "about.inn2Name": "Digital Legal Twin <span class=\"inn-tag\">AI / LLM</span>",
          "about.inn2Desc": "A corporate AI legal assistant. Combines the company's legal knowledge with official external sources in a single Microsoft-based system.",
          "about.inn3Name": "MyOCR <span class=\"inn-tag\">IDP</span>",
          "about.inn3Desc": "An intelligent document processing platform. Handles 40,000+ pages per month across 7 plants, saving 20,000+ hours per year.",
          "about.inn4Name": "Vroomic <span class=\"inn-tag\">Logistics</span>",
          "about.inn4Desc": "A logistics optimisation platform. Address geocoding, optimal delivery route planning and fleet monitoring.",
          "about.inn5Name": "AI Translator <span class=\"inn-tag\">NLP</span>",
          "about.inn5Desc": "A corporate AI translator. Fast translation of texts and documents while preserving formatting, trained on corporate terminology.",

          "about.partTitleA": "Partner",
          "about.partTitleB": "ecosystem",
          "about.partSub": "Strategic partnerships with global technology leaders",
          "about.partGold": "Gold Partner",
          "about.partSilver": "Silver Partner",
          "about.partPartner": "Partner",
          "about.partPartner2": "Partner",
          "about.partPartner3": "Partner",

          "about.geoTitleA": "Geography of",
          "about.geoTitleB": "presence",
          "about.geoSub": "We serve enterprises across 6 countries",
          "about.geo1": "Ukraine",
          "about.geo2": "Italy",
          "about.geo3": "Poland",
          "about.geo4": "Bulgaria",
          "about.geo5": "USA",
          "about.geo6": "United Kingdom"
        }
      },
      /* Values for the animated counters on the About page, in DOM order. */
      aboutStats: [
        { target: 800, suffix: "+" },
        { target: 2018 },
        { target: 6 },
        { target: 30, suffix: "+" },
        { target: 3000, suffix: "+" },
        { target: 5, prefix: "TOP-" }
      ]
    },

    /* ------------------------------------------------------------------
       "itp" — neutral white-label theme with a modern mobile-OS-style
       palette (iOS system blue) and fictional, vendor-neutral About Us
       content.
       ------------------------------------------------------------------ */
    itp: {
      label: "ITP",
      brand: "Information Technology Partner",
      footer: "Information Technology Partner 2026",
      i18n: {
        uk: {
          "doc.title.live": "Демо рішень Information Technology Partner",
          "doc.title.about": "Про нас — Information Technology Partner",
          "brand.title": "Information Technology Partner",
          "hero.titleB": "Information Technology Partner",
          "footer.text": "Information Technology Partner 2026",

          "about.badge": "Information Technology Partner",
          "about.heroA": "Про нас",
          "about.heroB": "Information Technology Partner",
          "about.heroSub": "Ми — команда інженерів і консультантів, яка допомагає бізнесу зростати завдяки сучасним, надійним та відповідальним цифровим технологіям",
          "about.whoTitle": "Хто ми",
          "about.whoP1": "<strong>Information Technology Partner</strong> — незалежна ІТ-компанія, що супроводжує організації на шляху цифрової трансформації. З 2012 року ми є технологічним партнером для середнього та великого бізнесу.",
          "about.whoP2": "Ми проєктуємо, впроваджуємо та підтримуємо ІТ-рішення: хмарну інфраструктуру, інформаційні системи, системну інтеграцію, аналітику даних, кібербезпеку та рішення на основі штучного інтелекту.",
          "about.whoP3": "Серед наших клієнтів — компанії з виробництва, рітейлу, фінансів, енергетики та агросектору в Україні та Європі. Ми будуємо довгострокові партнерства і дбаємо про сталий розвиток.",
          "about.missionTitle": "Наша місія",
          "about.missionText": "Допомагати компаніям досягати більшого з меншими витратами ресурсів — завдяки продуманим, надійним та екологічно відповідальним цифровим рішенням.",

          "about.statsTitleA": "Ключові",
          "about.statsTitleB": "факти та цифри",
          "about.statsSub": "Результати, якими ми пишаємося",
          "about.stat1": "спеціалістів",
          "about.stat2": "рік заснування",
          "about.stat3": "країн присутності",
          "about.stat4": "корпоративних клієнтів",
          "about.stat5": "реалізованих проєктів",
          "about.stat6": "задоволених клієнтів",

          "about.svcTitleA": "Ключові",
          "about.svcTitleB": "напрямки",
          "about.svcSub": "Повний спектр послуг для цифрової трансформації бізнесу",
          "about.svc1Title": "Рішення SAP",
          "about.svc1Desc": "Впровадження та розвиток ERP-рішень для фінансів, виробництва, логістики та HR",
          "about.svc2Title": "Рішення Microsoft",
          "about.svc2Desc": "Хмарні сервіси, корпоративні комунікації та середовища спільної роботи для розподілених команд",
          "about.svc3Title": "R&D та ШІ",
          "about.svc3Desc": "Дослідження та впровадження інноваційних рішень на базі ML/AI, Computer Vision, LLM",
          "about.svc4Title": "Хмарні рішення",
          "about.svc4Desc": "Міграція у хмару, побудова та підтримка рішень IaaS, PaaS, SaaS",
          "about.svc5Title": "Кібербезпека",
          "about.svc5Desc": "Захист інфраструктури, керування доступами, моніторинг та реагування на інциденти",
          "about.svc5Tag1": "IAM",
          "about.svc5Tag2": "SOC",
          "about.svc5Tag3": "Аудит",
          "about.svc6Title": "Бізнес-застосунки",
          "about.svc6Desc": "Корпоративні веб- та мобільні застосунки для автоматизації процесів і взаємодії з клієнтами",
          "about.svc7Title": "Управління даними",
          "about.svc7Desc": "Інтеграція та зберігання даних, аналітика, Data Lake, DWH та консалтинг",
          "about.svc8Title": "Інфраструктурні рішення",
          "about.svc8Desc": "Розвиток та супровід ІТ-інфраструктури: моніторинг, SLA, ITSM/ITIL-практики",
          "about.svc8Tag3": "Моніторинг",

          "about.innTitleA": "Інноваційні",
          "about.innTitleB": "R&D продукти",
          "about.innSub": "Власні продукти, створені нашою командою",
          "about.inn1Name": "GreenSight <span class=\"inn-tag\">Computer Vision</span>",
          "about.inn1Desc": "Система відеоаналітики для безпеки та контролю якості. Аналізує відеопотоки в реальному часі, допомагає запобігати інцидентам та зменшувати втрати на виробництві й складах.",
          "about.inn2Name": "LegalMate <span class=\"inn-tag\">AI / LLM</span>",
          "about.inn2Desc": "AI-асистент для юридичних команд. Поєднує внутрішню базу знань компанії із зовнішніми джерелами та пришвидшує підготовку документів.",
          "about.inn3Name": "PaperFlow <span class=\"inn-tag\">IDP</span>",
          "about.inn3Desc": "Платформа інтелектуальної обробки документів. Автоматизує класифікацію та витяг даних, звільняючи тисячі годин ручної праці щороку.",
          "about.inn4Name": "RouteWise <span class=\"inn-tag\">Logistics</span>",
          "about.inn4Desc": "Платформа оптимізації логістики. Геокодування адрес, планування оптимальних маршрутів доставки та моніторинг транспорту.",
          "about.inn5Name": "LinguaCore <span class=\"inn-tag\">NLP</span>",
          "about.inn5Desc": "Корпоративний AI-перекладач. Швидкий переклад текстів та документів зі збереженням форматування й галузевої термінології.",

          "about.partTitleA": "Екосистема",
          "about.partTitleB": "партнерів",
          "about.partSub": "Партнерства з провідними технологічними вендорами",
          "about.partGold": "Gold Partner",
          "about.partSilver": "Silver Partner",
          "about.partPartner": "Partner",
          "about.partPartner2": "Partner",
          "about.partPartner3": "Partner",

          "about.geoTitleA": "Географія",
          "about.geoTitleB": "присутності",
          "about.geoSub": "Працюємо з клієнтами у 6 країнах",
          "about.geo1": "Україна",
          "about.geo2": "Італія",
          "about.geo3": "Польща",
          "about.geo4": "Болгарія",
          "about.geo5": "США",
          "about.geo6": "Великобританія"
        },
        en: {
          "doc.title.live": "Solutions Demo — Information Technology Partner",
          "doc.title.about": "About — Information Technology Partner",
          "brand.title": "Information Technology Partner",
          "hero.titleB": "Information Technology Partner",
          "footer.text": "Information Technology Partner 2026",

          "about.badge": "Information Technology Partner",
          "about.heroA": "About",
          "about.heroB": "Information Technology Partner",
          "about.heroSub": "We are a team of engineers and consultants helping businesses grow through modern, reliable and responsible digital technologies",
          "about.whoTitle": "Who we are",
          "about.whoP1": "<strong>Information Technology Partner</strong> is an independent IT company guiding organisations through digital transformation. Since 2012 we have been a trusted technology partner for mid-size and large businesses.",
          "about.whoP2": "We design, implement and support IT solutions: cloud infrastructure, information systems, system integration, data analytics, cybersecurity and AI-powered solutions.",
          "about.whoP3": "Our clients include manufacturing, retail, finance, energy and agriculture companies across Ukraine and Europe. We build long-term partnerships and care about sustainable growth.",
          "about.missionTitle": "Our mission",
          "about.missionText": "To help companies achieve more while using fewer resources — through thoughtful, reliable and environmentally responsible digital solutions.",

          "about.statsTitleA": "Key",
          "about.statsTitleB": "facts & figures",
          "about.statsSub": "Results we are proud of",
          "about.stat1": "specialists",
          "about.stat2": "founded",
          "about.stat3": "countries of presence",
          "about.stat4": "corporate clients",
          "about.stat5": "delivered projects",
          "about.stat6": "client satisfaction",

          "about.svcTitleA": "Key",
          "about.svcTitleB": "directions",
          "about.svcSub": "A full range of services for business digital transformation",
          "about.svc1Title": "SAP Solutions",
          "about.svc1Desc": "Implementation and evolution of ERP solutions for finance, manufacturing, logistics and HR",
          "about.svc2Title": "Microsoft Solutions",
          "about.svc2Desc": "Cloud services, corporate communications and collaboration environments for distributed teams",
          "about.svc3Title": "R&D and AI",
          "about.svc3Desc": "Research and rollout of innovative solutions based on ML/AI, Computer Vision and LLM",
          "about.svc4Title": "Cloud Solutions",
          "about.svc4Desc": "Cloud migration, build-out and support of IaaS, PaaS and SaaS solutions",
          "about.svc5Title": "Cybersecurity",
          "about.svc5Desc": "Infrastructure protection, access management, monitoring and incident response",
          "about.svc5Tag1": "IAM",
          "about.svc5Tag2": "SOC",
          "about.svc5Tag3": "Audit",
          "about.svc6Title": "Business Applications",
          "about.svc6Desc": "Corporate web and mobile applications for process automation and customer engagement",
          "about.svc7Title": "Data Management",
          "about.svc7Desc": "Data integration and storage, analytics, Data Lake, DWH and consulting",
          "about.svc8Title": "Infrastructure Solutions",
          "about.svc8Desc": "Development and support of IT infrastructure: monitoring, SLA, ITSM/ITIL practices",
          "about.svc8Tag3": "Monitoring",

          "about.innTitleA": "Innovative",
          "about.innTitleB": "R&D products",
          "about.innSub": "Products built by our in-house team",
          "about.inn1Name": "GreenSight <span class=\"inn-tag\">Computer Vision</span>",
          "about.inn1Desc": "A video analytics system for safety and quality control. Analyses video streams in real time, helping prevent incidents and reduce losses at production sites and warehouses.",
          "about.inn2Name": "LegalMate <span class=\"inn-tag\">AI / LLM</span>",
          "about.inn2Desc": "An AI assistant for legal teams. Combines the company's internal knowledge base with external sources and speeds up document preparation.",
          "about.inn3Name": "PaperFlow <span class=\"inn-tag\">IDP</span>",
          "about.inn3Desc": "An intelligent document processing platform. Automates classification and data extraction, freeing up thousands of hours of manual work every year.",
          "about.inn4Name": "RouteWise <span class=\"inn-tag\">Logistics</span>",
          "about.inn4Desc": "A logistics optimisation platform. Address geocoding, optimal delivery route planning and fleet monitoring.",
          "about.inn5Name": "LinguaCore <span class=\"inn-tag\">NLP</span>",
          "about.inn5Desc": "A corporate AI translator. Fast translation of texts and documents while preserving formatting and industry terminology.",

          "about.partTitleA": "Partner",
          "about.partTitleB": "ecosystem",
          "about.partSub": "Partnerships with leading technology vendors",
          "about.partGold": "Gold Partner",
          "about.partSilver": "Silver Partner",
          "about.partPartner": "Partner",
          "about.partPartner2": "Partner",
          "about.partPartner3": "Partner",

          "about.geoTitleA": "Geography of",
          "about.geoTitleB": "presence",
          "about.geoSub": "We work with clients across 6 countries",
          "about.geo1": "Ukraine",
          "about.geo2": "Italy",
          "about.geo3": "Poland",
          "about.geo4": "Bulgaria",
          "about.geo5": "USA",
          "about.geo6": "United Kingdom"
        }
      },
      aboutStats: [
        { target: 250, suffix: "+" },
        { target: 2012 },
        { target: 6 },
        { target: 120, suffix: "+" },
        { target: 400, suffix: "+" },
        { target: 98, suffix: "%" }
      ]
    }
  };

  const STORAGE_KEY = "mdigital.theme";
  const DEFAULT_THEME = "itp";

  function resolveTheme() {
    try {
      const fromUrl = new URLSearchParams(window.location.search).get("theme");
      if (fromUrl && THEMES[fromUrl]) {
        try { localStorage.setItem(STORAGE_KEY, fromUrl); } catch (_) {}
        return fromUrl;
      }
    } catch (_) {}
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && THEMES[saved]) return saved;
    } catch (_) {}
    return DEFAULT_THEME;
  }

  const current = resolveTheme();
  /* Set the attribute as early as possible so CSS variables resolve
     before the first paint (this file is included in <head>). */
  document.documentElement.setAttribute("data-theme", current);

  window.SITE_THEMES = THEMES;
  window.SITE_THEME_NAME = current;
  window.SITE_THEME = THEMES[current];

  window.setSiteTheme = function (name) {
    if (!THEMES[name] || name === current) return;
    try { localStorage.setItem(STORAGE_KEY, name); } catch (_) {}
    /* Reload so every themed piece (counters, titles, colours) is rebuilt
       consistently; the theme param keeps the choice for shared links. */
    const url = new URL(window.location.href);
    url.searchParams.set("theme", name);
    window.location.href = url.toString();
  };

  /* Branding for pages that do not run the shared shell i18n
     (the solution demo pages): swap the company name in the suite
     topbar and themed footers. Solution logic is never touched. */
  document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".brand-title, .md-brand-title").forEach(function (el) {
      el.textContent = THEMES[current].brand;
    });
    document.querySelectorAll("[data-brand-footer]").forEach(function (el) {
      el.textContent = THEMES[current].footer;
    });
  });
})();
