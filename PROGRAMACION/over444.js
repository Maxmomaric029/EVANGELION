let pass = await PromptPassword("🛑 𝐒𝐄𝐂𝐔𝐑𝐈𝐓𝐘 𝐎𝐕𝐄𝐑𝟒𝟒𝟒 🛑\nIngrese la llave de acceso VIP:");

if (pass !== "over444" && pass !== "over 444") {
  let alert = new Alert();
  alert.title = "🚫 𝐀𝐂𝐂𝐄𝐒𝐒 𝐃𝐄𝐍𝐈𝐄𝐃";
  alert.message = "ID no autorizada en el servidor.";
  alert.addCancelAction("Cerrar");
  await alert.present();
  Script.complete();
} else {
  let notif1 = new Notification();
  notif1.title = "🔞 𝐈𝐧𝐣𝐞𝐜𝐭𝐢𝐧𝐠 𝐑𝐞𝐠𝐞𝐝𝐢𝐭...";
  notif1.body = "bloodie over all";
  notif1.schedule();

  let notif2 = new Notification();
  notif2.title = "🩸 𝐁𝐥𝐨𝐨𝐝ie over all";
  notif2.body = "AimLock: [ACTIVE]";
  notif2.schedule();

  let notif3 = new Notification();
  notif3.title = "🇧🇷 𝐎𝐯𝐞𝐫𝟒𝟒𝟒 𝐂𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝";
  notif3.body = " 𝐁𝐫𝐚𝐳𝐢𝐥👩‍💻";
  notif3.schedule();

  let alert = new Alert();
  alert.title = "👹 𝐎𝐯𝐞𝐫𝟒𝟒𝟒 𝐌𝐞𝐧𝐮 𝐯𝟗 👹";
  alert.message = "Selecciona tu configuración letal:";

  alert.addAction("🇧🇷 𝐒𝐞𝐧𝐬𝐢 𝐖𝐡𝐢𝐭𝐞𝟒𝟒𝟒 [𝐅𝐮𝐥𝐥 𝐕𝐞𝐫𝐦𝐞𝐥𝐡𝐨]");
  alert.addAction("🔞 𝐑𝐞𝐠𝐞𝐝𝐢𝐭 𝐈𝐥𝐥𝐞𝐠𝐚𝐥 (𝐏𝐫𝐢𝐯 𝐯𝟗)");
  alert.addAction("🩸 𝐄𝐝𝐢𝐭 𝐕𝐢𝐨𝐥𝐞𝐧𝐜𝐞 [𝐎𝐧𝐥𝐲 𝐑𝐞𝐝]");
  alert.addAction("👺 𝐀𝐫𝐪𝐮𝐢𝐯𝐨 𝐃𝐚𝐂𝐫𝐮𝐳 [𝐋𝐨𝐜𝐤𝐞𝐝]");
  alert.addAction("⚔️ 𝐏𝐚𝐜𝐤 𝐍𝐨𝐛𝐫𝐮 🇧🇷 (𝐂𝐚𝐩𝐚 𝐌𝐚𝐱)");
  alert.addAction("⚡ 𝐓𝐫𝐢𝐜𝐤 𝐓𝐰𝐨𝟗 [𝐈𝐧𝐬𝐭𝐚 𝐊𝐢𝐥𝐥]");
  alert.addAction("👁️ 𝐀𝐢𝐦𝐋𝐨𝐜𝐤 𝐃𝐚𝐭𝐚 // 𝐯𝟒");
  alert.addAction("🤡 𝐒𝐞𝐧𝐬𝐢 𝐅𝐚𝐯𝐞𝐥𝐚 [𝐂𝐡𝐚𝐨𝐬 𝐎𝐍]");
  alert.addAction("☠️ 𝐌𝐚𝐜𝐫𝐨 𝐕𝐞𝐧𝐨𝐦 (𝐀𝐢𝐦 𝐁𝐨𝐭)");
  alert.addAction("🌑 𝐃𝐚𝐭𝐚 𝐒𝐞𝐜𝐫𝐞𝐭 𝟒𝟒𝟒 [𝐇𝐢𝐝𝐝𝐞𝐧]");
  alert.addAction("🦅 𝐑𝐞𝐞𝐝𝐢𝐭 𝐏𝐫𝐢𝐦𝐞 [𝐌𝐚𝐱 𝐒𝐞𝐧𝐬𝐢]");
  alert.addAction("🔫 𝐓𝐨𝐮𝐜𝐡 𝐀𝐩𝐞𝐥𝐚 𝐏𝐚𝐭𝐨 (𝐁𝐫𝐨𝐤𝐞𝐧)");
  alert.addAction("☣️ 𝐌𝐞𝐭𝐚 𝐓𝐫𝐚𝐜𝐤𝐞𝐫 [𝐇𝐚𝐫𝐝]");

  alert.addCancelAction("🔌 Desconectar");
  let resp = await alert.present();

  const opciones = [
    "Sensi White444 [Full Vermelho]",
    "Regedit Illegal (Priv v9)",
    "Edit Violence [Only Red]",
    "Arquivo DaCruz [Locked]",
    "Pack Nobru (Capa Max)",
    "Trick Two9 [Insta Kill]",
    "AimLock Data // v4",
    "Sensi Favela [Chaos ON]",
    "Macro Venom (Aim Bot)",
    "Data Secret 444 [Hidden]",
    "Reedit Prime [Max Sensi]",
    "Touch Apela Pato (Broken)",
    "Meta Tracker [Hard]"
  ];

  if (resp >= 0 && resp < opciones.length) {
    let confirm = new Alert();
    confirm.title = "🚧 𝐂𝐎𝐍𝐅𝐈𝐑𝐌 𝐈𝐍𝐉𝐄𝐂𝐓𝐈𝐎𝐍";
    confirm.message = `¿Aplicar configuración: \n${opciones[resp]}? \n\n⚠️ Anti-Ban: 100% Secure`;
    confirm.addAction("💉 INJECT NOW");
    confirm.addCancelAction("Cancelar");
    let confResp = await confirm.present();

    if (confResp === 0) {
      let ff = new Alert();
      ff.title = "🎮 𝐒𝐄𝐋𝐄𝐂𝐓 𝐓𝐀𝐑𝐆𝐄𝐓";
      ff.message = "¿Dónde inyectar el archivo?";
      ff.addAction("🔥 Free Fire Normal");
      ff.addAction("⚡ Free Fire MAX");
      ff.addCancelAction("Abortar");
      let ffResp = await ff.present();

      let ascii = new Alert();
      ascii.title = "𝐊 𝐈 𝐍 𝐆  𝐎 𝐅  𝐗 𝐈 𝐓";
      ascii.message = `
       👑
     .+.+.+.
    | | | | |
    |_______|
   
   STATUS: CROWNED
   BY OVER444
      `;
      ascii.addAction("🚀 𝐋𝐀𝐔𝐍𝐂𝐇");
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
  sf.title = "🔐 𝐋𝐎𝐆𝐈𝐍";
  sf.message = msg;
  sf.addSecureTextField("Password", "");
  sf.addAction("🔓 Unlock");
  sf.addCancelAction("Exit");
  let result = await sf.present();
  if (result === -1) return null;
  return sf.textFieldValue(0);
}