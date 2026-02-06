// Scriptable: Menú "Aimbot Auxiliar" con contraseña
let pass = await PromptPassword("Destinyy by doa, jesus its the king but im god");
if (pass !== "destiny by doa") {
  let alert = new Alert();
  alert.title = "Acceso denegado";
  alert.message = "Contraseña incorrecta.";
  alert.addCancelAction("OK");
  await alert.present();
  Script.complete();
} else {
  // Notificaciones tras ingresar la contraseña correctamente
  let notif1 = new Notification();
  notif1.title = "we really goats🏴‍☠";
  notif1.body = "";
  notif1.schedule();

  // await sleep(1000);

  let notif2 = new Notification();
  notif2.title = "I'll give you everything you really need🌌";
  notif2.body = "";
  notif2.schedule();

  // await sleep(1000);

  let notif3 = new Notification();
  notif3.title = "we are the destiny.";
  notif3.body = "";
  notif3.schedule();

  // await sleep(1200);

  // Menú de opciones
  let alert = new Alert();
  alert.title = "𝑑𝑒𝑠𝑡𝑖𝑛𝑦 🌌";
  alert.message = "Selecciona una opción:";

  // Opciones principales
  alert.addAction("»»———> 𝐟𝐥𝐲𝐢𝐧𝐠 𝐢𝐧 𝐠𝐫𝐨𝐮𝐧𝐝 ☯");
  alert.addAction("»»———> 𝑎𝑖𝑚𝐺𝑧𝑧𝑧 𝑓𝑜𝑟 𝑑𝑒𝑠𝑡𝑖𝑛𝑦 ☯");
  alert.addAction("»»———> 𝐴𝑖𝑚𝐿𝑒𝑔𝑖𝑡 𝑙𝑖𝑘𝑒 @𝑆𝘩𝑥𝑥𝑚𝑒 ☯");
  alert.addAction("»»———> 𝐵𝑦𝑝𝑎𝑠𝑠 𝐴𝑛𝑡𝑖-𝐵𝑎𝑛 ☯");
  alert.addAction("»»———> 𝑁𝑜 𝑅𝑒𝑐𝑜𝑖𝑙 ☯");

  // Escopetas Free Fire
  alert.addAction("»»———> Destiny 4Live? 💫");
  
  alert.addAction("𝘼𝙞𝘼𝙨𝙨𝙞𝙩 📁");
  alert.addAction("Dpi = 2400💣");
  
  alert.addAction("𝘼𝙞 𝙋𝙧𝙚𝙨𝙨𝙩𝙮 🩸");
  alert.addAction("𝙂𝙤𝙙 𝙈𝙤𝙙𝙚 🤴");
 // si quieres agregar mas opciones solo copia y pega la linea de arriba y cambia "Ejemplo" por el nombre que quieras
  alert.addCancelAction("Salir");
  let resp = await alert.present();

  // Lista de opciones para mostrar en el segundo menú
  const opciones = [
    "Flying in Ground",
    "AimGzzz for destiny",
    "AimLegit like @Shxme",
    "Bypass Anti-Ban",
    "No Recoil",
    "Destiny 4Live? 💫",
    "AimAssist 📁",
    "Dpi = 2400💣",
    "Aim Pressty 🩸",
    "God Mode 🤴"
  ];

  if (resp >= 0 && resp < opciones.length) {
    // Confirmar activación
    let confirm = new Alert();
    confirm.title = opciones[resp];
    confirm.message = `Activar ${opciones[resp]}?`;
    confirm.addAction("Sí");
    confirm.addCancelAction("No");
    let confResp = await confirm.present();

    if (confResp === 0) {
      // Elegir versión de Free Fire (abrir app directamente)
      let ff = new Alert();
      ff.title = "Abrir Free Fire";
      ff.message = "¿Qué versión deseas abrir?";
      ff.addAction("Free Fire Normal");
      ff.addAction("Free Fire Max");
      ff.addCancelAction("Cancelar");
      let ffResp = await ff.present();

      // Mostrar arte ASCII antes de abrir Free Fire
      let ascii = new Alert();
      ascii.title = "";
      ascii.message = `         ⣠⣶⣶⣶⣦  
  ⣠⣤⣤⣄⣀⣾⣿⠟⠛⠻⢿⣷ 
⢰⣿⡿⠛⠙⠻⣿⣿⠁    ⣶⢿⡇
⢿⣿⣇   ⠈⠏    By shxme!
 ⠻⣿⣷⣦⣤⣀     ⣾⡿⠃ 
    ⠉⠉⠻⣿⣄⣴⣿⠟   
        ⣿⡿⠟⠁   `;
      ascii.addAction("Continuar");
      await ascii.present();

      if (ffResp === 0) {
        Safari.open("freefire://");
      } else if (ffResp === 1) {
        Safari.open("freefiremax://");
      }
    }
  }
  Script.complete();
}

async function PromptPassword(msg) {
  let sf = new Alert();
  sf.title = "Contraseña";
  sf.message = msg;
  sf.addTextField("Contraseña", "");
  sf.addAction("Entrar");
  sf.addCancelAction("Cancelar");
  let result = await sf.present();
  if (result === -1) return null;
  return sf.textFieldValue(0);
}