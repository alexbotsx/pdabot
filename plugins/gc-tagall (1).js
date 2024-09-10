let handler = async(m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
  global.dfail('admin', m, conn)
  throw false
  }
  let pesan = args.join` `
  let oi = `➜ 𝗠𝗘𝗡𝗦𝗔𝗝𝗘: ${pesan}`
  let teks = `✨INVOCANDO AL GRUPO✨

* 🛍️ Adquiere el bot con
⋆ wa.me/+528130533518\n\n↳ ${oi}\n\n↳ ➜ 𝗘𝗧𝗜𝗤𝗨𝗘𝗧𝗔:\n`
  for (let mem of participants) {
  teks += `･🥷 @${mem.id.split('@')[0]}\n`}
  teks += `➜ 𝐏𝐃𝐀 𝐁𝐎𝐓ᴛ`
  conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, )
  }
  handler.help = ['tagall <mesaje>','invocar <mesaje>']
  handler.tags = ['group']
  handler.command = /^(tagall|invocar|invocacion|todos|invocación)$/i
  handler.admin = true
  handler.group = true
  export default handler