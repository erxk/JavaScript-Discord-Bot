module.exports = {
    name: 'kick',
    description: "kick command",
    execute(message, args, Discord) {
        if(message.member.permissions.has("KICK_MEMBERS")) {
            message.mentions.first().kick();
            message.channel.sendMessage("Successfully kicked")
        } else {
            message.channel.sendMessage("Insufficient permissions")
        }

    }

}