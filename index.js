const http = require('http');
const emoji = require("node-emoji");

http.createServer((request, response) => {
    response.write((emoji.emojify('I ❤️ Jesus, ') + (" "+"He is the way, the truth, and  the life")));
    response.write((emoji.random().emoji))
    response.write("praise the Lord!");
    response.end();
    }).listen(8001);


