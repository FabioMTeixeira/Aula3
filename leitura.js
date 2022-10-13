const fs = require('fs');
const { Http2ServerRequest } = require ('http2');

console.log('Início');

fs.readFile('./config.json', (err, data) => {
    console.log(data.toString());
})

console.log('Fim');
