
const TeleBot = require('telebot');
const token = require('./token.js');

const bot = new TeleBot(token);

function sendHello(msg) {
  return bot.sendMessage(msg.from.id, "Hello! I'm unique_test_bot", {replyToMessage: msg.message_id, notification: false});
}

function stopServer(msg) {
  console.log("stopping bot after user input");
  bot.sendMessage(msg.from.id, "stopping bot after user input");
  setTimeout(process.exit, 1000);
}

bot.on('/start', sendHello);
bot.on('/stop', stopServer);
bot.on('/logo', (msg) => bot.sendPhoto(msg.from.id, "logo original 400x400.png"))

bot.start();
