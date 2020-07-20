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
client.user.setGame(` 😵 الجدع أنا عارفو 😏 والباقي شفاف مش شايفه`,"http://twitch.tv/Dream")
client.user.setStatus("dnd")
});



client.login(process.env.TOKEN);// لا تغير فيها شيء
