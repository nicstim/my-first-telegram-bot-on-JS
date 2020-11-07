const Telegraf = require('telegraf')

const bot = new Telegraf("1266978722:AAH3RbhiDxHmlILDEBJ_IQNwRYm3anUhu-Y")
bot.start((ctx) => ctx.reply('Добро пожаловать!\n/help'))
bot.help((ctx) => ctx.reply('Отправь мне стикер'))
bot.on('sticker', (ctx) => ctx.reply('Здорово!'))
bot.hears('Как дела?', (ctx) => ctx.reply('Хорошо , а у тебя?'))
bot.launch()
