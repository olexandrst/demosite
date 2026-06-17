// Static UI strings for the Legal AI Assistant demo chrome (uk + en).
// Consumed by i18n.js: each key is looked up in window.LEGAL_UI_STATIC[lang][key]
// and applied to elements carrying data-i18n / data-i18n-placeholder / data-i18n-title.
// Values containing a '<' are applied as innerHTML; otherwise as textContent.
window.LEGAL_UI_STATIC = {
  uk: {
    // --- Buttons (shared) ---
    "btn.close": "Закрити",
    "btn.back": "Назад",
    "btn.addFavorite": "Додати в обране",
    "btn.helpful": "Корисно",
    "btn.notHelpful": "Не корисно",
    "btn.escalateToLawyer": "<i class=\"fas fa-user-tie\"></i> Направити запит юристу",
    "btn.newQuestion": "<i class=\"fas fa-plus\"></i> Нове питання",
    "btn.assign": "<i class=\"fas fa-user-plus\"></i> Призначити",
    "btn.resolve": "<i class=\"fas fa-check\"></i> Вирішити",
    "btn.attachFile": "<i class=\"fas fa-paperclip\"></i> Прикріпити файл",
    "btn.sendReply": "<i class=\"fas fa-paper-plane\"></i> Надіслати відповідь",
    "btn.addSource": "<i class=\"fas fa-plus\"></i> Додати джерело",
    "btn.changePassword": "Змінити пароль",
    "btn.goToHome": "<i class=\"fas fa-home\"></i> <span>Перейти на головну</span>",
    "btn.cancel": "Скасувати",
    "btn.add": "Додати",

    // --- Notifications ---
    "notif.title": "Сповіщення",
    "notif.markAll": "Позначити всі як прочитані",
    "notif.item1": "Новий тікет від <strong>Іван Коваленко</strong> потребує розгляду",
    "notif.time1": "10 хвилин тому",
    "notif.item2": "ШІ класифікував <strong>3 нових тікети</strong> до категорії \"Трудові відносини\"",
    "notif.time2": "25 хвилин тому",
    "notif.item3": "Термін відповіді на тікет <strong>#TK-2026-0089</strong> спливає через 2 години",
    "notif.time3": "1 годину тому",
    "notif.item4": "Комплаєнс-перевірка для <strong>ТОВ \"АГРО-ПРО\"</strong> завершена",
    "notif.time4": "Вчора, 18:45",
    "notif.item5": "Джерело даних <strong>\"Реєстр судових рішень\"</strong> оновлено",
    "notif.time5": "Вчора, 14:20",
    "notif.viewAll": "Переглянути всі сповіщення",

    // --- Settings ---
    "settings.titleAttr": "Налаштування та профіль",
    "settings.darkTheme": "Темна тема",
    "settings.language": "Мова інтерфейсу",
    "settings.emailNotif": "Сповіщення на пошту",
    "settings.twoFactor": "Двофакторна автентифікація",

    // --- Profile ---
    "profile.name": "Олена Петренко",
    "profile.deptBadge": "<i class=\"fas fa-shield-alt\"></i> Юридичний відділ",
    "profile.deptCard": "<i class=\"fas fa-building\"></i> Юридичний відділ",
    "profile.role": "Старший юрисконсульт",
    "profile.menuMyProfile": "Мій профіль",
    "profile.menuHelp": "Довідка",
    "profile.menuLogout": "Вийти з системи",
    "profile.nav.personal": "<i class=\"fas fa-user\"></i> Особисті дані",
    "profile.nav.security": "<i class=\"fas fa-lock\"></i> Безпека",
    "profile.nav.preferences": "<i class=\"fas fa-sliders-h\"></i> Налаштування",
    "profile.personalTitle": "Особисті дані",
    "profile.field.lastName": "Прізвище",
    "profile.field.firstName": "Ім'я",
    "profile.value.lastName": "Петренко",
    "profile.value.firstName": "Олена",
    "profile.avatarSettings": "https://ui-avatars.com/api/?name=Олена+Петренко&background=e31e24&color=fff&size=80",
    "profile.avatarCard": "https://ui-avatars.com/api/?name=Олена+Петренко&background=e31e24&color=fff&size=120",
    "profile.field.phone": "Телефон",
    "profile.securityTitle": "Безпека",
    "profile.passwordTitle": "<i class=\"fas fa-key\"></i> Пароль",
    "profile.passwordUpdated": "Останнє оновлення: 15 грудня 2025",
    "profile.preferencesTitle": "Налаштування",
    "profile.themeTitle": "Тема оформлення",
    "profile.themeLight": "Світла",
    "profile.themeDark": "Темна",

    // --- Home ---
    "home.subtitle": "Оберіть категорію для початку роботи з ШІ-асистентом",
    "home.tile1.title": "Клієнтам юридичної служби",
    "home.tile1.desc": "Пошук відповідей на юридичні питання для клієнтів юридичної служби",
    "home.tile1.stat1": "<i class=\"fas fa-robot\"></i> ШІ-асистент",
    "home.tile1.stat2": "<i class=\"fas fa-book\"></i> База знань",
    "home.tile2.title": "Кабінет юриста",
    "home.tile2.desc": "Управління тікетами, диспетчеризація звернень та налаштування джерел даних",
    "home.tile2.stat1": "<i class=\"fas fa-ticket-alt\"></i> 12 активних",
    "home.tile2.stat2": "<i class=\"fas fa-clock\"></i> 3 термінових",
    "home.tile3.title": "Кабінети інших підрозділів",
    "home.tile3.desc": "Спеціалізовані інструменти для суміжних підрозділів компанії",
    "home.tile3.stat1": "<i class=\"fas fa-users-cog\"></i> 3 модулі",
    "home.tile3.stat2": "<i class=\"fas fa-chart-line\"></i> Аналітика",
    "home.stat1.value": "2.5 сек",
    "home.stat1.label": "Середній час відповіді ШІ",
    "home.stat2.label": "Точність класифікації",
    "home.stat3.label": "Оброблено тікетів сьогодні",

    // --- AI Agent screen (1.1) ---
    "screen.aiAgent.title": "<i class=\"fas fa-robot\"></i> Поставити питання ШІ агенту",
    "screen.aiAgent.prompt": "Сформулюйте питання на яке має відповісти ШІ агент замість юридичної служби:",
    "screen.aiAgent.placeholder": "Сформулюйте питання на яке має відповісти ШІ агент замість юридичної служби...",
    "screen.aiAgent.examplesTitle": "<i class=\"fas fa-lightbulb\"></i> Приклади питань:",
    "screen.aiAgent.example1": "Чи може працівник вільно обирати банк для отримання заробітної плати?",
    "screen.aiAgent.example2": "Чи має право банк примусово оформити кредитну картку до заробітної плати працівника?",
    "screen.aiAgent.example3": "Чи має банк право контролювати напрям використання грошових коштів клієнта?",
    "screen.aiAgent.answerLabel": "Відповідь ШІ-агента",

    // --- Internal Documents screen (1.2) ---
    "screen.internalDocs.title": "<i class=\"fas fa-folder-open\"></i> Пошук по внутрішніх документах. База локальних регламентуючих документів",
    "screen.internalDocs.placeholder": "Робота в контексті документів підрозділу",
    "screen.internalDocs.example": "Наприклад: Які вимоги до документу з Бізнес-вимогами",
    "screen.internalDocs.resultsTitle": "<i class=\"fas fa-list-ul\"></i> Результати пошуку",

    // --- Knowledge Base screen (1.3) ---
    "screen.knowledgeBase.title": "<i class=\"fas fa-book\"></i> Пошук по базі юридичних знань",
    "screen.knowledgeBase.placeholder": "Пошук у базі знань...",
    "faq.cat.all": "Всі",
    "faq.cat.labor": "Трудове право",
    "faq.cat.contracts": "Договори",
    "faq.cat.corporate": "Корпоративне",
    "faq.cat.compliance": "Комплаєнс",

    // --- My Tickets screen (2.1) ---
    "screen.myTickets.title": "<i class=\"fas fa-ticket-alt\"></i> Мої тікети",
    "ticket.stat.all": "Всього",
    "ticket.stat.new": "Нових",
    "ticket.stat.inProgress": "В роботі",
    "ticket.stat.waiting": "Очікують",
    "ticket.stat.resolved": "Вирішених",

    // --- Ticket detail ---
    "ticket.backToList": "До списку тікетів",
    "ticket.replyTitle": "Відповісти на звернення",
    "ticket.replyPlaceholder": "Введіть вашу відповідь...",

    // --- Dispatcher screen (2.2) ---
    "screen.dispatcher.title": "<i class=\"fas fa-random\"></i> Диспетчер тікетів",
    "screen.dispatcher.bannerTitle": "Автоматична класифікація ШІ",
    "screen.dispatcher.bannerDesc": "Система автоматично аналізує та розподіляє вхідні звернення за категоріями",
    "screen.dispatcher.stat1": "<i class=\"fas fa-check-circle\"></i> 156 класифіковано сьогодні",
    "screen.dispatcher.stat2": "<i class=\"fas fa-percentage\"></i> 98.7% точність",

    // --- Data Sources screen (2.3) ---
    "screen.dataSources.title": "<i class=\"fas fa-database\"></i> Джерела даних",
    "screen.dataSources.internal": "<i class=\"fas fa-building\"></i> Внутрішні джерела",
    "screen.dataSources.external": "<i class=\"fas fa-globe\"></i> Зовнішні джерела",

    // --- HR Dashboard (3.1) ---
    "screen.hr.title": "<i class=\"fas fa-users\"></i> HR та рекрутинг",
    "hr.stat.total": "Загальна кількість працівників",
    "hr.stat.newThisMonth": "Нових цього місяця",
    "hr.stat.openVacancies": "Відкритих вакансій",
    "hr.stat.dismissals": "Звільнень цього місяця",
    "hr.deptChartTitle": "<i class=\"fas fa-chart-pie\"></i> Розподіл за підрозділами",
    "hr.vacanciesTitle": "<i class=\"fas fa-clipboard-list\"></i> Активні вакансії",
    "hr.applicants12": "12 кандидатів",
    "hr.applicants28": "28 кандидатів",
    "hr.applicants8": "8 кандидатів",

    // --- Departments (shared) ---
    "dept.legal": "Юридичний відділ",
    "dept.it": "IT департамент",
    "dept.finance": "Фінанси",
    "dept.hr": "HR",
    "dept.production": "Виробництво",
    "dept.other": "Інші",

    // --- Finance (3.2) ---
    "screen.finance.title": "<i class=\"fas fa-chart-line\"></i> Фінанси",
    "finance.stat.income": "Дохід за місяць",
    "finance.stat.expenses": "Витрати за місяць",
    "finance.stat.profit": "Чистий прибуток",
    "finance.stat.invoices": "Рахунків до оплати",
    "finance.transactionsTitle": "<i class=\"fas fa-file-invoice\"></i> Останні транзакції",
    "finance.col.date": "Дата",
    "finance.col.description": "Опис",
    "finance.col.counterparty": "Контрагент",
    "finance.col.amount": "Сума",
    "finance.col.status": "Статус",
    "finance.tx1.desc": "Оплата за послуги",
    "finance.tx1.party": "ТОВ \"Консалт Груп\"",
    "finance.tx2.desc": "Надходження за договором",
    "finance.tx2.party": "АТ \"Укрбуд\"",
    "finance.tx3.desc": "Орендна плата",
    "finance.tx3.party": "ТОВ \"Бізнес Центр\"",
    "finance.tx4.desc": "Заробітна плата",
    "finance.tx4.party": "Працівники",
    "finance.status.paid": "Сплачено",
    "finance.status.received": "Отримано",
    "finance.status.pending": "Очікує",

    // --- Procurement (3.3) ---
    "screen.procurement.title": "<i class=\"fas fa-shopping-cart\"></i> Закупівлі",
    "procurement.stat.activeTenders": "Активних тендерів",
    "procurement.stat.suppliers": "Постачальників",
    "procurement.stat.awaitingApproval": "Очікують погодження",
    "procurement.stat.awaitingDelivery": "Очікують поставки",
    "procurement.tendersTitle": "<i class=\"fas fa-gavel\"></i> Активні тендери",
    "procurement.tender1.title": "Закупівля IT обладнання",
    "procurement.tender1.deadline": "До 15.02.2026",
    "procurement.tender2.title": "Канцелярські товари на 2026",
    "procurement.tender2.deadline": "До 20.02.2026",
    "procurement.tender3.title": "Послуги з охорони",
    "procurement.tender3.deadline": "До 28.02.2026",
    "procurement.suppliersTitle": "<i class=\"fas fa-users\"></i> Топ постачальники",
    "procurement.supplier1.name": "ТОВ \"СФЕРА-М\"",
    "procurement.supplier1.category": "Засоби захисту",
    "procurement.supplier2.name": "АТ \"ТехноПостач\"",
    "procurement.supplier2.category": "IT обладнання",
    "procurement.supplier3.name": "ТОВ \"Офіс-Сервіс\"",
    "procurement.supplier3.category": "Канцелярія",

    // --- Document detail ---
    "doc.backToResults": "До результатів",
    "doc.goToSource": "Перейти до джерела",

    // --- Favorites ---
    "screen.favorites.title": "<i class=\"fas fa-star\"></i> Обране",
    "favorites.emptyTitle": "Немає обраних розділів",
    "favorites.emptyDesc": "Додайте розділи в обране, натиснувши на зірочку на головній сторінці",

    // --- History ---
    "screen.history.title": "<i class=\"fas fa-history\"></i> Історія активності",
    "history.date1": "Сьогодні, 3 лютого 2026",
    "history.item1.title": "Запит до ШІ: \"Чи може працівник обирати банк для зарплати\"",
    "history.item1.meta": "Поставити питання ШІ агенту • Отримано відповідь",
    "history.item2.title": "Відповідь на тікет #TK-2026-0087",
    "history.item2.meta": "Мої тікети • Трудові відносини",

    // --- Chat widget ---
    "chat.title": "AI Асистент",
    "chat.greeting": "Вітаю! Я ваш AI асистент. Чим можу допомогти?",
    "chat.placeholder": "Введіть повідомлення...",

    // --- Add Source modal ---
    "modal.addSource.title": "Додати джерело даних",
    "modal.addSource.nameLabel": "Назва джерела",
    "modal.addSource.namePlaceholder": "Введіть назву...",
    "modal.addSource.typeLabel": "Тип джерела",
    "modal.addSource.typeInternal": "Внутрішнє",
    "modal.addSource.typeExternal": "Зовнішнє",
    "modal.addSource.urlLabel": "URL або шлях",
    "modal.addSource.urlPlaceholder": "https:// або //sharepoint/...",

    // --- Loading ---
    "loading.analyzing": "Аналізуємо запит..."
  },
  en: {
    // --- Buttons (shared) ---
    "btn.close": "Close",
    "btn.back": "Back",
    "btn.addFavorite": "Add to favorites",
    "btn.helpful": "Helpful",
    "btn.notHelpful": "Not helpful",
    "btn.escalateToLawyer": "<i class=\"fas fa-user-tie\"></i> Forward request to a lawyer",
    "btn.newQuestion": "<i class=\"fas fa-plus\"></i> New question",
    "btn.assign": "<i class=\"fas fa-user-plus\"></i> Assign",
    "btn.resolve": "<i class=\"fas fa-check\"></i> Resolve",
    "btn.attachFile": "<i class=\"fas fa-paperclip\"></i> Attach file",
    "btn.sendReply": "<i class=\"fas fa-paper-plane\"></i> Send reply",
    "btn.addSource": "<i class=\"fas fa-plus\"></i> Add source",
    "btn.changePassword": "Change password",
    "btn.goToHome": "<i class=\"fas fa-home\"></i> <span>Go to home</span>",
    "btn.cancel": "Cancel",
    "btn.add": "Add",

    // --- Notifications ---
    "notif.title": "Notifications",
    "notif.markAll": "Mark all as read",
    "notif.item1": "New ticket from <strong>Ivan Kovalenko</strong> requires review",
    "notif.time1": "10 minutes ago",
    "notif.item2": "AI classified <strong>3 new tickets</strong> under the \"Labor Relations\" category",
    "notif.time2": "25 minutes ago",
    "notif.item3": "Response deadline for ticket <strong>#TK-2026-0089</strong> expires in 2 hours",
    "notif.time3": "1 hour ago",
    "notif.item4": "Compliance check for <strong>AGRO-PRO LLC</strong> completed",
    "notif.time4": "Yesterday, 18:45",
    "notif.item5": "Data source <strong>\"Court Decisions Register\"</strong> updated",
    "notif.time5": "Yesterday, 14:20",
    "notif.viewAll": "View all notifications",

    // --- Settings ---
    "settings.titleAttr": "Settings and profile",
    "settings.darkTheme": "Dark theme",
    "settings.language": "Interface language",
    "settings.emailNotif": "Email notifications",
    "settings.twoFactor": "Two-factor authentication",

    // --- Profile ---
    "profile.name": "Olena Petrenko",
    "profile.deptBadge": "<i class=\"fas fa-shield-alt\"></i> Legal Department",
    "profile.deptCard": "<i class=\"fas fa-building\"></i> Legal Department",
    "profile.role": "Senior Legal Counsel",
    "profile.menuMyProfile": "My profile",
    "profile.menuHelp": "Help",
    "profile.menuLogout": "Log out",
    "profile.nav.personal": "<i class=\"fas fa-user\"></i> Personal data",
    "profile.nav.security": "<i class=\"fas fa-lock\"></i> Security",
    "profile.nav.preferences": "<i class=\"fas fa-sliders-h\"></i> Settings",
    "profile.personalTitle": "Personal data",
    "profile.field.lastName": "Last name",
    "profile.field.firstName": "First name",
    "profile.value.lastName": "Petrenko",
    "profile.value.firstName": "Olena",
    "profile.avatarSettings": "https://ui-avatars.com/api/?name=Olena+Petrenko&background=e31e24&color=fff&size=80",
    "profile.avatarCard": "https://ui-avatars.com/api/?name=Olena+Petrenko&background=e31e24&color=fff&size=120",
    "profile.field.phone": "Phone",
    "profile.securityTitle": "Security",
    "profile.passwordTitle": "<i class=\"fas fa-key\"></i> Password",
    "profile.passwordUpdated": "Last updated: 15 December 2025",
    "profile.preferencesTitle": "Settings",
    "profile.themeTitle": "Appearance theme",
    "profile.themeLight": "Light",
    "profile.themeDark": "Dark",

    // --- Home ---
    "home.subtitle": "Choose a category to start working with the AI assistant",
    "home.tile1.title": "For legal service clients",
    "home.tile1.desc": "Search for answers to legal questions for legal service clients",
    "home.tile1.stat1": "<i class=\"fas fa-robot\"></i> AI assistant",
    "home.tile1.stat2": "<i class=\"fas fa-book\"></i> Knowledge base",
    "home.tile2.title": "Lawyer's cabinet",
    "home.tile2.desc": "Ticket management, request dispatching and data source configuration",
    "home.tile2.stat1": "<i class=\"fas fa-ticket-alt\"></i> 12 active",
    "home.tile2.stat2": "<i class=\"fas fa-clock\"></i> 3 urgent",
    "home.tile3.title": "Cabinets of other departments",
    "home.tile3.desc": "Specialized tools for the company's adjacent departments",
    "home.tile3.stat1": "<i class=\"fas fa-users-cog\"></i> 3 modules",
    "home.tile3.stat2": "<i class=\"fas fa-chart-line\"></i> Analytics",
    "home.stat1.value": "2.5 sec",
    "home.stat1.label": "Average AI response time",
    "home.stat2.label": "Classification accuracy",
    "home.stat3.label": "Tickets processed today",

    // --- AI Agent screen (1.1) ---
    "screen.aiAgent.title": "<i class=\"fas fa-robot\"></i> Ask the AI agent a question",
    "screen.aiAgent.prompt": "Formulate a question for the AI agent to answer instead of the legal service:",
    "screen.aiAgent.placeholder": "Formulate a question for the AI agent to answer instead of the legal service...",
    "screen.aiAgent.examplesTitle": "<i class=\"fas fa-lightbulb\"></i> Example questions:",
    "screen.aiAgent.example1": "Can an employee freely choose a bank to receive their salary?",
    "screen.aiAgent.example2": "Does a bank have the right to forcibly issue a credit card linked to an employee's salary?",
    "screen.aiAgent.example3": "Does a bank have the right to control how a client uses their funds?",
    "screen.aiAgent.answerLabel": "AI agent's answer",

    // --- Internal Documents screen (1.2) ---
    "screen.internalDocs.title": "<i class=\"fas fa-folder-open\"></i> Search internal documents. Database of local regulatory documents",
    "screen.internalDocs.placeholder": "Work in the context of department documents",
    "screen.internalDocs.example": "For example: What are the requirements for a Business Requirements document",
    "screen.internalDocs.resultsTitle": "<i class=\"fas fa-list-ul\"></i> Search results",

    // --- Knowledge Base screen (1.3) ---
    "screen.knowledgeBase.title": "<i class=\"fas fa-book\"></i> Search the legal knowledge base",
    "screen.knowledgeBase.placeholder": "Search the knowledge base...",
    "faq.cat.all": "All",
    "faq.cat.labor": "Labor law",
    "faq.cat.contracts": "Contracts",
    "faq.cat.corporate": "Corporate",
    "faq.cat.compliance": "Compliance",

    // --- My Tickets screen (2.1) ---
    "screen.myTickets.title": "<i class=\"fas fa-ticket-alt\"></i> My tickets",
    "ticket.stat.all": "Total",
    "ticket.stat.new": "New",
    "ticket.stat.inProgress": "In progress",
    "ticket.stat.waiting": "Waiting",
    "ticket.stat.resolved": "Resolved",

    // --- Ticket detail ---
    "ticket.backToList": "Back to ticket list",
    "ticket.replyTitle": "Reply to the request",
    "ticket.replyPlaceholder": "Enter your reply...",

    // --- Dispatcher screen (2.2) ---
    "screen.dispatcher.title": "<i class=\"fas fa-random\"></i> Ticket dispatcher",
    "screen.dispatcher.bannerTitle": "Automatic AI classification",
    "screen.dispatcher.bannerDesc": "The system automatically analyzes and routes incoming requests by category",
    "screen.dispatcher.stat1": "<i class=\"fas fa-check-circle\"></i> 156 classified today",
    "screen.dispatcher.stat2": "<i class=\"fas fa-percentage\"></i> 98.7% accuracy",

    // --- Data Sources screen (2.3) ---
    "screen.dataSources.title": "<i class=\"fas fa-database\"></i> Data sources",
    "screen.dataSources.internal": "<i class=\"fas fa-building\"></i> Internal sources",
    "screen.dataSources.external": "<i class=\"fas fa-globe\"></i> External sources",

    // --- HR Dashboard (3.1) ---
    "screen.hr.title": "<i class=\"fas fa-users\"></i> HR and recruiting",
    "hr.stat.total": "Total number of employees",
    "hr.stat.newThisMonth": "New this month",
    "hr.stat.openVacancies": "Open vacancies",
    "hr.stat.dismissals": "Dismissals this month",
    "hr.deptChartTitle": "<i class=\"fas fa-chart-pie\"></i> Distribution by department",
    "hr.vacanciesTitle": "<i class=\"fas fa-clipboard-list\"></i> Active vacancies",
    "hr.applicants12": "12 candidates",
    "hr.applicants28": "28 candidates",
    "hr.applicants8": "8 candidates",

    // --- Departments (shared) ---
    "dept.legal": "Legal Department",
    "dept.it": "IT Department",
    "dept.finance": "Finance",
    "dept.hr": "HR",
    "dept.production": "Production",
    "dept.other": "Other",

    // --- Finance (3.2) ---
    "screen.finance.title": "<i class=\"fas fa-chart-line\"></i> Finance",
    "finance.stat.income": "Income for the month",
    "finance.stat.expenses": "Expenses for the month",
    "finance.stat.profit": "Net profit",
    "finance.stat.invoices": "Invoices to pay",
    "finance.transactionsTitle": "<i class=\"fas fa-file-invoice\"></i> Recent transactions",
    "finance.col.date": "Date",
    "finance.col.description": "Description",
    "finance.col.counterparty": "Counterparty",
    "finance.col.amount": "Amount",
    "finance.col.status": "Status",
    "finance.tx1.desc": "Payment for services",
    "finance.tx1.party": "Consult Group LLC",
    "finance.tx2.desc": "Receipt under contract",
    "finance.tx2.party": "Ukrbud JSC",
    "finance.tx3.desc": "Rent payment",
    "finance.tx3.party": "Business Center LLC",
    "finance.tx4.desc": "Salary",
    "finance.tx4.party": "Employees",
    "finance.status.paid": "Paid",
    "finance.status.received": "Received",
    "finance.status.pending": "Pending",

    // --- Procurement (3.3) ---
    "screen.procurement.title": "<i class=\"fas fa-shopping-cart\"></i> Procurement",
    "procurement.stat.activeTenders": "Active tenders",
    "procurement.stat.suppliers": "Suppliers",
    "procurement.stat.awaitingApproval": "Awaiting approval",
    "procurement.stat.awaitingDelivery": "Awaiting delivery",
    "procurement.tendersTitle": "<i class=\"fas fa-gavel\"></i> Active tenders",
    "procurement.tender1.title": "IT equipment procurement",
    "procurement.tender1.deadline": "Until 15.02.2026",
    "procurement.tender2.title": "Office supplies for 2026",
    "procurement.tender2.deadline": "Until 20.02.2026",
    "procurement.tender3.title": "Security services",
    "procurement.tender3.deadline": "Until 28.02.2026",
    "procurement.suppliersTitle": "<i class=\"fas fa-users\"></i> Top suppliers",
    "procurement.supplier1.name": "SFERA-M LLC",
    "procurement.supplier1.category": "Protective equipment",
    "procurement.supplier2.name": "TechnoPostach JSC",
    "procurement.supplier2.category": "IT equipment",
    "procurement.supplier3.name": "Office-Service LLC",
    "procurement.supplier3.category": "Stationery",

    // --- Document detail ---
    "doc.backToResults": "Back to results",
    "doc.goToSource": "Go to source",

    // --- Favorites ---
    "screen.favorites.title": "<i class=\"fas fa-star\"></i> Favorites",
    "favorites.emptyTitle": "No favorite sections",
    "favorites.emptyDesc": "Add sections to favorites by clicking the star on the home page",

    // --- History ---
    "screen.history.title": "<i class=\"fas fa-history\"></i> Activity history",
    "history.date1": "Today, 3 February 2026",
    "history.item1.title": "AI query: \"Can an employee choose a bank for their salary\"",
    "history.item1.meta": "Ask the AI agent a question • Answer received",
    "history.item2.title": "Reply to ticket #TK-2026-0087",
    "history.item2.meta": "My tickets • Labor relations",

    // --- Chat widget ---
    "chat.title": "AI Assistant",
    "chat.greeting": "Hello! I am your AI assistant. How can I help?",
    "chat.placeholder": "Enter a message...",

    // --- Add Source modal ---
    "modal.addSource.title": "Add a data source",
    "modal.addSource.nameLabel": "Source name",
    "modal.addSource.namePlaceholder": "Enter a name...",
    "modal.addSource.typeLabel": "Source type",
    "modal.addSource.typeInternal": "Internal",
    "modal.addSource.typeExternal": "External",
    "modal.addSource.urlLabel": "URL or path",
    "modal.addSource.urlPlaceholder": "https:// or //sharepoint/...",

    // --- Loading ---
    "loading.analyzing": "Analyzing request..."
  }
};
