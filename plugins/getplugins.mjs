import { readFileSync } from 'fs'
let handler = async (m, { usedPrefix, command, text }) => {
    let ar = Object.keys(plugins)
    let ar1 = ar.map(v => v.replace('.mjs', ''))
    if (!text) throw `uhm.. teksnya mana?\n\ncontoh:\n${usedPrefix + command} creator`
    if (!ar1.includes(text)) return m.reply(`'${text}' tidak ditemukan!\n\n${ar1.map(v => ' ' + v).join`\n`}`)
    m.reply(readFileSync('./plugins/' + text + '.mjs', 'utf-8'))
}
handler.help = ['getplugin'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(getplugin|gp)$/i

handler.owner = true

export default handler
