// panelBlue.js
// Intenta abrir la app Free Fire usando el esquema URI `freefireth://`.
// Si no está instalada, redirige al usuario a la Play Store (Android) o App Store (iOS).

document.addEventListener('DOMContentLoaded', function () {
  const ffLink = document.querySelector('.panel-freefire-link');

  if (ffLink) {
    ffLink.addEventListener('click', function (e) {
      // Previene la navegación por defecto para manejar el intento de apertura
      e.preventDefault();

      const scheme = 'freefireth://';
      const androidFallback = 'https://play.google.com/store/apps/details?id=com.dts.freefireth';
      const iosFallback = 'https://apps.apple.com/app/free-fire/id1300146617';

      const now = Date.now();
      // Intentar abrir esquema
      window.location.href = scheme;

      // Si después de 1200ms sigue en la página, redirigimos al store correspondiente
      setTimeout(function () {
        // No hay forma fiable en web para detectar plataforma en todos los casos,
        // así que basamos la elección en el userAgent (heurística simple).
        const ua = navigator.userAgent || '';
        const isIOS = /iPad|iPhone|iPod/.test(ua) && !window.MSStream;

        if (Date.now() - now < 5000) {
          // Suponemos que la app no abrió y redirigimos
          window.location.href = isIOS ? iosFallback : androidFallback;
        }
      }, 1200);
    });
  }

  // No necesitamos interceptar el enlace de WhatsApp; el <a> ya tiene href.
});
