module.exports = {
    name: 'ban',
    description: "ban command",
    execute(message, args, Discord) {
        if(message.member.permissions.has("KICK_MEMBERS")) {
            message.mentions.first().ban();
            message.channel.sendMessage("Successfully banned")
        } else {
            message.channel.sendMessage("Insufficient Permission")
        }

    }

}