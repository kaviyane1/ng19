/* Copyright (C) 2021 SL-ASIATA THISAN 
Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.
THISAN 
*/

const {MessageType, GroupSettingChange} = require('@adiwajshing/baileys');
const Asiata = require('../events');
const Config = require('../config');
const UNQ = "wrong command dont type words after command"
const DDO = `👿CRASHING...BY `+Config.BOT_NAME+`👿`
const UUU = "CRASH GROUP (Bot Bug Virus)"
const ONO = ".tagall *🐼We are Deamons Do not run away...🐼*"
const Language = require('../language');
const Lang = Language.getString('admin');
const mut = Language.getString('mute');

Asiata.addcommand({pattern: 'bug ?(.*)', fromMe: true, desc: UUU,deleteCommand: true}, (async (message, match) => {    
        if (match[1] == '') {
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.sendMessage(message.jid,DDO,MessageType.text);
            await message.client.sendMessage(message.jid,DDO,MessageType.text);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.sendMessage(message.jid,ONO,MessageType.text);
            await message.client.sendMessage(message.jid,".tagadmin",MessageType.text);
            await message.client.toggleDisappearingMessages(message.jid, 0);
        }
        else {
            return await message.client.sendMessage(message.jid, UNQ, MessageType.text);
        }

}));


Asiata.addcommand({pattern: 'awsh ?(.*)', fromMe: true, desc: UUU, dontAddCommandList: true}, (async (message, match) => {    
        if (match[1] == '') {
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.sendMessage(message.jid,DDO,MessageType.text);
            await message.client.sendMessage(message.jid,DDO,MessageType.text);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            await message.client.sendMessage(message.jid,ONO,MessageType.text);
            await message.client.sendMessage(message.jid,".tagadmin",MessageType.text);
            await message.client.toggleDisappearingMessages(message.jid, 0);
            
        }
        else {
            return await message.client.sendMessage(message.jid, UNQ, MessageType.text);
        }

}));
