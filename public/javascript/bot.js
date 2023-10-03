const express = require('express');
const bodyParser = require('body-parser');
const TelegramBot = require('node-telegram-bot-api');

const app = express();
const port = process.env.PORT || 3001;
const botToken = '1423124705:AAFt9ectFUAYs0Y8WPyUyvbRkS5IRAxj4g4'; // Замените на свой токен
const chatId = '853572595'; // Замените на chat_id получателя сообщения

const bot = new TelegramBot(botToken, { polling: true });

app.use(bodyParser.json());

// Обработка команды /start
bot.onText(/\/start/, (msg) => {
    const userId = msg.chat.id;
    const message = 'Добро пожаловать! Ваш chat_id: ' + userId;
    bot.sendMessage(userId, message);
});

app.post('/send-message', (req, res) => {
    const { message } = req.body;

    if (!message) {
        return res.status(400).json({ error: 'Message is required' });
    }

    bot.sendMessage(chatId, message);
    res.status(200).json({ success: true });
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});