// OdA App · service worker (fase 5: notificaciones)
// Cachea la "cáscara" (HTML, estilos, fuentes, librerías) para que la app abra sin red.
// Los datos de Supabase NUNCA se cachean aquí: siempre van a la red.
const VERSION = 'oda-app-v6';
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
// --- Notificaciones push (las manda la Edge Function `push` cuando escribe un cliente) ---
self.addEventListener('push', (e) => {
  let d = {}; try { d = e.data ? e.data.json() : {}; } catch (_) { d = { body: e.data ? e.data.text() : '' }; }
  const title = d.title || 'Oasis del Alma';
  e.waitUntil(self.registration.showNotification(title, {
    body: (d.canal ? d.canal + ' · ' : '') + (d.body || ''), icon: './app-icon-192.png', badge: './app-icon-192.png',
    tag: d.tag || 'oda', renotify: true, data: { url: d.url || './' },
  }));
});
self.addEventListener('notificationclick', (e) => {
  e.notification.close();
  const url = new URL((e.notification.data && e.notification.data.url) || './', self.location.href).href;
  e.waitUntil(self.clients.matchAll({ type: 'window', includeUncontrolled: true }).then((cs) => {
    const c = cs.find((x) => x.url.startsWith(self.registration.scope));
    if (c) { c.focus(); c.postMessage({ tipo: 'abrir', url }); return; }
    return self.clients.openWindow(url);
  }));
});
