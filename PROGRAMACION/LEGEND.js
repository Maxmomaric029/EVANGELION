let pass = await PromptPassword("👩‍💻 Bloodie hackz6️⃣1️⃣x6️⃣9️⃣");

if (pass !== "legend") {
  let alert = new Alert();
  alert.title = "ACCESS DENIED";
  alert.message = "OVER ALL.";
  alert.addCancelAction("EXIT");
  await alert.present();
  Script.complete();
} else {

  let notif1 = new Notification();
  notif1.title = "⚡ White444 Preset";
  notif1.body = "sensibilidad 100% Vermelho.";
  notif1.schedule();
  let alert = new Alert();
  alert.title = "👑";
  alert.message = "Selecciona tu hack :";

  alert.addAction("👺 𝐏𝐚𝐜𝐤 𝐑𝐮𝐨𝐤 𝐅𝐅 [𝐏𝐫𝐢𝐯]");
  alert.addAction("🇧🇷 𝐒𝐞𝐧𝐬𝐢 𝐖𝐡𝐢𝐭𝐞𝟒𝟒𝟒 (𝐕.𝐌𝐚𝐱)");
  alert.addAction("⚡ 𝐓𝐫𝐢𝐜𝐤 𝐓𝐰𝐨𝟗 𝐌𝐨𝐛𝐢𝐥𝐞 [𝐎𝐍]");
  alert.addAction("☠️ 𝐒𝐞𝐭 𝐓𝐨𝐱𝐢𝐜 𝐏𝐯𝐏 𝐯𝟕");
  alert.addAction("❄️ 𝐀𝐫𝐪𝐮𝐢𝐯𝐨 𝐀𝐩𝐞𝐥𝐚 𝐏𝐚𝐭𝐨 (𝐗)");
  alert.addAction("😈 𝐌𝐨́𝐝𝐮𝐥𝐨 𝐗𝐢𝐭𝐚𝐝𝐚 𝐑𝐞𝐚𝐥");
  alert.addAction("🔥 𝐃𝐚𝐭𝐚 𝐃𝐚𝐂𝐫𝐮𝐳 𝐒𝐞𝐜𝐫𝐞𝐭 🔥");
  alert.addAction("🎯 𝐌𝐚𝐜𝐫𝐨 𝐏𝐚𝐧𝐢𝐜 𝐑𝐞𝐝 [𝐎𝐍]");

  alert.addCancelAction("Log Out");
  let resp = await alert.present();

  const opciones = [
    "👺 Pack Ruok FF [Priv]",
    "🇧🇷 Sensi White444 (V.Max)",
    "⚡ Trick Two9 Mobile [ON]",
    "☠️ Set Toxic PvP v7",
    "❄️ Arquivo Apela Pato (X)",
    "😈 Módulo Xitada Real",
    "🔥 Data DaCruz Secret 🔥",
    "🎯 Macro Panic Red [ON]"
  ];

  if (resp >= 0 && resp < opciones.length) {
    let confirm = new Alert();
    confirm.title = "😈 𝐂𝐎𝐍𝐅𝐈𝐑𝐌𝐀𝐑";
    confirm.message = `¿Aplicar ${opciones[resp]} a tu cuenta?`;
    confirm.addAction("START");
    confirm.addCancelAction("BACK");
    let confResp = await confirm.present();

    if (confResp === 0) {
      let ff = new Alert();
      ff.title = "🎮 𝐆𝐀𝐌𝐄 𝐒𝐄𝐋𝐄𝐂𝐓";
      ff.message = "Escoge tu juego";
      ff.addAction("Free Fire Normal");
      ff.addAction("Free Fire Max");
      ff.addCancelAction("Cancel");
      let ffResp = await ff.present();

      let ascii = new Alert();
      ascii.title = "";
      ascii.message = `
      
           ______
        __/  __  \\__
       /_/  |  |  \\_\\
      |  |  |  |  |  |
      |__|__|__|__|__|
       \\____________/
        |          |
        |  L E G E N D |
        |__________|
      
      👺𝐀𝐂𝐓𝐈𝐕𝐀𝐓𝐄𝐃
      `;
      ascii.addAction("GO TO LOBBY");
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
  sf.addTextField("ID Key", "");
  sf.addAction("UNLOCK");
  sf.addCancelAction("EXIT");
  let result = await sf.present();
  if (result === -1) return null;
  return sf.textFieldValue(0);
}