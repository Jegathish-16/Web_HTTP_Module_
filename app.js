const http = require('http')
const dateTimeModule = require('./myDateModule')

http.createServer((request, response) => {
    response.writeHead(200, {'Content-Type':'text/html'})
    //response.write("hello-world")
    response.write(dateTimeModule.currentDateTime())

    response.end()


}).listen(8081)
//console.log('Server started running at http://localhost:8081/')
