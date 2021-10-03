const discord = require('discord.js');
const client = new discord.Client();
const disbut = require('discord-buttons')(client);

// Bot Laving'e aittir.
// Çalan orospu çocugudur.
// 12-16 , 26 , 61. satırları doldurmanız yeterlidir.
// Yardım almak için Laving#1743 ekleyebilirsiniz.
// Ayrıca botta yapıyorum discorddan ekleyerek ulaşabilirsiniz.
// İyi eğlenceler.

let config = {
"vk": "Vampir Köylü Rol ID",
"gartic": "Gartic Rol ID",
"dc": "Doğruluk Cesaretlik Rol ID",
"botOwner": "Bot Yapımcısı Rol ID",
"token": "Burada token işte?"
};

client.on("message", async (message) => {
    const args = message.content.split(" ");
    const command = args.shift();
    if (command === "!button" && config.botOwner == message.author.id) {
    let vk = new disbut.MessageButton().setStyle('green').setLabel('Vampir Köylü!').setID('vk')
    let dc = new disbut.MessageButton().setStyle('green').setLabel('Doğruluk / Cesaretlik!').setID('dc')
    let gartic = new disbut.MessageButton().setStyle('red').setLabel('Gartic!').setID('gartic')
    message.channel.send('**Aşağıdaki menüden kendinize oyun seçebilirsiniz.**\n\n **`>` <@&893639781177774092> Rolü almak için Vampir Köylü! butonuna.\n `>` <@&893639781177774093> Rolü almak için Doğruluk Cesaretlik! butonuna.\n `>` <@&893639781177774091> Rolü almak için Gartic! butonuna basmalısın.\n**', {
        buttons: [vk, dc, gartic]
    });
}
});

client.on('clickButton', async (button) => {
    if (button.id === 'vk') {
        if (button.clicker.member.roles.cache.get(config.vk)) {
            await button.clicker.member.roles.remove(config.vk);await button.think(true);await button.reply.edit("Vampir Köylü rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.vk);await button.think(true);await button.reply.edit("Vampir Köylü rolü üzerinize verildi.")
        }
    }
    if (button.id === 'dc') {
        if (button.clicker.member.roles.cache.get(config.dc)) {
            await button.clicker.member.roles.remove(config.dc);await button.think(true);await button.reply.edit("Doğruluk Cesaret rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.dc);await button.think(true);await button.reply.edit("Doğruluk Cesaret rolü üzerinize verildi.")
        }
    }
    if (button.id === 'gartic') {
        if (button.clicker.member.roles.cache.get(config.gartic)) {
            await button.clicker.member.roles.remove(config.gartic);await button.think(true);await button.reply.edit("Gartic rolü üzerinizden alındı.")
        } else {
            await button.clicker.member.roles.add(config.gartic);await button.think(true);await button.reply.edit("Gartic rolü üzerinize verildi.")
        }
    }
});

client.on("ready", async () => {
    client.user.setPresence({ activity: { name: "• Laving ❤️ " }, status: "online" });
  });  
  
  client.on('ready', ()=>{
    client.channels.cache.get('SES KANALI ID ').join()
    })


client.login(config.token)
