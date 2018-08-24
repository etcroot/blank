     //////////////////////////////////////////
    //                                      //
   //           BOT MADE BY                //
  //       .666#666 / Trashbag            //
 //                                      //
//////////////////////////////////////////

// The bot is open source, so feel free to use for whatever you want.
// Check out Insomnia Discord Server at https://discord.gg/KTSN3gR
// Discord.js is the best, fuck the other shit libs.
// owo

// Required for the bot to run.

const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");
const { Client, RichEmbed } = require('discord.js');

// Print to console

client.on("ready", () => {
  console.log("Started up without any issues.");
  console.log("Made by .666#6666 / Trashbxg / Trashbag");
  console.log("Client ID: 482345153722318868");
  console.log("-------------------------------------------");
});

// Bot Game

client.on('ready', () => {
  client.user.setActivity("with depression", {
  type: "STREAMING",
  url: "https://www.twitch.tv/devourzplays"
});
});

// General Commands

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "ping")) {
    message.channel.send("pong!");
  }
});

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  if (message.content.startsWith(config.prefix + "help")) {
  const embed = new RichEmbed()
      .setTitle('Commands & Functions')
      .setColor(0xFF0000)
      .setDescription('functions and stuff, pretty cool huh?')
      .addField('General Commands', '**bhelp** - *get help* \n**binfo** - *get bot info.* \n**bping** - *get bot ping.* \n**bwet** - *just be wet dude.* \n**bdick** - *just be a dick dude.*')
      .addField('Random Commands', '**bsay** - *make the bot repeat your sentence.* \n**blol** - *whats so funny?* \n**blob** - *just a blob.*')
      .setFooter('by .666#6666');
    message.channel.send(embed);
  }
});

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  if (message.content.startsWith(config.prefix + "info")) {
  const embed = new RichEmbed()
      .setTitle('Bot Information')
      .setColor(0xFF0000)
      .setDescription('Information about Blank')
      .addField('Bot Creator', '.666#6666 / Trashbxg', true)
      .addField('Library', 'Discord.js', true)
      .addField('Bot Version', '1.6', true)
      .setFooter('by .666#6666');
    message.channel.send(embed);
  }
});

// Wierd Commands

client.on('message', async message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "wet")) {
        try {
            await message.react('💦');
        }
        catch (error) {
            console.error('One of the emojis failed to react.');
        }
    }
});

client.on('message', async message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "dick")) {
        try {
            await message.react('🍆');
        }
        catch (error) {
            console.error('One of the emojis failed to react.');
        }
    }
});

client.on('message', async message => {
    if (!message.content.startsWith(config.prefix) || message.author.bot) return;

  if (message.content.startsWith(config.prefix + "wet")) {
        try {
            await message.react('💦');
        }
        catch (error) {
            console.error('One of the emojis failed to react.');
        }
    }
});

// Random Commands

client.on("message", (message) => {
    
    const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

if(command === "say") {
    const sayMessage = args.join(" ");
    message.delete().catch(O_o=>{}); 
    message.channel.send(sayMessage);
  }

if(command === "lol") {
    message.reply("What's so funny?");
}

if(command === "lob") {
    const embed = new RichEmbed()
      .setColor(0xFF0000)
      .setDescription('༼ つ ◕_◕ ༽つ')
    message.channel.send(embed);
}


if (command === 'hook') {
if(message.author.id !== config.ownerID) return;
const hook = new Discord.WebhookClient('ID', 'TOKEN');
const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
const command = args.shift().toLowerCase();
const sayMessage = args.join(" ");
message.delete().catch(O_o=>{}); 
hook.send(sayMessage);
} 




});

client.login(config.token);