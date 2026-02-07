// 🩸 CONFIGURACIÓN
const CONTRASENA = "bloodie";
const TITULO_MENU = "🩸 𝐁𝐋𝐎𝐎𝐃𝐈𝐄 𝐑𝐄𝐆𝐄𝐃𝐈𝐓";

async function main() {
  try {
    // 1. Login
    const pass = await solicitarPassword("🔐 𝐈𝐧𝐠𝐫𝐞𝐬𝐞 𝐥𝐚 𝐊𝐞𝐲 𝐕𝐈𝐏:");
    if (pass !== CONTRASENA) {
      await errorAlert("❌ 𝐀𝐜𝐜𝐞𝐬𝐨 𝐃𝐞𝐧𝐞𝐠𝐚𝐝𝐨", "𝐋𝐚 𝐜𝐨𝐧𝐭𝐫𝐚𝐬𝐞ñ𝐚 𝐞𝐬 𝐢𝐧𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐚.");
      return;
    }

    // 2. Notificación de conexión
    await notificar("🧬 𝐂𝐨𝐧𝐞𝐜𝐭𝐚𝐧𝐝𝐨...", "𝐁𝐮𝐬𝐜𝐚𝐧𝐝𝐨 𝐬𝐞𝐫𝐯𝐢𝐝𝐨𝐫 𝐢𝐎𝐒...");
    
    // 3. Menú Principal
    const opcion = await mostrarMenu();
    if (!opcion) return;

    // 4. Confirmación y "Carga"
    const confirmar = await confirmarAccion(opcion);
    if (confirmar) {
      await notificar("💉 𝐈𝐧𝐲𝐞𝐜𝐭𝐚𝐧𝐝𝐨 " + opcion, "𝐏𝐨𝐫 𝐟𝐚𝐯𝐨𝐫 𝐞𝐬𝐩𝐞𝐫𝐞...");
      // Simula tiempo de carga
      await esperar(1500); 
      await notificar("✅ É𝐱𝐢𝐭𝐨", "𝐀𝐫𝐜𝐡𝐢𝐯𝐨𝐬 𝐚𝐩𝐥𝐢𝐜𝐚𝐝𝐨𝐬 𝐜𝐨𝐫𝐫𝐞𝐜𝐭𝐚𝐦𝐞𝐧𝐭𝐞.");
      
      // 5. Abrir Juego
      await abrirJuego();
    }

  } catch (e) {
    console.log(e);
  }
}

async function mostrarMenu() {
  const alerta = new Alert();
  alerta.title = TITULO_MENU;
  alerta.message = "🔰 𝐒𝐞𝐥𝐞𝐜𝐜𝐢𝐨𝐧𝐞 𝐮𝐧𝐚 𝐜𝐨𝐧𝐟𝐢𝐠𝐮𝐫𝐚𝐜𝐢ó𝐧:";

  // Opciones Estilo Regedit
  const opciones = [
    "📱 𝐑𝐞𝐠𝐞𝐝𝐢𝐭 𝐌𝐨𝐛𝐢𝐥𝐞 𝐕𝟒",
    "🎯 𝐀𝐢𝐦𝐋𝐨𝐜𝐤 𝐇𝐞𝐚𝐝 𝟗𝟗%",
    "⚡ 𝐒𝐞𝐧𝐬𝐢 𝐢𝐏𝐡𝐨𝐧𝐞 𝟏𝟒",
    "🖱️ 𝐒𝐮𝐩𝐫𝐞𝐬𝐨𝐫 𝐝𝐞 𝐑𝐞𝐜𝐨𝐢𝐥",
    "🩸 𝐌𝐚𝐠𝐢𝐜 𝐁𝐮𝐥𝐥𝐞𝐭 𝐗",
    "🛡️ 𝐀𝐧𝐭𝐢-𝐁𝐚𝐧 𝐁𝐲𝐩𝐚𝐬𝐬"
  ];

  opciones.forEach(op => alerta.addAction("» " + op));
  alerta.addCancelAction("❌ 𝐒𝐚𝐥𝐢𝐫");

  const i = await alerta.present();
  return i === -1 ? null : opciones[i];
}

async function abrirJuego() {
  const a = new Alert();
  a.title = "🚀 𝐋𝐚𝐧𝐳𝐚𝐫 𝐅𝐫𝐞𝐞 𝐅𝐢𝐫𝐞";
  a.message = "¿𝐐𝐮é 𝐯𝐞𝐫𝐬𝐢ó𝐧 𝐝𝐞𝐬𝐞𝐚𝐬 𝐞𝐣𝐞𝐜𝐮𝐭𝐚𝐫?";
  a.addAction("👹 𝐅𝐫𝐞𝐞 𝐅𝐢𝐫𝐞 𝐍𝐨𝐫𝐦𝐚𝐥");
  a.addAction("💎 𝐅𝐫𝐞𝐞 𝐅𝐢𝐫𝐞 𝐌𝐀𝐗");
  a.addCancelAction("Cancelar");

  const r = await a.present();
  if (r === 0) Safari.open("freefire://");
  if (r === 1) Safari.open("freefiremax://");
}

// --- Utilidades ---
async function solicitarPassword(txt) {
  const a = new Alert();
  a.title = "🔒 𝐒𝐄𝐂𝐔𝐑𝐈𝐓𝐘";
  a.message = txt;
  a.addTextField("Password", "");
  a.addAction("🔓 𝐄𝐧𝐭𝐫𝐚𝐫");
  a.addCancelAction("Cancelar");
  const id = await a.present();
  return id === -1 ? null : a.textFieldValue(0);
}

async function notificar(titulo, cuerpo) {
  const n = new Notification();
  n.title = titulo;
  n.body = cuerpo;
  n.schedule();
}

async function confirmarAccion(op) {
  const a = new Alert();
  a.title = "⚠️ 𝐂𝐨𝐧𝐟𝐢𝐫𝐦𝐚𝐫";
  a.message = "¿𝐃𝐞𝐬𝐞𝐚 𝐚𝐜𝐭𝐢𝐯𝐚𝐫: " + op + "?\n\n⚠️ 𝐄𝐬𝐭𝐨 𝐦𝐨𝐝𝐢𝐟𝐢𝐜𝐚𝐫á 𝐥𝐚 𝐬𝐞𝐧𝐬𝐢𝐛𝐢𝐥𝐢𝐝𝐚𝐝.";
  a.addAction("✅ 𝐒𝐈, 𝐀𝐂𝐓𝐈𝐕𝐀𝐑");
  a.addCancelAction("❌ 𝐍𝐎");
  const r = await a.present();
  return r === 0;
}

async function errorAlert(t, m) {
  const a = new Alert();
  a.title = t;
  a.message = m;
  a.addAction("OK");
  await a.present();
}

function esperar(ms) { return new Promise(r => Timer.schedule(ms, false, r)); }

await main();