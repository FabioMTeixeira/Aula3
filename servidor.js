const http = require('http');

http.createServer((request, response) => {
    response.writeHead(200);

    const date = new Date();
    response.end(`Sucesso ${date}`);
}).listen(8000);

console.log('Servidor rodando.')