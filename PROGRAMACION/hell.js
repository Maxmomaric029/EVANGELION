// Scriptable: Project Hell v6
// Key: hell

let pass = await PromptPassword("💀 𝐒𝐄𝐂𝐔𝐑𝐈𝐓𝐘 𝐂𝐇𝐄𝐂𝐊: 𝐄𝐧𝐭𝐞𝐫 𝐊𝐞𝐲");
if (pass !== "hell") {
  let alert = new Alert();
  alert.title = "🚫 ACCESO DENEGADO";
  alert.message = "La clave es incorrecta.";
  alert.addCancelAction("Cerrar");
  await alert.present();
  Script.complete();
} else {
  let notif1 = new Notification();
  notif1.title = "⚡ 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐢𝐧𝐠 𝐒𝐞𝐫𝐯𝐞𝐫...";
  notif1.body = "Buscando vulnerabilidades...";
  notif1.schedule();

  let notif2 = new Notification();
  notif2.title = "🔓 𝐁𝐲𝐩𝐚𝐬𝐬 𝐒𝐮𝐜𝐜𝐞𝐬𝐬𝐟𝐮𝐥";
  notif2.body = "Anti-Cheat: DESACTIVADO";
  notif2.schedule();

  let notif3 = new Notification();
  notif3.title = "👹 𝐏𝐑𝐎𝐉𝐄𝐂𝐓 𝐇𝐄𝐋𝐋 𝐀𝐂𝐓𝐈𝐕𝐄";
  notif3.body = "Inyección iniciada.";
  notif3.schedule();

  let alert = new Alert();
  alert.title = "👹 𝐏𝐑𝐎𝐉𝐄𝐂𝐓 𝐇𝐄𝐋𝐋 𝐯𝟔";
  alert.message = "Selecciona el Archivo a Inyectar:";

  alert.addAction("💀 𝐀𝐮𝐱𝐢𝐥𝐢𝐨 𝐗 (𝐀𝐢𝐦𝐋𝐨𝐜𝐤)");
  alert.addAction("🩸 𝐅𝐮𝐥𝐥 𝐕𝐞𝐫𝐦𝐞𝐥𝐡𝐨 [𝐎𝐍]");
  alert.addAction("👺 𝐌𝐢𝐫𝐚 𝐆𝐫𝐮𝐝𝐚 𝐂𝐨𝐜𝐨");
  alert.addAction("🇧🇷 𝐑𝐞𝐠𝐞𝐝𝐢𝐭 𝐌𝐨𝐛𝐢𝐥𝐞");
  alert.addAction("🧊 𝐌𝐚𝐜𝐫𝐨 𝐆𝐞𝐥𝐨 𝐅𝐚𝐬𝐭");
  alert.addAction("🛡️ 𝐀𝐧𝐭𝐢-𝐁𝐚𝐧 𝐆𝐡𝐨𝐬𝐭");
  alert.addAction("🚀 𝐁𝐨𝐨𝐬𝐭 𝐅𝐏𝐒 (𝟏𝟐𝟎)");

  alert.addCancelAction("Salir");
  let resp = await alert.present();

  const opciones = [
    "Auxilio X (AimLock)",
    "Full Vermelho [ON]",
    "Mira Gruda Coco",
    "Regedit Mobile",
    "Macro Gelo Fast",
    "Anti-Ban Ghost",
    "Boost FPS (120)"
  ];

  if (resp >= 0 && resp < opciones.length) {
    let confirm = new Alert();
    confirm.title = "💉 CONFIRMAR INYECCIÓN";
    confirm.message = `¿Inyectar archivo: ${opciones[resp]}?`;
    confirm.addAction("INYECTAR AHORA");
    confirm.addCancelAction("Cancelar");
    let confResp = await confirm.present();

    if (confResp === 0) {
      let ff = new Alert();
      ff.title = "🚀 EJECUTAR JUEGO";
      ff.message = "Selecciona tu versión:";
      ff.addAction("Free Fire Normal");
      ff.addAction("Free Fire MAX");
      ff.addCancelAction("Abortar");
      let ffResp = await ff.present();

      // Mensaje Final
      let finalMsg = new Alert();
      finalMsg.title = "SYSTEM STATUS";
      finalMsg.message = "paybacc over all";
      finalMsg.addAction("L A U N C H");
      await finalMsg.present();

      if (ffResp === 0) {
        Safari.open("freefireth://");
      } else if (ffResp === 1) {
        Safari.open("freefiremax://");
      }
    }
  }
  Script.complete();
}

async function PromptPassword(msg) {
  let sf = new Alert();
  sf.title = "🔒 ACCESO PRIVADO";
  sf.message = msg;
  sf.addSecureTextField("Contraseña", "");
  sf.addAction("Entrar");
  sf.addCancelAction("Cancelar");
  let result = await sf.present();
  if (result === -1) return null;
  return sf.textFieldValue(0);
}