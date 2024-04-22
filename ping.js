module.exports = {
    name: 'ping',
    description: "says ping!",
    execute(message){
        message.channel.send('pong!')
    }
}