
const TeleBot = require('telebot');

const bot = new TeleBot({
    token: '974224497:AAFRZ-Nx-FeEGTf1mI1hOGq30d303er98f4' // Telegram Bot API token.
});

bot.on('/start', function (msg) {
  return bot.sendMessage(msg.from.id, "Hello world!");
});

bot.start();
