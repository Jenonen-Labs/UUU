//These constants are used to pull dependencies from required scripts for commands to function.
const Discord = require ('discord.js')
const moment = require ('moment')
const dotenv = require ('dotenv')
dotenv.config()
//These constants are used for preferences on what you want Gray to do.
const client = new Discord.Client({ intents: ["GUILDS", "GUILD_MESSAGES"] })
const PREFIX = '/'
const today = Date()
//These variables are used for answers when you ask Gray who she is.
var version = '1.0.0'
var author = 'Jenonen'
var purpose = 'To verify the integrity of the inside joke database.'
var name = 'Personal identification registered as "Gray."'
var description = 'Universal Utility Unit'
//These constants are required for flipping coin/rolling dice to work.
const coin = ["heads.", "tails."]
const rollD4 = () => Math.floor(Math.random() * 4) + 1
const rollD6 = () => Math.floor(Math.random() * 6) + 1
const rollD8 = () => Math.floor(Math.random() * 8) + 1
const rollD10 = () => Math.floor(Math.random() * 10) + 1
const rollD12 = () => Math.floor(Math.random() * 12) + 1
const rollD20 = () => Math.floor(Math.random() * 20) + 1
const rollD100 = () => Math.floor(Math.random() * 100) + 1
//This is used for webhook functions... experimental for now.
const whurl ="https://discord.com/api/webhooks/964145993765490688/itw8ueQxBLtOzrvn4WKv_t-9aotm1-IlznfsGFv8vc7gaUnEn3zNsIWggw_o77yzR5pE"

const msg = {
    "content": "https://soundcloud.com/jenonen/tracks"
}
//This enables Gray to run commands from separate files.
const fs = require('fs')
client.commands = new Discord.Collection()
const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'))
for(const file of commandFiles){
    const command = require(`./commands/${file}`)
    client.commands.set(command.name, command)
}
//The ready message indicates that Gray is working.
client.once('ready', () =>{
    console.log(`Logged in as ${client.user.tag}`)
    client.user.setActivity('Half-Life 3', { type: 'PLAYING'})
})
//This pulls the TOKEN information from .env so Gray can log into a server.
client.login(process.env.TOKEN)
//This allows Gray to create messages and uses the "/" prefix.
client.on('messageCreate', msg=> {
    if(msg.content === "magenta") 
        msg.delete()
    })
client.on('messageCreate', msg=> {
    if(msg.content === "Magenta") 
        msg.delete()
    })
/*This is another way to create messages using arguments. It's definitely easier to write.
  When running the dice roll functions through the default message function, there was a memory leak warning.
  This prevents the memory leak warning so it's probably better.
*/
client.on('messageCreate', message=> {
    let args = message.content.substring(PREFIX.length).split(" ")
    switch(args[0]) {
        case 'webhook':
            client.commands.get('webhook').run(message, args)
            break
//These commands allow Gray to accurately convert time zones. If you're in Australia.
        case 'aussietime':
            message.channel.send(moment().format('MMMM Do YYYY, h:mm:ss a'))
            break
        case 'time':
            message.channel.send(moment().subtract(14.5, 'hours').format('MMMM Do YYYY, h:mm:ss a'))
            break
        case 'britishtime':
            message.channel.send(moment().subtract(8.5, 'hours').format('MMMM Do YYYY, h:mm:ss a'))
            break
        case 'bahraintime':
            message.channel.send(moment().subtract(6.5, 'hours').format('MMMM Do YYYY, h:mm:ss a'))
            break
        case 'hawaiitime':
            message.channel.send(moment().subtract(19.5, 'hours').format('MMMM Do YYYY, h:mm:ss a'))
            break
//These messages are examples of commands being run outside index.js and through separate files. Probably optimizes stuff idk.
        case 'ping':
            client.commands.get('ping').execute(message, args)
            break
        case 'soundcloud':
            client.commands.get('soundcloud').execute(message, args)
            break
//This summons inside jokes.
        case 'castlevania':
            message.channel.send('WHAT IS A MAN?')
            break
        case 'X4':
            message.channel.send('WHAT AM I FIGHTING FOR?/')
            break
        case 'mustang':
            message.channel.send('https://www.motortrend.com/uploads/2021/10/2022-Ford-Mustang-GT-California-Special_02-1.jpg')
            break
        case 'fine':
            message.channel.send('https://c.tenor.com/N40XHt4xcBEAAAAi/larry-butz-ace-attorney-okay.gif')
            break
        case 'science':
            message.channel.send('https://static.wikia.nocookie.net/all-fiction-battles/images/5/58/Stray_Cat.png/revision/latest?cb=20210128211201')
            break
        case 'mindblown':
            message.channel.send('https://gfycat.com/clutteredenlighteneddipper')
            break
        case 'gundramon':
            message.channel.send('https://preview.redd.it/fpnn38a0jpe61.jpg?auto=webp&s=3489027fc9a710e76355101c1e540d05f13400e5')
            break
        case 'sam':
            message.channel.send('https://cdn.discordapp.com/attachments/424604685241024516/963610385838121030/ShowMeAGoodTimeJack.gif')
            break
        case 'deadly':
            message.channel.send('https://cdn.discordapp.com/attachments/337417943552098320/963611773112549436/unknown.png')
            break
        case 'teacups':
            message.channel.send('https://media.discordapp.net/attachments/424604685241024516/963613616072982558/IMG_0879.jpg')
            break
        case 'karl':
            message.channel.send('https://media.discordapp.net/attachments/424604685241024516/963632315379122206/64FA869D-9E36-4641-8612-B134D58D0C11.jpg')
            break
        case 'sword':
            message.channel.send('https://imgur.com/a/lihYmhh')
            break
        case 'hardmeanie':
            message.channel.send('https://en.pimg.jp/014/497/399/1/14497399.jpg')
            break
//This generates the dialogue for when you flip a coin/roll dice.
        case 'coin':
            message.channel.send(`Flipped a coin and got ${coin[Math.floor(Math.random() * coin.length)]}`)
            break
        case 'rolld4':
            message.channel.send("User rolled a " + rollD4())
            break
        case 'rolld6':
            message.channel.send("User rolled a " + rollD6())
            break
        case 'rolld8':
            message.channel.send("User rolled a " + rollD8())
            break
        case 'rolld10':
            message.channel.send("User rolled a " + rollD10())
            break
        case 'rolld12':
            message.channel.send("User rolled a " + rollD12())
            break
        case 'rolld20':
            message.channel.send("User rolled a " + rollD20())
            break
        case 'rolld100':
            message.channel.send("User rolled a " + rollD100())
            break
        case 'one':
            message.channel.send('https://c.tenor.com/xMgVIK9rSgwAAAAC/haha-one-elise.gif')
            break
        case 'spro':
            message.channel.send('https://imgur.com/a/kUsJgw6')
            setInterval(() => {}, 100000)
            message.channel.send('https://www.youtube.com/watch?v=QU2_NfG5a_Q')
            break
        case 'idea':
            message.channel.send('https://www.youtube.com/watch?v=roXJuJfbdG4')
            break
//This is a command that lets Gray give you "helpful" advice using a random message function. Similar to rolling dice rng.
        case 'advice':
            {
                var messages = ['Araki may have misintepreted photosynthesis because science advances every four years.', 'You are not a *complete* loser.', 'Trying did not work once. It is not going to work twice.', 'Hard work does not always equate to success. So just give up.', 'You are the best version of yourself, somehow.', 'This too shall pass - Probably into something worse.']
                var rnd = Math.floor(Math.random() * messages.length)

                message.channel.send(messages[rnd])
            }
            break
//This is a command that lets Gray summon multiple pictures of seals using a random message function.
        case 'seal':
            {
                var sealmessages = ["https://i.pinimg.com/550x/49/7e/de/497ede290aaf80ea206be92cc7a96598.jpg", "http://pm1.narvii.com/6395/f07a4d8e65d91e7afec83b2a5b9b0c2c5c9ce902_00.jpg", 'https://imgur.com/a/1Olkukz', "https://cdn.vox-cdn.com/thumbor/pBj6wDJC5IEdWznuUUT-DyR68gI=/0x36:1920x1116/1600x900/cdn.vox-cdn.com/uploads/chorus_image/image/51975495/starter_Popplio_02_F__1_.0.0.jpeg", 'http://pm1.narvii.com/6119/d82fe452f07c5e12fe582c57fafd73d07faa184d_00.jpg', 'https://pngset.com/images/popplio-pack-popplio-mammal-animal-sea-life-sunglasses-transparent-png-758038.png', 'https://i.kym-cdn.com/photos/images/original/001/118/161/4f0.jpeg']
                var randomseal = Math.floor(Math.random() * sealmessages.length)

                message.channel.send(sealmessages[randomseal])
            }
            break
//This is a command that lets Gray summon multiple pictures of foxes using a random message function.
            case 'fox':
                {
                    var foxmessages = ["https://images.unsplash.com/photo-1462953491269-9aff00919695?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8Y3V0ZSUyMGZveHxlbnwwfHwwfHw%3D&w=1000&q=80", "https://wallpaperaccess.com/full/82712.jpg", 'https://i.pinimg.com/736x/df/16/7e/df167eaa5685f9eb8f49955c2039a6e4.jpg', "https://allthingsfoxes.com/wp-content/uploads/2020/01/cute-pictures-of-foxes.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-2", 'https://i.pinimg.com/736x/2c/f8/1b/2cf81b521df6033b443550a25292c8ed--foxes-blog.jpg', 'https://preview.redd.it/g33ecad6sd861.jpg?auto=webp&s=9ddcd78836dc2807354815fdea0124dc3e4faee9', 'https://i.pinimg.com/originals/3f/ff/4a/3fff4aa0041b16ce520e7755b18bfcd6.jpg']
                    var randomfox = Math.floor(Math.random() * foxmessages.length)
    
                    message.channel.send(foxmessages[randomfox])
                }
                break
//This asks Gray about herself. Caution, she is rude.
        case 'info':
            if(args[1] === 'version')
                message.channel.send(version)
            
            else if(args[1] === 'author')
                message.channel.send(author)
                
            else if(args[1] === 'purpose')
                message.channel.send(purpose)

            else if(args[1] === 'name')
                message.channel.send(name)

            else if(args[1] === 'description')
                message.channel.send(description)
            
            else
                message.channel.send('What info, dumbass?')
            break
//This command removes messages in bulk.
        case 'zahando':
        if(!args[1]) return message.reply('Motherfucker, how many messages do you want deleted?')
        message.channel.bulkDelete(args[1])
            break
//This creates an embed. For colors you can also use "#3498DB", [52, 152, 219] or an integer number. The set options are pretty self-explanatory.
            case 'help':
            const embed = new Discord.MessageEmbed()
  .setColor(0x3498DB)
  .setTitle("Help")
  .setImage("https://upload.wikimedia.org/wikipedia/commons/6/6c/Herjangsfjorden_%26_Ofotfjorden%2C_wide%2C_2009_09.jpg")
  .setThumbnail("https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Orange_question_mark.svg/450px-Orange_question_mark.svg.png")
//When adding a new field, remember to use "/n" to make a new line or it'll use word wrap and look unprofessional.
  .addField("List of Commands", "/zahando - Removes messages indicated by integer.\n/time - Displays CST\n/aussietime - Displays ACST\n/britishtime - Displays Zulu Time\n/bahraintime - AST\n/hawaiitime - Displays H-AST\n/advice - Gray will *try* to help cheer you up.\n/roll - Rolls a specified die.\n/coin - Flip a coin.")
  .addField("List of Funny", "/castlevania\n/X4\n/mustang\n/fine\n/science\n/mindblown\n/gundramon\n/sam\n/teacups\n/karl\n/sword\n/hardmeanie")
  .addField("List of Info", "/info name\n/info version\n/info author\n/info purpose\n/info description")
  .addField('SoundCloud', 'https://soundcloud.com/jenonen/tracks')
//Blank field to create some space.
  .addField("\u200b", "\u200b")
//Takes a default date object and puts it at the bottom of the embed.
  .setTimestamp()
  message.channel.send({ embeds: [embed] })
        break
    }
})


    

