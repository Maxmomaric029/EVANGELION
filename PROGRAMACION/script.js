document.addEventListener('DOMContentLoaded', () => {
  // Elementos del DOM
  const elements = {
    login: document.getElementById('login-screen'),
    loginBtn: document.getElementById('login-btn'),
    username: document.getElementById('username'),
    password: document.getElementById('password'),
    error: document.getElementById('login-error'),
    intro: document.getElementById('intro-animation'),
    menu: document.querySelector('.menu')
  };

  // Credenciales válidas
  const CREDENTIALS = {
    user: "VIP",
    pass: "RevengeCheats"
  };

  // Sistema de Login
  elements.loginBtn.addEventListener('click', () => {
    if (elements.username.value === CREDENTIALS.user && 
        elements.password.value === CREDENTIALS.pass) {
      loginSuccess();
    } else {
      showError();
    }
  });

  function loginSuccess() {
    elements.error.textContent = "";
    elements.login.style.display = "none";
    elements.intro.style.display = "flex";

    // Animación letra por letra
    document.querySelectorAll('.letter').forEach((letter, i) => {
      letter.style.animationDelay = `${0.1 * i}s`;
    });

    // Mostrar menú después de la animación
    setTimeout(() => {
      elements.intro.style.opacity = "0";
      setTimeout(() => {
        elements.intro.style.display = "none";
        elements.menu.style.display = "block";
      }, 500);
    }, 2000);
  }

  function showError() {
    elements.error.textContent = "Credenciales incorrectas";
    elements.username.style.borderColor = "#ff4444";
    elements.password.style.borderColor = "#ff4444";

    setTimeout(() => {
      elements.username.style.borderColor = "#a855f7";
      elements.password.style.borderColor = "#a855f7";
    }, 2000);
  }

  // Login con Enter
  elements.password.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') elements.loginBtn.click();
  });

  // ======================
  // FUNCIONALIDADES AIMBOT
  // ======================
  document.getElementById('toggle-aimbot').addEventListener('change', e => {
    console.log(`[AIMBOT] ${e.target.checked ? "✅ ACTIVADO" : "❌ DESACTIVADO"}`);
  });

  document.getElementById('aimbot-bone').addEventListener('change', e => {
    console.log(`[AIMBOT] Objetivo: ${e.target.value.toUpperCase()}`);
  });

  document.getElementById('toggle-recoil').addEventListener('change', e => {
    console.log(`[AIMBOT] No Recoil ${e.target.checked ? "✅ ACTIVADO" : "❌ DESACTIVADO"}`);
  });

  document.getElementById('toggle-spread').addEventListener('change', e => {
    console.log(`[AIMBOT] No Spread ${e.target.checked ? "✅ ACTIVADO" : "❌ DESACTIVADO"}`);
  });

  // ======================
  // FUNCIONALIDADES OPTIMIZACIÓN
  // ======================
  document.getElementById('toggle-fixlag').addEventListener('change', e => {
    console.log(`[OPTIMIZACIÓN] Fix Lag ${e.target.checked ? "✅ ACTIVADO" : "❌ DESACTIVADO"}`);
  });

  document.getElementById('toggle-betterping').addEventListener('change', e => {
    console.log(`[OPTIMIZACIÓN] Better Ping ${e.target.checked ? "✅ ACTIVADO" : "❌ DESACTIVADO"}`);
  });

  document.getElementById('toggle-downgrade').addEventListener('change', e => {
    console.log(`[OPTIMIZACIÓN] Downgrade Graphics ${e.target.checked ? "✅ ACTIVADO" : "❌ DESACTIVADO"}`);
  });

  document.getElementById('toggle-noclothes').addEventListener('change', e => {
    console.log(`[OPTIMIZACIÓN] No Ropa ${e.target.checked ? "✅ ACTIVADO" : "❌ DESACTIVADO"}`);
  });

  // ======================
  // FUNCIONALIDADES CALIBRACIÓN
  // ======================
  document.getElementById('toggle-m10').addEventListener('change', e => {
    console.log(`[CALIBRACIÓN] Calibrar M10 ${e.target.checked ? "✅ ACTIVADO" : "❌ DESACTIVADO"}`);
  });

  document.getElementById('toggle-ump').addEventListener('change', e => {
    console.log(`[CALIBRACIÓN] Calibrar UMP ${e.target.checked ? "✅ ACTIVADO" : "❌ DESACTIVADO"}`);
  });

  document.getElementById('toggle-twoshots').addEventListener('change', e => {
    console.log(`[CALIBRACIÓN] Calibrar 2 Tiros ${e.target.checked ? "✅ ACTIVADO" : "❌ DESACTIVADO"}`);
  });

  // ======================
  // FUNCIONALIDADES SEGURIDAD
  // ======================
  document.getElementById('toggle-antiban').addEventListener('change', e => {
    console.log(`[SEGURIDAD] Antiban ${e.target.checked ? "✅ ACTIVADO" : "❌ DESACTIVADO"}`);
  });

  document.getElementById('toggle-antiblacklist').addEventListener('change', e => {
    console.log(`[SEGURIDAD] Antiblacklist ${e.target.checked ? "✅ ACTIVADO" : "❌ DESACTIVADO"}`);
  });

  document.getElementById('btn-clear-reports').addEventListener('click', () => {
    console.log("[SEGURIDAD] Reportes limpiados");
  });

  // ======================
  // FUNCIONALIDADES EXTRAS
  // ======================
  document.getElementById('toggle-stretch').addEventListener('change', e => {
    console.log(`[EXTRAS] Estirar pantalla ${e.target.checked ? "✅ ACTIVADO" : "❌ DESACTIVADO"}`);
  });

  document.getElementById('toggle-glitch').addEventListener('change', e => {
    console.log(`[EXTRAS] Tela Xit ${e.target.checked ? "✅ ACTIVADO" : "❌ DESACTIVADO"}`);
  });
});
// Añade estos nuevos event listeners al final del archivo:

// ======================
// NUEVAS FUNCIONALIDADES AIMBOT
// ======================
document.getElementById('toggle-easyhs').addEventListener('change', e => {
  console.log(`[AIMBOT] Easy HS ${e.target.checked ? "✅ ACTIVADO" : "❌ DESACTIVADO"}`);
});

// ======================
// NUEVAS FUNCIONALIDADES EXTRAS
// ======================
document.getElementById('toggle-dpi').addEventListener('change', e => {
  console.log(`[EXTRAS] DPI++ ${e.target.checked ? "✅ ACTIVADO" : "❌ DESACTIVADO"}`);
});

document.getElementById('toggle-moresensi').addEventListener('change', e => {
  console.log(`[EXTRAS] More Sensi ${e.target.checked ? "✅ ACTIVADO" : "❌ DESACTIVADO"}`);
});

document.getElementById('toggle-cursor').addEventListener('change', e => {
  console.log(`[EXTRAS] Modificar puntero ${e.target.checked ? "✅ ACTIVADO" : "❌ DESACTIVADO"}`);
});

document.getElementById('toggle-touchboost').addEventListener('change', e => {
  console.log(`[EXTRAS] Touch Boost ${e.target.checked ? "✅ ACTIVADO" : "❌ DESACTIVADO"}`);
});

// ======================
// ABRIR FREE FIRE
// ======================
// ======================
    // FUNCIÓN MEJORADA PARA ABRIR FREE FIRE
    // ======================
    document.getElementById('btn-open-ff').addEventListener('click', () => {
        const userAgent = navigator.userAgent;
        const isAndroid = /Android/i.test(userAgent);
        const isIOS = /iPhone|iPad/i.test(userAgent);
        const isMobile = isAndroid || isIOS;

        console.log("[Free Fire] Detectado:", 
            isMobile ? (isAndroid ? "Android" : "iOS") : "PC");

        // Intentar abrir la app
        try {
            if (isAndroid) {
                // Método para Android (Intent explícito)
                window.location.href = "intent://freefire/#Intent;package=com.dts.freefireth;scheme=freefire;end;";
            } else if (isIOS) {
                // Método para iOS (URL Scheme)
                window.location.href = "freefire://";
            }
        } catch (e) {
            console.error("[Free Fire] Error al abrir app:", e);
        }

        // Fallback después de 300ms
        setTimeout(() => {
            if (isMobile) {
                if (isAndroid) {
                    window.open("market://details?id=com.dts.freefireth", "_blank"); // Play Store
                } else {
                    window.open("https://apps.apple.com/app/id1300146617", "_blank"); // App Store
                }
            } else {
                window.open("https://ff.garena.com", "_blank"); // Página web para PC
            }
        }, 300);
    });

    // Manejo de errores adicional
    window.addEventListener('error', (e) => {
        console.error("[Global Error]", e.message);
    });