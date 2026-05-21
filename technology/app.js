// ===== Configuration (hidden from UI) =====
const API_ENDPOINT = 'https://mih-sc-cnt-iuic-p-aif-01.cognitiveservices.azure.com/anthropic';
const MODEL_NAME = 'claude-opus-4-6-2';

// ===== i18n =====
const I18N = {
    uk: {
        title: 'Автоматизація Технологій — Прототип v0.8.46',
        brand1: 'Автоматизація',
        brand2: 'Технологій',
        version: 'Прототип. Версія 0.8.46',
        step1: 'Ключ API',
        step2: 'Завантаження креслення',
        step3: 'Обробка',
        apiKeyPlaceholder: 'Введіть ваш API ключ...',
        toggleKeyTitle: 'Показати/приховати ключ',
        drawing: 'Креслення',
        processBtn: 'Запустити обробку',
        processing: 'Обробка...',
        resultReady: 'Результат готовий',
        preview: 'Переглянути',
        download: 'Завантажити',
        invalidFormat: 'Непідтримуваний формат. Використовуйте PDF, JPG, PNG або TIFF.',
        promptLoadError: 'Не вдалося завантажити файл промпта.',
        apiNoResults: 'API не повернув результатів.',
        errorPrefix: 'Помилка: ',
        downloaded: 'Файл завантажено!',
        progress: [
            { at: 0, text: 'Формування пакету даних...' },
            { at: 12, text: 'Ініціалізація моделі ШІ...' },
            { at: 25, text: 'Надсилання запиту...' },
            { at: 40, text: 'Аналіз креслення...' },
            { at: 60, text: 'Генерація технологічного процесу...' },
            { at: 80, text: 'Отримання результату...' },
        ],
        completed: 'Завершено!',
        systemPrompt: 'Ти - супер крутий досвідчений технолог ливарно-механічного заводу. Завжди відповідай у форматі HTML з використанням тегів <h1>, <h2>, <h3>, <table>, <p>, <ul>, <ol>, <strong>, <em> тощо. Ніколи не використовуй Markdown-розмітку. Результат має бути готовим HTML-контентом для вставки у <body>.',
        resultTitle: 'Результат аналізу',
        resultDocLang: 'uk',
        drawingSuffixRegex: /\s*-\s*Креслення$/i,
        promptFile: 'prompt.txt',
    },
    en: {
        title: 'Process Automation — Prototype v0.8.46',
        brand1: 'Process',
        brand2: 'Automation',
        version: 'Prototype. Version 0.8.46',
        step1: 'API Key',
        step2: 'Upload Drawing',
        step3: 'Processing',
        apiKeyPlaceholder: 'Enter your API key...',
        toggleKeyTitle: 'Show/hide key',
        drawing: 'Drawing',
        processBtn: 'Run Processing',
        processing: 'Processing...',
        resultReady: 'Result is ready',
        preview: 'Preview',
        download: 'Download',
        invalidFormat: 'Unsupported format. Use PDF, JPG, PNG or TIFF.',
        promptLoadError: 'Failed to load the prompt file.',
        apiNoResults: 'API returned no results.',
        errorPrefix: 'Error: ',
        downloaded: 'File downloaded!',
        progress: [
            { at: 0, text: 'Building data package...' },
            { at: 12, text: 'Initializing AI model...' },
            { at: 25, text: 'Sending request...' },
            { at: 40, text: 'Analyzing drawing...' },
            { at: 60, text: 'Generating manufacturing process...' },
            { at: 80, text: 'Receiving result...' },
        ],
        completed: 'Done!',
        systemPrompt: 'You are a top-tier, highly experienced manufacturing process engineer at a foundry and machine-building plant. Always respond in HTML format using tags <h1>, <h2>, <h3>, <table>, <p>, <ul>, <ol>, <strong>, <em>, etc. Never use Markdown. The result must be ready-to-insert HTML content for the <body>.',
        resultTitle: 'Analysis Result',
        resultDocLang: 'en',
        drawingSuffixRegex: /\s*-\s*(Drawing|Креслення)$/i,
        promptFile: 'prompt_en.txt',
    },
};

let currentLang = localStorage.getItem('lang') || 'uk';
let promptText = '';

// ===== DOM Elements =====
const apiKeyInput = document.getElementById('apiKey');
const toggleApiKeyBtn = document.getElementById('toggleApiKey');
const drawingZone = document.getElementById('drawingZone');
const drawingFileInput = document.getElementById('drawingFile');
const drawingNameEl = document.getElementById('drawingName');
const processBtn = document.getElementById('processBtn');
const progressSection = document.getElementById('progressSection');
const progressFill = document.getElementById('progressFill');
const progressText = document.getElementById('progressText');
const progressPercent = document.getElementById('progressPercent');
const resultActions = document.getElementById('resultActions');
const previewBtn = document.getElementById('previewBtn');
const downloadBtn = document.getElementById('downloadBtn');
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');
const langButtons = document.querySelectorAll('.lang-switcher__btn');

// ===== State =====
let drawingFile = null;
let aiResultHtml = '';

// ===== Apply translations =====
function t(key) {
    return I18N[currentLang][key];
}

function applyTranslations() {
    document.documentElement.lang = currentLang;
    document.title = t('title');

    document.querySelectorAll('[data-i18n]').forEach((el) => {
        const key = el.getAttribute('data-i18n');
        if (I18N[currentLang][key] !== undefined) {
            el.textContent = I18N[currentLang][key];
        }
    });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((el) => {
        const key = el.getAttribute('data-i18n-placeholder');
        el.placeholder = I18N[currentLang][key];
    });
    document.querySelectorAll('[data-i18n-title]').forEach((el) => {
        const key = el.getAttribute('data-i18n-title');
        el.title = I18N[currentLang][key];
    });

    // Update lang switcher visual
    langButtons.forEach((btn) => {
        const isActive = btn.dataset.lang === currentLang;
        btn.setAttribute('aria-pressed', String(isActive));
        btn.classList.toggle('is-active', isActive);
    });
    const switcher = document.querySelector('.lang-switcher');
    if (switcher) {
        switcher.dataset.lang = currentLang;
    }
}

function loadPrompt() {
    const source = currentLang === 'en' ? window.PROMPT_EN : window.PROMPT_UK;
    if (typeof source === 'string' && source.length > 0) {
        promptText = source;
    } else {
        promptText = '';
        showToast(t('promptLoadError'));
        console.error('Prompt not embedded for lang:', currentLang);
    }
    validateForm();
}

function setLang(lang) {
    if (!I18N[lang] || lang === currentLang) return;
    currentLang = lang;
    localStorage.setItem('lang', lang);
    applyTranslations();
    loadPrompt();
}

langButtons.forEach((btn) => {
    btn.addEventListener('click', () => setLang(btn.dataset.lang));
});

// ===== API Key Toggle =====
toggleApiKeyBtn.addEventListener('click', () => {
    const isPassword = apiKeyInput.type === 'password';
    apiKeyInput.type = isPassword ? 'text' : 'password';
});

// ===== File Upload: Drawing =====
drawingZone.addEventListener('click', () => drawingFileInput.click());

drawingZone.addEventListener('dragover', (e) => {
    e.preventDefault();
    drawingZone.style.borderColor = 'var(--accent)';
});

drawingZone.addEventListener('dragleave', () => {
    drawingZone.style.borderColor = '';
});

drawingZone.addEventListener('drop', (e) => {
    e.preventDefault();
    drawingZone.style.borderColor = '';
    if (e.dataTransfer.files.length) {
        handleDrawingFile(e.dataTransfer.files[0]);
    }
});

drawingFileInput.addEventListener('change', (e) => {
    if (e.target.files.length) {
        handleDrawingFile(e.target.files[0]);
    }
});

function handleDrawingFile(file) {
    const validTypes = [
        'application/pdf',
        'image/jpeg',
        'image/png',
        'image/tiff',
    ];
    const ext = file.name.split('.').pop().toLowerCase();
    const validExts = ['pdf', 'jpg', 'jpeg', 'png', 'tiff', 'tif'];

    if (!validTypes.includes(file.type) && !validExts.includes(ext)) {
        showToast(t('invalidFormat'));
        return;
    }

    drawingFile = file;
    drawingNameEl.textContent = file.name;
    drawingZone.classList.add('has-file');
    validateForm();
}

// ===== Form Validation =====
function validateForm() {
    const hasKey = apiKeyInput.value.trim().length > 0;
    const hasDrawing = drawingFile !== null;
    const hasPrompt = promptText.length > 0;
    processBtn.disabled = !(hasKey && hasDrawing && hasPrompt);
}

apiKeyInput.addEventListener('input', validateForm);

// ===== File to Base64 =====
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const base64 = reader.result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// ===== Get Media Type =====
function getMediaType(file) {
    if (file.type) return file.type;
    const ext = file.name.split('.').pop().toLowerCase();
    const mimeMap = {
        pdf: 'application/pdf',
        jpg: 'image/jpeg',
        jpeg: 'image/jpeg',
        png: 'image/png',
        tiff: 'image/tiff',
        tif: 'image/tiff',
    };
    return mimeMap[ext] || 'application/octet-stream';
}

// ===== Progress Bar with Status Messages =====
function updateFill(pct) {
    progressFill.style.width = pct + '%';
}

function startProgressBar(durationMs) {
    return new Promise((resolve) => {
        progressSection.hidden = false;
        resultActions.hidden = true;
        updateFill(0);
        const startTime = Date.now();
        let lastMsgIdx = -1;
        const messages = t('progress');

        const interval = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const pct = Math.min((elapsed / durationMs) * 100, 99);
            updateFill(pct);
            progressPercent.textContent = Math.round(pct) + '%';

            for (let i = messages.length - 1; i >= 0; i--) {
                if (pct >= messages[i].at && i > lastMsgIdx) {
                    progressText.textContent = messages[i].text;
                    lastMsgIdx = i;
                    break;
                }
            }

            if (pct >= 99) {
                clearInterval(interval);
                resolve();
            }
        }, 200);

        startProgressBar._interval = interval;
        startProgressBar._resolve = resolve;
    });
}

function finishProgressBar() {
    if (startProgressBar._interval) {
        clearInterval(startProgressBar._interval);
    }
    updateFill(100);
    progressPercent.textContent = '100%';
    progressText.textContent = t('completed');
    if (startProgressBar._resolve) {
        startProgressBar._resolve();
    }
}

function resetProgressBar() {
    progressSection.hidden = true;
    updateFill(0);
    progressPercent.textContent = '0%';
    progressText.textContent = t('processing');
}

// ===== Call Azure Cognitive API =====
async function callAPI(apiKey, file, prompt) {
    const base64Data = await fileToBase64(file);
    const mediaType = getMediaType(file);

    const url = `${API_ENDPOINT}/v1/messages`;

    const body = {
        model: MODEL_NAME,
        max_tokens: 24000,
        temperature: 1,
        system: t('systemPrompt'),
        messages: [
            {
                role: 'user',
                content: [
                    {
                        type: 'image',
                        source: {
                            type: 'base64',
                            media_type: mediaType,
                            data: base64Data,
                        },
                    },
                    {
                        type: 'text',
                        text: prompt,
                    },
                ],
            },
        ],
    };

    const response = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': apiKey,
            'anthropic-version': '2023-06-01',
        },
        body: JSON.stringify(body),
    });

    if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        const msg = err?.error?.message || `HTTP ${response.status}`;
        throw new Error(msg);
    }

    const data = await response.json();

    const textParts = (data.content || [])
        .filter((block) => block.type === 'text')
        .map((block) => block.text);

    if (textParts.length === 0) {
        throw new Error(t('apiNoResults'));
    }

    return textParts.join('\n');
}

// ===== Build HTML Result =====
function buildHtmlResult(rawText) {
    return `<!DOCTYPE html>
<html lang="${t('resultDocLang')}">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${t('resultTitle')}</title>
<style>
  body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 960px; margin: 40px auto; padding: 0 24px; line-height: 1.7; color: #333; background: #fff; }
  h1, h2, h3 { color: #222; margin-top: 1.5em; }
  h1 { border-bottom: 3px solid #cc0000; padding-bottom: 8px; }
  table { border-collapse: collapse; width: 100%; margin: 1em 0; }
  th, td { border: 1px solid #ddd; padding: 10px 14px; text-align: left; }
  th { background: #cc0000; color: #fff; }
  tr:nth-child(even) { background: #f9f9f9; }
  code { background: #f0f0f0; padding: 2px 6px; border-radius: 4px; font-size: 0.9em; }
  pre { background: #2d2d2d; color: #e0e0e0; padding: 16px; border-radius: 8px; overflow-x: auto; }
  pre code { background: none; color: inherit; }
  blockquote { border-left: 4px solid #cc0000; margin: 1em 0; padding: 8px 16px; background: #fafafa; }
  @media print { body { margin: 20px; } }
</style>
</head>
<body>
${rawText}
</body>
</html>`;
}

// ===== Process Button =====
processBtn.addEventListener('click', async () => {
    const apiKey = apiKeyInput.value.trim();
    if (!apiKey || !drawingFile || !promptText) return;

    processBtn.disabled = true;
    resultActions.hidden = true;
    resetProgressBar();

    startProgressBar(120000);

    try {
        const result = await callAPI(apiKey, drawingFile, promptText);
        aiResultHtml = buildHtmlResult(result);

        finishProgressBar();
        await new Promise((r) => setTimeout(r, 500));

        progressSection.hidden = true;
        resultActions.hidden = false;
    } catch (error) {
        finishProgressBar();
        showToast(t('errorPrefix') + error.message);
        console.error('API Error:', error);
        resetProgressBar();
    } finally {
        validateForm();
    }
});

// ===== Preview Result =====
previewBtn.addEventListener('click', () => {
    if (!aiResultHtml) return;
    const blob = new Blob([aiResultHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    window.open(url, '_blank');
});

// ===== Download Result as HTML =====
downloadBtn.addEventListener('click', () => {
    if (!aiResultHtml) return;

    const blob = new Blob([aiResultHtml], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;

    let baseName = drawingFile
        ? drawingFile.name.replace(/\.[^.]+$/, '')
        : 'result';
    baseName = baseName.replace(t('drawingSuffixRegex'), '');
    const now = new Date();
    const pad = (n) => String(n).padStart(2, '0');
    const dateStr = `${now.getFullYear()}-${pad(now.getMonth() + 1)}-${pad(now.getDate())}_${pad(now.getHours())}-${pad(now.getMinutes())}`;
    a.download = `${baseName}_${dateStr}.html`;

    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showToast(t('downloaded'), 'success');
});

// ===== Toast =====
function showToast(message, type = 'error') {
    toastMessage.textContent = message;
    toast.className = 'toast' + (type === 'success' ? ' toast--success' : '');
    toast.hidden = false;

    clearTimeout(showToast._timeout);
    showToast._timeout = setTimeout(() => {
        toast.hidden = true;
    }, 4000);
}

// ===== Init =====
applyTranslations();
loadPrompt();
