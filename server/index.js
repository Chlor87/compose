let http   = require('http'),
    server = http.createServer((req, res) => {
      res.end('Hello dupa.')
    })

server.listen(8080, () => {
  console.log(`Server listening on ${server.address().port}`)
})
