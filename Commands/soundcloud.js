module.exports = {
    name: 'soundcloud',
    description: "sends the soundcloud link!",
    execute(message){
        message.channel.send('https://soundcloud.com/jenonen/tracks')
    }
}
