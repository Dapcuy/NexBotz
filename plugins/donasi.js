import fs from 'fs';
let handler = async (m, { conn, text, usedPrefix }) => {

    let img = fs.readFileSync('./thumbnail.jpg');
    let img2 = `https://telegra.ph/file/480e5ecf2b7c2cd2af96d.jpg`
    return conn.sendButton(m.chat, 'Pm Owner aja khusus dana dll \n❏ https://wa.me/6285846630580 \n❏ https://saweria.co/dapcuy', 'Makasih, thanks for you donate...', img2, [["MENU", usedPrefix + "menu"], ["OWNER", usedPrefix + "owner"]], m, {
        contextInfo: {
            externalAdReply: {
                mediaUrl: "https://www.instagram.com/dpcuy_",
                mediaType: "VIDEO",
                title: 'Donasi To Yobots ',
                body: bottime,
                previewType: 0,
                thumbnail: img
            }
        }
    })
}
handler.help = ['donasi']

handler.tags = ['info']

handler.command = /^(donasi|donate)$/i


export default handler