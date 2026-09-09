// OdA App · service worker (fase 1)
// Cachea la "cáscara" (HTML, estilos, fuentes, librerías) para que la app abra sin red.
// Los datos de Supabase NUNCA se cachean aquí: siempre van a la red.
const VERSION = 'oda-app-v1';
const SHELL = ['./', './index.html', './app-manifest.json', './app-icon-192.png', './app-icon-512.png'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(VERSION).then((c) => c.addAll(SHELL).catch(() => {})).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k !== VERSION).map((k) => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', (e) => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET') return;
  if (/supabase\.co|graph\.facebook\.com|myshopify\.com/.test(url.host)) return; // datos: siempre red
  // Cáscara y estáticos: red primero, cae al caché si no hay conexión (así las actualizaciones llegan solas).
  e.respondWith(
    fetch(e.request).then((res) => {
      if (res && res.ok && (url.origin === self.location.origin || /jsdelivr|googleapis|gstatic|unpkg/.test(url.host))) {
        const copy = res.clone(); caches.open(VERSION).then((c) => c.put(e.request, copy)).catch(() => {});
      }
      return res;
    }).catch(() => caches.match(e.request).then((hit) => hit || (e.request.mode === 'navigate' ? caches.match('./index.html') : undefined)))
  );
});
