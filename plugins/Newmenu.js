
/* DEVELOPER  
Don't copy this i take action for you
ðŸ‘¿ðŸ‘¿ðŸ‘¿ðŸ‘¿ðŸ‘¿ðŸ‘¿ðŸ‘¿
SKETCHY v.1.0 public ðŸ‘¿
*/


const Sketchy = require('../events');
const config = require('../config');
const {MessageType, MessageOptions, Mimetype} = require('@adiwajshing/baileys');
const axios = require('axios');
const hrs = new Date().getHours({ timeZone: 'Africa/Nairobi' })

if (config.WORKTYPE == 'public') {

Sketchy.applyCMD({pattern: 'Sketchy', fromMe: false, desc: 'it send bot menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/8fe0170c4d32c889b3cd6.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: 'Africa/Nairobi' }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*É¢á´á´á´… á´á´Ê€É´ÉªÉ´É¢ â›…*'
if (hrs >= 12 && hrs <= 17) wish = '*É¢á´á´á´… á´€Ò“á´›á´‡Ê€É´á´á´É´ ðŸŒž*'
if (hrs >= 17 && hrs <= 19) wish = '*É¢á´á´á´… á´‡á´ á´‡É´ÉªÉ´É¢ ðŸŒ¥*'
if (hrs >= 19 && hrs <= 24) wish = '*É¢á´á´á´… É´ÉªÉ¢Êœá´› ðŸŒ™*'


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: {mentionedJid: message.mention}, caption: `
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚â°ðŸðŸ”±  SKETCHY BOT  ðŸ”±ðŸâ±
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚ Hello â–· Dear
 â”‚ I Wish `+ wish + `
 â”‚ 
 â”‚TimeâŒš` + time + `
 â”‚
 â”‚   My Bot Work as
 â”‚ðŸ‘¿ `+config.WORKTYPE+` ðŸ‘¿
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚       ðŸðŸ‘¿ BOT ðŸ‘¿ðŸ
 â”‚        â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚
 â”‚â–· .Sketchy
 â”‚â–· .alive
 â”‚â–· .aSketchy [ advance menu ]
 â”‚â–· .admin [ for owner ]
 â”‚â–· .version
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚     ðŸðŸ‘¿ Sticker ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .attp { text }
 â”‚â–· .sticker
 â”‚â–· .sticvid
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚ ðŸðŸ‘¿ Text To Img ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .rlpack
 â”‚â–· .tlpack
 â”‚â–· .ffpack
 â”‚â–· .ttp { text }
 â”‚â–· .dttp { text }
 â”‚â–· .trumpsay { text }
 â”‚â–· .changesay { text }
 â”‚â–· .animesay { text }
 â”‚â–· .meme { text }
 â”‚â–· .carbon { text }
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚  ðŸðŸ‘¿ Downloader ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .video { vid link }
 â”‚â–· .vid2 { vid link }
 â”‚â–· .song { song name }
 â”‚â–· .fsong { song name }
 â”‚â–· .play { song name }
 â”‚â–· .img { name }
 â”‚â–· .fb { link }
 â”‚â–· .tiktok { link }
 â”‚â–· .insta { link }
 â”‚â–· .spotify { link }
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚     ðŸðŸ‘¿ Groups ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .grp
 â”‚â–· .rules
 â”‚â–· .info
 â”‚â–· .tagadmin
 â”‚â–· .report
 â”‚â–· .gname {change group n}
 â”‚â–· .dis on { disapearing }
 â”‚â–· .dis off { for owner }
 â”‚â–· .warn1 [ for owner ]
 â”‚â–· .warn2 [ for owner ]
 â”‚â–· .warn3 [ for owner ]
 â”‚â–· .warn4 [ for owner ]
 â”‚â–· .tagall  [ for owner ]
 â”‚â–· .ban [ for owner ]
 â”‚â–· .add [ for owner ]
 â”‚â–· .promote [ for owner ]
 â”‚â–· .demote [ for owner ]
 â”‚â–· .invite [ for owner ]
 â”‚â–· .kickme [ for owner ]
 â”‚
 â”‚    use .admin Cmd for
 â”‚      other commands
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚ðŸðŸ‘¿ ONLINE STORE ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .online store
 â”‚ 
 â”‚ ðŸ‘¿ SKETCHY ONLINE ðŸ‘¿
 â”‚     SHOPPING
 â”‚
 â”‚ ONLY SRI LANKAN 
 â”‚    VISITORS.
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚  ðŸðŸ‘¿ For owner ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .name { change name }
 â”‚â–· .pp { cha profilr pic}
 â”‚â–· .bio { change bio }
 â”‚
 â”‚  Now you can change 
 â”‚    your whatsapp 
 â”‚ name,profile pic,bio
 â”‚      easy with
 â”‚      SKETCHY BOT
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚    ðŸðŸ‘¿ Search ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .yt { text }
 â”‚â–· .spoti { text }
 â”‚â–· .tk { name }
 â”‚â–· .wiki { text }
 â”‚â–· .movie { mov name }
 â”‚â–· .github { name }
 â”‚â–· .mod { app name }
 â”‚â–· .weather { city }
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚ðŸðŸ‘¿ Media EditorðŸ‘¿ðŸ
 â”‚
 â”‚â–· .xmedia
 â”‚â–· .tblend
 â”‚â–· .ocr
 â”‚â–· .mp3 { vid to aud }
 â”‚â–· .photo { stic to 4to }
 â”‚â–· .ffmpeg { fade in:0:30 }
 â”‚â–· .removebg
 â”‚â–· .spdf
 â”‚â–· .unaudio { mp3 to file }
 â”‚â–· .unvoice { mp3 to voice }
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚    ðŸðŸ‘¿ Random ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .quote
 â”‚â–· .anime
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚       ðŸðŸ‘¿ Fun ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .rex { hi }
 â”‚â–· .gm
 â”‚â–· .tgm
 â”‚â–· .gn
 â”‚â–· .tgn
 â”‚â–· .tts { text }
 â”‚â–· .ping [ for owner ]
 â”‚â–· .antispam { text }
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚      ðŸðŸ‘¿ Other ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .ss { link }
 â”‚â–· .afk { bot is online }
 â”‚â–· .short { link }
 â”‚â–· .wame { get user link }
 â”‚â–· .currency
 â”‚â–· .trt { en si }
 â”‚â–· .notes
 â”‚â–· .save
 â”‚â–· .deleteNotes
 â”‚â–· .covid
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 
         ðŸ‘¿ POWERD BY ðŸ‘¿
  â°ðŸðŸ”±  SKETCHY BOT  ðŸ”±ðŸâ±
  
       ðŸ‘¿                ðŸ‘¿
 
 
`,quoted: message.data}) 

}));

Sketchy.applyCMD({pattern: 'Sketchy', fromMe: true, desc: 'it send bot menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/8fe0170c4d32c889b3cd6.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: 'Africa/Nairobi' }).split(' ')[1]

    var wish = ''
     
    var eva = ''

    var auto_bio = ''

    var language = ''

if (hrs < 12) wish = '*É¢á´á´á´… á´á´Ê€É´ÉªÉ´É¢ â›…*'
if (hrs >= 12 && hrs <= 17) wish = '*É¢á´á´á´… á´€Ò“á´›á´‡Ê€É´á´á´É´ ðŸŒž*'
if (hrs >= 17 && hrs <= 19) wish = '*É¢á´á´á´… á´‡á´ á´‡É´ÉªÉ´É¢ ðŸŒ¥*'
if (hrs >= 19 && hrs <= 24) wish = '*É¢á´á´á´… É´ÉªÉ¢Êœá´› ðŸŒ™*'


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: {mentionedJid: message.mention}, caption: `
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚â°ðŸðŸ”±  SKETCHY BOT  ðŸ”±ðŸâ±
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚ Hello â–· Dear
 â”‚ I Wish `+ wish + `
 â”‚ 
 â”‚TimeâŒš` + time + `
 â”‚
 â”‚   My Bot Work as
 â”‚ðŸ‘¿ `+config.WORKTYPE+` ðŸ‘¿
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚       ðŸðŸ‘¿ BOT ðŸ‘¿ðŸ
 â”‚        â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚
 â”‚â–· .Sketchy
 â”‚â–· .alive
 â”‚â–· .aSketchy [ advance menu ]
 â”‚â–· .admin [ for owner ]
 â”‚â–· .version
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚     ðŸðŸ‘¿ Sticker ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .attp { text }
 â”‚â–· .sticker
 â”‚â–· .sticvid
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚ ðŸðŸ‘¿ Text To Img ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .rlpack
 â”‚â–· .tlpack
 â”‚â–· .ffpack
 â”‚â–· .ttp { text }
 â”‚â–· .dttp { text }
 â”‚â–· .trumpsay { text }
 â”‚â–· .changesay { text }
 â”‚â–· .animesay { text }
 â”‚â–· .meme { text }
 â”‚â–· .carbon { text }
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚  ðŸðŸ‘¿ Downloader ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .video { vid link }
 â”‚â–· .vid2 { vid link }
 â”‚â–· .song { song name }
 â”‚â–· .fsong { song name }
 â”‚â–· .play { song name }
 â”‚â–· .img { name }
 â”‚â–· .fb { link }
 â”‚â–· .tiktok { link }
 â”‚â–· .insta { link }
 â”‚â–· .spotify { link }
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚     ðŸðŸ‘¿ Groups ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .grp
 â”‚â–· .rules
 â”‚â–· .info
 â”‚â–· .tagadmin
 â”‚â–· .report
 â”‚â–· .gname {change grp name}
 â”‚â–· .dis on { disapearing }
 â”‚â–· .dis off { for owner }
 â”‚â–· .warn1 [ for owner ]
 â”‚â–· .warn2 [ for owner ]
 â”‚â–· .warn3 [ for owner ]
 â”‚â–· .warn4 [ for owner ]
 â”‚â–· .tagall  [ for owner ]
 â”‚â–· .ban [ for owner ]
 â”‚â–· .add [ for owner ]
 â”‚â–· .promote [ for owner ]
 â”‚â–· .demote [ for owner ]
 â”‚â–· .invite [ for owner ]
 â”‚â–· .kickme [ for owner ]
 â”‚
 â”‚    use .admin Cmd for
 â”‚      other commands
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚ðŸðŸ‘¿ ONLINE STORE ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .online store
 â”‚ 
 â”‚ ðŸ‘¿ SKETCHY ONLINE ðŸ‘¿
 â”‚     SHOPPING
 â”‚
 â”‚ ONLY SRI LANKAN 
 â”‚    VISITORS.
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚  ðŸðŸ‘¿ For owner ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .name { change name }
 â”‚â–· .pp { cha profilr pic}
 â”‚â–· .bio { change bio }
 â”‚
 â”‚  Now you can change 
 â”‚    your whatsapp 
 â”‚ name,profile pic,bio
 â”‚      easy with
 â”‚      SKETCHY BOT
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚    ðŸðŸ‘¿ Search ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .yt { text }
 â”‚â–· .spoti { text }
 â”‚â–· .tk { name }
 â”‚â–· .wiki { text }
 â”‚â–· .movie { mov name }
 â”‚â–· .github { name }
 â”‚â–· .mod { app name }
 â”‚â–· .weather { city }
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚ðŸðŸ‘¿ Media EditorðŸ‘¿ðŸ
 â”‚
 â”‚â–· .xmedia
 â”‚â–· .tblend
 â”‚â–· .ocr
 â”‚â–· .mp3 { vid to aud }
 â”‚â–· .photo { stic to 4to }
 â”‚â–· .ffmpeg { fade in:0:30 }
 â”‚â–· .removebg
 â”‚â–· .spdf
 â”‚â–· .unaudio { mp3 to file }
 â”‚â–· .unvoice { mp3 to voice }
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚    ðŸðŸ‘¿ Random ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .quote
 â”‚â–· .anime
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚       ðŸðŸ‘¿ Fun ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .rex { hi }
 â”‚â–· .gm
 â”‚â–· .tgm
 â”‚â–· .gn
 â”‚â–· .tgn
 â”‚â–· .tts { text }
 â”‚â–· .ping [ for owner ]
 â”‚â–· .antispam { text }
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚      ðŸðŸ‘¿ Other ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .ss { link }
 â”‚â–· .afk { bot is online }
 â”‚â–· .short { link }
 â”‚â–· .wame { get user link }
 â”‚â–· .currency
 â”‚â–· .trt { en si }
 â”‚â–· .notes
 â”‚â–· .save
 â”‚â–· .deleteNotes
 â”‚â–· .covid
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 
         ðŸ‘¿ POWERD BY ðŸ‘¿
  â°ðŸðŸ”±  SKETCHY BOT  ðŸ”±ðŸâ±
  
       ðŸ‘¿                ðŸ‘¿
 
 
`,quoted: message.data}) 

}));
    
}

else if (config.WORKTYPE == 'private' ) {
    
    Sketchy.applyCMD({pattern: 'Sketchy', fromMe: true, desc: 'it send bot menu'}, (async (message, match) => {

    var r_text = new Array ();
    
    
    r_text[0] = "https://telegra.ph/file/10bdbaab2d4d163e2affa.jpg";
    
    
    var i = Math.floor(1*Math.random())

    var respoimage = await axios.get(`${r_text[i]}`, { responseType: 'arraybuffer' })

    var time = new Date().toLocaleString('HI', { timeZone: 'Africa/Nairobi' }).split(' ')[1]

    var wish = ''
     

    var language = ''

if (hrs < 12) wish = '*É¢á´á´á´… á´á´Ê€É´ÉªÉ´É¢ â›…*'
if (hrs >= 12 && hrs <= 17) wish = '*É¢á´á´á´… á´€Ò“á´›á´‡Ê€É´á´á´É´ ðŸŒž*'
if (hrs >= 17 && hrs <= 19) wish = '*É¢á´á´á´… á´‡á´ á´‡É´ÉªÉ´É¢ ðŸŒ¥*'
if (hrs >= 19 && hrs <= 24) wish = '*É¢á´á´á´… É´ÉªÉ¢Êœá´› ðŸŒ™*'


    await message.sendMessage(Buffer(respoimage.data), MessageType.image, {mimetype: Mimetype.png, contextInfo: {mentionedJid: message.mention}, caption: `
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚â°ðŸðŸ”±  SKETCHY BOT  ðŸ”±ðŸâ±
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚ Hello â–· Dear
 â”‚ I Wish `+ wish + `
 â”‚ 
 â”‚TimeâŒš` + time + `
 â”‚
 â”‚   My Bot Work as
 â”‚ðŸ‘¿ `+config.WORKTYPE+` ðŸ‘¿
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚     ðŸðŸ‘¿ BOT ðŸ‘¿ðŸ
 â”‚      â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚
 â”‚â–· .Sketchy
 â”‚â–· .alive
 â”‚â–· .aSketchy [ advance menu ]
 â”‚â–· .admin [ for owner ]
 â”‚â–· .version
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚     ðŸðŸ‘¿ Sticker ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .attp { text }
 â”‚â–· .sticker
 â”‚â–· .sticvid
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚ ðŸðŸ‘¿ Text To Img ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .rlpack
 â”‚â–· .tlpack
 â”‚â–· .ffpack
 â”‚â–· .ttp { text }
 â”‚â–· .dttp { text }
 â”‚â–· .trumpsay { text }
 â”‚â–· .changesay { text }
 â”‚â–· .animesay { text }
 â”‚â–· .meme { text }
 â”‚â–· .carbon { text }
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚  ðŸðŸ‘¿ Downloader ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .video { vid link }
 â”‚â–· .vid2 { vid link }
 â”‚â–· .song { song name }
 â”‚â–· .fsong { song name }
 â”‚â–· .play { song name }
 â”‚â–· .img { name }
 â”‚â–· .fb { link }
 â”‚â–· .tiktok { link }
 â”‚â–· .insta { link }
 â”‚â–· .spotify { link }
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚     ðŸðŸ‘¿ Groups ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .grp
 â”‚â–· .rules
 â”‚â–· .info
 â”‚â–· .tagadmin
 â”‚â–· .report
 â”‚â–· .gname {change grp name}
 â”‚â–· .dis on { disapearing }
 â”‚â–· .dis off { for owner }
 â”‚â–· .warn1 [ for owner ]
 â”‚â–· .warn2 [ for owner ]
 â”‚â–· .warn3 [ for owner ]
 â”‚â–· .warn4 [ for owner ]
 â”‚â–· .tagall  [ for owner ]
 â”‚â–· .ban [ for owner ]
 â”‚â–· .add [ for owner ]
 â”‚â–· .promote [ for owner ]
 â”‚â–· .demote [ for owner ]
 â”‚â–· .invite [ for owner ]
 â”‚â–· .kickme [ for owner ]
 â”‚
 â”‚    use .admin Cmd for
 â”‚      other commands
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚ðŸðŸ‘¿ ONLINE STORE ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .online store
 â”‚ 
 â”‚ ðŸ‘¿ SKETCHY ONLINE ðŸ‘¿
 â”‚     SHOPPING
 â”‚
 â”‚ ONLY SRI LANKAN 
 â”‚    VISITORS.
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚  ðŸðŸ‘¿ For owner ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .name { change name }
 â”‚â–· .pp { cha profilr pic}
 â”‚â–· .bio { change bio }
 â”‚
 â”‚  Now you can change 
 â”‚    your whatsapp 
 â”‚ name,profile pic,bio
 â”‚      easy with
 â”‚      SKETCHY BOT
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚    ðŸðŸ‘¿ Search ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .yt { text }
 â”‚â–· .spoti { text }
 â”‚â–· .tk { name }
 â”‚â–· .wiki { text }
 â”‚â–· .movie { mov name }
 â”‚â–· .github { name }
 â”‚â–· .mod { app name }
 â”‚â–· .weather { city }
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚ðŸðŸ‘¿ Media EditorðŸ‘¿ðŸ
 â”‚
 â”‚â–· .xmedia
 â”‚â–· .tblend
 â”‚â–· .ocr
 â”‚â–· .mp3 { vid to aud }
 â”‚â–· .photo { stic to 4to }
 â”‚â–· .ffmpeg { fade in:0:30 }
 â”‚â–· .removebg
 â”‚â–· .spdf
 â”‚â–· .unaudio { mp3 to file }
 â”‚â–· .unvoice { mp3 to voice }
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚    ðŸðŸ‘¿ Random ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .quote
 â”‚â–· .anime
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚       ðŸðŸ‘¿ Fun ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .rex { hi }
 â”‚â–· .gm
 â”‚â–· .tgm
 â”‚â–· .gn
 â”‚â–· .tgn
 â”‚â–· .tts { text }
 â”‚â–· .ping [ for owner ]
 â”‚â–· .antispam { text }
 â”‚
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 
 â•­â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 â”‚      ðŸðŸ‘¿ Other ðŸ‘¿ðŸ
 â”‚
 â”‚â–· .ss { link }
 â”‚â–· .afk { bot is online }
 â”‚â–· .short { link }
 â”‚â–· .wame { get user link }
 â”‚â–· .currency
 â”‚â–· .trt { en si }
 â”‚â–· .notes
 â”‚â–· .save
 â”‚â–· .deleteNotes
 â”‚â–· .covid
 â•°â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
 
         ðŸ‘¿ POWERD BY ðŸ‘¿
  â°ðŸðŸ”±  Sketchy BOT  ðŸ”±ðŸâ±
  
       ðŸ‘¿       GingerBreadSketchy       ðŸ‘¿
 
 
`,quoted: message.data}) 

}));
}
