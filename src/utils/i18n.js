import en from '../i18n/en.json';
import zh from '../i18n/zh.json';

const LANG_KEY = 'steam-toolbox-lang';
const translations = { en, zh };

export function detectLanguage() {
  const params = new URLSearchParams(window.location.search);
  const langParam = params.get('lang');
  if (langParam && translations[langParam]) {
    localStorage.setItem(LANG_KEY, langParam);
    return langParam;
  }

  const saved = localStorage.getItem(LANG_KEY);
  if (saved && translations[saved]) return saved;

  const browserLang = navigator.language.toLowerCase();
  if (browserLang.startsWith('zh')) return 'zh';

  return 'en';
}

let currentLang = detectLanguage();

export function t(key) {
  const keys = key.split('.');
  let value = translations[currentLang];
  for (const k of keys) {
    if (value && typeof value === 'object') {
      value = value[k];
    } else {
      return key;
    }
  }
  return value || key;
}

export function getLang() {
  return currentLang;
}

export function setLang(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem(LANG_KEY, lang);
  applyTranslations();
  document.documentElement.lang = lang;
}

export function applyTranslations() {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    const text = t(key);
    if (text !== key) el.textContent = text;
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    const key = el.getAttribute('data-i18n-placeholder');
    const text = t(key);
    if (text !== key) el.placeholder = text;
  });

  document.querySelectorAll('[data-i18n-title]').forEach(el => {
    const key = el.getAttribute('data-i18n-title');
    const text = t(key);
    if (text !== key) el.title = text;
  });
}

export function initI18n() {
  document.documentElement.lang = currentLang;
  applyTranslations();
  document.body.style.visibility = '';
}
