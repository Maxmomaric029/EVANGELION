// Scriptable: Menú "Aimbot Auxiliar" con contraseña
// Versión mejorada con mejor estructura y manejo de errores

const CONTRASENA_CORRECTA = "destiny by doa";

// Función principal
async function main() {
  try {
    // Solicitar contraseña
    const pass = await PromptPassword("🅿♿");
    
    if (pass !== CONTRASENA_CORRECTA) {
      await mostrarAlerta("Acceso denegado", "Contraseña incorrecta.");
      Script.complete();
      return;
    }

    // Mostrar notificaciones de bienvenida
    await mostrarNotificacionesBienvenida();

    // Mostrar menú principal
    const opcionSeleccionada = await mostrarMenuPrincipal();
    
    if (opcionSeleccionada === null) {
      Script.complete();
      return;
    }

    // Confirmar activación
    const confirmado = await confirmarActivacion(opcionSeleccionada);
    
    if (!confirmado) {
      Script.complete();
      return;
    }

    // Seleccionar versión de Free Fire y abrir
    await seleccionarYabrirFreeFire();

  } catch (error) {
    await mostrarAlerta("Error", `Ocurrió un error: ${error.message}`);
  } finally {
    Script.complete();
  }
}

// Función para mostrar notificaciones de bienvenida
async function mostrarNotificacionesBienvenida() {
  const notif1 = new Notification();
  notif1.title = "Dumping on these hoes🏴‍☠";
  notif1.body = "";
  notif1.schedule();

  const notif2 = new Notification();
  notif2.title = "big paybacc cripz🌌";
  notif2.body = "se..volvieron mis fans lo que me humillannn🤦‍♂️";
  notif2.schedule();
}

// Función para mostrar el menú principal
async function mostrarMenuPrincipal() {
  const alert = new Alert();
  alert.title = "𝒈𝟏𝟕𝒆𝒙𝒕𝒕💲 🌌";
  alert.message = "Selecciona una opción:";

  // Opciones principales (deben coincidir con el array opciones)
  alert.addAction("»»———> 𝚡𝚒𝚝𝚝𝚒𝚗𝚐 ❗");
  alert.addAction("»»———> 🇦​🇮​🇲​🇧​🇴​🇹​ 67%🥵 (🇲​🇪​🇳​🇹​🇮​🇷​🇦​, 🇦​🇮​🇲​ 40%)");
  alert.addAction("»»———> 𝘩𝑖𝑡𝑡𝑖𝑛 𝑢𝑝 (𝑛𝑒𝑣𝑒𝑟 𝑚𝑖𝑠𝑠 𝑎𝑛𝑦𝑚𝑜𝑟𝑒.)");
  alert.addAction("»»———> 𝙉𝙤 𝙡𝙚𝙜𝙞𝙩 𝙖𝙣𝙮𝙢𝙤𝙧𝙚🤷‍♀️");
  alert.addAction("»»———> １４００ＤＰＩ ＰＢ🅿♿");
  alert.addAction("»»———>M1014 𝙁𝙪𝙡𝙡 𝘼𝙪𝙩𝙤? 💫");
  alert.addAction("𝘼𝙞𝘼𝙨𝙨𝙞𝙩 📁");
  alert.addAction("Bestt sensitivity💣");
  alert.addAction("𝘼𝙞 𝙋𝙧𝙚𝙨𝙨𝙩𝙮 🩸");
  alert.addAction("𝙂𝙤𝙙 𝙈𝙤𝙙𝙚 🤴");
  alert.addCancelAction("Salir");

  const resp = await alert.present();
  
  // Lista de opciones (debe coincidir con las acciones)
  const opciones = [
    "Xitting",
    "Aimbot 67%",
    "Hitin up",
    "No legit anymore",
    "1400DPI PB",
    "M1014 Full Auto",
    "AiAssist",
    "Bestt sensitivity",
    "Ai Pressty",
    "God Mode"
  ];

  if (resp >= 0 && resp < opciones.length) {
    return opciones[resp];
  }
  
  return null;
}

// Función para confirmar la activación
async function confirmarActivacion(nombreOpcion) {
  const confirm = new Alert();
  confirm.title = nombreOpcion;
  confirm.message = `¿Activar ${nombreOpcion}?`;
  confirm.addAction("Sí");
  confirm.addCancelAction("No");
  
  const confResp = await confirm.present();
  return confResp === 0;
}

// Función para seleccionar y abrir Free Fire
async function seleccionarYabrirFreeFire() {
  // Elegir versión de Free Fire
  const ff = new Alert();
  ff.title = "Abrir Free Fire";
  ff.message = "¿Qué versión deseas abrir?";
  ff.addAction("Free Fire Normal");
  ff.addAction("Free Fire Max");
  ff.addCancelAction("Cancelar");
  
  const ffResp = await ff.present();
  
  if (ffResp === -1) {
    return; // Usuario canceló
  }

  // Mostrar arte ASCII antes de abrir Free Fire
  await mostrarArteASCII();

  // Abrir la versión seleccionada
  try {
    if (ffResp === 0) {
      Safari.open("freefire://");
    } else if (ffResp === 1) {
      Safari.open("freefiremax://");
    }
  } catch (error) {
    await mostrarAlerta("Error", "No se pudo abrir Free Fire. Verifica que la aplicación esté instalada.");
  }
}

// Función para mostrar arte ASCII
async function mostrarArteASCII() {
  const ascii = new Alert();
  ascii.title = "";
  ascii.message = ` /$$        /$$$$$$   /$$$$$$         /$$$$$$  /$$      /$$  /$$$$$$        /$$       /$$                                    /$$  /$$$$$$ 
| $$       /$$__  $$ /$$__  $$       /$$__  $$| $$$    /$$$ /$$__  $$      | $$      | $$                                   /$$/ /$$__  $$
| $$      | $$  \\ $$| $$  \\__/      | $$  \\ $$| $$$$  /$$$$| $$  \\ $$      | $$$$$$$ | $$$$$$$  /$$   /$$  /$$$$$$$        /$$/ |__/  \\ $$
| $$      | $$  | $$|  $$$$$$       | $$$$$$$$| $$ $$/$$ $$| $$  | $$      | $$__  $$| $$__  $$| $$  | $$ /$$_____/       /$$/     /$$$$$/
| $$      | $$  | $$ \\____  $$      | $$__  $$| $$  $$$| $$| $$  | $$      | $$  \\ $$| $$  \\ $$| $$  | $$|  $$$$$$       |  $$    |___  $$
| $$      | $$  | $$ /$$  \\ $$      | $$  | $$| \\$$\\  $ | $$| $$  | $$      | $$  | $$| $$  | $$| $$  | $$ \\____  $$       \\  $$  /$$  \\ $$
| $$$$$$$$|  $$$$$$/|  $$$$$$/      | $$  | $$| $$ \\/  | $$|  $$$$$$/      | $$$$$$$/| $$$$$$$/|  $$$$$$$ /$$$$$$$/        \\  $$|  $$$$$$/
|________/ \\______/  \\______/       |__/  |__/|__/     |__/ \\______/       |_______/ |_______/  \\____  $$|_______/          \\__/ \\______/ 
                                                                                                /$$  | $$                                 
                                                                                               |  $$$$$$/                                 
                                                                                                \\______/                                  `;
  ascii.addAction("Continuar");
  await ascii.present();
}

// Función auxiliar para mostrar alertas
async function mostrarAlerta(titulo, mensaje) {
  const alert = new Alert();
  alert.title = titulo;
  alert.message = mensaje;
  alert.addCancelAction("OK");
  await alert.present();
}

// Función para solicitar contraseña
async function PromptPassword(msg) {
  const sf = new Alert();
  sf.title = "Contraseña";
  sf.message = msg;
  sf.addTextField("Contraseña", "");
  sf.addAction("Entrar");
  sf.addCancelAction("Cancelar");
  
  const result = await sf.present();
  
  if (result === -1) {
    return null;
  }
  
  return sf.textFieldValue(0);
}

// Ejecutar función principal
await main();
