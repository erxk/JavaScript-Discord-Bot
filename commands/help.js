module.exports = {
    name: 'help',
    description: "help command",
    execute(message, args, Discord) {
        const embed = new Discord.MessageEmbed()
        .setColor('#CC0000')
        .setTitle('Alle Commands')
        .setAuthor('Moon-MP')
        .setDescription('Test embed')
        .addFields(
            {name: 'Field1', value: 'Test1'},
            {name: 'Field2', value: 'Test2'}
        )
            message.channel.send(embed);
    }

}