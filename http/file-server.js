const http = require('http')
const url = require('url')
const path = require('path')
const fs = require('fs')

process.env.PORT = 8091
process.env._FILE_ROOT_PATH_ = '.'
const root = path.resolve(process.env._FILE_ROOT_PATH_ || '.')

const server = http.createServer(function(request, response) {
    console.log(`${request.method} ${request.url}`)
    const urlObj = url.parse(request.url)
    const fileName = path.join(root, urlObj.pathname)
    fs.stat(fileName, function(err, state) {
        if(err) {
            if(err.errno != -2){
                console.log(err)
            } else {
                console.log(`${fileName} file not exist`)
            }
            response.writeHead(500, {'Content-Type': 'text/html'})
            response.end(`${err.message}`)
        } else {
            if(state.isFile()) {
                response.writeHead(200)
                fs.createReadStream(fileName).pipe(response)
            } else {
                console.log(`${fileName} file not exist`)
                response.writeHead(404, {'Content-Type': 'text/html'})
                response.end('<h1>404 NOT FOUND</h1>')
            }
        }
    })
})

server.listen(process.env.PORT)
console.log(`Server is running at http://127.0.0.1:${process.env.PORT}/`)