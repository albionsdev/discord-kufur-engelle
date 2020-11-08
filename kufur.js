\\\\Albions#5704
const Discord = require('discord.js')
const db = require('quick.db')

exports.run = async (client ,message, args) =>{
if(args[0] === 'aç') {
    db.set(`küfür_${message.guild.id}`, "aç")
    message.channel.send('Sunucunuzda artık Küfür Filtresi aktif edilmiştir!')
  return
}
if (args[0] === 'kapat') {
  db.delete(`küfür_${message.guild.id}`)
message.channel.send('Sunucunuzda artık Küfür Filtresi devre dışı bırakılmıştır!')
return
}
  message.channel.send('Sunucuda Küfür Filtresi açmak için lütfen aç/kapat yazınız.\nÖrnek: !küfür aç: Sunucunuzda artık Küfür Filtresi aktif eder.\nSunucunuzda artık Küfür Filtresi devre dışı bırakır!')
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['küfür','küfürayarla','küfür-ayarla'],
 permLevel: 0
};

exports.help = {
 name: 'küfür',
 description: 'Küfür Engel Sistemi V12',
 usage: '${prefix}küfür aç/kapat | Küfür engellemeyi açar veya kapatırsınız!'
};
\\\\Albions#5704
