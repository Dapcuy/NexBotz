import fetch from 'node-fetch'
let handler = async (m, { conn, usedPrefix, text, args, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(who)

let vcard = `BEGIN:VCARD\nVERSION:3.0\nN:WhatsApp;NexEp\nNICKNAME:👑 Owner YoBots\nORG:Dapcuy\nTITLE:soft\nitem1.TEL;waid=6285846630580:+62 858-4663-0580\nitem1.X-ABLabel:📞 Nomor Owner\nitem2.URL:https://chat.whatsapp.com/Ix7Ug8oRwb1EHzTX4Vb17O\nitem2.X-ABLabel:💬 More\nitem3.EMAIL;type=INTERNET: dapcuy1@gmail.com\nitem3.X-ABLabel:💌 Mail Owner NexBotz\nitem4.ADR:;;🇮🇩 Indonesia;;;;\nitem4.X-ABADR:💬 More\nitem4.X-ABLabel:📍 Lokasi Saya\nBDAY;value=date:🔖 11 Juli 2002\nEND:VCARD`
const tag_own = await conn.sendMessage(m.chat, { contacts: { displayName: wm, contacts: [{ vcard }] }}, { quoted: fkon })
let caption = `👋 Hai *${name} @${who.split("@")[0]}*, Nih Owner *${conn.user.name}* kak`
    await conn.reply(m.chat, caption, tag_own, { mentions: conn.parseMention(caption) })

}
handler.help = ['owner', 'creator']
handler.tags = ['info']

handler.command = /^(owner|pengembang|creator)$/i

export default handler
