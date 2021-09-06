const http = require('http')
const hostName = 'localhost'
const PORT = 3001
const server = http.createServer((req,res) =>{
    console.log(req.headers)
    res.setHeader('Content-Type','text/html')
    res.end('<html><body><h1>Hello world</h1></body></html>')
})
server.listen(PORT, hostName,() =>{
    console.log(`Server is running on http://${hostName}:${PORT}`)
})
