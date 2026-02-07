// ☠️ DESTROYER SCRIPT
const PASS = "777";

async function main() {
  const p = await prompt("☠️ 𝐔𝐒𝐄𝐑 𝐀𝐔𝐓𝐇", "𝐄𝐧𝐭𝐞𝐫 𝐏𝐚𝐬𝐬𝐜𝐨𝐝𝐞:");
  if (p !== PASS) {
    await alert("⛔ 𝐀𝐂𝐂𝐄𝐒𝐒 𝐃𝐄𝐍𝐈𝐄𝐃", "𝐈𝐧𝐯𝐚𝐥𝐢𝐝 𝐂𝐫𝐞𝐝𝐞𝐧𝐭𝐢𝐚𝐥𝐬.");
    return;
  }

  notify("👁️ 𝐒𝐘𝐒𝐓𝐄𝐌", "𝐇𝐢𝐝𝐢𝐧𝐠 𝐃𝐞𝐯𝐢𝐜𝐞 𝐈𝐃...");
  
  // Selección de modo
  const mode = await selectMode();
  if(!mode) return;

  // Selección de opciones detalladas
  const cheat = await selectCheat(mode);
  if(!cheat) return;

  // Confirmación final
  const ready = await confirm("⚠️ 𝐖𝐀𝐑𝐍𝐈𝐍𝐆", "𝐀𝐜𝐭𝐢𝐯𝐚𝐭𝐞 " + cheat + "?\n𝐓𝐡𝐢𝐬 𝐦𝐚𝐲 𝐛𝐞 𝐝𝐞𝐭𝐞𝐜𝐭𝐞𝐝 𝐢𝐟 𝐚𝐛𝐮𝐬𝐞𝐝.");
  if(ready) {
    notify("💉 𝐈𝐍𝐉𝐄𝐂𝐓𝐈𝐍𝐆...", "𝐏𝐥𝐞𝐚𝐬𝐞 𝐰𝐚𝐢𝐭 𝐰𝐡𝐢𝐥𝐞 𝐰𝐞 𝐛𝐲𝐩𝐚𝐬𝐬.");
    await wait(2000);
    notify("✅ 𝐑𝐄𝐀𝐃𝐘", "𝐆𝐨𝐨𝐝 𝐥𝐮𝐜𝐤, 𝐋𝐞𝐠𝐞𝐧𝐝.");
    openGame();
  }
}

async function selectMode() {
  const a = new Alert();
  a.title = "⚙️ 𝐒𝐄𝐋𝐄𝐂𝐓 𝐌𝐎𝐃𝐄";
  a.addAction("🛡️ 𝐋𝐞𝐠𝐢𝐭 𝐌𝐨𝐝𝐞 (𝐒𝐚𝐟𝐞)");
  a.addAction("👹 𝐑𝐚𝐠𝐞 𝐌𝐨𝐝𝐞 (𝐑𝐢𝐬𝐤𝐲)");
  a.addCancelAction("𝐄𝐱𝐢𝐭");
  const r = await a.present();
  if (r === -1) return null;
  return r === 0 ? "legit" : "rage";
}

async function selectCheat(mode) {
  const a = new Alert();
  a.title = mode === "legit" ? "🛡️ 𝐋𝐄𝐆𝐈𝐓 𝐎𝐏𝐓𝐈𝐎𝐍𝐒" : "👹 𝐑𝐀𝐆𝐄 𝐎𝐏𝐓𝐈𝐎𝐍𝐒";
  
  let opts = [];
  if (mode === "legit") {
    opts = [
      "🔱 𝐀𝐢𝐦 𝐀𝐬𝐬𝐢𝐬𝐭 𝐒𝐦𝐨𝐨𝐭𝐡",
      "📱 𝐃𝐏𝐈 𝐎𝐩𝐭𝐢𝐦𝐢𝐳𝐞𝐫",
      "🔭 𝐒𝐜𝐨𝐩𝐞 𝐏𝐫𝐞𝐜𝐢𝐬𝐢𝐨𝐧",
      "🔇 𝐒𝐢𝐥𝐞𝐧𝐭 𝐒𝐭𝐞𝐩𝐬",
      "⚓ 𝐍𝐨 𝐑𝐞𝐜𝐨𝐢𝐥 𝟓𝟎%"
    ];
  } else {
    opts = [
      "💀 𝐀𝐢𝐦𝐁𝐨𝐭 𝟑𝟔𝟎",
      "🩸 𝐌𝐚𝐠𝐢𝐜 𝐁𝐮𝐥𝐥𝐞𝐭",
      "🚀 𝐒𝐩𝐞𝐞𝐝 𝐇𝐚𝐜𝐤",
      "🧱 𝐖𝐚𝐥𝐥 𝐇𝐚𝐜𝐤 𝐋𝐢𝐭𝐞",
      "🛸 𝐅𝐥𝐲 𝐂𝐚𝐫"
    ];
  }

  opts.forEach(o => a.addAction(o));
  a.addCancelAction("𝐁𝐚𝐜𝐤");
  
  const r = await a.present();
  return r === -1 ? null : opts[r];
}

async function openGame() {
  const a = new Alert();
  a.title = "🎮 𝐋𝐀𝐔𝐍𝐂𝐇";
  a.addAction("𝐅𝐫𝐞𝐞 𝐅𝐢𝐫𝐞");
  a.addAction("𝐅𝐅 𝐌𝐀𝐗");
  const r = await a.present();
  if (r === 0) Safari.open("freefire://");
  if (r === 1) Safari.open("freefiremax://");
}

// Utils
async function prompt(t, m) {
  const a = new Alert();
  a.title = t;
  a.message = m;
  a.addSecureTextField("Pass", "");
  a.addAction("Login");
  a.addCancelAction("Cancel");
  const r = await a.present();
  return r === -1 ? null : a.textFieldValue(0);
}

async function alert(t, m) {
  const a = new Alert();
  a.title = t;
  a.message = m;
  a.addAction("Close");
  await a.present();
}

async function confirm(t, m) {
  const a = new Alert();
  a.title = t;
  a.message = m;
  a.addAction("Yes, Inject");
  a.addCancelAction("No");
  const r = await a.present();
  return r === 0;
}

function notify(t, b) {
  const n = new Notification();
  n.title = t;
  n.body = b;
  n.schedule();
}

function wait(ms) { return new Promise(r => Timer.schedule(ms, false, r)); }

await main();