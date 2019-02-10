const TelegramBot = require('node-telegram-bot-api')
const os = require('os')

const bot = new TelegramBot('722737383:AAEi59ATQGcviFdyVhpK898ef7SgsljB00c', {polling: true})

bot.on('message', msg => {
    bot.sendMessage(msg.chat.id, 'Hello from ${os.type()}, bot says hi to "${msg.from.first_name}"')
})