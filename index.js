const TelegramApi = require('node-telegram-bot-api');

const token = '5351228968:AAH1yEGp9ZxbBZ14GO5O2a1vH8Uq5S3dq5w'

const bot = new TelegramApi(token, {polling: true}); 
bot.on(Event = 'message', listeners = msg => {
    console.log(msg)
})
