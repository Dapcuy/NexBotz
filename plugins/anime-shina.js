import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api.zeeoneofc.xyz/api/anime/shiina?apikey=3JE7TvJt'
	conn.sendButton(m.chat, 'Waifu nya om (≧ω≦)', wm, await(await fetch(url)).buffer(), [['🔁Next🔁',`.${command}`]],m)
}
handler.command = /^(shina)$/i
handler.tags = ['anime']
handler.help = ['shina']
handler.premium = false
handler.limit = true

export default handler
