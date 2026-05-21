// ===== i18n =====
const I18N = {
  uk: {
    title: 'Автоматизація створення технологій — Metinvest Digital',
    "brand.subtitle": 'Демо рішень',
    "nav.live": 'Наживо',
    "nav.slides": 'Слайди',
    "nav.about": 'Про Нас',
    heroA: 'Автоматизація створення',
    heroB: 'технологій',
    heroSub: 'Завантажте креслення — отримайте готову технологічну карту',
    step1: 'Завантаження креслення',
    step2: 'Обробка',
    dropTitle: 'Перетягніть креслення сюди',
    dropHint: 'або натисніть, щоб обрати файл — PDF, JPG, PNG, TIFF',
    processBtn: 'Запустити обробку',
    processing: 'Обробка...',
    resultReady: 'Результат готовий',
    preview: 'Переглянути',
    download: 'Завантажити',
    demoDownload: 'Завантажити демо креслення',
    invalidFormat: 'Непідтримуваний формат. Використовуйте PDF, JPG, PNG або TIFF.',
    downloaded: 'Файл завантажено!',
    progress: [
      { at: 0, text: 'Підготовка пакету даних...' },
      { at: 15, text: 'Ініціалізація моделі ШІ...' },
      { at: 30, text: 'Аналіз креслення...' },
      { at: 55, text: 'Розпізнавання елементів...' },
      { at: 75, text: 'Генерація технологічного процесу...' },
      { at: 92, text: 'Формування звіту...' },
    ],
    completed: 'Завершено!',
    resultFile: 'result_ua.html',
    downloadName: 'tehnologichna-karta_ua.html',
  },
  en: {
    title: 'Process Engineering Automation — Metinvest Digital',
    "brand.subtitle": 'Solutions Demo',
    "nav.live": 'Live',
    "nav.slides": 'Slides',
    "nav.about": 'About',
    heroA: 'Process Engineering',
    heroB: 'Automation',
    heroSub: 'Upload a drawing — receive a ready-made process chart',
    step1: 'Upload Drawing',
    step2: 'Processing',
    dropTitle: 'Drop the drawing here',
    dropHint: 'or click to choose a file — PDF, JPG, PNG, TIFF',
    processBtn: 'Run Processing',
    processing: 'Processing...',
    resultReady: 'Result is ready',
    preview: 'Preview',
    download: 'Download',
    demoDownload: 'Download demo drawing',
    invalidFormat: 'Unsupported format. Use PDF, JPG, PNG or TIFF.',
    downloaded: 'File downloaded!',
    progress: [
      { at: 0, text: 'Preparing data package...' },
      { at: 15, text: 'Initializing AI model...' },
      { at: 30, text: 'Analyzing the drawing...' },
      { at: 55, text: 'Recognizing elements...' },
      { at: 75, text: 'Generating manufacturing process...' },
      { at: 92, text: 'Composing the report...' },
    ],
    completed: 'Done!',
    resultFile: 'result_en.html',
    downloadName: 'process-chart_en.html',
  },
};

const STORAGE_KEY = 'mdigital.lang';
let currentLang = (() => {
  try { return localStorage.getItem(STORAGE_KEY) || 'uk'; } catch (_) { return 'uk'; }
})();

const $ = (id) => document.getElementById(id);
const drawingZone = $('drawingZone');
const drawingFileInput = $('drawingFile');
const drawingNameEl = $('drawingName');
const processBtn = $('processBtn');
const progressSection = $('progressSection');
const progressFill = $('progressFill');
const progressText = $('progressText');
const progressPercent = $('progressPercent');
const resultActions = $('resultActions');
const previewBtn = $('previewBtn');
const downloadBtn = $('downloadBtn');
const toast = $('toast');
const toastMessage = $('toastMessage');
const langButtons = document.querySelectorAll('.lang-btn');

let drawingFile = null;
let progressTimer = null;
let resultUrlCache = null;

function t(key) { return I18N[currentLang][key]; }

function applyTranslations() {
  document.documentElement.lang = currentLang;
  document.title = t('title');
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const v = I18N[currentLang][key];
    if (v != null) el.textContent = v;
  });
  langButtons.forEach((b) => {
    const active = b.dataset.lang === currentLang;
    b.classList.toggle('active', active);
    b.setAttribute('aria-selected', active ? 'true' : 'false');
  });
}

function setLang(lang) {
  if (!I18N[lang] || lang === currentLang) return;
  currentLang = lang;
  try { localStorage.setItem(STORAGE_KEY, lang); } catch (_) {}
  resultUrlCache = null;
  applyTranslations();
}

langButtons.forEach((btn) => btn.addEventListener('click', () => setLang(btn.dataset.lang)));

// ===== Active nav state =====
(function syncNav() {
  const page = document.body.getAttribute('data-page');
  if (!page) return;
  document.querySelectorAll('.nav-btn[data-page-link]').forEach((el) => {
    el.classList.toggle('active', el.getAttribute('data-page-link') === page);
  });
})();

// ===== File upload =====
drawingZone.addEventListener('click', () => drawingFileInput.click());
drawingZone.addEventListener('dragover', (e) => {
  e.preventDefault();
  drawingZone.classList.add('is-dragover');
});
drawingZone.addEventListener('dragleave', () => drawingZone.classList.remove('is-dragover'));
drawingZone.addEventListener('drop', (e) => {
  e.preventDefault();
  drawingZone.classList.remove('is-dragover');
  if (e.dataTransfer.files.length) handleDrawingFile(e.dataTransfer.files[0]);
});
drawingFileInput.addEventListener('change', (e) => {
  if (e.target.files.length) handleDrawingFile(e.target.files[0]);
});

function handleDrawingFile(file) {
  const validExts = ['pdf', 'jpg', 'jpeg', 'png', 'tiff', 'tif'];
  const ext = file.name.split('.').pop().toLowerCase();
  if (!validExts.includes(ext)) {
    showToast(t('invalidFormat'));
    return;
  }
  drawingFile = file;
  drawingNameEl.textContent = file.name;
  drawingZone.classList.add('has-file');
  processBtn.disabled = false;
}

// ===== Fake progress (15s) =====
const TOTAL_MS = 15000;

function runProgress() {
  return new Promise((resolve) => {
    progressSection.hidden = false;
    resultActions.hidden = true;
    progressFill.style.width = '0%';
    progressPercent.textContent = '0%';
    progressText.textContent = t('processing');

    const startTime = Date.now();
    let lastIdx = -1;
    const messages = t('progress');

    progressTimer = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const pct = Math.min((elapsed / TOTAL_MS) * 100, 100);
      progressFill.style.width = pct + '%';
      progressPercent.textContent = Math.round(pct) + '%';

      for (let i = messages.length - 1; i >= 0; i--) {
        if (pct >= messages[i].at && i > lastIdx) {
          progressText.textContent = messages[i].text;
          lastIdx = i;
          break;
        }
      }

      if (pct >= 100) {
        clearInterval(progressTimer);
        progressTimer = null;
        progressText.textContent = t('completed');
        resolve();
      }
    }, 150);
  });
}

processBtn.addEventListener('click', async () => {
  if (!drawingFile) return;
  processBtn.disabled = true;

  await runProgress();
  await new Promise((r) => setTimeout(r, 400));

  progressSection.hidden = true;
  resultActions.hidden = false;
});

// ===== Preview / Download =====
async function getResultBlobUrl() {
  if (resultUrlCache) return resultUrlCache;
  const res = await fetch('./' + t('resultFile'));
  if (!res.ok) throw new Error('Failed to load result file');
  const blob = await res.blob();
  resultUrlCache = URL.createObjectURL(blob);
  return resultUrlCache;
}

previewBtn.addEventListener('click', () => {
  window.open('./' + t('resultFile'), '_blank');
});

downloadBtn.addEventListener('click', async () => {
  try {
    const url = await getResultBlobUrl();
    const a = document.createElement('a');
    a.href = url;
    a.download = t('downloadName');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    showToast(t('downloaded'), 'success');
  } catch (e) {
    showToast(e.message);
  }
});

// ===== Toast =====
function showToast(message, type) {
  toastMessage.textContent = message;
  toast.className = 'toast' + (type === 'success' ? ' toast--success' : '');
  toast.hidden = false;
  clearTimeout(showToast._t);
  showToast._t = setTimeout(() => { toast.hidden = true; }, 3500);
}

// ===== Init =====
applyTranslations();
