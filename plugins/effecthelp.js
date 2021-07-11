const Asena = require('../events');
const Config = require('../config');
const {MessageType} = require('@adiwajshing/baileys');

const EFFECT_DESC = "Text effect රූප බවට පරිවර්තනය කිරීම සඳහා විධාන කට්ටලයක්."

if (Config.WORKTYPE == 'private') {

    Asena.addCommand({pattern: 'effectimg', fromMe: true, desc: EFFECT_DESC}, (async (message, match) => {    
    
    await message.client.sendMessage(message.jid, 
            `💠📃 ● *Text සිට Image Effect List* ● 📃💠\n\n` + 
            `⚙️විධානය: *.glitch*\nℹ️විස්තර: Text සිට Tiktok glitch effect.\n_(Ex: .glitch Queen/Amdi)_\n\n` + 
            `⚙️විධානය: *.pemoji*\nℹ️විස්තර: Emoji සිට පින්තූරයට.\n\n` + 
            `⚙️විධානය: *.hacker*\nℹ️විස්තර: ඔබේ නම සමඟ hacker wallpaper සෑදීම.\n\n` + 
            `⚙️විධානය: *.gaming*\nℹ️විස්තර: ඔබේ නම සමඟ gaming logo සෑදීම.\n\n` + 
            `⚙️විධානය: *.fpslogo*\nℹ️විස්තර: ඔබේ නම සමඟ fps gaming logo සෑදීම.\n\n` + 
            `⚙️විධානය: *.shadow*\nℹ️විස්තර: ඔබේ text සඳහා සෙවනැලි effect wallpaper සෑදිය හැකිය.\n\n` + 
            `⚙️විධානය: *.grafiti*\nℹ️විස්තර: ඔබේ text සඳහා grafiti wallpaper සෑදිය හැකිය.\n\n` + 
            `⚙️විධානය: *.cup*\nℹ️විස්තර: ඔබට ඔබේ text කෝප්පයක් මත ටයිප් කළ හැකිය.\n\n` + 
            `⚙️විධානය: *.wolfm*\nℹ️විස්තර: ලෝහමය වෘක බැනරයකින් ඔබේ text ටයිප් කළ හැකිය.\n\n` + 
            `⚙️විධානය: *.fflogo*\nℹ️විස්තර: ඔබේ නම සමඟ Free Fire logo සෑදීම.\n\n` + 
            `⚙️විධානය: *.flame*\nℹ️විස්තර: ඔබට ඔබේ text ගිනිදැල් බවට පත් කළ හැකිය.\n\n` + 
            `⚙️විධානය: *.avenger*\nℹ️විස්තර: ඔබේ නම සමඟ Avengers logo සෑදීම.\n_(Ex: .avenger Queen/Amdi)_\n\n` + 
            `⚙️විධානය: *.harrypoter*\nℹ️විස්තර: ඔබට හැරීපොටර් වර්ගයේ logo සෑදිය හැකිය.\n\n` + 
            `⚙️විධානය: *.dota*\nℹ️විස්තර: ඔබේ නම සමඟ DOTA logo සෑදිය හැකිය.\n\n` + 
            `⚙️විධානය: *.lol*\nℹ️විස්තර: ඔබේ නම සමඟ LEAGUE OF LEGENDS logo සෑදිය හැකිය.\n\n` + 
            `⚙️විධානය: *.aov*\nℹ️විස්තර: ඔබේ නම සමඟ Arena Of Valor logo සෑදිය හැකිය.\n\n` + 
            `⚙️විධානය: *.ml*\nℹ️විස්තර: ඔබේ නම සමඟ Mobile Legends logo සෑදිය හැකිය.\n\n` + 
            `⚙️විධානය: *.valorant*\nℹ️විස්තර: ඔබේ නම සමඟ valorant logo සෑදිය හැකිය. \n_(Ex: .valorant QueenAmdi/Facebook/Twitter)_\n\n` + 
            `⚙️විධානය: *.lionlogo*\nℹ️විස්තර: ඔබේ නම සමඟ lion logo සෑදීම.\n_(Ex: .lionlogo Queen/Amdi)_\n\n` + 
            `⚙️විධානය: *.metal*\nℹ️විස්තර: ඔබේ නම සමඟ iron logo සෑදීම.\n\n` + 
            `⚙️විධානය: *.pornhub*\nℹ️විස්තර: එය සපයා ඇති text කළු පැහැති තැඹිලි පාට රූපයක් යවයි.\nඔබ පිළිවෙලින් */* මගින් වෙන් කර ඇති top සහ bottom text ඇතුළත් කළ යුතුය.\n\n` + 
            `⚙️විධානය: *.sandwriting*\nℹ️විස්තර: එය සපයා ඇති textයේ වැලි රූපයක් යවයි.\n\n` + 
            `⚙️විධානය: *.vintage*\nℹ️විස්තර: එය සපයා ඇති textයේ buld display රූපයක් යවයි. \n_(Ex: .vintage Queen/Amdi_\n\n` + 
            `⚙️විධානය: *.bplogo*\nℹ️විස්තර: එය සපයා ඇති textයේ black pink logo යවයි.\n\n` + 
            `⚙️විධානය: *.blood*\nℹ️විස්තර: එය සපයා ඇති textයේ රුධිර රූපයක් යවයි.\n\n` + 
            `⚙️විධානය: *.thunder*\nℹ️විස්තර: එය සපයා ඇති textයේ අකුණු සහිත රූපයක් යවයි.\n\n` + 
            `⚙️විධානය: *.snow*\nℹ️විස්තර: එය සපයා ඇති textයේ හිම රූපයක් යවයි.\n\n` + 
            `⚙️විධානය: *.light*\nℹ️විස්තර: එය සපයා ඇති textයේ light effect යවයි.\n\n` + 
            `⚙️විධානය: *.cloud*\nℹ️විස්තර: එය සපයා ඇති textයේ අහස රූපයක් යවයි.\n\n` + 
            `⚙️විධානය: *.sparkling*\nℹ️විස්තර: Text දීප්තිමත් තේමා රූපයක් බවට පරිවර්තනය කරයි\nඔබ පිළිවෙලින් */* මගින් වෙන් කර ඇති top සහ bottom text ඇතුළත් කළ යුතුය.\n\n` + 
            `⚙️විධානය: *.watercolour*\nℹ️විස්තර: Text ජල වර්ණ තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n` + 
            `⚙️විධානය: *.neonlight*\nℹ️විස්තර: Text නියොන් ආලෝක තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n` + 
            `⚙️විධානය: *.gneon*\nℹ️විස්තර: Text green neon ආලෝක තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n` + 
            `⚙️විධානය: *.3dtext*\nℹ️විස්තර: ලබා දී ඇති text ත්රිමාණ විලාසිතාවේ රූපයක් බවට පරිවර්තනය කරයි.\n\n` + 
            `⚙️විධානය: *.v3d*\nℹ️විස්තර: සපයා ඇති text violet ත්රිමාණ විලාසිතාවේ රූපයක් බවට පරිවර්තනය කරයි.\n\n` + 
            `Check github for bot:  https://github.com/BlackAmda/QueenAmdi`
       , MessageType.text);
        
    }));
}

else if (Config.WORKTYPE == 'public') {

    Asena.addCommand({pattern: 'effectimg', fromMe: true, desc: EFFECT_DESC}, (async (message, match) => {    
    
        await message.client.sendMessage(message.jid, 
                `💠📃 ● *Text සිට Image Effect List* ● 📃💠\n\n` + 
                `⚙️විධානය: *.glitch*\nℹ️විස්තර: Text සිට Tiktok glitch effect.\n_(Ex: .glitch Queen/Amdi)_\n\n` + 
                `⚙️විධානය: *.pemoji*\nℹ️විස්තර: Emoji සිට පින්තූරයට.\n\n` + 
                `⚙️විධානය: *.hacker*\nℹ️විස්තර: ඔබේ නම සමඟ hacker wallpaper සෑදීම.\n\n` + 
                `⚙️විධානය: *.gaming*\nℹ️විස්තර: ඔබේ නම සමඟ gaming logo සෑදීම.\n\n` + 
                `⚙️විධානය: *.fpslogo*\nℹ️විස්තර: ඔබේ නම සමඟ fps gaming logo සෑදීම.\n\n` + 
                `⚙️විධානය: *.shadow*\nℹ️විස්තර: ඔබේ text සඳහා සෙවනැලි effect wallpaper සෑදිය හැකිය.\n\n` + 
                `⚙️විධානය: *.grafiti*\nℹ️විස්තර: ඔබේ text සඳහා grafiti wallpaper සෑදිය හැකිය.\n\n` + 
                `⚙️විධානය: *.cup*\nℹ️විස්තර: ඔබට ඔබේ text කෝප්පයක් මත ටයිප් කළ හැකිය.\n\n` + 
                `⚙️විධානය: *.wolfm*\nℹ️විස්තර: ලෝහමය වෘක බැනරයකින් ඔබේ text ටයිප් කළ හැකිය.\n\n` + 
                `⚙️විධානය: *.fflogo*\nℹ️විස්තර: ඔබේ නම සමඟ Free Fire logo සෑදීම.\n\n` + 
                `⚙️විධානය: *.flame*\nℹ️විස්තර: ඔබට ඔබේ text ගිනිදැල් බවට පත් කළ හැකිය.\n\n` + 
                `⚙️විධානය: *.avenger*\nℹ️විස්තර: ඔබේ නම සමඟ Avengers logo සෑදීම.\n_(Ex: .avenger Queen/Amdi)_\n\n` + 
                `⚙️විධානය: *.harrypoter*\nℹ️විස්තර: ඔබට හැරීපොටර් වර්ගයේ logo සෑදිය හැකිය.\n\n` + 
                `⚙️විධානය: *.dota*\nℹ️විස්තර: ඔබේ නම සමඟ DOTA logo සෑදිය හැකිය.\n\n` + 
                `⚙️විධානය: *.lol*\nℹ️විස්තර: ඔබේ නම සමඟ LEAGUE OF LEGENDS logo සෑදිය හැකිය.\n\n` + 
                `⚙️විධානය: *.aov*\nℹ️විස්තර: ඔබේ නම සමඟ Arena Of Valor logo සෑදිය හැකිය.\n\n` + 
                `⚙️විධානය: *.ml*\nℹ️විස්තර: ඔබේ නම සමඟ Mobile Legends logo සෑදිය හැකිය.\n\n` + 
                `⚙️විධානය: *.valorant*\nℹ️විස්තර: ඔබේ නම සමඟ valorant logo සෑදිය හැකිය. \n_(Ex: .valorant QueenAmdi/Facebook/Twitter)_\n\n` + 
                `⚙️විධානය: *.lionlogo*\nℹ️විස්තර: ඔබේ නම සමඟ lion logo සෑදීම.\n_(Ex: .lionlogo Queen/Amdi)_\n\n` + 
                `⚙️විධානය: *.metal*\nℹ️විස්තර: ඔබේ නම සමඟ iron logo සෑදීම.\n\n` + 
                `⚙️විධානය: *.pornhub*\nℹ️විස්තර: එය සපයා ඇති text කළු පැහැති තැඹිලි පාට රූපයක් යවයි.\nඔබ පිළිවෙලින් */* මගින් වෙන් කර ඇති top සහ bottom text ඇතුළත් කළ යුතුය.\n\n` + 
                `⚙️විධානය: *.sandwriting*\nℹ️විස්තර: එය සපයා ඇති textයේ වැලි රූපයක් යවයි.\n\n` + 
                `⚙️විධානය: *.vintage*\nℹ️විස්තර: එය සපයා ඇති textයේ buld display රූපයක් යවයි. \n_(Ex: .vintage Queen/Amdi_\n\n` + 
                `⚙️විධානය: *.bplogo*\nℹ️විස්තර: එය සපයා ඇති textයේ black pink logo යවයි.\n\n` + 
                `⚙️විධානය: *.blood*\nℹ️විස්තර: එය සපයා ඇති textයේ රුධිර රූපයක් යවයි.\n\n` + 
                `⚙️විධානය: *.thunder*\nℹ️විස්තර: එය සපයා ඇති textයේ අකුණු සහිත රූපයක් යවයි.\n\n` + 
                `⚙️විධානය: *.snow*\nℹ️විස්තර: එය සපයා ඇති textයේ හිම රූපයක් යවයි.\n\n` + 
                `⚙️විධානය: *.light*\nℹ️විස්තර: එය සපයා ඇති textයේ light effect යවයි.\n\n` + 
                `⚙️විධානය: *.cloud*\nℹ️විස්තර: එය සපයා ඇති textයේ අහස රූපයක් යවයි.\n\n` + 
                `⚙️විධානය: *.sparkling*\nℹ️විස්තර: Text දීප්තිමත් තේමා රූපයක් බවට පරිවර්තනය කරයි\nඔබ පිළිවෙලින් */* මගින් වෙන් කර ඇති top සහ bottom text ඇතුළත් කළ යුතුය.\n\n` + 
                `⚙️විධානය: *.watercolour*\nℹ️විස්තර: Text ජල වර්ණ තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n` + 
                `⚙️විධානය: *.neonlight*\nℹ️විස්තර: Text නියොන් ආලෝක තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n` + 
                `⚙️විධානය: *.gneon*\nℹ️විස්තර: Text green neon ආලෝක තේමා රූපයක් බවට පරිවර්තනය කරයි.\n\n` + 
                `⚙️විධානය: *.3dtext*\nℹ️විස්තර: ලබා දී ඇති text ත්රිමාණ විලාසිතාවේ රූපයක් බවට පරිවර්තනය කරයි.\n\n` + 
                `⚙️විධානය: *.v3d*\nℹ️විස්තර: සපයා ඇති text violet ත්රිමාණ විලාසිතාවේ රූපයක් බවට පරිවර්තනය කරයි.\n\n` + 
                `Check github for bot:  https://github.com/BlackAmda/QueenAmdi`
           , MessageType.text,{quoted: message.data});
    }));
}