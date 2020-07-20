const Discord = require("discord.js");
const client = new Discord.Client();
var prefix = "+";
client.on('ready', () => {
   console.log(`----------------`);
      console.log(`Cyhper Bot Script By : DREAM`);
        console.log(`----------------`);
      console.log(`ON ${client.guilds.size} Servers '     Script By : DREAM ' `);
    console.log(`----------------`);
  console.log(`Logged in as ${client.user.tag}!`);
client.user.setGame(` 😵 ا̍ڶــچۚــد؏ ̨ٵ̍نۨــٰ̍ا̍ ۛ ּ؏ــٰٱ̍ڕڣــﯡۥ 😏 ۄٰا̍ڷــبــٰٱ̍ڦــېْۧ ۛ ּڜــڣــٰا̍ڣ ּمۘــڜ ּڜــٰا̍ٻۧــڣــہ`,"http://twitch.tv/Dream")
client.user.setStatus("dnd")
});



client.login(process.env.TOKEN);// لا تغير فيها شيء
