const express = require('express');
const path = require('path');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const port = process.env.PORT || 3000;

const BOT_TOKEN = '7930642338:AAHsFK0DN9vLYUcTvrW8Dtr82m3GUnebGfk';

const bot = new TelegramBot(BOT_TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
    const chatId = msg.chat.id;

    bot.sendMessage(chatId, 'Запустите веб-приложение', {
        reply_markup: {
            inline_keyboard: [
                [{ text: 'Открыть приложение', web_app: { url: 'https://tg-mini-29qkkltj5-mxms-projects.vercel.app/' } }]
            ]
        }
    });
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
