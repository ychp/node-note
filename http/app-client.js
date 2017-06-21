const http = require('http')

process.env.PORT = 8091

const server = http.createServer(function(request, response) {
    console.log(`${request.method} ${request.url}`)
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.end('<h1>Hello world!</h1>');
})

server.listen(process.env.PORT)
console.log(`Server is running at http://127.0.0.1:${process.env.PORT}/`)