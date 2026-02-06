// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: purple; icon-glyph: magic;

let password = "DoaWorldd";
let input = await promptPassword();

if (input === password) {
  let options = [
    "Bypass Aimbot fix (si el aimbot no funciona activa esto.)",
    "Bypass Ban",
    "Bypass Blacklist",
    "AimSmooth🏴‍☠️",
    "AimSpinning 💤",
    "360Fpzz🏴‍☠️"
  ];

  let selectedOption = await showMenu(options);

  if (selectedOption !== -1) {
    let option = options[selectedOption];

    if (option === "AimSpinning 💤") {
      let fovOptions = [
        "10%",
        "20%",
        "30%",
        "40%",
        "50%",
        "60%",
        "70%",
        "80%",
        "90%",
        "100%"
      ];
      let selectedFov = await showMenu(fovOptions);
      if (selectedFov !== -1) {
        let fovValue = fovOptions[selectedFov];
        let confirmAlert = new Alert();
        confirmAlert.title = "Confirmación";
        confirmAlert.message = `¿Activar Aimfov en ${fovValue}?`;
        confirmAlert.addAction("Sí");
        confirmAlert.addCancelAction("No");

        let confirmation = await confirmAlert.present();
        if (confirmation === 0) {
          let alert = new Alert();
          alert.message = `Modo activado: Aimfov ${fovValue}`;
          alert.addAction("OK");
          await alert.present();
          sendNotification(`Aimfov ${fovValue}`);
          await openGameMenu();
        }
      }
    } else {
      let confirmAlert = new Alert();
      confirmAlert.title = "Confirmación";
      confirmAlert.message = `¿Activar ${option}?`;
      confirmAlert.addAction("Sí");
      confirmAlert.addCancelAction("No");

      let confirmation = await confirmAlert.present();
      if (confirmation === 0) {
        let alert = new Alert();
        alert.message = `Modo activado: ${option}`;
        alert.addAction("OK");
        await alert.present();
        sendNotification(option);
        await openGameMenu();
      }
    }
  }
} else {
  let alert = new Alert();
  alert.message = "Contraseña incorrecta. Saliendo...";
  alert.addAction("OK");
  await alert.present();
}

function promptPassword() {
  let alert = new Alert();
  alert.title = "Autenticación requerida";
  alert.message = "Introduce la contraseña para continuar.";
  alert.addTextField("Contraseña");
  alert.addAction("Confirmar");
  return alert.present().then(result => alert.textFieldValue(0));
}

function showMenu(options) {
  let alert = new Alert();
  alert.title = "Selecciona una opción";
  for (let option of options) {
    alert.addAction(option);
  }
  return alert.presentSheet().then(result => result);
}

function sendNotification(option) {
  let n = new Notification();
  n.title = `Inyectado: ${option}`;
  n.body = `Doa.world - Goatz 🐐`;
  n.schedule();
}

async function openGameMenu() {
  let games = ["Abrir Free Fire", "Abrir Free Fire Max"];
  let selectedGame = await showMenu(games);
  if (selectedGame === 0) {
    Safari.open("freefireth://");
  } else if (selectedGame === 1) {
    Safari.open("freefiremax://");
  }
}

console.log("👑 Flockz on top")