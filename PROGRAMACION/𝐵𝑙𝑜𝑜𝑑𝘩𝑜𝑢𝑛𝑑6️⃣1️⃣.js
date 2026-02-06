let pass = await PromptPassword("🩸 𝐁𝐋𝐎𝐎𝐃𝐇𝐎𝐔𝐍𝐃 𝐒𝐘𝐒𝐓𝐄𝐌 🩸\nTracking targets...");

if (pass !== "blood") {
  let alert = new Alert();
  alert.title = "ACCESS DENIED";
  alert.message = "Get out.";
  alert.addCancelAction("EXIT");
  await alert.present();
  Script.complete();
} else {

  let notif1 = new Notification();
  notif1.title = "☣️ Bloodhound Online ☣️";
  notif1.body = "𝑻𝑨𝑹𝑮𝑬𝑻 6️⃣9️⃣ 𝑨𝑵𝑫 6️⃣1️⃣ 𝑳𝑶𝑪𝑨𝑻𝑬𝑫";
  notif1.schedule();

  let notif2 = new Notification();
  notif2.title = "🩸 𝐀𝐮𝐱𝐢𝐥𝐢𝐨 𝐁𝐥𝐢𝐧𝐝𝐚𝐝𝐨";
  notif2.body = "Sensi modified successfully.";
  notif2.schedule();

  let alert = new Alert();
  alert.title = "🐺 𝐁𝐋𝐎𝐎𝐃𝐇𝐎𝐔𝐍𝐃 𝐗𝐈𝐓 🐺";
  alert.message = "selecciona el hack a inyectar:";

  alert.addAction("† 𝐑𝐞𝐠𝐞𝐝𝐢𝐭 𝐅𝐮𝐥𝐥 𝐕𝐞𝐫𝐦𝐞𝐥𝐡𝐨 †");
  alert.addAction("☢️ 𝐓𝐫𝐢𝐜𝐤 𝐆𝐞𝐥𝐨 𝐀𝐛𝐬𝐮𝐫𝐝𝐨 ☢️");
  alert.addAction("⛓️ 𝐀𝐮𝐱𝐢𝐥𝐢𝐨 𝐌𝐢𝐫𝐚 𝐅𝐨𝐜𝐚𝐝𝐚 ⛓️");
  alert.addAction("亗 𝐒𝐞𝐧𝐬𝐢 𝐗-𝐑𝐚𝐲 𝐈𝐧𝐬𝐚𝐧𝐚 亗");
  alert.addAction("• 𝐄𝐝𝐢𝐭 𝐓𝐨𝐮𝐜𝐡 𝐁𝐥𝐢𝐧𝐝𝐚𝐝𝐨 •");
  alert.addAction("// 𝐏𝐚𝐜𝐤 𝐒𝐞𝐜𝐫𝐞𝐭 𝐁𝐫𝐚𝐬𝐢𝐥 //");
  alert.addAction("🛡️ 𝐁𝐲𝐩𝐚𝐬𝐬 𝐆𝐡𝐨𝐬𝐭 [𝐎𝐍] 🛡️");
  alert.addAction("⚙️ 𝐂𝐥𝐞𝐚𝐧 𝐓𝐫𝐚𝐜𝐞𝐬 𝐋𝐨𝐠𝐬 ⚙️");

  alert.addCancelAction("Withdraw");
  let resp = await alert.present();

  const opciones = [
    "† Regedit Full Vermelho †",
    "☢️ Trick Gelo Absurdo ☢️",
    "⛓️ Auxilio Mira Focada ⛓️",
    "亗 Sensi X-Ray Insana 亗",
    "• Edit Touch Blindado •",
    "// Pack Secret Brasil //",
    "🛡️ Bypass Ghost [ON] 🛡️",
    "⚙️ Clean Traces Logs ⚙️"
  ];

  if (resp >= 0 && resp < opciones.length) {
    let confirm = new Alert();
    confirm.title = "6️⃣1️⃣ 𝚈 𝚢𝚊 👿";
    confirm.message = `Injecting: ${opciones[resp]}`;
    confirm.addAction("KILL");
    confirm.addCancelAction("WAIT");
    let confResp = await confirm.present();

    if (confResp === 0) {
      let ff = new Alert();
      ff.title = "💀 𝐒𝐄𝐋𝐄𝐂𝐓";
      ff.message = "selecciona tu versión de Free Fire:";
      ff.addAction("Free Fire Normal");
      ff.addAction("Free Fire Max");
      ff.addCancelAction("Cancel");
      let ffResp = await ff.present();

      let ascii = new Alert();
      ascii.title = "";
      ascii.message = `
           |\\_/|
           | @ @   Run.
           |   <>              _
           |  _/\\------____ ((| |))
           |               \`--' |
       ____|_       ___|   |___.'
      /_/_____/____/_______|
      
      🩸 𝐁𝐋𝐎𝐎𝐃𝐇𝐎𝐔𝐍𝐃 𝐀𝐂𝐓𝐈𝐕𝐄
      `;
      ascii.addAction("GO");
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
  sf.title = "🩸 𝐋𝐎𝐆𝐈𝐍";
  sf.message = msg;
  sf.addTextField("Key", "");
  sf.addAction("UNLOCK");
  sf.addCancelAction("EXIT");
  let result = await sf.present();
  if (result === -1) return null;
  return sf.textFieldValue(0);
}