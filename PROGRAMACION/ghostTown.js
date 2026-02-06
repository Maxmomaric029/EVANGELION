// GhostTown panel JS
window.addEventListener('DOMContentLoaded', function() {
  // Estado visual activo en switches
  document.querySelectorAll('.ghosttown-option input[type="checkbox"]').forEach(function(input) {
    input.addEventListener('change', function(e) {
      if (e.target.checked) {
        e.target.closest('.ghosttown-option').classList.add('active');
      } else {
        e.target.closest('.ghosttown-option').classList.remove('active');
      }
    });
  });

  // Switches principales
  document.getElementById('speedx3-switch').addEventListener('change', function(e) {
    if (e.target.checked) {
      alert('SpeedX3 activado');
    }
  });
  document.getElementById('stillshooting-switch').addEventListener('change', function(e) {
    if (e.target.checked) {
      alert('Still shooting activado');
    }
  });

  // Switches de Aimbot Scripts
  document.getElementById('easyhead-switch').addEventListener('change', function(e) {
    if (e.target.checked) {
      alert('easyHead activado');
    }
  });
  document.getElementById('aimbotrage-switch').addEventListener('change', function(e) {
    if (e.target.checked) {
      alert('aimbotRage activado');
    }
  });
  document.getElementById('semiaimbotawp-switch').addEventListener('change', function(e) {
    if (e.target.checked) {
      alert('semiAimbotAwp activado');
    }
  });
  document.getElementById('fullyaimbotscript-switch').addEventListener('change', function(e) {
    if (e.target.checked) {
      alert('fullyAimbotScript activado');
    }
  });
  document.getElementById('aimbotm1018-switch').addEventListener('change', function(e) {
    if (e.target.checked) {
      alert('aimbotM1018 activado');
    }
  });

  // Hover efecto en opciones
  document.querySelectorAll('.ghosttown-option').forEach(function(card) {
    card.addEventListener('mouseenter', function() {
      card.style.borderColor = '#00ffff';
      card.style.boxShadow = '0 8px 32px #00ffff44';
    });
    card.addEventListener('mouseleave', function() {
      if (!card.classList.contains('active')) {
        card.style.borderColor = '#444';
        card.style.boxShadow = '0 4px 24px #000a';
      }
    });
  });
});
