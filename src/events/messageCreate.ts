const { BOT_PREFIX } = process.env
import { fetchGuild, fetchPermission } from '../db/Mongo.js'
const prefix = BOT_PREFIX

export default {
    name: 'messageCreate',
    async execute(message) {
        await fetchGuild(message.guild.id)

        const client = message.client
        if (message.content.includes('daddy meat')) {
            return message.reply(
                'What the fuck did you just fucking say about me, you НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ? I’ll have you know I graduated top of my class in the 👌👀 good shit go౦ԁ sHit👌 academy, and I’ve been involved in numerous secret raids on 👎Baaddd ShIT👎👎👎 👎, and I have over 300 confirmed (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ)👌👀. I am trained in 👌👀👌👀👌👀👌👀👌👀 warfare and I’m the top shiter in the entire US armed mMMMMᎷМ💯 👌. You are nothing to me but just another Baaa AaAadDddD Sh1t 👎. I will wipe you the fuck out with precision the likes of which has never been seen before on this Earth, 💯 thats what im talking about right there right there . You think you can get away with saying that shit to me over the Internet? Think again, fucker. As we speak I am contacting my secret network of go౦ԁ sHit👌 across the USA and your IP is being traced right👌👌there👌👌👌 right✔there ✔, so ✔if i do ƽaү so my self 💯 i say so 💯, you better prepare for the storm, НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ👌. The storm that wipes out the pathetic little thing you call your life. You’re fucking dead, kid. I can be anywhere, anytime, I could be right👌👌there👌👌👌 right✔there ✔ and I can kill you in over seven hundred ways, and that’s just with my bare (chorus: ʳᶦᵍʰᵗ ᵗʰᵉʳᵉ). Not only am I extensively trained in mMMMMᎷМ💯 👌 combat, but I have access to the entire arsenal of the United States 👌 👌👌 👌 💯 👌 👀 👀 👀 👌👌Good shit Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little BAAaAaAaAd shit. If only you could have known what unholy retribution your little “clever” comment was about to bring down upon you, maybe you would have held your fucking 👌👌shit. But you couldn’t, you didn’t, and now you’re paying the price, you goddamn idiot. I will shit fury all over you and you will drown in it. You’re fucking dead, НO0ОଠOOOOOОଠଠOoooᵒᵒᵒᵒᵒᵒᵒᵒᵒ👌 👌👌 👌 💯 👌 👀 👀 .'
            )
        }
        if (message.author.bot || message.content.indexOf(prefix) != 0) return

        const args = message.content.slice(prefix.length).trim().split(/ +/)
        const command = args.shift().toLowerCase()

        if (!client.commands.has(command) || !client.commands.get(command).data.secret) return

        try {
            client.commands.get(command).execute(message, args)
        } catch (e) {
            console.error(e)
            message.reply("I couldn't execute the command. Check the console for details.")
        }
    },
}
