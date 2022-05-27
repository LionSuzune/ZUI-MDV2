const fs = require("fs")
const chalk = require("chalk")

// Other
global.thum = "https://telegra.ph/file/b1e36a5a0566b21a54c45.jpg"
global.log0 = fs.readFileSync("./media/fenzo.jpg")
global.err4r = "https://telegra.ph/file/e5439b41c0e1b580be50f.jpg"
global.owner = ['62887433094409','6285795586847','6288289252040','6285795586847','62887433094409','6288289252040','6285795586847','6285795586847','6285795586847','6285795586847','6288289252040','6288289252040','62887433094409','62887433094409','62887433094409','6285795586847','6285795586847','6285795586847','6288289252040','6288289252040','6288289252040','62887433094409','62887433094409','62887433094409','62887433094409','6285795586847','6285795586847','6285795586847','6288289252040','6285795586847','6288289252040','62887433094409','62887433094409','62887433094409','62887433094409','62887433094409']
global.lolhuman = "RINTISAJA" 
global.rkyt = []
global.banUser = ['6281366679021@s.whatsapp.net']
global.ntilink = ['120363043965529911@g.us','120363022988111568@g.us']
global.wlcm = []
global.gcrevoke = ['19054091487-1424650263@g.us']
global.packname = "© LION||60+🇲🇾\nim Form Malaysia "
global.packname2 = "LionSuzune\n OwnerPack :0887433094409👿"
global.author = "LionSzn"
global.sessionName = "Lion"
global.linkgrupss = "https://chat.whatsapp.com/GStM13Ktxr085ubmy1EMKN"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner Bot',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: '_SEDANG PROSES YAK_',
    linkm: 'Linknya Mana Kak?',
    ban: 'Kamu telah dibanned oleh owner, Jika ingin di unbanned chat owner'
}
global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}
// Beli Di Zenz Yo
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// Isi Api Mu Di sini
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}
//Thank Fax Bot
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})