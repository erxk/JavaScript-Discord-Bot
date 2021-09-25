const Discord = require('discord.js')
const fs = require ('fs')
const client = new Discord.Client(); 

const config = JSON.parse(fs.readFileSync('config.json', 'utf8'))

client.commands = new Discord.Collection();
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.once('ready', () =>{
    console.log(`Logged in as ${client.user.username}`)
})

client.on('message', message =>{
    if(!message.content.startsWith(config.prefix) || message.author.bot) return; 

    const args = message.content.slice(config.prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();


    if(command === 'ping') {
        client.commands.get('ping').execute(message, args, Discord);
    } else if(command === 'help') {
        client.commands.get('help').execute(message, args, Discord);
    } else if(command === 'kick') {
        client.commands.get('kick').execute(message, args, Discord);
    } else if(command === 'ban') {
        client.commands.get('ban').execute(message, args, Discord);
    } else if(command === 'snipe') {
        client.commands.get('snipe').execute(message, args, Discord);
    }
});

client.login(config.token)