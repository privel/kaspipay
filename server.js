const express = require('express');
const axios = require('axios');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const TELEGRAM_TOKEN = '1423124705:AAFt9ectFUAYs0Y8WPyUyvbRkS5IRAxj4g4';
const TELEGRAM_CHAT_ID = '-1001846937083';


app.use(bodyParser.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/ind.html');
});

app.post('/send-message', (req, res) => {
    const message = req.body.message;

    axios.post(`https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`, {
        chat_id: TELEGRAM_CHAT_ID,
        text:  message 
    })
    .then(response => {
        res.status(200).send('Сообщение отправлено!');
    })
    .catch(error => {
        console.error('Error:', error);
        res.status(500).send('Ошибка при отправке сообщения.');
    });
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
