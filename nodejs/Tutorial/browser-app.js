const http = require('http')
const { readFileSync } = require('fs')

const file = readFileSync('./navbar/index.html')
const filestyle = readFileSync('./navbar/index.css')
const filejavas = readFileSync('./navbar/index.js')
const fileimg = readFileSync('./navbar/logo.svg')

const server = http.createServer((req, res) => {
    const url = req.url

    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write(file)
        res.end()
    }
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' })
        res.write('<h1>this is about</h1>')
        res.end()
    }
    else if (url === '/index.css') {
        res.writeHead(200, { 'content-type': 'text/css' })
        res.write(filestyle)
        res.end()
    }
    else if (url === '/index.js') {
        res.writeHead(200, { 'content-type': 'text/js' })
        res.write(filejavas)
        res.end()
    }
    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' })
        res.write(fileimg)
        res.end()
    }
    res.end()
})

server.listen(5500)