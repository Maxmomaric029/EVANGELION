// 🇧🇷 CONFIGURACIÓN BRASIL
const PASS_KEY = "brasil";

async function main() {
  // Intro ASCII
  await mostrarArte();

  // Login
  const pass = await inputPass("👑 𝐃𝐢𝐠𝐢𝐭𝐞 𝐚 𝐬𝐞𝐧𝐡𝐚 𝐕𝐈𝐏:");
  if (pass !== PASS_KEY) {
    const n = new Notification();
    n.title = "🚫 𝐄𝐑𝐑𝐎";
    n.body = "𝐒𝐞𝐧𝐡𝐚 𝐢𝐧𝐜𝐨𝐫𝐫𝐞𝐭𝐚!";
    n.schedule();
    return;
  }

  // Notificación Bienvenida
  notif("🇧🇷 𝐁𝐄𝐌-𝐕𝐈𝐍𝐃𝐎", "𝐎 𝐏𝐚𝐢 𝐭á 𝐎𝐧! 𝐀𝐭𝐢𝐯𝐚𝐧𝐝𝐨 𝐗𝐢𝐭...");

  // Menú
  const cheat = await menuXit();
  if (!cheat) return;

  // Simulación de carga visual
  await cargarBarra(cheat);

  // Abrir FF
  await launchFF();
}

async function menuXit() {
  const a = new Alert();
  a.title = "👹 𝐌𝐄𝐍𝐔 𝐗𝐈𝐓𝐀𝐃𝐎 𝟐𝟎𝟐𝟓";
  a.message = "𝐄𝐬𝐜𝐨𝐥𝐡𝐚 𝐬𝐮𝐚 𝐭𝐫𝐚𝐩𝐚ç𝐚:";

  const list = [
    "👑 𝐎 𝐑𝐞𝐢 𝐝𝐨 𝐂𝐚𝐩𝐚 𝐕𝟗",
    "🚀 𝐏𝐮𝐱𝐚𝐝𝐚 𝐈𝐧𝐬𝐚𝐧𝐚",
    "🧊 𝐆𝐞𝐥𝐨 𝐑𝐚𝐩𝐢𝐝𝐨 𝐌𝐚𝐜𝐫𝐨",
    "👺 𝐀𝐢𝐦𝐋𝐨𝐜𝐤 𝐀𝐩𝐞𝐥ã𝐨",
    "⚔️ 𝐇𝐢𝐭𝐛𝐨𝐱 𝐏𝐞𝐬𝐜𝐨ç𝐨",
    "👻 𝐌𝐨𝐝𝐨 𝐅𝐚𝐧𝐭𝐚𝐬𝐦𝐚",
    "🔄 𝐐𝐮𝐢𝐜𝐤 𝐒𝐰𝐢𝐭𝐜𝐡 𝐏𝐫𝐨"
  ];

  list.forEach(x => a.addAction(x));
  a.addCancelAction("❌ 𝐒𝐚𝐢𝐫");
  
  const idx = await a.present();
  return idx === -1 ? null : list[idx];
}

async function cargarBarra(nombre) {
  const a = new Alert();
  a.title = "⏳ 𝐀𝐭𝐢𝐯𝐚𝐧𝐝𝐨...";
  a.message = "💉 𝐈𝐧𝐣𝐞𝐭𝐚𝐧𝐝𝐨: " + nombre + "\n\n⬜⬜⬜⬜⬜ 0%";
  a.addAction("🚀 𝐀𝐠𝐮𝐚𝐫𝐝𝐞...");
  // Truco visual: No esperamos input real, solo mostramos alerta
  // En Scriptable las alertas pausan el script, así que simulamos pasos
  
  notif("⏳ 𝟏𝟎%", "𝐂𝐚𝐫𝐫𝐞𝐠𝐚𝐧𝐝𝐨 𝐚𝐫𝐪𝐮𝐢𝐯𝐨𝐬...");
  await delay(1000);
  notif("⏳ 𝟓𝟎%", "𝐁𝐲𝐩𝐚𝐬𝐬 𝐚𝐭𝐢𝐯𝐚𝐝𝐨...");
  await delay(1000);
  notif("✅ 𝟏𝟎𝟎%", nombre + " 𝐀𝐓𝐈𝐕𝐀𝐃𝐎 𝐂𝐎𝐌 𝐒𝐔𝐂𝐄𝐒𝐒𝐎!");
}

async function launchFF() {
  const a = new Alert();
  a.title = "🎮 𝐀𝐁𝐑𝐈𝐑 𝐉𝐎𝐆𝐎";
  a.addAction("👹 𝐀𝐛𝐫𝐢𝐫 𝐅𝐫𝐞𝐞 𝐅𝐢𝐫𝐞");
  a.addAction("💎 𝐀𝐛𝐫𝐢𝐫 𝐅𝐅 𝐌𝐀𝐗");
  a.addCancelAction("𝐂𝐚𝐧𝐜𝐞𝐥𝐚𝐫");
  const r = await a.present();
  if (r === 0) Safari.open("freefire://");
  if (r === 1) Safari.open("freefiremax://");
}

async function mostrarArte() {
  const a = new Alert();
  a.title = "𝐗𝐈𝐓 𝐁𝐑𝐀𝐒𝐈𝐋";
  a.message = `
   ▄▀▄▀▄▀▄▀▄▀▄▀▄▀▄
   █ 👹 𝐗𝐈𝐓 𝐁𝐑 👹 █
   █  𝐀𝐈𝐌 𝐆𝐎𝐃    █
   ▀▄▀▄▀▄▀▄▀▄▀▄▀▄▀
  `;
  a.addAction("▶ 𝐈𝐍𝐈𝐂𝐈𝐀𝐑");
  await a.present();
}

// Helpers
async function inputPass(msg) {
  const a = new Alert();
  a.title = "🔑 𝐋𝐎𝐆𝐈𝐍";
  a.message = msg;
  a.addSecureTextField("Senha", "");
  a.addAction("𝐎𝐊");
  a.addCancelAction("𝐂𝐚𝐧𝐜𝐞𝐥𝐚𝐫");
  const r = await a.present();
  return r === -1 ? null : a.textFieldValue(0);
}

function notif(t, b) {
  const n = new Notification();
  n.title = t;
  n.body = b;
  n.schedule();
}

function delay(ms) { return new Promise(r => Timer.schedule(ms, false, r)); }

await main();