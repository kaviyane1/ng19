/* Copyright (C) 2021 SL-ASIATA
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
SL-ASIATA THISAN
*/

const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
async function whatsAsena() {
  const conn = new WAConnection();
  conn.logger.level = 'warn';
  conn.version = [2, 2126, 14]

  conn.on('connecting', async () => {
    console.log(`${chalk.green.bold('SIMPLE-BOT')}${chalk.green.bold('Team')}
${chalk.white.italic('SIMPLE-BOT String code recipient')}
${chalk.blue.bold('ℹ️  Connecting SIMPLE-BOT... Please wait.')}`);
  });

  conn.on('open', async () => {
    console.log(
      chalk.green.bold('SIMPLE-BOT QR Code: '),
      'SIMPLE;;;' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      )
    );
    await conn.sendMessage(
      conn.user.jid,
      'SIMPLE;;;' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      ),
      MessageType.text
    );
    if (conn.user.jid.startsWith('91')) {
      await conn.sendMessage(
        conn.user.jid,
        '*~___________~* *'+ conn.user.name + ' ~___________~*\n\n*▪️ SIMPLE-BOT Scanned✅️*\n*▪️Thanks For Choosing SIMPLE-BOT 😈*',
        MessageType.text
      );
    } else {
      await conn.sendMessage(
        conn.user.jid,
        '*~_____________~* *'+ conn.user.name + ' ~_____________~*\n\n*▪️ SIMPLE-BOT Successfully Scanned✅️*\n*▪️Thanks For Choosing SIMPLE-BOT😈*',
        MessageType.text
      );
    }
    console.log(
      chalk.green.bold(
        "\n\n Nigalkku sandesham pakarthan \n kaliyunnillegil,whatsapp parishodikkuka \n nigalude numberillekku  code ayachinnu!\n\n\n\n"
      ),
      chalk.green.bold(
        'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
      )
    );
    process.exit(0);
  });

  await conn.connect();
}

whatsAsena();
