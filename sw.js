/* Service worker de Hestia (TK-0780) — componente_instalar_web.py.
   Existe SOLO para que Chrome y Edge ofrezcan «Instalar». No guarda nada: ni páginas ni datos.
   Todo pide a la red igual que sin él. */
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () { /* sin caché: el navegador va a la red como siempre */ });
