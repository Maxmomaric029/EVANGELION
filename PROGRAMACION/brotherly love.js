

let pass = await PromptPassword("†𝐒𝐞𝐜𝐫𝐞𝐭†\nOnly for the chosen ones.");

if (pass !== "Brotherly Love") {
  let alert = new Alert();
  alert.title = "Access Denied";
  alert.message = "Wrong Credentials. Get out.";
  alert.addCancelAction("EXIT");
  await alert.present();
  Script.complete();
} else {

  let notif1 = new Notification();
  notif1.title = "† Connection †";
  notif1.body = "𝑪𝑯𝑬𝑪𝑲 𝑻𝑯𝑬 𝑭𝑶𝑶𝑻𝑨𝑮𝑬 6️⃣1️⃣ 𝑨𝑵𝑫 6️⃣9️⃣";
  notif1.schedule();

  let notif2 = new Notification();
  notif2.title = "Sincronizando Archivos 🇧🇷";
  notif2.body = "𝑽𝑲 ✝";
  notif2.schedule();

    let notif3 = new Notification();
  let alert = new Alert();
  alert.title = "⛓️ brothery love 𝐯𝟗 ⛓️";
  alert.message = "Select your weapon:";

  alert.addAction("† 𝐑𝐞𝐠𝐞𝐝𝐢𝐭 𝐅𝐮𝐥𝐥 𝐕𝐞𝐫𝐦𝐞𝐥𝐡𝐨 †");
  alert.addAction("☢️ 𝐓𝐫𝐢𝐜𝐤 𝐆𝐞𝐥𝐨 𝐈𝐧𝐬𝐚𝐧𝐨 ☢️");
  alert.addAction("♞ 𝐀𝐮𝐱𝐢𝐥𝐢𝐨 𝐅𝐨𝐜𝐚𝐝𝐨 [𝐏𝐑𝐈𝐕]");
  alert.addAction("ᕲ 𝐓𝐨𝐮𝐜𝐡 𝐎𝐧𝐞𝐭𝐚𝐩 𝐢𝐎𝐒 ᕱ");
  alert.addAction("⛓️ 𝐒𝐞𝐧𝐬𝐢 𝐁𝐥𝐢𝐧𝐝𝐚𝐝𝐚 𝐯𝟗 ⛓️");
  alert.addAction("🇧🇷 𝐄𝐝𝐢𝐭 𝐗𝐢𝐭𝐚𝐝𝐚 𝐏𝐫𝐞𝐦𝐢𝐮𝐦 🇧🇷");
  alert.addAction("♚ 𝐁𝐲𝐩𝐚𝐬𝐬 𝐄𝐱𝐭𝐞𝐫𝐧𝐚𝐥 𝐒𝐚𝐟𝐞 ♚");
  alert.addAction("// 𝐏𝐚𝐜𝐤 𝐑𝐞𝐠𝐞𝐝𝐢𝐭 𝐃𝐚𝐫𝐤 //");

  alert.addCancelAction("Disconnect");
  let resp = await alert.present();

  const opciones = [
    "† Regedit Full Vermelho †",
    "☢️ Trick Gelo Insano ☢️",
    "♞ Auxilio Focado [PRIV]",
    "ᕲ Touch Onetap iOS ᕱ",
    "⛓️ Sensi Blindada v9 ⛓️",
    "🇧🇷 Edit Xitada Premium 🇧🇷",
    "♚ Bypass External Safe ♚",
    "// Pack Regedit Dark //"
  ];

  if (resp >= 0 && resp < opciones.length) {
    let confirm = new Alert();
    confirm.title = "ＩＮＪＥＣＴＩＮＧ";
    confirm.message = `¿Inyectar ${opciones[resp]} en el sistema?`;
    confirm.addAction("INJECT");
    confirm.addCancelAction("ABORT");
    let confResp = await confirm.present();

    if (confResp === 0) {
      let ff = new Alert();
      ff.title = "𝐎𝐏𝐄𝐍 𝐆𝐀𝐌𝐄";
      ff.message = "Configuración activa. Selecciona versión:";
      ff.addAction("Free Fire Normal");
      ff.addAction("Free Fire Max");
      ff.addCancelAction("Close");
      let ffResp = await ff.present();

      // Arte ASCII estilo Ghost/Dark
      let ascii = new Alert();
      ascii.title = "† Brotherly love †";
      ascii.message = `
      ☠️  ──────────  ☠️
          ⣠⣶⣶⣶⣦
        ⣠⣤⣤⣄⣀⣾⣿⠟⠛⠻⢿⣷
      ⢰⣿⡿⠛⠙⠻⣿⣿⠁    ⣶⢿⡇
      ⢿⣿⣇    ⠈⠏    By Bloodie hackz🏴‍☠️
       ⠻⣿⣷⣦⣤⣀     ⣾⡿⠃
         ⠉⠉⠻⣿⣄⣴⣿⠟
             ⣿⡿⠟⠁
      ☠️  ──────────  ☠️`;
      ascii.addAction("CONTINUE");
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
  sf.title = "AUTHENTICATION";
  sf.message = msg;
  sf.addTextField("Password", "");
  sf.addAction("LOGIN");
  sf.addCancelAction("EXIT");
  let result = await sf.present();
  if (result === -1) return null;
  return sf.textFieldValue(0);
}